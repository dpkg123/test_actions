// Copyright (C) Microsoft Corporation. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const e="edge-http-proxy",t="edge-file-proxy";export function createProxyHttpUrl(t){return`../${e}?key=${encodeURIComponent(t)}`}export function createProxyFileUrl(e){return`../${t}?key=${encodeURIComponent(e)}`}export function proxyHttpFetch(e,t){return fetch(createProxyHttpUrl(e),t)}export function proxyFileFetch(e,t){return fetch(createProxyFileUrl(e),t)}