!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=10)}([function(e,n){e.exports='<div class="navbar" id="navbar">\n    <div class="navbar-inner nav-container">\n        <a class="site-title no-decoration" style="font-weight:bolder;" href="//{hostname}:8080/">\n            <div class="left"><i class="fas fa-bezier-curve"></i><span class="hide-mobile"> OakFrame</span></div>\n        </a>\n        <div class="dropdown right"><span><i class="fas fa-bars"></i></span>\n            <div class="dropdown-content">\n                <div class="dropdown-inner">\n\n                    <a href="//{hostname}:8080/blog">Blog</a><br>\n                    <a href="//{hostname}:8080/privacy">Privacy Policy</a><br>\n\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class="right" id="pill-search-expand" style="z-index:-3;"><input id="pill-search" placeholder="Search ..."\n                                                                              type="text"\n                                                                              value="{search_safe}"><i\n                id="pill-search-icon" class="fas fa-search"></i></div>\n\n        <a href="/{profile_link}" class="right" style="z-index:-3;"><i class="far fa-user-circle"></i><span\n                class="hide-mobile"> Log In</span></a><a href="/free-to-play-games" class="right" style="z-index:-3;"><i\n            class="fas fa-ghost"></i><span class="hide-mobile"> Games</span></a>\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n    <h1>Page Not Found</h1>\n        <p>Perhaps try searching for it:</p>\n        <p class="flex">\n            <input type="text" placeholder="Search..." value="{search_safe}"/>\n            <button>Search</button>\n        </p>\n</div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container">\n        <h1>Contact Us</h1>\n        <p>We\'re always open and ready to hear your comments, questions, and concerns. Let us know with the form below!</p>\n        <input type="text" placeholder="Your Name"/><br/>\n        <input type="text" placeholder="Contact Email"/><br/>\n        <textarea placeholder="Enter your text here"></textarea><br />\n        <input type="submit" value="Submit" />\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <h1>Search For a Thing</h1>\n        <p>Go ahead:</p>\n        <p class="flex">\n            <input type="text" placeholder="Search..." value="{search_safe}"/>\n            <button>Search</button>\n        </p>\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <h1>Sign Up</h1>\n        <p>It\'s free and there are a lots of great reasons to become a member!</p>\n        <p class="flex-col">\n            <input id="signup-first-name" type="text" placeholder="First Name" value=""/>\n            <input id="signup-email" type="email" placeholder="Email Address" value=""/>\n            <input id="signup-password" type="password" placeholder="New Password" value=""/>\n            <button>Sign Up</button>\n        <p>Have an Account? <a href="/login">Log In</a>.<br/>\n            Forgot your Password? <a href="/reset">Reset Password</a>.\n        </p>\n        </p>\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <h1>Log In</h1>\n        <p>Do the thing!</p>\n        <p class="flex-col">\n            <input type="email" placeholder="Email Address" value=""/>\n            <input type="password" placeholder="Password" value=""/>\n            <button>Sign Up</button>\n        <p>\n            Don\'t have an Account? <a href="/signup">Sign Up</a>.<br/>\n            Forgot your Password? <a href="/reset">Reset Password</a>.\n        </p>\n        </p>\n    </div>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <h1>Reset Password</h1>\n        <p>We\'ll send you an email.</p>\n        <p class="flex-col">\n            <input type="email" placeholder="Email Address" value=""/>\n            <button>Submit</button>\n        <p>\n            Have an Account? <a href="/login">Log In</a>.<br/>\n            Don\'t have an Account? <a href="/signup">Sign Up</a>.<br/>\n        </p>\n        </p>\n    </div>\n</div>'},function(e,n){e.exports='<div class="container">\n    <h1>Privacy Policy</h1>\n    <p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of\n        Personal Information if you decided to use our Service, the OakFrame website, or any associated properties\n        operated by OakFrame.</p>\n    <p>If you choose to use our Service, then you agree to the collection and use of information in relation with this\n        policy. The Personal Information that we collect are used for providing and improving the Service. We will not\n        use or share your information with anyone except as described in this Privacy Policy.</p>\n\n    <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible\n    at <a href="/terms-of-service">//{hostname}:{port}/terms-of-service</a>, unless otherwise defined in this Privacy Policy.</p>\n\n    <h2>Information Collection and Use</h2>\n    <p>For a better experience while using our Service, we may require you to provide us with certain personally\n        identifiable information, including but not limited to your name, phone number, and postal address. The\n        information that we collect will be used to contact or identify you.</p>\n\n    <h2>Log Data</h2>\n    <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us\n        that is called Log Data. This Log Data may include information such as your computer\'s Internet Protocol (“IP”)\n        address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent\n        on those pages, and other statistics.</p>\n\n    <h2>Cookies</h2>\n    <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent\n        to your browser from the website that you visit and are stored on your computer\'s hard drive.</p>\n\n    <p>Our website uses these "cookies" to collection information and to improve our Service. You have the option to\n        either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to\n        refuse our cookies, you may not be able to use some portions of our Service.</p>\n\n    <h2>Service Providers</h2>\n    <p>We may employ third-party companies and individuals due to the following reasons:</p>\n\n    <p>\n    <ul>\n        <li>To facilitate our Service;</li>\n        <li>To provide the Service on our behalf;</li>\n        <li>To perform Service-related services; or</li>\n        <li>To assist us in analyzing how our Service is used.</li>\n    </ul>\n    We want to inform our Service users that these third parties have access to your Personal Information. The reason is\n    to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the\n    information for any other purpose.</p>\n\n    <h2>Security</h2>\n    <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially\n        acceptable means of protecting it. But remember that no method of transmission over the internet, or method of\n        electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>\n\n    <h2>Links to Other Sites</h2>\n    <p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that\n        site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the\n        Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy\n        policies, or practices of any third-party sites or services.</p>\n\n    <h2>Children\'s Privacy</h2>\n\n    <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable\n        information from children under 13. In the case we discover that a child under 13 has provided us with personal\n        information, we will immediately delete this from our servers. If you are a parent or guardian and you are aware that\n        your child has provided us with personal information, please contact us so that we will be able to do necessary\n        actions.</p>\n\n    <h2>Changes to This Privacy Policy</h2>\n    <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any\n        changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are\n        effective immediately after they are posted on this page.</p>\n\n    <h2>Contact Us</h2>\n    <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>\n</div>'},function(e,n){e.exports='<div class="container">\n    <h1>About OakFrame Application Service</h1>\n    <p>OakFrame should make your life easier.</p>\n</div>'},function(e,n){e.exports='<div class="hero flex">\n\n    <div class="container med">\n        <div class="text-center icon-huge"><i class="fas fa-bezier-curve"></i></div>\n        <h1 class="text-center">Welcome to an OakFrame Application.</h1>\n        <p>\n            <a href="//{hostname}:8080/about"><input type="submit" value="Get Started"/></a>\n        </p>\n    </div>\n</div>'},function(e,n,t){"use strict";t.r(n),t.d(n,"generateStateTemplate",(function(){return H}));class o{constructor(e,n){e instanceof RegExp||(e=new RegExp("^"+e+"$")),this.route=e,this.fn=n}}class i{constructor(e){this.contents=e}getContents(){return this.contents}apply(e){let n="".concat(this.getContents());for(let a in e)t=n,o="{"+a+"}",i=e[a],n=t.replace(new RegExp(""+o,"g"),i);var t,o,i;return n}}var a=t(0),s=t.n(a),r=t(1),c=t.n(r),l=t(2),u=t.n(l),d=t(3),h=t.n(d);class p{constructor(){this._initialized=!1}_init(){}update(){}focus(){}defocus(){}render(){}initialized(){return this._initialized}get init(){return this._init}set init(e){this._init=e}use(e){}}var f=t(4),v=t.n(f);var m=t(5),y=t.n(m);var w=t(6),b=t.n(w);var g=t(7),x=t.n(g);var P=t(8),S=t.n(P);var k=t(9),_=t.n(k);let I=new class extends class{constructor(){this._subscribers=[]}getSubscribers(e){return this._subscribers[e]||(this._subscribers[e]=[]),this._subscribers[e]}subscribe(e,n){this._subscribers[e]||(this._subscribers[e]=[]),this._subscribers[e].push(n)}publish(e,n){this._subscribers[e]&&this._subscribers[e].forEach((function(e){e(n)}))}}{constructor(){super(),this._modules=[];let e=this;this._modules=[],this.stack=[],this.error_stack=[],document.body.addEventListener("click",(function(n){let t=n.target.closest("a");if(t&&t.hasAttribute("href")){let o=t.getAttribute("href").replace(`//${window.location.hostname}:8080`,"");window.navigator.standalone||window.history.pushState({data:"okay"},"unknown",t.getAttribute("href")),e.route(o),n.preventDefault()}}),!1),window.addEventListener("popstate",(function(n){e.route()}))}registerModule(e){this._modules.push(e)}use(e,n){this.stack.push(new o(e,n))}error(e,n){this.error_stack.push(new o(e,n))}route(e){let n=this,t=e||window.location.pathname||window.location.href,o=[];return this.stack.forEach((function(e){t.match(e.route)&&o.push(e)})),new Promise((function(e,t){o.length>0?function n(){if(o.length>0){o.shift().fn().then((function(){n()})).catch((function(e){console.log("CHAIN FAILED"),console.log(e),console.trace(e,"chain failure"),t("Chain Failed")}))}else e()}():(o=n.error_stack.slice(0,n.error_stack.length),function n(){if(o.length>0){o.shift().fn().then((function(){n()})).catch((function(e){console.log("CHAIN FAILED"),console.log(e),console.trace(e,"chain failure"),t("Chain Failed")}))}else e()}())})).then((function(){n.publish("route",!1)}))}},C=new class{isAuthenticated(){return!1}},E=new class extends p{use(){return new Promise((function(e,n){document.body.innerHTML=new i(_.a).apply(H()),e()}))}},L=new class extends p{use(){return new Promise((function(e,n){document.body.innerHTML=new i(s.a).apply(H())+new i(v.a).apply(H()),e()}))}},T=new class extends p{use(){return new Promise((function(e,n){document.body.innerHTML=new i(s.a).apply(H())+new i(y.a).apply(H()),e()}))}},A=new class extends p{use(){return new Promise((function(e,n){document.body.innerHTML=new i(s.a).apply(H())+new i(b.a).apply(H()),e()}))}},O=new class extends p{use(){return new Promise((function(e,n){document.body.innerHTML=new i(s.a).apply(H())+new i(x.a).apply(H()),e()}))}},F=new class extends p{use(){return new Promise((function(e,n){document.body.innerHTML=new i(s.a).apply(H())+new i(S.a).apply(H()),e()}))}};function H(){let e=window.location.pathname.split("/")[2]||"",n={hostname:window.location.hostname,search:decodeURIComponent(e),search_safe:decodeURIComponent(e).replace(/"/g,"&quot;")};return C.isAuthenticated()?n.profile_link="profile":n.profile_link="login",n}function M(e){console.log(e.type)}I.use("/",E.use),I.use("/about",F.use),I.use("/signup",L.use),I.use("/login",T.use),I.use("/reset",A.use),I.use("/privacy",O.use),I.use("/contact",(function(){return new Promise((function(e,n){document.body.innerHTML=new i(s.a).apply(H())+new i(u.a).getContents(),e()}))})),I.use("/search/?(.+)?",(function(){return console.log("SEARCH PAGE"),new Promise((function(e,n){document.body.innerHTML=new i(s.a).apply(H())+new i(h.a).apply(H()),e()}))})),I.error("/([a-zA-Z0-9-]+)?",(function(){return new Promise((function(e,n){document.body.innerHTML=document.body.innerHTML=new i(s.a).apply(H())+new i(c.a).apply(H()),e()}))})),I.subscribe("route",(function(){const e=document.getElementById("pill-search-expand"),n=document.getElementById("pill-search"),t=document.getElementById("pill-search-icon"),o=document.getElementById("navbar");if(!o)return!1;function i(){var o;""!==n.value||document.activeElement===n||(o=e).parentElement.querySelector(":hover")===o?n.className="pill-search-open":n.className="",""!==n.value?t.className="fas fa-arrow-right":t.className="fas fa-search"}e.onmouseenter=i,o.onmouseleave=i,n.onblur=i,e.onclick=function(){n.focus(),i()},n.onkeypress=function(e){13!==e.keyCode&&13!==e.which&&"Enter"!==e.key||(""!==n.value?(window.navigator.standalone||window.history.pushState({data:"okay"},"unknown",`//${window.location.hostname}:8080/search/${encodeURIComponent(n.value)}`),I.route(`/search/${encodeURIComponent(n.value)}`)):this.blur()),i()},t.onclick=function(e){e.preventDefault(),""!==n.value&&(window.navigator.standalone||window.history.pushState({data:"okay"},"unknown",`//${window.location.hostname}:8080/search/${encodeURIComponent(n.value)}`),I.route(`/search/${encodeURIComponent(n.value)}`))},i()})),I.route(),window.applicationCache.addEventListener("checking",M,!1),window.applicationCache.addEventListener("noupdate",M,!1),window.applicationCache.addEventListener("downloading",M,!1),window.applicationCache.addEventListener("cached",M,!1),window.applicationCache.addEventListener("updateready",M,!1),window.applicationCache.addEventListener("obsolete",M,!1),window.applicationCache.addEventListener("error",M,!1)}]);