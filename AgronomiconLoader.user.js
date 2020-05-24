// ==UserScript==
// @name         Cookie Clicker Agronomicon
// @namespace    https://github.com/Acharvak/
// @homepageURL  https://acharvak.github.io/Cookie-Clicker-Agronomicon/
// @updateURL    https://acharvak.github.io/Cookie-Clicker-Agronomicon/AgronomiconLoader.user.js
// @downloadURL  https://acharvak.github.io/Cookie-Clicker-Agronomicon/AgronomiconLoader.user.js
// @version      1.0
// @description  Load the Agronomicon when Cookie Clicker starts
// @author       Acharvak
// @match        https://orteil.dashnet.org/cookieclicker/
// @match        http://orteil.dashnet.org/cookieclicker/
// @grant        none
// ==/UserScript==

// This is apparently the best way to do it
window.eval("(" + (function() {
    'use strict';

    var loadFunc = function() {
        var Game = window.Game;
        if(Game && Game.ready) {
            Game.LoadMod('https://acharvak.github.io/Cookie-Clicker-Agronomicon/Agronomicon.js');
            return true;
        } else {
            return false;
        }
    }

    if(window.AcharvaksAgronomicon === undefined) {
        window.AcharvaksAgronomicon = { preloader: true };
    }
    if(!window.AcharvaksAgronomicon.loaded) {
        if(!loadFunc()) {
            var interval = setInterval(function() {
                if(loadFunc()) {
                    clearInterval(interval);
                }
            }, 1000);
        }
    }
}).toString() + ")()");
