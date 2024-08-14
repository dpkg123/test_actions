// Copyright (C) Microsoft Corporation. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const e=(e,s)=>{window.edgeContext?.sendCustomMessage(e,s)},s=s=>new Promise((n=>{e(s,n)})),n=e=>{window.edgeContext?.subscribeMessage(e)},o=e=>{window.edgeContext?.unSubscribeMessage(e)};export{e as sendMessage,s as sendWithPromise,n as subscribeMessage,o as unSubscribeMessage};