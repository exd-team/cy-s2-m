// ==UserScript==
// @name         S2-M-H
// @description  Combination of multiple Tampermonkey scripts
// @namespace    http://tampermonkey.net/
// @version      1
// @grant        GM_registerMenuCommand
// @match        https://www.speedtest.net/result/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// ==/UserScript==

!function(){"use strict";var e;e=setInterval(function t(){console.log("Started script");let i=document.querySelector("#container > div > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-container.main-row > div.main-view > div > div.result-area.result-area-share > div.result-area.result-area-connection > div > div.pure-u-1-2.u-c.result-item-container-align-right > div > div.result-label.vertically-centered");i&&(i.textContent="Cyta",clearInterval(e))},-500)}();
