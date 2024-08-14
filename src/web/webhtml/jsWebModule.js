//
//  JSWebModule.js
//  TeamSpaceApp
//
//  Copyright © 2017 Microsoft Corporation. All rights reserved.
//

// Custom namespace where all the bridging functionality resides
window.teams = window.teams || {};
window.teams.messageHandlers = window.teams.messageHandlers || {};

window.nativeClientInterface = {
  callbacks: {},
  handlers: {},

  logType: {
    LogInfo: 1,
    LogError: 2,
    LogWarning: 3,
  },

  localHandlerMap: {
    setUpViews: "setModuleView",
    setNavBarMenu: "navBarMenuItemPress",
    showActionMenu: "actionMenuItemPress",
  },

  setupBackButtonHandler: function () {
    this.handlers["backButtonPress"] = () => {
      this.log(
        "JSWebModule: backButtonPress handler called",
        this.logType.LogInfo
      );
      this.postSdkResponseWithFunc(window, "backButtonPress", null);
    };
  },

  setupSaveSettingsHandler: function () {
    this.handlers["settings.save"] = () => {
      this.log(
        "JSWebModule: settings.save handler called",
        this.logType.LogInfo
      );
      this.postSdkResponseWithFunc(window, "settings.save", null);
    };
  },

  setupRemoveSettingsHandler: function () {
    this.handlers["settings.remove"] = () => {
      this.log(
        "JSWebModule: settings.remove handler called",
        this.logType.LogInfo
      );
      this.postSdkResponseWithFunc(window, "settings.remove", null);
    };
  },

  // API to fake window message handle for old hosting
  postMessage: function (event) {
    if (!event) {
      this.log("Invalid event", this.logType.LogError);
    }

    let sourceWindow = window;
    let request = new this.sdkRequest(event.id, event.func, event.args);
    this.processMessageRequest(sourceWindow, request);
  },

  // API to window message handle for old hosting
  postWindowMessage: function (event) {
    if (!event || !event.data) {
      this.log("Invalid event", this.logType.LogError);
    }
    let request = new this.sdkRequest(
      event.data.id,
      event.data.func,
      event.data.args
    );
    this.processMessageRequest(event.source, request);
  },

  // API to window message handle
  framelessPostMessage: function (event) {
    jsonValue = {}
    if(typeof event === "string") {
      jsonValue = JSON.parse(event)
    } else if(typeof event === "object") {
      jsonValue = event
    }
    this.postMessage(jsonValue);
  },

  // MessageRequest object processing API
  processMessageRequest: function (sourceWindow, request) {
    // Uncomment to debug log the request object
    // this.debugLog(request);

    if (!this.isValidSdkRequest(request)) {
      return;
    }

    if (request.func === "initialize") {
      this.log("JSWebModule: initialize event received", this.logType.LogInfo);
      this.callbacks[request.id] = (frameContext) => {
        this.postSdkResponseWithId(sourceWindow, request.id, [
          frameContext,
          "android",
        ]);
      };
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
        })
      );
    } else if (request.func === "getContext") {
      this.log("JSWebModule: getContext event received", this.logType.LogInfo);
      this.callbacks[request.id] = (encodedContext) => {
        this.log(
          "JSWebModule: getContext callback called",
          this.logType.LogInfo
        );
        if (typeof encodedContext === "string") {
          let decodedContext = window.atob(encodedContext);
          let context = JSON.parse(decodedContext);
          this.postSdkResponseWithId(sourceWindow, request.id, [context]);
        } else {
          this.log(
            "JSWebModule: Failed to get context",
            this.logType.LogWarning
          );
        }
      };
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
        })
      );
    } else if (request.func === "authentication.authenticate.success") {
      this.log(
        "JSWebModule: authentication.authenticate.success event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "authentication.authenticate.failure") {
      this.log(
        "JSWebModule: authentication.authenticate.failure event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "authentication.authenticate") {
      this.log(
        "JSWebModule: authentication.authenticate event received",
        this.logType.LogInfo
      );
      this.callbacks[request.id] = (encodedResult) => {
        this.log(
          "JSWebModule: authentication.authenticate callback called",
          this.logType.LogInfo
        );
        if (typeof encodedResult === "string") {
          let decodedResult = window.atob(encodedResult);
          let result = JSON.parse(decodedResult);
          if ("reason" in result) {
            this.postSdkResponseWithId(sourceWindow, request.id, [
              false,
              result["reason"],
            ]);
            this.log(
              "JSWebModule: authentication.authenticate callback failure posted",
              this.logType.LogInfo
            );
          } else if ("token" in result) {
            this.postSdkResponseWithId(sourceWindow, request.id, [
              true,
              result["token"],
            ]);
            this.log(
              "JSWebModule: authentication.authenticate callback success posted",
              this.logType.LogInfo
            );
          } else {
            this.postSdkResponseWithId(sourceWindow, request.id, [
              true,
              result,
            ]);
            this.log(
              "JSWebModule: authentication.authenticate callback success posted",
              this.logType.LogInfo
            );
          }
        }
      };
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "authentication.getAuthToken") {
      this.log(
        "JSWebModule: authentication.getAuthToken event received",
        this.logType.LogInfo
      );

      let resource;
      if (
        request.args.length == 0 ||
        !Array.isArray(request.args[0]) ||
        request.args[0].length == 0 ||
        typeof request.args[0][0] !== "string"
      ) {
        resource = null;
      } else {
        resource = request.args[0][0];
      }

      this.callbacks[request.id] = (token) => {
        this.log(
          "JSWebModule: get AuthToken callback called",
          this.logType.LogInfo
        );
        if (typeof token === "string") {
          if (token === "ResourceError") {
            this.log(
              "JSWebModule: Failed to get auth token due to resource error",
              this.logType.LogWarning
            );
            this.postSdkResponseWithId(sourceWindow, request.id, [
              false,
              "Failed to get auth token due to resource error",
            ]);
          } else if (token === "ADALError") {
            this.log(
              "JSWebModule: Failed to get auth token due to ADAL error",
              this.logType.LogWarning
            );
            this.postSdkResponseWithId(sourceWindow, request.id, [
              false,
              "Failed to get auth token due to ADAL error",
            ]);
          } else if (token === "UserCancellationError") {
            this.log(
              "JSWebModule: Failed to get auth token due to user cancellation of consent flow",
              this.logType.LogWarning
            );
            this.postSdkResponseWithId(sourceWindow, request.id, [
              false,
              "Failed to get auth token due to user cancellation of consent flow",
            ]);
          } else {
            this.log(
              "JSWebModule: Fetched auth token successfully",
              this.logType.LogInfo
            );
            this.postSdkResponseWithId(sourceWindow, request.id, [true, token]);
          }
        }
      };
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: resource,
        })
      );
    } else if (request.func === "openFilePreview") {
      this.log(
        "JSWebModule: openFilePreview event received",
        this.logType.LogInfo
      );

      let fileName = request.args[1];
      let fileType = request.args[3];
      let fileUrl = request.args[4];
      let fileDownloadUrl = request.args[5];
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          fileDownloadUrl: fileDownloadUrl,
          fileName: fileName,
          fileType: fileType,
          fileUrl: fileUrl,
        })
      );
    } else if (
      request.func === "setUpViews" ||
      request.func == "setNavBarMenu"
    ) {
      this.log(
        "JSWebModule: " + request.func + " event received",
        request.func,
        this.logType.LogInfo
      );

      this.addHandler(this.localHandlerMap[request.func], sourceWindow);
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func == "showActionMenu") {
      this.log(
        "JSWebModule: " + request.func + " event received",
        request.func,
        this.logType.LogInfo
      );

      this.addHandler(this.localHandlerMap[request.func], sourceWindow);
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          actionMenuParams: request.args[0],
          resource: request.args[1],
        })
      );
    } else if (
      request.func == "handleNavBarMenuItemPress" ||
      request.func == "viewConfigItemPress" ||
      request.func == "handleActionMenuItemPress"
    ) {
      this.log(
        "JSWebModule: " + request.func + " event received",
        request.func,
        this.logType.LogInfo
      );
    } else if (request.func == "tasks.startTask") {
      this.log("JSWebModule: startTask event received", this.logType.LogInfo);
      this.callbacks[request.id] = (result) => {
        let jsonObject = null;

        if (typeof result == "object") {
          jsonObject = json;
        } else {
          try {
            jsonObject = JSON.parse(result);
          } catch (e) {
            jsonObject = "{}";
          }
        }
        this.log(
          "JSWebModule: startTask callback called",
          this.logType.LogInfo
        );
        this.postSdkResponseWithId(sourceWindow, request.id, [
          null,
          jsonObject,
        ]);
      };
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func == "tasks.submitTask") {
      this.log("JSWebModule: submitTask event received", this.logType.LogInfo);
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func == "tasks.completeTask") {
      this.log(
        "JSWebModule: completeTask event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func == "navigateBack") {
      this.log(
        "JSWebModule: navigateBack event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "settings.setValidityState") {
      this.log(
        "JSWebModule: settings.setValidityState event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "settings.getSettings") {
      this.log(
        "JSWebModule: settings.getSettings event received",
        this.logType.LogInfo
      );
      this.callbacks[request.id] = (encodedSettings) => {
        this.log(
          "JSWebModule: settings.getSettings callback called",
          this.logType.LogInfo
        );
        if (typeof encodedSettings === "string") {
          let decodedSettings = window.atob(encodedSettings);
          let settings = JSON.parse(decodedSettings);
          this.postSdkResponseWithId(sourceWindow, request.id, [settings]);
        } else {
          this.log(
            "JSWebModule: Failed to get settings",
            this.logType.LogWarning
          );
        }
      };
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "settings.setSettings") {
      this.log(
        "JSWebModule: settings.setSettings event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "settings.save.success") {
      this.log(
        "JSWebModule: settings.save.success event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "settings.save.failure") {
      this.log(
        "JSWebModule: settings.save.failure event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "settings.remove.success") {
      this.log(
        "JSWebModule: settings.remove.success event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "settings.remove.failure") {
      this.log(
        "JSWebModule: settings.remove.failure event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "navigateCrossDomain") {
      this.log(
        "JSWebModule: navigateCrossDomain event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else if (request.func === "executeDeepLink") {
      this.log(
        "JSWebModule: executeDeepLink event received",
        this.logType.LogInfo
      );
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: request.func,
          requestId: request.id,
          resource: request.args[0],
        })
      );
    } else {
      this.log("JSWebModule: Unsupported event received", this.logType.LogInfo);
    }
  },

  addHandler: function (handlerName, sourceWindow) {
    this.handlers[handlerName] = (id) => {
      this.log("JSWebModule: handler called", this.logType.LogInfo);
      if (typeof id === "string") {
        this.postSdkResponseWithFunc(sourceWindow, handlerName, [id]);
      } else {
        this.log(
          "JSWebModule: Failed to call handler",
          this.logType.LogWarning
        );
      }
    };
  },

  // API that posts native MessageResponse object to the listener
  postSdkResponseWithId: function (sdkWindow, id, args) {
    let response = {
      id: id,
      args: args || [],
    };
    this.postSdkResponse(sdkWindow, response);
  },

  postSdkResponseWithFunc: function (sdkWindow, func, args) {
    let response = {
      func: func,
      args: args || [],
    };

    this.postSdkResponse(sdkWindow, response);
  },

  postSdkResponse: function (sdkWindow, response) {
    // Uncomment to debug log the response object
    // this.debugLog(response);

    if (sdkWindow == window) {
      let event = {
        data: response,
      };
      window.onNativeMessage(event);
    } else {
      window.postMessage(response, "*");
    }
  },

  log: function (info, logType) {
    // Uncomment to generate console logs.
    // console.log(info);
    window.nativeInterface.handleCallback(
      JSON.stringify({
        event: "Log",
        logType: logType,
        value: info,
      })
    );
  },

  isValidSdkRequest: function (messageRequest) {
    if (!messageRequest) {
      this.log("Invalid event", this.logType.LogError);
      return false;
    }

    if (typeof messageRequest.func !== "string") {
      this.log("Invalid event: func not specified", this.logType.LogError);
      return false;
    }

    if (typeof messageRequest.id !== "number") {
      this.log("Invalid event: id not specified", this.logType.LogError);
      return false;
    }

    if (!Array.isArray(messageRequest.args)) {
      this.log("Invalid event: args not specified", this.logType.LogError);
      return false;
    }

    return true;
  },

  sdkRequest: function (id, func, args) {
    this.id = id;
    this.func = func;
    this.args = args;
  },

  // This method is called by the native code to pass the auth token.
  handleResponseFromNative: function (response, requestId) {
    let callback = this.callbacks[requestId].bind(this);
    if (callback) {
      callback(response);
      // Remove the callback to only let the callback get called once and to free up memory.
      delete this.callbacks[requestId];
    }
  },

  handleResponseHandlerFromNative: function (response, requestId) {
    let handler = this.handlers[requestId].bind(this);
    if (handler) {
      handler(response);
    }

    this.log("JSWebModule: callback called", this.logType.LogInfo);
  },

  handleBackButtonPress: function () {
    if (typeof window.onNativeMessage == "function") {
      this.handleResponseHandlerFromNative(null, "backButtonPress");
    } else {
      window.nativeInterface.handleCallback(
        JSON.stringify({
          event: "localNavigateBack",
        })
      );
    }
  },

  handleSaveSettings: function () {
    if (typeof window.onNativeMessage == "function") {
      this.handleResponseHandlerFromNative(null, "settings.save");
    }
  },

  handleRemoveSettings: function () {
    if (typeof window.onNativeMessage == "function") {
      this.handleResponseHandlerFromNative(null, "settings.remove");
    }
  },

  debugLog: function (record) {
    let output = "";
    for (let property in record) {
      output += property + ": " + record[property] + "; ";
    }
    console.log(output);
  },

  processBacklogs: function (eventList) {
    for (let event of eventList) {
      this.framelessPostMessage(event);
    }
  },
};

// Setup back button handler on script load
window.nativeInterface.setupBackButtonHandler();
window.nativeInterface.processAllBacklogRequests();
window.nativeClientInterface.setupSaveSettingsHandler();
window.nativeClientInterface.setupRemoveSettingsHandler();
