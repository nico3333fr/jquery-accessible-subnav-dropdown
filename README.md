# jQuery accessible keyboard-enhanced dropdown navigation
This jQuery plugin enhances (a lot) keyboard navigation on a “classic” drop-down menu.

You can see a working demo here: http://a11y.nicolas-hoffmann.net/subnav-dropdown/

<h2 id="accessible">Accessible?</h2>
 
 <h3 class="mt0" id="what-does-it-do">What does it do?</h3>
 
 <p>This script adds listeners to keyboard and mouse to make a keyboard-friendly dropdown navigation system (using arrows and <kbd>Esc</kbd>). You can still use <kbd>Tab</kbd> if you prefer, it doesn’t affect this natural behaviour.</p>
 
 <h3 class="mt0" id="keys">Keys</h3>
 
 <p>If you are on “main” navigation:</p>
 
 <ul>
 	<li>use <kbd>Left</kbd>/<kbd>Right</kbd> to see previous/next link</li>
	<li>if you are on the first one, using <kbd>Left</kbd> will bring you to last one (same for last one and <kbd>right</kbd></li>
 	<li>if the element has a sub-navigation, you will focus the first sub-element</li>
 </ul>

 <p>If you are on a “sub”-navigation link:</p>

 <ul>
 	<li>use <kbd>Up</kbd>/<kbd>Down</kbd> to navigate through “sub”-navigation links</li>
	<li>using <kbd>Up</kbd>/<kbd>Down</kbd> will trap you into “sub”-navigation links, for example, if you use <kbd>Down</kbd> on the last sub-element, the focus will be set to the first sub-element</li>
	<li>use <kbd>Left</kbd>/<kbd>Right</kbd> to go to previous/next “sub”-navigation, if it exists, it will to the first sub-element, if not, it will go to previous/next navigation element</li>
 	<li>use <kbd>Esc</kbd> to close the sub-navigation, it will also give the focus back to parent navigation element</li>
 </ul>


 <h2 id="how-to">How to</h2>
 
 <h3 class="mt0" id="how-it-works">How it works</h3> 
 
 <p>The script detects a mouse enter in a navigation element and shows its sub-navigation. Of course, the sub-navigation will be visible as long as the mouse is in the navigation element.</p>
 
 <p>It will add an attribute <code>data-show-sub</code> to the navigation items (to indicate if the element is opened or not), and an attribute <code>data-visually-hidden</code> on sub-navigation (to indicate if the sub-navigation is visible or not).</p>
 
 <p>And of course: it also adds some keyboard listeners to enable a cool keyboard navigation using <kbd>Left</kbd>/<kbd>Right</kbd>,<kbd>Up</kbd>/<kbd>Down</kbd> arrows (and also <kbd>Esc</kbd>). Try it on the top menu, you will surely appreciate! ;)</p>
 
 <h3 class="mt0" id="how-to-use-it">How to use it</h3> 
 
 <p>Just follow these conventions by using <code>js-nav-system</code>, <code>js-nav-system__item</code>, <code>js-nav-system__link</code>, <code>js-nav-system__subnav</code>, <code>js-nav-system__subnav__item</code>, <code>js-nav-system__subnav__link</code>:</p>
 
   <pre><code class="language-markup">&lt;ul class="js-nav-system"&gt;

 &lt;li class="js-nav-system__item"&gt;
  &lt;a href="…" class="js-nav-system__link"&gt;Link&lt;/a&gt;
 &lt;/li&gt;

 &lt;li class="js-nav-system__item"&gt;
  &lt;a href="…" class="js-nav-system__link"&gt;Link 2&lt;/a&gt;
   &lt;ul class="js-nav-system__subnav"&gt;
    &lt;li class="js-nav-system__subnav__item"&gt;
     &lt;a href="…" class="js-nav-system__subnav__link"&gt;Sub Link 1&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="js-nav-system__subnav__item"&gt;
     &lt;a href="…" class="js-nav-system__subnav__link"&gt;Sub Link 2&lt;/a&gt;
    &lt;/li&gt;
   &lt;/ul&gt;
 &lt;/li&gt;

 &lt;!-- etc. --&gt;

 &lt;li class="js-nav-system__item"&gt;
  &lt;a href="…" class="js-nav-system__link"&gt;Link x&lt;/a&gt;
   &lt;ul class="js-nav-system__subnav"&gt;
    &lt;li class="js-nav-system__subnav__item"&gt;
     &lt;a href="…" class="js-nav-system__subnav__link"&gt;Sub Link x&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="js-nav-system__subnav__item"&gt;
     &lt;a href="…" class="js-nav-system__subnav__link"&gt;Sub Link x+1&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="js-nav-system__subnav__item"&gt;
     &lt;a href="…" class="js-nav-system__subnav__link"&gt;Sub Link x+1&lt;/a&gt;
    &lt;/li&gt;
   &lt;/ul&gt;
  &lt;/li&gt;	 

 &lt;/ul&gt;
</code></pre>
 
 <p>Of course it is supposed to work on <code>ul li a</code> tags, but it can work on other elements (like form inputs) if the structure is kept.</p>
 
 <p>For styles, here are minimal styles needed:</p>
 
<pre><code class="language-css">.subnav {
  position: absolute;
}

[data-visually-hidden="true"] {
  display: none;
}
[data-visually-hidden="false"] {
  display: block;
}
</code></pre>
	
  <p>The plugin will do the rest. Yes, just for you.</p>
 
 <h2 id="other-informations">Other informations</h2>

 <h3 class="mt0" id="last-news">Last news</h3>

 
 <p>9th of April 2016: <a href="https://github.com/nico3333fr/jquery-accessible-subnav-dropdown/issues/3">fixed and enhanced keyboard management in subnavs</a>, thanks again to <a href="https://twitter.com/jbcordina">@jbcordina</a>.</p>
 
 <p>27th of March 2016: <a href="https://github.com/nico3333fr/jquery-accessible-subnav-dropdown/commit/02ac9e2d76447b14e0ec48d45684f4e7eaa9145d">fixed two bugs in keyboard management</a>, thanks to <a href="https://twitter.com/jbcordina">@jbcordina</a>.</p>
 

 <p class="mb1">7th of February 2016: <a href="https://www.npmjs.com/package/jquery-accessible-subnav-dropdown">this plugin is available on NPMjs.com</a>, and you can install it with <code>npm i jquery-accessible-subnav-dropdown</code>.</p>

 <h3 class="mt0" id="license">License</h3>  

 
 <p>No license problem, it uses <abbr title="Massachusetts Institute of Technology">MIT</abbr> license, so <strong>it’s free, open-source and you can do whatever you want with it, including commercial use</strong>. <a href="https://github.com/nico3333fr/jquery-accessible-subnav-dropdown/blob/master/LICENSE">This permission notice</a> shall be included in all copies or substantial portions of it. </p>
 <p>However, it is not prohibited to tell me that you’ve used it, or send me a little “thank you”. ;) </p>
 
 <h3 class="mt0" id="weight">Weight</h3>  
 
 <p>It is lightweight: 11<abbr title="kilobytes">kb</abbr>(development), 4.7<abbr title="kilobytes">kb</abbr> (minified), only <strong>700&nbsp;bytes minified and gzipped</strong>.</p>
 
 <h3 class="mt0" id="used-by">Used by</h3>  
 
 <p>This plugin has been used for example on <a href="http://www.visionlaser.ch/">Vision Laser</a> or on <a href="http://ohchr.org/">Office of the High Commissioner for Human Rights</a>.</p> 

 <h3 class="mt0" id="tribute">Tribute</h3>  
 
 <p>The idea of this script is inspired by <a href="http://heydonworks.com/practical_aria_examples/#submenus">Heydon’s simple dropdowns example</a>. Seriously, you should have a look at his great work in accessibility.</p> 
 
