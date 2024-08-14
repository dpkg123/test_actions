/*
 * Copyright (c) 2021.
 * Microsoft Corporation. All rights reserved.
 */

const BOOT = {
    'Word': bootWord,
    'Excel': bootExcel,
    'PowerPoint': bootPowerPoint
}

function initializeWac() {
    var params = JSON.parse(Previewer.getWacParams())
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = params.bootstrapperUrl
    script.onload = function() {
        BOOT[params.appName](params)
    }
    document.head.appendChild(script)
}

// Sample: https://github.com/Microsoft/Office-Online-Test-Tools-and-Documentation/blob/master/samples/SampleHostPage.html
function bootPowerPoint(params) {
    window.addEventListener('message', function(event) {
        var data = JSON.parse(event.data)
        if (data.Type === 2) {
            // success
            Previewer.onLoadFinish(true)
        } else if (data.Type === 5) {
            // fail
            Previewer.onLoadFinish(false)
        }
    })

    var actionUrl = new URL(params.applicationUrl)
    var searchParams = actionUrl.searchParams
    searchParams.set("hid", params.sessionId)
    searchParams.set("WOPISrc", params.wopiSrc)
    searchParams.set("wdnc", 1) // This param is to hide ppt toolbar

    // Configure form
    var form = document.getElementById('office_form');
    form.action = actionUrl.toString();
    form.elements["access_token"].value = params.token;
    form.elements["access_token_ttl"].value = params.tokenExpiry;

    // Add iframe to hold the content
    var frameholder = document.getElementById('WopiDocWACContainer');
    var office_frame = document.createElement('iframe');
    office_frame.name = 'office_frame';
    office_frame.id = 'office_frame';

    // The title should be set for accessibility
    office_frame.title = 'Office Preview Content';

    // This attribute allows true fullscreen mode in slideshow view
    // when using PowerPoint's 'view' action.
    office_frame.setAttribute('allowfullscreen', 'true');

    // The sandbox attribute is needed to allow automatic redirection to the O365 sign-in page in the business user flow
    office_frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-popups-to-escape-sandbox');
    frameholder.appendChild(office_frame);

    form.submit();
}

function bootWord(params) {
    params.applicationUrl += '&wdMobileHost=3'
    window.addEventListener('message', function(event) {
        var message = JSON.parse(event.data).MessageId
        if (message === 'Wac_AppCompleted') {
            Previewer.onLoadFinish(true)
        } else if (message === 'Wac_AppFailed') {
            Previewer.onLoadFinish(false)
        }
    })
    bootJsApiV2(params)
}

function bootExcel(params) {
    bootJsApiV2(params)
    Previewer.onLoadFinish(true)
}

// JsApi2 sample https://office.visualstudio.com/OC/_wiki/wikis/OC.wiki/18270/Sample-usage
function bootJsApiV2(params) {
    var applicationInitParams = {
        host: {
            storageHostName: 'SharePoint Online',
            uiHostName: 'OutlookMobileAndroid',
            requireExplicitUnload: false,
            capabilities: {
                accessibilityLoop: true,
                decryptedContentDownload: true,
                isFeatureEnabledCallback: function () {
                    return false
                }
            }
        },
        user: {
            id: params.userId
        },
        bootstrapperUrl: params.bootstrapperUrl,
        ui: {
            language: navigator.language,
            uiEmbed: true,
            hideHeader: true,
            highContrast: false,
            controls: [
                { id: 'openInApp', visibility: 0 },
                { id: 'docChat', visibility: 0 },
                { id: 'share', visibility: 0 },
                { id: 'conversation', visibility: 0 },
                { id: 'ellipsisOpenInApp', visibility: 0 },
                { id: 'ellipsisOpenInBrowser', visibility: 0 },
                { id: 'ellipsisDownload', visibility: 0 },
                { id: 'close', visibility: 0 }
            ]
        },
        viewMode: {
            hideToolbar: true,
            disableFocusOnBoot: false,
            forceAccessibilityMode: false,
            hideEditUpsellDialog: true
        }
    }
    var application = Microsoft.Office[params.appName].createApplication(applicationInitParams)

    var sessionInitParams = {
        hostSessionId: params.sessionId
    }
    var session = application.createSession(sessionInitParams)

    var sessionBootParams = {
        appUrl: params.applicationUrl,
        file: {
            name: params.fileName,
            getUrl: params.fileGetUrl,
            size: params.fileSize
        },
        container: document.getElementById('WopiDocWACContainer'),
        wopi: {
            source: params.wopiSrc,
            accessToken: params.token,
            expiry: params.tokenExpiry
        }
    }
    session.boot(sessionBootParams)
}

window.onload = initializeWac