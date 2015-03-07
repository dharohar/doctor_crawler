if(typeof JSON2!=="object"){JSON2={}}(function(){"use strict";function f(e){return e<10?"0"+e:e}function objectToJSON(e,t){var n=Object.prototype.toString.apply(e);if(n==="[object Date]"){return isFinite(e.valueOf())?e.getUTCFullYear()+"-"+f(e.getUTCMonth()+1)+"-"+f(e.getUTCDate())+"T"+f(e.getUTCHours())+":"+f(e.getUTCMinutes())+":"+f(e.getUTCSeconds())+"Z":null}if(n==="[object String]"||n==="[object Number]"||n==="[object Boolean]"){return e.valueOf()}if(n!=="[object Array]"&&typeof e.toJSON==="function"){return e.toJSON(t)}return e}function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];if(a&&typeof a==="object"){a=objectToJSON(a,e)}if(typeof rep==="function"){a=rep.call(t,e,a)}switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1){u[n]=str(n,a)||"null"}i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]";gap=o;return i}if(rep&&typeof rep==="object"){s=rep.length;for(n=0;n<s;n+=1){if(typeof rep[n]==="string"){r=rep[n];i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}else{for(r in a){if(Object.prototype.hasOwnProperty.call(a,r)){i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}";gap=o;return i}}var cx=new RegExp("[\0­؀-؄܏឴឵‌-‏\u2028- ⁠-⁯﻿￰-￿]","g"),pattern='\\\\\\"\0--­؀-؄܏឴឵‌-‏\u2028- ⁠-⁯﻿￰-￿]',escapable=new RegExp("["+pattern,"g"),gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON2.stringify")}return str("",{"":e})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object"){for(n in i){if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else{delete i[n]}}}}return reviver.call(e,t,i)}var j;text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(text.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON2.parse")}}})();if(typeof _paq!=="object"){_paq=[]}if(typeof Piwik!=="object"){Piwik=function(){"use strict";function isDefined(e){var t=typeof e;return t!=="undefined"}function isFunction(e){return typeof e==="function"}function isObject(e){return typeof e==="object"}function isString(e){return typeof e==="string"||e instanceof String}function apply(){var e,t,n;for(e=0;e<arguments.length;e+=1){n=arguments[e];t=n.shift();if(isString(t)){asyncTracker[t].apply(asyncTracker,n)}else{t.apply(asyncTracker,n)}}}function addEventListener(e,t,n,r){if(e.addEventListener){e.addEventListener(t,n,r);return true}if(e.attachEvent){return e.attachEvent("on"+t,n)}e["on"+t]=n}function executePluginMethod(e,t){var n="",r,i;for(r in plugins){if(Object.prototype.hasOwnProperty.call(plugins,r)){i=plugins[r][e];if(isFunction(i)){n+=i(t)}}}return n}function beforeUnloadHandler(){var e;executePluginMethod("unload");if(expireDateTime){do{e=new Date}while(e.getTimeAlias()<expireDateTime)}}function loadHandler(){var e;if(!hasLoaded){hasLoaded=true;executePluginMethod("load");for(e=0;e<registeredOnLoadHandlers.length;e++){registeredOnLoadHandlers[e]()}}return true}function addReadyListener(){var e;if(documentAlias.addEventListener){addEventListener(documentAlias,"DOMContentLoaded",function t(){documentAlias.removeEventListener("DOMContentLoaded",t,false);loadHandler()})}else if(documentAlias.attachEvent){documentAlias.attachEvent("onreadystatechange",function n(){if(documentAlias.readyState==="complete"){documentAlias.detachEvent("onreadystatechange",n);loadHandler()}});if(documentAlias.documentElement.doScroll&&windowAlias===windowAlias.top){(function r(){if(!hasLoaded){try{documentAlias.documentElement.doScroll("left")}catch(e){setTimeout(r,0);return}loadHandler()}})()}}if((new RegExp("WebKit")).test(navigatorAlias.userAgent)){e=setInterval(function(){if(hasLoaded||/loaded|complete/.test(documentAlias.readyState)){clearInterval(e);loadHandler()}},10)}addEventListener(windowAlias,"load",loadHandler,false)}function loadScript(e,t){var n=documentAlias.createElement("script");n.type="text/javascript";n.src=e;if(n.readyState){n.onreadystatechange=function(){var e=this.readyState;if(e==="loaded"||e==="complete"){n.onreadystatechange=null;t()}}}else{n.onload=t}documentAlias.getElementsByTagName("head")[0].appendChild(n)}function getReferrer(){var e="";try{e=windowAlias.top.document.referrer}catch(t){if(windowAlias.parent){try{e=windowAlias.parent.document.referrer}catch(n){e=""}}}if(e===""){e=documentAlias.referrer}return e}function getProtocolScheme(e){var t=new RegExp("^([a-z]+):"),n=t.exec(e);return n?n[1]:null}function getHostName(e){var t=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),n=t.exec(e);return n?n[1]:e}function getParameter(e,t){var n="[\\?&#]"+t+"=([^&#]*)";var r=new RegExp(n);var i=r.exec(e);return i?decodeWrapper(i[1]):""}function utf8_encode(e){return urldecode(encodeWrapper(e))}function sha1(e){var t=function(e,t){return e<<t|e>>>32-t},n=function(e){var t="",n,r;for(n=7;n>=0;n--){r=e>>>n*4&15;t+=r.toString(16)}return t},r,i,s,o=[],u=1732584193,a=4023233417,f=2562383102,l=271733878,c=3285377520,h,p,d,v,m,g,y,b=[];e=utf8_encode(e);y=e.length;for(i=0;i<y-3;i+=4){s=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3);b.push(s)}switch(y&3){case 0:i=2147483648;break;case 1:i=e.charCodeAt(y-1)<<24|8388608;break;case 2:i=e.charCodeAt(y-2)<<24|e.charCodeAt(y-1)<<16|32768;break;case 3:i=e.charCodeAt(y-3)<<24|e.charCodeAt(y-2)<<16|e.charCodeAt(y-1)<<8|128;break}b.push(i);while((b.length&15)!==14){b.push(0)}b.push(y>>>29);b.push(y<<3&4294967295);for(r=0;r<b.length;r+=16){for(i=0;i<16;i++){o[i]=b[r+i]}for(i=16;i<=79;i++){o[i]=t(o[i-3]^o[i-8]^o[i-14]^o[i-16],1)}h=u;p=a;d=f;v=l;m=c;for(i=0;i<=19;i++){g=t(h,5)+(p&d|~p&v)+m+o[i]+1518500249&4294967295;m=v;v=d;d=t(p,30);p=h;h=g}for(i=20;i<=39;i++){g=t(h,5)+(p^d^v)+m+o[i]+1859775393&4294967295;m=v;v=d;d=t(p,30);p=h;h=g}for(i=40;i<=59;i++){g=t(h,5)+(p&d|p&v|d&v)+m+o[i]+2400959708&4294967295;m=v;v=d;d=t(p,30);p=h;h=g}for(i=60;i<=79;i++){g=t(h,5)+(p^d^v)+m+o[i]+3395469782&4294967295;m=v;v=d;d=t(p,30);p=h;h=g}u=u+h&4294967295;a=a+p&4294967295;f=f+d&4294967295;l=l+v&4294967295;c=c+m&4294967295}g=n(u)+n(a)+n(f)+n(l)+n(c);return g.toLowerCase()}function urlFixup(e,t,n){if(e==="translate.googleusercontent.com"){if(n===""){n=t}t=getParameter(t,"u");e=getHostName(t)}else if(e==="cc.bingj.com"||e==="webcache.googleusercontent.com"||e.slice(0,5)==="74.6."){t=documentAlias.links[0].href;e=getHostName(t)}return[e,t,n]}function domainFixup(e){var t=e.length;if(e.charAt(--t)==="."){e=e.slice(0,t)}if(e.slice(0,2)==="*."){e=e.slice(1)}return e}function titleFixup(e){e=e&&e.text?e.text:e;if(!isString(e)){var t=documentAlias.getElementsByTagName("title");if(t&&isDefined(t[0])){e=t[0].text}}return e}function getPiwikUrlForOverlay(e,t){if(t){return t}if(e.slice(-9)==="piwik.php"){e=e.slice(0,e.length-9)}return e}function isOverlaySession(e){var t="Piwik_Overlay";var n=new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession"+"&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)$");var r=n.exec(documentAlias.referrer);if(r){var i=r[1];if(i!==String(e)){return false}var s=r[2],o=r[3];windowAlias.name=t+"###"+s+"###"+o}var u=windowAlias.name.split("###");return u.length===3&&u[0]===t}function injectOverlayScripts(e,t,n){var r=windowAlias.name.split("###"),i=r[1],s=r[2],o=getPiwikUrlForOverlay(e,t);loadScript(o+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(o,n,i,s)})}function Tracker(trackerUrl,siteId){function setCookie(e,t,n,r,i,s){if(configCookiesDisabled){return}var o;if(n){o=new Date;o.setTime(o.getTime()+n)}documentAlias.cookie=e+"="+encodeWrapper(t)+(n?";expires="+o.toGMTString():"")+";path="+(r||"/")+(i?";domain="+i:"")+(s?";secure":"")}function getCookie(e){if(configCookiesDisabled){return 0}var t=new RegExp("(^|;)[ ]*"+e+"=([^;]*)"),n=t.exec(documentAlias.cookie);return n?decodeWrapper(n[2]):0}function purify(e){var t;if(configDiscardHashTag){t=new RegExp("#.*");return e.replace(t,"")}return e}function resolveRelativeReference(e,t){var n=getProtocolScheme(t),r;if(n){return t}if(t.slice(0,1)==="/"){return getProtocolScheme(e)+"://"+getHostName(e)+t}e=purify(e);r=e.indexOf("?");if(r>=0){e=e.slice(0,r)}r=e.lastIndexOf("/");if(r!==e.length-1){e=e.slice(0,r+1)}return e+t}function isSiteHostName(e){var t,n,r;for(t=0;t<configHostsAlias.length;t++){n=domainFixup(configHostsAlias[t].toLowerCase());if(e===n){return true}if(n.slice(0,1)==="."){if(e===n.slice(1)){return true}r=e.length-n.length;if(r>0&&e.slice(r)===n){return true}}}return false}function getImage(e,t){var n=new Image(1,1);n.onload=function(){iterator=0;if(typeof t==="function"){t()}};n.src=configTrackerUrl+(configTrackerUrl.indexOf("?")<0?"?":"&")+e}function sendXmlHttpRequest(e,t){try{var n=windowAlias.XMLHttpRequest?new windowAlias.XMLHttpRequest:windowAlias.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;n.open("POST",configTrackerUrl,true);n.onreadystatechange=function(){if(this.readyState===4&&!(this.status>=200&&this.status<300)){getImage(e,t)}else{if(typeof t==="function"){t()}}};n.setRequestHeader("Content-Type",configRequestContentType);n.send(e)}catch(r){getImage(e,t)}}function sendRequest(e,t,n){var r=new Date;if(!configDoNotTrack){if(configRequestMethod==="POST"){sendXmlHttpRequest(e,n)}else{getImage(e,n)}expireDateTime=r.getTime()+t}}function getCookieName(e){return configCookieNamePrefix+e+"."+configTrackerSiteId+"."+domainHash}function hasCookies(){if(configCookiesDisabled){return"0"}if(!isDefined(navigatorAlias.cookieEnabled)){var e=getCookieName("testcookie");setCookie(e,"1");return getCookie(e)==="1"?"1":"0"}return navigatorAlias.cookieEnabled?"1":"0"}function updateDomainHash(){domainHash=hash((configCookieDomain||domainAlias)+(configCookiePath||"/")).slice(0,4)}function getCustomVariablesFromCookie(){var e=getCookieName("cvar"),t=getCookie(e);if(t.length){t=JSON2.parse(t);if(isObject(t)){return t}}return{}}function loadCustomVariables(){if(customVariables===false){customVariables=getCustomVariablesFromCookie()}}function activityHandler(){var e=new Date;lastActivityTime=e.getTime()}function setVisitorIdCookie(e,t,n,r,i,s){setCookie(getCookieName("id"),e+"."+t+"."+n+"."+r+"."+i+"."+s,configVisitorCookieTimeout,configCookiePath,configCookieDomain)}function loadVisitorIdCookie(){var e=new Date,t=Math.round(e.getTime()/1e3),n=getCookie(getCookieName("id")),r;if(n){r=n.split(".");r.unshift("0")}else{if(!visitorUUID){visitorUUID=hash((navigatorAlias.userAgent||"")+(navigatorAlias.platform||"")+JSON2.stringify(browserFeatures)+e.getTime()+Math.random()).slice(0,16)}r=["1",visitorUUID,t,0,t,"",""]}return r}function loadReferrerAttributionCookie(){var e=getCookie(getCookieName("ref"));if(e.length){try{e=JSON2.parse(e);if(isObject(e)){return e}}catch(t){}}return["","",0,""]}function deleteCookies(){var e=configCookiesDisabled;configCookiesDisabled=false;setCookie(getCookieName("id"),"",-86400,configCookiePath,configCookieDomain);setCookie(getCookieName("ses"),"",-86400,configCookiePath,configCookieDomain);setCookie(getCookieName("cvar"),"",-86400,configCookiePath,configCookieDomain);setCookie(getCookieName("ref"),"",-86400,configCookiePath,configCookieDomain);configCookiesDisabled=e}function sortObjectByKeys(e){if(!e||!isObject(e)){return}var t=[];var n;for(n in e){if(Object.prototype.hasOwnProperty.call(e,n)){t.push(n)}}var r={};t.sort();var i=t.length;var s;for(s=0;s<i;s++){r[t[s]]=e[t[s]]}return r}function getRequest(e,t,n,r){function M(e,t){var n=JSON2.stringify(e);if(n.length>2){return"&"+t+"="+encodeWrapper(n)}return""}var i,s=new Date,o=Math.round(s.getTime()/1e3),u,a,f,l,c,h,p,d,v,m=1024,g,y,b=customVariables,w=getCookieName("ses"),E=getCookieName("ref"),S=getCookieName("cvar"),x=loadVisitorIdCookie(),T=getCookie(w),N=loadReferrerAttributionCookie(),C=configCustomUrl||locationHrefAlias,k,L;if(configCookiesDisabled){deleteCookies()}if(configDoNotTrack){return""}u=x[0];a=x[1];l=x[2];f=x[3];c=x[4];h=x[5];if(!isDefined(x[6])){x[6]=""}p=x[6];if(!isDefined(r)){r=""}var A=documentAlias.characterSet||documentAlias.charset;if(!A||A.toLowerCase()==="utf-8"){A=null}k=N[0];L=N[1];d=N[2];v=N[3];if(!T){var O=configSessionCookieTimeout/1e3;if(!h||o-h>O){f++;h=c}if(!configConversionAttributionFirstReferrer||!k.length){for(i in configCampaignNameParameters){if(Object.prototype.hasOwnProperty.call(configCampaignNameParameters,i)){k=getParameter(C,configCampaignNameParameters[i]);if(k.length){break}}}for(i in configCampaignKeywordParameters){if(Object.prototype.hasOwnProperty.call(configCampaignKeywordParameters,i)){L=getParameter(C,configCampaignKeywordParameters[i]);if(L.length){break}}}}g=getHostName(configReferrerUrl);y=v.length?getHostName(v):"";if(g.length&&!isSiteHostName(g)&&(!configConversionAttributionFirstReferrer||!y.length||isSiteHostName(y))){v=configReferrerUrl}if(v.length||k.length){d=o;N=[k,L,d,purify(v.slice(0,m))];setCookie(E,JSON2.stringify(N),configReferralCookieTimeout,configCookiePath,configCookieDomain)}}e+="&idsite="+configTrackerSiteId+"&rec=1"+"&r="+String(Math.random()).slice(2,8)+"&h="+s.getHours()+"&m="+s.getMinutes()+"&s="+s.getSeconds()+"&url="+encodeWrapper(purify(C))+(configReferrerUrl.length?"&urlref="+encodeWrapper(purify(configReferrerUrl)):"")+"&_id="+a+"&_idts="+l+"&_idvc="+f+"&_idn="+u+(k.length?"&_rcn="+encodeWrapper(k):"")+(L.length?"&_rck="+encodeWrapper(L):"")+"&_refts="+d+"&_viewts="+h+(String(p).length?"&_ects="+p:"")+(String(v).length?"&_ref="+encodeWrapper(purify(v.slice(0,m))):"")+(A?"&cs="+encodeWrapper(A):"");for(i in browserFeatures){if(Object.prototype.hasOwnProperty.call(browserFeatures,i)){e+="&"+i+"="+browserFeatures[i]}}if(t){e+="&data="+encodeWrapper(JSON2.stringify(t))}else if(configCustomData){e+="&data="+encodeWrapper(JSON2.stringify(configCustomData))}var _=sortObjectByKeys(customVariablesPage);var D=sortObjectByKeys(customVariablesEvent);e+=M(_,"cvar");e+=M(D,"e_cvar");if(customVariables){e+=M(customVariables,"_cvar");for(i in b){if(Object.prototype.hasOwnProperty.call(b,i)){if(customVariables[i][0]===""||customVariables[i][1]===""){delete customVariables[i]}}}if(configStoreCustomVariablesInCookie){setCookie(S,JSON2.stringify(customVariables),configSessionCookieTimeout,configCookiePath,configCookieDomain)}}if(configPerformanceTrackingEnabled){if(configPerformanceGenerationTime){e+="&gt_ms="+configPerformanceGenerationTime}else if(performanceAlias&&performanceAlias.timing&&performanceAlias.timing.requestStart&&performanceAlias.timing.responseEnd){e+="&gt_ms="+(performanceAlias.timing.responseEnd-performanceAlias.timing.requestStart)}}setVisitorIdCookie(a,l,f,o,h,isDefined(r)&&String(r).length?r:p);setCookie(w,"*",configSessionCookieTimeout,configCookiePath,configCookieDomain);e+=executePluginMethod(n);if(configAppendToTrackingUrl.length){e+="&"+configAppendToTrackingUrl}if(isFunction(configCustomRequestContentProcessing)){e=configCustomRequestContentProcessing(e)}return e}function logEcommerce(e,t,n,r,i,s){var o="idgoal=0",u,a=new Date,f=[],l;if(String(e).length){o+="&ec_id="+encodeWrapper(e);u=Math.round(a.getTime()/1e3)}o+="&revenue="+t;if(String(n).length){o+="&ec_st="+n}if(String(r).length){o+="&ec_tx="+r}if(String(i).length){o+="&ec_sh="+i}if(String(s).length){o+="&ec_dt="+s}if(ecommerceItems){for(l in ecommerceItems){if(Object.prototype.hasOwnProperty.call(ecommerceItems,l)){if(!isDefined(ecommerceItems[l][1])){ecommerceItems[l][1]=""}if(!isDefined(ecommerceItems[l][2])){ecommerceItems[l][2]=""}if(!isDefined(ecommerceItems[l][3])||String(ecommerceItems[l][3]).length===0){ecommerceItems[l][3]=0}if(!isDefined(ecommerceItems[l][4])||String(ecommerceItems[l][4]).length===0){ecommerceItems[l][4]=1}f.push(ecommerceItems[l])}}o+="&ec_items="+encodeWrapper(JSON2.stringify(f))}o=getRequest(o,configCustomData,"ecommerce",u);sendRequest(o,configTrackerPause)}function logEcommerceOrder(e,t,n,r,i,s){if(String(e).length&&isDefined(t)){logEcommerce(e,t,n,r,i,s)}}function logEcommerceCartUpdate(e){if(isDefined(e)){logEcommerce("",e,"","","","")}}function logPageView(e,t){var n=new Date,r=getRequest("action_name="+encodeWrapper(titleFixup(e||configTitle)),t,"log");sendRequest(r,configTrackerPause);if(configMinimumVisitTime&&configHeartBeatTimer&&!activityTrackingInstalled){activityTrackingInstalled=true;addEventListener(documentAlias,"click",activityHandler);addEventListener(documentAlias,"mouseup",activityHandler);addEventListener(documentAlias,"mousedown",activityHandler);addEventListener(documentAlias,"mousemove",activityHandler);addEventListener(documentAlias,"mousewheel",activityHandler);addEventListener(windowAlias,"DOMMouseScroll",activityHandler);addEventListener(windowAlias,"scroll",activityHandler);addEventListener(documentAlias,"keypress",activityHandler);addEventListener(documentAlias,"keydown",activityHandler);addEventListener(documentAlias,"keyup",activityHandler);addEventListener(windowAlias,"resize",activityHandler);addEventListener(windowAlias,"focus",activityHandler);addEventListener(windowAlias,"blur",activityHandler);lastActivityTime=n.getTime();setTimeout(function i(){var e;n=new Date;if(lastActivityTime+configHeartBeatTimer>n.getTime()){if(configMinimumVisitTime<n.getTime()){e=getRequest("ping=1",t,"ping");sendRequest(e,configTrackerPause)}setTimeout(i,configHeartBeatTimer)}},configHeartBeatTimer)}}function logEvent(e,t,n,r,i){if(String(e).length===0||String(t).length===0){return false}var s=getRequest("e_c="+encodeWrapper(e)+"&e_a="+encodeWrapper(t)+(isDefined(n)?"&e_n="+encodeWrapper(n):"")+(isDefined(r)?"&e_v="+encodeWrapper(r):""),i,"event");sendRequest(s,configTrackerPause)}function logSiteSearch(e,t,n,r){var i=getRequest("search="+encodeWrapper(e)+(t?"&search_cat="+encodeWrapper(t):"")+(isDefined(n)?"&search_count="+n:""),r,"sitesearch");sendRequest(i,configTrackerPause)}function logGoal(e,t,n){var r=getRequest("idgoal="+e+(t?"&revenue="+t:""),n,"goal");sendRequest(r,configTrackerPause)}function logLink(e,t,n,r){var i=getRequest(t+"="+encodeWrapper(purify(e)),n,"link");sendRequest(i,r?0:configTrackerPause,r)}function prefixPropertyName(e,t){if(e!==""){return e+t.charAt(0).toUpperCase()+t.slice(1)}return t}function trackCallback(e){var t,n,r=["","webkit","ms","moz"],i;if(!configCountPreRendered){for(n=0;n<r.length;n++){i=r[n];if(Object.prototype.hasOwnProperty.call(documentAlias,prefixPropertyName(i,"hidden"))){if(documentAlias[prefixPropertyName(i,"visibilityState")]==="prerender"){t=true}break}}}if(t){addEventListener(documentAlias,i+"visibilitychange",function s(){documentAlias.removeEventListener(i+"visibilitychange",s,false);e()});return}e()}function getClassesRegExp(e,t){var n,r="(^| )(piwik[_-]"+t;if(e){for(n=0;n<e.length;n++){r+="|"+e[n]}}r+=")( |$)";return new RegExp(r)}function getLinkType(e,t,n){var r=getClassesRegExp(configDownloadClasses,"download"),i=getClassesRegExp(configLinkClasses,"link"),s=new RegExp("\\.("+configDownloadExtensions+")([?&#]|$)","i");return i.test(e)?"link":r.test(e)||s.test(t)?"download":n?0:"link"}function processClick(e){var t,n,r;t=e.parentNode;while(t!==null&&isDefined(t)){n=e.tagName.toUpperCase();if(n==="A"||n==="AREA"){break}e=t;t=e.parentNode}if(isDefined(e.href)){var i=e.hostname||getHostName(e.href),s=i.toLowerCase(),o=e.href.replace(i,s),u=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!u.test(o)){r=getLinkType(e.className,o,isSiteHostName(s));if(r){o=urldecode(o);logLink(o,r)}}}}function clickHandler(e){var t,n;e=e||windowAlias.event;t=e.which||e.button;n=e.target||e.srcElement;if(e.type==="click"){if(n){processClick(n)}}else if(e.type==="mousedown"){if((t===1||t===2)&&n){lastButton=t;lastTarget=n}else{lastButton=lastTarget=null}}else if(e.type==="mouseup"){if(t===lastButton&&n===lastTarget){processClick(n)}lastButton=lastTarget=null}}function addClickListener(e,t){if(t){addEventListener(e,"mouseup",clickHandler,false);addEventListener(e,"mousedown",clickHandler,false)}else{addEventListener(e,"click",clickHandler,false)}}function addClickListeners(e){if(!linkTrackingInstalled){linkTrackingInstalled=true;var t,n=getClassesRegExp(configIgnoreClasses,"ignore"),r=documentAlias.links;if(r){for(t=0;t<r.length;t++){if(!n.test(r[t].className)){addClickListener(r[t],e)}}}}}function detectBrowserFeatures(){var e,t,n={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},r=(new RegExp("Mac OS X.*Safari/")).test(navigatorAlias.userAgent)?windowAlias.devicePixelRatio||1:1;if(!(new RegExp("MSIE")).test(navigatorAlias.userAgent)){if(navigatorAlias.mimeTypes&&navigatorAlias.mimeTypes.length){for(e in n){if(Object.prototype.hasOwnProperty.call(n,e)){t=navigatorAlias.mimeTypes[n[e]];browserFeatures[e]=t&&t.enabledPlugin?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&isDefined(navigatorAlias.javaEnabled)&&navigatorAlias.javaEnabled()){browserFeatures.java="1"}if(isFunction(windowAlias.GearsFactory)){browserFeatures.gears="1"}browserFeatures.cookie=hasCookies()}browserFeatures.res=screenAlias.width*r+"x"+screenAlias.height*r}function registerHook(hookName,userHook){var hookObj=null;if(isString(hookName)&&!isDefined(registeredHooks[hookName])&&userHook){if(isObject(userHook)){hookObj=userHook}else if(isString(userHook)){try{eval("hookObj ="+userHook)}catch(ignore){}}registeredHooks[hookName]=hookObj}return hookObj}var registeredHooks={},locationArray=urlFixup(documentAlias.domain,windowAlias.location.href,getReferrer()),domainAlias=domainFixup(locationArray[0]),locationHrefAlias=locationArray[1],configReferrerUrl=locationArray[2],enableJSErrorTracking=false,defaultRequestMethod="GET",configRequestMethod=defaultRequestMethod,defaultRequestContentType="application/x-www-form-urlencoded; charset=UTF-8",configRequestContentType=defaultRequestContentType,configTrackerUrl=trackerUrl||"",configApiUrl="",configAppendToTrackingUrl="",configTrackerSiteId=siteId||"",configCustomUrl,configTitle=documentAlias.title,configDownloadExtensions="7z|aac|apk|ar[cj]|as[fx]|avi|azw3|bin|csv|deb|dmg|docx?|epub|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mobi|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip",configHostsAlias=[domainAlias],configIgnoreClasses=[],configDownloadClasses=[],configLinkClasses=[],configTrackerPause=500,configMinimumVisitTime,configHeartBeatTimer,configDiscardHashTag,configCustomData,configCampaignNameParameters=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],configCampaignKeywordParameters=["pk_kwd","piwik_kwd","utm_term"],configCookieNamePrefix="_pk_",configCookieDomain,configCookiePath,configCookiesDisabled=false,configDoNotTrack,configCountPreRendered,configConversionAttributionFirstReferrer,configVisitorCookieTimeout=63072e6,configSessionCookieTimeout=18e5,configReferralCookieTimeout=15768e6,configPerformanceTrackingEnabled=true,configPerformanceGenerationTime=0,configStoreCustomVariablesInCookie=false,customVariables=false,configCustomRequestContentProcessing,customVariablesPage={},customVariablesEvent={},customVariableMaximumLength=500,ecommerceItems={},browserFeatures={},linkTrackingInstalled=false,activityTrackingInstalled=false,lastActivityTime,lastButton,lastTarget,hash=sha1,domainHash,visitorUUID;detectBrowserFeatures();updateDomainHash();executePluginMethod("run",registerHook);return{hook:registeredHooks,getHook:function(e){return registeredHooks[e]},getVisitorId:function(){return loadVisitorIdCookie()[1]},getVisitorInfo:function(){return loadVisitorIdCookie()},getAttributionInfo:function(){return loadReferrerAttributionCookie()},getAttributionCampaignName:function(){return loadReferrerAttributionCookie()[0]},getAttributionCampaignKeyword:function(){return loadReferrerAttributionCookie()[1]},getAttributionReferrerTimestamp:function(){return loadReferrerAttributionCookie()[2]},getAttributionReferrerUrl:function(){return loadReferrerAttributionCookie()[3]},setTrackerUrl:function(e){configTrackerUrl=e},setSiteId:function(e){configTrackerSiteId=e},setCustomData:function(e,t){if(isObject(e)){configCustomData=e}else{if(!configCustomData){configCustomData=[]}configCustomData[e]=t}},getCustomData:function(){return configCustomData},setCustomRequestProcessing:function(e){configCustomRequestContentProcessing=e},appendToTrackingUrl:function(e){configAppendToTrackingUrl=e},getRequest:function(e){return getRequest(e)},addPlugin:function(e,t){plugins[e]=t},setCustomVariable:function(e,t,n,r){var i;if(!isDefined(r)){r="visit"}if(!isDefined(t)){return}if(!isDefined(n)){n=""}if(e>0){t=!isString(t)?String(t):t;n=!isString(n)?String(n):n;i=[t.slice(0,customVariableMaximumLength),n.slice(0,customVariableMaximumLength)];if(r==="visit"||r===2){loadCustomVariables();customVariables[e]=i}else if(r==="page"||r===3){customVariablesPage[e]=i}else if(r==="event"){customVariablesEvent[e]=i}}},getCustomVariable:function(e,t){var n;if(!isDefined(t)){t="visit"}if(t==="page"||t===3){n=customVariablesPage[e]}else if(t==="event"){n=customVariablesEvent[e]}else if(t==="visit"||t===2){loadCustomVariables();n=customVariables[e]}if(!isDefined(n)||n&&n[0]===""){return false}return n},deleteCustomVariable:function(e,t){if(this.getCustomVariable(e,t)){this.setCustomVariable(e,"","",t)}},storeCustomVariablesInCookie:function(){configStoreCustomVariablesInCookie=true},setLinkTrackingTimer:function(e){configTrackerPause=e},setDownloadExtensions:function(e){configDownloadExtensions=e},addDownloadExtensions:function(e){configDownloadExtensions+="|"+e},setDomains:function(e){configHostsAlias=isString(e)?[e]:e;configHostsAlias.push(domainAlias)},setIgnoreClasses:function(e){configIgnoreClasses=isString(e)?[e]:e},setRequestMethod:function(e){configRequestMethod=e||defaultRequestMethod},setRequestContentType:function(e){configRequestContentType=e||defaultRequestContentType},setReferrerUrl:function(e){configReferrerUrl=e},setCustomUrl:function(e){configCustomUrl=resolveRelativeReference(locationHrefAlias,e)},setDocumentTitle:function(e){configTitle=e},setAPIUrl:function(e){configApiUrl=e},setDownloadClasses:function(e){configDownloadClasses=isString(e)?[e]:e},setLinkClasses:function(e){configLinkClasses=isString(e)?[e]:e},setCampaignNameKey:function(e){configCampaignNameParameters=isString(e)?[e]:e},setCampaignKeywordKey:function(e){configCampaignKeywordParameters=isString(e)?[e]:e},discardHashTag:function(e){configDiscardHashTag=e},setCookieNamePrefix:function(e){configCookieNamePrefix=e;customVariables=getCustomVariablesFromCookie()},setCookieDomain:function(e){configCookieDomain=domainFixup(e);updateDomainHash()},setCookiePath:function(e){configCookiePath=e;updateDomainHash()},setVisitorCookieTimeout:function(e){configVisitorCookieTimeout=e*1e3},setSessionCookieTimeout:function(e){configSessionCookieTimeout=e*1e3},setReferralCookieTimeout:function(e){configReferralCookieTimeout=e*1e3},setConversionAttributionFirstReferrer:function(e){configConversionAttributionFirstReferrer=e},disableCookies:function(){configCookiesDisabled=true;browserFeatures.cookie="0"},deleteCookies:function(){deleteCookies()},setDoNotTrack:function(e){var t=navigatorAlias.doNotTrack||navigatorAlias.msDoNotTrack;configDoNotTrack=e&&(t==="yes"||t==="1");if(configDoNotTrack){this.disableCookies()}},addListener:function(e,t){addClickListener(e,t)},enableLinkTracking:function(e){if(hasLoaded){addClickListeners(e)}else{registeredOnLoadHandlers.push(function(){addClickListeners(e)})}},enableJSErrorTracking:function(){if(enableJSErrorTracking){return}enableJSErrorTracking=true;var e=windowAlias.onerror;windowAlias.onerror=function(t,n,r,i,s){trackCallback(function(){var e="JavaScript Errors";var s=n+":"+r;if(i){s+=":"+i}logEvent(e,s,t)});if(e){return e(t,n,r,i,s)}return false}},disablePerformanceTracking:function(){configPerformanceTrackingEnabled=false},setGenerationTimeMs:function(e){configPerformanceGenerationTime=parseInt(e,10)},setHeartBeatTimer:function(e,t){var n=new Date;configMinimumVisitTime=n.getTime()+e*1e3;configHeartBeatTimer=t*1e3},killFrame:function(){if(windowAlias.location!==windowAlias.top.location){windowAlias.top.location=windowAlias.location}},redirectFile:function(e){if(windowAlias.location.protocol==="file:"){windowAlias.location=e}},setCountPreRendered:function(e){configCountPreRendered=e},trackGoal:function(e,t,n){trackCallback(function(){logGoal(e,t,n)})},trackLink:function(e,t,n,r){trackCallback(function(){logLink(e,t,n,r)})},trackPageView:function(e,t){if(isOverlaySession(configTrackerSiteId)){trackCallback(function(){injectOverlayScripts(configTrackerUrl,configApiUrl,configTrackerSiteId)})}else{trackCallback(function(){logPageView(e,t)})}},trackEvent:function(e,t,n,r){trackCallback(function(){logEvent(e,t,n,r)})},trackSiteSearch:function(e,t,n){trackCallback(function(){logSiteSearch(e,t,n)})},setEcommerceView:function(e,t,n,r){if(!isDefined(n)||!n.length){n=""}else if(n instanceof Array){n=JSON2.stringify(n)}customVariablesPage[5]=["_pkc",n];if(isDefined(r)&&String(r).length){customVariablesPage[2]=["_pkp",r]}if((!isDefined(e)||!e.length)&&(!isDefined(t)||!t.length)){return}if(isDefined(e)&&e.length){customVariablesPage[3]=["_pks",e]}if(!isDefined(t)||!t.length){t=""}customVariablesPage[4]=["_pkn",t]},addEcommerceItem:function(e,t,n,r,i){if(e.length){ecommerceItems[e]=[e,t,n,r,i]}},trackEcommerceOrder:function(e,t,n,r,i,s){logEcommerceOrder(e,t,n,r,i,s)},trackEcommerceCartUpdate:function(e){logEcommerceCartUpdate(e)}}}function TrackerProxy(){return{push:apply}}var expireDateTime,plugins={},documentAlias=document,navigatorAlias=navigator,screenAlias=screen,windowAlias=window,performanceAlias=windowAlias.performance||windowAlias.mozPerformance||windowAlias.msPerformance||windowAlias.webkitPerformance,hasLoaded=false,registeredOnLoadHandlers=[],encodeWrapper=windowAlias.encodeURIComponent,decodeWrapper=windowAlias.decodeURIComponent,urldecode=unescape,asyncTracker,iterator,Piwik;addEventListener(windowAlias,"beforeunload",beforeUnloadHandler,false);addReadyListener();Date.prototype.getTimeAlias=Date.prototype.getTime;asyncTracker=new Tracker;var applyFirst={setTrackerUrl:1,setAPIUrl:1,setSiteId:1,disableCookies:1};var methodName;for(iterator=0;iterator<_paq.length;iterator++){methodName=_paq[iterator][0];if(applyFirst[methodName]){apply(_paq[iterator]);delete _paq[iterator];if(applyFirst[methodName]>1){if(console!==undefined&&console&&console.error){console.error("The method "+methodName+' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/api-reference/tracking-javascript#multiple-piwik-trackers')}}applyFirst[methodName]++}}for(iterator=0;iterator<_paq.length;iterator++){if(_paq[iterator]){apply(_paq[iterator])}}_paq=new TrackerProxy;Piwik={addPlugin:function(e,t){plugins[e]=t},getTracker:function(e,t){return new Tracker(e,t)},getAsyncTracker:function(){return asyncTracker}};if(typeof define==="function"&&define.amd){define("piwik",[],function(){return Piwik})}return Piwik}()}if(window&&window.piwikAsyncInit){window.piwikAsyncInit()}(function(){var e=typeof AnalyticsTracker;if(e==="undefined"){AnalyticsTracker=Piwik}})();if(typeof piwik_log!=="function"){piwik_log=function(documentTitle,siteId,piwikUrl,customData){"use strict";function getOption(optionName){try{return eval("piwik_"+optionName)}catch(ignore){}return}var option,piwikTracker=Piwik.getTracker(piwikUrl,siteId);piwikTracker.setDocumentTitle(documentTitle);piwikTracker.setCustomData(customData);option=getOption("tracker_pause");if(option){piwikTracker.setLinkTrackingTimer(option)}option=getOption("download_extensions");if(option){piwikTracker.setDownloadExtensions(option)}option=getOption("hosts_alias");if(option){piwikTracker.setDomains(option)}option=getOption("ignore_classes");if(option){piwikTracker.setIgnoreClasses(option)}piwikTracker.trackPageView();if(getOption("install_tracker")){piwik_track=function(e,t,n,r){piwikTracker.setSiteId(t);piwikTracker.setTrackerUrl(n);piwikTracker.trackLink(e,r)};piwikTracker.enableLinkTracking()}}}