// Copyright (C) Microsoft Corporation. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import t from"../common/animation.js";import e from"../common/i18n.js";import{css as o,html as r,LitElement as i,when as n}from"../common/lit.js";import{Error as s}from"./constants.js";customElements.define("loading-page",class extends i{constructor(){super(...arguments),this.errorPageArgs=()=>{const t=new Map([[s.E010000_DEFAULT_ERROR,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010000)",buttonTextId:"common_close",buttonAction:this.onDismiss}],[s.E010001_LOAD_FAIL,{errorTextId:"discover_chat_loading_no_network_error",errorCodeText:"(E010001)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[s.E010002_LOAD_TIMEOUT,{errorTextId:"discover_chat_loading_timeout_error",errorCodeText:"(E010002)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[s.E010003_LOAD_TIMEOUT_NOREADY_MESSAGE,{errorTextId:"discover_chat_loading_timeout_error",errorCodeText:"(E010003)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[s.E010004_REGION_NOT_ALLOWED,{errorTextId:"discover_chat_loading_region_error",errorCodeText:"(E010004)",buttonTextId:"common_close",buttonAction:this.onDismiss}],[s.E010005_NETWORK_400,{errorTextId:"discover_chat_loading_badrequest_error",errorCodeText:"(E010005)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[s.E010006_NETWORK_401,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010006)",buttonTextId:"common_close",buttonAction:this.onDismiss}],[s.E010007_NETWORK_403,{errorTextId:"discover_chat_loading_page_not_found",errorCodeText:"(E010007)",buttonTextId:"common_close",buttonAction:this.onDismiss}],[s.E010008_NETWORK_404,{errorTextId:"discover_chat_loading_page_not_found",errorCodeText:"(E010008)",buttonTextId:"common_close",buttonAction:this.onDismiss}],[s.E010009_NETWORK_500,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010009)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[s.E010010_NETWORK_502,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010010)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[s.E010011_NETWORK_503,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010011)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[s.E010012_NETWORK_DEFAULT,{errorTextId:"discover_chat_loading_general_error",errorCodeText:"(E010012)",buttonTextId:"common_retry",buttonAction:this.onRetry}],[s.E010013_AUTH_401,{errorTextId:"discover_chat_loading_account_error",errorCodeText:"(E010013)",buttonTextId:"common_retry",buttonAction:this.onRetry}]]);let e=s.E010000_DEFAULT_ERROR;return void 0!==this.error&&this.error!==s.NO_ERROR&&(e=this.error),t.get(e)}}static get styles(){return o`
      .background {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        top: 0;
        left: 0;
        transition: opacity 0.333s cubic-bezier(0, 0, 0, 1) 0.5s;
        will-change: opacity;
      }
      .content {
        position: absolute;
        width: 100%;
        height: min(calc(90vh - env(safe-area-inset-top)), 50%);
        overflow: hidden;
        box-sizing: border-box;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        border-radius: 12px 12px 0 0;
        background-color: #F3F3F3;
        transition: transform 0.333s ease-in-out;
        will-change: transform;
      }
      .title {
        position: relative;
        height: 44px;
        box-sizing: border-box;
      }
      .title-bar {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        height: 4px;
        width: 36px;
        border-radius: 2px;
        background-color: #919191;
      }
      .codex-icon {
            width: 82px;
            height: 82px;
          }
      .loading-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .progress-bg {
        position: relative;
        margin-top: 32px;
        width: 96px;
        height: 4px;
        background-color: #DDDDDD;
        border-radius: 2px;
        overflow: hidden;
      }

      @keyframes progress {
        0% {
          transform: translateX(-40px);
        }
        100% {
          transform: translateX(96px);
        }
      }
      .progress {
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        width: 40px;
        background: linear-gradient(129.58deg, #2870EA 20.88%, #2870EA 20.89%, #1B4AEF 77.37%);
        border-radius: 2px;
        animation: progress 1.5s linear infinite;
      }

      .error-text, .loading-text {
        font-size: 14rem;
        line-height: 20rem;
        text-align: center;
        white-space: pre-wrap;
        color: #111111;
      }

      .error-code {
        font-size: 11rem;
        line-height: 16rem;
        text-align: center;
        white-space: pre-wrap;
        color: #6e6e6e;
      }

      .loading-text {
        margin-top: 24px;
        height: 40rem;
      }

      .error-text {
        margin-top: 20px;
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
        :host {
          background-color: #2B2B2B;
        }
        .error-text, .loading-text {
          color: #EDEBE9;
        }
        .error-code {
          color: #0x919191;
        }
        .content {
          background-color: #2B2B2B;
        }
      }
    `}static get properties(){return{isError:{type:Boolean},loadError:{type:s},isFullScreenLoading:{type:Boolean},onDismiss:{type:Function},onRetry:{type:Function}}}addGesture(){let t=0,e=!1,o=null;const r=this.shadowRoot?.querySelector(".content"),i=this.shadowRoot?.querySelector(".background");if(!r||!i)return;r.addEventListener("click",(t=>{t.stopPropagation()})),r.addEventListener("touchstart",(i=>{i.touches.length>1||(e=!0,t=i.touches[0].clientY,o=r.style.transition,r.style.transition="none")})),r.addEventListener("touchmove",(o=>{if(!e)return;const{clientY:i}=o.touches[0],n=Math.max(i-t,0),s=r.clientHeight;r.style.transform=`translateY(${n/s*100}%)`})),r.addEventListener("touchend",(i=>{if(!e)return;e=!1,r.style.transition=o;const{clientY:n}=i.changedTouches[0];Math.max(n-t,0)/r.clientHeight>.2?this.dismiss(200):this.show(200)})),i.addEventListener("click",(()=>{this.dismiss()}))}dismiss(e=333){const o=this.shadowRoot?.querySelector(".content"),r=this.shadowRoot?.querySelector(".background");o&&r&&t({duration:e,easing:"ease-in-out"}).add([{targets:o,transform:"translateY(100%)"},{targets:r,opacity:"0"}]).add((()=>{this.onDismiss()})).run()}show(e=333){const o=this.shadowRoot?.querySelector(".content"),r=this.shadowRoot?.querySelector(".background");o&&r&&t({duration:e,easing:"ease-in-out"}).add([{targets:o,transform:"translateY(0px)"},{targets:r,opacity:"1"}]).run()}firstUpdated(){this.addGesture()}render(){this.loadingTextInterval&&clearInterval(this.loadingTextInterval),this.loadingTextInterval=setInterval((()=>{const t=this.shadowRoot?.querySelector(".loading-text");if(!t)return void clearInterval(this.loadingTextInterval);t.innerText===e.text("discover_chat_loading_title1")?t.innerText=e.text("discover_chat_loading_title2"):t.innerText=e.text("discover_chat_loading_title1")}),3e3);const t=this.errorPageArgs(),o=r`
      <div class="loading-wrap">
      ${n(!this.isError,(()=>r`
        <img class="codex-icon" src="./resources/codex-icon.svg">
        <div class="progress-bg">
          <div class="progress"></div>
        </div>
      `))}
      ${n(!!this.isError,(()=>r`
          <img class="codex-icon" src="./resources/error-icon.png">
          <div class="error-text">${e.text(t.errorTextId)}</div>
          <div class="error-code">${t.errorCodeText}</div>
          <edge-discover-button class="refresh-btn" @click=${t.buttonAction}>${e.text(t.buttonTextId)}</edge-discover-button>
        `),(()=>r`<div class="loading-text">${e.text("discover_chat_loading_title1")}</div>`))}
    </div>
    `;return this.isFullScreenLoading?o:r`
      <div class="background">
        <div class="content">
          <div class="title">
            <div class="title-bar"></div>
          </div>
          ${o}
        </div>
      </div>
     `}});