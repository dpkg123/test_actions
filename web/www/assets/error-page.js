// Copyright (C) Microsoft Corporation. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import"./components/edge-discover-button.js";import r from"../common/i18n.js";import{css as e,html as o,LitElement as t}from"../common/lit.js";import{ErrorType as n}from"./constants.js";customElements.define("error-page",class extends t{constructor(){super(...arguments),this.errorPageDesc=()=>new Map([[n.E010000_DEFAULT_ERROR,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010000)",buttonTextId:"common_close",buttonAction:this.onDismiss}],[n.E010001_LOAD_FAIL,{errorTextId:"discover_chat_loading_no_network_error",errorCodeText:"(E010001)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[n.E010002_LOAD_TIMEOUT,{errorTextId:"discover_chat_loading_timeout_error",errorCodeText:"(E010002)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[n.E010003_LOAD_TIMEOUT_NOREADY_MESSAGE,{errorTextId:"discover_chat_loading_timeout_error",errorCodeText:"(E010003)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[n.E010004_REGION_NOT_ALLOWED,{errorTextId:"discover_chat_loading_region_error",errorCodeText:"(E010004)",buttonTextId:"common_close",buttonAction:this.onDismiss}],[n.E010005_NETWORK_400,{errorTextId:"discover_chat_loading_badrequest_error",errorCodeText:"(E010005)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[n.E010006_NETWORK_401,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010006)",buttonTextId:"common_close",buttonAction:this.onDismiss}],[n.E010007_NETWORK_403,{errorTextId:"discover_chat_loading_page_not_found",errorCodeText:"(E010007)",buttonTextId:"common_close",buttonAction:this.onDismiss}],[n.E010008_NETWORK_404,{errorTextId:"discover_chat_loading_page_not_found",errorCodeText:"(E010008)",buttonTextId:"common_close",buttonAction:this.onDismiss}],[n.E010009_NETWORK_500,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010009)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[n.E010010_NETWORK_502,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010010)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[n.E010011_NETWORK_503,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010011)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[n.E010012_NETWORK_DEFAULT,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010012)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[n.E010013_AUTH_401,{errorTextId:"discover_chat_loading_account_error",errorCodeText:"(E010013)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[n.E010021_IFRAME_RENDER_CRASH,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010021)",buttonTextId:"common_retry",buttonAction:this.onRetry}]]).get(this.errorType??n.E010002_LOAD_TIMEOUT)}static get styles(){return e`
      .error-wrap {
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .error-icon {
        width: 82px;
        height: 82px;
      }

      .error-text {
        font-size: 14rem;
        line-height: 20rem;
        text-align: center;
        white-space: pre-wrap;
        color: var(--color-text);
        margin-top: 20px;
        padding-left: 24px;
        padding-right: 24px;
      }

      .error-code {
        font-size: 11rem;
        line-height: 16rem;
        text-align: center;
        white-space: pre-wrap;
        color: #6e6e6e;
      }

      .refresh-btn {
        margin-top: 20px;
        padding: 0 16px;
        height: 36px;
        font-weight: 600;
        font-size: 14rem;
        line-height: 22rem;
        background: linear-gradient(129.58deg, #2870EA 20.88%, #2870EA 20.89%, #1B4AEF 77.37%);
        border-radius: 18px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
      }

      @media (prefers-color-scheme: dark) {
        .error-code {
          color: #919191;
        }
      }
    `}static get properties(){return{errorType:{type:n},onDismiss:{type:Function},onRetry:{type:Function}}}render(){const e=this.errorPageDesc();return o`<div class="error-wrap">
      <img class="error-icon" src="./resources/codex-error.png">
          <div class="error-text">${r.text(e.errorTextId)}</div>
          <div class="error-code">${e.errorCodeText}</div>
          <edge-discover-button class="refresh-btn" @click=${e.buttonAction}>${r.text(e.buttonTextId)}</edge-discover-button>
    </div>`}});