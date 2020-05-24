Cookie Clicker Agronomicon
==========================
Playing [Cookie Clicker](http://orteil.dashnet.org/cookieclicker), doing some gardening and getting tired of looking up how to unlock all the plants and plant upgrades? Thinking what patterns to use, but doing the math yourself is boring? **Cookie Clicker Agronomicon** is the add-on you need! It will tell you lots of stuff about your garden, such as:

* What plants can grow in every tile next tick and the probability for each one
* The chance of a plant maturing, dying or being contaminated next tick
* What seeds you can unlock with what you have, and how to do it
* What upgrade a plant can drop, if you don’t have it yet
* ...and it can even play sound alerts when the garden needs your attention!

**This is not a cheat interface.** It won’t (at least yet) do any autogardening for you.

**Latest version:** 2.022

**Important notice:** I’m not much into clicking cookies these days. If someone wants to take over this mod or integrate it into a larger mod, please drop me a line. I’ll keep supporting this mod for the time being, though.


Compatibility
-------------
Compatible with game version 2.022 (the latest as of 24 May 2020). Tested in Chrome and Firefox. Can be used together with [Cookie Monster](https://github.com/Aktanusa/CookieMonster) and probably other add-ons, as long as they don’t affect the garden (at least don’t completely change it).


Try it
------
To load the Agronomicon, go to [the game’s page](http://orteil.dashnet.org/cookieclicker), wait for it to fully load, open your browser’s console (depends on the browser, but usually possible by right-clicking, selecting “Inspect” or “Inspect Element”, then finding and clicking on the “Console” button), and enter the following:

    Game.LoadMod('https://acharvak.github.io/Cookie-Clicker-Agronomicon/Agronomicon.js')

and then press Enter. If you copy and paste the command, some browsers may demand confirmation that you know what you’re doing.


Run it every time
-----------------
If you want to load the Agronomicon every time you start the game, there’s a *userscript* to do that.

First, install [Greasemonkey for Firefox](https://addons.mozilla.org/firefox/addon/greasemonkey/), or [Tampermonkey](https://tampermonkey.net/) (available for various browsers), or a compatible extension that will let your browser run userscripts.

Then click on the link below. You will likely be prompted to install the userscript. If program code is shown to you instead, copy the entire code and save it in your userscript manager as a new script (consult the documentation for your userscript manager on how to do it).

**Link to the userscript**:

* https://acharvak.github.io/Cookie-Clicker-Agronomicon/AgronomiconLoader.user.js

**Upgrade notice:** if you have an old version of the userscript (one that loads from bitbucket.org), uninstall it before installing the new version using the link above.

**Privacy-related notice:** this userscript is only a loader, the actual Agronomicon will be downloaded from GitHub every time you open the game’s page.


Limitations
-----------
There are, unfortunately, some quirks that still have to be ironed out:

* Probabilities for “mutation recipe outcomes” don’t account for the Wood Chips mutation bonus. But the probabilities shown when you hover over a tile do account for Wood Chips and all (or most) other modifiers.
* If a tile is under an aging modifier or a weed/fungus repellent effect, then Agronomicon assumes this effect will stay the same next tick, even if it might change. In most cases it doesn’t matter in practice, though.
* When you click on any tile, your soil selector will lock up for a couple of milliseconds. Also there may be slight lag if you start rapidly clicking on different tiles. This is due to how Agronomicon integrates its interface into the game—there are some better ways, and I’ll hopefully implement one eventually, but it will require a surprisingly large amount of code.


Preemptively Answered Questions
-------------------------------
**Q: The Agronomicon gives me this recipe for Drowsyfern: ``Mut.: 1 × Chocoroot (M) + 1 × Keenmoss (M) = 0.4875% (+1 OO at 4.9875%)``. How do I read this?**

**A:** If an empty tile has one mature Chocoroot and one mature Keenmoss on its neighboring tiles, then a Drowsyfern may start growing on it with a probability of 0.4875%. One other plant (“OO” meaning “Other Outcome(s)”) may start growing on it instead of Drowsyfern with a probability of 4.9875% (another Keenmoss, actually, although it isn’t stated directly). If there are other neighboring plants, the probabilities may change—after planting the seeds, you can hover over a tile to see the exact chances. Neighbors of a tile are the eight tiles surrounding it.


**Q: I have two tiles with the exact same neighbors, but the Agronomicon shows different probabilities for them. Why?**

**A:** There are many possible reasons, all connected to the fact that each tick, the game processes all tiles left to right, then top to bottom, like you’d read English text. So changes to any tile (a plant maturing, dying, being contaminated etc.) affect tiles to the right and below it the very same tick.  


**Q: Why do the probabilities that the Agronomicon shows me almost never match “base probabilities” listed [on the wiki](http://cookieclicker.wikia.com/wiki/Garden)?**

**A:** As the wiki says, *“The exact probability can be calculated from [random list mechanism](http://cookieclicker.wikia.com/wiki/Random_list_mechanism). In general the actual number is close, but not equal, to the base chance (...)”* The Agronomicon shows you the final probability, accounting for the “random list mechanism”.  


**Q: I found a bug, where do I report it?**

**A:** In the [issue tracker](https://github.com/Acharvak/Cookie-Clicker-Agronomicon/issues). Please include a screenshot or a saved game (preferably as a file attachment), if it’s relevant. You will, unfortunately, need a GitHub account to report an issue, but signing up is very easy.


**Q: I have a question, where do I ask it?**

**A:** If you have a Reddit account, preferably on [/r/cookieclicker](https://reddit.com/r/cookieclicker). I read it from time to time (my Reddit username is Acharvak), and there are other people there who may be able to help you.

Alternatively, you can create an issue in the [issue tracker](https://github.com/Acharvak/Cookie-Clicker-Agronomicon/issues), although since hardly anyone but me reads it, you might not get an answer quickly.


License
-------
**The Cookie Clicker game was written by Orteil and Opti. Cookie Clicker Agronomicon is a third-party add-on for it, its author is not affiliated with Orteil or Opti nor has any copyright on the original game.**

Cookie Clicker Agronomicon, including this Readme, was written by Acharvak and contributors, 2018–2020

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


Migration Notice
----------------
This mod was previously hosted on [Bitbucket](https://bitbucket.org/Acharvak/). Since Bitbucket ceased supporting the Mercurial version control system, the mod has been moved over to [its current page](https://github.com/Acharvak/Cookie-Clicker-Agronomicon) on GitHub.
