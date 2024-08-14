; var WeixinJSCore = {
};

window = this;
NativeGlobal.findElementById = undefined;
requestAnimationFrame = NativeGlobal.requestAnimationFrame;
cancelAnimationFrame = NativeGlobal.cancelAnimationFrame;
NativeGlobal.BindingObject = NativeGlobal.Watcher;
WeixinJSCore.invokeHandler = NativeGlobal.invokeHandler;

// Bugfix: hook setTimeout / setInterval because of bug in node.js
(function(global) {
    var originSetTimeout = global.setTimeout;
    global.setTimeout = function(cb, after, ...args) {
        let func = function() { try { cb(); } catch (e) { console.error(e); } };
        return originSetTimeout(func, after, ...args);
    };
    var originSetInterval = global.setInterval;
    global.setInterval = function(cb, after, ...args) {
        let func = function() { try { cb(); } catch (e) { console.error(e); } };
        return originSetInterval(func, after, ...args);
    };
})(this);

// Canvas / Image related

(function(global) {
  let OriginCanvas = NativeGlobal.ScreenCanvas;
  var canvas = function() {
    let c = new OriginCanvas();
    c.id = c.__wid;
    return c;
  }
  NativeGlobal.Canvas = canvas;
  NativeGlobal.ScreenCanvas = canvas;
  global.ScreenCanvas = canvas;
  global.Image = NativeGlobal.Image;
})(this);

// Canvas / Image related done

// JSBridge

(function (global) {
  if (global.JSBridge) return;

  // devtools 跳过
  if (global.navigator && global.navigator.userAgent) {
    var userAgent = global.navigator.userAgent;
    if (userAgent.indexOf('appservice') > -1 || userAgent.indexOf('wechatdevtools') > -1) {
      return;
    }
  }

  var isWebView = global.hasOwnProperty('document');
  var isIosWebView = false;

  var invokeCallbacks = {};
  var invokeCallbackId = 0;

  var onCallbacks = {};

  var customEventPrefix = 'custom_event_';
  var subscribeCallbacks = {};

  if (isWebView) {
    var userAgent = global.navigator.userAgent;
    var isAndroidWebView = userAgent.indexOf('Android') != -1;
    isIosWebView = !isAndroidWebView;
  }

  var _invokeHandler = function (event, paramsString, callbackId) {
    if (isIosWebView) {
      global.webkit.messageHandlers.invokeHandler.postMessage({
        event: event,
        paramsString: paramsString,
        callbackId: callbackId,
      });
      return "";
    } else {
      var result = WeixinJSCore.invokeHandler(event, paramsString, callbackId);
      if (typeof result === 'string' && result !== '') {
        // sync functions
        try {
          result = JSON.parse(result);
        } catch (e) {
          result = {};
        }
      }
      return WeixinNativeBuffer.unpack(result);
    }
  }

  var _invokeImpl = function (event, params, callback = null) {
    var paramsString = JSON.stringify(WeixinNativeBuffer.pack(params) || {});
    var callbackId = ++invokeCallbackId;
    if (typeof callback === 'function') {
      // console.log('async jsapi ' + callbackId + event);
      invokeCallbacks[callbackId] = callback;
    }
    return _invokeHandler(event, paramsString, callbackId);
  }

  // 包装了一层，保证 invoke 同步接口时，既有 callback 又有返回值
  var invoke = function (event, params, callback = null) {
    let ret = undefined;
    _invokeImpl(event, params, function(result) {
        ret = result;
        if (callback != null) {
            callback(result);
        }
    });
    return ret;
  }

  var invokeCallbackHandler = function (callbackId, result) {
    if (typeof result === 'string') {
      try {
        result = JSON.parse(result)
      } catch (e) {
        console.e('fail not compatible data' + result)
      }
    }
    result = WeixinNativeBuffer.unpack(result);
    var callback = invokeCallbacks[callbackId];
    if (typeof callback == 'function') {
      // console.log('invoke callback handler: true');
      try {
        callback(result);
      } catch (e) {
        console.warn('callback invoke handler failed!' + e.stack)
      }
      // console.log('invoke callback handler: true 1')
    }
    delete invokeCallbacks[callbackId];
  }

  var on = function (event, callback) {
    console.log('register on ', event)
    onCallbacks[event] = callback;
  }

  var subscribe = function (event, callback) {
    subscribeCallbacks[customEventPrefix + event] = callback;
  }

  var subscribeHandler = function (event, result, webviewId, ext) {
    if (typeof result === 'string' && result.length > 0) {
      try {
        result = JSON.parse(result)
      } catch(e) {}
    }
    console.log('on subscribe event: ', event, JSON.stringify(result))
    result = WeixinNativeBuffer.unpack(result)

    var callback;
    if (event.indexOf(customEventPrefix) != -1) {
      callback = subscribeCallbacks[event];
    } else {
      callback = onCallbacks[event];
    }
    if (typeof callback == 'function') {
      callback(result, webviewId, ext);
    }
  }

  var logVConsole = function (level, args) {
    if (!global.mb.enableVConsole) {
      return;
    }
    var logStr;
    try {
      logStr = JSON.stringify({
        level: level,
        logs: args
      })
    } catch(e) {
      logStr = JSON.stringify({
        level: level,
        logs: [args.toString()]
      })
    }
    NativeGlobal.log(logStr)
  }

  global.console = {
    debug: (...args) => {
      logVConsole(0, args);
      invoke('systemLog', { level: 'verbose', content: args.toString() });
    },
    log: (...args) => {
      logVConsole(0, args);
      invoke('systemLog', { level: 'debug', content: args.toString() });
    },
    info: (...args) => {
      logVConsole(1, args);
      invoke('systemLog', { level: 'info', content: args.toString() });
    },
    warn: (...args) => {
      logVConsole(2, args);
      invoke('systemLog', { level: 'warn', content: args.toString() });
    },
    error: (...args) => {
      logVConsole(3, args);
      invoke('systemLog', { level: 'error', content: args.toString() });
    },
  };

  global.JSBridge = {
    invoke: invoke,
    invokeCallbackHandler: invokeCallbackHandler,
    on: on,
    subscribe: subscribe,
    subscribeHandler: subscribeHandler,
    log: global.console.log
  };
})(this);

// JSBridge done


// SubJsContext

(function (global) {
  function SubJsContext(name, env) {
    env['console'] = global.console;
    env['setTimeout'] = global.setTimeout;
    env['clearTimeout']= global.clearTimeout;
    env['setInterval']= global.setInterval;
    env['clearInterval']= global.clearInterval;
    env['JSBridge'] = global.JSBridge;
    let impl = new NativeGlobal.SubJsContext(name, env);
    return impl;
  }
  global.SubJsContext = SubJsContext;
}(this));

// SubJsContext done


// native buffer
/* eslint-disable */
var NativeBuffer = (function (global) {

  // iOS 下注入 WeixinNativeBuffer，Android 下注入 getNativeBufferId，setNativeBuffer，getNativeBuffer；
  var _WeixinNativeBuffer = global.WeixinNativeBuffer
  var _getNativeBufferId = global.getNativeBufferId
  var _setNativeBuffer = global.setNativeBuffer
  var _getNativeBuffer = global.getNativeBuffer

  var supportNativeBuffer = true

  var __new = function (buffer) {
    /**
     * 游戏独立 Context 的情况下，__proto__ 不是当前域的 prototype，
     * 客户端会识别失败，这里强制 hack 下
     */
    var oldProto = buffer.__proto__
    buffer.__proto__ = ArrayBuffer.prototype

    var bufferId = -1

    if (_WeixinNativeBuffer) {
      // iOS
      bufferId = _WeixinNativeBuffer.new(buffer)
    } else if (typeof _getNativeBufferId === 'function' && typeof _setNativeBuffer === 'function') {
      // Android
      bufferId = _getNativeBufferId()
      _setNativeBuffer(bufferId, buffer)
    }

    buffer.__proto__ = oldProto
    return bufferId
  }

  var __get = function (bufferId) {
    if (_WeixinNativeBuffer) {
      return _WeixinNativeBuffer.get(bufferId)
    }
    if (typeof _getNativeBuffer === 'function') {
      return _getNativeBuffer(bufferId)
    }
  }

  // only for iOS, 开启兼容传输方案开关
  var useCompatibleMode = function (enable) {
    if (_WeixinNativeBuffer) {
      _WeixinNativeBuffer.useCompatibleMode(enable)
    }
  }

  var _new = function (buffer) {
    var ret = {}
    if (supportNativeBuffer) {
      ret.id = __new(buffer)
    } else {
      ret.base64 = arrayBufferToBase64(buffer)
    }
    return ret
  }

  var _get = function (bufferObj) {
    if (bufferObj == null) {
      return
    }
    if (supportNativeBuffer && typeof bufferObj.id !== 'undefined') {
      return __get(bufferObj.id)
    } else if (typeof bufferObj.base64 !== 'undefined') {
      return base64ToArrayBuffer(bufferObj.base64)
    }
  }

  // src: https://github.com/davidchambers/Base64.js/blob/master/base64.js
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  var btoa = btoa || function (input) {
    var str = String(input)
    var output = ''
    for (
      var block, charCode, idx = 0, map = chars;
      str.charAt(idx | 0) || (map = '=', idx % 1);
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = str.charCodeAt(idx += 3 / 4)
      if (charCode > 0xFF) {
        throw new Error('"btoa" failed')
      }
      block = block << 8 | charCode
    }
    return output
  }

  var atob = atob || function (input) {
    var str = String(input).replace(/=+$/, '')
    var output = ''
    if (str.length % 4 === 1) {
      throw new Error('"atob" failed')
    }
    for (
      var bc = 0, bs, buffer, idx = 0;
      buffer = str.charAt(idx++);
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ?
        output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      buffer = chars.indexOf(buffer)
    }
    return output
  }

  var arrayBufferToBase64 = function (buffer) {
    var binaryString = ''
    var bytes = new Uint8Array(buffer)
    var len = bytes.byteLength
    for (var i = 0; i < len; i++) {
      binaryString += String.fromCharCode(bytes[i])
    }
    return btoa(binaryString)
  }

  var base64ToArrayBuffer = function (base64) {
    var binaryString = atob(base64)
    var len = binaryString.length
    var bytes = new Uint8Array(len)
    for (var i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i)
    }
    return bytes.buffer
  }

  var pack = function (params) {
    if (params == null) {
      return params
    }
    var nativeBuffers = []

    for (var key in params) {
      var value = params[key]
      if (typeof value !== 'undefined' && _getDataType(value) === 'ArrayBuffer' && typeof value.byteLength !== 'undefined') {
        var buffer = _new(value)
        buffer.key = key
        nativeBuffers.push(buffer)
      }
    }

    if (nativeBuffers.length > 0) {
      for (var i = 0; i < nativeBuffers.length; i++) {
        var buffer = nativeBuffers[i]
        delete params[buffer.key]
      }
      params.__nativeBuffers__ = nativeBuffers
    }

    return params
  }

  var unpack = function (params) {
    if (params == null || params.__nativeBuffers__ == null) {
      return params
    }

    var nativeBuffers = params.__nativeBuffers__
    delete params.__nativeBuffers__

    for (var i = 0; i < nativeBuffers.length; i++) {
      var buffer = nativeBuffers[i]
      if (buffer == null) continue;

      var arrayBuffer = _get(buffer)
      if (typeof arrayBuffer !== 'undefined' && _getDataType(arrayBuffer) === 'ArrayBuffer') {
        params[buffer.key] = arrayBuffer
      } else {
        console.log("get array buffer failed " + JSON.stringify(buffer))
      }
    }

    return params
  }

  var _getDataType = function (data) {
    return Object.prototype.toString.call(data).split(' ')[1].split(']')[0]
  }

  delete global.WeixinNativeBuffer
  delete global.getNativeBufferId
  delete global.setNativeBuffer
  delete global.getNativeBuffer

  return {
    new: _new,
    get: _get,
    useCompatibleMode: useCompatibleMode,
    pack: pack,
    unpack: unpack
  }
})(this);

var WeixinNativeBuffer = NativeBuffer
NativeBuffer = null

// native buffer done


// WebAssembly

var WebAssembly_Global = function () {
  return this;
}();

var wasm = {};

if (typeof NativeGlobal.WebAssembly !== 'undefined') {
  wasm = NativeGlobal.WebAssembly;
} else if (typeof WebAssembly_Global.WebAssembly !== 'undefined') {
  wasm = WebAssembly_Global.WebAssembly;
}

var WebAssembly = {
  Table: wasm.Table,
  Memory: wasm.Memory,
  Global: wasm.Global,
  Instance: wasm.Instance,
  instantiate: function instantiate(file, imports) {
    if (typeof file !== 'string') {
      return Promise.reject(new Error('WebAssembly.instantiate: first argument must be a string'));
    } else if (/^(wxfile|https?):/.test(file)) {
      return Promise.reject(new Error('WebAssembly.instantiate: not support wxfile: or http: path'));
    } else if (!/\.wasm(\.br)?$/.test(file)) {
      return Promise.reject(new Error('WebAssembly.instantiate: only support file type .wasm or .wasm.br'));
    }
    return wasm.instantiate(file, imports);
  }
};
WebAssembly_Global.WXWebAssembly = WebAssembly;
var _WebAssembly = wasm;

// Web Assembly done

// LazyLoad

(function(global) {
    var that = this;

    class LazyLoadModel {
        parent = null;
        name = "";

        constructor(parent, name) {
            this.parent = parent;
            this.name = name;
        }

        provideDelegateStr () {
            return this.name + '_';
        }
    };
    var lazyLoadModels = [];
    lazyLoadModels.push(new LazyLoadModel(that.NativeGlobal, 'WXAUDIO'));

    for (const model of lazyLoadModels) {
        if (!model.parent[model.name]) {
            Object.defineProperty(model.parent, model.name, {
                get: function() {
                    if (model.isTriggeredInit) {
                        return model[model.provideDelegateStr()];
                    }
                    that.NativeGlobal.initModule(model.name);
                    model.isTriggeredInit = true;
                    return model[model.provideDelegateStr()];
                },

                set: function(value) {
                    model[model.provideDelegateStr()] = value;
                }
            });
        }
    }
})(this);

// LazyLoad done


// mb2.0 support

(function(global) {
  var mb = {
    envId: "",
    version: 0x2010000,
    PublicService: NativeGlobal.PublicService,
    JSBridge: global.JSBridge,
    SubJsContext: global.SubJsContext,
    ScreenCanvas: NativeGlobal.ScreenCanvas,
    OffscreenCanvas:NativeGlobal.OffscreenCanvas,
    requirePlugin: NativeGlobal.requirePlugin,
    switchVConsole: function(value) {
      global.mb.enableVConsole = value;
      global.JSBridge.invoke("setEnableDebug", { enable: !!value });
    }
  };
  NativeGlobal.onBizConnected = function(biz) {
    if (typeof mb.onBizConnected === 'function') {
      mb.onBizConnected(biz);
    } else {
      console.error("mb.onBizConnected not set!!")
    }
  }
  NativeGlobal.onBizDisconnected = function(biz) {
    if (typeof mb.onBizDisconnected === 'function') {
      mb.onBizDisconnected(biz)
    } else {
      console.error("mb.onBizDisconnected not set!!");
    }
  }
  global.mb = mb;
})(this);

// mb2.0 support done
