// ==UserScript==
// @name         Cookie Clicker Agronomicon
// @namespace    https://bitbucket.org/Acharvak/
// @website      https://bitbucket.org/Acharvak/cookie-clicker-agronomicon/
// @source       https://bitbucket.org/Acharvak/cookie-clicker-agronomicon/downloads/AgronomiconLoader.user.js
// @version      0.9
// @description  Load the Agronomicon when Cookie Clicker starts
// @author       Acharvak
// @match        http*://orteil.dashnet.org/cookieclicker/
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    // This is apparently the best way to do it
    var loadFunc = function() {
        var Game = unsafeWindow.Game;
        if(Game && Game.ready) {
            Game.LoadMod('https://bitbucket.org/Acharvak/cookie-clicker-agronomicon/downloads/Agronomicon.js');
            return true;
        } else {
            return false;
        }
    }

    if(unsafeWindow.AcharvaksAgronomicon === undefined) {
        unsafeWindow.AcharvaksAgronomicon = { preloader: true };
    }
    if(!unsafeWindow.AcharvaksAgronomicon.loaded) {
        if(!loadFunc()) {
            var interval = setInterval(function() {
                if(loadFunc()) {
                    clearInterval(interval);
                }
            }, 1000);
        }
    }
})();
