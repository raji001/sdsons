window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/www.sdsons.in\/new\/wp-includes\/js\/wp-emoji-release.min.js"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){p.clearRect(0,0,i.width,i.height),p.fillText(e,0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(t,0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(p&&p.fillText)switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!s("\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!s("\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);;
/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+n[a]>+o[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.0";var t=Object.create(null),o=(s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion)),{});function i(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return i(n,o),r},set:function(e){i(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&i(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function u(e,t,r,n,o){if(!o)throw new Error("No warning message provided");a(e,t,r,n,o)}function d(e,t,r,n){a(e,t,r,n)}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&i("quirks","jQuery is not compatible with Quirks Mode");var c,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(c in d(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(i("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,d(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),i("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){i("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,c)&&(s.find[c]=y[c]);u(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),u(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),u(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),u(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&u(s,"trim",function(e){return null==e?"":(e+"").replace(v,"")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(u(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),u(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(u(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),u(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),u(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),u(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,d(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(u(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),u(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),u(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&i("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function Q(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}d(s.fn,"removeAttr",function(e){var r=this;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&(i("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),d(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(i("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var x,A=!1,R=/^[a-z]/,T=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return A=!0,e=r.apply(this,arguments),A=!1,e})}),d(s,"swap",function(e,t,r,n){var o,a={};for(o in A||i("swap","jQuery.swap() is undocumented and deprecated"),t)a[o]=e.style[o],e.style[o]=t[o];for(o in r=r.apply(e,n||[]),t)e.style[o]=a[o];return r},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return i("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")&&"undefined"!=typeof Proxy&&(s.cssNumber=new Proxy({animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},{get:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}})),x=s.fn.css,d(s.fn,"css",function(e,t){var r,n=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(n,e,t)}),this):("number"==typeof t&&(t=Q(e),r=t,R.test(r)&&T.test(r[0].toUpperCase()+r.slice(1))||s.cssNumber[t]||i("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),x.apply(this,arguments))},"css-number");function C(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var S,N,P,k,H,E,M,q=s.data,D=(d(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&q.call(this,e),o={},t)a!==Q(a)?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return q.call(this,e,o),t}return t&&"string"==typeof t&&t!==Q(t)&&(n=s.hasData(e)&&q.call(this,e))&&t in n?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):q.apply(this,arguments)},"data-camelCase"),s.fx&&(P=s.Tween.prototype.run,k=function(e){return e},d(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(i("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=k),P.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,N="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||i("fx-interval",N),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){i("fx-interval",N),S=e}})),s.fn.load),F=s.event.add,W=s.event.fix,O=(s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),d(s.event,"fix",function(e){var t=e.type,r=this.fixHooks[t],n=s.event.props;if(n.length){i("event-old-patch","jQuery.event.props are deprecated and removed: "+n.join());while(n.length)s.event.addProp(n.pop())}if(r&&!r._migrated_&&(r._migrated_=!0,i("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+t),(n=r.props)&&n.length))while(n.length)s.event.addProp(n.pop());return t=W.call(this,e),r&&r.filter?r.filter(t,e):t},"event-old-patch"),d(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&i("load-after-event","jQuery(window).on('load'...) called after load event occurred"),F.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){d(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?D.apply(this,e):(i("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){u(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&i("ready-event","'ready' event is deprecated")}},u(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),u(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),u(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),u(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),u(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated"),/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),_=(s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},d(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(O,"<$1></$2>"))!==t&&C(t)!==C(r)&&i("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(O,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags"),s.fn.offset);return d(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(i("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(H=s.param,d(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(i("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),H.call(this,e,t)},"param-ajax-traditional")),u(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(E=s.Deferred,M=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],d(s,"Deferred",function(e){var a=E(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(M,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return u(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),u(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=E.exceptionHook),s});
;
(function($){'use strict';$(document).ready(function(){$(document).on('click','.ays_music_sound',function(){var $this=$(this);var audioEl=$(document).find('.ays_pb_sound').get(0);if($this.hasClass('ays_sound_active')){audioEl.volume=0;$this.find('.ays_pb_fa_volume').remove();$this.html(pbLocalizeObj.icons.volume_mute_icon);$this.find('.ays_pb_fa_volume').addClass('ays_pb_fa_volume_off').removeClass('ays_pb_fa_volume');$this.removeClass('ays_sound_active')}else{audioEl.volume=1;$this.find('.ays_pb_fa_volume_off').remove();$this.html(pbLocalizeObj.icons.volume_up_icon);$this.find('.ays_pb_fa_volume_off').addClass('ays_pb_fa_volume').removeClass('ays_pb_fa_volume_off');$this.addClass('ays_sound_active')}});$(document).on('click','#ays_pb_dismiss_ad',function(){var expTime=$(this).parent().data('dismiss');var id=$(this).parent().data('id');if(expTime!=''){set_cookies('ays_pb_dismiss_ad_'+id,'ays_pb_dismiss_ad_'+id,parseInt(expTime))}else{var expiryDate=new Date();expiryDate.setMonth(expiryDate.getMonth()+1);set_cookies('ays_pb_dismiss_ad_'+id,'ays_pb_dismiss_ad_'+id,expiryDate)}
$(document).find('.ays-pb-modal-close_'+id).trigger('click')});function set_cookies(cname,cvalue,exdays){var expires="expires="+(new Date(Date.now()+exdays)).toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"}})})(jQuery);window.onload=function(){var classList=document.body.classList;document.ontouchmove=function(e){for(var i=0;i<classList.length;i++){if(classList[i]=='pb_disable_scroll'){if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)){e.preventDefault()}
break}else if(classList[i]=='pb_enable_scroll'){if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)){!0}
break}}}};
/*!
 * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var l,a;l=this,a=function(){"use strict";var l={},a={};try{"undefined"!=typeof window&&(l=window),"undefined"!=typeof document&&(a=document)}catch(l){}var e=(l.navigator||{}).userAgent,r=void 0===e?"":e,n=l,o=a,u=(n.document,!!o.documentElement&&!!o.head&&"function"==typeof o.addEventListener&&o.createElement,~r.indexOf("MSIE")||r.indexOf("Trident/"),"___FONT_AWESOME___"),t=function(){try{return"production"===process.env.NODE_ENV}catch(l){return!1}}();var f=n||{};f[u]||(f[u]={}),f[u].styles||(f[u].styles={}),f[u].hooks||(f[u].hooks={}),f[u].shims||(f[u].shims=[]);var i=f[u],s=[["glass",null,"glass-martini"],["meetup","fab",null],["star-o","far","star"],["remove",null,"times"],["close",null,"times"],["gear",null,"cog"],["trash-o","far","trash-alt"],["file-o","far","file"],["clock-o","far","clock"],["arrow-circle-o-down","far","arrow-alt-circle-down"],["arrow-circle-o-up","far","arrow-alt-circle-up"],["play-circle-o","far","play-circle"],["repeat",null,"redo"],["rotate-right",null,"redo"],["refresh",null,"sync"],["list-alt","far",null],["dedent",null,"outdent"],["video-camera",null,"video"],["picture-o","far","image"],["photo","far","image"],["image","far","image"],["pencil",null,"pencil-alt"],["map-marker",null,"map-marker-alt"],["pencil-square-o","far","edit"],["share-square-o","far","share-square"],["check-square-o","far","check-square"],["arrows",null,"arrows-alt"],["times-circle-o","far","times-circle"],["check-circle-o","far","check-circle"],["mail-forward",null,"share"],["expand",null,"expand-alt"],["compress",null,"compress-alt"],["eye","far",null],["eye-slash","far",null],["warning",null,"exclamation-triangle"],["calendar",null,"calendar-alt"],["arrows-v",null,"arrows-alt-v"],["arrows-h",null,"arrows-alt-h"],["bar-chart","far","chart-bar"],["bar-chart-o","far","chart-bar"],["twitter-square","fab",null],["facebook-square","fab",null],["gears",null,"cogs"],["thumbs-o-up","far","thumbs-up"],["thumbs-o-down","far","thumbs-down"],["heart-o","far","heart"],["sign-out",null,"sign-out-alt"],["linkedin-square","fab","linkedin"],["thumb-tack",null,"thumbtack"],["external-link",null,"external-link-alt"],["sign-in",null,"sign-in-alt"],["github-square","fab",null],["lemon-o","far","lemon"],["square-o","far","square"],["bookmark-o","far","bookmark"],["twitter","fab",null],["facebook","fab","facebook-f"],["facebook-f","fab","facebook-f"],["github","fab",null],["credit-card","far",null],["feed",null,"rss"],["hdd-o","far","hdd"],["hand-o-right","far","hand-point-right"],["hand-o-left","far","hand-point-left"],["hand-o-up","far","hand-point-up"],["hand-o-down","far","hand-point-down"],["arrows-alt",null,"expand-arrows-alt"],["group",null,"users"],["chain",null,"link"],["scissors",null,"cut"],["files-o","far","copy"],["floppy-o","far","save"],["navicon",null,"bars"],["reorder",null,"bars"],["pinterest","fab",null],["pinterest-square","fab",null],["google-plus-square","fab",null],["google-plus","fab","google-plus-g"],["money","far","money-bill-alt"],["unsorted",null,"sort"],["sort-desc",null,"sort-down"],["sort-asc",null,"sort-up"],["linkedin","fab","linkedin-in"],["rotate-left",null,"undo"],["legal",null,"gavel"],["tachometer",null,"tachometer-alt"],["dashboard",null,"tachometer-alt"],["comment-o","far","comment"],["comments-o","far","comments"],["flash",null,"bolt"],["clipboard","far",null],["paste","far","clipboard"],["lightbulb-o","far","lightbulb"],["exchange",null,"exchange-alt"],["cloud-download",null,"cloud-download-alt"],["cloud-upload",null,"cloud-upload-alt"],["bell-o","far","bell"],["cutlery",null,"utensils"],["file-text-o","far","file-alt"],["building-o","far","building"],["hospital-o","far","hospital"],["tablet",null,"tablet-alt"],["mobile",null,"mobile-alt"],["mobile-phone",null,"mobile-alt"],["circle-o","far","circle"],["mail-reply",null,"reply"],["github-alt","fab",null],["folder-o","far","folder"],["folder-open-o","far","folder-open"],["smile-o","far","smile"],["frown-o","far","frown"],["meh-o","far","meh"],["keyboard-o","far","keyboard"],["flag-o","far","flag"],["mail-reply-all",null,"reply-all"],["star-half-o","far","star-half"],["star-half-empty","far","star-half"],["star-half-full","far","star-half"],["code-fork",null,"code-branch"],["chain-broken",null,"unlink"],["shield",null,"shield-alt"],["calendar-o","far","calendar"],["maxcdn","fab",null],["html5","fab",null],["css3","fab",null],["ticket",null,"ticket-alt"],["minus-square-o","far","minus-square"],["level-up",null,"level-up-alt"],["level-down",null,"level-down-alt"],["pencil-square",null,"pen-square"],["external-link-square",null,"external-link-square-alt"],["compass","far",null],["caret-square-o-down","far","caret-square-down"],["toggle-down","far","caret-square-down"],["caret-square-o-up","far","caret-square-up"],["toggle-up","far","caret-square-up"],["caret-square-o-right","far","caret-square-right"],["toggle-right","far","caret-square-right"],["eur",null,"euro-sign"],["euro",null,"euro-sign"],["gbp",null,"pound-sign"],["usd",null,"dollar-sign"],["dollar",null,"dollar-sign"],["inr",null,"rupee-sign"],["rupee",null,"rupee-sign"],["jpy",null,"yen-sign"],["cny",null,"yen-sign"],["rmb",null,"yen-sign"],["yen",null,"yen-sign"],["rub",null,"ruble-sign"],["ruble",null,"ruble-sign"],["rouble",null,"ruble-sign"],["krw",null,"won-sign"],["won",null,"won-sign"],["btc","fab",null],["bitcoin","fab","btc"],["file-text",null,"file-alt"],["sort-alpha-asc",null,"sort-alpha-down"],["sort-alpha-desc",null,"sort-alpha-down-alt"],["sort-amount-asc",null,"sort-amount-down"],["sort-amount-desc",null,"sort-amount-down-alt"],["sort-numeric-asc",null,"sort-numeric-down"],["sort-numeric-desc",null,"sort-numeric-down-alt"],["youtube-square","fab",null],["youtube","fab",null],["xing","fab",null],["xing-square","fab",null],["youtube-play","fab","youtube"],["dropbox","fab",null],["stack-overflow","fab",null],["instagram","fab",null],["flickr","fab",null],["adn","fab",null],["bitbucket","fab",null],["bitbucket-square","fab","bitbucket"],["tumblr","fab",null],["tumblr-square","fab",null],["long-arrow-down",null,"long-arrow-alt-down"],["long-arrow-up",null,"long-arrow-alt-up"],["long-arrow-left",null,"long-arrow-alt-left"],["long-arrow-right",null,"long-arrow-alt-right"],["apple","fab",null],["windows","fab",null],["android","fab",null],["linux","fab",null],["dribbble","fab",null],["skype","fab",null],["foursquare","fab",null],["trello","fab",null],["gratipay","fab",null],["gittip","fab","gratipay"],["sun-o","far","sun"],["moon-o","far","moon"],["vk","fab",null],["weibo","fab",null],["renren","fab",null],["pagelines","fab",null],["stack-exchange","fab",null],["arrow-circle-o-right","far","arrow-alt-circle-right"],["arrow-circle-o-left","far","arrow-alt-circle-left"],["caret-square-o-left","far","caret-square-left"],["toggle-left","far","caret-square-left"],["dot-circle-o","far","dot-circle"],["vimeo-square","fab",null],["try",null,"lira-sign"],["turkish-lira",null,"lira-sign"],["plus-square-o","far","plus-square"],["slack","fab",null],["wordpress","fab",null],["openid","fab",null],["institution",null,"university"],["bank",null,"university"],["mortar-board",null,"graduation-cap"],["yahoo","fab",null],["google","fab",null],["reddit","fab",null],["reddit-square","fab",null],["stumbleupon-circle","fab",null],["stumbleupon","fab",null],["delicious","fab",null],["digg","fab",null],["pied-piper-pp","fab",null],["pied-piper-alt","fab",null],["drupal","fab",null],["joomla","fab",null],["spoon",null,"utensil-spoon"],["behance","fab",null],["behance-square","fab",null],["steam","fab",null],["steam-square","fab",null],["automobile",null,"car"],["envelope-o","far","envelope"],["spotify","fab",null],["deviantart","fab",null],["soundcloud","fab",null],["file-pdf-o","far","file-pdf"],["file-word-o","far","file-word"],["file-excel-o","far","file-excel"],["file-powerpoint-o","far","file-powerpoint"],["file-image-o","far","file-image"],["file-photo-o","far","file-image"],["file-picture-o","far","file-image"],["file-archive-o","far","file-archive"],["file-zip-o","far","file-archive"],["file-audio-o","far","file-audio"],["file-sound-o","far","file-audio"],["file-video-o","far","file-video"],["file-movie-o","far","file-video"],["file-code-o","far","file-code"],["vine","fab",null],["codepen","fab",null],["jsfiddle","fab",null],["life-ring","far",null],["life-bouy","far","life-ring"],["life-buoy","far","life-ring"],["life-saver","far","life-ring"],["support","far","life-ring"],["circle-o-notch",null,"circle-notch"],["rebel","fab",null],["ra","fab","rebel"],["resistance","fab","rebel"],["empire","fab",null],["ge","fab","empire"],["git-square","fab",null],["git","fab",null],["hacker-news","fab",null],["y-combinator-square","fab","hacker-news"],["yc-square","fab","hacker-news"],["tencent-weibo","fab",null],["qq","fab",null],["weixin","fab",null],["wechat","fab","weixin"],["send",null,"paper-plane"],["paper-plane-o","far","paper-plane"],["send-o","far","paper-plane"],["circle-thin","far","circle"],["header",null,"heading"],["sliders",null,"sliders-h"],["futbol-o","far","futbol"],["soccer-ball-o","far","futbol"],["slideshare","fab",null],["twitch","fab",null],["yelp","fab",null],["newspaper-o","far","newspaper"],["paypal","fab",null],["google-wallet","fab",null],["cc-visa","fab",null],["cc-mastercard","fab",null],["cc-discover","fab",null],["cc-amex","fab",null],["cc-paypal","fab",null],["cc-stripe","fab",null],["bell-slash-o","far","bell-slash"],["trash",null,"trash-alt"],["copyright","far",null],["eyedropper",null,"eye-dropper"],["area-chart",null,"chart-area"],["pie-chart",null,"chart-pie"],["line-chart",null,"chart-line"],["lastfm","fab",null],["lastfm-square","fab",null],["ioxhost","fab",null],["angellist","fab",null],["cc","far","closed-captioning"],["ils",null,"shekel-sign"],["shekel",null,"shekel-sign"],["sheqel",null,"shekel-sign"],["meanpath","fab","font-awesome"],["buysellads","fab",null],["connectdevelop","fab",null],["dashcube","fab",null],["forumbee","fab",null],["leanpub","fab",null],["sellsy","fab",null],["shirtsinbulk","fab",null],["simplybuilt","fab",null],["skyatlas","fab",null],["diamond","far","gem"],["intersex",null,"transgender"],["facebook-official","fab","facebook"],["pinterest-p","fab",null],["whatsapp","fab",null],["hotel",null,"bed"],["viacoin","fab",null],["medium","fab",null],["y-combinator","fab",null],["yc","fab","y-combinator"],["optin-monster","fab",null],["opencart","fab",null],["expeditedssl","fab",null],["battery-4",null,"battery-full"],["battery",null,"battery-full"],["battery-3",null,"battery-three-quarters"],["battery-2",null,"battery-half"],["battery-1",null,"battery-quarter"],["battery-0",null,"battery-empty"],["object-group","far",null],["object-ungroup","far",null],["sticky-note-o","far","sticky-note"],["cc-jcb","fab",null],["cc-diners-club","fab",null],["clone","far",null],["hourglass-o","far","hourglass"],["hourglass-1",null,"hourglass-start"],["hourglass-2",null,"hourglass-half"],["hourglass-3",null,"hourglass-end"],["hand-rock-o","far","hand-rock"],["hand-grab-o","far","hand-rock"],["hand-paper-o","far","hand-paper"],["hand-stop-o","far","hand-paper"],["hand-scissors-o","far","hand-scissors"],["hand-lizard-o","far","hand-lizard"],["hand-spock-o","far","hand-spock"],["hand-pointer-o","far","hand-pointer"],["hand-peace-o","far","hand-peace"],["registered","far",null],["creative-commons","fab",null],["gg","fab",null],["gg-circle","fab",null],["tripadvisor","fab",null],["odnoklassniki","fab",null],["odnoklassniki-square","fab",null],["get-pocket","fab",null],["wikipedia-w","fab",null],["safari","fab",null],["chrome","fab",null],["firefox","fab",null],["opera","fab",null],["internet-explorer","fab",null],["television",null,"tv"],["contao","fab",null],["500px","fab",null],["amazon","fab",null],["calendar-plus-o","far","calendar-plus"],["calendar-minus-o","far","calendar-minus"],["calendar-times-o","far","calendar-times"],["calendar-check-o","far","calendar-check"],["map-o","far","map"],["commenting",null,"comment-dots"],["commenting-o","far","comment-dots"],["houzz","fab",null],["vimeo","fab","vimeo-v"],["black-tie","fab",null],["fonticons","fab",null],["reddit-alien","fab",null],["edge","fab",null],["credit-card-alt",null,"credit-card"],["codiepie","fab",null],["modx","fab",null],["fort-awesome","fab",null],["usb","fab",null],["product-hunt","fab",null],["mixcloud","fab",null],["scribd","fab",null],["pause-circle-o","far","pause-circle"],["stop-circle-o","far","stop-circle"],["bluetooth","fab",null],["bluetooth-b","fab",null],["gitlab","fab",null],["wpbeginner","fab",null],["wpforms","fab",null],["envira","fab",null],["wheelchair-alt","fab","accessible-icon"],["question-circle-o","far","question-circle"],["volume-control-phone",null,"phone-volume"],["asl-interpreting",null,"american-sign-language-interpreting"],["deafness",null,"deaf"],["hard-of-hearing",null,"deaf"],["glide","fab",null],["glide-g","fab",null],["signing",null,"sign-language"],["viadeo","fab",null],["viadeo-square","fab",null],["snapchat","fab",null],["snapchat-ghost","fab",null],["snapchat-square","fab",null],["pied-piper","fab",null],["first-order","fab",null],["yoast","fab",null],["themeisle","fab",null],["google-plus-official","fab","google-plus"],["google-plus-circle","fab","google-plus"],["font-awesome","fab",null],["fa","fab","font-awesome"],["handshake-o","far","handshake"],["envelope-open-o","far","envelope-open"],["linode","fab",null],["address-book-o","far","address-book"],["vcard",null,"address-card"],["address-card-o","far","address-card"],["vcard-o","far","address-card"],["user-circle-o","far","user-circle"],["user-o","far","user"],["id-badge","far",null],["drivers-license",null,"id-card"],["id-card-o","far","id-card"],["drivers-license-o","far","id-card"],["quora","fab",null],["free-code-camp","fab",null],["telegram","fab",null],["thermometer-4",null,"thermometer-full"],["thermometer",null,"thermometer-full"],["thermometer-3",null,"thermometer-three-quarters"],["thermometer-2",null,"thermometer-half"],["thermometer-1",null,"thermometer-quarter"],["thermometer-0",null,"thermometer-empty"],["bathtub",null,"bath"],["s15",null,"bath"],["window-maximize","far",null],["window-restore","far",null],["times-rectangle",null,"window-close"],["window-close-o","far","window-close"],["times-rectangle-o","far","window-close"],["bandcamp","fab",null],["grav","fab",null],["etsy","fab",null],["imdb","fab",null],["ravelry","fab",null],["eercast","fab","sellcast"],["snowflake-o","far","snowflake"],["superpowers","fab",null],["wpexplorer","fab",null],["cab",null,"taxi"]];return function(l){try{l()}catch(l){if(!t)throw l}}(function(){var l;"function"==typeof i.hooks.addShims?i.hooks.addShims(s):(l=i.shims).push.apply(l,s)}),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):l["fontawesome-free-shims"]=a();;
var $j=jQuery.noConflict();$j(document).ready(function(){"use strict";sheHeader()});function sheHeader(){var header=$j('.she-header-yes'),container=$j('.she-header-yes .elementor-container, .she-header-yes.e-container'),header_elementor=$j('.elementor-edit-mode .she-header-yes'),header_logo=$j('.she-header-yes .elementor-widget-theme-site-logo .elementor-image, .she-header-yes .elementor-widget-image .elementor-image'),data_settings=header.data('settings');if(typeof data_settings!='undefined'){var responsive_settings=data_settings.transparent_on;var width=$j(window).width(),header_height=header.height(),logo_width=header_logo.width(),logo_height=header_logo.height()}
if(typeof width!='undefined'&&width){if(width>=1025){var enabled="desktop"}else if(width>767&&width<1025){var enabled="tablet"}else if(width<=767){var enabled="mobile"}}
if($j.inArray(enabled,responsive_settings)!='-1'){var scroll_distance=data_settings.scroll_distance;var transparent_header=data_settings.transparent_header_show;var background=data_settings.background;var bottom_border_color=data_settings.custom_bottom_border_color,bottom_border_view=data_settings.bottom_border,bottom_border_width=data_settings.custom_bottom_border_width;var shrink_header=data_settings.shrink_header,data_height=data_settings.custom_height_header,data_height_tablet=data_settings.custom_height_header_tablet,data_height_mobile=data_settings.custom_height_header_mobile;var shrink_logo=data_settings.shrink_header_logo,data_logo_height=data_settings.custom_height_header_logo,data_logo_height_tablet=data_settings.custom_height_header_logo_tablet,data_logo_height_mobile=data_settings.custom_height_header_logo_mobile;var change_logo_color=data_settings.change_logo_color;var blur_bg=data_settings.blur_bg;var scroll_distance_hide_header=data_settings.scroll_distance_hide_header;if(transparent_header=="yes"){header.addClass('she-header-transparent-yes')}
if(typeof bottom_border_width!='undefined'&&bottom_border_width){var bottom_border=bottom_border_width.size+"px solid "+bottom_border_color}
if(typeof scroll_distance_hide_header!='undefined'&&scroll_distance_hide_header){var mywindow=$j(window);var mypos=mywindow.scrollTop();mywindow.scroll(function(){if(mypos>scroll_distance_hide_header.size){if(mywindow.scrollTop()>mypos){header.addClass('headerup')}else{header.removeClass('headerup')}}
mypos=mywindow.scrollTop()})}
$j(window).on("load scroll",function(e){var scroll=$j(window).scrollTop();if(header_elementor){header_elementor.css("position","relative")}
if(scroll>=scroll_distance.size){header.removeClass('header').addClass("she-header");header.css("background-color",background);header.css("border-bottom",bottom_border);header.removeClass('she-header-transparent-yes');if(shrink_header=="yes"){header.css({"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0"});container.css({"min-height":data_height,"transition":"all 0.4s ease-in-out","-webkit-transition":"all 0.4s ease-in-out","-moz-transition":"all 0.4s ease-in-out"})}
if(change_logo_color=="yes"){header_logo.addClass("change-logo-color")}
if(blur_bg=="yes"){header.css({"backdrop-filter":"saturate(180%) blur(20px)","-webkit-backdrop-filter":"saturate(180%) blur(20px)"})}}else{header.removeClass("she-header").addClass('header');header.css("background-color","");header.css("border-bottom","");if(transparent_header=="yes"){header.addClass('she-header-transparent-yes')}
if(shrink_header=="yes"){header.css({"padding-top":"","padding-bottom":"","margin-top":"","margin-bottom":""});container.css("min-height","")}
if(change_logo_color=="yes"){header_logo.removeClass("change-logo-color")}
if(blur_bg=="yes"){header.css({"backdrop-filter":"","-webkit-backdrop-filter":""})}}})}};
// Cache a reference to the hidden content.
    var hiddenContent = $( "h1.entry-title" );

    // Bind to the Read More link to toggle the
    $( "input.raq-send-request" ).click(function( event ){
            // Cancel the default event (this isn't a real link).
            event.preventDefault();

            // Check to see if the content is visible.
            if (hiddenContent.is( ":visible" )){

            // Hide it slowly.
            hiddenContent.slideUp( 300 );

            } else {

            // Show it slowly.
            hiddenContent.slideDown( 200 );

            }
        }
    );;
(function () {
                window.ma_el_fs = { can_use_premium_code: false};
            })();;
(function($){
                        
                    })(jQuery);;
jQuery(document).find('.ays-pb-modal_1').css({'top': '0', 'right': '0', 'bottom': '0', 'left': '0'});;
(function( $ ) {
                            'use strict';
                        $(document).ready(function(){       
                            var ays_flag = true;
                            var show_only_once = 'off';
                        
                            $(document).find('.popup').on('click', function(){
                            $(document).find('.ays_music_sound').css({'display':'block'});

                            if(show_only_once == 'on'){
                                $.ajax({
                                    url: 'https://www.sdsons.in/new/wp-admin/admin-ajax.php',
                                    method: 'post',
                                    dataType: 'json',
                                    data: {
                                        action: 'ays_pb_set_cookie_only_once',
                                        id: 1,
                                        title: 'Customized Product Enquiry',
                                    },
                                });
                            }
                             
                              var dataAttr = $(document).find('.ays-pb-modal_1').attr('data-ays-flag');
                              if(ays_flag && dataAttr == 'true'){
                                ays_flag = false;
                                $(document).find('.av_pop_modals_1').css('display','block');
                                $(document).find('.av_pop_modals_1').css('pointer-events', 'auto');
                                $(document).find('.ays_pb_timer_1 span').html($(document).find('.ays_pb_timer_1 span').attr('data-ays-seconds'));
                                clearInterval(timer_pb_1);
                                timer_pb_1 = null;
                                $(document).find('.ays-pb-modal_1').removeClass($(document).find('#ays_pb_modal_animate_out_1').val());
                                $(document).find('.ays-pb-modal_1').addClass($(document).find('#ays_pb_modal_animate_in_1').val());
                                $(document).find('.ays-pb-modal_1').css('display', 'block');
                                $(document).find('#ays-pb-screen-shade_1').css({'opacity': '0.500000', 'display': 'block'});
                                $(document).find('.ays-pb-modal-check_1').prop('checked', true);
                                $(document).find('.ays-pb-modal-check_1').attr('checked', true);
                                // $(document).find('#ays-pb-modal-checkbox_1').trigger('click');
                                var ays_pb_animation_close_speed = $(document).find('#ays_pb_animation_close_speed_1').val();
                                var ays_pb_animation_close_seconds = (ays_pb_animation_close_speed / 1000);
                                var sound_src = $(document).find('#ays_pb_sound_1').attr('src');
                                var close_sound_src = $(document).find('#ays_pb_close_sound_1').attr('src');

                                ays_pb_animation_close_speed = parseFloat(ays_pb_animation_close_speed) - 50;
                                
                                if ('off' === 'on' && typeof sound_src !== 'undefined'){
                                    $('#ays_pb_sound_1').get(0).play();
                                    $(document).find('.ays_pb_pause_sound_1').on('click',function(){
                                        var audio = $('#ays_pb_sound_1').get(0);
                                        audio.pause();
                                        audio.currentTime = 0;
                                    });
                                }
                                //close sound start
                                if('1' && typeof close_sound_src !== 'undefined' && 'off' === 'on'){
                                    if('1' !== 0){
                                        $(document).find('.ays_pb_pause_sound_1').on('click',function(){
                                            $('#ays_pb_close_sound_1').get(0).play();
                                            if(ays_pb_effectOut_1 != 'none'){
                                                setTimeout(function(){
                                                    $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                        var audio = $('#ays_pb_close_sound_1').get(0);
                                                        audio.pause();
                                                        audio.currentTime = 0;
                                                        clearInterval(timer_pb_1);
                                                }, ays_pb_animation_close_speed);
                                            }else{
                                                $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                var audio = $('#ays_pb_close_sound_1').get(0);
                                                audio.pause();
                                                audio.currentTime = 0;
                                            }
                                        });
                                    }
                                }
                                //close sound end

                                var time_pb_str_1 = $(document).find('.ays_pb_timer_1 span').attr('data-ays-seconds');
                                var time_pb_1 = parseInt(time_pb_str_1);
                                if(time_pb_1 !== undefined){ 
                                 if(time_pb_1 !== 0){
                                    var timer_pb_1 = setInterval(function(){
                                        let newTime_pb_1 = time_pb_1--;
                                        let ays_pb_effectOut_1 = $(document).find('#ays_pb_modal_animate_out_1').val();
                                        $(document).find('.ays_pb_timer_1 span').text(newTime_pb_1);
                                        $(document).find('.ays-pb-modal_1').css({
                                            'animation-duration': ays_pb_animation_close_seconds + 's'
                                        }); 
                                        if(newTime_pb_1 <= 0){
                                            $(document).find('.ays-pb-modal-close_1').trigger('click');
                                            $(document).find('.ays-pb-modal_1').attr('class', 'ays-pb-modal ays-pb-modal_1  '+$(document).find('#ays_pb_modal_animate_out_1').val());
                                            
                                            if(ays_pb_effectOut_1 != 'none'){
                                                setTimeout(function(){
                                                    $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                    ays_flag = true;
                                                }, ays_pb_animation_close_speed);
                                            }else{
                                                $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                ays_flag = true;
                                            }
                                            if ('off' === 'on' && typeof sound_src !== 'undefined'){
                                                var audio = $('#ays_pb_sound_1').get(0);
                                                audio.pause();
                                                audio.currentTime = 0;
                                                clearInterval(timer_pb_1);
                                            }
                                            if ('1' && typeof close_sound_src !== 'undefined' && 'off' === 'on'){
                                                if('1' !== 0){
                                                    $('#ays_pb_close_sound_1').get(0).play();
                                                    if(ays_pb_effectOut_1 != 'none'){
                                                        setTimeout(function(){
                                                            $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                            ays_flag = true;
                                                                var audio = $('#ays_pb_close_sound_1').get(0);
                                                                audio.pause();
                                                                audio.currentTime = 0;
                                                                clearInterval(timer_pb_1);
                                                        }, ays_pb_animation_close_speed);
                                                    }else{
                                                        $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                            ays_flag = true;
                                                            var audio = $('#ays_pb_close_sound_1').get(0);
                                                            audio.pause();
                                                            audio.currentTime = 0;
                                                    }
                                                }
                                            }
                                        }
                                        $(document).find('.ays-pb-modal-close_1').one('click', function(){
                                            $(document).find('.av_pop_modals_1').css('pointer-events', 'none');
                                            $(document).find('.ays-pb-modal_1').attr('class', 'ays-pb-modal ays-pb-modal_1  '+ays_pb_effectOut_1);
                                            $(this).parents('.ays-pb-modals').find('iframe').each(function(){
                                                var key = /https:\/\/www.youtube.com/;
                                                var src = $(this).attr('src');
                                                $(this).attr('src', $(this).attr('src'));
                                            });
                                            $(this).parents('.ays-pb-modals').find('video.wp-video-shortcode').each(function(){
                                                if(typeof $(this).get(0) != 'undefined'){
                                                    if ( ! $(this).get(0).paused ) {
                                                        $(this).get(0).pause();
                                                    }

                                                }
                                            });
                                            $(this).parents('.ays-pb-modals').find('audio.wp-audio-shortcode').each(function(){
                                                if(typeof $(this).get(0) != 'undefined'){
                                                    if ( ! $(this).get(0).paused ) {
                                                        $(this).get(0).pause();
                                                    }

                                                }
                                            });
                                            
                                            if(ays_pb_effectOut_1 != 'none'){
                                                setTimeout(function(){ 
                                                    $(document).find('.ays-pb-modal_1').css('display', 'none'); 
                                                    ays_flag = true;
                                                }, ays_pb_animation_close_speed);  
                                            }else{
                                                $(document).find('.ays-pb-modal_1').css('display', 'none'); 
                                                ays_flag = true;
                                            }
                                            $(document).find('#ays-pb-screen-shade_1').css({'opacity': '0', 'display': 'none'});
                                            clearInterval(timer_pb_1);
                                        });
                                        
                                        var ays_pb_flag =  true;
                                        $(document).on('keydown', function(event) { 
                                            if('' && ays_pb_flag){
                                                if (event.keyCode == 27) { 
                                                    $(document).find('.ays-pb-modal-close_1').trigger('click');
                                                    ays_pb_flag = false;
                                                    if ('off' === 'on' && typeof sound_src !== 'undefined'){
                                                        var audio = $('#ays_pb_sound_1').get(0);
                                                        audio.pause();
                                                        audio.currentTime = 0;
                                                        clearInterval(timer_pb_1);
                                                    }
                                                    if('1' && typeof close_sound_src !== 'undefined' && 'off' === 'on'){
                                                        if('1' !== 0){
                                                            $('#ays_pb_close_sound_1').get(0).play();
                                                            if(ays_pb_effectOut_1 != 'none'){
                                                                setTimeout(function(){
                                                                    $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                                        var audio = $('#ays_pb_close_sound_1').get(0);
                                                                        audio.pause();
                                                                        audio.currentTime = 0;
                                                                        clearInterval(timer_pb_1);
                                                                }, ays_pb_animation_close_speed);
                                                            }else{
                                                                $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                                var audio = $('#ays_pb_close_sound_1').get(0);
                                                                audio.pause();
                                                                audio.currentTime = 0;
                                                                clearInterval(timer_pb_1);
                                                            }
                                                        }
                                                    }
                                                } 
                                            }
                                        });
                                    }, 1000);
                                    if('clickSelector' != 'both'){
                                        if('' && 'On' == 'On'){
                                            $(document).find('#ays-pb-screen-shade_1').on('click', function() {
                                                var pb_parent_div = $(this).find('.ays-pb-modals');
                                                var pb_div = $(this).parents('.ays-pb-modals').find('.ays-pb-modal_1');
                                                if (!pb_parent_div.is(pb_div) && pb_parent_div.has(pb_div).length === 0){
                                                    $(document).find('.ays-pb-modal-close_1').click();
                                                    if ('off' === 'on' && typeof sound_src !== 'undefined'){
                                                        var audio = $('#ays_pb_sound_1').get(0);
                                                        audio.pause();
                                                        audio.currentTime = 0;
                                                        clearInterval(timer_pb_1);
                                                    }
                                                    if('1' && typeof close_sound_src !== 'undefined' && 'off' === 'on'){
                                                        if('1' !== 0){
                                                            $('#ays_pb_close_sound_1').get(0).play();
                                                            if(ays_pb_effectOut_1 != 'none'){
                                                                setTimeout(function(){
                                                                    $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                                        var audio = $('#ays_pb_close_sound_1').get(0);
                                                                        audio.pause();
                                                                        audio.currentTime = 0;
                                                                }, ays_pb_animation_close_speed);
                                                            }else{
                                                                $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                                var audio = $('#ays_pb_close_sound_1').get(0);
                                                                audio.pause();
                                                                audio.currentTime = 0;
                                                            }
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                    }else{
                                        if('' && 'On' == 'On'){
                                            $(document).find('.av_pop_modals_1').on('click', function(e) {
                                                var pb_parent_div = $(this);
                                                var pb_div = $(this).find('.ays-pb-modal_1');
                                                if (!pb_div.is(e.target) && pb_div.has(e.target).length === 0){
                                                    $(document).find('.ays-pb-modal-close_1').click();
                                                    if ('off' === 'on' && typeof sound_src !== 'undefined'){
                                                        var audio = $('#ays_pb_sound_1').get(0);
                                                        audio.pause();
                                                        audio.currentTime = 0;
                                                        clearInterval(timer_pb_1);
                                                    }
                                                    if('1' && typeof close_sound_src !== 'undefined' && 'off' === 'on'){
                                                        if('1' !== 0){
                                                            $('#ays_pb_close_sound_1').get(0).play();
                                                            if(ays_pb_effectOut_1 != 'none'){
                                                                setTimeout(function(){
                                                                    $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                                        var audio = $('#ays_pb_close_sound_1').get(0);
                                                                        audio.pause();
                                                                        audio.currentTime = 0;
                                                                        clearInterval(timer_pb_1);
                                                                }, ays_pb_animation_close_speed);
                                                            }else{
                                                                $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                                var audio = $('#ays_pb_close_sound_1').get(0);
                                                                audio.pause();
                                                                audio.currentTime = 0;
                                                            }
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                    }   
                                } else {
                                     $(document).find('.ays_pb_timer_1').css('display','none');
                                     $(document).find('.ays-pb-modal_1').css({
                                        'animation-duration': ays_pb_animation_close_seconds + 's'
                                     }); 
                                     $(document).find('.ays-pb-modal-close_1').one('click', function(){  
                                        let ays_pb_effectOut_1 = $(document).find('#ays_pb_modal_animate_out_1').val();                                      
                                        $(document).find('.av_pop_modals_1').css('pointer-events', 'none');
                                        $(document).find('.ays-pb-modal_1').attr('class', 'ays-pb-modal ays-pb-modal_1  '+ays_pb_effectOut_1);
                                        $(this).parents('.ays-pb-modals').find('iframe').each(function(){
                                            var key = /https:\/\/www.youtube.com/;
                                            var src = $(this).attr('src');
                                            $(this).attr('src', $(this).attr('src'));
                                        });
                                        $(this).parents('.ays-pb-modals').find('video.wp-video-shortcode').each(function(){
                                            if(typeof $(this).get(0) != 'undefined'){
                                                if ( ! $(this).get(0).paused ) {
                                                    $(this).get(0).pause();
                                                }

                                            }
                                        });
                                        $(this).parents('.ays-pb-modals').find('audio.wp-audio-shortcode').each(function(){
                                            if(typeof $(this).get(0) != 'undefined'){
                                                if ( ! $(this).get(0).paused ) {
                                                    $(this).get(0).pause();
                                                }

                                            }
                                        });
                                        if(ays_pb_effectOut_1 != 'none'){
                                            setTimeout(function(){
                                                $(document).find('.ays-pb-modal_1').css('display', 'none');
                                                $(document).find('.av_pop_modals_1').css('display', 'none');
                                                ays_flag = true;
                                            }, ays_pb_animation_close_speed);  
                                        }else{
                                            $(document).find('.ays-pb-modal_1').css('display', 'none');
                                            $(document).find('.av_pop_modals_1').css('display', 'none');
                                            ays_flag = true;
                                        }
                                        
                                        $(document).find('#ays-pb-screen-shade_1').css({'opacity': '0', 'display': 'none'});
                                        });
                                    }
                                }


                                if(''){
                                    $(document).find('body').removeClass('pb_enable_scroll');
                                    $(document).find('body').addClass('pb_disable_scroll'); 

                                    $(document).find('html').removeClass('pb_enable_scroll');
                                    $(document).find('html').addClass('pb_disable_scroll');   
                                    jQuery(document).on('click', '.ays-pb-modal-close_1', function() {
                                        $(document).find('body').removeClass('pb_disable_scroll');
                                        $(document).find('body').addClass('pb_enable_scroll');

                                        $(document).find('html').removeClass('pb_disable_scroll');
                                        $(document).find('html').addClass('pb_enable_scroll');
                                    });           
                                }

                                if ('On' != 'On'){
                                    $(document).find('#ays-pb-screen-shade_1').css({'opacity': '0', 'display': 'none !important', 'pointer-events': 'none'});
                                    $(document).find('.ays-pb-modal_1').css('pointer-events', 'auto');
                                    $(document).find('.av_pop_modals_1').css('pointer-events','none');
                                };
                                if (0 != 0 && 'off' != 'on'){
                                    $(document).find('.ays-pb-modal-close_1').css({'display': 'none'});
                                    setTimeout(function(){ 
                                        $(document).find('.ays-pb-modal-close_1').css({'display': 'block'});
                                    },0);
                                };
                              }
                            // if(0 == 0){
                                if('' && 'On' == 'On'){
                                    $(document).find('.av_pop_modals_1').on('click', function(e) {
                                        var pb_parent = $(this);
                                        var pb_div = $(this).find('.ays-pb-modal_1');
                                        if (!pb_div.is(e.target) && pb_div.has(e.target).length === 0){
                                            $(document).find('.ays-pb-modal-close_1').click();
                                        }
                                    });
                                }
                                var ays_pb_flag = true;
                                $(document).on('keydown', function(event) { 
                                    if('' && ays_pb_flag){
                                        if (event.keyCode == 27) {                                    
                                            $(document).find('.ays-pb-modal-close_1').trigger('click');
                                            ays_pb_flag = false;
                                        } 
                                    }
                                });
                            // }
                            });
                            if ('On' != 'On'){
                                $(document).find('#ays-pb-screen-shade_1').css({'opacity': '0', 'display': 'none !important', 'pointer-events': 'none'});
                                $(document).find('.ays-pb-modal_1').css('pointer-events', 'auto');
                                $(document).find('.av_pop_modals_1').css('pointer-events','none');
                            };
                            if('clickSelector' != 'both'){
                                if($(document).find('.ays-pb-modals video').hasClass('wp-video-shortcode')){
                                    var videoWidth  = $(document).find('.ays-pb-modals video.wp-video-shortcode').attr('width');
                                    var videoHeight = $(document).find('.ays-pb-modals video.wp-video-shortcode').attr('height');
                                    setTimeout(function(){
                                        $(document).find('.ays-pb-modals .wp-video').removeAttr('style');
                                        $(document).find('.ays-pb-modals .mejs-container').removeAttr('style');
                                        $(document).find('.ays-pb-modals video.wp-video-shortcode').removeAttr('style');

                                        $(document).find('.ays-pb-modals .wp-video').css({'width': '100%'});
                                        $(document).find('.ays-pb-modals .mejs-container').css({'width': '100%','height': videoHeight + 'px'});
                                        $(document).find('.ays-pb-modals video.wp-video-shortcode').css({'width': '100%','height': videoHeight + 'px'});
                                    },1000);
                                }
                                if($(document).find('.ays-pb-modals iframe').attr('style') != ''){
                                    setTimeout(function(){
                                        $(document).find('.ays-pb-modals iframe').removeAttr('style');
                                    },500);
                                }
                            }
                            if('off' == 'on') {
                                var video = $(document).find('video.wp-video-shortcode');
                                for (let i = 0; i < video.length; i++) {
                                    video[i].addEventListener('ended', function() {
                                        if ($(this).next().val() === 'on') {
                                            $(this).parents('.ays_video_window').find('.close-image-btn').trigger('click');
                                        }
                                    });
                                }
                            }
                        });
                    })( jQuery );;
if(typeof aysPopupOptions === "undefined"){
                        var aysPopupOptions = [];
                    }
                    aysPopupOptions["1"]  = "eyJwb3B1cGJveCI6eyJpZCI6IjEiLCJ0aXRsZSI6IkN1c3RvbWl6ZWQgUHJvZHVjdCBFbnF1aXJ5IiwicG9wdXBfbmFtZSI6IiIsImRlc2NyaXB0aW9uIjoiIiwiY2F0ZWdvcnlfaWQiOiIxIiwiYXV0b2Nsb3NlIjoiMCIsImNvb2tpZSI6IjAiLCJ3aWR0aCI6NjUwLCJoZWlnaHQiOjU1MCwiYmdjb2xvciI6IiNmZmZmZmYiLCJ0ZXh0Y29sb3IiOiIjMDBhNDU1IiwiYm9yZGVyc2l6ZSI6IjEiLCJib3JkZXJjb2xvciI6IiNmZmZmZmYiLCJib3JkZXJfcmFkaXVzIjoiNCIsInNob3J0Y29kZSI6IiIsInVzZXJzX3JvbGUiOiJbXSIsImN1c3RvbV9jbGFzcyI6IiIsImN1c3RvbV9jc3MiOiIiLCJjdXN0b21faHRtbCI6Iltjb250YWN0LWZvcm0tNyBpZD1cIjM5OVwiIHRpdGxlPVwiQ29udGFjdCBmb3JtXCJdIiwib25vZmZzd2l0Y2giOiJPbiIsInNob3dfb25seV9mb3JfYXV0aG9yIjoib2ZmIiwic2hvd19hbGwiOiJhbGwiLCJkZWxheSI6MCwic2Nyb2xsX3RvcCI6MCwiYW5pbWF0ZV9pbiI6ImZhZGVJbiIsImFuaW1hdGVfb3V0IjoiZmFkZU91dFVwQmlnIiwiYWN0aW9uX2J1dHRvbiI6Ii5wb3B1cCIsInZpZXdfcGxhY2UiOiIiLCJhY3Rpb25fYnV0dG9uX3R5cGUiOiJjbGlja1NlbGVjdG9yIiwibW9kYWxfY29udGVudCI6ImN1c3RvbV9odG1sIiwidmlld190eXBlIjoiZGVmYXVsdCIsIm9ub2Zmb3ZlcmxheSI6Ik9uIiwib3ZlcmxheV9vcGFjaXR5IjoiMC41MDAwMDAiLCJzaG93X3BvcHVwX3RpdGxlIjoiT24iLCJzaG93X3BvcHVwX2Rlc2MiOiJPbiIsImNsb3NlX2J1dHRvbiI6Im9mZiIsImhlYWRlcl9iZ2NvbG9yIjoiI2ZmZmZmZiIsImJnX2ltYWdlIjoiIiwibG9nX3VzZXIiOiJPbiIsImd1ZXN0IjoiT24iLCJhY3RpdmVfZGF0ZV9jaGVjayI6Im9mZiIsImFjdGl2ZUludGVydmFsIjoiMjAyMy0wNS0xNiAwNjozNDo0OCIsImRlYWN0aXZlSW50ZXJ2YWwiOiIyMDIzLTA1LTE2IDA2OjM0OjQ4IiwicGJfcG9zaXRpb24iOiJjZW50ZXItY2VudGVyIiwicGJfbWFyZ2luIjoiMCIsIm9wdGlvbnMiOiJ7XCJlbmFibGVfYmFja2dyb3VuZF9ncmFkaWVudFwiOlwib2ZmXCIsXCJiYWNrZ3JvdW5kX2dyYWRpZW50X2NvbG9yXzFcIjpcIiMwMDBcIixcImJhY2tncm91bmRfZ3JhZGllbnRfY29sb3JfMlwiOlwiI2ZmZlwiLFwicGJfZ3JhZGllbnRfZGlyZWN0aW9uXCI6XCJ2ZXJ0aWNhbFwiLFwiZXhjZXB0X3Bvc3RfdHlwZXNcIjpbXSxcImV4Y2VwdF9wb3N0c1wiOltdLFwiYWxsX3Bvc3RzXCI6XCJcIixcImNsb3NlX2J1dHRvbl9kZWxheVwiOjAsXCJlbmFibGVfcGJfc291bmRcIjpcIm9mZlwiLFwib3ZlcmxheV9jb2xvclwiOlwiIzAwMFwiLFwiYW5pbWF0aW9uX3NwZWVkXCI6MSxcImNsb3NlX2FuaW1hdGlvbl9zcGVlZFwiOjEsXCJwYl9tb2JpbGVcIjpcIm9mZlwiLFwiY2xvc2VfYnV0dG9uX3RleHRcIjpcInhcIixcImNsb3NlX2J1dHRvbl9ob3Zlcl90ZXh0XCI6XCJcIixcIm1vYmlsZV93aWR0aFwiOlwiXCIsXCJtb2JpbGVfbWF4X3dpZHRoXCI6XCJcIixcIm1vYmlsZV9oZWlnaHRcIjpcIlwiLFwiY2xvc2VfYnV0dG9uX3Bvc2l0aW9uXCI6XCJyaWdodC10b3BcIixcInNob3dfb25seV9vbmNlXCI6XCJvZmZcIixcInNob3dfb25faG9tZV9wYWdlXCI6XCJvZmZcIixcImNsb3NlX3BvcHVwX2VzY1wiOlwib2ZmXCIsXCJwb3B1cF93aWR0aF9ieV9wZXJjZW50YWdlX3B4XCI6XCJwaXhlbHNcIixcInBvcHVwX2NvbnRlbnRfcGFkZGluZ1wiOjEwLFwicG9wdXBfcGFkZGluZ19ieV9wZXJjZW50YWdlX3B4XCI6XCJwaXhlbHNcIixcInBiX2ZvbnRfZmFtaWx5XCI6XCJJbmhlcml0XCIsXCJjbG9zZV9wb3B1cF9vdmVybGF5XCI6XCJvZmZcIixcImVuYWJsZV9wYl9mdWxsc2NyZWVuXCI6XCJvZmZcIixcImVuYWJsZV9oaWRlX3RpbWVyXCI6XCJvZmZcIixcImVuYWJsZV9hdXRvY2xvc2Vfb25fY29tcGxldGlvblwiOlwib2ZmXCIsXCJlbmFibGVfc29jaWFsX2xpbmtzXCI6XCJvZmZcIixcInNvY2lhbF9saW5rc1wiOntcImxpbmtlZGluX2xpbmtcIjpcIlwiLFwiZmFjZWJvb2tfbGlua1wiOlwiXCIsXCJ0d2l0dGVyX2xpbmtcIjpcIlwiLFwidmtvbnRha3RlX2xpbmtcIjpcIlwiLFwieW91dHViZV9saW5rXCI6XCJcIixcImluc3RhZ3JhbV9saW5rXCI6XCJcIixcImJlaGFuY2VfbGlua1wiOlwiXCJ9LFwic29jaWFsX2J1dHRvbnNfaGVhZGluZ1wiOlwiXCIsXCJjbG9zZV9idXR0b25fc2l6ZVwiOjEsXCJjbG9zZV9idXR0b25faW1hZ2VcIjpcIlwiLFwiYm9yZGVyX3N0eWxlXCI6XCJEb3R0ZWRcIixcImF5c19wYl9ob3Zlcl9zaG93X2Nsb3NlX2J0blwiOlwib2ZmXCIsXCJkaXNhYmxlX3Njcm9sbFwiOlwib2ZmXCIsXCJwYl9iZ19pbWFnZV9wb3NpdGlvblwiOlwiY2VudGVyLWNlbnRlclwiLFwicGJfYmdfaW1hZ2Vfc2l6aW5nXCI6XCJjb3ZlclwiLFwidmlkZW9fdGhlbWVfdXJsXCI6XCJcIixcInBiX21pbl9oZWlnaHRcIjpcIlwiLFwicGJfZm9udF9zaXplXCI6MTMsXCJwYl9mb250X3NpemVfZm9yX21vYmlsZVwiOjEyLFwicGJfdGl0bGVfdGV4dF9zaGFkb3dcIjpcInJnYmEoMjU1LDI1NSwyNTUsMClcIixcImVuYWJsZV9wYl90aXRsZV90ZXh0X3NoYWRvd1wiOlwib2ZmXCIsXCJwYl90aXRsZV90ZXh0X3NoYWRvd194X29mZnNldFwiOjIsXCJwYl90aXRsZV90ZXh0X3NoYWRvd195X29mZnNldFwiOjIsXCJwYl90aXRsZV90ZXh0X3NoYWRvd196X29mZnNldFwiOjAsXCJjcmVhdGVfZGF0ZVwiOlwiMjAyMy0wNC0yOCAxMDoxNTozNlwiLFwiY3JlYXRlX2F1dGhvclwiOjEsXCJhdXRob3JcIjpcIntcXFwiaWRcXFwiOlxcXCIxXFxcIixcXFwibmFtZVxcXCI6XFxcInZlbnpvXFxcIn1cIixcImVuYWJsZV9kaXNtaXNzXCI6XCJvZmZcIixcImVuYWJsZV9kaXNtaXNzX3RleHRcIjpcIkRpc21pc3MgYWRcIixcImVuYWJsZV9ib3hfc2hhZG93XCI6XCJvZmZcIixcImJveF9zaGFkb3dfY29sb3JcIjpcIiMwMDBcIixcInBiX2JveF9zaGFkb3dfeF9vZmZzZXRcIjowLFwicGJfYm94X3NoYWRvd195X29mZnNldFwiOjAsXCJwYl9ib3hfc2hhZG93X3pfb2Zmc2V0XCI6MTUsXCJkaXNhYmxlX3Njcm9sbF9vbl9wb3B1cFwiOlwib2ZmXCIsXCJoaWRlX29uX3BjXCI6XCJvZmZcIixcImhpZGVfb25fdGFibGV0c1wiOlwib2ZmXCIsXCJwYl9iZ19pbWFnZV9kaXJlY3Rpb25fb25fbW9iaWxlXCI6XCJvZmZcIixcImNsb3NlX2J1dHRvbl9jb2xvclwiOlwiIzAwMDAwMFwiLFwiY2xvc2VfYnV0dG9uX2hvdmVyX2NvbG9yXCI6XCIjMDAwMDAwXCIsXCJibHVyZWRfb3ZlcmxheVwiOlwib2ZmXCJ9In19";;
(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();;
var astraGetParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;0<=--a&&t.item(a)!==this;);return-1<a});for(var a=[];e&&e!==document;e=e.parentNode)(!t||e.matches(t))&&a.push(e);return a},getParents=function(e,t){console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."),astraGetParents(e,t)},astraToggleClass=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)},toggleClass=function(e,t){console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."),astraToggleClass(e,t)},astraTriggerEvent=(!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(e,t){var a=new CustomEvent(t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:{});e.dispatchEvent(a)});astraSmoothScroll=function(e,t){e.preventDefault(),window.scrollTo({top:t,left:0,behavior:"smooth"})},astScrollToTopHandler=function(e,t){var a=getComputedStyle(t).content,n=t.dataset.onDevices,a=a.replace(/[^0-9]/g,"");"both"==n||"desktop"==n&&"769"==a||"mobile"==n&&""==a?(n=window.pageYOffset||document.body.scrollTop,e&&e.length?n>e.offsetHeight+100?t.style.display="block":t.style.display="none":300<window.pageYOffset?t.style.display="block":t.style.display="none"):t.style.display="none"},function(){var r=document.querySelectorAll("#masthead .main-header-menu-toggle"),c=document.getElementById("masthead"),i={},d="",u=document.body,m="";function e(e){d=e.detail.type;var t=document.querySelectorAll(".menu-toggle");if("dropdown"===d&&(document.getElementById("ast-mobile-popup").classList.remove("active","show"),g("updateHeader")),"off-canvas"===d)for(var a=0;a<t.length;a++)void 0!==t[a]&&t[a].classList.contains("toggled")&&t[a].click();n(d)}function g(e){m=c.querySelector("#ast-mobile-header");var t="";if(null==m||"dropdown"!==m.dataset.type||"updateHeader"===e){t=(void 0!==e&&"updateHeader"!==e?e.closest(".ast-mobile-popup-inner"):document.querySelector("#ast-mobile-popup")).querySelectorAll(".menu-item-has-children");for(var a=0;a<t.length;a++){t[a].classList.remove("ast-submenu-expanded");for(var n=t[a].querySelectorAll(".sub-menu"),s=0;s<n.length;s++)n[s].style.display="none"}var o=document.querySelectorAll(".menu-toggle");document.body.classList.remove("ast-main-header-nav-open","ast-popup-nav-open"),document.documentElement.classList.remove("ast-off-canvas-active");for(var r=0;r<o.length;r++)o[r].classList.remove("toggled"),o[r].style.display="flex"}}function n(e){var t=document.querySelectorAll("#ast-mobile-header .menu-toggle"),a=document.querySelectorAll("#ast-desktop-header .menu-toggle");if(void 0===e&&null!==c)if(m=c.querySelector("#ast-mobile-header"))e=m.dataset.type;else{var n=c.querySelector("#ast-desktop-header");if(!n)return;e=n.dataset.toggleType}if("off-canvas"===e){var n=document.getElementById("menu-toggle-close"),s=document.querySelector(".ast-mobile-popup-inner");if(null==s)return;popupLinks=s.getElementsByTagName("a");for(var o=0;o<t.length;o++)t[o].removeEventListener("click",astraNavMenuToggle,!1),t[o].addEventListener("click",popupTriggerClick,!1),t[o].trigger_type="mobile";for(o=0;o<a.length;o++)a[o].removeEventListener("click",astraNavMenuToggle,!1),a[o].addEventListener("click",popupTriggerClick,!1),a[o].trigger_type="desktop";n.addEventListener("click",function(e){document.getElementById("ast-mobile-popup").classList.remove("active","show"),g(this)}),document.addEventListener("keyup",function(e){27===e.keyCode&&(e.preventDefault(),document.getElementById("ast-mobile-popup").classList.remove("active","show"),g())}),document.addEventListener("click",function(e){e.target===document.querySelector(".ast-mobile-popup-drawer.active .ast-mobile-popup-overlay")&&(document.getElementById("ast-mobile-popup").classList.remove("active","show"),g())});for(let e=0,t=popupLinks.length;e<t;e++)null!==popupLinks[e].getAttribute("href")&&(popupLinks[e].getAttribute("href").startsWith("#")||-1!==popupLinks[e].getAttribute("href").search("#"))&&(!popupLinks[e].parentElement.classList.contains("menu-item-has-children")||popupLinks[e].parentElement.classList.contains("menu-item-has-children")&&document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon"))&&(popupLinks[e].addEventListener("click",p,!0),popupLinks[e].headerType="off-canvas");AstraToggleSetup()}else if("dropdown"===e){var r=document.querySelectorAll(".ast-mobile-header-content")||!1,s=document.querySelector(".ast-desktop-header-content")||!1;if(0<r.length)for(let e=0;e<r.length;e++){var l=r[e].getElementsByTagName("a");for(link=0,len=l.length;link<len;link++)null!==l[link].getAttribute("href")&&(l[link].getAttribute("href").startsWith("#")||-1!==l[link].getAttribute("href").search("#"))&&(!l[link].parentElement.classList.contains("menu-item-has-children")||l[link].parentElement.classList.contains("menu-item-has-children")&&document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon"))&&(l[link].addEventListener("click",p,!0),l[link].headerType="dropdown")}if(s){var i=s.getElementsByTagName("a");for(link=0,len=i.length;link<len;link++)i[link].addEventListener("click",p,!0),i[link].headerType="dropdown"}for(o=0;o<t.length;o++)t[o].removeEventListener("click",popupTriggerClick,!1),t[o].addEventListener("click",astraNavMenuToggle,!1),t[o].trigger_type="mobile";for(o=0;o<a.length;o++)a[o].removeEventListener("click",popupTriggerClick,!1),a[o].addEventListener("click",astraNavMenuToggle,!1),a[o].trigger_type="desktop";AstraToggleSetup()}v()}function p(e){switch(e.currentTarget.headerType){case"dropdown":for(var t=document.querySelectorAll(".menu-toggle.toggled"),a=0;a<t.length;a++)t[a].click();break;case"off-canvas":document.getElementById("menu-toggle-close").click()}}""!==(m=null!=c?c.querySelector("#ast-mobile-header"):m)&&null!==m&&(d=m.dataset.type),document.addEventListener("astMobileHeaderTypeChange",e,!1),popupTriggerClick=function(e){var e=e.currentTarget.trigger_type,t=document.getElementById("ast-mobile-popup"),a=document.getElementById("menu-toggle-close");a&&a.focus(),u.classList.contains("ast-popup-nav-open")||u.classList.add("ast-popup-nav-open"),u.classList.contains("ast-main-header-nav-open")||"mobile"===e||u.classList.add("ast-main-header-nav-open"),document.documentElement.classList.contains("ast-off-canvas-active")||document.documentElement.classList.add("ast-off-canvas-active"),"desktop"===e&&(t.querySelector(".ast-mobile-popup-content").style.display="none",t.querySelector(".ast-desktop-popup-content").style.display="block"),"mobile"===e&&(t.querySelector(".ast-desktop-popup-content").style.display="none",t.querySelector(".ast-mobile-popup-content").style.display="block"),this.style.display="none",t.classList.add("active","show")},window.addEventListener("load",function(){n()}),document.addEventListener("astLayoutWidthChanged",function(){n()}),document.addEventListener("astPartialContentRendered",function(){r=document.querySelectorAll(".main-header-menu-toggle"),u.classList.remove("ast-main-header-nav-open"),document.addEventListener("astMobileHeaderTypeChange",e,!1),n(),v()});var s=null!==navigator.userAgent.match(/Android/i)&&"Android"===navigator.userAgent.match(/Android/i)[0]?window.visualViewport.width:window.innerWidth;window.addEventListener("resize",function(){var e,t,a,n;"INPUT"!==document.activeElement.tagName&&(e=document.getElementById("menu-toggle-close"),t=document.querySelector(".menu-toggle.toggled"),a=document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),n=document.querySelector(".elementor-editor-active"),a&&(a.style.display="none"),(null!==navigator.userAgent.match(/Android/i)&&"Android"===navigator.userAgent.match(/Android/i)[0]?window.visualViewport.width:window.innerWidth)!==s&&(t&&null===n&&t.click(),document.body.classList.remove("ast-main-header-nav-open","ast-popup-nav-open"),e)&&null==n&&e.click(),h(),AstraToggleSetup())}),document.addEventListener("DOMContentLoaded",function(){if(AstraToggleSetup(),null!==(e=u.classList.contains("ast-header-break-point")?document.getElementById("ast-mobile-header"):document.getElementById("ast-desktop-header"))){var e,t=e.querySelector(".navigation-accessibility");if(t&&e){var a=e.getElementsByTagName("button")[0];if(void 0===a){if(!0===(a=e.getElementsByTagName("a")[0]).classList.contains("astra-search-icon"))return;if(void 0===a)return}var n=t.getElementsByTagName("ul")[0];if(void 0===n)a.style.display="none";else{if(-1===n.className.indexOf("nav-menu")&&(n.className+=" nav-menu"),"off-canvas"===d&&(document.getElementById("menu-toggle-close").onclick=function(){-1!==t.className.indexOf("toggled")?(t.className=t.className.replace(" toggled",""),a.setAttribute("aria-expanded","false"),n.setAttribute("aria-expanded","false")):(t.className+=" toggled",a.setAttribute("aria-expanded","true"),n.setAttribute("aria-expanded","true"))}),a.onclick=function(){-1!==t.className.indexOf("toggled")?(t.className=t.className.replace(" toggled",""),a.setAttribute("aria-expanded","false"),n.setAttribute("aria-expanded","false")):(t.className+=" toggled",a.setAttribute("aria-expanded","true"),n.setAttribute("aria-expanded","true"))},!astra.is_header_footer_builder_active){for(var s=n.getElementsByTagName("a"),o=n.getElementsByTagName("ul"),r=0,l=o.length;r<l;r++)o[r].parentNode.setAttribute("aria-haspopup","true");for(r=0,l=s.length;r<l;r++)s[r].addEventListener("focus",k,!0),s[r].addEventListener("blur",k,!0),s[r].addEventListener("click",L,!0)}astra.is_header_footer_builder_active&&!function(){const t=document.querySelectorAll("nav.site-navigation .menu-item-has-children > a .ast-header-navigation-arrow"),a=document.querySelectorAll("nav.site-navigation .sub-menu"),n=document.querySelectorAll("nav.site-navigation .menu-item-has-children"),s=document.querySelectorAll(".astra-full-megamenu-wrapper");t&&(t.forEach(e=>{e.addEventListener("keydown",function(a){"Enter"===a.key&&(a.target.closest("li").querySelector(".sub-menu").classList.contains("astra-megamenu")?setTimeout(()=>{var e=a.target.closest("li").querySelector(".sub-menu"),t=a.target.closest("li").querySelector(".astra-full-megamenu-wrapper");e&&e.classList.toggle("astra-megamenu-focus"),t&&t.classList.toggle("astra-megamenu-wrapper-focus"),a.target.closest("li").classList.toggle("ast-menu-hover"),"false"!==a.target.getAttribute("aria-expanded")&&a.target.getAttribute("aria-expanded")?a.target.setAttribute("aria-expanded","false"):a.target.setAttribute("aria-expanded","true")},10):setTimeout(()=>{a.target.closest("li").querySelector(".sub-menu").classList.toggle("toggled-on"),a.target.closest("li").classList.toggle("ast-menu-hover"),"false"!==a.target.getAttribute("aria-expanded")&&a.target.getAttribute("aria-expanded")?a.target.setAttribute("aria-expanded","false"):a.target.setAttribute("aria-expanded","true")},10))})}),(a||n)&&document.addEventListener("click",function(e){b(a,t,n,s)},!1),a||n)&&document.addEventListener("keydown",function(e){"Escape"===e.key&&b(a,t,n,s)},!1);var e=document.querySelectorAll("nav.site-navigation .ast-nav-menu > .menu-item-has-children > a .ast-header-navigation-arrow");e&&e.forEach(e=>{e.addEventListener("keydown",function(e){e.target.closest("li").classList.contains("ast-menu-hover")||"Enter"!==e.key||b(a,t,n,s)},!1)})}()}}}});for(var t,a,o,l,h=function(){var e=u.style.overflow,t=(u.style.overflow="hidden",document.documentElement.clientWidth);if(u.style.overflow=e,astra.break_point<t||0===t){if(0<r.length)for(var a=0;a<r.length;a++)null!==r[a]&&r[a].classList.remove("toggled");u.classList.remove("ast-header-break-point"),u.classList.add("ast-desktop"),astraTriggerEvent(u,"astra-header-responsive-enabled")}else u.classList.add("ast-header-break-point"),u.classList.remove("ast-desktop"),astraTriggerEvent(u,"astra-header-responsive-disabled")},v=function(){var e=document.querySelectorAll(".ast-account-action-login");if(void 0!==e){var a=document.querySelectorAll("#ast-hb-login-close"),n=document.querySelectorAll("#ast-hb-account-login-wrap");if(0<a.length)for(let t=0;t<e.length;t++)e[t].onclick=function(e){e.preventDefault(),e.stopPropagation(),n[t].classList.contains("show")||n[t].classList.add("show")},a[t].onclick=function(e){e.preventDefault(),n[t].classList.remove("show")}}},f=(h(),AstraToggleSubMenu=function(e){e.preventDefault(),"false"!==e.target.getAttribute("aria-expanded")&&e.target.getAttribute("aria-expanded")?e.target.setAttribute("aria-expanded","false"):e.target.setAttribute("aria-expanded","true");for(var t=this.parentNode,a=(t.classList.contains("ast-submenu-expanded")&&document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")&&(this.classList.contains("ast-menu-toggle")||""!==(e=t.querySelector("a").getAttribute("href"))&&"#"!==e&&(window.location=e)),t.querySelectorAll(".menu-item-has-children")),n=0;n<a.length;n++){a[n].classList.remove("ast-submenu-expanded");var s=a[n].querySelector(".sub-menu, .children");null!==s&&(s.style.display="none")}for(var o=t.parentNode.querySelectorAll(".menu-item-has-children"),n=0;n<o.length;n++)if(o[n]!=t){o[n].classList.remove("ast-submenu-expanded");for(var r=o[n].querySelectorAll(".sub-menu"),l=0;l<r.length;l++)r[l].style.display="none"}t.classList.contains("menu-item-has-children")&&(astraToggleClass(t,"ast-submenu-expanded"),t.classList.contains("ast-submenu-expanded")?t.querySelector(".sub-menu").style.display="block":t.querySelector(".sub-menu").style.display="none")},AstraToggleSetup=function(){if("undefined"!=typeof astraAddon&&"function"==typeof astraToggleSetupPro)astraToggleSetupPro(d,u,i);else{var e,t,a,n=!1;if(0<(e="off-canvas"===d||"full-width"===d?(t=document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"),(a=document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length):(t=document.querySelectorAll("#ast-mobile-header"),(n=!(0<(e=(a=document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length)))?1:e))||n)for(var s=0;s<e;s++)if(n||(a[s].setAttribute("data-index",s),i[s])||(i[s]=a[s],a[s].addEventListener("click",astraNavMenuToggle,!1)),void 0!==t[s])for(var o,r=0;r<t.length;r++)if(0<(o=document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")?t[r].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"):t[r].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var l=0;l<o.length;l++)o[l].addEventListener("click",AstraToggleSubMenu,!1)}},astraNavMenuToggle=function(e){if("undefined"!=typeof astraAddon)astraNavMenuTogglePro(e,u,d,this);else{e.preventDefault();var e=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),t=(r=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"),"0");if(null!==this.closest("#ast-fixed-header")&&(e=document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),r=document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),t="0"),void 0===e[t])return!1;for(var a=e[t].querySelectorAll(".menu-item-has-children"),n=0;n<a.length;n++){a[n].classList.remove("ast-submenu-expanded");for(var s=a[n].querySelectorAll(".sub-menu"),o=0;o<s.length;o++)s[o].style.display="none"}-1!==(this.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(e[t],"toggle-on"),astraToggleClass(r[t],"toggled"),e[t].classList.contains("toggle-on")?(e[t].style.display="block",u.classList.add("ast-main-header-nav-open")):(e[t].style.display="",u.classList.remove("ast-main-header-nav-open")))}},u.addEventListener("astra-header-responsive-enabled",function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<e.length)for(var t=0;t<e.length;t++){null!=e[t]&&(e[t].classList.remove("toggle-on"),e[t].style.display="");for(var a=e[t].getElementsByClassName("sub-menu"),n=0;n<a.length;n++)a[n].style.display="";for(var s=e[t].getElementsByClassName("children"),o=0;o<s.length;o++)s[o].style.display="";for(var r=e[t].getElementsByClassName("ast-search-menu-icon"),l=0;l<r.length;l++)r[l].classList.remove("ast-dropdown-active"),r[l].style.display=""}},!1),E=navigator.userAgent,a=E.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],/trident/i.test(a[1])?t=/\brv[ :]+(\d+)/g.exec(E)||[]:"Chrome"===a[1]&&null!=(t=E.match(/\bOPR|Edge\/(\d+)/))||(a=a[2]?[a[1],a[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=E.match(/version\/(\d+)/i))&&a.splice(1,1,t[1]),"Safari"===a[0]&&a[1]<11&&document.body.classList.add("ast-safari-browser-less-than-11")),document.getElementsByClassName("astra-search-icon")),y=0;y<f.length;y++)f[y].onclick=function(e){var t;this.classList.contains("slide-search")&&(e.preventDefault(),(t=this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon")).classList.contains("ast-dropdown-active")?(""!==(t.querySelector(".search-field").value||"")&&t.querySelector(".search-form").submit(),t.classList.remove("ast-dropdown-active")):(t.classList.add("ast-dropdown-active"),t.querySelector(".search-field").setAttribute("autocomplete","off"),setTimeout(function(){t.querySelector(".search-field").focus()},200)))};function b(e,t,a,n){e&&e.forEach(e=>{e.classList.remove("astra-megamenu-focus"),e.classList.remove("toggled-on")}),a&&a.forEach(e=>{e.classList.remove("ast-menu-hover")}),n&&n.forEach(e=>{e.classList.remove("astra-megamenu-wrapper-focus")}),t&&t.forEach(e=>{e.setAttribute("aria-expanded","false")})}function L(){var e=this||"";if(e&&!e.classList.contains("astra-search-icon")&&null===e.closest(".ast-builder-menu")&&-1!==new String(e).indexOf("#")){var t=e.parentNode;if(u.classList.contains("ast-header-break-point"))document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")&&t.classList.contains("menu-item-has-children")||(document.querySelector(".main-header-menu-toggle").classList.remove("toggled"),(t=document.querySelector(".main-header-bar-navigation")).classList.remove("toggle-on"),t.style.display="none",astraTriggerEvent(document.querySelector("body"),"astraMenuHashLinkClicked"));else for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&-1!==e.className.indexOf("focus")&&(e.className=e.className.replace(" focus","")),e=e.parentElement}}function k(){for(var e=this;-1===e.className.indexOf("navigation-accessibility");)"li"===e.tagName.toLowerCase()&&e.classList.toggle("focus"),e=e.parentElement}if(u.onclick=function(e){if(void 0!==e.target.classList&&!e.target.classList.contains("ast-search-menu-icon")&&0===astraGetParents(e.target,".ast-search-menu-icon").length&&0===astraGetParents(e.target,".ast-search-icon").length)for(var t=document.getElementsByClassName("ast-search-menu-icon"),a=0;a<t.length;a++)t[a].classList.remove("ast-dropdown-active")},astra.is_header_footer_builder_active||"querySelector"in document&&"addEventListener"in window&&(u.addEventListener("mousedown",function(){u.classList.add("ast-mouse-clicked")}),u.addEventListener("keydown",function(){u.classList.remove("ast-mouse-clicked")})),astra.is_scroll_to_id){var E=document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"])');if(E)for(const link of E)""!==link.hash&&link.addEventListener("click",S);function S(e){let t=0;var a=document.querySelector(".site-header");a&&((a=a.querySelectorAll("div[data-stick-support]"))&&a.forEach(e=>{t+=e.clientHeight}),a=this.hash)&&(a=document.querySelector(a))&&(a=a.offsetTop-t)&&astraSmoothScroll(e,a)}}astra.is_scroll_to_top&&(o=document.querySelector("#page header"),l=document.getElementById("ast-scroll-top"),astScrollToTopHandler(o,l),window.addEventListener("scroll",function(){astScrollToTopHandler(o,l)}),l.onclick=function(e){astraSmoothScroll(e,0)},l.addEventListener("keydown",function(e){"Enter"===e.key&&astraSmoothScroll(e,0)}))}();;
(()=>{"use strict";var t={d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function s(t){if(this.formData={},this.tree={},!(t instanceof FormData))return this;this.formData=t;const e=()=>{const t=new Map;return t.largestIndex=0,t.set=function(e,s){""===e?e=t.largestIndex++:/^[0-9]+$/.test(e)&&(e=parseInt(e),t.largestIndex<=e&&(t.largestIndex=e+1)),Map.prototype.set.call(t,e,s)},t};this.tree=e();const s=/^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;for(const[t,i]of this.formData){const o=t.match(s);if(o)if(""===o.groups.array)this.tree.set(o.groups.name,i);else{const t=[...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map((([t,e])=>e));t.unshift(o.groups.name);const s=t.pop();t.reduce(((t,s)=>{if(/^[0-9]+$/.test(s)&&(s=parseInt(s)),t.get(s)instanceof Map)return t.get(s);const i=e();return t.set(s,i),i}),this.tree).set(s,i)}}}t.r(e),t.d(e,{date:()=>d,email:()=>r,enum:()=>f,file:()=>m,maxdate:()=>b,maxfilesize:()=>z,maxitems:()=>u,maxlength:()=>v,maxnumber:()=>x,mindate:()=>y,minfilesize:()=>A,minitems:()=>h,minlength:()=>g,minnumber:()=>w,number:()=>c,required:()=>n,requiredfile:()=>a,tel:()=>l,url:()=>p}),s.prototype.entries=function(){return this.tree.entries()},s.prototype.get=function(t){return this.tree.get(t)},s.prototype.getAll=function(t){if(!this.has(t))return[];const e=t=>{const s=[];if(t instanceof Map)for(const[i,o]of t)s.push(...e(o));else""!==t&&s.push(t);return s};return e(this.get(t))},s.prototype.has=function(t){return this.tree.has(t)},s.prototype.keys=function(){return this.tree.keys()},s.prototype.values=function(){return this.tree.values()};const i=s;function o({rule:t,field:e,error:s,...i}){this.rule=t,this.field=e,this.error=s,this.properties=i}const n=function(t){if(0===t.getAll(this.field).length)throw new o(this)},a=function(t){if(0===t.getAll(this.field).length)throw new o(this)},r=function(t){if(!t.getAll(this.field).every((t=>{if((t=t.trim()).length<6)return!1;if(-1===t.indexOf("@",1))return!1;if(t.indexOf("@")!==t.lastIndexOf("@"))return!1;const[e,s]=t.split("@",2);if(!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e))return!1;if(/\.{2,}/.test(s))return!1;if(/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(s))return!1;const i=s.split(".");if(i.length<2)return!1;for(const t of i){if(/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t))return!1;if(!/^[a-z0-9-]+$/i.test(t))return!1}return!0})))throw new o(this)},p=function(t){const e=t.getAll(this.field);if(!e.every((t=>{if(""===(t=t.trim()))return!1;try{return(t=>-1!==["http","https","ftp","ftps","mailto","news","irc","irc6","ircs","gopher","nntp","feed","telnet","mms","rtsp","sms","svn","tel","fax","xmpp","webcal","urn"].indexOf(t))(new URL(t).protocol.replace(/:$/,""))}catch{return!1}})))throw new o(this)},l=function(t){if(!t.getAll(this.field).every((t=>(t=(t=t.trim()).replaceAll(/[()/.*#\s-]+/g,""),/^[+]?[0-9]+$/.test(t)))))throw new o(this)},c=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)||!!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)))))throw new o(this)},d=function(t){if(!t.getAll(this.field).every((t=>/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t.trim()))))throw new o(this)},m=function(t){if(!t.getAll(this.field).every((t=>t instanceof File&&this.accept?.some((e=>/^\.[a-z0-9]+$/i.test(e)?t.name.toLowerCase().endsWith(e.toLowerCase()):(t=>{const e=[],s=t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);if(s){const t=s.groups.toplevel.toLowerCase(),i=s.groups.sub.toLowerCase();for(const[o,n]of(()=>{const t=new Map;return t.set("jpg|jpeg|jpe","image/jpeg"),t.set("gif","image/gif"),t.set("png","image/png"),t.set("bmp","image/bmp"),t.set("tiff|tif","image/tiff"),t.set("webp","image/webp"),t.set("ico","image/x-icon"),t.set("heic","image/heic"),t.set("asf|asx","video/x-ms-asf"),t.set("wmv","video/x-ms-wmv"),t.set("wmx","video/x-ms-wmx"),t.set("wm","video/x-ms-wm"),t.set("avi","video/avi"),t.set("divx","video/divx"),t.set("flv","video/x-flv"),t.set("mov|qt","video/quicktime"),t.set("mpeg|mpg|mpe","video/mpeg"),t.set("mp4|m4v","video/mp4"),t.set("ogv","video/ogg"),t.set("webm","video/webm"),t.set("mkv","video/x-matroska"),t.set("3gp|3gpp","video/3gpp"),t.set("3g2|3gp2","video/3gpp2"),t.set("txt|asc|c|cc|h|srt","text/plain"),t.set("csv","text/csv"),t.set("tsv","text/tab-separated-values"),t.set("ics","text/calendar"),t.set("rtx","text/richtext"),t.set("css","text/css"),t.set("htm|html","text/html"),t.set("vtt","text/vtt"),t.set("dfxp","application/ttaf+xml"),t.set("mp3|m4a|m4b","audio/mpeg"),t.set("aac","audio/aac"),t.set("ra|ram","audio/x-realaudio"),t.set("wav","audio/wav"),t.set("ogg|oga","audio/ogg"),t.set("flac","audio/flac"),t.set("mid|midi","audio/midi"),t.set("wma","audio/x-ms-wma"),t.set("wax","audio/x-ms-wax"),t.set("mka","audio/x-matroska"),t.set("rtf","application/rtf"),t.set("js","application/javascript"),t.set("pdf","application/pdf"),t.set("swf","application/x-shockwave-flash"),t.set("class","application/java"),t.set("tar","application/x-tar"),t.set("zip","application/zip"),t.set("gz|gzip","application/x-gzip"),t.set("rar","application/rar"),t.set("7z","application/x-7z-compressed"),t.set("exe","application/x-msdownload"),t.set("psd","application/octet-stream"),t.set("xcf","application/octet-stream"),t.set("doc","application/msword"),t.set("pot|pps|ppt","application/vnd.ms-powerpoint"),t.set("wri","application/vnd.ms-write"),t.set("xla|xls|xlt|xlw","application/vnd.ms-excel"),t.set("mdb","application/vnd.ms-access"),t.set("mpp","application/vnd.ms-project"),t.set("docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"),t.set("docm","application/vnd.ms-word.document.macroEnabled.12"),t.set("dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"),t.set("dotm","application/vnd.ms-word.template.macroEnabled.12"),t.set("xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),t.set("xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"),t.set("xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"),t.set("xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"),t.set("xltm","application/vnd.ms-excel.template.macroEnabled.12"),t.set("xlam","application/vnd.ms-excel.addin.macroEnabled.12"),t.set("pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"),t.set("pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"),t.set("ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"),t.set("ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),t.set("potx","application/vnd.openxmlformats-officedocument.presentationml.template"),t.set("potm","application/vnd.ms-powerpoint.template.macroEnabled.12"),t.set("ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"),t.set("sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"),t.set("sldm","application/vnd.ms-powerpoint.slide.macroEnabled.12"),t.set("onetoc|onetoc2|onetmp|onepkg","application/onenote"),t.set("oxps","application/oxps"),t.set("xps","application/vnd.ms-xpsdocument"),t.set("odt","application/vnd.oasis.opendocument.text"),t.set("odp","application/vnd.oasis.opendocument.presentation"),t.set("ods","application/vnd.oasis.opendocument.spreadsheet"),t.set("odg","application/vnd.oasis.opendocument.graphics"),t.set("odc","application/vnd.oasis.opendocument.chart"),t.set("odb","application/vnd.oasis.opendocument.database"),t.set("odf","application/vnd.oasis.opendocument.formula"),t.set("wp|wpd","application/wordperfect"),t.set("key","application/vnd.apple.keynote"),t.set("numbers","application/vnd.apple.numbers"),t.set("pages","application/vnd.apple.pages"),t})())("*"===i&&n.startsWith(t+"/")||n===s[0])&&e.push(...o.split("|"))}return e})(e).some((e=>(e="."+e.trim(),t.name.toLowerCase().endsWith(e.toLowerCase())))))))))throw new o(this)},f=function(t){if(!t.getAll(this.field).every((t=>this.accept?.some((e=>t===String(e))))))throw new o(this)},h=function(t){if(t.getAll(this.field).length<parseInt(this.threshold))throw new o(this)},u=function(t){const e=t.getAll(this.field);if(parseInt(this.threshold)<e.length)throw new o(this)},g=function(t){const e=t.getAll(this.field);let s=0;if(e.forEach((t=>{"string"==typeof t&&(s+=t.length)})),0!==s&&s<parseInt(this.threshold))throw new o(this)},v=function(t){const e=t.getAll(this.field);let s=0;if(e.forEach((t=>{"string"==typeof t&&(s+=t.length)})),parseInt(this.threshold)<s)throw new o(this)},w=function(t){if(!t.getAll(this.field).every((t=>!(parseFloat(t)<parseFloat(this.threshold)))))throw new o(this)},x=function(t){if(!t.getAll(this.field).every((t=>!(parseFloat(this.threshold)<parseFloat(t)))))throw new o(this)},y=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&t<this.threshold)))))throw new o(this)},b=function(t){if(!t.getAll(this.field).every((t=>(t=t.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&this.threshold<t)))))throw new o(this)},A=function(t){const e=t.getAll(this.field);let s=0;if(e.forEach((t=>{t instanceof File&&(s+=t.size)})),s<parseInt(this.threshold))throw new o(this)},z=function(t){const e=t.getAll(this.field);let s=0;if(e.forEach((t=>{t instanceof File&&(s+=t.size)})),parseInt(this.threshold)<s)throw new o(this)};var $;window.swv={validators:e,validate:(t,s,n={})=>{const a=(t.rules??[]).filter((({rule:t,...s})=>"function"==typeof e[t]&&("function"!=typeof e[t].matches||e[t].matches(s,n))));if(!a.length)return new Map;const r=new i(s),p=a.reduce(((t,s)=>{const{rule:i,...n}=s;if(t.get(n.field)?.error)return t;try{e[i].call({rule:i,...n},r)}catch(e){if(e instanceof o)return t.set(n.field,e)}return t}),new Map);for(const t of r.keys())p.has(t)||p.set(t,{validInputs:r.getAll(t)});return p},...null!==($=window.swv)&&void 0!==$?$:{}}})();
(()=>{"use strict";const e=e=>Math.abs(parseInt(e,10)),t=(e,t)=>{const a=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["validating","validating"],["payment_required","payment-required"]]);a.has(t)&&(t=a.get(t)),Array.from(a.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const n=e.getAttribute("data-status");return e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),n&&n!==t&&e.classList.remove(n),t},a=(e,t,a)=>{const n=new CustomEvent(`wpcf7${t}`,{bubbles:!0,detail:a});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(n)},n=e=>{const{root:t,namespace:a="contact-form-7/v1"}=wpcf7.api;return r.reduceRight(((e,t)=>a=>t(a,e)),(e=>{let n,r,{url:o,path:c,endpoint:s,headers:i,body:l,data:d,...p}=e;"string"==typeof s&&(n=a.replace(/^\/|\/$/g,""),r=s.replace(/^\//,""),c=r?n+"/"+r:n),"string"==typeof c&&(-1!==t.indexOf("?")&&(c=c.replace("?","&")),c=c.replace(/^\//,""),o=t+c),i={Accept:"application/json, */*;q=0.1",...i},delete i["X-WP-Nonce"],d&&(l=JSON.stringify(d),i["Content-Type"]="application/json");const u={code:"fetch_error",message:"You are probably offline."},f={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(o||c||window.location.href,{...p,headers:i,body:l}).then((e=>Promise.resolve(e).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>{if(204===e.status)return null;if(e&&e.json)return e.json().catch((()=>{throw f}));throw f}))),(()=>{throw u}))}))(e)},r=[];function o(e){var a,n;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{target:o,scope:l=e,...d}=r;if(void 0===(null===(a=e.wpcf7)||void 0===a?void 0:a.schema))return;const p={...e.wpcf7.schema};if(void 0!==o){if(!e.contains(o))return;if(!o.closest(".wpcf7-form-control-wrap[data-name]"))return;if(o.closest(".novalidate"))return}const u=new FormData,f=[];for(const e of l.querySelectorAll(".wpcf7-form-control-wrap"))if(!e.closest(".novalidate")&&(e.querySelectorAll(":where( input, textarea, select ):enabled").forEach((e=>{if(e.name)switch(e.type){case"button":case"image":case"reset":case"submit":break;case"checkbox":case"radio":e.checked&&u.append(e.name,e.value);break;case"select-multiple":for(const t of e.selectedOptions)u.append(e.name,t.value);break;case"file":for(const t of e.files)u.append(e.name,t);break;default:u.append(e.name,e.value)}})),e.dataset.name&&(f.push(e.dataset.name),e.setAttribute("data-under-validation","1"),e.contains(o))))break;p.rules=(null!==(n=p.rules)&&void 0!==n?n:[]).filter((e=>{let{field:t}=e;return f.includes(t)}));const m=e.getAttribute("data-status");Promise.resolve(t(e,"validating")).then((t=>{if(void 0!==swv){const t=swv.validate(p,u,r);for(const[a,{error:n,validInputs:r}]of t)s(e,a),void 0!==n&&c(e,a,n,{scope:l}),i(e,a,null!=r?r:[])}})).finally((()=>{t(e,m),e.querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]").forEach((e=>{e.removeAttribute("data-under-validation")}))}))}n.use=e=>{r.unshift(e)};const c=(e,t,a,n)=>{var r;const{scope:o=e,...c}=null!=n?n:{},s=`${null===(r=e.wpcf7)||void 0===r?void 0:r.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,""),i=e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);(()=>{const t=document.createElement("li");t.setAttribute("id",s),i&&i.id?t.insertAdjacentHTML("beforeend",`<a href="#${i.id}">${a}</a>`):t.insertAdjacentText("beforeend",a),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)})(),o.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((t=>{if("validating"===e.getAttribute("data-status")&&!t.dataset.underValidation)return;const n=document.createElement("span");n.classList.add("wpcf7-not-valid-tip"),n.setAttribute("aria-hidden","true"),n.insertAdjacentText("beforeend",a),t.appendChild(n),t.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),t.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.classList.add("wpcf7-not-valid"),e.setAttribute("aria-describedby",s),"function"==typeof e.setCustomValidity&&e.setCustomValidity(a),e.closest(".use-floating-validation-tip")&&(e.addEventListener("focus",(e=>{n.setAttribute("style","display: none")})),n.addEventListener("click",(e=>{n.setAttribute("style","display: none")})))}))}))},s=(e,t)=>{var a,n;const r=`${null===(a=e.wpcf7)||void 0===a?void 0:a.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi,"");null===(n=e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${r}`))||void 0===n||n.remove(),e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e=>{var t;null===(t=e.querySelector(".wpcf7-not-valid-tip"))||void 0===t||t.remove(),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid"),"function"==typeof e.setCustomValidity&&e.setCustomValidity("")}))}))},i=(e,t,a)=>{e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e=>{if("output"===e.tagName.toLowerCase()){const t=e;0===a.length&&a.push(t.dataset.default),a.slice(0,1).forEach((e=>{e instanceof File&&(e=e.name),t.textContent=e}))}else e.querySelectorAll("output").forEach((e=>{e.hasAttribute("data-default")?0===a.length?e.removeAttribute("hidden"):e.setAttribute("hidden","hidden"):e.remove()})),a.forEach((a=>{a instanceof File&&(a=a.name);const n=document.createElement("output");n.setAttribute("name",t),n.textContent=a,e.appendChild(n)}))}))};function l(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(wpcf7.blocked)return d(e),void t(e,"submitting");const o=new FormData(e);r.submitter&&r.submitter.name&&o.append(r.submitter.name,r.submitter.value);const s={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(o,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:o};n({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:o,wpcf7:{endpoint:"feedback",form:e,detail:s}}).then((n=>{const r=t(e,n.status);return s.status=n.status,s.apiResponse=n,["invalid","unaccepted","spam","aborted"].includes(r)?a(e,r,s):["sent","failed"].includes(r)&&a(e,`mail${r}`,s),a(e,"submit",s),n})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&t.invalid_fields.forEach((t=>{c(e,t.field,t.message)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}n.use(((e,n)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:n,detail:r}=e.wpcf7;d(n),a(n,"beforesubmit",r),t(n,"submitting")}return n(e)}));const d=e=>{e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t=>{t.dataset.name&&s(e,t.dataset.name)})),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function p(e){const r=new FormData(e),o={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(r,(e=>{const t=e[0],a=e[1];return!t.match(/^_/)&&{name:t,value:a}})).filter((e=>!1!==e)),formData:r};n({endpoint:`contact-forms/${e.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:e,detail:o}}).then((n=>{e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,t(e,"mail_sent")):t(e,"init"),o.apiResponse=n,a(e,"reset",o)})).catch((e=>console.error(e)))}n.use(((e,a)=>{if(e.wpcf7&&"refill"===e.wpcf7.endpoint){const{form:a,detail:n}=e.wpcf7;d(a),t(a,"resetting")}return a(e)}));const u=(e,t)=>{for(const a in t){const n=t[a];e.querySelectorAll(`input[name="${a}"]`).forEach((e=>{e.value=""})),e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":","")}`).forEach((e=>{e.setAttribute("src",n)}));const r=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);r&&e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e=>{e.value=r[1]}))}},f=(e,t)=>{for(const a in t){const n=t[a][0],r=t[a][1];e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e=>{e.querySelector(`input[name="${a}"]`).value="",e.querySelector(".wpcf7-quiz-label").textContent=n,e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value=r}))}};function m(t){const a=new FormData(t);t.wpcf7={id:e(a.get("_wpcf7")),status:t.getAttribute("data-status"),pluginVersion:a.get("_wpcf7_version"),locale:a.get("_wpcf7_locale"),unitTag:a.get("_wpcf7_unit_tag"),containerPost:e(a.get("_wpcf7_container_post")),parent:t.closest(".wpcf7"),schema:void 0},t.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),(e=>{e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t=>{t.addEventListener("change",(t=>{const a=t.target.getAttribute("name");e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e=>{e!==t.target&&(e.checked=!1)}))}))}))})(t),(e=>{e.querySelectorAll(".has-free-text").forEach((t=>{const a=t.querySelector("input.wpcf7-free-text"),n=t.querySelector('input[type="checkbox"], input[type="radio"]');a.disabled=!n.checked,e.addEventListener("change",(e=>{a.disabled=!n.checked,e.target===n&&n.checked&&a.focus()}))}))})(t),(e=>{e.querySelectorAll(".wpcf7-validates-as-url").forEach((e=>{e.addEventListener("change",(t=>{let a=e.value.trim();a&&!a.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==a.indexOf(".")&&(a=a.replace(/^\/+/,""),a="http://"+a),e.value=a}))}))})(t),(e=>{if(!e.querySelector(".wpcf7-acceptance")||e.classList.contains("wpcf7-acceptance-as-validation"))return;const t=()=>{let t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((e=>{if(!t||e.classList.contains("optional"))return;const a=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&a.checked||!e.classList.contains("invert")&&!a.checked)&&(t=!1)})),e.querySelectorAll(".wpcf7-submit").forEach((e=>{e.disabled=!t}))};t(),e.addEventListener("change",(e=>{t()})),e.addEventListener("wpcf7reset",(e=>{t()}))})(t),(t=>{const a=(t,a)=>{const n=e(t.getAttribute("data-starting-value")),r=e(t.getAttribute("data-maximum-value")),o=e(t.getAttribute("data-minimum-value")),c=t.classList.contains("down")?n-a.value.length:a.value.length;t.setAttribute("data-current-value",c),t.innerText=c,r&&r<a.value.length?t.classList.add("too-long"):t.classList.remove("too-long"),o&&a.value.length<o?t.classList.add("too-short"):t.classList.remove("too-short")},n=e=>{e={init:!1,...e},t.querySelectorAll(".wpcf7-character-count").forEach((n=>{const r=n.getAttribute("data-target-name"),o=t.querySelector(`[name="${r}"]`);o&&(o.value=o.defaultValue,a(n,o),e.init&&o.addEventListener("keyup",(e=>{a(n,o)})))}))};n({init:!0}),t.addEventListener("wpcf7reset",(e=>{n()}))})(t),window.addEventListener("load",(e=>{wpcf7.cached&&t.reset()})),t.addEventListener("reset",(e=>{wpcf7.reset(t)})),t.addEventListener("submit",(e=>{wpcf7.submit(t,{submitter:e.submitter}),e.preventDefault()})),t.addEventListener("wpcf7submit",(e=>{e.detail.apiResponse.captcha&&u(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&f(t,e.detail.apiResponse.quiz)})),t.addEventListener("wpcf7reset",(e=>{e.detail.apiResponse.captcha&&u(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&f(t,e.detail.apiResponse.quiz)})),n({endpoint:`contact-forms/${t.wpcf7.id}/feedback/schema`,method:"GET"}).then((e=>{t.wpcf7.schema=e})),t.addEventListener("change",(e=>{e.target.closest(".wpcf7-form-control")&&wpcf7.validate(t,{target:e.target})}))}document.addEventListener("DOMContentLoaded",(e=>{var t;"undefined"!=typeof wpcf7?void 0!==wpcf7.api?"function"==typeof window.fetch?"function"==typeof window.FormData?"function"==typeof NodeList.prototype.forEach?"function"==typeof String.prototype.replaceAll?(wpcf7={init:m,submit:l,reset:p,validate:o,...null!==(t=wpcf7)&&void 0!==t?t:{}},document.querySelectorAll(".wpcf7 > form").forEach((e=>{wpcf7.init(e),e.closest(".wpcf7").classList.replace("no-js","js")}))):console.error("Your browser does not support String.replaceAll()."):console.error("Your browser does not support NodeList.forEach()."):console.error("Your browser does not support window.FormData()."):console.error("Your browser does not support window.fetch()."):console.error("wpcf7.api is not defined."):console.error("wpcf7 is not defined.")}))})();
/*! lazysizes - v5.3.1 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:1,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});;
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(p){p.fn._fadeIn=p.fn.fadeIn;var b=p.noop||function(){},h=/MSIE/.test(navigator.userAgent),k=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),y=(document.documentMode,"function"==typeof document.createElement("div").style.setExpression&&document.createElement("div").style.setExpression),m=(p.blockUI=function(e){o(window,e)},p.unblockUI=function(e){v(window,e)},p.growlUI=function(e,t,o,n){var i=p('<div class="growlUI"></div>'),s=(e&&i.append("<h1>"+e+"</h1>"),t&&i.append("<h2>"+t+"</h2>"),o===undefined&&(o=3e3),function(e){p.blockUI({message:i,fadeIn:"undefined"!=typeof(e=e||{}).fadeIn?e.fadeIn:700,fadeOut:"undefined"!=typeof e.fadeOut?e.fadeOut:1e3,timeout:"undefined"!=typeof e.timeout?e.timeout:o,centerY:!1,showOverlay:!1,onUnblock:n,css:p.blockUI.defaults.growlCSS})});s(),i.css("opacity");i.on("mouseover",function(){s({fadeIn:0,timeout:3e4});var e=p(".blockMsg");e.stop(),e.fadeTo(300,1)}).on("mouseout",function(){p(".blockMsg").fadeOut(1e3)})},p.fn.block=function(e){var t;return this[0]===window?(p.blockUI(e),this):(t=p.extend({},p.blockUI.defaults,e||{}),this.each(function(){var e=p(this);t.ignoreIfBlocked&&e.data("blockUI.isBlocked")||e.unblock({fadeOut:0})}),this.each(function(){"static"==p.css(this,"position")&&(this.style.position="relative",p(this).data("blockUI.static",!0)),this.style.zoom=1,o(this,e)}))},p.fn.unblock=function(e){return this[0]===window?(p.unblockUI(e),this):this.each(function(){v(this,e)})},p.blockUI.version=2.7,p.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1},null),g=[];function o(e,o){var n=e==window,t=o&&o.message!==undefined?o.message:undefined;if(!(o=p.extend({},p.blockUI.defaults,o||{})).ignoreIfBlocked||!p(e).data("blockUI.isBlocked")){o.overlayCSS=p.extend({},p.blockUI.defaults.overlayCSS,o.overlayCSS||{}),f=p.extend({},p.blockUI.defaults.css,o.css||{}),o.onOverlayClick&&(o.overlayCSS.cursor="pointer"),u=p.extend({},p.blockUI.defaults.themedCSS,o.themedCSS||{}),t=t===undefined?o.message:t,n&&m&&v(window,{fadeOut:0}),t&&"string"!=typeof t&&(t.parentNode||t.jquery)&&(l=t.jquery?t[0]:t,d={},p(e).data("blockUI.history",d),d.el=l,d.parent=l.parentNode,d.display=l.style.display,d.position=l.style.position,d.parent&&d.parent.removeChild(l)),p(e).data("blockUI.onUnblock",o.onUnblock);var i,s,l=o.baseZ,d=h||o.forceIframe?p('<iframe class="blockUI" style="z-index:'+l+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+o.iframeSrc+'"></iframe>'):p('<div class="blockUI" style="display:none"></div>'),a=o.theme?p('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+l+++';display:none"></div>'):p('<div class="blockUI blockOverlay" style="z-index:'+l+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),c=(o.theme&&n?(c='<div class="blockUI '+o.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(l+10)+';display:none;position:fixed">',o.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(o.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div></div>'):o.theme?(c='<div class="blockUI '+o.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(l+10)+';display:none;position:absolute">',o.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(o.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div></div>'):c=n?'<div class="blockUI '+o.blockMsgClass+' blockPage" style="z-index:'+(l+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+o.blockMsgClass+' blockElement" style="z-index:'+(l+10)+';display:none;position:absolute"></div>',l=p(c),t&&(o.theme?(l.css(u),l.addClass("ui-widget-content")):l.css(f)),o.theme||a.css(o.overlayCSS),a.css("position",n?"fixed":"absolute"),(h||o.forceIframe)&&d.css("opacity",0),[d,a,l]),r=p(n?"body":e),u=(p.each(c,function(){this.appendTo(r)}),o.theme&&o.draggable&&p.fn.draggable&&l.draggable({handle:".ui-dialog-titlebar",cancel:"li"}),y&&(!p.support.boxModel||0<p("object,embed",n?null:e).length));if((k||u)&&(n&&o.allowBodyStretch&&p.support.boxModel&&p("html,body").css("height","100%"),!k&&p.support.boxModel||n||(f=U(e,"borderTopWidth"),u=U(e,"borderLeftWidth"),i=f?"(0 - "+f+")":0,s=u?"(0 - "+u+")":0),p.each(c,function(e,t){t=t[0].style;t.position="absolute",e<2?(n?t.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+o.quirksmodeOffsetHack+') + "px"'):t.setExpression("height",'this.parentNode.offsetHeight + "px"'),n?t.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):t.setExpression("width",'this.parentNode.offsetWidth + "px"'),s&&t.setExpression("left",s),i&&t.setExpression("top",i)):o.centerY?(n&&t.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),t.marginTop=0):!o.centerY&&n&&(e=o.css&&o.css.top?parseInt(o.css.top,10):0,t.setExpression("top","((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+e+') + "px"'))})),t&&((o.theme?l.find(".ui-widget-content"):l).append(t),(t.jquery||t.nodeType)&&p(t).show()),(h||o.forceIframe)&&o.showOverlay&&d.show(),o.fadeIn?(f=o.onBlock||b,u=o.showOverlay&&!t?f:b,c=t?f:b,o.showOverlay&&a._fadeIn(o.fadeIn,u),t&&l._fadeIn(o.fadeIn,c)):(o.showOverlay&&a.show(),t&&l.show(),o.onBlock&&o.onBlock.bind(l)()),I(1,e,o),n)m=l[0],g=p(o.focusableElements,m),o.focusInput&&setTimeout(w,20);else{var d=l[0],f=o.centerX,u=o.centerY,c=d.parentNode,a=d.style,t=(c.offsetWidth-d.offsetWidth)/2-U(c,"borderLeftWidth"),d=(c.offsetHeight-d.offsetHeight)/2-U(c,"borderTopWidth");f&&(a.left=0<t?t+"px":"0"),u&&(a.top=0<d?d+"px":"0")}o.timeout&&(l=setTimeout(function(){n?p.unblockUI(o):p(e).unblock(o)},o.timeout),p(e).data("blockUI.timeout",l))}}function v(e,t){var o,n,i=e==window,s=p(e),l=s.data("blockUI.history"),d=s.data("blockUI.timeout");d&&(clearTimeout(d),s.removeData("blockUI.timeout")),t=p.extend({},p.blockUI.defaults,t||{}),I(0,e,t),null===t.onUnblock&&(t.onUnblock=s.data("blockUI.onUnblock"),s.removeData("blockUI.onUnblock")),n=i?p(document.body).children().filter(".blockUI").add("body > .blockUI"):s.find(">.blockUI"),t.cursorReset&&(1<n.length&&(n[1].style.cursor=t.cursorReset),2<n.length&&(n[2].style.cursor=t.cursorReset)),i&&(m=g=null),t.fadeOut?(o=n.length,n.stop().fadeOut(t.fadeOut,function(){0==--o&&a(n,l,t,e)})):a(n,l,t,e)}function a(e,t,o,n){var i=p(n);i.data("blockUI.isBlocked")||(e.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.el.style.cursor="default",t.parent&&t.parent.appendChild(t.el),i.removeData("blockUI.history")),i.data("blockUI.static")&&i.css("position","static"),"function"==typeof o.onUnblock&&o.onUnblock(n,o),t=(e=p(document.body)).width(),i=e[0].style.width,e.width(t-1).width(t),e[0].style.width=i)}function I(e,t,o){var n=t==window,t=p(t);!e&&(n&&!m||!n&&!t.data("blockUI.isBlocked"))||(t.data("blockUI.isBlocked",e),n&&o.bindEvents&&(!e||o.showOverlay)&&(t="mousedown mouseup keydown keypress keyup touchstart touchend touchmove",e?p(document).on(t,o,i):p(document).off(t,i)))}function i(e){if("keydown"===e.type&&e.keyCode&&9==e.keyCode&&m&&e.data.constrainTabKey){var t=g,o=!e.shiftKey&&e.target===t[t.length-1],n=e.shiftKey&&e.target===t[0];if(o||n)return setTimeout(function(){w(n)},10),!1}t=e.data,o=p(e.target);return o.hasClass("blockOverlay")&&t.onOverlayClick&&t.onOverlayClick(e),0<o.parents("div."+t.blockMsgClass).length||0===o.parents().children().filter("div.blockUI").length}function w(e){!g||(e=g[!0===e?g.length-1:0])&&e.trigger("focus")}function U(e,t){return parseInt(p.css(e,t),10)||0}}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();;
jQuery(function(d){if("undefined"==typeof wc_add_to_cart_params)return!1;var t=function(){this.requests=[],this.addRequest=this.addRequest.bind(this),this.run=this.run.bind(this),d(document.body).on("click",".add_to_cart_button",{addToCartHandler:this},this.onAddToCart).on("click",".remove_from_cart_button",{addToCartHandler:this},this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("ajax_request_not_sent.adding_to_cart",this.updateButton).on("added_to_cart removed_from_cart",{addToCartHandler:this},this.updateFragments)};t.prototype.addRequest=function(t){this.requests.push(t),1===this.requests.length&&this.run()},t.prototype.run=function(){var t=this,a=t.requests[0].complete;t.requests[0].complete=function(){"function"==typeof a&&a(),t.requests.shift(),0<t.requests.length&&t.run()},d.ajax(this.requests[0])},t.prototype.onAddToCart=function(t){var e,a=d(this);if(a.is(".ajax_add_to_cart"))return!a.attr("data-product_id")||(t.preventDefault(),a.removeClass("added"),a.addClass("loading"),!1===d(document.body).triggerHandler("should_send_ajax_request.adding_to_cart",[a])?(d(document.body).trigger("ajax_request_not_sent.adding_to_cart",[!1,!1,a]),!0):(e={},d.each(a.data(),function(t,a){e[t]=a}),d.each(a[0].dataset,function(t,a){e[t]=a}),d(document.body).trigger("adding_to_cart",[a,e]),void t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),data:e,success:function(t){t&&(t.error&&t.product_url?window.location=t.product_url:"yes"===wc_add_to_cart_params.cart_redirect_after_add?window.location=wc_add_to_cart_params.cart_url:d(document.body).trigger("added_to_cart",[t.fragments,t.cart_hash,a]))},dataType:"json"})))},t.prototype.onRemoveFromCart=function(t){var a=d(this),e=a.closest(".woocommerce-mini-cart-item");t.preventDefault(),e.block({message:null,overlayCSS:{opacity:.6}}),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),data:{cart_item_key:a.data("cart_item_key")},success:function(t){t&&t.fragments?d(document.body).trigger("removed_from_cart",[t.fragments,t.cart_hash,a]):window.location=a.attr("href")},error:function(){window.location=a.attr("href")},dataType:"json"})},t.prototype.updateButton=function(t,a,e,r){(r=void 0!==r&&r)&&(r.removeClass("loading"),a&&r.addClass("added"),a&&!wc_add_to_cart_params.is_cart&&0===r.parent().find(".added_to_cart").length&&r.after('<a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),d(document.body).trigger("wc_cart_button_updated",[r]))},t.prototype.updateFragments=function(t,a){a&&(d.each(a,function(t){d(t).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),d.each(a,function(t,a){d(t).replaceWith(a),d(t).stop(!0).css("opacity","1").unblock()}),d(document.body).trigger("wc_fragments_loaded"))},new t});;
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n,o,t=!1;"function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),t||(n=window.Cookies,(o=window.Cookies=e()).noConflict=function(){return window.Cookies=n,o})}(function(){function m(){for(var e=0,n={};e<arguments.length;e++){var o,t=arguments[e];for(o in t)n[o]=t[o]}return n}return function e(C){function g(e,n,o){var t,r;if("undefined"!=typeof document){if(1<arguments.length){"number"==typeof(o=m({path:"/"},g.defaults,o)).expires&&((r=new Date).setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r),o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(l){}n=C.write?C.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i,c="";for(i in o)o[i]&&(c+="; "+i,!0!==o[i]&&(c+="="+o[i]));return document.cookie=e+"="+n+c}e||(t={});for(var s=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,p=0;p<s.length;p++){var a=s[p].split("=");'"'===(u=a.slice(1).join("=")).charAt(0)&&(u=u.slice(1,-1));try{var d=a[0].replace(f,decodeURIComponent),u=C.read?C.read(u,d):C(u,d)||u.replace(f,decodeURIComponent);if(this.json)try{u=JSON.parse(u)}catch(l){}if(e===d){t=u;break}e||(t[d]=u)}catch(l){}}return t}}return(g.set=g).get=function(e){return g.call(g,e)},g.getJSON=function(){return g.apply({json:!0},[].slice.call(arguments))},g.defaults={},g.remove=function(e,n){g(e,"",m(n,{expires:-1}))},g.withConverter=e,g}(function(){})});;
jQuery(function(s){s(".woocommerce-ordering").on("change","select.orderby",function(){s(this).closest("form").trigger("submit")}),s("input.qty:not(.product-quantity input.qty)").each(function(){var o=parseFloat(s(this).attr("min"));0<=o&&parseFloat(s(this).val())<o&&s(this).val(o)});var e="store_notice"+(s(".woocommerce-store-notice").data("noticeId")||"");"hidden"===Cookies.get(e)?s(".woocommerce-store-notice").hide():s(".woocommerce-store-notice").show(),s(".woocommerce-store-notice__dismiss-link").on("click",function(o){Cookies.set(e,"hidden",{path:"/"}),s(".woocommerce-store-notice").hide(),o.preventDefault()}),s(".woocommerce-input-wrapper span.description").length&&s(document.body).on("click",function(){s(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),s(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),s(".woocommerce-input-wrapper :input").on("keydown",function(o){var e=s(this).parent().find("span.description");if(27===o.which&&e.length&&e.is(":visible"))return e.prop("aria-hidden",!0).slideUp(250),o.preventDefault(),!1}).on("click focus",function(){var o=s(this).parent(),e=o.find("span.description");o.addClass("currentTarget"),s(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),e.length&&e.is(":hidden")&&e.prop("aria-hidden",!1).slideDown(250),o.removeClass("currentTarget")}),s.scroll_to_notices=function(o){o.length&&s("html, body").animate({scrollTop:o.offset().top-100},1e3)},s('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'),s(".woocommerce form input").filter(":password").parent("span").addClass("password-input"),s(".password-input").append('<span class="show-password-input"></span>'),s(".show-password-input").on("click",function(){s(this).hasClass("display-password")?s(this).removeClass("display-password"):s(this).addClass("display-password"),s(this).hasClass("display-password")?s(this).siblings(['input[type="password"]']).prop("type","text"):s(this).siblings('input[type="text"]').prop("type","password")})});;
jQuery(function(r){if("undefined"==typeof wc_cart_fragments_params)return!1;var t=!0,o=wc_cart_fragments_params.cart_hash_key;try{t="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(f){t=!1}function a(){t&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function s(e){t&&(localStorage.setItem(o,e),sessionStorage.setItem(o,e))}var e={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",data:{time:(new Date).getTime()},timeout:wc_cart_fragments_params.request_timeout,success:function(e){e&&e.fragments&&(r.each(e.fragments,function(e,t){r(e).replaceWith(t)}),t&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(e.fragments)),s(e.cart_hash),e.cart_hash&&a()),r(document.body).trigger("wc_fragments_refreshed"))},error:function(){r(document.body).trigger("wc_fragments_ajax_error")}};function n(){r.ajax(e)}if(t){var i=null;r(document.body).on("wc_fragment_refresh updated_wc_div",function(){n()}),r(document.body).on("added_to_cart removed_from_cart",function(e,t,r){var n=sessionStorage.getItem(o);null!==n&&n!==undefined&&""!==n||a(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(t)),s(r)}),r(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(n,864e5)}),r(window).on("storage onstorage",function(e){o===e.originalEvent.key&&localStorage.getItem(o)!==sessionStorage.getItem(o)&&n()}),r(window).on("pageshow",function(e){e.originalEvent.persisted&&(r(".widget_shopping_cart_content").empty(),r(document.body).trigger("wc_fragment_refresh"))});try{var c=JSON.parse(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(o),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=+m+864e5,w=(new Date).getTime();if(d<w)throw"Fragment expired";i=setTimeout(n,d-w)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";r.each(c,function(e,t){r(e).replaceWith(t)}),r(document.body).trigger("wc_fragments_loaded")}catch(f){n()}}else n();0<Cookies.get("woocommerce_items_in_cart")?r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),r(document.body).on("adding_to_cart",function(){r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()}),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.widgetsPreview&&wp.customize.widgetsPreview.WidgetPartial&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){n()})});;
"use strict";

;

(function ($) {
  'use strict';

  var $window = $(window);

  $.fn.getHappySettings = function () {
    return this.data('happy-settings');
  };

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function initFilterNav($scope, filterFn) {
    var $filterNav = $scope.find('.hajs-filter'),
        defaultFilter = $filterNav.data('default-filter');

    if ($filterNav.length) {
      $filterNav.on('click.onFilterNav', 'button', function (event) {
        event.stopPropagation();
        var $current = $(this);
        $current.addClass('ha-filter__item--active').siblings().removeClass('ha-filter__item--active');
        filterFn($current.data('filter'));
      });
      $filterNav.find('[data-filter="' + defaultFilter + '"]').click();
    }
  }
  /**
   * Initialize magnific lighbox gallery
   *
   * @param {$element, selector, isEnabled, key} settings
   */


  function initPopupGallery(settings) {
    settings.$element.on('click', settings.selector, function (event) {
      event.preventDefault();
    });

    if (!$.fn.magnificPopup) {
      return;
    }

    if (!settings.isEnabled) {
      $.magnificPopup.close();
      return;
    }

    var windowWidth = $(window).width(),
        mobileWidth = elementorFrontendConfig.breakpoints.md,
        tabletWidth = elementorFrontendConfig.breakpoints.lg;
    settings.$element.find(settings.selector).magnificPopup({
      key: settings.key,
      type: 'image',
      image: {
        titleSrc: function titleSrc(item) {
          return item.el.attr('title') ? item.el.attr('title') : item.el.find('img').attr('alt');
        }
      },
      gallery: {
        enabled: true,
        preload: [1, 2]
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function opener(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      },
      disableOn: function disableOn() {
        if (settings.disableOnMobile && windowWidth < mobileWidth) {
          return false;
        }

        if (settings.disableOnTablet && windowWidth >= mobileWidth && windowWidth < tabletWidth) {
          return false;
        }

        return true;
      }
    });
  }

  var HandleImageCompare = function HandleImageCompare($scope) {
    var $item = $scope.find('.hajs-image-comparison'),
        settings = $item.getHappySettings(),
        fieldMap = {
      on_hover: 'move_slider_on_hover',
      on_swipe: 'move_with_handle_only',
      on_click: 'click_to_move'
    };
    settings[fieldMap[settings.move_handle || 'on_swipe']] = true;
    delete settings.move_handle;
    $item.imagesLoaded().done(function () {
      $item.twentytwenty(settings);
      var t = setTimeout(function () {
        $window.trigger('resize.twentytwenty');
        clearTimeout(t);
      }, 400);
    });
  };

  $window.on('elementor/frontend/init', function () {
    var ModuleHandler = elementorModules.frontend.handlers.Base;
    var SliderBase = ModuleHandler.extend({
      bindEvents: function bindEvents() {
        this.removeArrows();
        this.run();
      },
      removeArrows: function removeArrows() {
        var _this = this;

        this.elements.$container.on('init', function () {
          _this.elements.$container.siblings().hide();
        });
      },
      getDefaultSettings: function getDefaultSettings() {
        return {
          autoplay: true,
          arrows: false,
          checkVisible: false,
          container: '.hajs-slick',
          dots: false,
          infinite: true,
          rows: 0,
          slidesToShow: 1,
          prevArrow: $('<div />').append(this.findElement('.slick-prev').clone().show()).html(),
          nextArrow: $('<div />').append(this.findElement('.slick-next').clone().show()).html()
        };
      },
      getDefaultElements: function getDefaultElements() {
        return {
          $container: this.findElement(this.getSettings('container'))
        };
      },
      onElementChange: debounce(function () {
        this.elements.$container.slick('unslick');
        this.run();
      }, 200),
      getSlickSettings: function getSlickSettings() {
        var settings = {
          infinite: !!this.getElementSettings('loop'),
          autoplay: !!this.getElementSettings('autoplay'),
          autoplaySpeed: this.getElementSettings('autoplay_speed'),
          speed: this.getElementSettings('animation_speed'),
          centerMode: !!this.getElementSettings('center'),
          vertical: !!this.getElementSettings('vertical'),
          slidesToScroll: 1
        };

        switch (this.getElementSettings('navigation')) {
          case 'arrow':
            settings.arrows = true;
            break;

          case 'dots':
            settings.dots = true;
            break;

          case 'both':
            settings.arrows = true;
            settings.dots = true;
            break;
        }

        settings.slidesToShow = parseInt(this.getElementSettings('slides_to_show')) || 1;
        settings.responsive = [{
          breakpoint: elementorFrontend.config.breakpoints.lg,
          settings: {
            slidesToShow: parseInt(this.getElementSettings('slides_to_show_tablet')) || settings.slidesToShow
          }
        }, {
          breakpoint: elementorFrontend.config.breakpoints.md,
          settings: {
            slidesToShow: parseInt(this.getElementSettings('slides_to_show_mobile')) || parseInt(this.getElementSettings('slides_to_show_tablet')) || settings.slidesToShow
          }
        }];
        return $.extend({}, this.getSettings(), settings);
      },
      run: function run() {
        this.elements.$container.slick(this.getSlickSettings());
      }
    });

    var NumberHandler = function NumberHandler($scope) {
      elementorFrontend.waypoint($scope, function () {
        var $number = $scope.find('.ha-number-text');
        $number.numerator($number.data('animation'));
      });
    };

    var SkillHandler = function SkillHandler($scope) {
      elementorFrontend.waypoint($scope, function () {
        $scope.find('.ha-skill-level').each(function () {
          var $current = $(this),
              $lt = $current.find('.ha-skill-level-text'),
              lv = $current.data('level');
          $current.animate({
            width: lv + '%'
          }, 500);
          $lt.numerator({
            toValue: lv + '%',
            duration: 1300,
            onStep: function onStep() {
              $lt.append('%');
            }
          });
        });
      });
    };

    var ImageGrid = ModuleHandler.extend({
      onInit: function onInit() {
        ModuleHandler.prototype.onInit.apply(this, arguments);
        this.run();
        this.runFilter();
        $window.on('resize', debounce(this.run.bind(this), 100));
      },
      getLayoutMode: function getLayoutMode() {
        var layout = this.getElementSettings('layout');
        return layout === 'even' ? 'masonry' : layout;
      },
      getDefaultSettings: function getDefaultSettings() {
        return {
          itemSelector: '.ha-image-grid__item',
          percentPosition: true,
          layoutMode: this.getLayoutMode()
        };
      },
      getDefaultElements: function getDefaultElements() {
        return {
          $container: this.findElement('.hajs-isotope')
        };
      },
      getLightBoxSettings: function getLightBoxSettings() {
        return {
          key: 'imagegrid',
          $element: this.$element,
          selector: '.ha-js-lightbox',
          isEnabled: !!this.getElementSettings('enable_popup'),
          disableOnTablet: !!this.getElementSettings('disable_lightbox_on_tablet'),
          disableOnMobile: !!this.getElementSettings('disable_lightbox_on_mobile')
        };
      },
      runFilter: function runFilter() {
        var self = this,
            lbSettings = this.getLightBoxSettings();
        initFilterNav(this.$element, function (filter) {
          self.elements.$container.isotope({
            filter: filter
          });

          if (filter !== '*') {
            lbSettings.selector = filter;
          }

          initPopupGallery(lbSettings);
        });
      },
      onElementChange: function onElementChange(changedProp) {
        if (['layout', 'image_height', 'columns', 'image_margin', 'enable_popup'].indexOf(changedProp) !== -1) {
          this.run();
        }
      },
      run: function run() {
        var self = this;
        self.elements.$container.isotope(self.getDefaultSettings()).imagesLoaded().progress(function () {
          self.elements.$container.isotope('layout');
        });
        initPopupGallery(self.getLightBoxSettings());
      }
    });
    var JustifiedGrid = ModuleHandler.extend({
      onInit: function onInit() {
        ModuleHandler.prototype.onInit.apply(this, arguments);
        this.run();
        this.runFilter();
        $window.on('resize', debounce(this.run.bind(this), 100));
      },
      getDefaultSettings: function getDefaultSettings() {
        var $defaultSettings = {
          rowHeight: +this.getElementSettings('row_height.size') || 150,
          lastRow: this.getElementSettings('last_row'),
          margins: +this.getElementSettings('margins.size'),
          captions: !!this.getElementSettings('show_caption')
        };
        var $maxRowHeight = {};

        if ('yes' == this.getElementSettings('max_row_height')) {
          $maxRowHeight = {
            maxRowHeight: +this.getElementSettings('row_height.size') || 150
          };
        }

        return $.extend($defaultSettings, $maxRowHeight);
      },
      getDefaultElements: function getDefaultElements() {
        return {
          $container: this.findElement('.hajs-justified-grid')
        };
      },
      getLightBoxSettings: function getLightBoxSettings() {
        return {
          key: 'justifiedgallery',
          $element: this.$element,
          selector: '.ha-js-lightbox',
          isEnabled: !!this.getElementSettings('enable_popup'),
          disableOnTablet: !!this.getElementSettings('disable_lightbox_on_tablet'),
          disableOnMobile: !!this.getElementSettings('disable_lightbox_on_mobile')
        };
      },
      runFilter: function runFilter() {
        var self = this,
            lbSettings = this.getLightBoxSettings(),
            settings = {
          lastRow: this.getElementSettings('last_row')
        };
        initFilterNav(self.$element, function (filter) {
          if (filter !== '*') {
            settings.lastRow = 'nojustify';
            lbSettings.selector = filter;
          }

          settings.filter = filter;
          self.elements.$container.justifiedGallery(settings);
          initPopupGallery(lbSettings);
        });
      },
      onElementChange: function onElementChange(changedProp) {
        if (['row_height', 'max_row_height', 'last_row', 'margins', 'show_caption', 'enable_popup'].indexOf(changedProp) !== -1) {
          this.run();
        }
      },
      run: function run() {
        this.elements.$container.justifiedGallery(this.getDefaultSettings());
        initPopupGallery(this.getLightBoxSettings());
      }
    }); // NewsTicker

    var NewsTicker = ModuleHandler.extend({
      onInit: function onInit() {
        ModuleHandler.prototype.onInit.apply(this, arguments);
        this.wrapper = this.$element.find('.ha-news-ticker-wrapper');
        this.run();
      },
      onElementChange: function onElementChange(changed_prop) {
        if (changed_prop === 'item_space' || changed_prop === 'title_typography_font_size') {
          this.run();
        }
      },
      run: function run() {
        if (0 == this.wrapper.length) {
          return;
        }

        var wrapper_height = this.wrapper.innerHeight(),
            wrapper_width = this.wrapper.innerWidth(),
            container = this.wrapper.find('.ha-news-ticker-container'),
            single_item = container.find('.ha-news-ticker-item'),
            scroll_direction = this.wrapper.data('scroll-direction'),
            scroll = "scroll" + scroll_direction + parseInt(wrapper_height) + parseInt(wrapper_width),
            duration = this.wrapper.data('duration'),
            direction = 'normal',
            all_title_width = 10;
        var start = {
          'transform': 'translateX(0' + wrapper_width + 'px)'
        },
            end = {
          'transform': 'translateX(-101%)'
        };

        if ('right' === scroll_direction) {
          direction = 'reverse';
        }

        single_item.each(function () {
          all_title_width += $(this).outerWidth(true);
        });
        container.css({
          'width': all_title_width,
          'display': 'flex'
        });
        $.keyframe.define([{
          name: scroll,
          '0%': start,
          '100%': end
        }]);
        container.playKeyframe({
          name: scroll,
          duration: duration.toString() + "ms",
          timingFunction: 'linear',
          delay: '0s',
          iterationCount: 'infinite',
          direction: direction,
          fillMode: 'none',
          complete: function complete() {}
        });
      }
    }); // Fun factor

    var FunFactor = function FunFactor($scope) {
      elementorFrontend.waypoint($scope, function () {
        var $fun_factor = $scope.find('.ha-fun-factor__content-number');
        $fun_factor.numerator($fun_factor.data('animation'));
      });
    };

    var BarChart = function BarChart($scope) {
      elementorFrontend.waypoint($scope, function () {
        var $chart = $(this),
            $container = $chart.find('.ha-bar-chart-container'),
            $chart_canvas = $chart.find('#ha-bar-chart'),
            settings = $container.data('settings');

        if ($container.length) {
          new Chart($chart_canvas, settings);
        }
      });
    }; //twitter Feed


    var TwitterFeed = function TwitterFeed($scope) {
      var button = $scope.find('.ha-twitter-load-more');
      var twitter_wrap = $scope.find('.ha-tweet-items');
      button.on("click", function (e) {
        e.preventDefault();
        var $self = $(this),
            query_settings = $self.data("settings"),
            total = $self.data("total"),
            items = $scope.find('.ha-tweet-item').length;
        $.ajax({
          url: HappyLocalize.ajax_url,
          type: 'POST',
          data: {
            action: "ha_twitter_feed_action",
            security: HappyLocalize.nonce,
            query_settings: query_settings,
            loaded_item: items
          },
          success: function success(response) {
            if (total > items) {
              $(response).appendTo(twitter_wrap);
            } else {
              $self.text('All Loaded').addClass('loaded');
              setTimeout(function () {
                $self.css({
                  "display": "none"
                });
              }, 800);
            }
          },
          error: function error(_error) {}
        });
      });
    }; //PostTab


    var PostTab = ModuleHandler.extend({
      onInit: function onInit() {
        ModuleHandler.prototype.onInit.apply(this, arguments);
        this.wrapper = this.$element.find('.ha-post-tab');
        this.run();
      },
      run: function run() {
        var filter_wrap = this.wrapper.find('.ha-post-tab-filter'),
            filter = filter_wrap.find('li'),
            event = this.wrapper.data('event'),
            args = this.wrapper.data('query-args');
        filter.on(event, debounce(function (e) {
          e.preventDefault();
          var $self = $(this),
              term_id = $self.data("term"),
              $wrapper = $self.closest(".ha-post-tab"),
              content = $wrapper.find('.ha-post-tab-content'),
              loading = content.find('.ha-post-tab-loading'),
              tab_item = content.find('.ha-post-tab-item-wrapper'),
              $content_exist = false;

          if (0 === loading.length) {
            filter.removeClass('active');
            tab_item.removeClass('active');
            $self.addClass('active');
            tab_item.each(function () {
              var $self = $(this),
                  $content_id = $self.data("term");

              if (term_id === $content_id) {
                $self.addClass('active');
                $content_exist = true;
              }
            });

            if (false === $content_exist) {
              $.ajax({
                url: HappyLocalize.ajax_url,
                type: 'POST',
                data: {
                  action: "ha_post_tab_action",
                  security: HappyLocalize.nonce,
                  post_tab_query: args,
                  term_id: term_id
                },
                beforeSend: function beforeSend() {
                  content.append('<span class="ha-post-tab-loading"><i class="eicon-spinner eicon-animation-spin"></i></span>');
                },
                success: function success(response) {
                  content.find('.ha-post-tab-loading').remove();
                  content.append(response);
                },
                error: function error(_error2) {}
              });
            }
          }
        }, 200));
      }
    });

    var DataTable = function DataTable($scope) {
      var columnTH = $scope.find('.ha-table__head-column-cell');
      var rowTR = $scope.find('.ha-table__body-row');
      rowTR.each(function (i, tr) {
        var th = $(tr).find('.ha-table__body-row-cell');
        th.each(function (index, th) {
          $(th).prepend('<div class="ha-table__head-column-cell">' + columnTH.eq(index).html() + '</div>');
        });
      });
    }; //Threesixty Rotation


    var Threesixty_Rotation = function Threesixty_Rotation($scope) {
      var ha_circlr = $scope.find('.ha-threesixty-rotation-inner');
      var cls = ha_circlr.data('selector');
      var autoplay = ha_circlr.data('autoplay');
      var glass_on = $scope.find('.ha-threesixty-rotation-magnify');
      var t360 = $scope.find('.ha-threesixty-rotation-360img');
      var zoom = glass_on.data('zoom');
      var playb = $scope.find('.ha-threesixty-rotation-play');
      var crl = circlr(cls, {
        play: true
      });

      if ('on' === autoplay) {
        var autoplay_btn = $scope.find('.ha-threesixty-rotation-autoplay');
        autoplay_btn.on('click', function (el) {
          el.preventDefault();
          crl.play();
          t360.remove();
        });
        setTimeout(function () {
          autoplay_btn.trigger('click');
          autoplay_btn.remove();
        }, 1000);
      } else {
        playb.on('click', function (el) {
          el.preventDefault();
          var $self = $(this);
          var $i = $self.find('i');

          if ($i.hasClass('hm-play-button')) {
            $i.removeClass('hm-play-button');
            $i.addClass('hm-stop');
            crl.play();
          } else {
            $i.removeClass('hm-stop');
            $i.addClass('hm-play-button');
            crl.stop();
          }

          t360.remove();
        });
      }

      glass_on.on('click', function (el) {
        var img_block = $scope.find('img');
        img_block.each(function () {
          var style = $(this).attr('style');

          if (-1 !== style.indexOf("block")) {
            HappySimplaMagnify($(this)[0], zoom);
            glass_on.css('display', 'none');
            t360.remove();
          }
        });
      });
      $(document).on('click', function (e) {
        var t = $(e.target);
        var magnifier = $scope.find('.ha-img-magnifier-glass');
        var i = glass_on.find('i');

        if (magnifier.length && t[0] !== i[0]) {
          magnifier.remove();
          glass_on.removeAttr('style');
        }

        if (t[0] === ha_circlr[0]) {
          t360.remove();
        }
      });
      ha_circlr.on('mouseup mousedown touchstart touchend', function (e) {
        t360.remove();
      });
    }; //Event Calendar


    var Event_Calendar = function Event_Calendar($scope) {
      var calendarEl = $scope.find('.ha-ec');
      var popup = $scope.find('.ha-ec-popup-wrapper');
      var popupClose = $scope.find(".ha-ec-popup-close");
      var events = calendarEl.data('events');
      var initialview = calendarEl.data('initialview');
      var firstday = calendarEl.data('firstday');
      var locale = calendarEl.data('locale');
      var showPopup = calendarEl.data('show-popup');
      var allday_text = calendarEl.data('allday-text');

      if ('undefined' == typeof events) {
        return;
      }

      var option = {
        stickyHeaderDates: false,
        locale: locale,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
        },
        initialView: initialview,
        firstDay: firstday,
        eventTimeFormat: {
          // like '7pm'
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short'
        },
        events: events,
        height: 'auto',
        eventClick: function eventClick(info) {
          if ('yes' == showPopup) {
            // don't let the browser navigate
            var getTheDate = function getTheDate(timeString) {
              return new Date(timeString);
            };

            var timeFormat = function timeFormat(date) {
              var hours = date.getHours();
              var minutes = date.getMinutes();
              var ampm = hours >= 12 ? 'pm' : 'am';
              hours = hours % 12;
              hours = hours ? hours : 12; // the hour '0' should be '12'

              minutes = minutes < 10 ? '0' + minutes : minutes;
              var strTime = hours + ':' + minutes + '' + ampm;
              return strTime;
            };

            info.jsEvent.preventDefault();
            var todayDateString = info.view.calendar.currentData.currentDate.toString(),
                allDay = info.event.allDay,
                title = info.event.title,
                startDate = info.event.startStr,
                endDate = info.event.endStr,
                guest = info.event.extendedProps.guest,
                location = info.event.extendedProps.location,
                description = info.event.extendedProps.description,
                detailsUrl = info.event.url,
                imageUrl = info.event.extendedProps.image;
            var titleWrap = popup.find('.ha-ec-event-title'),
                timeWrap = popup.find('.ha-ec-event-time-wrap'),
                guestWrap = popup.find('.ha-ec-event-guest-wrap'),
                locationWrap = popup.find('.ha-ec-event-location-wrap'),
                descWrap = popup.find('.ha-ec-popup-desc'),
                detailsWrap = popup.find('.ha-ec-popup-readmore-link'),
                imageWrap = popup.find('.ha-ec-popup-image'); // display none

            imageWrap.css('display', 'none');
            titleWrap.css('display', 'none');
            timeWrap.css('display', 'none');
            guestWrap.css('display', 'none');
            locationWrap.css('display', 'none');
            descWrap.css('display', 'none');
            detailsWrap.css('display', 'none');
            popup.addClass("ha-ec-popup-ready"); // image markup

            if (imageUrl) {
              imageWrap.removeAttr("style");
              imageWrap.find('img').attr("src", imageUrl);
              imageWrap.find('img').attr("alt", title);
            } // title markup


            if (title) {
              titleWrap.removeAttr("style");
              titleWrap.text(title);
            } // guest markup


            if (guest) {
              guestWrap.removeAttr("style");
              guestWrap.find('span.ha-ec-event-guest').text(guest);
            } // location markup


            if (location) {
              locationWrap.removeAttr("style");
              locationWrap.find('span.ha-ec-event-location').text(location);
            } // description markup


            if (description) {
              descWrap.removeAttr("style");
              descWrap.html(description);
            } // time markup


            if (allDay !== true) {
              timeWrap.removeAttr("style");
              startDate = Date.parse(getTheDate(startDate));
              endDate = Date.parse(getTheDate(endDate));
              var startTimeText = timeFormat(getTheDate(startDate));
              var endTimeText = 'Invalid Data';

              if (startDate < endDate) {
                endTimeText = timeFormat(getTheDate(endDate));
              }

              timeWrap.find('span.ha-ec-event-time').text(startTimeText + ' - ' + endTimeText);
            } else {
              timeWrap.removeAttr("style");
              timeWrap.find('span.ha-ec-event-time').text(allday_text);
            } // read more markup


            if (detailsUrl) {
              detailsWrap.removeAttr("style");
              detailsWrap.attr("href", detailsUrl);

              if ("on" === info.event.extendedProps.external) {
                detailsWrap.attr("target", "_blank");
              }

              if ("on" === info.event.extendedProps.nofollow) {
                detailsWrap.attr("rel", "nofollow");
              }
            }
          } else {
            if (info.event.url && info.event.extendedProps.external) {
              info.jsEvent.preventDefault();
              var id = $scope.data('id'),
                  anchor = document.createElement('a'),
                  anchorReal,
                  timeout;
              anchor.id = 'happy-even-calender-link-' + id;
              anchor.href = info.event.url;
              anchor.target = info.event.extendedProps.external ? '_blank' : '_self';
              anchor.rel = info.event.extendedProps.nofollow ? 'nofollow noreferer' : '';
              anchor.style.display = 'none';
              document.body.appendChild(anchor);
              anchorReal = document.getElementById(anchor.id);
              anchorReal.click();
              timeout = setTimeout(function () {
                document.body.removeChild(anchorReal);
                clearTimeout(timeout);
              });
              return false;
            }
          }
        },
        dateClick: function dateClick(arg) {
          itemDate = arg.date.toUTCString();
        }
      };
      var calendar = new FullCalendar.Calendar(calendarEl[0], option);
      calendar.render();
      $scope.find(".ha-ec-popup-wrapper").on("click", function (e) {
        e.stopPropagation();

        if (e.target === e.currentTarget || e.target == popupClose[0] || e.target == popupClose.find(".eicon-editor-close")[0]) {
          popup.addClass("ha-ec-popup-removing").removeClass("ha-ec-popup-ready");
        }
      });
    };

    var MailChimp = function MailChimp($scope) {
      var elForm = $scope.find('.ha-mailchimp-form'),
          elMessage = $scope.find('.ha-mc-response-message'),
          successMessage = elForm.data('success-message');
      elForm.on('submit', function (e) {
        e.preventDefault();
        var data = {
          action: 'ha_mailchimp_ajax',
          security: HappyLocalize.nonce,
          subscriber_info: elForm.serialize(),
          list_id: elForm.data('list-id'),
          post_id: elForm.parent().data('post-id'),
          widget_id: elForm.parent().data('widget-id')
        };
        $.ajax({
          type: 'post',
          url: HappyLocalize.ajax_url,
          data: data,
          success: function success(response) {
            elForm.trigger('reset');

            if (response.status) {
              elMessage.removeClass('error');
              elMessage.addClass('success');
              elMessage.text(successMessage);
            } else {
              elMessage.addClass('error');
              elMessage.removeClass('success');
              elMessage.text(response.msg);
            }

            var hideMsg = setTimeout(function () {
              elMessage.removeClass('error');
              elMessage.removeClass('success');
              clearTimeout(hideMsg);
            }, 5000);
          },
          error: function error(_error3) {// console.log(error);
          }
        });
      });
    }; //Image Accordion


    var Image_Accordion = function Image_Accordion($scope) {
      if ($scope.hasClass('ha-image-accordion-click')) {
        var items = $scope.find('.ha-ia-item');
        items.each(function (inx, btn) {
          $(this).on('click', function (e) {
            // e.preventDefault();
            if ($(this).hasClass('active')) {
              return;
            } else {
              items.removeClass('active');
              $(this).addClass('active');
            }
          });
        });
      }
    }; //Content Switcher


    var Content_Switcher = function Content_Switcher($scope) {
      var parent = $scope.find('.ha-content-switcher-wrapper'),
          designType = parent.data('design-type');

      if (designType == 'button') {
        var buttons = parent.find('.ha-cs-button'),
            contents = parent.find('.ha-cs-content-section');
        buttons.each(function (inx, btn) {
          $(this).on('click', function (e) {
            e.preventDefault();

            if ($(this).hasClass('active')) {
              return;
            } else {
              buttons.removeClass('active');
              $(this).addClass('active');
              contents.removeClass('active');
              var contentId = $(this).data('content-id');
              parent.find('#' + contentId).addClass('active');
            }
          });
        });
      } else {
        var toggleSwitch = parent.find('.ha-cs-switch.ha-input-label'),
            input = parent.find('input.ha-cs-toggle-switch'),
            primarySwitcher = parent.find('.ha-cs-switch.primary'),
            secondarySwitcher = parent.find('.ha-cs-switch.secondary'),
            primaryContent = parent.find('.ha-cs-content-section.primary'),
            secondaryContent = parent.find('.ha-cs-content-section.secondary');
        toggleSwitch.on('click', function (e) {
          if (input.is(':checked')) {
            primarySwitcher.removeClass('active');
            primaryContent.removeClass('active');
            secondarySwitcher.addClass('active');
            secondaryContent.addClass('active');
          } else {
            secondarySwitcher.removeClass('active');
            secondaryContent.removeClass('active');
            primarySwitcher.addClass('active');
            primaryContent.addClass('active');
          }
        });
      }
    }; //Team Member


    var Team_Member = function Team_Member($scope) {
      var btn = $scope.find('.ha-btn');
      var lightBox = $scope.find('.ha-member-lightbox');

      if (lightBox.length > 0) {
        var close = lightBox.find('.ha-member-lightbox-close');
        btn.on('click', function () {
          lightBox.addClass('ha-member-lightbox-show');
        });
        lightBox.on('click', function (e) {
          if (lightBox.hasClass('ha-member-lightbox-show')) {
            if (e.target == lightBox[0]) {
              lightBox.removeClass('ha-member-lightbox-show');
            } else if (e.target == close[0]) {
              lightBox.removeClass('ha-member-lightbox-show');
            } else if (e.target == close.find('i.eicon-editor-close')[0]) {
              lightBox.removeClass('ha-member-lightbox-show');
            }
          }
        });
      }
    }; //Creative Button


    var Creative_Button = function Creative_Button($scope) {
      var btn_wrap = $scope.find('.ha-creative-btn-wrap');
      var magnetic = btn_wrap.data('magnetic');
      var btn = btn_wrap.find('a.ha-creative-btn');

      if ('yes' == magnetic) {
        btn_wrap.on('mousemove', function (e) {
          var x = e.pageX - (btn_wrap.offset().left + btn_wrap.outerWidth() / 2);
          var y = e.pageY - (btn_wrap.offset().top + btn_wrap.outerHeight() / 2);
          btn.css("transform", "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)");
        });
        btn_wrap.on('mouseout', function (e) {
          btn.css("transform", "translate(0px, 0px)");
        });
      } //For expandable button style only


      var expandable = $scope.find('.ha-eft--expandable');
      var text = expandable.find('.text');

      if (expandable.length > 0 && text.length > 0) {
        text[0].addEventListener("transitionend", function () {
          if (text[0].style.width) {
            text[0].style.width = "auto";
          }
        });
        expandable[0].addEventListener("mouseenter", function (e) {
          e.currentTarget.classList.add('hover');
          text[0].style.width = "auto";
          var predicted_answer = text[0].offsetWidth;
          text[0].style.width = "0";
          window.getComputedStyle(text[0]).transform;
          text[0].style.width = "".concat(predicted_answer, "px");
        });
        expandable[0].addEventListener("mouseleave", function (e) {
          e.currentTarget.classList.remove('hover');
          text[0].style.width = "".concat(text[0].offsetWidth, "px");
          window.getComputedStyle(text[0]).transform;
          text[0].style.width = "";
        });
      }
    };

    var PDF_View = function PDF_View($scope) {
      var $id = $scope.data('id');
      var $settings = $scope.find(".viewer-" + $id).data('pdf-settings');
      var options = {
        width: $settings.width,
        height: $settings.height,
        page: $settings.page_number
      };
      PDFObject.embed($settings.pdf_url, "#" + $settings.unique_id, options);
    };

    var Comparison_Table = function Comparison_Table($scope) {
      var $table = $scope.find('.ha-comparison-table-wrapper');
      var $table_head = $scope.find('.ha-comparison-table__head');
      var $sticky_header = $table_head.data('sticky-header');
      var $section_height = $scope.height();
      var $table_height = $table.innerHeight();
      var $tableOffsetTop = $table.offset().top;

      if ($sticky_header === 'yes') {
        $window.scroll(function () {
          var offset = $(this).scrollTop();

          if (offset >= $tableOffsetTop) {
            $table_head.addClass('table-sticky');
          } else if (offset > $table_height) {
            $table_head.removeClass('table-sticky');
          }
        });
      }
    }; // Slider


    elementorFrontend.hooks.addAction('frontend/element_ready/ha-slider.default', function ($scope) {
      elementorFrontend.elementsHandler.addHandler(SliderBase, {
        $element: $scope
      });
    }); // Carousel

    elementorFrontend.hooks.addAction('frontend/element_ready/ha-carousel.default', function ($scope) {
      elementorFrontend.elementsHandler.addHandler(SliderBase, {
        $element: $scope
      });
    }); //Horizontal Timeline

    elementorFrontend.hooks.addAction('frontend/element_ready/ha-horizontal-timeline.default', function ($scope) {
      elementorFrontend.elementsHandler.addHandler(SliderBase, {
        $element: $scope,
        autoplay: false,
        container: '.ha-horizontal-timeline-wrapper',
        navigation: 'arrow',
        arrows: true
      });
      var img_wrap = $scope.find(".ha-horizontal-timeline-image");
      var magnific_popup = img_wrap.data("mfp-src");

      if (undefined !== magnific_popup) {
        img_wrap.magnificPopup({
          type: "image",
          gallery: {
            enabled: true
          }
        });
      }
    }); // elementorFrontend.hooks.addAction(
    // 	'frontend/element_ready/ha-mailchimp.default',
    // 	function ($scope) {
    // 		elementorFrontend.elementsHandler.addHandler(MailChimp, {
    // 			$element: $scope,
    // 		});
    // 	}
    // );

    $('body').on('click.onWrapperLink', '[data-ha-element-link]', function () {
      var $wrapper = $(this),
          data = $wrapper.data('ha-element-link'),
          id = $wrapper.data('id'),
          anchor = document.createElement('a'),
          anchorReal,
          timeout;
      anchor.id = 'happy-addons-wrapper-link-' + id;
      anchor.href = data.url;
      anchor.target = data.is_external ? '_blank' : '_self';
      anchor.rel = data.nofollow ? 'nofollow noreferer' : '';
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchorReal = document.getElementById(anchor.id);
      anchorReal.click();
      timeout = setTimeout(function () {
        document.body.removeChild(anchorReal);
        clearTimeout(timeout);
      });
    }); // Background overlay extension

    var BackgroundOverlay = function BackgroundOverlay($scope) {
      $scope.hasClass('elementor-element-edit-mode') && $scope.addClass('ha-has-bg-overlay');
    };

    var fnHanlders = {
      'ha-image-compare.default': HandleImageCompare,
      'ha-number.default': NumberHandler,
      'ha-skills.default': SkillHandler,
      'ha-fun-factor.default': FunFactor,
      'ha-bar-chart.default': BarChart,
      'ha-twitter-feed.default': TwitterFeed,
      'ha-threesixty-rotation.default': Threesixty_Rotation,
      'ha-data-table.default': DataTable,
      // 'widget'                        : BackgroundOverlay,
      'section': BackgroundOverlay,
      'column': BackgroundOverlay,
      'ha-event-calendar.default': Event_Calendar,
      'ha-mailchimp.default': MailChimp,
      'ha-image-accordion.default': Image_Accordion,
      'ha-content-switcher.default': Content_Switcher,
      'ha-member.default': Team_Member,
      'ha-creative-button.default': Creative_Button,
      'ha-pdf-view.default': PDF_View,
      'ha-comparison-table.default': Comparison_Table
    };
    $.each(fnHanlders, function (widgetName, handlerFn) {
      elementorFrontend.hooks.addAction('frontend/element_ready/' + widgetName, handlerFn);
    });
    var classHandlers = {
      'ha-image-grid.default': ImageGrid,
      'ha-justified-gallery.default': JustifiedGrid,
      'ha-news-ticker.default': NewsTicker,
      'ha-post-tab.default': PostTab
    };
    $.each(classHandlers, function (widgetName, handlerClass) {
      elementorFrontend.hooks.addAction('frontend/element_ready/' + widgetName, function ($scope) {
        elementorFrontend.elementsHandler.addHandler(handlerClass, {
          $element: $scope
        });
      });
    }); //nav menu

    var NavigationMenu = function __init($scope) {
      var navMenu = $scope.find('.ha-nav-menu'); //for tablet only

      if (jQuery(window).width() < 1025 && jQuery(window).width() > 767) {
        var indicator = navMenu.find('.ha-submenu-indicator-wrap');
        indicator.on('click', function (e) {
          e.preventDefault();
          var $parentEl = $(this).parent('li.menu-item-has-children');

          if ($parentEl) {
            $parentEl.children('ul.sub-menu').slideToggle();
          }
        });
      }

      var humBurgerBtn = navMenu.find('.ha-menu-toggler');
      humBurgerBtn.on('click', function (e) {
        var humberger = $(this).data('humberger');
        var $pel = navMenu.find('ul.menu');

        if ('open' == humberger) {
          $('.ha-menu-open-icon').addClass('hide-icon');
          $('.ha-menu-close-icon').removeClass('hide-icon');
          $('.ha-menu-close-icon').addClass('show-icon');
          $pel.slideDown();
        } else {
          $('.ha-menu-close-icon').addClass('hide-icon');
          $('.ha-menu-open-icon').removeClass('hide-icon');
          $('.ha-menu-open-icon').addClass('show-icon');
          $pel.slideUp();
        }
      });

      function burgerClsAdd() {
        if (jQuery(window).width() < 768) {
          navMenu.removeClass('ha-navigation-menu-wrapper');
          navMenu.addClass('ha-navigation-burger-menu');
          var humBurgerSubMenuBtn = navMenu.find('.ha-submenu-indicator-wrap');
          humBurgerSubMenuBtn.on('click', function (e) {
            e.preventDefault();
            var $parentEl = $(this).parent('li.menu-item-has-children');

            if ($parentEl) {
              $parentEl.children('ul.sub-menu').slideToggle();
            }
          });
        } else {
          navMenu.addClass('ha-navigation-menu-wrapper');
          navMenu.removeClass('ha-navigation-burger-menu');
          navMenu.find('ul.menu').removeAttr('style');
          navMenu.find('ul.sub-menu').removeAttr('style');
        }
      }

      burgerClsAdd();
      $window.on('resize', debounce(burgerClsAdd, 100));
    };

    elementorFrontend.hooks.addAction("frontend/element_ready/ha-navigation-menu.default", NavigationMenu);
  });
})(jQuery);;
!function(){var i={618:function(i,e,t){var o,s,n;function r(i){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},r(i)}!function(l){"use strict";s=[t(311)],o=function(i){var e=window.Slick||{};(e=function(){var e=0;function t(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}return t}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each((function(e,t){i(t).attr("data-slick-index",e)})),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout((function(){s.disableTransition(),t.call()}),s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"===r(t)&&t.each((function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)}))},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each((function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")})),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>0){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){for(o in s=null,r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n=this,r=i(e.currentTarget);switch(r.is("a")&&e.preventDefault(),r.is("li")||(r=r.closest("li")),o=n.slideCount%n.options.slidesToScroll!=0?0:(n.slideCount-n.currentSlide)%n.options.slidesToScroll,e.data.message){case"previous":s=0===o?n.options.slidesToScroll:n.options.slidesToShow-o,n.slideCount>n.options.slidesToShow&&n.slideHandler(n.currentSlide-s,!1,t);break;case"next":s=0===o?n.options.slidesToScroll:o,n.slideCount>n.options.slidesToShow&&n.slideHandler(n.currentSlide+s,!1,t);break;case"index":var l=0===e.data.index?0:e.data.index||r.index()*n.options.slidesToScroll;n.slideHandler(n.checkNavigable(l),!1,t),r.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(t=0,i>(e=this.getNavigableIndexes())[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>0&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function(){i(this).attr("style",i(this).data("originalStyling"))})),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout((function(){t.disableTransition(i),e.call()}),t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",(function(t){var o=i(this);setTimeout((function(){e.options.pauseOnFocus&&o.is(":focus")&&(e.focussed=!0,e.autoPlay())}),0)})).on("blur.slick","*",(function(t){i(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())}))},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s=this;return o=!0===s.options.centerMode?Math.floor(s.$list.width()/2):0,t=-1*s.swipeLeft+o,!0===s.options.swipeToSlide?(s.$slideTrack.find(".slick-slide").each((function(o,n){var r,l;if(r=i(n).outerWidth(),l=n.offsetLeft,!0!==s.options.centerMode&&(l+=r/2),t<l+r)return e=n,!1})),Math.abs(i(e).attr("data-slick-index")-s.currentSlide)||1):s.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter((function(i){return i>=0&&i<e.slideCount}));e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(t){var s=o.indexOf(t);if(i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s){var n="slick-slide-control"+e.instanceUid+s;i("#"+n).length&&i(this).attr({"aria-describedby":n})}})),e.$dots.attr("role","tablist").find("li").each((function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})})).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.options.focusOnChange?e.$slides.eq(s).attr({tabindex:"0"}):e.$slides.eq(s).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){var e,t,o,s=this;function n(e){i("img[data-lazy]",e).each((function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),n=i(this).attr("data-sizes")||s.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,(function(){o&&(e.attr("srcset",o),n&&e.attr("sizes",n)),e.attr("src",t).animate({opacity:1},200,(function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")})),s.$slider.trigger("lazyLoaded",[s,e,t])}))},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,e,t])},r.src=t}))}if(!0===s.options.centerMode?!0===s.options.infinite?o=(t=s.currentSlide+(s.options.slidesToShow/2+1))+s.options.slidesToShow+2:(t=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),o=s.options.slidesToShow/2+1+2+s.currentSlide):(t=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide,o=Math.ceil(t+s.options.slidesToShow),!0===s.options.fade&&(t>0&&t--,o<=s.slideCount&&o++)),e=s.$slider.find(".slick-slide").slice(t,o),"anticipated"===s.options.lazyLoad)for(var r=t-1,l=o,d=s.$slider.find(".slick-slide"),a=0;a<s.options.slidesToScroll;a++)r<0&&(r=s.slideCount-1),e=(e=e.add(d.eq(r))).add(d.eq(l)),r--,l++;n(e),s.slideCount<=s.options.slidesToShow?n(s.$slider.find(".slick-slide")):s.currentSlide>=s.slideCount-s.options.slidesToShow?n(s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow)):0===s.currentSlide&&n(s.$slider.find(".slick-cloned").slice(-1*s.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout((function(){l.progressiveLazyLoad(e+1)}),500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){for(e in s.respondTo=s.options.respondTo||"window",n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort((function(i,e){return s.options.mobileFirst?i-e:e-i}))}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout((function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()}),50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each((function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})})),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,(function(i,e){r.options[i]=e}));else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(n.options.slidesToShow+n.slideCount+1).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each((function(){i(this).attr("id","")}))}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,(function(){a.postSlide(o)})):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,(function(){a.postSlide(o)})):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,(function(){a.postSlide(s)}))):a.postSlide(s),void a.animateHeight();!0!==t&&a.slideCount>a.options.slidesToShow?a.animateSlide(d,(function(){a.postSlide(s)})):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode||i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode)&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),l=o.length;for(i=0;i<l;i++)if("object"==r(s)||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}},void 0===(n="function"==typeof o?o.apply(e,s):o)||(i.exports=n)}()},311:function(i){"use strict";i.exports=jQuery}},e={};(function t(o){var s=e[o];if(void 0!==s)return s.exports;var n=e[o]={exports:{}};return i[o](n,n.exports,t),n.exports})(618)}();;
/*! This file is auto-generated */
!function(n,r){var t,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,t=n._,(e=n._=r()).noConflict=function(){return n._=t,e})}(this,function(){var n="1.13.6",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},e=Array.prototype,F=Object.prototype,V="undefined"!=typeof Symbol?Symbol.prototype:null,P=e.push,f=e.slice,s=F.toString,q=F.hasOwnProperty,t="undefined"!=typeof ArrayBuffer,u="undefined"!=typeof DataView,U=Array.isArray,W=Object.keys,z=Object.create,L=t&&ArrayBuffer.isView,$=isNaN,C=isFinite,K=!{toString:null}.propertyIsEnumerable("toString"),J=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],G=Math.pow(2,53)-1;function l(u,o){return o=null==o?u.length-1:+o,function(){for(var n=Math.max(arguments.length-o,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+o];switch(o){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}for(var e=Array(o+1),t=0;t<o;t++)e[t]=arguments[t];return e[o]=r,u.apply(this,e)}}function o(n){var r=typeof n;return"function"==r||"object"==r&&!!n}function H(n){return void 0===n}function Q(n){return!0===n||!1===n||"[object Boolean]"===s.call(n)}function i(n){var r="[object "+n+"]";return function(n){return s.call(n)===r}}var X=i("String"),Y=i("Number"),Z=i("Date"),nn=i("RegExp"),rn=i("Error"),tn=i("Symbol"),en=i("ArrayBuffer"),a=i("Function"),r=r.document&&r.document.childNodes,p=a="function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof r?function(n){return"function"==typeof n||!1}:a,r=i("Object"),un=u&&r(new DataView(new ArrayBuffer(8))),a="undefined"!=typeof Map&&r(new Map),u=i("DataView");var h=un?function(n){return null!=n&&p(n.getInt8)&&en(n.buffer)}:u,v=U||i("Array");function y(n,r){return null!=n&&q.call(n,r)}var on=i("Arguments"),an=(!function(){on(arguments)||(on=function(n){return y(n,"callee")})}(),on);function fn(n){return Y(n)&&$(n)}function cn(n){return function(){return n}}function ln(r){return function(n){n=r(n);return"number"==typeof n&&0<=n&&n<=G}}function sn(r){return function(n){return null==n?void 0:n[r]}}var d=sn("byteLength"),pn=ln(d),hn=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var vn=t?function(n){return L?L(n)&&!h(n):pn(n)&&hn.test(s.call(n))}:cn(!1),g=sn("length");function yn(n,r){r=function(r){for(var t={},n=r.length,e=0;e<n;++e)t[r[e]]=!0;return{contains:function(n){return!0===t[n]},push:function(n){return t[n]=!0,r.push(n)}}}(r);var t=J.length,e=n.constructor,u=p(e)&&e.prototype||F,o="constructor";for(y(n,o)&&!r.contains(o)&&r.push(o);t--;)(o=J[t])in n&&n[o]!==u[o]&&!r.contains(o)&&r.push(o)}function b(n){if(!o(n))return[];if(W)return W(n);var r,t=[];for(r in n)y(n,r)&&t.push(r);return K&&yn(n,t),t}function dn(n,r){var t=b(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function m(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)}function gn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,d(n))}m.VERSION=n,m.prototype.valueOf=m.prototype.toJSON=m.prototype.value=function(){return this._wrapped},m.prototype.toString=function(){return String(this._wrapped)};var bn="[object DataView]";function mn(n,r,t,e){var u;return n===r?0!==n||1/n==1/r:null!=n&&null!=r&&(n!=n?r!=r:("function"==(u=typeof n)||"object"==u||"object"==typeof r)&&function n(r,t,e,u){r instanceof m&&(r=r._wrapped);t instanceof m&&(t=t._wrapped);var o=s.call(r);if(o!==s.call(t))return!1;if(un&&"[object Object]"==o&&h(r)){if(!h(t))return!1;o=bn}switch(o){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return V.valueOf.call(r)===V.valueOf.call(t);case"[object ArrayBuffer]":case bn:return n(gn(r),gn(t),e,u)}o="[object Array]"===o;if(!o&&vn(r)){var i=d(r);if(i!==d(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;o=!0}if(!o){if("object"!=typeof r||"object"!=typeof t)return!1;var i=r.constructor,a=t.constructor;if(i!==a&&!(p(i)&&i instanceof i&&p(a)&&a instanceof a)&&"constructor"in r&&"constructor"in t)return!1}e=e||[];u=u||[];var f=e.length;for(;f--;)if(e[f]===r)return u[f]===t;e.push(r);u.push(t);if(o){if((f=r.length)!==t.length)return!1;for(;f--;)if(!mn(r[f],t[f],e,u))return!1}else{var c,l=b(r);if(f=l.length,b(t).length!==f)return!1;for(;f--;)if(c=l[f],!y(t,c)||!mn(r[c],t[c],e,u))return!1}e.pop();u.pop();return!0}(n,r,t,e))}function c(n){if(!o(n))return[];var r,t=[];for(r in n)t.push(r);return K&&yn(n,t),t}function jn(e){var u=g(e);return function(n){if(null==n)return!1;var r=c(n);if(g(r))return!1;for(var t=0;t<u;t++)if(!p(n[e[t]]))return!1;return e!==wn||!p(n[_n])}}var _n="forEach",r=["clear","delete"],u=["get","has","set"],U=r.concat(_n,u),wn=r.concat(u),t=["add"].concat(r,_n,"has"),u=a?jn(U):i("Map"),r=a?jn(wn):i("WeakMap"),U=a?jn(t):i("Set"),a=i("WeakSet");function j(n){for(var r=b(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function An(n){for(var r={},t=b(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function xn(n){var r,t=[];for(r in n)p(n[r])&&t.push(r);return t.sort()}function Sn(f,c){return function(n){var r=arguments.length;if(c&&(n=Object(n)),!(r<2||null==n))for(var t=1;t<r;t++)for(var e=arguments[t],u=f(e),o=u.length,i=0;i<o;i++){var a=u[i];c&&void 0!==n[a]||(n[a]=e[a])}return n}}var On=Sn(c),_=Sn(b),Mn=Sn(c,!0);function En(n){var r;return o(n)?z?z(n):((r=function(){}).prototype=n,n=new r,r.prototype=null,n):{}}function Bn(n){return v(n)?n:[n]}function w(n){return m.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){n=Nn(n,w(r));return H(n)?t:n}function Tn(n){return n}function A(r){return r=_({},r),function(n){return dn(n,r)}}function kn(r){return r=w(r),function(n){return Nn(n,r)}}function x(u,o,n){if(void 0===o)return u;switch(null==n?3:n){case 1:return function(n){return u.call(o,n)};case 3:return function(n,r,t){return u.call(o,n,r,t)};case 4:return function(n,r,t,e){return u.call(o,n,r,t,e)}}return function(){return u.apply(o,arguments)}}function Dn(n,r,t){return null==n?Tn:p(n)?x(n,r,t):(o(n)&&!v(n)?A:kn)(n)}function Rn(n,r){return Dn(n,r,1/0)}function S(n,r,t){return m.iteratee!==Rn?m.iteratee(n,r):Dn(n,r,t)}function Fn(){}function Vn(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}m.toPath=Bn,m.iteratee=Rn;var O=Date.now||function(){return(new Date).getTime()};function Pn(r){function t(n){return r[n]}var n="(?:"+b(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,t):n}}var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},qn=Pn(t),t=Pn(An(t)),Un=m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Wn=/(.)^/,zn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Ln=/\\|'|\r|\n|\u2028|\u2029/g;function $n(n){return"\\"+zn[n]}var Cn=/^\s*(\w|\$)+\s*$/;var Kn=0;function Jn(n,r,t,e,u){return e instanceof r?(e=En(n.prototype),o(r=n.apply(e,u))?r:e):n.apply(t,u)}var M=l(function(u,o){function i(){for(var n=0,r=o.length,t=Array(r),e=0;e<r;e++)t[e]=o[e]===a?arguments[n++]:o[e];for(;n<arguments.length;)t.push(arguments[n++]);return Jn(u,i,this,this,t)}var a=M.placeholder;return i}),Gn=(M.placeholder=m,l(function(r,t,e){var u;if(p(r))return u=l(function(n){return Jn(r,u,t,this,e.concat(n))});throw new TypeError("Bind must be called on a function")})),E=ln(g);function B(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=g(n);o<i;o++){var a=n[o];if(E(a)&&(v(a)||an(a)))if(1<r)B(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var Hn=l(function(n,r){var t=(r=B(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=Gn(n[e],n)}return n});var Qn=l(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),Xn=M(Qn,m,1);function Yn(n){return function(){return!n.apply(this,arguments)}}function Zn(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var nr=M(Zn,2);function rr(n,r,t){r=S(r,t);for(var e,u=b(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function tr(o){return function(n,r,t){r=S(r,t);for(var e=g(n),u=0<o?0:e-1;0<=u&&u<e;u+=o)if(r(n[u],u,n))return u;return-1}}var er=tr(1),ur=tr(-1);function or(n,r,t,e){for(var u=(t=S(t,e,1))(r),o=0,i=g(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function ir(o,i,a){return function(n,r,t){var e=0,u=g(n);if("number"==typeof t)0<o?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=i(f.call(n,e,u),fn))?t+e:-1;for(t=0<o?e:u-1;0<=t&&t<u;t+=o)if(n[t]===r)return t;return-1}}var ar=ir(1,er,or),fr=ir(-1,ur);function cr(n,r,t){r=(E(n)?er:rr)(n,r,t);if(void 0!==r&&-1!==r)return n[r]}function N(n,r,t){if(r=x(r,t),E(n))for(u=0,o=n.length;u<o;u++)r(n[u],u,n);else for(var e=b(n),u=0,o=e.length;u<o;u++)r(n[e[u]],e[u],n);return n}function I(n,r,t){r=S(r,t);for(var e=!E(n)&&b(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function lr(p){return function(n,r,t,e){var u=3<=arguments.length,o=n,i=x(r,e,4),a=t,f=!E(o)&&b(o),c=(f||o).length,l=0<p?0:c-1;for(u||(a=o[f?f[l]:l],l+=p);0<=l&&l<c;l+=p){var s=f?f[l]:l;a=i(a,o[s],s,o)}return a}}var sr=lr(1),pr=lr(-1);function T(n,e,r){var u=[];return e=S(e,r),N(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u}function hr(n,r,t){r=S(r,t);for(var e=!E(n)&&b(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function vr(n,r,t){r=S(r,t);for(var e=!E(n)&&b(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function k(n,r,t,e){return E(n)||(n=j(n)),0<=ar(n,r,t="number"==typeof t&&!e?t:0)}var yr=l(function(n,t,e){var u,o;return p(t)?o=t:(t=w(t),u=t.slice(0,-1),t=t[t.length-1]),I(n,function(n){var r=o;if(!r){if(null==(n=u&&u.length?Nn(n,u):n))return;r=n[t]}return null==r?r:r.apply(n,e)})});function dr(n,r){return I(n,kn(r))}function gr(n,e,r){var t,u,o=-1/0,i=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=E(n)?n:j(n)).length;a<f;a++)null!=(t=n[a])&&o<t&&(o=t);else e=S(e,r),N(n,function(n,r,t){u=e(n,r,t),(i<u||u===-1/0&&o===-1/0)&&(o=n,i=u)});return o}var br=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function mr(n){return n?v(n)?f.call(n):X(n)?n.match(br):E(n)?I(n,Tn):j(n):[]}function jr(n,r,t){if(null==r||t)return(n=E(n)?n:j(n))[Vn(n.length-1)];for(var e=mr(n),t=g(e),u=(r=Math.max(Math.min(r,t),0),t-1),o=0;o<r;o++){var i=Vn(o,u),a=e[o];e[o]=e[i],e[i]=a}return e.slice(0,r)}function D(o,r){return function(t,e,n){var u=r?[[],[]]:{};return e=S(e,n),N(t,function(n,r){r=e(n,r,t);o(u,n,r)}),u}}var _r=D(function(n,r,t){y(n,t)?n[t].push(r):n[t]=[r]}),wr=D(function(n,r,t){n[t]=r}),Ar=D(function(n,r,t){y(n,t)?n[t]++:n[t]=1}),xr=D(function(n,r,t){n[t?0:1].push(r)},!0);function Sr(n,r,t){return r in t}var Or=l(function(n,r){var t={},e=r[0];if(null!=n){p(e)?(1<r.length&&(e=x(e,r[1])),r=c(n)):(e=Sr,r=B(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}}return t}),Mr=l(function(n,t){var r,e=t[0];return p(e)?(e=Yn(e),1<t.length&&(r=t[1])):(t=I(B(t,!1,!1),String),e=function(n,r){return!k(t,r)}),Or(n,e,r)});function Er(n,r,t){return f.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Br(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:Er(n,n.length-r)}function R(n,r,t){return f.call(n,null==r||t?1:r)}var Nr=l(function(n,r){return r=B(r,!0,!0),T(n,function(n){return!k(r,n)})}),Ir=l(function(n,r){return Nr(n,r)});function Tr(n,r,t,e){Q(r)||(e=t,t=r,r=!1),null!=t&&(t=S(t,e));for(var u=[],o=[],i=0,a=g(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?k(o,c)||(o.push(c),u.push(f)):k(u,f)||u.push(f)}return u}var kr=l(function(n){return Tr(B(n,!0,!0))});function Dr(n){for(var r=n&&gr(n,g).length||0,t=Array(r),e=0;e<r;e++)t[e]=dr(n,e);return t}var Rr=l(Dr);function Fr(n,r){return n._chain?m(r).chain():r}function Vr(t){return N(xn(t),function(n){var r=m[n]=t[n];m.prototype[n]=function(){var n=[this._wrapped];return P.apply(n,arguments),Fr(this,r.apply(m,n))}}),m}N(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];m.prototype[r]=function(){var n=this._wrapped;return null!=n&&(t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0]),Fr(this,n)}}),N(["concat","join","slice"],function(n){var r=e[n];m.prototype[n]=function(){var n=this._wrapped;return Fr(this,n=null!=n?r.apply(n,arguments):n)}});n=Vr({__proto__:null,VERSION:n,restArguments:l,isObject:o,isNull:function(n){return null===n},isUndefined:H,isBoolean:Q,isElement:function(n){return!(!n||1!==n.nodeType)},isString:X,isNumber:Y,isDate:Z,isRegExp:nn,isError:rn,isSymbol:tn,isArrayBuffer:en,isDataView:h,isArray:v,isFunction:p,isArguments:an,isFinite:function(n){return!tn(n)&&C(n)&&!isNaN(parseFloat(n))},isNaN:fn,isTypedArray:vn,isEmpty:function(n){var r;return null==n||("number"==typeof(r=g(n))&&(v(n)||X(n)||an(n))?0===r:0===g(b(n)))},isMatch:dn,isEqual:function(n,r){return mn(n,r)},isMap:u,isWeakMap:r,isSet:U,isWeakSet:a,keys:b,allKeys:c,values:j,pairs:function(n){for(var r=b(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:An,functions:xn,methods:xn,extend:On,extendOwn:_,assign:_,defaults:Mn,create:function(n,r){return n=En(n),r&&_(n,r),n},clone:function(n){return o(n)?v(n)?n.slice():On({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=w(r)).length,e=0;e<t;e++){var u=r[e];if(!y(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=S(r,t);for(var e=b(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:Tn,constant:cn,noop:Fn,toPath:Bn,property:kn,propertyOf:function(r){return null==r?Fn:function(n){return In(r,n)}},matcher:A,matches:A,times:function(n,r,t){var e=Array(Math.max(0,n));r=x(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Vn,now:O,escape:qn,unescape:t,templateSettings:Un,template:function(o,n,r){n=Mn({},n=!n&&r?r:n,m.templateSettings);var t,r=RegExp([(n.escape||Wn).source,(n.interpolate||Wn).source,(n.evaluate||Wn).source].join("|")+"|$","g"),i=0,a="__p+='";if(o.replace(r,function(n,r,t,e,u){return a+=o.slice(i,u).replace(Ln,$n),i=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",r=n.variable){if(!Cn.test(r))throw new Error("variable is not a bare identifier: "+r)}else a="with(obj||{}){\n"+a+"}\n",r="obj";a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(r,"_",a)}catch(n){throw n.source=a,n}function e(n){return t.call(this,n,m)}return e.source="function("+r+"){\n"+a+"}",e},result:function(n,r,t){var e=(r=w(r)).length;if(!e)return p(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=p(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Kn+"";return n?n+r:r},chain:function(n){return(n=m(n))._chain=!0,n},iteratee:Rn,partial:M,bind:Gn,bindAll:Hn,memoize:function(e,u){function o(n){var r=o.cache,t=""+(u?u.apply(this,arguments):n);return y(r,t)||(r[t]=e.apply(this,arguments)),r[t]}return o.cache={},o},delay:Qn,defer:Xn,throttle:function(t,e,u){function o(){l=!1===u.leading?0:O(),i=null,c=t.apply(a,f),i||(a=f=null)}function n(){var n=O(),r=(l||!1!==u.leading||(l=n),e-(n-l));return a=this,f=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(a,f),i||(a=f=null)):i||!1===u.trailing||(i=setTimeout(o,r)),c}var i,a,f,c,l=0;return u=u||{},n.cancel=function(){clearTimeout(i),l=0,i=a=f=null},n},debounce:function(r,t,e){function u(){var n=O()-i;n<t?o=setTimeout(u,t-n):(o=null,e||(f=r.apply(c,a)),o||(a=c=null))}var o,i,a,f,c,n=l(function(n){return c=this,a=n,i=O(),o||(o=setTimeout(u,t),e&&(f=r.apply(c,a))),f});return n.cancel=function(){clearTimeout(o),o=a=c=null},n},wrap:function(n,r){return M(r,n)},negate:Yn,compose:function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:Zn,once:nr,findKey:rr,findIndex:er,findLastIndex:ur,sortedIndex:or,indexOf:ar,lastIndexOf:fr,find:cr,detect:cr,findWhere:function(n,r){return cr(n,A(r))},each:N,forEach:N,map:I,collect:I,reduce:sr,foldl:sr,inject:sr,reduceRight:pr,foldr:pr,filter:T,select:T,reject:function(n,r,t){return T(n,Yn(S(r)),t)},every:hr,all:hr,some:vr,any:vr,contains:k,includes:k,include:k,invoke:yr,pluck:dr,where:function(n,r){return T(n,A(r))},max:gr,min:function(n,e,r){var t,u,o=1/0,i=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=E(n)?n:j(n)).length;a<f;a++)null!=(t=n[a])&&t<o&&(o=t);else e=S(e,r),N(n,function(n,r,t){((u=e(n,r,t))<i||u===1/0&&o===1/0)&&(o=n,i=u)});return o},shuffle:function(n){return jr(n,1/0)},sample:jr,sortBy:function(n,e,r){var u=0;return e=S(e,r),dr(I(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")},groupBy:_r,indexBy:wr,countBy:Ar,partition:xr,toArray:mr,size:function(n){return null==n?0:(E(n)?n:b(n)).length},pick:Or,omit:Mr,first:Br,head:Br,take:Br,initial:Er,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:R(n,Math.max(0,n.length-r))},rest:R,tail:R,drop:R,compact:function(n){return T(n,Boolean)},flatten:function(n,r){return B(n,r,!1)},without:Ir,uniq:Tr,unique:Tr,union:kr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=g(n);e<u;e++){var o=n[e];if(!k(r,o)){for(var i=1;i<t&&k(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Nr,unzip:Dr,transpose:Dr,zip:Rr,object:function(n,r){for(var t={},e=0,u=g(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t=t||(r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(f.call(n,e,e+=r));return t},mixin:Vr,default:m});return n._=n});;
/*! This file is auto-generated */
window.wp=window.wp||{},function(s){var t="undefined"==typeof _wpUtilSettings?{}:_wpUtilSettings;wp.template=_.memoize(function(e){var n,a={evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"};return function(t){if(document.getElementById("tmpl-"+e))return(n=n||_.template(s("#tmpl-"+e).html(),a))(t);throw new Error("Template not found: #tmpl-"+e)}}),wp.ajax={settings:t.ajax||{},post:function(t,e){return wp.ajax.send({data:_.isObject(t)?t:_.extend(e||{},{action:t})})},send:function(a,t){var e,n;return _.isObject(a)?t=a:(t=t||{}).data=_.extend(t.data||{},{action:a}),t=_.defaults(t||{},{type:"POST",url:wp.ajax.settings.url,context:this}),(e=(n=s.Deferred(function(n){t.success&&n.done(t.success),t.error&&n.fail(t.error),delete t.success,delete t.error,n.jqXHR=s.ajax(t).done(function(t){var e;"1"!==t&&1!==t||(t={success:!0}),_.isObject(t)&&!_.isUndefined(t.success)?(e=this,n.done(function(){a&&a.data&&"query-attachments"===a.data.action&&n.jqXHR.hasOwnProperty("getResponseHeader")&&n.jqXHR.getResponseHeader("X-WP-Total")?e.totalAttachments=parseInt(n.jqXHR.getResponseHeader("X-WP-Total"),10):e.totalAttachments=0}),n[t.success?"resolveWith":"rejectWith"](this,[t.data])):n.rejectWith(this,[t])}).fail(function(){n.rejectWith(this,arguments)})})).promise()).abort=function(){return n.jqXHR.abort(),this},e}}}(jQuery);;
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});;
!function($,c,i,n){var t=function(t){var a=this;a.$form=t,a.$attributeFields=t.find(".variations select"),a.$singleVariation=t.find(".single_variation"),a.$singleVariationWrap=t.find(".single_variation_wrap"),a.$resetVariations=t.find(".reset_variations"),a.$product=t.closest(".product"),a.variationData=t.data("product_variations"),a.useAjax=!1===a.variationData,a.xhr=!1,a.loading=!0,a.$singleVariationWrap.show(),a.$form.off(".wc-variation-form"),a.getChosenAttributes=a.getChosenAttributes.bind(a),a.findMatchingVariations=a.findMatchingVariations.bind(a),a.isMatch=a.isMatch.bind(a),a.toggleResetLink=a.toggleResetLink.bind(a),t.on("click.wc-variation-form",".reset_variations",{variationForm:a},a.onReset),t.on("reload_product_variations",{variationForm:a},a.onReload),t.on("hide_variation",{variationForm:a},a.onHide),t.on("show_variation",{variationForm:a},a.onShow),t.on("click",".single_add_to_cart_button",{variationForm:a},a.onAddToCart),t.on("reset_data",{variationForm:a},a.onResetDisplayedVariation),t.on("reset_image",{variationForm:a},a.onResetImage),t.on("change.wc-variation-form",".variations select",{variationForm:a},a.onChange),t.on("found_variation.wc-variation-form",{variationForm:a},a.onFoundVariation),t.on("check_variations.wc-variation-form",{variationForm:a},a.onFindVariation),t.on("update_variation_values.wc-variation-form",{variationForm:a},a.onUpdateAttributes),setTimeout(function(){t.trigger("check_variations"),t.trigger("wc_variation_form",a),a.loading=!1},100)},o=(t.prototype.onReset=function(t){t.preventDefault(),t.data.variationForm.$attributeFields.val("").trigger("change"),t.data.variationForm.$form.trigger("reset_data")},t.prototype.onReload=function(t){t=t.data.variationForm;t.variationData=t.$form.data("product_variations"),t.useAjax=!1===t.variationData,t.$form.trigger("check_variations")},t.prototype.onHide=function(t){t.preventDefault(),t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-is-unavailable").addClass("disabled wc-variation-selection-needed"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")},t.prototype.onShow=function(t,a,i){t.preventDefault(),i?(t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("disabled wc-variation-selection-needed wc-variation-is-unavailable"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-disabled").addClass("woocommerce-variation-add-to-cart-enabled")):(t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-selection-needed").addClass("disabled wc-variation-is-unavailable"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")),wp.mediaelement&&t.data.variationForm.$form.find(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function(){return!$(this).parent().hasClass("mejs-mediaelement")}).mediaelementplayer(wp.mediaelement.settings)},t.prototype.onAddToCart=function(t){$(this).is(".disabled")&&(t.preventDefault(),$(this).is(".wc-variation-is-unavailable")?c.alert(wc_add_to_cart_variation_params.i18n_unavailable_text):$(this).is(".wc-variation-selection-needed")&&c.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text))},t.prototype.onResetDisplayedVariation=function(t){t=t.data.variationForm;t.$product.find(".product_meta").find(".sku").wc_reset_content(),t.$product.find(".product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value").wc_reset_content(),t.$product.find(".product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value").wc_reset_content(),t.$form.trigger("reset_image"),t.$singleVariation.slideUp(200).trigger("hide_variation")},t.prototype.onResetImage=function(t){t.data.variationForm.$form.wc_variations_image_update(!1)},t.prototype.onFindVariation=function(t,a){var i=t.data.variationForm,e=void 0!==a?a:i.getChosenAttributes(),t=e.data;e.count&&e.count===e.chosenCount?i.useAjax?(i.xhr&&i.xhr.abort(),i.$form.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),t.product_id=parseInt(i.$form.data("product_id"),10),t.custom_data=i.$form.data("custom_data"),i.xhr=$.ajax({url:wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%","get_variation"),type:"POST",data:t,success:function(t){t?i.$form.trigger("found_variation",[t]):(i.$form.trigger("reset_data"),e.chosenCount=0,i.loading||(i.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),i.$form.find(".wc-no-matching-variations").slideDown(200)))},complete:function(){i.$form.unblock()}})):(i.$form.trigger("update_variation_values"),(a=i.findMatchingVariations(i.variationData,t).shift())?i.$form.trigger("found_variation",[a]):(i.$form.trigger("reset_data"),e.chosenCount=0,i.loading||(i.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),i.$form.find(".wc-no-matching-variations").slideDown(200)))):(i.$form.trigger("update_variation_values"),i.$form.trigger("reset_data")),i.toggleResetLink(0<e.chosenCount)},t.prototype.onFoundVariation=function(t,a){var t=t.data.variationForm,i=t.$product.find(".product_meta").find(".sku"),e=t.$product.find(".product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value"),r=t.$product.find(".product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value"),o=t.$singleVariationWrap.find('.quantity input.qty[name="quantity"]'),n=o.closest(".quantity"),s=!0,c=!1,_="";a.sku?i.wc_set_content(a.sku):i.wc_reset_content(),a.weight?e.wc_set_content(a.weight_html):e.wc_reset_content(),a.dimensions?r.wc_set_content($.parseHTML(a.dimensions_html)[0].data):r.wc_reset_content(),t.$form.wc_variations_image_update(a),a.variation_is_visible?(c=d("variation-template"),a.variation_id):c=d("unavailable-variation-template"),_=(_=(_=c({variation:a})).replace("/*<![CDATA[*/","")).replace("/*]]>*/",""),t.$singleVariation.html(_),t.$form.find('input[name="variation_id"], input.variation_id').val(a.variation_id).trigger("change"),"yes"===a.is_sold_individually?(o.val("1").attr("min","1").attr("max","").trigger("change"),n.hide()):(i=parseFloat(o.val()),i=isNaN(i)||(i=i>parseFloat(a.max_qty)?a.max_qty:i)<parseFloat(a.min_qty)?a.min_qty:i,o.attr("min",a.min_qty).attr("max",a.max_qty).val(i).trigger("change"),n.show()),a.is_purchasable&&a.is_in_stock&&a.variation_is_visible||(s=!1),(t.$singleVariation.text().trim()?t.$singleVariation.slideDown(200):t.$singleVariation.show()).trigger("show_variation",[a,s])},t.prototype.onChange=function(t){t=t.data.variationForm;t.$form.find('input[name="variation_id"], input.variation_id').val("").trigger("change"),t.$form.find(".wc-no-matching-variations").remove(),t.useAjax||t.$form.trigger("woocommerce_variation_select_change"),t.$form.trigger("check_variations"),t.$form.trigger("woocommerce_variation_has_changed")},t.prototype.addSlashes=function(t){return t=(t=t.replace(/'/g,"\\'")).replace(/"/g,'\\"')},t.prototype.onUpdateAttributes=function(t){var w=t.data.variationForm,b=w.getChosenAttributes().data;w.useAjax||(w.$attributeFields.each(function(t,a){var i,e=$(a),r=e.data("attribute_name")||e.attr("name"),a=$(a).data("show_option_none"),o=":gt(0)",n=$("<select/>"),s=e.val()||"",c=!0,_=(e.data("attribute_html")||((_=e.clone()).find("option").removeAttr("attached").prop("disabled",!1).prop("selected",!1),e.data("attribute_options",_.find("option"+o).get()),e.data("attribute_html",_.html())),n.html(e.data("attribute_html")),$.extend(!0,{},b)),d=(_[r]="",w.findMatchingVariations(w.variationData,_));for(i in d)if("undefined"!=typeof d[i]){var m,l=d[i].attributes;for(m in l)if(l.hasOwnProperty(m)){var v=l[m],g="";if(m===r)if(d[i].variation_is_active&&(g="enabled"),v){var v=$("<div/>").html(v).text(),u=n.find("option");if(u.length)for(var f=0,h=u.length;f<h;f++){var p=$(u[f]);if(v===p.val()){p.addClass("attached "+g);break}}}else n.find("option:gt(0)").addClass("attached "+g)}}_=n.find("option.attached").length,s&&(c=!1,0!==_&&n.find("option.attached.enabled").each(function(){var t=$(this).val();if(s===t)return!(c=!0)})),0<_&&s&&c&&"no"===a&&(n.find("option:first").remove(),o=""),n.find("option"+o+":not(.attached)").remove(),e.html(n.html()),e.find("option"+o+":not(.enabled)").prop("disabled",!0),s?c?e.val(s):e.val("").trigger("change"):e.val("")}),w.$form.trigger("woocommerce_update_variation_values"))},t.prototype.getChosenAttributes=function(){var i={},e=0,r=0;return this.$attributeFields.each(function(){var t=$(this).data("attribute_name")||$(this).attr("name"),a=$(this).val()||"";0<a.length&&r++,e++,i[t]=a}),{count:e,chosenCount:r,data:i}},t.prototype.findMatchingVariations=function(t,a){for(var i=[],e=0;e<t.length;e++){var r=t[e];this.isMatch(r.attributes,a)&&i.push(r)}return i},t.prototype.isMatch=function(t,a){var i,e,r,o=!0;for(i in t)t.hasOwnProperty(i)&&(e=t[i],r=a[i],e!==n&&r!==n&&0!==e.length&&0!==r.length&&e!==r&&(o=!1));return o},t.prototype.toggleResetLink=function(t){t?"hidden"===this.$resetVariations.css("visibility")&&this.$resetVariations.css("visibility","visible").hide().fadeIn():this.$resetVariations.css("visibility","hidden")},$.fn.wc_variation_form=function(){return new t(this),this},$.fn.wc_set_content=function(t){n===this.attr("data-o_content")&&this.attr("data-o_content",this.text()),this.text(t)},$.fn.wc_reset_content=function(){n!==this.attr("data-o_content")&&this.text(this.attr("data-o_content"))},$.fn.wc_set_variation_attr=function(t,a){n===this.attr("data-o_"+t)&&this.attr("data-o_"+t,this.attr(t)?this.attr(t):""),!1===a?this.removeAttr(t):this.attr(t,a)},$.fn.wc_reset_variation_attr=function(t){n!==this.attr("data-o_"+t)&&this.attr(t,this.attr("data-o_"+t))},$.fn.wc_maybe_trigger_slide_position_reset=function(t){var a=$(this),i=a.closest(".product").find(".images"),e=!1,t=t&&t.image_id?t.image_id:"";a.attr("current-image")!==t&&(e=!0),a.attr("current-image",t),e&&i.trigger("woocommerce_gallery_reset_slide_position")},$.fn.wc_variations_image_update=function(t){var a=this,i=a.closest(".product"),e=i.find(".images"),i=i.find(".flex-control-nav"),r=i.find("li:eq(0) img"),o=e.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),n=o.find(".wp-post-image"),s=o.find("a").eq(0);if(t&&t.image&&t.image.src&&1<t.image.src.length){0<i.find('li img[data-o_src="'+t.image.gallery_thumbnail_src+'"]').length&&a.wc_variations_image_reset();i=i.find('li img[src="'+t.image.gallery_thumbnail_src+'"]');if(0<i.length)return i.trigger("click"),a.attr("current-image",t.image_id),void c.setTimeout(function(){$(c).trigger("resize"),e.trigger("woocommerce_gallery_init_zoom")},20);n.wc_set_variation_attr("src",t.image.src),n.wc_set_variation_attr("height",t.image.src_h),n.wc_set_variation_attr("width",t.image.src_w),n.wc_set_variation_attr("srcset",t.image.srcset),n.wc_set_variation_attr("sizes",t.image.sizes),n.wc_set_variation_attr("title",t.image.title),n.wc_set_variation_attr("data-caption",t.image.caption),n.wc_set_variation_attr("alt",t.image.alt),n.wc_set_variation_attr("data-src",t.image.full_src),n.wc_set_variation_attr("data-large_image",t.image.full_src),n.wc_set_variation_attr("data-large_image_width",t.image.full_src_w),n.wc_set_variation_attr("data-large_image_height",t.image.full_src_h),o.wc_set_variation_attr("data-thumb",t.image.src),r.wc_set_variation_attr("src",t.image.gallery_thumbnail_src),s.wc_set_variation_attr("href",t.image.full_src)}else a.wc_variations_image_reset();c.setTimeout(function(){$(c).trigger("resize"),a.wc_maybe_trigger_slide_position_reset(t),e.trigger("woocommerce_gallery_init_zoom")},20)},$.fn.wc_variations_image_reset=function(){var t=this.closest(".product"),a=t.find(".images"),t=t.find(".flex-control-nav").find("li:eq(0) img"),a=a.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),i=a.find(".wp-post-image"),e=a.find("a").eq(0);i.wc_reset_variation_attr("src"),i.wc_reset_variation_attr("width"),i.wc_reset_variation_attr("height"),i.wc_reset_variation_attr("srcset"),i.wc_reset_variation_attr("sizes"),i.wc_reset_variation_attr("title"),i.wc_reset_variation_attr("data-caption"),i.wc_reset_variation_attr("alt"),i.wc_reset_variation_attr("data-src"),i.wc_reset_variation_attr("data-large_image"),i.wc_reset_variation_attr("data-large_image_width"),i.wc_reset_variation_attr("data-large_image_height"),a.wc_reset_variation_attr("data-thumb"),t.wc_reset_variation_attr("src"),e.wc_reset_variation_attr("href")},$(function(){"undefined"!=typeof wc_add_to_cart_variation_params&&$(".variations_form").each(function(){$(this).wc_variation_form()})}),{find_matching_variations:function(t,a){for(var i=[],e=0;e<t.length;e++){var r=t[e];o.variations_match(r.attributes,a)&&i.push(r)}return i},variations_match:function(t,a){var i,e,r,o=!0;for(i in t)t.hasOwnProperty(i)&&(e=t[i],r=a[i],e!==n&&r!==n&&0!==e.length&&0!==r.length&&e!==r&&(o=!1));return o}}),d=function(t){var a=i.getElementById("tmpl-"+t).textContent;return/<#\s?data\./.test(a)||/{{{?\s?data\.(?!variation\.).+}}}?/.test(a)||/{{{?\s?data\.variation\.[\w-]*[^\s}]/.test(a)?wp.template(t):function(t){var r=t.variation||{};return a.replace(/({{{?)\s?data\.variation\.([\w-]*)\s?(}}}?)/g,function(t,a,i,e){return a.length!==e.length?"":(e=r[i]||"",2===a.length?c.escape(e):e)})}}}(jQuery,window,document);;
!function(){var i,t={938:function(){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},i(t)}function t(i,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}!function(e){"use strict";var a,n=(a=jQuery,function(){function i(t,e,n){var o,r,l;!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),l={},(r="defaults")in(o=this)?Object.defineProperty(o,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[r]=l,this.name=n,this.element=t,this.$element=a(t),this.settings=a.extend(!0,{},this.defaults,e),this.$wrapper=this.$element.closest(".product"),this.$variations_form=this.$wrapper.find(".variations_form"),this.$attributeFields=this.$variations_form.find(".variations select"),this.$target=this.$element.parent(),this.$slider=a(".woo-variation-gallery-slider",this.$element),this.$thumbnail=a(".woo-variation-gallery-thumbnail-slider",this.$element),this.thumbnail_columns=this.$element.data("thumbnail_columns"),this.product_id=this.$variations_form.data("product_id"),this.is_variation_product=this.$variations_form.length>0,this.initial_load=!0,this.is_vertical=!!woo_variation_gallery_options.is_vertical,this.$element.addClass("wvg-loaded"),this.defaultDimension(),this.defaultGallery(),woo_variation_gallery_options.enable_gallery_preload&&this.initVariationImagePreload(),this.initEvents(),this.initVariationGallery(),this.is_variation_product||this.imagesLoaded(),this.is_variation_product&&(this.initSlick(),this.initZoom(),this.initPhotoswipe()),a(document).trigger("woo_variation_gallery_loaded",[this])}var n,o,r;return n=i,(o=[{key:"init",value:function(){var i=this;return _.debounce((function(){i.initSlick(),i.initZoom(),i.initPhotoswipe()}),500)}},{key:"getChosenAttributes",value:function(){var i={},t=0,e=0;return this.$attributeFields.each((function(){var n=a(this).data("attribute_name")||a(this).attr("name"),o=a(this).val()||"";o.length>0&&e++,t++,i[n]=o})),{count:t,chosenCount:e,data:i}}},{key:"defaultDimension",value:function(){var i=this;this.$element.css("min-height",this.$element.height()).css("min-width",this.$element.width()),a(e).on("resize.wvg",_.debounce((function(t){t.originalEvent&&i.$element.css("min-height",i.$element.height()).css("min-width",i.$element.width())}),300)),a(e).on("resize.wvg",_.debounce((function(t){t.originalEvent&&i.$element.css("min-height","").css("min-width","")}),100,{leading:!0,trailing:!1}))}},{key:"dimension",value:function(){}},{key:"initEvents",value:function(){var i=this;this.$element.on("woo_variation_gallery_slider_slick_init",(function(t,n){if(woo_variation_gallery_options.is_vertical&&(a(e).on("resize",i.enableThumbnailPositionDebounce()),i.$slider.on("setPosition",i.thumbnailHeightDebounce()),i.$slider.on("afterChange",(function(){i.thumbnailHeight()}))),woo_variation_gallery_options.enable_thumbnail_slide){var o=i.$thumbnail.find(".wvg-gallery-thumbnail-image").length;parseInt(woo_variation_gallery_options.gallery_thumbnails_columns)<o?(i.$thumbnail.find(".wvg-gallery-thumbnail-image").removeClass("current-thumbnail"),i.initThumbnailSlick()):i.$slider.slick("slickSetOption","asNavFor",null,!1)}})),this.$element.on("woo_variation_gallery_slick_destroy",(function(t,e){i.$thumbnail.hasClass("slick-initialized")&&i.$thumbnail.slick("unslick")})),this.$element.on("woo_variation_gallery_image_loaded",this.init())}},{key:"initSlick",value:function(){var i=this;this.$slider.is(".slick-initialized")&&this.$slider.slick("unslick"),this.$slider.off("init"),this.$slider.off("beforeChange"),this.$slider.off("afterChange"),this.$element.trigger("woo_variation_gallery_before_init",[this]),this.$slider.on("init",(function(t){i.initial_load&&(i.initial_load=!1)})).on("beforeChange",(function(t,e,a,n){i.$thumbnail.find(".wvg-gallery-thumbnail-image").not(".slick-slide").removeClass("current-thumbnail"),i.$thumbnail.find(".wvg-gallery-thumbnail-image").not(".slick-slide").eq(n).addClass("current-thumbnail")})).on("afterChange",(function(t,e,a){i.stopVideo(i.$slider),i.initZoomForTarget(a)})).slick(),this.$thumbnail.find(".wvg-gallery-thumbnail-image").not(".slick-slide").first().addClass("current-thumbnail"),this.$thumbnail.find(".wvg-gallery-thumbnail-image").not(".slick-slide").each((function(t,e){a(e).find("div, img").on("click",(function(e){e.preventDefault(),e.stopPropagation(),i.$slider.slick("slickGoTo",t)}))})),_.delay((function(){i.$element.trigger("woo_variation_gallery_slider_slick_init",[i])}),1),_.delay((function(){i.removeLoadingClass()}),100)}},{key:"initZoomForTarget",value:function(i){if(woo_variation_gallery_options.enable_gallery_zoom){var t=parseInt(this.$target.width()),e=!1,n=this.$slider.slick("getSlick").$slides.eq(i);if(a(n).each((function(i,n){var o=a(n).find("img");if(parseInt(o.data("large_image_width"))>t)return e=!0,!1})),a().zoom&&e){var o=a.extend({touch:!1},wc_single_product_params.zoom_options);"ontouchstart"in document.documentElement&&(o.on="click"),n.trigger("zoom.destroy"),n.zoom(o)}}}},{key:"initZoom",value:function(){var i=this.$slider.slick("slickCurrentSlide");this.initZoomForTarget(i)}},{key:"initPhotoswipe",value:function(){var i=this;woo_variation_gallery_options.enable_gallery_lightbox&&(this.$element.off("click",".woo-variation-gallery-trigger"),this.$element.off("click",".wvg-gallery-image a"),this.$element.on("click",".woo-variation-gallery-trigger",(function(t){i.openPhotoswipe(t)})),this.$element.on("click",".wvg-gallery-image a",(function(t){i.openPhotoswipe(t)})))}},{key:"openPhotoswipe",value:function(i){var t=this;if(i.preventDefault(),"undefined"==typeof PhotoSwipe)return!1;var e=a(".pswp")[0],n=this.getGalleryItems(),o=a.extend({index:this.$slider.slick("slickCurrentSlide")},wc_single_product_params.photoswipe_options),r=new PhotoSwipe(e,PhotoSwipeUI_Default,n,o);r.listen("close",(function(){t.stopVideo(e)})),r.listen("afterChange",(function(){t.stopVideo(e)})),r.init()}},{key:"stopVideo",value:function(i){a(i).find("iframe, video").each((function(){var i=a(this).prop("tagName").toLowerCase(),t=a(this)[0];if("video"===i&&t.pause(),"iframe"===i){if(null===t.contentWindow)return;var e=a(this).attr("src"),n=new URL(e),o=new URLSearchParams(n.search);t.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo",args:""}),"*"),o.has("background")||t.contentWindow.postMessage(JSON.stringify({method:"pause",value:"true"}),"*")}}))}},{key:"addLoadingClass",value:function(){if(woo_variation_gallery_options.preloader_disable)return!0;this.$element.addClass("loading-gallery")}},{key:"removeLoadingClass",value:function(){this.$element.removeClass("loading-gallery")}},{key:"getGalleryItems",value:function(){var i=this.$slider.slick("getSlick").$slides,t=[];return i.length>0&&i.each((function(i,e){var n,o,r=a(e).find("img, iframe, video");switch(a(r).prop("tagName").toLowerCase()){case"img":o={src:r.attr("data-large_image"),w:r.attr("data-large_image_width"),h:r.attr("data-large_image_height"),title:r.attr("data-caption")?r.attr("data-caption"):r.attr("title")};break;case"iframe":n=r.attr("src"),o={html:'<iframe loading="lazy" class="wvg-lightbox-iframe" src="'.concat(n,'" style="width: 100%; height: 100%; margin: 0;padding: 0; background-color: #000000" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')};break;case"video":n=r.attr("src"),o={html:'<video preload="auto" class="wvg-lightbox-video" disablePictureInPicture controls controlsList="nodownload" src="'.concat(n,'" style="width: 100%; height: 100%; margin: 0;padding: 0; background-color: #000000"></video>')}}t.push(o)})),t}},{key:"destroySlick",value:function(){this.$slider.html(""),this.$thumbnail.html(""),this.$slider.is(".slick-initialized")&&this.$slider.slick("unslick"),this.$element.trigger("woo_variation_gallery_slick_destroy",[this])}},{key:"defaultGallery",value:function(){var i=this;this.is_variation_product&&(this.$element.defaultXHR&&this.$element.defaultXHR.abort(),this.$element.defaultXHR=a.ajax({global:!1,url:wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%","get_default_gallery"),method:"POST",data:{product_id:this.product_id},success:function(t){t?(i.$element.data("woo_variation_gallery_default",t),i.$element.trigger("woo_variation_default_gallery_loaded",[i,t])):(i.$element.data("woo_variation_gallery_default",[]),i.$element.trigger("woo_variation_default_gallery_loaded",[i,[]]),console.error("Variation Gallery not available on variation id ".concat(i.product_id,".")))}}))}},{key:"initVariationImagePreload",value:function(){var i=this;this.is_variation_product&&(this.$element.imagesXHR&&this.$element.imagesXHR.abort(),this.$element.defaultXHR=a.ajax({global:!1,url:wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%","get_variation_gallery"),method:"POST",data:{product_id:this.product_id},success:function(t){t?(t.length>1&&i.imagePreload(t),i.$element.data("woo_variation_gallery_variation_images",t),i.$element.trigger("woo_variation_gallery_variation_images",[i,t])):(i.$element.data("woo_variation_gallery_variation_images",[]),console.error("Variation Gallery variations images not available on variation id ".concat(i.product_id,".")))}}))}},{key:"imagePreload",value:function(i){for(var t=0;t<i.length;t++)try{var e=new Image,n=new Image,o=new Image,r=new Image;e.src=i[t].src,i[t].srcset&&(e.srcset=i[t].srcset),n.src=i[t].gallery_thumbnail_src,o.src=i[t].full_src,r.src=i[t].archive_src;var l=a.trim(i[t].video_link);if(l&&"video"===i[t].video_embed_type){var s=new XMLHttpRequest;s.open("GET",l,!0),s.responseType="blob",s.onload=function(){if(200===this.status){var i=this.response;URL.createObjectURL(i)}},s.onerror=function(){},s.send()}}catch(i){console.error(i)}}},{key:"showVariationImage",value:function(i){i&&(this.addLoadingClass(),this.galleryInit(i.variation_gallery_images||[]))}},{key:"resetVariationImage",value:function(){this.$element.is(".loading-gallery")||(this.addLoadingClass(),this.galleryReset())}},{key:"initVariationGallery",value:function(){var i=this;this.$variations_form.off("reset_image.wvg"),this.$variations_form.off("click.wvg",".reset_variations"),this.$variations_form.off("show_variation.wvg"),this.$variations_form.off("hide_variation.wvg"),this.$variations_form.on("show_variation.wvg",(function(t,e){i.showVariationImage(e)})),woo_variation_gallery_options.gallery_reset_on_variation_change?this.$variations_form.on("hide_variation.wvg",(function(){i.resetVariationImage()})):this.$variations_form.on("click.wvg",".reset_variations",(function(){i.resetVariationImage()}))}},{key:"galleryReset",value:function(){var i=this,t=this.$element.data("woo_variation_gallery_default");t&&t.length>0?this.galleryInit(t):_.delay((function(){i.removeLoadingClass()}),100)}},{key:"galleryInit",value:function(i){var t=this,e=i.length>1;this.$element.trigger("before_woo_variation_gallery_init",[this,i]),this.destroySlick();var a=i.map((function(i){return wp.template("woo-variation-gallery-slider-template")(i)})).join(""),n=i.map((function(i){return wp.template("woo-variation-gallery-thumbnail-template")(i)})).join("");e?(this.$target.addClass("woo-variation-gallery-has-product-thumbnail"),this.$target.removeClass("woo-variation-gallery-no-product-thumbnail")):(this.$target.addClass("woo-variation-gallery-no-product-thumbnail"),this.$target.removeClass("woo-variation-gallery-has-product-thumbnail")),this.$slider.html(a),e?this.$thumbnail.html(n):this.$thumbnail.html(""),_.delay((function(){t.imagesLoaded()}),1)}},{key:"imagesLoaded",value:function(){var i=this;if(!a().imagesLoaded.done)return this.$element.trigger("woo_variation_gallery_image_loading",[this]),void this.$element.trigger("woo_variation_gallery_image_loaded",[this]);this.$element.imagesLoaded().progress((function(t,e){i.$element.trigger("woo_variation_gallery_image_loading",[i])})).done((function(t){i.$element.trigger("woo_variation_gallery_image_loaded",[i])}))}},{key:"initThumbnailSlick",value:function(){var i=this;this.$thumbnail.hasClass("slick-initialized")&&this.$thumbnail.slick("unslick"),this.$thumbnail.off("init"),this.$thumbnail.on("init",(function(){})).slick(),_.delay((function(){i.$element.trigger("woo_variation_gallery_thumbnail_slick_init",[i])}),1)}},{key:"thumbnailHeight",value:function(){this.is_vertical?this.$slider.slick("getSlick").$slides.length>1?this.$thumbnail.height(this.$slider.height()):this.$thumbnail.height(0):this.$thumbnail.height("auto"),this.$thumbnail.hasClass("slick-initialized")&&this.$thumbnail.slick("setPosition")}},{key:"thumbnailHeightDebounce",value:function(i){var t=this;return _.debounce((function(){t.thumbnailHeight()}),401)}},{key:"enableThumbnailPosition",value:function(){woo_variation_gallery_options.is_mobile,woo_variation_gallery_options.is_vertical&&(e.matchMedia("(max-width: 768px)").matches||e.matchMedia("(max-width: 480px)").matches?(this.is_vertical=!1,this.$element.removeClass("".concat(woo_variation_gallery_options.thumbnail_position_class_prefix,"left ").concat(woo_variation_gallery_options.thumbnail_position_class_prefix,"right ").concat(woo_variation_gallery_options.thumbnail_position_class_prefix,"bottom")),this.$element.addClass("".concat(woo_variation_gallery_options.thumbnail_position_class_prefix,"bottom")),this.$slider.slick("setPosition")):(this.is_vertical=!0,this.$element.removeClass("".concat(woo_variation_gallery_options.thumbnail_position_class_prefix,"left ").concat(woo_variation_gallery_options.thumbnail_position_class_prefix,"right ").concat(woo_variation_gallery_options.thumbnail_position_class_prefix,"bottom")),this.$element.addClass("".concat(woo_variation_gallery_options.thumbnail_position_class_prefix).concat(woo_variation_gallery_options.thumbnail_position)),this.$slider.slick("setPosition")))}},{key:"enableThumbnailPositionDebounce",value:function(i){var t=this;return _.debounce((function(){t.enableThumbnailPosition()}),400)}},{key:"destroy",value:function(){this.$element.removeData(this.name)}}])&&t(n.prototype,o),r&&t(n,r),Object.defineProperty(n,"prototype",{writable:!1}),i}()),o=function(t){return function(e,a){t.fn[e]=function(n){for(var o=this,r=arguments.length,l=new Array(r>1?r-1:0),s=1;s<r;s++)l[s-1]=arguments[s];return this.each((function(r,s){var c=t(s),u=c.data(e);if(u||(u=new a(c,t.extend({},n),e),c.data(e,u)),"string"==typeof n){if("object"===i(u[n]))return u[n];var h;if("function"==typeof u[n])return(h=u)[n].apply(h,l)}return o}))},t.fn[e].Constructor=a,t[e]=function(i){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return(a=t({}))[e].apply(a,[i].concat(o))},t.fn[e].noConflict=function(){return t.fn[e]}}}(jQuery);o("WooVariationGallery",n)}(window)},242:function(){jQuery((function(i){try{i(document).on("woo_variation_gallery_init",(function(){i(".woo-variation-gallery-wrapper:not(.wvg-loaded)").WooVariationGallery()})).trigger("woo_variation_gallery_init")}catch(i){window.console.log(i)}i(document).on("wc_variation_form",".variations_form",(function(){i(document).trigger("woo_variation_gallery_init")})),i(document).on("qv_loader_stop",(function(){i(".woo-variation-gallery-wrapper:not(.woo-variation-gallery-product-type-variable):not(.wvg-loaded)").WooVariationGallery()})),window.elementorFrontend&&window.elementorFrontend.hooks&&elementorFrontend.hooks.addAction("frontend/element_ready/woocommerce-product-images.default",(function(t){i(document).trigger("woo_variation_gallery_init")}))}))},580:function(){},125:function(){},187:function(){}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,a),o.exports}a.m=t,i=[],a.O=function(t,e,n,o){if(!e){var r=1/0;for(u=0;u<i.length;u++){e=i[u][0],n=i[u][1],o=i[u][2];for(var l=!0,s=0;s<e.length;s++)(!1&o||r>=o)&&Object.keys(a.O).every((function(i){return a.O[i](e[s])}))?e.splice(s--,1):(l=!1,o<r&&(r=o));if(l){i.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=i.length;u>0&&i[u-1][2]>o;u--)i[u]=i[u-1];i[u]=[e,n,o]},a.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},function(){var i={664:0,438:0,60:0,706:0};a.O.j=function(t){return 0===i[t]};var t=function(t,e){var n,o,r=e[0],l=e[1],s=e[2],c=0;if(r.some((function(t){return 0!==i[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(s)var u=s(a)}for(t&&t(e);c<r.length;c++)o=r[c],a.o(i,o)&&i[o]&&i[o][0](),i[o]=0;return a.O(u)},e=self.webpackChunkwoo_variation_gallery=self.webpackChunkwoo_variation_gallery||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}(),a.O(void 0,[438,60,706],(function(){return a(938)})),a.O(void 0,[438,60,706],(function(){return a(242)})),a.O(void 0,[438,60,706],(function(){return a(580)})),a.O(void 0,[438,60,706],(function(){return a(125)}));var n=a.O(void 0,[438,60,706],(function(){return a(187)}));n=a.O(n)}();;
/*! This file is auto-generated */
!function(c){var w=window.wpApiSettings;function t(e){return e=t.buildAjaxOptions(e),t.transport(e)}t.buildAjaxOptions=function(e){var t,n,a,p,o,r,i=e.url,d=e.path,s=e.method;for(r in"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(t=e.namespace.replace(/^\/|\/$/g,""),d=(n=e.endpoint.replace(/^\//,""))?t+"/"+n:t),"string"==typeof d&&(n=w.root,d=d.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(d=d.replace("?","&")),i=n+d),p=!(e.data&&e.data._wpnonce),o=!0,a=e.headers||{})if(a.hasOwnProperty(r))switch(r.toLowerCase()){case"x-wp-nonce":p=!1;break;case"accept":o=!1}return p&&(a=c.extend({"X-WP-Nonce":w.nonce},a)),o&&(a=c.extend({Accept:"application/json, */*;q=0.1"},a)),"string"!=typeof s||"PUT"!==(s=s.toUpperCase())&&"DELETE"!==s||(a=c.extend({"X-HTTP-Method-Override":s},a),s="POST"),delete(e=c.extend({},e,{headers:a,url:i,method:s})).path,delete e.namespace,delete e.endpoint,e},t.transport=c.ajax,window.wp=window.wp||{},window.wp.apiRequest=t}(jQuery);;
!function(e){"object"==typeof exports&&"undefined"!=typeof module||"function"!=typeof define||!define.amd?e():define("inert",e)}((function(){"use strict";var e,t,n,i,o,r,s=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){d(this,u),this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}function h(e,t){d(this,h),this._node=e,this._overrodeFocusMethod=!1,this._inertRoots=new Set([t]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}function l(e){if(d(this,l),!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),_(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}function c(e,t,n){if(e.nodeType==Node.ELEMENT_NODE){var i=e;if(s=(t&&t(i),i.shadowRoot))return void c(s,t,s);if("content"==i.localName){for(var o=(s=i).getDistributedNodes?s.getDistributedNodes():[],r=0;r<o.length;r++)c(o[r],t,n);return}if("slot"==i.localName){for(var s,a=(s=i).assignedNodes?s.assignedNodes({flatten:!0}):[],d=0;d<a.length;d++)c(a[d],t,n);return}}for(var u=e.firstChild;null!=u;)c(u,t,n),u=u.nextSibling}function _(e){var t;e.querySelector("style#inert-style, link#inert-style")||((t=document.createElement("style")).setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",e.appendChild(t))}"undefined"!=typeof window&&(e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,n=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),s(u,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var t=this,n=(c(e,(function(e){return t._visitNode(e)})),document.activeElement);if(!document.body.contains(e)){for(var i=e,o=void 0;i;){if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){o=i;break}i=i.parentNode}o&&(n=o.activeElement)}e.contains(n)&&(n.blur(),n===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){e.nodeType===Node.ELEMENT_NODE&&(e!==this._rootElement&&e.hasAttribute("inert")&&this._adoptInertRoot(e),(t.call(e,n)||e.hasAttribute("tabindex"))&&this._manageNode(e))}},{key:"_manageNode",value:function(e){e=this._inertManager.register(e,this),this._managedNodes.add(e)}},{key:"_unmanageNode",value:function(e){(e=this._inertManager.deregister(e,this))&&this._managedNodes.delete(e)}},{key:"_unmanageSubtree",value:function(e){var t=this;c(e,(function(e){return t._unmanageNode(e)}))}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}},{key:"_onMutation",value:function(t,n){t.forEach((function(t){var n,i=t.target;"childList"===t.type?(e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this)):"attributes"===t.type&&("tabindex"===t.attributeName?this._manageNode(i):i!==this._rootElement&&"inert"===t.attributeName&&i.hasAttribute("inert")&&(this._adoptInertRoot(i),n=this._inertManager.getInertRoot(i),this._managedNodes.forEach((function(e){i.contains(e.node)&&n._manageNode(e.node)}))))}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),i=u,s(h,[{key:"destructor",value:function(){var e;this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE&&(e=this._node,null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus),this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){var e;this.node.nodeType===Node.ELEMENT_NODE&&(e=this.node,t.call(e,n)?-1===e.tabIndex&&this.hasSavedTabIndex||(e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)):e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex")))}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),o=h,s(l,[{key:"setInert",value:function(e,t){if(t){if(!this._inertRoots.has(e)&&(t=new i(e,this),e.setAttribute("inert",""),this._inertRoots.set(e,t),!this._document.body.contains(e)))for(var n=e.parentNode;n;)11===n.nodeType&&_(n),n=n.parentNode}else this._inertRoots.has(e)&&(this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert"))}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var n=this._managedNodes.get(e);return void 0!==n?n.addInertRoot(t):n=new o(e,t),this._managedNodes.set(e,n),n}},{key:"deregister",value:function(e,t){var n=this._managedNodes.get(e);return n?(n.removeInertRoot(t),n.destroyed&&this._managedNodes.delete(e),n):null}},{key:"_onDocumentLoaded",value:function(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(n,i){var o=this;n.forEach((function(n){switch(n.type){case"childList":e.call(n.addedNodes).forEach((function(n){var i;n.nodeType===Node.ELEMENT_NODE&&(i=e.call(n.querySelectorAll("[inert]")),t.call(n,"[inert]")&&i.unshift(n),i.forEach((function(e){this.setInert(e,!0)}),o))}),o);break;case"attributes":if("inert"!==n.attributeName)return;var i=n.target,r=i.hasAttribute("inert");o.setInert(i,r)}}),this)}}]),s=l,HTMLElement.prototype.hasOwnProperty("inert")||(r=new s(document),Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){r.setInert(this,e)}})))}));;
var runtime=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i=(w="function"==typeof Symbol?Symbol:{}).iterator||"@@iterator",a=w.asyncIterator||"@@asyncIterator",c=w.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(e){u=function(t,r,e){return t[r]=e}}function h(t,e,n,i){var a,c,u,h;e=e&&e.prototype instanceof v?e:v,e=Object.create(e.prototype),i=new O(i||[]);return o(e,"_invoke",{value:(a=t,c=n,u=i,h=f,function(t,e){if(h===p)throw new Error("Generator is already running");if(h===y){if("throw"===t)throw e;return G()}for(u.method=t,u.arg=e;;){var n=u.delegate;if(n&&(n=function t(e,n){var o=n.method,i=e.iterator[o];return i===r?(n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=r,t(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),g):"throw"===(o=l(i,e.iterator,n.arg)).type?(n.method="throw",n.arg=o.arg,n.delegate=null,g):(i=o.arg)?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}(n,u),n)){if(n===g)continue;return n}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(h===f)throw h=y,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);if(h=p,"normal"===(n=l(a,c,u)).type){if(h=u.done?y:s,n.arg!==g)return{value:n.arg,done:u.done}}else"throw"===n.type&&(h=y,u.method="throw",u.arg=n.arg)}})}),e}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var f="suspendedStart",s="suspendedYield",p="executing",y="completed",g={};function v(){}function d(){}function m(){}var w,b,L=((b=(b=(u(w={},i,(function(){return this})),Object.getPrototypeOf))&&b(b(k([]))))&&b!==e&&n.call(b,i)&&(w=b),m.prototype=v.prototype=Object.create(w));function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){var e;o(this,"_invoke",{value:function(o,i){function a(){return new r((function(e,a){!function e(o,i,a,c){var u;if("throw"!==(o=l(t[o],t,i)).type)return(i=(u=o.arg).value)&&"object"==typeof i&&n.call(i,"__await")?r.resolve(i.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(i).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}));c(o.arg)}(o,i,e,a)}))}return e=e?e.then(a,a):a()}})}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e,o=t[i];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(o=function o(){for(;++e<t.length;)if(n.call(t,e))return o.value=t[e],o.done=!1,o;return o.value=r,o.done=!0,o}).next=o}return{next:G}}function G(){return{value:r,done:!0}}return o(L,"constructor",{value:d.prototype=m,configurable:!0}),o(m,"constructor",{value:d,configurable:!0}),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){return!!(t="function"==typeof t&&t.constructor)&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r,e=Object(t),n=[];for(r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}var a=(i=i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc?null:i)?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e,n,o=this.tryEntries[r];if(o.tryLoc===t)return"throw"===(e=o.completion).type&&(n=e.arg,_(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=runtime}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)};
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );;
!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=o(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return s=t.done,t},e:function(t){l=!0,r=t},f:function(){try{s||null==a.return||a.return()}finally{if(l)throw r}}}}function a(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var i,n,o=[],r=!0,s=!1;try{for(a=a.call(t);!(r=(i=a.next()).done)&&(o.push(i.value),!e||o.length!==e);r=!0);}catch(t){s=!0,n=t}finally{try{r||null==a.return||a.return()}finally{if(s)throw n}}return o}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}!function(o){"use strict";var r=function(t){return!!t.path&&-1!==t.path.indexOf("woo-variation-swatches")||!!t.url&&-1!==t.url.indexOf("woo-variation-swatches")};o.createMiddlewareForExtraQueryParams=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e,a){if(r(e)&&Object.keys(t).length>0)for(var o=0,s=Object.entries(t);o<s.length;o++){var l=n(s[o],2),c=l[0],u=l[1];"string"!=typeof e.url||wp.url.hasQueryArg(e.url,c)||(e.url=wp.url.addQueryArgs(e.url,i({},c,u))),"string"!=typeof e.path||wp.url.hasQueryArg(e.path,c)||(e.path=wp.url.addQueryArgs(e.path,i({},c,u)))}return a(e)}};var s,l=(s=jQuery,function(){function t(e,a,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"defaults",{}),this.name=n,this.element=e,this.$element=s(e),this.settings=s.extend(!0,{},this.defaults,a),this.product_variations=this.$element.data("product_variations")||[],this.is_ajax_variation=this.product_variations.length<1,this.product_id=this.$element.data("product_id"),this.reset_variations=this.$element.find(".reset_variations"),this.attributeFields=this.$element.find(".variations select"),this.selected_item_template='<span class="woo-selected-variation-item-name" data-default=""></span>',this.$element.addClass("wvs-loaded"),this.init(),this.update(),s(document).trigger("woo_variation_swatches_loaded",this)}var o,r,l;return o=t,(r=[{key:"isAjaxVariation",value:function(){return this.is_ajax_variation}},{key:"init",value:function(){this.prepareLabel(),this.prepareItems(),this.setupItems(),this.setupEvents(),this.setUpStockInfo()}},{key:"prepareLabel",value:function(){var t=this;woo_variation_swatches_options.show_variation_label&&this.$element.find(".variations .label").each((function(e,a){s(a).append(t.selected_item_template)}))}},{key:"prepareItems",value:function(){this.$element.find("ul.variable-items-wrapper").each((function(t,e){s(e).parent().addClass("woo-variation-items-wrapper")}))}},{key:"setupItems",value:function(){var t=this;this.$element.find("ul.variable-items-wrapper").each((function(e,a){var i="",n=s(a).parent().prev().find(".woo-selected-variation-item-name"),o=s(a).parent().find("select.woo-variation-raw-select"),r=o.find("option"),l=o.find("option:disabled"),c=o.find("option.enabled.out-of-stock"),u=o.find("option:selected"),d=o.find("option").eq(1),v=[],f=[],h=[];r.each((function(){""!==s(this).val()&&(v.push(s(this).val()),i=0===u.length?d.val():u.val())})),l.each((function(){""!==s(this).val()&&f.push(s(this).val())})),c.each((function(){""!==s(this).val()&&h.push(s(this).val())}));var p=_.difference(v,f);t.setupItem(a,i,p,h,n)}))}},{key:"setupItem",value:function(t,e,a,i,n){var o=this;s(t).find("li.variable-item").each((function(t,r){var l=s(r).attr("data-value"),c=s(r).attr("data-title");s(r).removeClass("selected disabled no-stock").addClass("disabled"),s(r).attr("aria-checked","false"),s(r).attr("tabindex","-1"),s(r).attr("data-wvstooltip-out-of-stock",""),s(r).find("input.variable-item-radio-input:radio").prop("disabled",!0).prop("checked",!1),e.length<1&&woo_variation_swatches_options.show_variation_label&&n.text(""),o.isAjaxVariation()?(s(r).find("input.variable-item-radio-input:radio").prop("disabled",!1),s(r).removeClass("selected disabled no-stock"),l===e&&(s(r).addClass("selected"),s(r).attr("aria-checked","true"),s(r).attr("tabindex","0"),s(r).find("input.variable-item-radio-input:radio").prop("disabled",!1).prop("checked",!0),woo_variation_swatches_options.show_variation_label&&n.text("".concat(woo_variation_swatches_options.variation_label_separator," ").concat(c)),s(r).trigger("wvs-item-updated",[e,l]))):(_.includes(a,l)&&(s(r).removeClass("selected disabled"),s(r).removeAttr("aria-hidden"),s(r).attr("tabindex","0"),s(r).find("input.variable-item-radio-input:radio").prop("disabled",!1),l===e&&(s(r).addClass("selected"),s(r).attr("aria-checked","true"),s(r).find("input.variable-item-radio-input:radio").prop("checked",!0),woo_variation_swatches_options.show_variation_label&&n.text("".concat(woo_variation_swatches_options.variation_label_separator," ").concat(c)),s(r).trigger("wvs-item-updated",[e,l]))),_.includes(i,l)&&woo_variation_swatches_options.clickable_out_of_stock&&(s(r).removeClass("disabled").addClass("no-stock"),s(r).attr("data-wvstooltip-out-of-stock",woo_variation_swatches_options.out_of_stock_tooltip_text)))}))}},{key:"setupEvents",value:function(){var t=this;this.$element.find("ul.variable-items-wrapper").each((function(e,a){var i=s(a).parent().find("select.woo-variation-raw-select");woo_variation_swatches_options.clear_on_reselect?(s(a).on("click.wvs","li.variable-item:not(.selected):not(.radio-variable-item)",(function(e){e.preventDefault(),e.stopPropagation();var a=s(this).data("value");i.val(a).trigger("change"),i.trigger("click"),woo_variation_swatches_options.is_mobile,s(this).trigger("wvs-selected-item",[a,i,t.$element])})),s(a).on("click.wvs","li.variable-item.selected:not(.radio-variable-item)",(function(e){e.preventDefault(),e.stopPropagation();var a=s(this).val();i.val("").trigger("change"),i.trigger("click"),woo_variation_swatches_options.is_mobile,s(this).trigger("wvs-unselected-item",[a,i,t.$element])})),s(a).on("click.wvs","input.variable-item-radio-input:radio",(function(t){t.stopPropagation(),s(this).trigger("change.wvs",{radioChange:!0})})),s(a).on("change.wvs","input.variable-item-radio-input:radio",(function(e,a){if(e.preventDefault(),e.stopPropagation(),a&&a.radioChange){var n=s(this).val();s(this).parent("li.radio-variable-item").hasClass("selected")?(i.val("").trigger("change"),s(this).parent("li.radio-variable-item").trigger("wvs-unselected-item",[n,i,t.$element])):(i.val(n).trigger("change"),s(this).parent("li.radio-variable-item").trigger("wvs-selected-item",[n,i,t.$element])),i.trigger("click"),woo_variation_swatches_options.is_mobile}}))):(s(a).on("click.wvs","li.variable-item:not(.radio-variable-item)",(function(e){e.preventDefault(),e.stopPropagation();var a=s(this).data("value");i.val(a).trigger("change"),i.trigger("click"),woo_variation_swatches_options.is_mobile,s(this).trigger("wvs-selected-item",[a,i,t.$element])})),s(a).on("change.wvs","input.variable-item-radio-input:radio",(function(e){e.preventDefault(),e.stopPropagation();var a=s(this).val();i.val(a).trigger("change"),i.trigger("click"),woo_variation_swatches_options.is_mobile,s(this).parent("li.radio-variable-item").removeClass("selected disabled no-stock").addClass("selected"),s(this).parent("li.radio-variable-item").trigger("wvs-selected-item",[a,i,t.$element])}))),s(a).on("keydown.wvs","li.variable-item:not(.disabled)",(function(t){(t.keyCode&&32===t.keyCode||t.key&&" "===t.key||t.keyCode&&13===t.keyCode||t.key&&"enter"===t.key.toLowerCase())&&(t.preventDefault(),s(this).trigger("click"))}))})),this.$element.on("click.wvs",".woo-variation-swatches-variable-item-more",(function(t){t.preventDefault(),s(this).parent().removeClass("enabled-display-limit-mode enabled-catalog-display-limit-mode"),s(this).remove()}))}},{key:"update",value:function(){var t=this;this.$element.on("woocommerce_variation_has_changed.wvs",(function(e){t.setupItems()}))}},{key:"setUpStockInfo",value:function(){var t=this;if(woo_variation_swatches_options.show_variation_stock){var e=parseInt(woo_variation_swatches_options.stock_label_threshold,10);this.$element.on("wvs-selected-item.wvs",(function(a){var i=t.getChosenAttributes(),n=t.findStockVariations(t.product_variations,i);i.count>1&&i.count===i.chosenCount&&t.resetStockInfo(),i.count>1&&i.count===i.mayChosenCount&&n.forEach((function(a){var i='[data-attribute_name="'.concat(a.attribute_name,'"] > [data-value="').concat(a.attribute_value,'"]');a.variation.is_in_stock&&a.variation.max_qty&&a.variation.variation_stock_left&&a.variation.max_qty<=e?(t.$element.find("".concat(i," .wvs-stock-left-info")).attr("data-wvs-stock-info",a.variation.variation_stock_left),t.$element.find(i).addClass("wvs-show-stock-left-info")):(t.$element.find(i).removeClass("wvs-show-stock-left-info"),t.$element.find("".concat(i," .wvs-stock-left-info")).attr("data-wvs-stock-info",""))}))})),this.$element.on("hide_variation.wvs",(function(){t.resetStockInfo()}))}}},{key:"resetStockInfo",value:function(){this.$element.find(".variable-item").removeClass("wvs-show-stock-left-info"),this.$element.find(".wvs-stock-left-info").attr("data-wvs-stock-info","")}},{key:"getChosenAttributes",value:function(){var t={},e=0,a=0;return this.attributeFields.each((function(){var i=s(this).data("attribute_name")||s(this).attr("name"),n=s(this).val()||"";n.length>0&&a++,e++,t[i]=n})),{count:e,chosenCount:a,mayChosenCount:a+1,data:t}}},{key:"findStockVariations",value:function(t,a){for(var o=[],r=0,s=Object.entries(a.data);r<s.length;r++){var l=n(s[r],2),c=l[0];if(0===l[1].length){var u,d=e(this.$element.find("ul[data-attribute_name='".concat(c,"']")).data("attribute_values")||[]);try{for(d.s();!(u=d.n()).done;){var v=u.value,f=_.extend(a.data,i({},c,v)),h=this.findMatchingVariations(t,f);if(h.length>0){var p=h.shift(),m={};m.attribute_name=c,m.attribute_value=v,m.variation=p,o.push(m)}}}catch(t){d.e(t)}finally{d.f()}}}return o}},{key:"findMatchingVariations",value:function(t,e){for(var a=[],i=0;i<t.length;i++){var n=t[i];this.isMatch(n.attributes,e)&&a.push(n)}return a}},{key:"isMatch",value:function(t,e){var a=!0;for(var i in t)if(t.hasOwnProperty(i)){var n=t[i],o=e[i];void 0!==n&&void 0!==o&&0!==n.length&&0!==o.length&&n!==o&&(a=!1)}return a}},{key:"destroy",value:function(){this.$element.removeClass("wvs-loaded"),this.$element.removeData(this.name)}}])&&a(o.prototype,r),l&&a(o,l),Object.defineProperty(o,"prototype",{writable:!1}),t}()),c=function(e){return function(a,i){e.fn[a]=function(n){for(var o=this,r=arguments.length,s=new Array(r>1?r-1:0),l=1;l<r;l++)s[l-1]=arguments[l];return this.each((function(r,l){var c=e(l),u=c.data(a);if(u||(u=new i(c,e.extend({},n),a),c.data(a,u)),"string"==typeof n){if("object"===t(u[n]))return u[n];var d;if("function"==typeof u[n])return(d=u)[n].apply(d,s)}return o}))},e.fn[a].Constructor=i,e[a]=function(t){for(var i,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return(i=e({}))[a].apply(i,[t].concat(o))},e.fn[a].noConflict=function(){return e.fn[a]}}}(jQuery);c("WooVariationSwatches",l)}(window)}(),jQuery((function(t){try{t(document).on("woo_variation_swatches_init",(function(){t(".variations_form:not(.wvs-loaded)").WooVariationSwatches(),t(".woo_variation_swatches_variations_form:not(.wvs-loaded)").WooVariationSwatches(),t(".ywcp_inner_selected_container:not(.wvs-loaded)").WooVariationSwatches()}))}catch(t){window.console.log("Variation Swatches:",t)}t(document).on("wc_variation_form.wvs",(function(e){t(document).trigger("woo_variation_swatches_init")})),t(document).ajaxComplete((function(e,a,i){_.delay((function(){t(".variations_form:not(.wvs-loaded)").each((function(){t(this).wc_variation_form()}))}),1e3)})),t(document.body).on("wc-composite-initializing",".composite_data",(function(e,a){a.actions.add_action("component_options_state_changed",(function(e){t(e.$component_content).find(".variations_form").WooVariationSwatches("destroy")}))}))}));;
jQuery((function(a){"use strict";var e=a("body"),t=a(document).find("#yith-ywrq-table-list"),i=document.location.href;if(t.length>0&&ywraq_frontend.raq_table_refresh_check&&a.post(i,(function(e){if(""!==e){var t=a("<div></div>").html(e).find("#yith-ywrq-table-list");a("#yith-ywrq-table-list").html(t.html()),a(document).trigger("ywraq_table_reloaded")}})),e.hasClass("single-product")){var r=a(document).find(".near-add-to-cart"),n=a(document).find(".woocommerce-variation-add-to-cart");r.length>0&&n.length>0&&n.append(r);var d=a('[name|="product_id"]'),o=d.val(),s=a(".add-to-quote-"+o).find("a"),_=s.parents(".yith-ywraq-add-to-quote"),l=a('[name|="variation_id"]');l.on("change",(function(){""===a(this).val()?s.parent().hide().removeClass("show"):a.ajax({type:"POST",url:ywraq_frontend.ajaxurl,dataType:"json",data:"action=yith_ywraq_action&ywraq_action=variation_exist&variation_id="+l.val()+"&product_id="+d.val()+"&_wpnonce="+ywraq_frontend.yith_ywraq_action_nonce,success:function(e){!0===e.result?(s.parent().hide().removeClass("show"),0==a(".yith_ywraq_add_item_browse-list-"+d.val()).length&&(_.append('<div class="yith_ywraq_add_item_response-'+d.val()+' yith_ywraq_add_item_response_message">'+e.message+"</div>"),_.append('<div class="yith_ywraq_add_item_browse-list-'+d.val()+' yith_ywraq_add_item_browse_message"><a href="'+e.rqa_url+'">'+e.label_browse+"</a></div>"))):(a(".yith_ywraq_add_item_response-"+d.val()).remove(),a(".yith_ywraq_add_item_browse-list-"+d.val()).remove(),s.parent().show().addClass("show"))}})}))}a(document).on("click",".add-request-quote-button",(function(e){e.preventDefault();var t=a(this),i=t.parents(".yith-ywraq-add-to-quote"),r="ac",n=null,d=null;t.parents("ul.products").length>0?(n=t.parents("li.product").find('input[name="add-to-cart"]'),d=t.parents("li.product").find('input[name="product_id"]')):(n=t.parents(".product").find('input[name="add-to-cart"]'),d=t.parents(".product").find('input[name="product_id"]')),(n.length>0&&d.length>0||a(".cart").length>0)&&(r=a(".cart").serialize()),(r+="&action=yith_ywraq_action&ywraq_action=add_item&product_id="+t.data("product_id")+"&_wpnonce="+ywraq_frontend.yith_ywraq_action_nonce).indexOf("add-to-cart")>0&&(r=r.replace("add-to-cart","yith-add-to-cart")),a.ajax({type:"POST",url:ywraq_frontend.ajaxurl,dataType:"json",data:r,beforeSend:function(){t.siblings(".ajax-loading").css("visibility","visible")},complete:function(){t.siblings(".ajax-loading").css("visibility","hidden")},success:function(a){if("true"==a.result||"exists"==a.result)if("yes"===ywraq_frontend.go_to_the_list)window.location.href=a.rqa_url;else{t.parent().hide().removeClass("show").addClass("addedd");var e=void 0===d.val()?"":"-"+d.val();i.append('<div class="yith_ywraq_add_item_response'+e+' yith_ywraq_add_item_response_message">'+a.message+"</div>"),i.append('<div class="yith_ywraq_add_item_browse-list'+e+' yith_ywraq_add_item_browse_message"><a href="'+a.rqa_url+'">'+a.label_browse+"</a></div>")}else"false"==a.result&&i.append('<div class="yith_ywraq_add_item_response-'+d.val()+'">'+a.message+"</div>")}})})),a(document).on("click",".yith-ywraq-item-remove",(function(e){e.preventDefault();var t,i=a(this),r=i.data("remove-item");a("#yith-ywraq-form");t="action=yith_ywraq_action&ywraq_action=remove_item&key="+i.data("remove-item")+"&_wpnonce="+ywraq_frontend.yith_ywraq_action_nonce+"&product_id="+i.data("product_id"),a.ajax({type:"POST",url:ywraq_frontend.ajaxurl,dataType:"json",data:t,beforeSend:function(){i.siblings(".ajax-loading").css("visibility","visible")},complete:function(){i.siblings(".ajax-loading").css("visibility","hidden")},success:function(e){1===e&&(a("[data-remove-item='"+r+"']").parents(".cart_item").remove(),0===a(".cart_item").length&&(a("#yith-ywraq-form, #yith-ywraq-mail-form, .yith-ywraq-mail-form-wrapper").remove(),a("#yith-ywraq-message").text(ywraq_frontend.no_product_in_list)))}})})),a(document).find(".theme-yith-proteo.yith-request-a-quote-page .woocommerce-message").removeAttr("role")}));;
(function($){$(document).ready(function(){$(document.body).on('click','.single_add_to_cart_button',function(e){if($(this).hasClass('disabled')||$(this).hasClass('wc-variation-selection-needed')){return}
e.preventDefault();var $thisbutton=$(this),$form=$thisbutton.closest('form.cart'),id=$thisbutton.val(),product_qty=$form.find('input[name=quantity]').val()||1,product_id=$form.find('input[name=product_id]').val()||id,variation_id=$form.find('input[name=variation_id]').val()||0;var data={action:'woocommerce_ajax_add_to_cart',product_id:product_id,product_sku:'',quantity:product_qty,variation_id:variation_id,};$(document.body).trigger('adding_to_cart',[$thisbutton,data]);console.log(wc_add_to_cart_params);$.ajax({type:'post',url:wc_add_to_cart_params.ajax_url,data:data,beforeSend:function(response){$thisbutton.removeClass('added').addClass('loading')},complete:function(response){$thisbutton.addClass('added').removeClass('loading')},success:function(response){console.log(response);if(response.error&&response.product_url){window.location=response.product_url;return}else{if(wc_add_to_cart_params.cart_redirect_after_add==='yes'){window.location=wc_add_to_cart_params.cart_url}
$(document.body).trigger('added_to_cart',[response.fragments,response.cart_hash,$thisbutton])}},});return!1})})})(jQuery);
(function($){'use strict';function addCustomInputBox(){var decimal_separator=WCMMQ_DATA.decimal_separator;if(decimal_separator===','){$('input.input-text.qty.text').not('.wcmmq-second-input-box,.wcmmq-main-input-box').each(function(){$(this).addClass('wcmmq-main-input-box');var input_val=$(this).val();var val_with_coma=input_val.replace(/\./g,',');var parentQuantity=$(this).parents('.quantity');parentQuantity.addClass('wcmmq-coma-separator-activated');$(this).after('<input type="text" value="'+val_with_coma+'" class="wcmmq-second-input-box input-text qty text" id="wcmmq-second-input-id">')})}}
$(document).ajaxComplete(function(){setTimeout(addCustomInputBox,320)});$(document).ready(function(){var decimal_separator=WCMMQ_DATA.decimal_separator;var decimal_count=WCMMQ_DATA.decimal_count;if(typeof decimal_count!=='undefined'){decimal_count=parseInt(decimal_count)}else{decimal_count=2}
addCustomInputBox();$(document.body).on('keyup','.wcmmq-second-input-box',function(Event){var arrowPress=!1;if(typeof Event==='object'&&typeof Event.originalEvent==='object'){var originalEvent=Event.originalEvent;if(originalEvent.keyCode===38||originalEvent.code==='ArrowUp'){arrowPress='ArrowUp'}else if(originalEvent.keyCode===40||originalEvent.code==='ArrowDown'){arrowPress='ArrowDown'}}
if(!arrowPress){var parentQuantity=$(this).parents('.quantity');var secondInputVal=$(this).val();var secondValWithDot=secondInputVal.replace(/,/g,'.');parentQuantity.find('.wcmmq-main-input-box').val(secondValWithDot)}else{var secondInboxObject=$(this);Event.preventDefault();plusMinusOnArrowCalculate(arrowPress,secondInboxObject)}});function plusMinusOnArrowCalculate(type,secondInboxObject){var qty=secondInboxObject.closest('.wcmmq-coma-separator-activated').find('input.input-text.qty.text.wcmmq-main-input-box');var val=parseFloat(qty.val());var max=parseFloat(qty.attr("max"));var min=parseFloat(qty.attr("min"));var step=parseFloat(qty.attr("step"));console.log(min,val,max,step);if(type==='ArrowUp'){if(val===max){return!1}
if(isNaN(val)){qty.val(step).trgger('change');return!1}
qty.val(val+step)}else if(type==='ArrowDown'){if(val===min){return!1}
if(isNaN(val)){qty.val(min).trgger('change');return!1}
if(val-step<min){qty.val(min)}else{qty.val(val-step)}}
qty.val(Math.round(qty.val()*100000)/100000);qty.trigger("change")}
function CheckDecimal(inputtxt){if(!/^[-+]?[0-9]+\.[0-9]+$/.test(inputtxt)){return!0}else{return!1}}
var qty_box,qty_box_selector,qty_value,formatted_value;qty_box_selector='.qib-button-wrapper .quantity input.input-text.qty.text, .single-product div.product form.cart .quantity input[type=number], .single-product div.product form.cart .quantity input[type=number]';$(document.body).on('change',qty_box_selector,function(){qty_value=$(this).val();if(decimal_separator===','){qty_value=qty_value.replace(/\./g,',')}
$(this).parents('.quantity').find('.wcmmq-second-input-box').val(qty_value)})})})(jQuery);
( function( $ ) {

	/**
	* Search widget JS
	*/

	var WidgethfeSearchButton = function( $scope, $ ){

		if ( 'undefined' == typeof $scope )
			return;

			var $input = $scope.find( "input.hfe-search-form__input" );
			var $clear = $scope.find( "button#clear" );
			var $clear_with_button = $scope.find( "button#clear-with-button" );
			var $search_button = $scope.find( ".hfe-search-submit" );
			var $toggle_search = $scope.find( ".hfe-search-icon-toggle input" );

		$scope.find( '.hfe-search-icon-toggle' ).on( 'click', function( ){
			$scope.find( ".hfe-search-form__input" ).trigger( 'focus' );						
		});	
		
		$scope.find( ".hfe-search-form__input" ).on( 'focus', function(){
			$scope.find( ".hfe-search-button-wrapper" ).addClass( "hfe-input-focus" );
		});

		$scope.find( ".hfe-search-form__input" ).blur( function() {
			$scope.find( ".hfe-search-button-wrapper" ).removeClass( "hfe-input-focus" );
		});
  		   

		$search_button.on( 'touchstart click', function(){
			$input.submit();
		});

		$toggle_search.css( 'padding-right', $toggle_search.next().outerWidth() + 'px' );

	
		$input.on( 'keyup', function(){
			$clear.style = (this.value.length) ? $clear.css('visibility','visible'): $clear.css('visibility','hidden');
			$clear_with_button.style = (this.value.length) ? $clear_with_button.css('visibility','visible'): $clear_with_button.css('visibility','hidden');
			$clear_with_button.css( 'right', $search_button.outerWidth() + 'px' );
		});

		$clear.on("click",function(){
			this.style = $clear.css('visibility','hidden');
			$input.value = "";
		});
		$clear_with_button.on("click",function(){
			this.style = $clear_with_button.css('visibility','hidden');
			$input.value = "";
		});
		
	};
		/**
	 * Nav Menu handler Function.
	 *
	 */
	var WidgethfeNavMenuHandler = function( $scope, $ ) {

		if ( 'undefined' == typeof $scope )
			return;
		
		var id = $scope.data( 'id' );
		var wrapper = $scope.find('.elementor-widget-hfe-nav-menu ');		
		var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );
		var flyout_data = $( '.elementor-element-' + id + ' .hfe-flyout-wrapper' ).data( 'flyout-class' );
		var last_item = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'last-item' );
		var last_item_flyout = $( '.elementor-element-' + id + ' .hfe-flyout-wrapper' ).data( 'last-item' );

		var menu_items_links        = $( '.elementor-element-' + id + ' .hfe-nav-menu nav li a' );
		var menu_items_links_flyout = $( '.elementor-element-' + id + ' .hfe-flyout-wrapper li a' );
		if (menu_items_links.length > 0) {
			_handle_current_menu_item_class( menu_items_links );
		}

		if (menu_items_links_flyout.length > 0) {
			_handle_current_menu_item_class( menu_items_links_flyout );
		}

		$( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );

		_toggleClick( id );

		_handlePolylangSwitcher( $scope );

		_handleSinglePageMenu( id, layout );

		if( 'horizontal' !== layout ){

			_eventClick( id );
		}else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches ) {

			_eventClick( id );
		}else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {

			_eventClick( id );
		}

		$( '.elementor-element-' + id + ' .hfe-flyout-trigger .hfe-nav-menu-icon' ).off( 'click keyup' ).on( 'click keyup', function() {

			_openMenu( id );
		} );

		$( '.elementor-element-' + id + ' .hfe-flyout-close' ).off( 'click keyup' ).on( 'click keyup', function() {

			_closeMenu( id );
		} );

		$( '.elementor-element-' + id + ' .hfe-flyout-overlay' ).off( 'click' ).on( 'click', function() {

			_closeMenu( id );
		} );	


		$scope.find( '.sub-menu' ).each( function() {

			var parent = $( this ).closest( '.menu-item' );

			$scope.find( parent ).addClass( 'parent-has-child' );
			$scope.find( parent ).removeClass( 'parent-has-no-child' );
		});

		if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
			$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().addClass( 'elementor-button-wrapper' );
			$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).addClass( 'elementor-button' );			
		}

		_borderClass( id );	

		$( window ).on( 'resize', function(){ 

			if( 'horizontal' !== layout ) {

				_eventClick( id );
			}else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches ) {

				_eventClick( id );
			}else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {

				_eventClick( id );
			}

			if( 'horizontal' == layout && window.matchMedia( "( min-width: 977px )" ).matches){

				$( '.elementor-element-' + id + ' div.hfe-has-submenu-container' ).next().css( 'position', 'absolute');	
			}

			if( 'expandible' == layout || 'flyout' == layout ){

				_toggleClick( id );
			}else if ( 'vertical' == layout || 'horizontal' == layout ) {
				if( window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))){

					_toggleClick( id );					
				}else if ( window.matchMedia( "( max-width: 1024px )" ).matches && $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {
					
					_toggleClick( id );
				}
			}

			_borderClass( id );	

		});

        // Acessibility functions

  		$scope.find( '.parent-has-child .hfe-has-submenu-container a').attr( 'aria-haspopup', 'true' );
  		$scope.find( '.parent-has-child .hfe-has-submenu-container a').attr( 'aria-expanded', 'false' );

		var hef_navmenu_toggle = $scope.find( '.hfe-nav-menu__toggle' );
		hef_navmenu_toggle.attr( 'aria-haspopup', 'true' );
		hef_navmenu_toggle.attr( 'aria-expanded', 'false' );

		if ( window.matchMedia( "( max-width: 1024px )" ).matches && $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {
			hef_navmenu_toggle.find('i').attr('aria-hidden', 'false');
		}
		if ( window.matchMedia( "( max-width: 768px )" ).matches && $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') ) {
			hef_navmenu_toggle.find('i').attr('aria-hidden', 'false');
		}

  		// End of accessibility functions

		$( document ).trigger( 'hfe_nav_menu_init', id );

		$( '.elementor-element-' + id + ' div.hfe-has-submenu-container' ).on( 'keyup', function(e){

			var $this = $( this );

		  	if( $this.parent().hasClass( 'menu-active' ) ) {

		  		$this.parent().removeClass( 'menu-active' );

		  		$this.parent().next().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
		  		$this.parent().prev().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );

		  		$this.parent().next().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );
		  		$this.parent().prev().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );
			}else { 

				$this.parent().next().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
		  		$this.parent().prev().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );

		  		$this.parent().next().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );
		  		$this.parent().prev().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );

				$this.parent().siblings().find( '.hfe-has-submenu-container a' ).attr( 'aria-expanded', 'false' );

				$this.parent().next().removeClass( 'menu-active' );
		  		$this.parent().prev().removeClass( 'menu-active' );

				event.preventDefault();

				$this.parent().addClass( 'menu-active' );

				if( 'horizontal' !== layout ){
					$this.addClass( 'sub-menu-active' );	
				}
				
				$this.find( 'a' ).attr( 'aria-expanded', 'true' );

				$this.next().css( { 'visibility': 'visible', 'opacity': '1', 'height': 'auto' } );

				if ( 'horizontal' !== layout ) {
						
		  			$this.next().css( 'position', 'relative');			
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
										
  					$this.next().css( 'position', 'relative');		  					
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {
					
  					if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {

  						$this.next().css( 'position', 'relative');	
  					} else if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-none') ) {
  						
  						$this.next().css( 'position', 'absolute');	
  					}
  				}		
			}
		});

		$( '.elementor-element-' + id + ' li.menu-item' ).on( 'keyup', function(e){
			var $this = $( this );

	 		$this.next().find( 'a' ).attr( 'aria-expanded', 'false' );
	 		$this.prev().find( 'a' ).attr( 'aria-expanded', 'false' );
	  		
	  		$this.next().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
	  		$this.prev().find('ul').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
	  		
	  		$this.siblings().removeClass( 'menu-active' );
	  		$this.next().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );
		  	$this.prev().find( 'div.hfe-has-submenu-container' ).removeClass( 'sub-menu-active' );
		  		
		});
	};

	function _handle_current_menu_item_class( layout_links ) {
		layout_links.each(
			function () {
				var $this = $( this );
				if ($this.is( '[href*="#"]' )) {
					var menu_item_parent = $this.parent();
					menu_item_parent.removeClass( 'current-menu-item current-menu-ancestor' );
					$this.click(
						function () {
							var current_index  = menu_item_parent.index(),
								parent_element = $this.closest( 'ul' );
							parent_element.find( 'li' ).not( ':eq(' + current_index + ')' ).removeClass( 'current-menu-item current-menu-ancestor' );
							menu_item_parent.addClass( 'current-menu-item current-menu-ancestor' );
						}
					)
				}
			}
		);
	}

	function _openMenu( id ) {

		var flyout_content = $( '#hfe-flyout-content-id-' + id );
		var layout = $( '#hfe-flyout-content-id-' + id ).data( 'layout' );
		var layout_type = $( '#hfe-flyout-content-id-' + id ).data( 'flyout-type' );
		var wrap_width = flyout_content.width() + 'px';
		var container = $( '.elementor-element-' + id + ' .hfe-flyout-container .hfe-side.hfe-flyout-' + layout );

		$( '.elementor-element-' + id + ' .hfe-flyout-overlay' ).fadeIn( 100 );

		if( 'left' == layout ) {

			$( 'body' ).css( 'margin-left' , '0' );
			container.css( 'left', '0' );

			if( 'push' == layout_type ) {

				$( 'body' ).addClass( 'hfe-flyout-animating' ).css({ 
					position: 'absolute',
					width: '100%',
					'margin-left' : wrap_width,
					'margin-right' : 'auto'
				});
			}	

			container.addClass( 'hfe-flyout-show' );	
		} else {

			$( 'body' ).css( 'margin-right', '0' );
			container.css( 'right', '0' );

			if( 'push' == layout_type ) {

				$( 'body' ).addClass( 'hfe-flyout-animating' ).css({ 
					position: 'absolute',
					width: '100%',
					'margin-left' : '-' + wrap_width,
					'margin-right' : 'auto',
				});
			}

			container.addClass( 'hfe-flyout-show' );
		}		
	}

	function _closeMenu( id ) {

		var flyout_content = $( '#hfe-flyout-content-id-' + id );
		var layout    = $( '#hfe-flyout-content-id-' + id ).data( 'layout' );
		var wrap_width = flyout_content.width() + 'px';
		var layout_type = $( '#hfe-flyout-content-id-' + id ).data( 'flyout-type' );
		var container = $( '.elementor-element-' + id + ' .hfe-flyout-container .hfe-side.hfe-flyout-' + layout );

		$( '.elementor-element-' + id + ' .hfe-flyout-overlay' ).fadeOut( 100 );	

		if( 'left' == layout ) {

			container.css( 'left', '-' + wrap_width );

			if( 'push' == layout_type ) {

				$( 'body' ).css({ 
					position: '',
					'margin-left' : '',
					'margin-right' : '',
				});

				setTimeout( function() {
					$( 'body' ).removeClass( 'hfe-flyout-animating' ).css({ 
						width: '',
					});
				});
			}	

			container.removeClass( 'hfe-flyout-show' );					
		} else {
			container.css( 'right', '-' + wrap_width );
			
			if( 'push' == layout_type ) {

				$( 'body' ).css({
					position: '',
					'margin-right' : '',
					'margin-left' : '',
				});

				setTimeout( function() {
					$( 'body' ).removeClass( 'hfe-flyout-animating' ).css({ 
						width: '',
					});
				});
			}
			container.removeClass( 'hfe-flyout-show' );
		}	
	}

	function _eventClick( id ){

		var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );

		$( '.elementor-element-' + id + ' div.hfe-has-submenu-container' ).off( 'click' ).on( 'click', function( event ) {

			var $this = $( this );

			if( $( '.elementor-element-' + id ).hasClass( 'hfe-link-redirect-child' ) ) {

				if( $this.hasClass( 'sub-menu-active' ) ) {

					if( ! $this.next().hasClass( 'sub-menu-open' ) ) {

						$this.find( 'a' ).attr( 'aria-expanded', 'false' );

						if( 'horizontal' !== layout ){

							event.preventDefault();

							$this.next().css( 'position', 'relative' );	
						} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
							
							event.preventDefault();

							$this.next().css( 'position', 'relative' );	
						} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches && ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
							
							event.preventDefault();	

							$this.next().css( 'position', 'relative' );	
						}	
					
						$this.removeClass( 'sub-menu-active' );
						$this.nextAll('.sub-menu').removeClass( 'sub-menu-open' );
						$this.nextAll('.sub-menu').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
						$this.nextAll('.sub-menu').css( { 'transition': 'none'} );
					} else{

						$this.find( 'a' ).attr( 'aria-expanded', 'false' );
						
						$this.removeClass( 'sub-menu-active' );
						$this.nextAll('.sub-menu').removeClass( 'sub-menu-open' );
						$this.nextAll('.sub-menu').css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );
						$this.nextAll('.sub-menu').css( { 'transition': 'none'} );

						if ( 'horizontal' !== layout ){

							$this.next().css( 'position', 'relative' );
						} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
							
							$this.next().css( 'position', 'relative' );	
							
						} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches && ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
							
							$this.next().css( 'position', 'absolute' );				
						}	  								
					}		  											
				} else {

					$this.find( 'a' ).attr( 'aria-expanded', 'true' );
					if ( 'horizontal' !== layout ) {
						
						event.preventDefault();
						$this.next().css( 'position', 'relative');			
					} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
						
						event.preventDefault();
						$this.next().css( 'position', 'relative');		  					
					} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {
						event.preventDefault();

						if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {

							$this.next().css( 'position', 'relative');	
						} else if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-none') ) {
							
							$this.next().css( 'position', 'absolute');	
						}
					}	
							
					$this.addClass( 'sub-menu-active' );
					$this.nextAll('.sub-menu').addClass( 'sub-menu-open' );
					$this.nextAll('.sub-menu').css( { 'visibility': 'visible', 'opacity': '1', 'height': 'auto' } );
					$this.nextAll('.sub-menu').css( { 'transition': '0.3s ease'} );
				}
			}
		});

		$( '.elementor-element-' + id + ' .hfe-menu-toggle' ).off( 'click keyup' ).on( 'click keyup',function( event ) {

			var $this = $( this );

		  	if( $this.parent().parent().hasClass( 'menu-active' ) ) {

	  			event.preventDefault();

				$this.parent().parent().removeClass( 'menu-active' );
				$this.parent().parent().next().css( { 'visibility': 'hidden', 'opacity': '0', 'height': '0' } );

				if ( 'horizontal' !== layout ) {
						
		  			$this.parent().parent().next().css( 'position', 'relative');			
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
										
  					$this.parent().parent().next().css( 'position', 'relative');		  					
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {
					
  					if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {

  						$this.parent().parent().next().css( 'position', 'relative');	
  					} else if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-none') ) {
  						
  						$this.parent().parent().next().css( 'position', 'absolute');	
  					}
  				}
			}else { 

				event.preventDefault();

				$this.parent().parent().addClass( 'menu-active' );

				$this.parent().parent().next().css( { 'visibility': 'visible', 'opacity': '1', 'height': 'auto' } );

				if ( 'horizontal' !== layout ) {
						
		  			$this.parent().parent().next().css( 'position', 'relative');			
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 767px )" ).matches && ($( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile'))) {
										
  					$this.parent().parent().next().css( 'position', 'relative');		  					
				} else if ( 'horizontal' === layout && window.matchMedia( "( max-width: 1024px )" ).matches ) {
					
  					if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {

  						$this.parent().parent().next().css( 'position', 'relative');	
  					} else if ( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-none') ) {
  						
  						$this.parent().parent().next().css( 'position', 'absolute');	
  					}
  				}		
			}
		});
	}

	function _borderClass( id ){

		var last_item = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'last-item' );
		var last_item_flyout = $( '.elementor-element-' + id + ' .hfe-flyout-wrapper' ).data( 'last-item' );
		var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );

		$( '.elementor-element-' + id + ' nav').removeClass('hfe-dropdown');

		if ( window.matchMedia( "( max-width: 767px )" ).matches ) {

			if( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-mobile') || $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet')){
				
				$( '.elementor-element-' + id + ' nav').addClass('hfe-dropdown');
				if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().removeClass( 'elementor-button-wrapper' );
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).removeClass( 'elementor-button' );	
				}	
			}else{
				
				$( '.elementor-element-' + id + ' nav').removeClass('hfe-dropdown');
				if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().addClass( 'elementor-button-wrapper' );
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).addClass( 'elementor-button' );	
				}
			}
		}else if ( window.matchMedia( "( max-width: 1024px )" ).matches ) {

			if( $( '.elementor-element-' + id ).hasClass('hfe-nav-menu__breakpoint-tablet') ) {
				
				$( '.elementor-element-' + id + ' nav').addClass('hfe-dropdown');
				if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().removeClass( 'elementor-button-wrapper' );
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).removeClass( 'elementor-button' );	
				}
			}else{
				
				$( '.elementor-element-' + id + ' nav').removeClass('hfe-dropdown');
				if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().addClass( 'elementor-button-wrapper' );
					$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).addClass( 'elementor-button' );
				}
			}
		}else {
			var $parent_element = $( '.elementor-element-' + id );
			$parent_element.find( 'nav').removeClass( 'hfe-dropdown' );
			if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
				$parent_element.find( 'li.menu-item:last-child a.hfe-menu-item' ).parent().addClass( 'elementor-button-wrapper' );
				$parent_element.find( 'li.menu-item:last-child a.hfe-menu-item' ).addClass( 'elementor-button' );
			}
		}

		var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );
		if( 'expandible' == layout ){
			if( ( 'cta' == last_item || 'cta' == last_item_flyout ) && 'expandible' != layout ){
				$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).parent().removeClass( 'elementor-button-wrapper' );
				$( '.elementor-element-' + id + ' li.menu-item:last-child a.hfe-menu-item' ).removeClass( 'elementor-button' );			
			}			
		}
	}

	function _toggleClick( id ){

		if ( $( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).hasClass( 'hfe-active-menu-full-width' ) ){

			$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).next().css( 'left', '0' );

			var width = $( '.elementor-element-' + id ).closest('.elementor-section').outerWidth();
			var sec_pos = $( '.elementor-element-' + id ).closest('.elementor-section').offset().left - $( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).next().offset().left;
			$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).next().css( 'width', width + 'px' );
			$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).next().css( 'left', sec_pos + 'px' );
		}

		$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).off( 'click keyup' ).on( 'click keyup', function( event ) {

			var $this = $( this );
			var $selector = $this.next();

			if ( $this.hasClass( 'hfe-active-menu' ) ) {

				var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );
				var full_width = $selector.data( 'full-width' );
				var toggle_icon = $( '.elementor-element-' + id + ' nav' ).data( 'toggle-icon' );

				$( '.elementor-element-' + id).find( '.hfe-nav-menu-icon' ).html( toggle_icon );

				$this.removeClass( 'hfe-active-menu' );
				$this.attr( 'aria-expanded', 'false' );
				
				if ( 'yes' == full_width ){

					$this.removeClass( 'hfe-active-menu-full-width' );
				
					$selector.css( 'width', 'auto' );
					$selector.css( 'left', '0' );
					$selector.css( 'z-index', '0' );
				}				
			} else {

				var layout = $( '.elementor-element-' + id + ' .hfe-nav-menu' ).data( 'layout' );
				var full_width = $selector.data( 'full-width' );
				var close_icon = $( '.elementor-element-' + id + ' nav' ).data( 'close-icon' );

				$( '.elementor-element-' + id).find( '.hfe-nav-menu-icon' ).html( close_icon );
				
				$this.addClass( 'hfe-active-menu' );
				$this.attr( 'aria-expanded', 'true' );

				if ( 'yes' == full_width ){

					$this.addClass( 'hfe-active-menu-full-width' );

					var width = $( '.elementor-element-' + id ).closest('.elementor-section').outerWidth();
					var sec_pos = $( '.elementor-element-' + id ).closest('.elementor-section').offset().left - $selector.offset().left;
				
					$selector.css( 'width', width + 'px' );
					$selector.css( 'left', sec_pos + 'px' );
					$selector.css( 'z-index', '9999' );
				}
			}

			if( $( '.elementor-element-' + id + ' nav' ).hasClass( 'menu-is-active' ) ) {

				$( '.elementor-element-' + id + ' nav' ).removeClass( 'menu-is-active' );
			}else {

				$( '.elementor-element-' + id + ' nav' ).addClass( 'menu-is-active' );
			}				
		} );
	}

	function _handleSinglePageMenu( id, layout ) {
		$( '.elementor-element-' + id + ' ul.hfe-nav-menu li a' ).on(
			'click',
			function () {
				var $this = $( this );
				var link  = $this.attr( 'href' );
				var linkValue = '';
				if ( link.includes( '#' ) ) {
					var index     = link.indexOf( '#' );
					linkValue = link.slice( index + 1 );
				}
				if ( linkValue.length > 0 ) {
					if ( 'expandible' == layout ) {
						$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).trigger( "click" );
						if ($this.hasClass( 'hfe-sub-menu-item' )) {
							$( '.elementor-element-' + id + ' .hfe-menu-toggle' ).trigger( "click" );
						}
					} else {
						if ( window.matchMedia( '(max-width: 1024px)' ).matches && ( 'horizontal' == layout || 'vertical' == layout ) ) {
							$( '.elementor-element-' + id + ' .hfe-nav-menu__toggle' ).trigger( "click" );
							if ($this.hasClass( 'hfe-sub-menu-item' )) {
								$( '.elementor-element-' + id + ' .hfe-menu-toggle' ).trigger( "click" );
							}
						} else {
							if ($this.hasClass( 'hfe-sub-menu-item' )) {
								_closeMenu( id );
								$( '.elementor-element-' + id + ' .hfe-menu-toggle' ).trigger( "click" );
							}
							_closeMenu( id );
						}
					}
				}
			}
		);
	}

	/**
	 * This function handles polylang plugin's lang switcher if present in the menu.
	 *
	 * @param {Object} $scope The current element(hfe nav menu) wrapped with jQuery.
	 */
	function _handlePolylangSwitcher( $scope ) {
		var polylangSwitcher = $scope.find( '.hfe-nav-menu nav .pll-parent-menu-item a.hfe-menu-item' );
		var hrefProperty     = polylangSwitcher.prop( 'href' );
		if ( undefined !== hrefProperty && hrefProperty.includes( '#' ) ) {
			var index = hrefProperty.indexOf( '#' );
			var value = hrefProperty.slice( index );
			if ( value === '#pll_switcher' ) {
				polylangSwitcher.prop( 'href', '#' );
			}
		}
	}

	$( window ).on( 'elementor/frontend/init', function () {

		elementorFrontend.hooks.addAction( 'frontend/element_ready/navigation-menu.default', WidgethfeNavMenuHandler );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/hfe-search-button.default', WidgethfeSearchButton );
	});
} )( jQuery );
;
/*! elementor - v3.13.3 - 28-05-2023 */
(()=>{"use strict";var e,r,_,t,i,a={},n={};function __webpack_require__(e){var r=n[e];if(void 0!==r)return r.exports;var _=n[e]={exports:{}};return a[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=a,e=[],__webpack_require__.O=(r,_,t,i)=>{if(!_){var a=1/0;for(u=0;u<e.length;u++){for(var[_,t,i]=e[u],n=!0,c=0;c<_.length;c++)(!1&i||a>=i)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[c])))?_.splice(c--,1):(n=!1,i<a&&(a=i));if(n){e.splice(u--,1);var o=t();void 0!==o&&(r=o)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[_,t,i]},_=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var i=Object.create(null);__webpack_require__.r(i);var a={};r=r||[null,_({}),_([]),_(_)];for(var n=2&t&&e;"object"==typeof n&&!~r.indexOf(n);n=_(n))Object.getOwnPropertyNames(n).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,__webpack_require__.d(i,a),i},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,_)=>(__webpack_require__.f[_](e,r),r)),[])),__webpack_require__.u=e=>723===e?"lightbox.db6cea8ed8ffdf265764.bundle.min.js":48===e?"text-path.b50b3e74488a4e302613.bundle.min.js":209===e?"accordion.8799675460c73eb48972.bundle.min.js":745===e?"alert.cbc2a0fee74ee3ed0419.bundle.min.js":120===e?"counter.02cef29c589e742d4c8c.bundle.min.js":192===e?"progress.ca55d33bb06cee4e6f02.bundle.min.js":520===e?"tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js":181===e?"toggle.31881477c45ff5cf9d4d.bundle.min.js":791===e?"video.d86bfd0676264945e968.bundle.min.js":268===e?"image-carousel.4455c6362492d9067512.bundle.min.js":357===e?"text-editor.2c35aafbe5bf0e127950.bundle.min.js":52===e?"wp-audio.75f0ced143febb8cd31a.bundle.min.js":413===e?"container.3e03f0b480c65f79dee6.bundle.min.js":void 0,__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},i="elementor:",__webpack_require__.l=(e,r,_,a)=>{if(t[e])t[e].push(r);else{var n,c;if(void 0!==_)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var b=o[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==i+_){n=b;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",i+_),n.src=e),t[e]=[r];var onScriptComplete=(r,_)=>{n.onerror=n.onload=null,clearTimeout(p);var i=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),i&&i.forEach((e=>e(_))),r)return r(_)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=onScriptComplete.bind(null,n.onerror),n.onload=onScriptComplete.bind(null,n.onload),c&&document.head.appendChild(n)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");_.length&&(e=_[_.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={162:0};__webpack_require__.f.j=(r,_)=>{var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)_.push(t[2]);else if(162!=r){var i=new Promise(((_,i)=>t=e[r]=[_,i]));_.push(t[2]=i);var a=__webpack_require__.p+__webpack_require__.u(r),n=new Error;__webpack_require__.l(a,(_=>{if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var i=_&&("load"===_.type?"missing":_.type),a=_&&_.target&&_.target.src;n.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",n.name="ChunkLoadError",n.type=i,n.request=a,t[1](n)}}),"chunk-"+r,r)}else e[r]=0},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,_)=>{var t,i,[a,n,c]=_,o=0;if(a.some((r=>0!==e[r]))){for(t in n)__webpack_require__.o(n,t)&&(__webpack_require__.m[t]=n[t]);if(c)var u=c(__webpack_require__)}for(r&&r(_);o<a.length;o++)i=a[o],__webpack_require__.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return __webpack_require__.O(u)},r=self.webpackChunkelementor=self.webpackChunkelementor||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})()})();;
/*! elementor - v3.13.3 - 28-05-2023 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[354],{381:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e,t)=>{t=Array.isArray(t)?t:[t];for(const n of t)if(e.constructor.name===n.prototype[Symbol.toStringTag])return!0;return!1}},8135:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{elements:".elementor-element",nestedDocumentElements:".elementor .elementor-element"},classes:{editMode:"elementor-edit-mode"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$elements:this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))}}getDocumentSettings(e){let t;if(this.isEdit){t={};const e=elementor.settings.page.model;jQuery.each(e.getActiveControls(),(n=>{t[n]=e.attributes[n]}))}else t=this.$element.data("elementor-settings")||{};return this.getItems(t,e)}runElementsHandlers(){this.elements.$elements.each(((e,t)=>setTimeout((()=>elementorFrontend.elementsHandler.runReadyTrigger(t)))))}onInit(){this.$element=this.getSettings("$element"),super.onInit(),this.isEdit=this.$element.hasClass(this.getSettings("classes.editMode")),this.isEdit?elementor.on("document:loaded",(()=>{elementor.settings.page.model.on("change",this.onSettingsChange.bind(this))})):this.runElementsHandlers()}onSettingsChange(){}}t.default=_default},1292:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(2821));class CarouselHandlerBase extends i.default{getDefaultSettings(){return{selectors:{carousel:`.${elementorFrontend.config.swiperClass}`,slideContent:".swiper-slide"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$swiperContainer:this.$element.find(e.carousel)};return t.$slides=t.$swiperContainer.find(e.slideContent),t}getSwiperSettings(){const e=this.getElementSettings(),t=+e.slides_to_show||3,n=1===t,r=elementorFrontend.config.responsive.activeBreakpoints,i={mobile:1,tablet:n?1:2},s={slidesPerView:t,loop:"yes"===e.infinite,speed:e.speed,handleElementorBreakpoints:!0,breakpoints:{}};let o=t;Object.keys(r).reverse().forEach((t=>{const n=i[t]?i[t]:o;s.breakpoints[r[t].value]={slidesPerView:+e["slides_to_show_"+t]||n,slidesPerGroup:+e["slides_to_scroll_"+t]||1},e.image_spacing_custom&&(s.breakpoints[r[t].value].spaceBetween=this.getSpaceBetween(t)),o=+e["slides_to_show_"+t]||n})),"yes"===e.autoplay&&(s.autoplay={delay:e.autoplay_speed,disableOnInteraction:"yes"===e.pause_on_interaction}),n?(s.effect=e.effect,"fade"===e.effect&&(s.fadeEffect={crossFade:!0})):s.slidesPerGroup=+e.slides_to_scroll||1,e.image_spacing_custom&&(s.spaceBetween=this.getSpaceBetween());const a="arrows"===e.navigation||"both"===e.navigation,l="dots"===e.navigation||"both"===e.navigation;return a&&(s.navigation={prevEl:".elementor-swiper-button-prev",nextEl:".elementor-swiper-button-next"}),l&&(s.pagination={el:".swiper-pagination",type:"bullets",clickable:!0}),"yes"===e.lazyload&&(s.lazy={loadPrevNext:!0,loadPrevNextAmount:1}),s}async onInit(){if(super.onInit(...arguments),!this.elements.$swiperContainer.length||2>this.elements.$slides.length)return;const e=elementorFrontend.utils.swiper;this.swiper=await new e(this.elements.$swiperContainer,this.getSwiperSettings()),this.elements.$swiperContainer.data("swiper",this.swiper);"yes"===this.getElementSettings().pause_on_hover&&this.togglePauseOnHover(!0)}updateSwiperOption(e){const t=this.getElementSettings()[e],n=this.swiper.params;switch(e){case"autoplay_speed":n.autoplay.delay=t;break;case"speed":n.speed=t}this.swiper.update()}getChangeableProperties(){return{pause_on_hover:"pauseOnHover",autoplay_speed:"delay",speed:"speed",arrows_position:"arrows_position"}}onElementChange(e){if(0===e.indexOf("image_spacing_custom"))return void this.updateSpaceBetween(e);if(this.getChangeableProperties()[e])if("pause_on_hover"===e){const e=this.getElementSettings("pause_on_hover");this.togglePauseOnHover("yes"===e)}else this.updateSwiperOption(e)}onEditSettingsChange(e){"activeItemIndex"===e&&this.swiper.slideToLoop(this.getEditSettings("activeItemIndex")-1)}getSpaceBetween(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"image_spacing_custom","size",e)||0}updateSpaceBetween(e){const t=e.match("image_spacing_custom_(.*)"),n=t?t[1]:"desktop",r=this.getSpaceBetween(n);"desktop"!==n&&(this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[n].value].spaceBetween=r),this.swiper.params.spaceBetween=r,this.swiper.update()}}t.default=CarouselHandlerBase},2821:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(3090));class SwiperHandlerBase extends i.default{getInitialSlide(){const e=this.getEditSettings();return e.activeItemIndex?e.activeItemIndex-1:0}getSlidesCount(){return this.elements.$slides.length}togglePauseOnHover(e){e?this.elements.$swiperContainer.on({mouseenter:()=>{this.swiper.autoplay.stop()},mouseleave:()=>{this.swiper.autoplay.start()}}):this.elements.$swiperContainer.off("mouseenter mouseleave")}handleKenBurns(){const e=this.getSettings();this.$activeImageBg&&this.$activeImageBg.removeClass(e.classes.kenBurnsActive),this.activeItemIndex=this.swiper?this.swiper.activeIndex:this.getInitialSlide(),this.swiper?this.$activeImageBg=jQuery(this.swiper.slides[this.activeItemIndex]).children("."+e.classes.slideBackground):this.$activeImageBg=jQuery(this.elements.$slides[0]).children("."+e.classes.slideBackground),this.$activeImageBg.addClass(e.classes.kenBurnsActive)}}t.default=SwiperHandlerBase},3090:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({$element:null,editorListeners:null,onElementChange:null,onEditSettingsChange:null,onPageSettingsChange:null,isEdit:null,__construct(e){this.isActive(e)&&(this.$element=e.$element,this.isEdit=this.$element.hasClass("elementor-element-edit-mode"),this.isEdit&&this.addEditorListeners())},isActive:()=>!0,isElementInTheCurrentDocument(){return!!elementorFrontend.isEditMode()&&elementor.documents.currentDocument.id.toString()===this.$element[0].closest(".elementor").dataset.elementorId},findElement(e){var t=this.$element;return t.find(e).filter((function(){return jQuery(this).parent().closest(".elementor-element").is(t)}))},getUniqueHandlerID(e,t){return e||(e=this.getModelCID()),t||(t=this.$element),e+t.attr("data-element_type")+this.getConstructorID()},initEditorListeners(){var e=this;if(e.editorListeners=[{event:"element:destroy",to:elementor.channels.data,callback(t){t.cid===e.getModelCID()&&e.onDestroy()}}],e.onElementChange){const t=e.getWidgetType()||e.getElementType();let n="change";"global"!==t&&(n+=":"+t),e.editorListeners.push({event:n,to:elementor.channels.editor,callback(t,n){e.getUniqueHandlerID(n.model.cid,n.$el)===e.getUniqueHandlerID()&&e.onElementChange(t.model.get("name"),t,n)}})}e.onEditSettingsChange&&e.editorListeners.push({event:"change:editSettings",to:elementor.channels.editor,callback(t,n){if(n.model.cid!==e.getModelCID())return;const r=Object.keys(t.changed)[0];e.onEditSettingsChange(r,t.changed[r])}}),["page"].forEach((function(t){var n="on"+t[0].toUpperCase()+t.slice(1)+"SettingsChange";e[n]&&e.editorListeners.push({event:"change",to:elementor.settings[t].model,callback(t){e[n](t.changed)}})}))},getEditorListeners(){return this.editorListeners||this.initEditorListeners(),this.editorListeners},addEditorListeners(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.addListenerOnce(e,t.event,t.callback,t.to)}))},removeEditorListeners(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.removeListeners(e,t.event,null,t.to)}))},getElementType(){return this.$element.data("element_type")},getWidgetType(){const e=this.$element.data("widget_type");if(e)return e.split(".")[0]},getID(){return this.$element.data("id")},getModelCID(){return this.$element.data("model-cid")},getElementSettings(e){let t={};const n=this.getModelCID();if(this.isEdit&&n){const e=elementorFrontend.config.elements.data[n],r=e.attributes;let i=r.widgetType||r.elType;r.isInner&&(i="inner-"+i);let s=elementorFrontend.config.elements.keys[i];s||(s=elementorFrontend.config.elements.keys[i]=[],jQuery.each(e.controls,((e,t)=>{t.frontend_available&&s.push(e)}))),jQuery.each(e.getActiveControls(),(function(e){if(-1!==s.indexOf(e)){let n=r[e];n.toJSON&&(n=n.toJSON()),t[e]=n}}))}else t=this.$element.data("settings")||{};return this.getItems(t,e)},getEditSettings(e){var t={};return this.isEdit&&(t=elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),this.getItems(t,e)},getCurrentDeviceSetting(e){return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(),e)},onInit(){this.isActive(this.getSettings())&&elementorModules.ViewModule.prototype.onInit.apply(this,arguments)},onDestroy(){this.isEdit&&this.removeEditorListeners(),this.unbindEvents&&this.unbindEvents()}})},2263:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(3090));class StretchedElement extends i.default{getStretchedClass(){return"e-stretched"}getStretchSettingName(){return"stretch_element"}getStretchActiveValue(){return"yes"}bindEvents(){const e=this.getUniqueHandlerID();elementorFrontend.addListenerOnce(e,"resize",this.stretch),elementorFrontend.addListenerOnce(e,"sticky:stick",this.stretch,this.$element),elementorFrontend.addListenerOnce(e,"sticky:unstick",this.stretch,this.$element),elementorFrontend.isEditMode()&&(this.onKitChangeStretchContainerChange=this.onKitChangeStretchContainerChange.bind(this),elementor.channels.editor.on("kit:change:stretchContainer",this.onKitChangeStretchContainerChange))}unbindEvents(){elementorFrontend.removeListeners(this.getUniqueHandlerID(),"resize",this.stretch),elementorFrontend.isEditMode()&&elementor.channels.editor.off("kit:change:stretchContainer",this.onKitChangeStretchContainerChange)}isActive(e){return elementorFrontend.isEditMode()||e.$element.hasClass(this.getStretchedClass())}getStretchElementForConfig(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?this.$element.find(e):this.$element}getStretchElementConfig(){return{element:this.getStretchElementForConfig(),selectors:{container:this.getStretchContainer()},considerScrollbar:elementorFrontend.isEditMode()&&elementorFrontend.config.is_rtl}}initStretch(){this.stretch=this.stretch.bind(this),this.stretchElement=new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())}getStretchContainer(){return elementorFrontend.getKitSettings("stretched_section_container")||window}isStretchSettingEnabled(){return this.getElementSettings(this.getStretchSettingName())===this.getStretchActiveValue()}stretch(){this.isStretchSettingEnabled()&&this.stretchElement.stretch()}onInit(){this.isActive(this.getSettings())&&(this.initStretch(),super.onInit(...arguments),this.stretch())}onElementChange(e){this.getStretchSettingName()===e&&(this.isStretchSettingEnabled()?this.stretch():this.stretchElement.reset())}onKitChangeStretchContainerChange(){this.stretchElement.setSettings("selectors.container",this.getStretchContainer()),this.stretch()}}t.default=StretchedElement},6412:(e,t,n)=>{"use strict";var r=n(3203),i=r(n(5955)),s=r(n(8135)),o=r(n(5658)),a=r(n(2263)),l=r(n(3090)),c=r(n(2821)),u=r(n(1292)),d=r(n(7323));i.default.frontend={Document:s.default,tools:{StretchElement:o.default},handlers:{Base:l.default,StretchedElement:a.default,SwiperBase:c.default,CarouselBase:u.default,NestedTabs:d.default}}},5658:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({element:null,direction:elementorFrontend.config.is_rtl?"right":"left",selectors:{container:window},considerScrollbar:!1}),getDefaultElements(){return{$element:jQuery(this.getSettings("element"))}},stretch(){const e=this.getSettings();let t;try{t=jQuery(e.selectors.container)}catch(e){}t&&t.length||(t=jQuery(this.getDefaultSettings().selectors.container)),this.reset();var n=this.elements.$element,r=t.innerWidth(),i=n.offset().left,s="fixed"===n.css("position"),o=s?0:i,a=window===t[0];if(!a){var l=t.offset().left;s&&(o=l),i>l&&(o=i-l)}if(e.considerScrollbar&&a){o-=window.innerWidth-r}s||(elementorFrontend.config.is_rtl&&(o=r-(n.outerWidth()+o)),o=-o),e.margin&&(o+=e.margin);var c={};let u=r;e.margin&&(u-=2*e.margin),c.width=u+"px",c[e.direction]=o+"px",n.css(c)},reset(){var e={width:""};e[this.getSettings("direction")]="",this.elements.$element.css(e)}})},2618:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(740);var i=r(n(7597)),s=r(n(381));class ArgsObject extends i.default{static getInstanceType(){return"ArgsObject"}constructor(e){super(),this.args=e}requireArgument(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.args;if(!Object.prototype.hasOwnProperty.call(t,e))throw Error(`${e} is required.`)}requireArgumentType(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),typeof n[e]!==t)throw Error(`${e} invalid type: ${t}.`)}requireArgumentInstance(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),!(n[e]instanceof t||(0,s.default)(n[e],t)))throw Error(`${e} invalid instance.`)}requireArgumentConstructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),n[e].constructor.toString()!==t.prototype.constructor.toString())throw Error(`${e} invalid constructor type.`)}}t.default=ArgsObject},869:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ForceMethodImplementation=void 0,n(740);class ForceMethodImplementation extends Error{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(`${e.isStatic?"static ":""}${e.fullName}() should be implemented, please provide '${e.functionName||e.fullName}' functionality.`,t),Object.keys(t).length&&console.error(t),Error.captureStackTrace(this,ForceMethodImplementation)}}t.ForceMethodImplementation=ForceMethodImplementation;t.default=e=>{const t=Error().stack.split("\n")[2].trim(),n=t.startsWith("at new")?"constructor":t.split(" ")[1],r={};if(r.functionName=n,r.fullName=n,r.functionName.includes(".")){const e=r.functionName.split(".");r.className=e[0],r.functionName=e[1]}else r.isStatic=!0;throw new ForceMethodImplementation(r,e)}},7597:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class InstanceType{static[Symbol.hasInstance](e){let t=super[Symbol.hasInstance](e);if(e&&!e.constructor.getInstanceType)return t;if(e&&(e.instanceTypes||(e.instanceTypes=[]),t||this.getInstanceType()===e.constructor.getInstanceType()&&(t=!0),t)){const t=this.getInstanceType===InstanceType.getInstanceType?"BaseInstanceType":this.getInstanceType();-1===e.instanceTypes.indexOf(t)&&e.instanceTypes.push(t)}return!t&&e&&(t=e.instanceTypes&&Array.isArray(e.instanceTypes)&&-1!==e.instanceTypes.indexOf(this.getInstanceType())),t}static getInstanceType(){elementorModules.ForceMethodImplementation()}constructor(){let e=new.target;const t=[];for(;e.__proto__&&e.__proto__.name;)t.push(e.__proto__),e=e.__proto__;t.reverse().forEach((e=>this instanceof e))}}t.default=InstanceType},1192:(e,t,n)=>{"use strict";n(740);const Module=function(){const e=jQuery,t=arguments,n=this,r={};let i;this.getItems=function(e,t){if(t){const n=t.split("."),r=n.splice(0,1);if(!n.length)return e[r];if(!e[r])return;return this.getItems(e[r],n.join("."))}return e},this.getSettings=function(e){return this.getItems(i,e)},this.setSettings=function(t,r,s){if(s||(s=i),"object"==typeof t)return e.extend(s,t),n;const o=t.split("."),a=o.splice(0,1);return o.length?(s[a]||(s[a]={}),n.setSettings(o.join("."),r,s[a])):(s[a]=r,n)},this.getErrorMessage=function(e,t){let n;if("forceMethodImplementation"===e)n=`The method '${t}' must to be implemented in the inheritor child.`;else n="An error occurs";return n},this.forceMethodImplementation=function(e){throw new Error(this.getErrorMessage("forceMethodImplementation",e))},this.on=function(t,i){if("object"==typeof t)return e.each(t,(function(e){n.on(e,this)})),n;return t.split(" ").forEach((function(e){r[e]||(r[e]=[]),r[e].push(i)})),n},this.off=function(e,t){if(!r[e])return n;if(!t)return delete r[e],n;const i=r[e].indexOf(t);return-1!==i&&(delete r[e][i],r[e]=r[e].filter((e=>e))),n},this.trigger=function(t){const i="on"+t[0].toUpperCase()+t.slice(1),s=Array.prototype.slice.call(arguments,1);n[i]&&n[i].apply(n,s);const o=r[t];return o?(e.each(o,(function(e,t){t.apply(n,s)})),n):n},n.__construct.apply(n,t),e.each(n,(function(e){const t=n[e];"function"==typeof t&&(n[e]=function(){return t.apply(n,arguments)})})),function(){i=n.getDefaultSettings();const r=t[0];r&&e.extend(!0,i,r)}(),n.trigger("init")};Module.prototype.__construct=function(){},Module.prototype.getDefaultSettings=function(){return{}},Module.prototype.getConstructorID=function(){return this.constructor.name},Module.extend=function(e){const t=jQuery,n=this,child=function(){return n.apply(this,arguments)};return t.extend(child,n),(child.prototype=Object.create(t.extend({},n.prototype,e))).constructor=child,child.__super__=n.prototype,child},e.exports=Module},6516:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(2640)).default.extend({getDefaultSettings:()=>({container:null,items:null,columnsCount:3,verticalSpaceBetween:30}),getDefaultElements(){return{$container:jQuery(this.getSettings("container")),$items:jQuery(this.getSettings("items"))}},run(){var e=[],t=this.elements.$container.position().top,n=this.getSettings(),r=n.columnsCount;t+=parseInt(this.elements.$container.css("margin-top"),10),this.elements.$items.each((function(i){var s=Math.floor(i/r),o=jQuery(this),a=o[0].getBoundingClientRect().height+n.verticalSpaceBetween;if(s){var l=o.position(),c=i%r,u=l.top-t-e[c];u-=parseInt(o.css("margin-top"),10),u*=-1,o.css("margin-top",u+"px"),e[c]+=a}else e.push(a)}))}});t.default=i},400:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Scroll{static scrollObserver(e){let t=0;const n={root:e.root||null,rootMargin:e.offset||"0px",threshold:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=[];if(e>0&&e<=100){const n=100/e;for(let e=0;e<=100;e+=n)t.push(e/100)}else t.push(0);return t}(e.sensitivity)};return new IntersectionObserver((function handleIntersect(n){const r=n[0].boundingClientRect.y,i=n[0].isIntersecting,s=r<t?"down":"up",o=Math.abs(parseFloat((100*n[0].intersectionRatio).toFixed(2)));e.callback({sensitivity:e.sensitivity,isInViewport:i,scrollPercentage:o,intersectionScrollDirection:s}),t=r}),n)}static getElementViewportPercentage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e[0].getBoundingClientRect(),r=t.start||0,i=t.end||0,s=window.innerHeight*r/100,o=window.innerHeight*i/100,a=n.top-window.innerHeight,l=0-a+s,c=n.top+s+e.height()-a+o,u=Math.max(0,Math.min(l/c,1));return parseFloat((100*u).toFixed(2))}static getPageScrollPercentage(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;const n=e.start||0,r=e.end||0,i=t||document.documentElement.scrollHeight-document.documentElement.clientHeight,s=i*n/100,o=i+s+i*r/100;return(document.documentElement.scrollTop+document.body.scrollTop+s)/o*100}}},2640:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1192)).default.extend({elements:null,getDefaultElements:()=>({}),bindEvents(){},onInit(){this.initElements(),this.bindEvents()},initElements(){this.elements=this.getDefaultElements()}});t.default=i},5955:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1192)),s=r(n(2640)),o=r(n(2618)),a=r(n(6516)),l=r(n(400)),c=r(n(869)),u=window.elementorModules={Module:i.default,ViewModule:s.default,ArgsObject:o.default,ForceMethodImplementation:c.default,utils:{Masonry:a.default,Scroll:l.default}};t.default=u},7323:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(3090));class NestedTabs extends i.default{getTabTitleFilterSelector(e){return`[data-tab="${e}"]`}getTabContentFilterSelector(e){return`*:nth-child(${2*e})`}getTabIndex(e){return e.getAttribute("data-tab")}getDefaultSettings(){return{selectors:{tablist:'[role="tablist"]',tabTitle:".e-n-tab-title",tabContent:".e-con",headingContainer:".e-n-tabs-heading",activeTabContentContainers:".e-con.e-active",mobileTabTitle:".e-collapse"},classes:{active:"e-active"},showTabFn:"show",hideTabFn:"hide",toggleSelf:!1,hidePrevious:!0,autoExpand:!0,keyDirection:{ArrowLeft:elementorFrontendConfig.is_rtl?1:-1,ArrowUp:-1,ArrowRight:elementorFrontendConfig.is_rtl?-1:1,ArrowDown:1}}}getDefaultElements(){const e=this.getSettings("selectors");return{$tabTitles:this.findElement(e.tabTitle),$tabContents:this.findElement(e.tabContent),$mobileTabTitles:this.findElement(e.mobileTabTitle),$headingContainer:this.findElement(e.headingContainer)}}activateDefaultTab(){const e=this.getSettings(),t=this.getEditSettings("activeItemIndex")||1,n={showTabFn:e.showTabFn,hideTabFn:e.hideTabFn};this.setSettings({showTabFn:"show",hideTabFn:"hide"}),this.changeActiveTab(t),this.setSettings(n)}handleKeyboardNavigation(e){const t=e.currentTarget,n=jQuery(t.closest(this.getSettings("selectors").tablist)),r=n.find(this.getSettings("selectors").tabTitle),i="vertical"===n.attr("aria-orientation");switch(e.key){case"ArrowLeft":case"ArrowRight":if(i)return;break;case"ArrowUp":case"ArrowDown":if(!i)return;e.preventDefault();break;case"Home":return e.preventDefault(),void r.first().trigger("focus");case"End":return e.preventDefault(),void r.last().trigger("focus");default:return}const s=t.getAttribute("data-tab")-1,o=this.getSettings("keyDirection")[e.key],a=r[s+o];a?a.focus():-1===s+o?r.last().trigger("focus"):r.first().trigger("focus")}deactivateActiveTab(e){const t=this.getSettings(),n=t.classes.active,r=e?this.getTabTitleFilterSelector(e):"."+n,i=e?this.getTabContentFilterSelector(e):"."+n,s=this.elements.$tabTitles.filter(r),o=this.elements.$tabContents.filter(i);s.add(o).removeClass(n),s.attr(this.getTitleDeactivationAttributes()),o[t.hideTabFn](0,(()=>this.onHideTabContent(o))),o.attr("hidden","hidden")}getTitleDeactivationAttributes(){return{tabindex:"-1","aria-selected":"false","aria-expanded":"false"}}onHideTabContent(e){}activateTab(e){const t=this.getSettings(),n=t.classes.active,r="show"===t.showTabFn?0:400;let i=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e)),s=this.elements.$tabContents.filter(this.getTabContentFilterSelector(e));if(!i.length){const t=Math.max(e-1,1);i=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)),s=this.elements.$tabContents.filter(this.getTabContentFilterSelector(t))}i.add(s).addClass(n),i.attr({tabindex:"0","aria-selected":"true","aria-expanded":"true"}),s[t.showTabFn](r,(()=>this.onShowTabContent(s))),s.removeAttr("hidden")}onShowTabContent(e){elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"),elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate",e)}isActiveTab(e){return this.elements.$tabTitles.filter('[data-tab="'+e+'"]').hasClass(this.getSettings("classes.active"))}onTabClick(e){e.preventDefault(),this.changeActiveTab(e.currentTarget.getAttribute("data-tab"),!0)}onTabKeyDown(e){this.preventDefaultLinkBehaviourForTabTitle(e),this.onKeydownAvoidUndesiredPageScrolling(e)}onTabKeyUp(e){switch(e.code){case"ArrowLeft":case"ArrowRight":this.handleKeyboardNavigation(e);break;case"Enter":case"Space":e.preventDefault(),this.changeActiveTab(e.currentTarget.getAttribute("data-tab"),!0)}}getTabEvents(){return{keydown:this.onTabKeyDown.bind(this),keyup:this.onTabKeyUp.bind(this),click:this.onTabClick.bind(this)}}bindEvents(){this.elements.$tabTitles.on(this.getTabEvents()),elementorFrontend.elements.$window.on("elementor/nested-tabs/activate",this.reInitSwipers)}preventDefaultLinkBehaviourForTabTitle(e){jQuery(e.target).is("a")&&"Enter"===e.key&&e.preventDefault()}onKeydownAvoidUndesiredPageScrolling(e){["End","Home","ArrowUp","ArrowDown"].includes(e.key)&&this.handleKeyboardNavigation(e)}reInitSwipers(e,t){const n=t.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);for(const e of n){if(!e.swiper)return;e.swiper.initialized=!1,e.swiper.init()}}onInit(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.createMobileTabs(t),super.onInit(...t),this.getSettings("autoExpand")&&this.activateDefaultTab()}onEditSettingsChange(e,t){"activeItemIndex"===e&&this.changeActiveTab(t,!1)}changeActiveTab(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.isEdit&&this.isElementInTheCurrentDocument())return window.top.$e.run("document/repeater/select",{container:elementor.getContainer(this.$element.attr("data-id")),index:parseInt(e)});const t=this.isActiveTab(e),n=this.getSettings();if(!n.toggleSelf&&t||!n.hidePrevious||this.deactivateActiveTab(),!n.hidePrevious&&t&&this.deactivateActiveTab(e),!t){if("none"===this.elements.$headingContainer.css("display"))return void this.activateMobileTab(e);this.activateTab(e)}}activateMobileTab(e){setTimeout((()=>{this.activateTab(e),this.forceActiveTabToBeInViewport(e)}),10)}forceActiveTabToBeInViewport(e){if(!elementorFrontend.isEditMode())return;const t=this.elements.$mobileTabTitles.filter(this.getTabTitleFilterSelector(e));elementor.helpers.isInViewport(t[0])||t[0].scrollIntoView({block:"center"})}createMobileTabs(e){const t=this.getSettings();if(elementorFrontend.isEditMode()){const n=this.$element,r=this.findElement(".e-collapse").remove();let i=1;if(this.findElement(".e-con").each((function(){const e=jQuery(this),r=n.find(`${t.selectors.headingContainer} > *:nth-child(${i})`),s=`<div class="${t.selectors.tabTitle.replace(".","")} e-collapse" data-tab="${i}" role="tab">${r.html()}</div>`;e.before(s),++i})),r.length)return elementorModules.ViewModule.prototype.onInit.apply(this,e)}}getActiveClass(){return this.getSettings().classes.active}getVisibleTabTitle(e){const t=this.elements.$tabTitles.filter(e);return null!==t[0]?.offsetParent?t[0]:t[1]}getKeyPressed(e){const t=9===e?.which,n=e?.shiftKey;return!!t&&n?"ShiftTab":!!t&&!n?"Tab":27===e?.which?"Escape":void 0}changeFocusFromContentContainerItemBackToTabTitle(e){if(this.hasDropdownLayout())return;const t="ShiftTab"===this.getKeyPressed(e),n="Tab"===this.getKeyPressed(e),r="Escape"===this.getKeyPressed(e),i=this.itemInsideContentContainerHasFocus(0),s=this.itemInsideContentContainerHasFocus("last"),o=`.${this.getActiveClass()}`,a=this.getVisibleTabTitle(o),l=parseInt(a?.getAttribute("data-tab")),c=this.getTabTitleFilterSelector(l+1),u=this.getVisibleTabTitle(c),d=n&&s&&!!u;t&&i&&!!a||r?(e.preventDefault(),a?.focus()):d&&(e.preventDefault(),this.setTabindexOfActiveContainerItems("-1"),u?.focus())}changeFocusFromActiveTabTitleToContentContainer(e){const t="Tab"===this.getKeyPressed(e),n=this.getFocusableItemsInsideActiveContentContainer()[0],r=elementorFrontend.elements.window.document.activeElement,i=parseInt(r.getAttribute("data-tab"));t&&this.tabTitleHasActiveContentContainer(i)&&n&&(e.preventDefault(),n.trigger("focus"))}itemInsideContentContainerHasFocus(e){const t=elementorFrontend.elements.window.document.activeElement,n=this.getFocusableItemsInsideActiveContentContainer();return n["last"===e?n.length-1:e]===t}getFocusableItemsInsideActiveContentContainer(){const e=this.getSettings();return this.$element.find(e.selectors.activeTabContentContainers).find(":focusable")}setTabindexOfActiveContainerItems(e){this.getFocusableItemsInsideActiveContentContainer().attr("tabindex",e)}setActiveCurrentContainerItemsToFocusable(){const e=elementorFrontend.elements.window.document.activeElement,t=parseInt(e?.getAttribute("data-tab"));this.tabTitleHasActiveContentContainer(t)&&this.setTabindexOfActiveContainerItems("0")}tabTitleHasActiveContentContainer(e){const t=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e)),n=t[0]?.classList.contains(`${this.getActiveClass()}`);return!(!this.elements.$tabContents.filter(this.getTabContentFilterSelector(e))||!n)}}t.default=NestedTabs},5089:(e,t,n)=>{var r=n(930),i=n(9268),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},1378:(e,t,n)=>{var r=n(930),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},6112:(e,t,n)=>{var r=n(8759),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},6198:(e,t,n)=>{var r=n(4088),i=n(7740),s=n(2871),createMethod=function(e){return function(t,n,o){var a,l=r(t),c=s(l),u=i(o,c);if(e&&n!=n){for(;c>u;)if((a=l[u++])!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:createMethod(!0),indexOf:createMethod(!1)}},2306:(e,t,n)=>{var r=n(8240),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},375:(e,t,n)=>{var r=n(2371),i=n(930),s=n(2306),o=n(211)("toStringTag"),a=Object,l="Arguments"==s(function(){return arguments}());e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=a(e),o))?n:l?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},8474:(e,t,n)=>{var r=n(9606),i=n(6095),s=n(4399),o=n(7826);e.exports=function(e,t,n){for(var a=i(t),l=o.f,c=s.f,u=0;u<a.length;u++){var d=a[u];r(e,d)||n&&r(n,d)||l(e,d,c(t,d))}}},2585:(e,t,n)=>{var r=n(5283),i=n(7826),s=n(5736);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5736:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},1343:(e,t,n)=>{var r=n(930),i=n(7826),s=n(3712),o=n(9444);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(r(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(e){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9444:(e,t,n)=>{var r=n(2086),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5283:(e,t,n)=>{var r=n(3677);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},7886:e=>{var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},821:(e,t,n)=>{var r=n(2086),i=n(8759),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},4999:e=>{e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},1448:(e,t,n)=>{var r,i,s=n(2086),o=n(4999),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(i=(r=u.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(i=+r[1]),e.exports=i},8684:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79:(e,t,n)=>{var r=n(8240),i=Error,s=r("".replace),o=String(i("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);e.exports=function(e,t){if(l&&"string"==typeof e&&!i.prepareStackTrace)for(;t--;)e=s(e,a,"");return e}},8395:(e,t,n)=>{var r=n(2585),i=n(79),s=n(2114),o=Error.captureStackTrace;e.exports=function(e,t,n,a){s&&(o?o(e,t):r(e,"stack",i(n,a)))}},2114:(e,t,n)=>{var r=n(3677),i=n(5736);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},1695:(e,t,n)=>{var r=n(2086),i=n(4399).f,s=n(2585),o=n(1343),a=n(9444),l=n(8474),c=n(7189);e.exports=function(e,t){var n,u,d,h,p,g=e.target,f=e.global,m=e.stat;if(n=f?r:m?r[g]||a(g,{}):(r[g]||{}).prototype)for(u in t){if(h=t[u],d=e.dontCallGetSet?(p=i(n,u))&&p.value:n[u],!c(f?u:g+(m?".":"#")+u,e.forced)&&void 0!==d){if(typeof h==typeof d)continue;l(h,d)}(e.sham||d&&d.sham)&&s(h,"sham",!0),o(n,u,h,e)}}},3677:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},7258:(e,t,n)=>{var r=n(6059),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},6059:(e,t,n)=>{var r=n(3677);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9413:(e,t,n)=>{var r=n(6059),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},4398:(e,t,n)=>{var r=n(5283),i=n(9606),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function something(){}.name,c=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1518:(e,t,n)=>{var r=n(8240),i=n(5089);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(e){}}},8240:(e,t,n)=>{var r=n(6059),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},563:(e,t,n)=>{var r=n(2086),i=n(930);e.exports=function(e,t){return arguments.length<2?(n=r[e],i(n)?n:void 0):r[e]&&r[e][t];var n}},2964:(e,t,n)=>{var r=n(5089),i=n(1858);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},2086:(e,t,n)=>{var check=function(e){return e&&e.Math==Math&&e};e.exports=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},9606:(e,t,n)=>{var r=n(8240),i=n(3060),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function hasOwn(e,t){return s(i(e),t)}},7153:e=>{e.exports={}},6761:(e,t,n)=>{var r=n(5283),i=n(3677),s=n(821);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},5974:(e,t,n)=>{var r=n(8240),i=n(3677),s=n(2306),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},5070:(e,t,n)=>{var r=n(930),i=n(8759),s=n(7530);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},9277:(e,t,n)=>{var r=n(8240),i=n(930),s=n(4489),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8945:(e,t,n)=>{var r=n(8759),i=n(2585);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},3278:(e,t,n)=>{var r,i,s,o=n(640),a=n(2086),l=n(8759),c=n(2585),u=n(9606),d=n(4489),h=n(8944),p=n(7153),g="Object already initialized",f=a.TypeError,m=a.WeakMap;if(o||d.state){var v=d.state||(d.state=new m);v.get=v.get,v.has=v.has,v.set=v.set,r=function(e,t){if(v.has(e))throw f(g);return t.facade=e,v.set(e,t),t},i=function(e){return v.get(e)||{}},s=function(e){return v.has(e)}}else{var b=h("state");p[b]=!0,r=function(e,t){if(u(e,b))throw f(g);return t.facade=e,c(e,b,t),t},i=function(e){return u(e,b)?e[b]:{}},s=function(e){return u(e,b)}}e.exports={set:r,get:i,has:s,enforce:function(e){return s(e)?i(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw f("Incompatible receiver, "+e+" required");return n}}}},930:(e,t,n)=>{var r=n(7886),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},7189:(e,t,n)=>{var r=n(3677),i=n(930),s=/#|\.prototype\./,isForced=function(e,t){var n=a[o(e)];return n==c||n!=l&&(i(t)?r(t):!!t)},o=isForced.normalize=function(e){return String(e).replace(s,".").toLowerCase()},a=isForced.data={},l=isForced.NATIVE="N",c=isForced.POLYFILL="P";e.exports=isForced},1858:e=>{e.exports=function(e){return null==e}},8759:(e,t,n)=>{var r=n(930),i=n(7886),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},3296:e=>{e.exports=!1},2071:(e,t,n)=>{var r=n(563),i=n(930),s=n(5516),o=n(1876),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},2871:(e,t,n)=>{var r=n(4005);e.exports=function(e){return r(e.length)}},3712:(e,t,n)=>{var r=n(8240),i=n(3677),s=n(930),o=n(9606),a=n(5283),l=n(4398).CONFIGURABLE,c=n(9277),u=n(3278),d=u.enforce,h=u.get,p=String,g=Object.defineProperty,f=r("".slice),m=r("".replace),v=r([].join),b=a&&!i((function(){return 8!==g((function(){}),"length",{value:8}).length})),y=String(String).split("String"),S=e.exports=function(e,t,n){"Symbol("===f(p(t),0,7)&&(t="["+m(p(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||l&&e.name!==t)&&(a?g(e,"name",{value:t,configurable:!0}):e.name=t),b&&n&&o(n,"arity")&&e.length!==n.arity&&g(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&g(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=d(e);return o(r,"source")||(r.source=v(y,"string"==typeof t?t:"")),e};Function.prototype.toString=S((function toString(){return s(this)&&h(this).source||c(this)}),"toString")},5681:e=>{var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function trunc(e){var r=+e;return(r>0?n:t)(r)}},1879:(e,t,n)=>{var r=n(4059);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},7826:(e,t,n)=>{var r=n(5283),i=n(6761),s=n(8202),o=n(6112),a=n(2258),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",p="writable";t.f=r?s?function defineProperty(e,t,n){if(o(e),t=a(t),o(n),"function"==typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=u(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return c(e,t,n)}:c:function defineProperty(e,t,n){if(o(e),t=a(t),o(n),i)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},4399:(e,t,n)=>{var r=n(5283),i=n(9413),s=n(7446),o=n(5736),a=n(4088),l=n(2258),c=n(9606),u=n(6761),d=Object.getOwnPropertyDescriptor;t.f=r?d:function getOwnPropertyDescriptor(e,t){if(e=a(e),t=l(t),u)try{return d(e,t)}catch(e){}if(c(e,t))return o(!i(s.f,e,t),e[t])}},62:(e,t,n)=>{var r=n(1352),i=n(8684).concat("length","prototype");t.f=Object.getOwnPropertyNames||function getOwnPropertyNames(e){return r(e,i)}},6952:(e,t)=>{t.f=Object.getOwnPropertySymbols},5516:(e,t,n)=>{var r=n(8240);e.exports=r({}.isPrototypeOf)},1352:(e,t,n)=>{var r=n(8240),i=n(9606),s=n(4088),o=n(6198).indexOf,a=n(7153),l=r([].push);e.exports=function(e,t){var n,r=s(e),c=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&l(u,n);for(;t.length>c;)i(r,n=t[c++])&&(~o(u,n)||l(u,n));return u}},7446:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function propertyIsEnumerable(e){var t=r(this,e);return!!t&&t.enumerable}:n},7530:(e,t,n)=>{var r=n(1518),i=n(6112),s=n(1378);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=r(Object.prototype,"__proto__","set"))(n,[]),t=n instanceof Array}catch(e){}return function setPrototypeOf(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},7999:(e,t,n)=>{var r=n(9413),i=n(930),s=n(8759),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},6095:(e,t,n)=>{var r=n(563),i=n(8240),s=n(62),o=n(6952),a=n(6112),l=i([].concat);e.exports=r("Reflect","ownKeys")||function ownKeys(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},1632:(e,t,n)=>{var r=n(7826).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},9586:(e,t,n)=>{var r=n(1858),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},8944:(e,t,n)=>{var r=n(9197),i=n(5422),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},4489:(e,t,n)=>{var r=n(2086),i=n(9444),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},9197:(e,t,n)=>{var r=n(3296),i=n(4489);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5558:(e,t,n)=>{var r=n(1448),i=n(3677);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7740:(e,t,n)=>{var r=n(9502),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},4088:(e,t,n)=>{var r=n(5974),i=n(9586);e.exports=function(e){return r(i(e))}},9502:(e,t,n)=>{var r=n(5681);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},4005:(e,t,n)=>{var r=n(9502),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},3060:(e,t,n)=>{var r=n(9586),i=Object;e.exports=function(e){return i(r(e))}},1288:(e,t,n)=>{var r=n(9413),i=n(8759),s=n(2071),o=n(2964),a=n(7999),l=n(211),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},2258:(e,t,n)=>{var r=n(1288),i=n(2071);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2371:(e,t,n)=>{var r={};r[n(211)("toStringTag")]="z",e.exports="[object z]"===String(r)},4059:(e,t,n)=>{var r=n(375),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},9268:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(e){return"Object"}}},5422:(e,t,n)=>{var r=n(8240),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},1876:(e,t,n)=>{var r=n(5558);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8202:(e,t,n)=>{var r=n(5283),i=n(3677);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},640:(e,t,n)=>{var r=n(2086),i=n(930),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},211:(e,t,n)=>{var r=n(2086),i=n(9197),s=n(9606),o=n(5422),a=n(5558),l=n(1876),c=r.Symbol,u=i("wks"),d=l?c.for||c:c&&c.withoutSetter||o;e.exports=function(e){return s(u,e)||(u[e]=a&&s(c,e)?c[e]:d("Symbol."+e)),u[e]}},1557:(e,t,n)=>{"use strict";var r=n(563),i=n(9606),s=n(2585),o=n(5516),a=n(7530),l=n(8474),c=n(1632),u=n(5070),d=n(1879),h=n(8945),p=n(8395),g=n(5283),f=n(3296);e.exports=function(e,t,n,m){var v="stackTraceLimit",b=m?2:1,y=e.split("."),S=y[y.length-1],w=r.apply(null,y);if(w){var T=w.prototype;if(!f&&i(T,"cause")&&delete T.cause,!n)return w;var E=r("Error"),C=t((function(e,t){var n=d(m?t:e,void 0),r=m?new w(e):new w;return void 0!==n&&s(r,"message",n),p(r,C,r.stack,2),this&&o(T,this)&&u(r,this,C),arguments.length>b&&h(r,arguments[b]),r}));if(C.prototype=T,"Error"!==S?a?a(C,E):l(C,E,{name:!0}):g&&v in w&&(c(C,w,v),c(C,w,"prepareStackTrace")),l(C,w),!f)try{T.name!==S&&s(T,"name",S),T.constructor=C}catch(e){}return C}}},740:(e,t,n)=>{var r=n(1695),i=n(2086),s=n(7258),o=n(1557),a="WebAssembly",l=i[a],c=7!==Error("e",{cause:7}).cause,exportGlobalErrorCauseWrapper=function(e,t){var n={};n[e]=o(e,t,c),r({global:!0,constructor:!0,arity:1,forced:c},n)},exportWebAssemblyErrorCauseWrapper=function(e,t){if(l&&l[e]){var n={};n[e]=o(a+"."+e,t,c),r({target:a,stat:!0,constructor:!0,arity:1,forced:c},n)}};exportGlobalErrorCauseWrapper("Error",(function(e){return function Error(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("EvalError",(function(e){return function EvalError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("RangeError",(function(e){return function RangeError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("ReferenceError",(function(e){return function ReferenceError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("SyntaxError",(function(e){return function SyntaxError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("TypeError",(function(e){return function TypeError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("URIError",(function(e){return function URIError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("CompileError",(function(e){return function CompileError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("LinkError",(function(e){return function LinkError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("RuntimeError",(function(e){return function RuntimeError(t){return s(e,this,arguments)}}))},3203:e=>{e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},e=>{var t;t=6412,e(e.s=t)}]);;
!function(){"use strict";function Waypoint(options){if(!options)throw new Error("No options passed to Waypoint constructor");if(!options.element)throw new Error("No element option passed to Waypoint constructor");if(!options.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+keyCounter,this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options),this.element=this.options.element,this.adapter=new Waypoint.Adapter(this.element),this.callback=options.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=Waypoint.Context.findOrCreateByElement(this.options.context),Waypoint.offsetAliases[this.options.offset]&&(this.options.offset=Waypoint.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),allWaypoints[this.key]=this,keyCounter+=1}var keyCounter=0,allWaypoints={};Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)},Waypoint.prototype.trigger=function(args){this.enabled&&this.callback&&this.callback.apply(this,args)},Waypoint.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete allWaypoints[this.key]},Waypoint.prototype.disable=function(){return this.enabled=!1,this},Waypoint.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},Waypoint.prototype.next=function(){return this.group.next(this)},Waypoint.prototype.previous=function(){return this.group.previous(this)},Waypoint.invokeAll=function(method){var allWaypointsArray=[];for(var waypointKey in allWaypoints)allWaypointsArray.push(allWaypoints[waypointKey]);for(var i=0,end=allWaypointsArray.length;i<end;i++)allWaypointsArray[i][method]()},Waypoint.destroyAll=function(){Waypoint.invokeAll("destroy")},Waypoint.disableAll=function(){Waypoint.invokeAll("disable")},Waypoint.enableAll=function(){Waypoint.Context.refreshAll();for(var waypointKey in allWaypoints)allWaypoints[waypointKey].enabled=!0;return this},Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()},Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},Waypoint.viewportWidth=function(){return document.documentElement.clientWidth},Waypoint.adapters=[],Waypoint.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},Waypoint.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=Waypoint}(),function(){"use strict";function requestAnimationFrameShim(callback){window.setTimeout(callback,1e3/60)}function Context(element){this.element=element,this.Adapter=Waypoint.Adapter,this.adapter=new this.Adapter(element),this.key="waypoint-context-"+keyCounter,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},element.waypointContextKey=this.key,contexts[element.waypointContextKey]=this,keyCounter+=1,Waypoint.windowContext||(Waypoint.windowContext=!0,Waypoint.windowContext=new Context(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var keyCounter=0,contexts={},Waypoint=window.Waypoint,oldWindowLoad=window.onload;Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?"horizontal":"vertical";this.waypoints[axis][waypoint.key]=waypoint,this.refresh()},Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal),verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical),isWindow=this.element==this.element.window;horizontalEmpty&&verticalEmpty&&!isWindow&&(this.adapter.off(".waypoints"),delete contexts[this.key])},Context.prototype.createThrottledResizeHandler=function(){function resizeHandler(){self.handleResize(),self.didResize=!1}var self=this;this.adapter.on("resize.waypoints",function(){self.didResize||(self.didResize=!0,Waypoint.requestAnimationFrame(resizeHandler))})},Context.prototype.createThrottledScrollHandler=function(){function scrollHandler(){self.handleScroll(),self.didScroll=!1}var self=this;this.adapter.on("scroll.waypoints",function(){self.didScroll&&!Waypoint.isTouch||(self.didScroll=!0,Waypoint.requestAnimationFrame(scrollHandler))})},Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()},Context.prototype.handleScroll=function(){var triggeredGroups={},axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var axisKey in axes){var axis=axes[axisKey],isForward=axis.newScroll>axis.oldScroll,direction=isForward?axis.forward:axis.backward;for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];if(null!==waypoint.triggerPoint){var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint,nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint,crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint,crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint;(crossedForward||crossedBackward)&&(waypoint.queueTrigger(direction),triggeredGroups[waypoint.group.id]=waypoint.group)}}}for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers();this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}},Context.prototype.innerHeight=function(){return this.element==this.element.window?Waypoint.viewportHeight():this.adapter.innerHeight()},Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key],this.checkEmpty()},Context.prototype.innerWidth=function(){return this.element==this.element.window?Waypoint.viewportWidth():this.adapter.innerWidth()},Context.prototype.destroy=function(){var allWaypoints=[];for(var axis in this.waypoints)for(var waypointKey in this.waypoints[axis])allWaypoints.push(this.waypoints[axis][waypointKey]);for(var i=0,end=allWaypoints.length;i<end;i++)allWaypoints[i].destroy()},Context.prototype.refresh=function(){var axes,isWindow=this.element==this.element.window,contextOffset=isWindow?void 0:this.adapter.offset(),triggeredGroups={};this.handleScroll(),axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var axisKey in axes){var axis=axes[axisKey];for(var waypointKey in this.waypoints[axisKey]){var contextModifier,wasBeforeScroll,nowAfterScroll,triggeredBackward,triggeredForward,waypoint=this.waypoints[axisKey][waypointKey],adjustment=waypoint.options.offset,oldTriggerPoint=waypoint.triggerPoint,elementOffset=0,freshWaypoint=null==oldTriggerPoint;waypoint.element!==waypoint.element.window&&(elementOffset=waypoint.adapter.offset()[axis.offsetProp]),"function"==typeof adjustment?adjustment=adjustment.apply(waypoint):"string"==typeof adjustment&&(adjustment=parseFloat(adjustment),waypoint.options.offset.indexOf("%")>-1&&(adjustment=Math.ceil(axis.contextDimension*adjustment/100))),contextModifier=axis.contextScroll-axis.contextOffset,waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment),wasBeforeScroll=oldTriggerPoint<axis.oldScroll,nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll,triggeredBackward=wasBeforeScroll&&nowAfterScroll,triggeredForward=!wasBeforeScroll&&!nowAfterScroll,!freshWaypoint&&triggeredBackward?(waypoint.queueTrigger(axis.backward),triggeredGroups[waypoint.group.id]=waypoint.group):!freshWaypoint&&triggeredForward?(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group):freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint&&(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group)}}return Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers()}),this},Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)},Context.refreshAll=function(){for(var contextId in contexts)contexts[contextId].refresh()},Context.findByElement=function(element){return contexts[element.waypointContextKey]},window.onload=function(){oldWindowLoad&&oldWindowLoad(),Context.refreshAll()},Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim;requestFn.call(window,callback)},Waypoint.Context=Context}(),function(){"use strict";function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}function Group(options){this.name=options.name,this.axis=options.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),groups[this.axis][this.name]=this}var groups={vertical:{},horizontal:{}},Waypoint=window.Waypoint;Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)},Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction],reverse="up"===direction||"left"===direction;waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint);for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i];(waypoint.options.continuous||i===waypoints.length-1)&&waypoint.trigger([direction])}}this.clearTriggerQueues()},Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints),isLast=index===this.waypoints.length-1;return isLast?null:this.waypoints[index+1]},Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);return index?this.waypoints[index-1]:null},Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)},Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);index>-1&&this.waypoints.splice(index,1)},Group.prototype.first=function(){return this.waypoints[0]},Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)},Waypoint.Group=Group}(),function(){"use strict";function JQueryAdapter(element){this.$element=$(element)}var $=window.jQuery,Waypoint=window.Waypoint;$.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments);return this.$element[method].apply(this.$element,args)}}),$.each(["extend","inArray","isEmptyObject"],function(i,method){JQueryAdapter[method]=$[method]}),Waypoint.adapters.push({name:"jquery",Adapter:JQueryAdapter}),Waypoint.Adapter=JQueryAdapter}(),function(){"use strict";function createExtension(framework){return function(){var waypoints=[],overrides=arguments[0];return framework.isFunction(arguments[0])&&(overrides=framework.extend({},arguments[1]),overrides.handler=arguments[0]),this.each(function(){var options=framework.extend({},overrides,{element:this});"string"==typeof options.context&&(options.context=framework(this).closest(options.context)[0]),waypoints.push(new Waypoint(options))}),waypoints}}var Waypoint=window.Waypoint;window.jQuery&&(window.jQuery.fn.elementorWaypoint=createExtension(window.jQuery)),window.Zepto&&(window.Zepto.fn.elementorWaypoint=createExtension(window.Zepto))}();;
/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){"use strict";var t,e,i,n,W,C,o,s,r,l,a,h,u;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function L(t,e){return parseInt(x.css(t,e),10)||0}function N(t){return null!=t&&t===t.window}x.ui=x.ui||{},x.ui.version="1.13.2",
/*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
/*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),
/*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.focusable=function(t,e){var i,n,o,s=t.nodeName.toLowerCase();return"area"===s?(o=(i=t.parentNode).name,!(!t.href||!o||"map"!==i.nodeName.toLowerCase())&&0<(i=x("img[usemap='#"+o+"']")).length&&i.is(":visible")):(/^(input|select|textarea|button|object)$/.test(s)?(n=!t.disabled)&&(o=x(t).closest("fieldset")[0])&&(n=!o.disabled):n="a"===s&&t.href||e,n&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"visible"===e}(x(t)))},x.extend(x.expr.pseudos,{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element._form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
x.expr.pseudos||(x.expr.pseudos=x.expr[":"]),x.uniqueSort||(x.uniqueSort=x.unique),x.escapeSelector||(e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,i=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},x.escapeSelector=function(t){return(t+"").replace(e,i)}),x.fn.even&&x.fn.odd||x.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}}),
/*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,h=x.fn.position,x.position={scrollbarWidth:function(){var t,e,i;return void 0!==n?n:(i=(e=x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i)},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=N(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(f){var c,d,p,g,m,v,y,w,b,_,t,e;return f&&f.of?(v="string"==typeof(f=x.extend({},f)).of?x(document).find(f.of):x(f.of),y=x.position.getWithinInfo(f.within),w=x.position.getScrollInfo(y),b=(f.collision||"flip").split(" "),_={},e=9===(e=(t=v)[0]).nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:N(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()},v[0].preventDefault&&(f.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(f[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],f[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===b.length&&(b[1]=b[0]),"right"===f.at[0]?m.left+=d:"center"===f.at[0]&&(m.left+=d/2),"bottom"===f.at[1]?m.top+=p:"center"===f.at[1]&&(m.top+=p/2),c=E(_.at,d,p),m.left+=c[0],m.top+=c[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=L(this,"marginLeft"),n=L(this,"marginTop"),o=l+e+L(this,"marginRight")+w.width,s=a+n+L(this,"marginBottom")+w.height,h=x.extend({},m),u=E(_.my,r.outerWidth(),r.outerHeight());"right"===f.my[0]?h.left-=l:"center"===f.my[0]&&(h.left-=l/2),"bottom"===f.my[1]?h.top-=a:"center"===f.my[1]&&(h.top-=a/2),h.left+=u[0],h.top+=u[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[b[t]]&&x.ui.position[b[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[c[0]+u[0],c[1]+u[1]],my:f.my,at:f.at,within:y,elem:r})}),f.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",f.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})):h.apply(this,arguments)},x.ui.position={fit:{left:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollLeft:n.offset.left,n=n.width,s=t.left-e.collisionPosition.marginLeft,r=o-s,l=s+e.collisionWidth-n-o;e.collisionWidth>n?0<r&&l<=0?(i=t.left+r+e.collisionWidth-n-o,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?o+n-e.collisionWidth:o:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i,n=e.within,n=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;e.collisionHeight>o?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,i=i.isWindow?i.scrollLeft:i.offset.left,s=t.left-e.collisionPosition.marginLeft,r=s-i,s=s+e.collisionWidth-o-i,l="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,a="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,h=-2*e.offset[0];r<0?((o=t.left+l+a+h+e.collisionWidth-o-n)<0||o<C(r))&&(t.left+=l+a+h):0<s&&(0<(n=t.left-e.collisionPosition.marginLeft+l+a+h-i)||C(n)<s)&&(t.left+=l+a+h)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,i=i.isWindow?i.scrollTop:i.offset.top,s=t.top-e.collisionPosition.marginTop,r=s-i,s=s+e.collisionHeight-o-i,l="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,a="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,h=-2*e.offset[1];r<0?((o=t.top+l+a+h+e.collisionHeight-o-n)<0||o<C(r))&&(t.top+=l+a+h):0<s&&(0<(n=t.top-e.collisionPosition.marginTop+l+a+h-i)||C(n)<s)&&(t.top+=l+a+h)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=(i=i||e.body).nodeName?i:e.body},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
/*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({uniqueId:(u=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
/*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var f,c=0,d=Array.prototype.hasOwnProperty,p=Array.prototype.slice;x.cleanData=(f=x.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove");f(t)}),x.widget=function(t,i,e){var n,o,s,r={},l=t.split(".")[0],a=l+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),Array.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr.pseudos[a.toLowerCase()]=function(t){return!!x.data(t,a)},x[l]=x[l]||{},n=x[l][t],o=x[l][t]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},x.extend(o,n,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(s=new i).options=x.widget.extend({},s.options),x.each(e,function(e,n){function o(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}r[e]="function"!=typeof n?n:function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=s,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}}),o.prototype=x.widget.extend(s,{widgetEventPrefix:n&&s.widgetEventPrefix||t},r,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(x.each(n._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),x.widget.bridge(t,o),o},x.widget.extend=function(t){for(var e,i,n=p.call(arguments,1),o=0,s=n.length;o<s;o++)for(e in n[o])i=n[o][e],d.call(n[o],e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;x.fn[s]=function(i){var t="string"==typeof i,n=p.call(arguments,1),o=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,r);return"instance"===i?(o=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for "+s+" widget instance"):(t=e[i].apply(e,n))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):o=void 0:(n.length&&(i=x.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=x.data(this,r);t?(t.option(i||{}),t._init&&t._init()):x.data(this,r,new e(i,this))})),o}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,n,o,s=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(n=s[t]=x.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=x(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var s=[],r=this;function t(t,e){for(var i,n=0;n<t.length;n++)i=r.classesElementLookup[t[n]]||x(),i=o.add?(function(){var i=[];o.element.each(function(t,e){x.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||i.push(e)}),r._on(x(i),{remove:"_untrackClassesElement"})}(),x(x.uniqueSort(i.get().concat(o.element.get())))):x(i.not(o.element).get()),r.classesElementLookup[t[n]]=i,s.push(t[n]),e&&o.classes[t[n]]&&s.push(o.classes[t[n]])}return(o=x.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(i){var n=this;x.each(n.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(n.classesElementLookup[t]=x(e.not(i.target).get()))}),this._off(x(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){var o="string"==typeof t||null===t,e={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n="boolean"==typeof n?n:i};return e.element.toggleClass(this._classes(e),n),this},_on:function(o,s,t){var r,l=this;"boolean"!=typeof o&&(t=s,s=o,o=!1),t?(s=r=x(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),x.each(t,function(t,e){function i(){if(o||!0!==l.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var t=t.match(/^([\w:-]*)\s*(.*)$/),n=t[1]+l.eventNamespace,t=t[2];t?r.on(n,t,i):s.on(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,o,s=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(n in o)n in e||(e[n]=o[n]);return this.element.trigger(e,i),!("function"==typeof s&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(s,r){x.Widget.prototype["_"+s]=function(e,t,i){var n,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:s;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),n=!x.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&x.effects&&x.effects.effect[o]?e[s](t):o!==s&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){x(this)[s](),i&&i.call(e[0]),t()})}})});;
/*! elementor - v3.13.3 - 28-05-2023 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[819],{9220:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(8135));class _default extends elementorModules.ViewModule{constructor(){super(...arguments),this.documents={},this.initDocumentClasses(),this.attachDocumentsClasses()}getDefaultSettings(){return{selectors:{document:".elementor"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$documents:jQuery(e.document)}}initDocumentClasses(){this.documentClasses={base:i.default},elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes",this)}addDocumentClass(e,t){this.documentClasses[e]=t}attachDocumentsClasses(){this.elements.$documents.each(((e,t)=>this.attachDocumentClass(jQuery(t))))}attachDocumentClass(e){const t=e.data(),n=t.elementorId,s=t.elementorType,i=this.documentClasses[s]||this.documentClasses.base;this.documents[n]=new i({$element:e,id:n})}}t.default=_default},9804:(e,t,n)=>{"use strict";var s=n(3203),i=s(n(6397)),o=s(n(8704)),r=s(n(4985)),a=s(n(7537)),l=s(n(355)),d=s(n(2804)),c=s(n(3384));e.exports=function(e){var t=this;const s={};this.elementsHandlers={"accordion.default":()=>n.e(209).then(n.bind(n,8470)),"alert.default":()=>n.e(745).then(n.bind(n,9269)),"counter.default":()=>n.e(120).then(n.bind(n,7884)),"progress.default":()=>n.e(192).then(n.bind(n,1351)),"tabs.default":()=>n.e(520).then(n.bind(n,9459)),"toggle.default":()=>n.e(181).then(n.bind(n,2)),"video.default":()=>n.e(791).then(n.bind(n,5363)),"image-carousel.default":()=>n.e(268).then(n.bind(n,5914)),"text-editor.default":()=>n.e(357).then(n.bind(n,1327)),"wp-widget-media_audio.default":()=>n.e(52).then(n.bind(n,7602))},elementorFrontendConfig.experimentalFeatures["nested-elements"]&&(this.elementsHandlers["nested-tabs.default"]=()=>Promise.resolve().then(n.bind(n,7323)));const addElementsHandlers=()=>{this.elementsHandlers.section=[d.default,...o.default,l.default,c.default],this.elementsHandlers.container=[...o.default],elementorFrontend.isEditMode()&&this.elementsHandlers.container.push(...r.default),this.elementsHandlers.column=a.default,e.each(this.elementsHandlers,((e,t)=>{const n=e.split(".");e=n[0];const s=n[1]||null;this.attachHandler(e,t,s)}))},isClassHandler=e=>e.prototype?.getUniqueHandlerID;this.addHandler=function(t,n){const i=n.$element.data("model-cid");let o;if(i){o=t.prototype.getConstructorID(),s[i]||(s[i]={});const e=s[i][o];e&&e.onDestroy()}const r=new t(n);elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`,n.$element,e),i&&(s[i][o]=r)},this.attachHandler=(e,n,s)=>{Array.isArray(n)||(n=[n]),n.forEach((n=>function(e,n){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";s=s?"."+s:"";const i=e+s;elementorFrontend.hooks.addAction(`frontend/element_ready/${i}`,(e=>{if(isClassHandler(n))t.addHandler(n,{$element:e,elementName:i},!0);else{const s=n();if(!s)return;s instanceof Promise?s.then((n=>{let{default:s}=n;t.addHandler(s,{$element:e,elementName:i},!0)})):t.addHandler(s,{$element:e,elementName:i},!0)}}))}(e,n,s)))},this.getHandler=function(e){const t=this.elementsHandlers[e];return isClassHandler(t)?t:new Promise((e=>{t().then((t=>{let{default:n}=t;e(n)}))}))},this.getHandlers=function(e){return elementorDevTools.deprecation.deprecated("getHandlers","3.1.0","elementorFrontend.elementsHandler.getHandler"),e?this.getHandler(e):this.elementsHandlers},this.runReadyTrigger=function(t){if(elementorFrontend.config.is_static)return;const n=jQuery(t),s=n.attr("data-element_type");if(s&&(elementorFrontend.hooks.doAction("frontend/element_ready/global",n,e),elementorFrontend.hooks.doAction(`frontend/element_ready/${s}`,n,e),"widget"===s)){const t=n.attr("data-widget_type");elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`,n,e)}},this.init=()=>{elementorFrontend.hooks.addAction("frontend/element_ready/global",i.default),addElementsHandlers()}}},5654:(e,t,n)=>{"use strict";var s=n(3203);n(59);var i=s(n(9220)),o=s(n(5107)),r=s(n(3308)),a=s(n(1604)),l=s(n(1911)),d=s(n(4773)),c=s(n(2064)),u=s(n(8628)),h=s(n(8646)),m=s(n(6866)),g=s(n(4375)),p=s(n(6404)),f=s(n(6046)),v=s(n(1322)),b=n(6028);const _=n(9469),y=n(9804),w=n(3346);class Frontend extends elementorModules.ViewModule{constructor(){super(...arguments),this.config=elementorFrontendConfig,this.config.legacyMode={get elementWrappers(){return elementorFrontend.isEditMode()&&window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers","3.1.0","elementorFrontend.config.experimentalFeatures.e_dom_optimization"),!elementorFrontend.config.experimentalFeatures.e_dom_optimization}},this.populateActiveBreakpointsConfig()}get Module(){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module","2.5.0","elementorModules.frontend.handlers.Base"),elementorModules.frontend.handlers.Base}getDefaultSettings(){return{selectors:{elementor:".elementor",adminBar:"#wpadminbar"}}}getDefaultElements(){const e={window,$window:jQuery(window),$document:jQuery(document),$head:jQuery(document.head),$body:jQuery(document.body),$deviceMode:jQuery("<span>",{id:"elementor-device-mode",class:"elementor-screen-only"})};return e.$body.append(e.$deviceMode),e}bindEvents(){this.elements.$window.on("resize",(()=>this.setDeviceModeData()))}getElements(e){return this.getItems(this.elements,e)}getPageSettings(e){const t=this.isEditMode()?elementor.settings.page.model.attributes:this.config.settings.page;return this.getItems(t,e)}getGeneralSettings(e){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("getGeneralSettings","3.0.0","getKitSettings and remove the `elementor_` prefix"),this.getKitSettings(`elementor_${e}`)}getKitSettings(e){return this.getItems(this.config.kit,e)}getCurrentDeviceMode(){return getComputedStyle(this.elements.$deviceMode[0],":after").content.replace(/"/g,"")}getDeviceSetting(e,t,n){if("widescreen"===e)return this.getWidescreenSetting(t,n);const s=elementorFrontend.breakpoints.getActiveBreakpointsList({largeToSmall:!0,withDesktop:!0});let i=s.indexOf(e);for(;i>0;){const e=t[n+"_"+s[i]];if(e||0===e)return e;i--}return t[n]}getWidescreenSetting(e,t){const n=t+"_widescreen";let s;return s=e[n]?e[n]:e[t],s}getCurrentDeviceSetting(e,t){return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(),e,t)}isEditMode(){return this.config.environmentMode.edit}isWPPreviewMode(){return this.config.environmentMode.wpPreview}initDialogsManager(){let e;this.getDialogsManager=()=>(e||(e=new DialogsManager.Instance),e)}initOnReadyComponents(){this.utils={youtube:new a.default,vimeo:new l.default,baseVideoLoader:new d.default,anchors:new w,get lightbox(){return h.default.getLightbox()},urlActions:new c.default,swiper:u.default,environment:r.default,assetsLoader:new m.default,escapeHTML:b.escapeHTML,events:p.default,controls:new v.default},this.modules={StretchElement:elementorModules.frontend.tools.StretchElement,Masonry:elementorModules.utils.Masonry},this.elementsHandler.init(),this.isEditMode()?elementor.once("document:loaded",(()=>this.onDocumentLoaded())):this.onDocumentLoaded()}initOnReadyElements(){this.elements.$wpAdminBar=this.elements.$document.find(this.getSettings("selectors.adminBar"))}addUserAgentClasses(){for(const[e,t]of Object.entries(r.default))t&&this.elements.$body.addClass("e--ua-"+e)}setDeviceModeData(){this.elements.$body.attr("data-elementor-device-mode",this.getCurrentDeviceMode())}addListenerOnce(e,t,n,s){if(s||(s=this.elements.$window),this.isEditMode())if(this.removeListeners(e,t,s),s instanceof jQuery){const i=t+"."+e;s.on(i,n)}else s.on(t,n,e);else s.on(t,n)}removeListeners(e,t,n,s){if(s||(s=this.elements.$window),s instanceof jQuery){const i=t+"."+e;s.off(i,n)}else s.off(t,n,e)}debounce(e,t){let n;return function(){const s=this,i=arguments,o=!n;clearTimeout(n),n=setTimeout((()=>{n=null,e.apply(s,i)}),t),o&&e.apply(s,i)}}waypoint(e,t,n){n=jQuery.extend({offset:"100%",triggerOnce:!0},n);return e.elementorWaypoint((function(){const e=this.element||this,s=t.apply(e,arguments);return n.triggerOnce&&this.destroy&&this.destroy(),s}),n)}muteMigrationTraces(){jQuery.migrateMute=!0,jQuery.migrateTrace=!1}initModules(){const e={shapes:f.default};elementorFrontend.trigger("elementor/modules/init:before"),elementorFrontend.trigger("elementor/modules/init/before"),Object.entries(e).forEach((e=>{let[t,n]=e;this.modulesHandlers[t]=new n}))}populateActiveBreakpointsConfig(){this.config.responsive.activeBreakpoints={},Object.entries(this.config.responsive.breakpoints).forEach((e=>{let[t,n]=e;n.is_enabled&&(this.config.responsive.activeBreakpoints[t]=n)}))}init(){this.hooks=new _,this.breakpoints=new g.default(this.config.responsive),this.storage=new o.default,this.elementsHandler=new y(jQuery),this.modulesHandlers={},this.addUserAgentClasses(),this.setDeviceModeData(),this.initDialogsManager(),this.isEditMode()&&this.muteMigrationTraces(),p.default.dispatch(this.elements.$window,"elementor/frontend/init"),this.initModules(),this.initOnReadyElements(),this.initOnReadyComponents()}onDocumentLoaded(){this.documentsManager=new i.default,this.trigger("components:init"),new h.default}}window.elementorFrontend=new Frontend,elementorFrontend.isEditMode()||jQuery((()=>elementorFrontend.init()))},4058:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase{getDefaultSettings(){return{classes:{swiperContainer:`elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,swiperWrapper:"swiper-wrapper",swiperSlide:"elementor-background-slideshow__slide swiper-slide",swiperPreloader:"swiper-lazy-preloader",slideBackground:"elementor-background-slideshow__slide__image",kenBurns:"elementor-ken-burns",kenBurnsActive:"elementor-ken-burns--active",kenBurnsIn:"elementor-ken-burns--in",kenBurnsOut:"elementor-ken-burns--out"}}}getSwiperOptions(){const e=this.getElementSettings(),t={grabCursor:!1,slidesPerView:1,slidesPerGroup:1,loop:"yes"===e.background_slideshow_loop,speed:e.background_slideshow_transition_duration,autoplay:{delay:e.background_slideshow_slide_duration,stopOnLastSlide:!e.background_slideshow_loop},handleElementorBreakpoints:!0,on:{slideChange:()=>{e.background_slideshow_ken_burns&&this.handleKenBurns()}}};switch("yes"===e.background_slideshow_loop&&(t.loopedSlides=this.getSlidesCount()),e.background_slideshow_slide_transition){case"fade":t.effect="fade",t.fadeEffect={crossFade:!0};break;case"slide_down":t.autoplay.reverseDirection=!0,t.direction="vertical";break;case"slide_up":t.direction="vertical"}return"yes"===e.background_slideshow_lazyload&&(t.lazy={loadPrevNext:!0,loadPrevNextAmount:1}),t}buildSwiperElements(){const e=this.getSettings("classes"),t=this.getElementSettings(),n="slide_left"===t.background_slideshow_slide_transition?"ltr":"rtl",s=jQuery("<div>",{class:e.swiperContainer,dir:n}),i=jQuery("<div>",{class:e.swiperWrapper}),o=t.background_slideshow_ken_burns,r="yes"===t.background_slideshow_lazyload;let a=e.slideBackground;if(o){a+=" "+e.kenBurns;const n="in"===t.background_slideshow_ken_burns_zoom_direction?"kenBurnsIn":"kenBurnsOut";a+=" "+e[n]}r&&(a+=" swiper-lazy"),this.elements.$slides=jQuery(),t.background_slideshow_gallery.forEach((t=>{const n=jQuery("<div>",{class:e.swiperSlide});let s;if(r){const n=jQuery("<div>",{class:e.swiperPreloader});s=jQuery("<div>",{class:a,"data-background":t.url}),s.append(n)}else s=jQuery("<div>",{class:a,style:'background-image: url("'+t.url+'");'});n.append(s),i.append(n),this.elements.$slides=this.elements.$slides.add(n)})),s.append(i),this.$element.prepend(s),this.elements.$backgroundSlideShowContainer=s}async initSlider(){if(1>=this.getSlidesCount())return;const e=this.getElementSettings(),t=elementorFrontend.utils.swiper;this.swiper=await new t(this.elements.$backgroundSlideShowContainer,this.getSwiperOptions()),this.elements.$backgroundSlideShowContainer.data("swiper",this.swiper),e.background_slideshow_ken_burns&&this.handleKenBurns()}activate(){this.buildSwiperElements(),this.initSlider()}deactivate(){this.swiper&&(this.swiper.destroy(),this.elements.$backgroundSlideShowContainer.remove())}run(){"slideshow"===this.getElementSettings("background_background")?this.activate():this.deactivate()}onInit(){super.onInit(),this.getElementSettings("background_slideshow_gallery")&&this.run()}onDestroy(){super.onDestroy(),this.deactivate()}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundSlideshow},9501:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundVideo extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{backgroundVideoContainer:".elementor-background-video-container",backgroundVideoEmbed:".elementor-background-video-embed",backgroundVideoHosted:".elementor-background-video-hosted"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$backgroundVideoContainer:this.$element.find(e.backgroundVideoContainer)};return t.$backgroundVideoEmbed=t.$backgroundVideoContainer.children(e.backgroundVideoEmbed),t.$backgroundVideoHosted=t.$backgroundVideoContainer.children(e.backgroundVideoHosted),t}calcVideosSize(e){let t="16:9";"vimeo"===this.videoType&&(t=e[0].width+":"+e[0].height);const n=this.elements.$backgroundVideoContainer.outerWidth(),s=this.elements.$backgroundVideoContainer.outerHeight(),i=t.split(":"),o=i[0]/i[1],r=n/s>o;return{width:r?n:s*o,height:r?n/o:s}}changeVideoSize(){if("hosted"!==this.videoType&&!this.player)return;let e;if("youtube"===this.videoType?e=jQuery(this.player.getIframe()):"vimeo"===this.videoType?e=jQuery(this.player.element):"hosted"===this.videoType&&(e=this.elements.$backgroundVideoHosted),!e)return;const t=this.calcVideosSize(e);e.width(t.width).height(t.height)}startVideoLoop(e){if(!this.player.getIframe().contentWindow)return;const t=this.getElementSettings(),n=t.background_video_start||0,s=t.background_video_end;if(!t.background_play_once||e){if(this.player.seekTo(n),s){setTimeout((()=>{this.startVideoLoop(!1)}),1e3*(s-n+1))}}else this.player.stopVideo()}prepareVimeoVideo(e,t){const n=this.getElementSettings(),s={url:t,width:this.elements.$backgroundVideoContainer.outerWidth().width,autoplay:!0,loop:!n.background_play_once,transparent:!1,background:!0,muted:!0};n.background_privacy_mode&&(s.dnt=!0),this.player=new e.Player(this.elements.$backgroundVideoContainer,s),this.handleVimeoStartEndTimes(n),this.player.ready().then((()=>{jQuery(this.player.element).addClass("elementor-background-video-embed"),this.changeVideoSize()}))}handleVimeoStartEndTimes(e){e.background_video_start&&this.player.on("play",(t=>{0===t.seconds&&this.player.setCurrentTime(e.background_video_start)})),this.player.on("timeupdate",(t=>{e.background_video_end&&e.background_video_end<t.seconds&&(e.background_play_once?this.player.pause():this.player.setCurrentTime(e.background_video_start)),this.player.getDuration().then((n=>{e.background_video_start&&!e.background_video_end&&t.seconds>n-.5&&this.player.setCurrentTime(e.background_video_start)}))}))}prepareYTVideo(e,t){const n=this.elements.$backgroundVideoContainer,s=this.getElementSettings();let i=e.PlayerState.PLAYING;window.chrome&&(i=e.PlayerState.UNSTARTED);const o={videoId:t,events:{onReady:()=>{this.player.mute(),this.changeVideoSize(),this.startVideoLoop(!0),this.player.playVideo()},onStateChange:t=>{switch(t.data){case i:n.removeClass("elementor-invisible elementor-loading");break;case e.PlayerState.ENDED:"function"==typeof this.player.seekTo&&this.player.seekTo(s.background_video_start||0),s.background_play_once&&this.player.destroy()}}},playerVars:{controls:0,rel:0,playsinline:1}};s.background_privacy_mode&&(o.host="https://www.youtube-nocookie.com",o.origin=window.location.hostname),n.addClass("elementor-loading elementor-invisible"),this.player=new e.Player(this.elements.$backgroundVideoEmbed[0],o)}activate(){let e,t=this.getElementSettings("background_video_link");const n=this.getElementSettings("background_play_once");if(-1!==t.indexOf("vimeo.com")?(this.videoType="vimeo",this.apiProvider=elementorFrontend.utils.vimeo):t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)&&(this.videoType="youtube",this.apiProvider=elementorFrontend.utils.youtube),this.apiProvider)e=this.apiProvider.getVideoIDFromURL(t),this.apiProvider.onApiReady((n=>{"youtube"===this.videoType&&this.prepareYTVideo(n,e),"vimeo"===this.videoType&&this.prepareVimeoVideo(n,t)}));else{this.videoType="hosted";const e=this.getElementSettings("background_video_start"),s=this.getElementSettings("background_video_end");(e||s)&&(t+="#t="+(e||0)+(s?","+s:"")),this.elements.$backgroundVideoHosted.attr("src",t).one("canplay",this.changeVideoSize.bind(this)),n&&this.elements.$backgroundVideoHosted.on("ended",(()=>{this.elements.$backgroundVideoHosted.hide()}))}elementorFrontend.elements.$window.on("resize",this.changeVideoSize)}deactivate(){"youtube"===this.videoType&&this.player.getIframe()||"vimeo"===this.videoType?this.player.destroy():this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"),elementorFrontend.elements.$window.off("resize",this.changeVideoSize)}run(){const e=this.getElementSettings();(e.background_play_on_mobile||"mobile"!==elementorFrontend.getCurrentDeviceMode())&&("video"===e.background_background&&e.background_video_link?this.activate():this.deactivate())}onInit(){super.onInit(...arguments),this.changeVideoSize=this.changeVideoSize.bind(this),this.run()}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundVideo},8704:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(4058)),o=s(n(9501)),r=[i.default,o.default];t.default=r},7537:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[s(n(4058)).default];t.default=i},4985:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=[()=>n.e(413).then(n.bind(n,2929)),()=>n.e(413).then(n.bind(n,343)),()=>n.e(413).then(n.bind(n,8073))];t.default=s},6397:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class GlobalHandler extends elementorModules.frontend.handlers.Base{getWidgetType(){return"global"}animate(){const e=this.$element,t=this.getAnimation();if("none"===t)return void e.removeClass("elementor-invisible");const n=this.getElementSettings(),s=n._animation_delay||n.animation_delay||0;e.removeClass(t),this.currentAnimation&&e.removeClass(this.currentAnimation),this.currentAnimation=t,setTimeout((()=>{e.removeClass("elementor-invisible").addClass("animated "+t)}),s)}getAnimation(){return this.getCurrentDeviceSetting("animation")||this.getCurrentDeviceSetting("_animation")}onInit(){if(super.onInit(...arguments),this.getAnimation()){const e=elementorModules.utils.Scroll.scrollObserver({callback:t=>{t.isInViewport&&(this.animate(),e.unobserve(this.$element[0]))}});e.observe(this.$element[0])}}onElementChange(e){/^_?animation/.test(e)&&this.animate()}}t.default=e=>{elementorFrontend.elementsHandler.addHandler(GlobalHandler,{$element:e})}},355:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class HandlesPosition extends elementorModules.frontend.handlers.Base{isActive(){return elementorFrontend.isEditMode()}isFirstSection(){return this.$element[0]===document.querySelector(".elementor-edit-mode .elementor-top-section")}isOverflowHidden(){return"hidden"===this.$element.css("overflow")}getOffset(){if("body"===elementor.config.document.container)return this.$element.offset().top;const e=jQuery(elementor.config.document.container);return this.$element.offset().top-e.offset().top}setHandlesPosition(){const e=elementor.documents.getCurrent();if(!e||!e.container.isEditable())return;const t="elementor-section--handles-inside";if(elementor.settings.page.model.attributes.scroll_snap)return void this.$element.addClass(t);const n=this.isOverflowHidden();if(!n&&!this.isFirstSection())return;const s=n?0:this.getOffset();if(s<25){this.$element.addClass(t);const e=this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");s<-5?e.css("top",-s):e.css("top","")}else this.$element.removeClass(t)}onInit(){this.isActive()&&(this.setHandlesPosition(),this.$element.on("mouseenter",this.setHandlesPosition.bind(this)))}}t.default=HandlesPosition},3384:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Shapes extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{container:"> .elementor-shape-%s"},svgURL:elementorFrontend.config.urls.assets+"shapes/"}}getDefaultElements(){const e={},t=this.getSettings("selectors");return e.$topContainer=this.$element.find(t.container.replace("%s","top")),e.$bottomContainer=this.$element.find(t.container.replace("%s","bottom")),e}isActive(){return elementorFrontend.isEditMode()}getSvgURL(e,t){let n=this.getSettings("svgURL")+t+".svg";return elementor.config.additional_shapes&&e in elementor.config.additional_shapes&&(n=elementor.config.additional_shapes[e],-1<t.indexOf("-negative")&&(n=n.replace(".svg","-negative.svg"))),n}buildSVG(e){const t="shape_divider_"+e,n=this.getElementSettings(t),s=this.elements["$"+e+"Container"];if(s.attr("data-shape",n),!n)return void s.empty();let i=n;this.getElementSettings(t+"_negative")&&(i+="-negative");const o=this.getSvgURL(n,i);jQuery.get(o,(e=>{s.empty().append(e.childNodes[0])})),this.setNegative(e)}setNegative(e){this.elements["$"+e+"Container"].attr("data-negative",!!this.getElementSettings("shape_divider_"+e+"_negative"))}onInit(){this.isActive(this.getSettings())&&(super.onInit(...arguments),["top","bottom"].forEach((e=>{this.getElementSettings("shape_divider_"+e)&&this.buildSVG(e)})))}onElementChange(e){const t=e.match(/^shape_divider_(top|bottom)$/);if(t)return void this.buildSVG(t[1]);const n=e.match(/^shape_divider_(top|bottom)_negative$/);n&&(this.buildSVG(n[1]),this.setNegative(n[1]))}}t.default=Shapes},2804:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class StretchedSection extends elementorModules.frontend.handlers.StretchedElement{getStretchedClass(){return"elementor-section-stretched"}getStretchSettingName(){return"stretch_section"}getStretchActiveValue(){return"section-stretched"}}t.default=StretchedSection},3346:(e,t,n)=>{"use strict";var s=n(6028);e.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({scrollDuration:500,selectors:{links:'a[href*="#"]',targets:".elementor-element, .elementor-menu-anchor",scrollable:(0,s.isScrollSnapActive)()?"body":"html, body"}}),getDefaultElements(){return{$scrollable:jQuery(this.getSettings("selectors").scrollable)}},bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.handleAnchorLinks)},handleAnchorLinks(e){var t,n=e.currentTarget,i=location.pathname===n.pathname;if(location.hostname===n.hostname&&i&&!(n.hash.length<2)){try{t=jQuery(n.hash).filter(this.getSettings("selectors.targets"))}catch(e){return}if(t.length){var o=t.offset().top,r=elementorFrontend.elements.$wpAdminBar,a=jQuery(".elementor-section.elementor-sticky--active:visible");r.length>0&&(o-=r.height()),a.length>0&&(o-=Math.max.apply(null,a.map((function(){return jQuery(this).outerHeight()})).get())),e.preventDefault(),o=elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance",o),(0,s.isScrollSnapActive)()&&elementorFrontend.elements.$body.css("scroll-snap-type","none"),this.elements.$scrollable.animate({scrollTop:o},this.getSettings("scrollDuration"),"linear",(()=>{(0,s.isScrollSnapActive)()&&elementorFrontend.elements.$body.css("scroll-snap-type","")}))}}},onInit(){elementorModules.ViewModule.prototype.onInit.apply(this,arguments)}})},6866:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class AssetsLoader{getScriptElement(e){const t=document.createElement("script");return t.src=e,t}getStyleElement(e){const t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}load(e,t){const n=AssetsLoader.assets[e][t];return n.loader||(n.loader=new Promise((t=>{const s="style"===e?this.getStyleElement(n.src):this.getScriptElement(n.src);s.onload=()=>t(!0);const i="head"===n.parent?n.parent:"body";document[i].appendChild(s)}))),n.loader}}t.default=AssetsLoader;const n=elementorFrontendConfig.environmentMode.isScriptDebug?"":".min",s=elementorFrontendConfig.experimentalFeatures.e_swiper_latest?`${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${n}.js?ver=8.4.5`:`${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`;AssetsLoader.assets={script:{dialog:{src:`${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`},"share-link":{src:`${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`},swiper:{src:s}},style:{}}},1322:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Controls{getControlValue(e,t,n){let s;return s="object"==typeof e[t]&&n?e[t][n]:e[t],s}getResponsiveControlValue(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const s=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:null)||elementorFrontend.getCurrentDeviceMode(),i=this.getControlValue(e,t,n);if("widescreen"===s){const s=this.getControlValue(e,`${t}_widescreen`,n);return s||0===s?s:i}const o=elementorFrontend.breakpoints.getActiveBreakpointsList({withDesktop:!0});let r=s,a=o.indexOf(s),l="";for(;a<=o.length;){if("desktop"===r){l=i;break}const s=`${t}_${r}`,d=this.getControlValue(e,s,n);if(d||0===d){l=d;break}a++,r=o[a]}return l}}},8646:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class LightboxManager extends elementorModules.ViewModule{static getLightbox(){const e=new Promise((e=>{n.e(723).then(n.t.bind(n,3896,23)).then((t=>{let{default:n}=t;return e(new n)}))})),t=elementorFrontend.utils.assetsLoader.load("script","dialog"),s=elementorFrontend.utils.assetsLoader.load("script","share-link");return Promise.all([e,t,s]).then((()=>e))}getDefaultSettings(){return{selectors:{links:"a, [data-elementor-lightbox]"}}}getDefaultElements(){return{$links:jQuery(this.getSettings("selectors.links"))}}isLightboxLink(e){if("a"===e.tagName.toLowerCase()&&(e.hasAttribute("download")||!/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href))&&!e.dataset.elementorLightboxVideo)return!1;const t=elementorFrontend.getKitSettings("global_image_lightbox"),n=e.dataset.elementorOpenLightbox;return"yes"===n||t&&"no"!==n}async onLinkClick(e){const t=e.currentTarget,n=jQuery(e.target),s=elementorFrontend.isEditMode(),i=s&&elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),o=!!n.closest(".elementor-edit-area").length;if(!this.isLightboxLink(t))return void(s&&o&&e.preventDefault());if(e.preventDefault(),s&&!elementor.getPreferences("lightbox_in_editor"))return;if(i)return;(this.isOptimizedAssetsLoading()?await LightboxManager.getLightbox():elementorFrontend.utils.lightbox).createLightbox(t)}isOptimizedAssetsLoading(){return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),(e=>this.onLinkClick(e)))}onInit(){super.onInit(...arguments),this.isOptimizedAssetsLoading()&&!elementorFrontend.isEditMode()&&this.elements.$links.each(((e,t)=>{if(this.isLightboxLink(t))return LightboxManager.getLightbox(),!1}))}}t.default=LightboxManager},8628:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Swiper{constructor(e,t){return this.config=t,this.config.breakpoints&&(this.config=this.adjustConfig(t)),e instanceof jQuery&&(e=e[0]),e.closest(".elementor-widget-wrap")?.classList.add("e-swiper-container"),e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),new Promise((t=>{if(!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading)return t(this.createSwiperInstance(e,this.config));elementorFrontend.utils.assetsLoader.load("script","swiper").then((()=>t(this.createSwiperInstance(e,this.config))))}))}createSwiperInstance(e,t){const n=window.Swiper;return n.prototype.adjustConfig=this.adjustConfig,new n(e,t)}adjustConfig(e){if(!e.handleElementorBreakpoints)return e;const t=elementorFrontend.config.responsive.activeBreakpoints,n=elementorFrontend.breakpoints.getBreakpointValues();return Object.keys(e.breakpoints).forEach((s=>{const i=parseInt(s);let o;if(i===t.mobile.value||i+1===t.mobile.value)o=0;else if(!t.widescreen||i!==t.widescreen.value&&i+1!==t.widescreen.value){const e=n.findIndex((e=>i===e||i+1===e));o=n[e-1]}else o=i;e.breakpoints[o]=e.breakpoints[s],e.breakpoints[s]={slidesPerView:e.slidesPerView,slidesPerGroup:e.slidesPerGroup?e.slidesPerGroup:1}})),e}}},2064:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(5719);class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}}}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.runLinkAction.bind(this))}initActions(){this.actions={lightbox:async e=>{const t=await elementorFrontend.utils.lightbox;e.slideshow?t.openSlideshow(e.slideshow,e.url):(e.id&&(e.type="image"),t.showModal(e))}}}addAction(e,t){this.actions[e]=t}runAction(e){const t=(e=decodeURIComponent(e)).match(/action=(.+?)&/);if(!t)return;const n=this.actions[t[1]];if(!n)return;let s={};const i=e.match(/settings=(.+)/);i&&(s=JSON.parse(atob(i[1])));for(var o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];n(s,...r)}runLinkAction(e){e.preventDefault(),this.runAction(jQuery(e.currentTarget).attr("href"),e)}runHashAction(){if(!location.hash)return;const e=document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);e&&this.runAction(e.getAttribute("data-e-action-hash"))}createActionHash(e,t){return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)}onInit(){super.onInit(),this.initActions(),elementorFrontend.on("components:init",this.runHashAction.bind(this))}}t.default=_default},6028:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isScrollSnapActive=t.escapeHTML=void 0;t.escapeHTML=e=>{const t={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};return e.replace(/[&<>'"]/g,(e=>t[e]||e))};t.isScrollSnapActive=()=>"yes"===(elementorFrontend.isEditMode()?elementor.settings.page.model.attributes?.scroll_snap:elementorFrontend.config.settings.page?.scroll_snap)},4773:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BaseLoader extends elementorModules.ViewModule{getDefaultSettings(){return{isInserted:!1,selectors:{firstScript:"script:first"}}}getDefaultElements(){return{$firstScript:jQuery(this.getSettings("selectors.firstScript"))}}insertAPI(){this.elements.$firstScript.before(jQuery("<script>",{src:this.getApiURL()})),this.setSettings("isInserted",!0)}getVideoIDFromURL(e){const t=e.match(this.getURLRegex());return t&&t[1]}onApiReady(e){this.getSettings("isInserted")||this.insertAPI(),this.isApiLoaded()?e(this.getApiObject()):setTimeout((()=>{this.onApiReady(e)}),350)}getAutoplayURL(e){return e.replace("&autoplay=0","")+"&autoplay=1"}}t.default=BaseLoader},1911:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(4773));class VimeoLoader extends i.default{getApiURL(){return"https://player.vimeo.com/api/player.js"}getURLRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/}isApiLoaded(){return window.Vimeo}getApiObject(){return Vimeo}getAutoplayURL(e){const t=(e=super.getAutoplayURL(e)).match(/#t=[^&]*/);return e.replace(t[0],"")+t}}t.default=VimeoLoader},1604:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(4773));class YoutubeLoader extends i.default{getApiURL(){return"https://www.youtube.com/iframe_api"}getURLRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/}isApiLoaded(){return window.YT&&YT.loaded}getApiObject(){return YT}}t.default=YoutubeLoader},59:(e,t,n)=>{"use strict";n.p=elementorFrontendConfig.urls.assets+"js/"},4375:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Breakpoints extends elementorModules.Module{constructor(e){super(),this.responsiveConfig=e}getActiveBreakpointsList(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e={largeToSmall:!1,withDesktop:!1,...e};const t=Object.keys(this.responsiveConfig.activeBreakpoints);if(e.withDesktop){const e=-1===t.indexOf("widescreen")?t.length:t.length-1;t.splice(e,0,"desktop")}return e.largeToSmall&&t.reverse(),t}getBreakpointValues(){const{activeBreakpoints:e}=this.responsiveConfig,t=[];return Object.values(e).forEach((e=>{t.push(e.value)})),t}getDesktopPreviousDeviceKey(){let e="";const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t),s=n.length;return e="min"===t[n[s-1]].direction?n[s-2]:n[s-1],e}getDesktopMinPoint(){const{activeBreakpoints:e}=this.responsiveConfig;return e[this.getDesktopPreviousDeviceKey()].value+1}getDeviceMinBreakpoint(e){if("desktop"===e)return this.getDesktopMinPoint();const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t);let s;if(n[0]===e)s=320;else if("widescreen"===e)s=t[e]?t[e].value:this.responsiveConfig.breakpoints.widescreen;else{const i=n.indexOf(e);s=t[n[i-1]].value+1}return s}getActiveMatchRegex(){return new RegExp(this.getActiveBreakpointsList().map((e=>"_"+e)).join("|")+"$")}}t.default=Breakpoints},6404:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Events=void 0;class Events{static dispatch(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e=e instanceof jQuery?e[0]:e,s&&e.dispatchEvent(new CustomEvent(s,{detail:n})),e.dispatchEvent(new CustomEvent(t,{detail:n}))}}t.Events=Events;var n=Events;t.default=n},9469:e=>{"use strict";e.exports=function(){var e,t=Array.prototype.slice,n={actions:{},filters:{}};function _removeHook(e,t,s,i){var o,r,a;if(n[e][t])if(s)if(o=n[e][t],i)for(a=o.length;a--;)(r=o[a]).callback===s&&r.context===i&&o.splice(a,1);else for(a=o.length;a--;)o[a].callback===s&&o.splice(a,1);else n[e][t]=[]}function _addHook(e,t,s,i,o){var r={callback:s,priority:i,context:o},a=n[e][t];if(a){var l=!1;if(jQuery.each(a,(function(){if(this.callback===s)return l=!0,!1})),l)return;a.push(r),a=function _hookInsertSort(e){for(var t,n,s,i=1,o=e.length;i<o;i++){for(t=e[i],n=i;(s=e[n-1])&&s.priority>t.priority;)e[n]=e[n-1],--n;e[n]=t}return e}(a)}else a=[r];n[e][t]=a}function _runHook(e,t,s){var i,o,r=n[e][t];if(!r)return"filters"===e&&s[0];if(o=r.length,"filters"===e)for(i=0;i<o;i++)s[0]=r[i].callback.apply(r[i].context,s);else for(i=0;i<o;i++)r[i].callback.apply(r[i].context,s);return"filters"!==e||s[0]}return e={removeFilter:function removeFilter(t,n){return"string"==typeof t&&_removeHook("filters",t,n),e},applyFilters:function applyFilters(){var n=t.call(arguments),s=n.shift();return"string"==typeof s?_runHook("filters",s,n):e},addFilter:function addFilter(t,n,s,i){return"string"==typeof t&&"function"==typeof n&&_addHook("filters",t,n,s=parseInt(s||10,10),i),e},removeAction:function removeAction(t,n){return"string"==typeof t&&_removeHook("actions",t,n),e},doAction:function doAction(){var n=t.call(arguments),s=n.shift();return"string"==typeof s&&_runHook("actions",s,n),e},addAction:function addAction(t,n,s,i){return"string"==typeof t&&"function"==typeof n&&_addHook("actions",t,n,s=parseInt(s||10,10),i),e}},e}},3308:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const matchUserAgent=e=>n.indexOf(e)>=0,n=navigator.userAgent,s=!!window.opr&&!!opr.addons||!!window.opera||matchUserAgent(" OPR/"),i=matchUserAgent("Firefox"),o=/^((?!chrome|android).)*safari/i.test(n)||/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),r=/Trident|MSIE/.test(n)&&!!document.documentMode,a=!r&&!!window.StyleMedia||matchUserAgent("Edg"),l=!!window.chrome&&matchUserAgent("Chrome")&&!(a||s),d=matchUserAgent("Chrome")&&!!window.CSS,c=matchUserAgent("AppleWebKit")&&!d;var u={isTouchDevice:"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,appleWebkit:c,blink:d,chrome:l,edge:a,firefox:i,ie:r,mac:matchUserAgent("Macintosh"),opera:s,safari:o,webkit:matchUserAgent("AppleWebKit")};t.default=u},5107:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{get(e,t){let n;t=t||{};try{n=t.session?sessionStorage:localStorage}catch(t){return e?void 0:{}}let s=n.getItem("elementor");s=s?JSON.parse(s):{},s.__expiration||(s.__expiration={});const i=s.__expiration;let o=[];e?i[e]&&(o=[e]):o=Object.keys(i);let r=!1;return o.forEach((e=>{new Date(i[e])<new Date&&(delete s[e],delete i[e],r=!0)})),r&&this.save(s,t.session),e?s[e]:s}set(e,t,n){n=n||{};const s=this.get(null,n);if(s[e]=t,n.lifetimeInSeconds){const t=new Date;t.setTime(t.getTime()+1e3*n.lifetimeInSeconds),s.__expiration[e]=t.getTime()}this.save(s,n.session)}save(e,t){let n;try{n=t?sessionStorage:localStorage}catch(e){return}n.setItem("elementor",JSON.stringify(e))}}t.default=_default},6046:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("text-path",(()=>n.e(48).then(n.bind(n,6468))))}}t.default=_default},1855:(e,t,n)=>{var s=n(5516),i=TypeError;e.exports=function(e,t){if(s(t,e))return e;throw i("Incorrect invocation")}},3621:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5719:(e,t,n)=>{"use strict";var s=n(1695),i=n(2086),o=n(563),r=n(5736),a=n(7826).f,l=n(9606),d=n(1855),c=n(5070),u=n(1879),h=n(3621),m=n(79),g=n(5283),p=n(3296),f="DOMException",v=o("Error"),b=o(f),_=function DOMException(){d(this,y);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),s=new b(t,n),i=v(t);return i.name=f,a(s,"stack",r(1,m(i.stack,1))),c(s,this,_),s},y=_.prototype=b.prototype,w="stack"in v(f),k="stack"in new b(1,2),S=b&&g&&Object.getOwnPropertyDescriptor(i,f),E=!(!S||S.writable&&S.configurable),M=w&&!E&&!k;s({global:!0,constructor:!0,forced:p||M},{DOMException:M?_:b});var C=o(f),A=C.prototype;if(A.constructor!==C)for(var D in p||a(A,"constructor",r(1,C)),h)if(l(h,D)){var $=h[D],R=$.s;l(C,R)||a(C,R,r(6,$.c))}}},e=>{e.O(0,[354],(()=>{return t=5654,e(e.s=t);var t}));e.O()}]);;
/*
 * ================== js/jquery.appearl.js ===================
 */

;( function( $, window, document, undefined ) {

  "use strict";

  var pluginName = "appearl",
      defaults = {
        offset: 0,
        insetOffset: '50%'
      },
      attributesMap = {
        'offset': 'offset',
        'inset-offset': 'insetOffset'
    },
    $window = $(window);

  // The actual plugin constructor
  function Plugin ( element, options ) {
      this.element   = element;
      this.$element  = $(element);
      this.settings  = $.extend( {}, defaults, options );

      // read attributes
      for ( var key in attributesMap ) {
        var value = attributesMap[ key ],
            dataAttr = this.$element.data( key );

        if ( dataAttr === undefined ) {
            continue;
        }

        this.settings[ value ] = dataAttr;
      }

      this.init();
  }

  // Avoid Plugin.prototype conflicts
  $.extend( Plugin.prototype, {
      init: function() {
        if ( typeof this.settings.offset === 'object' ) {
          this._offsetTop = this.settings.offset.top;
          this._offsetBottom = this.settings.offset.bottom;
        } else {
          this._offsetTop = this._offsetBottom = this.settings.offset;
        }

        // To check if the element is on viewport and set the offset 0 for them
        if ( this._isOnViewPort( this.$element) ) {
            this._offsetTop = this._offsetBottom = 0
        }

        this._appeared = false;
        this._lastScroll = 0;

        $window.on( 'scroll resize', this.update.bind( this ) );
        setTimeout( this.update.bind(this) );
      },

      update: function( event ) {
        var rect = this.element.getBoundingClientRect(),
        areaTop = this._parseOffset( this._offsetTop ),
        areaBottom = window.innerHeight - this._parseOffset( this._offsetBottom ),
        insetOffset = this._parseOffset( this.settings.insetOffset, true );

        if ( rect.top + insetOffset <= areaBottom && rect.bottom - insetOffset >= areaTop ) {
          !this._appeared && this.$element.trigger( 'appear', [{ from: ( this._lastScroll <= $window.scrollTop() ? 'bottom' : 'top' ) }] );
          this._appeared = true;
        } else if ( this._appeared ) {
          this.$element.trigger( 'disappear', [{ from: ( rect.top < areaTop ? 'top' : 'bottom' ) }] );
          this._appeared = false;
        }

        this._lastScroll = $window.scrollTop();
      },

      _parseOffset: function( value, inset ) {
        var percentage = typeof value === 'string' && value.indexOf( '%' ) !== -1;
        value = parseInt( value );

        return !percentage ? value : ( inset ? this.element.offsetHeight : window.innerHeight ) * value / 100;
      },

      _isOnViewPort: function( element ) {
        var bottomOffset = this.element.getBoundingClientRect().bottom;
        return bottomOffset <  window.innerHeight
      },
  } );

  $.fn[ pluginName ] = function( options ) {
      return this.each( function() {
          if ( !$.data( this, "plugin_" + pluginName ) ) {
              $.data( this, "plugin_" +
                  pluginName, new Plugin( this, options ) );
          }
      } );
  };




  /*!
   *
   * ================== js/plugins/tilt.jquery.js ===================
   **/
  (function (factory) {
      if (typeof define === 'function' && define.amd) {
          // AMD. Register as an anonymous module.
          define(['jquery'], factory);
      } else if (typeof module === 'object' && module.exports) {
          // Node/CommonJS
          module.exports = function( root, jQuery ) {
              if ( jQuery === undefined ) {
                  // require('jQuery') returns a factory that requires window to
                  // build a jQuery instance, we normalize how we use modules
                  // that require this pattern but the window provided is a noop
                  // if it's defined (how jquery works)
                  if ( typeof window !== 'undefined' ) {
                      jQuery = require('jquery');
                  }
                  else {
                      jQuery = require('jquery')(root);
                  }
              }
              factory(jQuery);
              return jQuery;
          };
      } else {
          // Browser globals
          factory(jQuery);
      }
  }(function ($) {
      $.fn.tilt = function (options) {

          /**
           * RequestAnimationFrame
           */
          const requestTick = function() {
              if (this.ticking) return;
              requestAnimationFrame(updateTransforms.bind(this));
              this.ticking = true;
          };

          /**
           * Bind mouse movement evens on instance
           */
          const bindEvents = function() {
              const _this = this;
              $(this).on('mousemove', mouseMove);
              $(this).on('mouseenter', mouseEnter);
              if (this.settings.reset) $(this).on('mouseleave', mouseLeave);
              if (this.settings.glare) $(window).on('resize', updateGlareSize.bind(_this));
          };

          /**
           * Set transition only on mouse leave and mouse enter so it doesn't influence mouse move transforms
           */
          const setTransition = function() {
              if (this.timeout !== undefined) clearTimeout(this.timeout);
              $(this).css({'transition': `${this.settings.speed}ms ${this.settings.easing}`});
              if(this.settings.glare) this.glareElement.css({'transition': `opacity ${this.settings.speed}ms ${this.settings.easing}`});
              this.timeout = setTimeout(() => {
                  $(this).css({'transition': ''});
                  if(this.settings.glare) this.glareElement.css({'transition': ''});
              }, this.settings.speed);
          };

          /**
           * When user mouse enters tilt element
           */
          const mouseEnter = function(event) {
              this.ticking = false;
              $(this).css({'will-change': 'transform'});
              setTransition.call(this);

              // Trigger change event
              $(this).trigger("tilt.mouseEnter");
          };

          /**
           * Return the x,y position of the mouse on the tilt element
           * @returns {{x: *, y: *}}
           */
          const getMousePositions = function(event) {
              if (typeof(event) === "undefined") {
                  event = {
                      pageX: $(this).offset().left + $(this).outerWidth() / 2,
                      pageY: $(this).offset().top + $(this).outerHeight() / 2
                  };
              }
              return {x: event.pageX, y: event.pageY};
          };

          /**
           * When user mouse moves over the tilt element
           */
          const mouseMove = function(event) {
              this.mousePositions = getMousePositions(event);
              requestTick.call(this);
          };

          /**
           * When user mouse leaves tilt element
           */
          const mouseLeave = function() {
              setTransition.call(this);
              this.reset = true;
              requestTick.call(this);

              // Trigger change event
              $(this).trigger("tilt.mouseLeave");
          };

          /**
           * Get tilt values
           *
           * @returns {{x: tilt value, y: tilt value}}
           */
          const getValues = function() {
              const width = $(this).outerWidth();
              const height = $(this).outerHeight();
              const left = $(this).offset().left;
              const top = $(this).offset().top;
              const percentageX = (this.mousePositions.x - left) / width;
              const percentageY = (this.mousePositions.y - top) / height;
              // x or y position inside instance / width of instance = percentage of position inside instance * the max tilt value
              const tiltX = ((this.settings.maxTilt / 2) - ((percentageX) * this.settings.maxTilt)).toFixed(2);
              const tiltY = (((percentageY) * this.settings.maxTilt) - (this.settings.maxTilt / 2)).toFixed(2);
              // angle
              const angle = Math.atan2(this.mousePositions.x - (left+width/2),- (this.mousePositions.y - (top+height/2)) )*(180/Math.PI);
              // Return x & y tilt values
              return {tiltX, tiltY, 'percentageX': percentageX * 100, 'percentageY': percentageY * 100, angle};
          };

          /**
           * Update tilt transforms on mousemove
           */
          const updateTransforms = function() {
              this.transforms = getValues.call(this);

              if (this.reset) {
                  this.reset = false;
                  $(this).css('transform', `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`);

                  // Rotate glare if enabled
                  if (this.settings.glare){
                      this.glareElement.css('transform', `rotate(180deg) translate(-50%, -50%)`);
                      this.glareElement.css('opacity', `0`);
                  }

                  return;
              } else {
                  $(this).css('transform', `perspective(${this.settings.perspective}px) rotateX(${this.settings.disableAxis === 'x' ? 0 : this.transforms.tiltY}deg) rotateY(${this.settings.disableAxis === 'y' ? 0 : this.transforms.tiltX}deg) scale3d(${this.settings.scale},${this.settings.scale},${this.settings.scale})`);

                  // Rotate glare if enabled
                  if (this.settings.glare){
                      this.glareElement.css('transform', `rotate(${this.transforms.angle}deg) translate(-50%, -50%)`);
                      this.glareElement.css('opacity', `${this.transforms.percentageY * this.settings.maxGlare / 100}`);
                  }
              }

              // Trigger change event
              $(this).trigger("change", [this.transforms]);

              this.ticking = false;
          };

          /**
           * Prepare elements
           */
          const prepareGlare = function () {
              const glarePrerender = this.settings.glarePrerender;

              // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
              if (!glarePrerender)
              // Create glare element
                  $(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>');

              // Store glare selector if glare is enabled
              this.glareElementWrapper = $(this).find(".js-tilt-glare");
              this.glareElement = $(this).find(".js-tilt-glare-inner");

              // Remember? We assume all css is already set, so just return
              if (glarePrerender) return;

              // Abstracted re-usable glare styles
              const stretch = {
                  'position': 'absolute',
                  'top': '0',
                  'left': '0',
                  'width': '100%',
                  'height': '100%',
              };

              // Style glare wrapper
              this.glareElementWrapper.css(stretch).css({
                  'overflow': 'hidden',
                  'pointer-events': 'none',
              });

              // Style glare element
              this.glareElement.css({
                  'position': 'absolute',
                  'top': '50%',
                  'left': '50%',
                  'background-image': `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
                  'width': `${$(this).outerWidth()*2}`,
                  'height': `${$(this).outerWidth()*2}`,
                  'transform': 'rotate(180deg) translate(-50%, -50%)',
                  'transform-origin': '0% 0%',
                  'opacity': '0',
              });

          };

          /**
           * Update glare on resize
           */
          const updateGlareSize = function () {
              this.glareElement.css({
                  'width': `${$(this).outerWidth()*2}`,
                  'height': `${$(this).outerWidth()*2}`,
              });
          };

          /**
           * Public methods
           */
          $.fn.tilt.destroy = function() {
              $(this).each(function () {
                  $(this).find('.js-tilt-glare').remove();
                  $(this).css({'will-change': '', 'transform': ''});
                  $(this).off('mousemove mouseenter mouseleave');
              });
          };

          $.fn.tilt.getValues = function() {
              const results = [];
              $(this).each(function () {
                  this.mousePositions = getMousePositions.call(this);
                  results.push(getValues.call(this));
              });
              return results;
          };

          $.fn.tilt.reset = function() {
              $(this).each(function () {
                  this.mousePositions = getMousePositions.call(this);
                  this.settings = $(this).data('settings');
                  mouseLeave.call(this);
                  setTimeout(() => {
                      this.reset = false;
                  }, this.settings.transition);
              });
          };

          /**
           * Loop every instance
           */
          return this.each(function () {

              /**
               * Default settings merged with user settings
               * Can be set trough data attributes or as parameter.
               * @type {*}
               */
              this.settings = $.extend({
                  maxTilt: $(this).is('[data-tilt-max]') ? $(this).data('tilt-max') : 20,
                  perspective: $(this).is('[data-tilt-perspective]') ? $(this).data('tilt-perspective') : 300,
                  easing: $(this).is('[data-tilt-easing]') ? $(this).data('tilt-easing') : 'cubic-bezier(.03,.98,.52,.99)',
                  scale: $(this).is('[data-tilt-scale]') ? $(this).data('tilt-scale') : '1',
                  speed: $(this).is('[data-tilt-speed]') ? $(this).data('tilt-speed') : '400',
                  transition: $(this).is('[data-tilt-transition]') ? $(this).data('tilt-transition') : true,
                  disableAxis: $(this).is('[data-tilt-disable-axis]') ? $(this).data('tilt-disable-axis') : null,
                  axis: $(this).is('[data-tilt-axis]') ? $(this).data('tilt-axis') : null,
                  reset: $(this).is('[data-tilt-reset]') ? $(this).data('tilt-reset') : true,
                  glare: $(this).is('[data-tilt-glare]') ? $(this).data('tilt-glare') : false,
                  maxGlare: $(this).is('[data-tilt-maxglare]') ? $(this).data('tilt-maxglare') : 1,
              }, options);

              // Add deprecation warning & set disableAxis to deprecated axis setting
              if(this.settings.axis !== null){
                  console.warn('Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information');
                  this.settings.disableAxis = this.settings.axis;
              }

              this.init = () => {
                  // Store settings
                  $(this).data('settings', this.settings);

                  // Prepare element
                  if(this.settings.glare) prepareGlare.call(this);

                  // Bind events
                  bindEvents.call(this);
              };

              // Init
              this.init();

          });
      };

      /**
       * Auto load
       */
      $('[data-tilt]').tilt();

      return true;
  }));





  if( typeof Object.create !== 'function' ){ Object.create = function (obj){ function F(){} F.prototype = obj; return new F();}; }

  // config for lazysizes
  window.lazySizesConfig = window.lazySizesConfig || {};
  window.lazySizesConfig.lazyClass    = 'jltma-preload';
  window.lazySizesConfig.loadingClass = 'jltma-preloading';
  window.lazySizesConfig.loadedClass  = 'jltma-preloaded';

  // On Loading
  // an event right before of the "unveil" transformation of lazyload
  document.addEventListener('lazybeforeunveil', function( e ){
      var color = e.target.getAttribute( 'data-bg-color' );
      if( color ){
          e.target.style.backgroundColor = color;
      }
  });

  document.addEventListener('lazyloaded', function( e ){
      if( e.target.getAttribute('data-bg-color') ){
        e.target.style.backgroundColor = 'initial';
      }
      if( e.target.classList.contains('jltma-has-preload-height') ){
          e.target.classList.remove('jltma-has-preload-height');
          e.target.style.height = 'auto';
      }

      // Lazyload videos
      if( e.target.nodeName === "VIDEO" ){
          var video = e.target;

          for (var source in video.children) {
              var videoSource = video.children[source];
              if ( videoSource.tagName === "SOURCE" && videoSource.getAttribute('data-src') ) {
                  videoSource.src = videoSource.getAttribute('data-src');
              }
          }
          video.load();

          // autoPlay video
          if( video.classList.contains('jltma-autoplay') ){
              video.play();
          }
      }
  });

  (function($, window, document, undefined){
      "use strict";

      var resposiveNotLoadedImages = function(){
          var width, height, lazysizeImages = document.querySelectorAll('.jltma-preload');

          Array.prototype.forEach.call(lazysizeImages, function(el, i){
              if( ( width = el.getAttribute('width') ) && ( height = el.getAttribute('height') ) ){
                  el.style.height = el.clientWidth/(width/height) + 'px';
                  el.classList.add('jltma-has-preload-height');
              }
          });
      };

      window.addEventListener("orientationchange", resposiveNotLoadedImages);
      window.addEventListener('resize', resposiveNotLoadedImages);
      $(resposiveNotLoadedImages);

  })(jQuery, window, document);






/*!
 * ================== js/libs/plugins/lazysizes.js ===================
 **/

(function(window, factory) {
  var lazySizes = factory(window, window.document);
  window.lazySizes = lazySizes;
  if(typeof module == 'object' && module.exports){
    module.exports = lazySizes;
  }
}(window, function l(window, document) {
  'use strict';
  /*jshint eqnull:true */
  if(!document.getElementsByClassName){return;}

  var lazysizes, lazySizesConfig;

  var docElem = document.documentElement;

  var Date = window.Date;

  var supportPicture = window.HTMLPictureElement;

  var _addEventListener = 'addEventListener';

  var _getAttribute = 'getAttribute';

  var addEventListener = window[_addEventListener];

  var setTimeout = window.setTimeout;

  var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

  var requestIdleCallback = window.requestIdleCallback;

  var regPicture = /^picture$/i;

  var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

  var regClassCache = {};

  var forEach = Array.prototype.forEach;

  var hasClass = function(ele, cls) {
    if(!regClassCache[cls]){
      regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    }
    return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
  };

  var addClass = function(ele, cls) {
    if (!hasClass(ele, cls)){
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
    }
  };

  var removeClass = function(ele, cls) {
    var reg;
    if ((reg = hasClass(ele,cls))) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
    }
  };

  var addRemoveLoadEvents = function(dom, fn, add){
    var action = add ? _addEventListener : 'removeEventListener';
    if(add){
      addRemoveLoadEvents(dom, fn);
    }
    loadEvents.forEach(function(evt){
      dom[action](evt, fn);
    });
  };

  var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
    var event = document.createEvent('CustomEvent');

    if(!detail){
      detail = {};
    }

    detail.instance = lazysizes;

    event.initCustomEvent(name, !noBubbles, !noCancelable, detail);

    elem.dispatchEvent(event);
    return event;
  };

  var updatePolyfill = function (el, full){
    var polyfill;
    if( !supportPicture && ( polyfill = (window.picturefill || lazySizesConfig.pf) ) ){
      polyfill({reevaluate: true, elements: [el]});
    } else if(full && full.src){
      el.src = full.src;
    }
  };

  var getCSS = function (elem, style){
    return (getComputedStyle(elem, null) || {})[style];
  };

  var getWidth = function(elem, parent, width){
    width = width || elem.offsetWidth;

    while(width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth){
      width =  parent.offsetWidth;
      parent = parent.parentNode;
    }

    return width;
  };

  var rAF = (function(){
    var running, waiting;
    var firstFns = [];
    var secondFns = [];
    var fns = firstFns;

    var run = function(){
      var runFns = fns;

      fns = firstFns.length ? secondFns : firstFns;

      running = true;
      waiting = false;

      while(runFns.length){
        runFns.shift()();
      }

      running = false;
    };

    var rafBatch = function(fn, queue){
      if(running && !queue){
        fn.apply(this, arguments);
      } else {
        fns.push(fn);

        if(!waiting){
          waiting = true;
          (document.hidden ? setTimeout : requestAnimationFrame)(run);
        }
      }
    };

    rafBatch._lsFlush = run;

    return rafBatch;
  })();

  var rAFIt = function(fn, simple){
    return simple ?
      function() {
        rAF(fn);
      } :
      function(){
        var that = this;
        var args = arguments;
        rAF(function(){
          fn.apply(that, args);
        });
      }
    ;
  };

  var throttle = function(fn){
    var running;
    var lastTime = 0;
    var gDelay = 125;
    var rICTimeout = lazySizesConfig.ricTimeout;
    var run = function(){
      running = false;
      lastTime = Date.now();
      fn();
    };
    var idleCallback = requestIdleCallback && lazySizesConfig.ricTimeout ?
      function(){
        requestIdleCallback(run, {timeout: rICTimeout});

        if(rICTimeout !== lazySizesConfig.ricTimeout){
          rICTimeout = lazySizesConfig.ricTimeout;
        }
      } :
      rAFIt(function(){
        setTimeout(run);
      }, true)
    ;

    return function(isPriority){
      var delay;

      if((isPriority = isPriority === true)){
        rICTimeout = 33;
      }

      if(running){
        return;
      }

      running =  true;

      delay = gDelay - (Date.now() - lastTime);

      if(delay < 0){
        delay = 0;
      }

      if(isPriority || (delay < 9 && requestIdleCallback)){
        idleCallback();
      } else {
        setTimeout(idleCallback, delay);
      }
    };
  };

  //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
  var debounce = function(func) {
    var timeout, timestamp;
    var wait = 99;
    var run = function(){
      timeout = null;
      func();
    };
    var later = function() {
      var last = Date.now() - timestamp;

      if (last < wait) {
        setTimeout(later, wait - last);
      } else {
        (requestIdleCallback || run)(run);
      }
    };

    return function() {
      timestamp = Date.now();

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    };
  };

  (function(){
    var prop;

    var lazySizesDefaults = {
      lazyClass: 'lazyload',
      loadedClass: 'lazyloaded',
      loadingClass: 'lazyloading',
      preloadClass: 'lazypreload',
      errorClass: 'lazyerror',
      //strictClass: 'lazystrict',
      autosizesClass: 'lazyautosizes',
      srcAttr: 'data-src',
      srcsetAttr: 'data-srcset',
      sizesAttr: 'data-sizes',
      //preloadAfterLoad: false,
      minSize: 40,
      customMedia: {},
      init: true,
      expFactor: 1.5,
      hFac: 0.8,
      loadMode: 2,
      loadHidden: true,
      ricTimeout: 300,
    };

    lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

    for(prop in lazySizesDefaults){
      if(!(prop in lazySizesConfig)){
        lazySizesConfig[prop] = lazySizesDefaults[prop];
      }
    }

    window.lazySizesConfig = lazySizesConfig;

    setTimeout(function(){
      if(lazySizesConfig.init){
        init();
      }
    });
  })();

  var loader = (function(){
    var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

    var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

    var defaultExpand, preloadExpand, hFac;

    var regImg = /^img$/i;
    var regIframe = /^iframe$/i;

    var supportScroll = ('onscroll' in window) && !(/glebot/.test(navigator.userAgent));

    var shrinkExpand = 0;
    var currentExpand = 0;

    var isLoading = 0;
    var lowRuns = -1;

    var resetPreloading = function(e){
      isLoading--;
      if(e && e.target){
        addRemoveLoadEvents(e.target, resetPreloading);
      }

      if(!e || isLoading < 0 || !e.target){
        isLoading = 0;
      }
    };

    var isNestedVisible = function(elem, elemExpand){
      var outerRect;
      var parent = elem;
      var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

      eLtop -= elemExpand;
      eLbottom += elemExpand;
      eLleft -= elemExpand;
      eLright += elemExpand;

      while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
        visible = ((getCSS(parent, 'opacity') || 1) > 0);

        if(visible && getCSS(parent, 'overflow') != 'visible'){
          outerRect = parent.getBoundingClientRect();
          visible = eLright > outerRect.left &&
            eLleft < outerRect.right &&
            eLbottom > outerRect.top - 1 &&
            eLtop < outerRect.bottom + 1
          ;
        }
      }

      return visible;
    };

    var checkElements = function() {
      var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

      var lazyloadElems = lazysizes.elements;

      if((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

        i = 0;

        lowRuns++;

        if(preloadExpand == null){
          if(!('expand' in lazySizesConfig)){
            lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
          }

          defaultExpand = lazySizesConfig.expand;
          preloadExpand = defaultExpand * lazySizesConfig.expFactor;
        }

        if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
          currentExpand = preloadExpand;
          lowRuns = 0;
        } else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
          currentExpand = defaultExpand;
        } else {
          currentExpand = shrinkExpand;
        }

        for(; i < eLlen; i++){

          if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

          if(!supportScroll){unveilElement(lazyloadElems[i]);continue;}

          if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
            elemExpand = currentExpand;
          }

          if(beforeExpandVal !== elemExpand){
            eLvW = innerWidth + (elemExpand * hFac);
            elvH = innerHeight + elemExpand;
            elemNegativeExpand = elemExpand * -1;
            beforeExpandVal = elemExpand;
          }

          rect = lazyloadElems[i].getBoundingClientRect();

          if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
            (eLtop = rect.top) <= elvH &&
            (eLright = rect.right) >= elemNegativeExpand * hFac &&
            (eLleft = rect.left) <= eLvW &&
            (eLbottom || eLright || eLleft || eLtop) &&
            (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') &&
            ((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
            unveilElement(lazyloadElems[i]);
            loadedSomething = true;
            if(isLoading > 9){break;}
          } else if(!loadedSomething && isCompleted && !autoLoadElem &&
            isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
            (preloadElems[0] || lazySizesConfig.preloadAfterLoad) &&
            (preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto')))){
            autoLoadElem = preloadElems[0] || lazyloadElems[i];
          }
        }

        if(autoLoadElem && !loadedSomething){
          unveilElement(autoLoadElem);
        }
      }
    };

    var throttledCheckElements = throttle(checkElements);

    var switchLoadingClass = function(e){
      addClass(e.target, lazySizesConfig.loadedClass);
      removeClass(e.target, lazySizesConfig.loadingClass);
      addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
      triggerEvent(e.target, 'lazyloaded');
    };
    var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
    var rafSwitchLoadingClass = function(e){
      rafedSwitchLoadingClass({target: e.target});
    };

    var changeIframeSrc = function(elem, src){
      try {
        elem.contentWindow.location.replace(src);
      } catch(e){
        elem.src = src;
      }
    };

    var handleSources = function(source){
      var customMedia;

      var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

      if( (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
        source.setAttribute('media', customMedia);
      }

      if(sourceSrcset){
        source.setAttribute('srcset', sourceSrcset);
      }
    };

    var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
      var src, srcset, parent, isPicture, event, firesLoad;

      if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

        if(sizes){
          if(isAuto){
            addClass(elem, lazySizesConfig.autosizesClass);
          } else {
            elem.setAttribute('sizes', sizes);
          }
        }

        srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
        src = elem[_getAttribute](lazySizesConfig.srcAttr);

        if(isImg) {
          parent = elem.parentNode;
          isPicture = parent && regPicture.test(parent.nodeName || '');
        }

        firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

        event = {target: elem};

        if(firesLoad){
          addRemoveLoadEvents(elem, resetPreloading, true);
          clearTimeout(resetPreloadingTimer);
          resetPreloadingTimer = setTimeout(resetPreloading, 2500);

          addClass(elem, lazySizesConfig.loadingClass);
          addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
        }

        if(isPicture){
          forEach.call(parent.getElementsByTagName('source'), handleSources);
        }

        if(srcset){
          elem.setAttribute('srcset', srcset);
        } else if(src && !isPicture){
          if(regIframe.test(elem.nodeName)){
            changeIframeSrc(elem, src);
          } else {
            elem.src = src;
          }
        }

        if(isImg && (srcset || isPicture)){
          updatePolyfill(elem, {src: src});
        }
      }

      if(elem._lazyRace){
        delete elem._lazyRace;
      }
      removeClass(elem, lazySizesConfig.lazyClass);

      rAF(function(){
        if( !firesLoad || (elem.complete && elem.naturalWidth > 1)){
          if(firesLoad){
            resetPreloading(event);
          } else {
            isLoading--;
          }
          switchLoadingClass(event);
        }
      }, true);
    });

    var unveilElement = function (elem){
      var detail;

      var isImg = regImg.test(elem.nodeName);

      //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
      var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
      var isAuto = sizes == 'auto';

      if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)){return;}

      detail = triggerEvent(elem, 'lazyunveilread').detail;

      if(isAuto){
         autoSizer.updateElem(elem, true, elem.offsetWidth);
      }

      elem._lazyRace = true;
      isLoading++;

      lazyUnveil(elem, detail, isAuto, sizes, isImg);
    };

    var onload = function(){
      if(isCompleted){return;}
      if(Date.now() - started < 999){
        setTimeout(onload, 999);
        return;
      }
      var afterScroll = debounce(function(){
        lazySizesConfig.loadMode = 3;
        throttledCheckElements();
      });

      isCompleted = true;

      lazySizesConfig.loadMode = 3;

      throttledCheckElements();

      addEventListener('scroll', function(){
        if(lazySizesConfig.loadMode == 3){
          lazySizesConfig.loadMode = 2;
        }
        afterScroll();
      }, true);
    };

    return {
      _: function(){
        started = Date.now();

        lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
        preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
        hFac = lazySizesConfig.hFac;

        addEventListener('scroll', throttledCheckElements, true);

        addEventListener('resize', throttledCheckElements, true);

        if(window.MutationObserver){
          new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
        } else {
          docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
          docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
          setInterval(throttledCheckElements, 999);
        }

        addEventListener('hashchange', throttledCheckElements, true);

        //, 'fullscreenchange'
        ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name){
          document[_addEventListener](name, throttledCheckElements, true);
        });

        if((/d$|^c/.test(document.readyState))){
          onload();
        } else {
          addEventListener('load', onload);
          document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
          setTimeout(onload, 20000);
        }

        if(lazysizes.elements.length){
          checkElements();
          rAF._lsFlush();
        } else {
          throttledCheckElements();
        }
      },
      checkElems: throttledCheckElements,
      unveil: unveilElement
    };
  })();


  var autoSizer = (function(){
    var autosizesElems;

    var sizeElement = rAFIt(function(elem, parent, event, width){
      var sources, i, len;
      elem._lazysizesWidth = width;
      width += 'px';

      elem.setAttribute('sizes', width);

      if(regPicture.test(parent.nodeName || '')){
        sources = parent.getElementsByTagName('source');
        for(i = 0, len = sources.length; i < len; i++){
          sources[i].setAttribute('sizes', width);
        }
      }

      if(!event.detail.dataAttr){
        updatePolyfill(elem, event.detail);
      }
    });
    var getSizeElement = function (elem, dataAttr, width){
      var event;
      var parent = elem.parentNode;

      if(parent){
        width = getWidth(elem, parent, width);
        event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

        if(!event.defaultPrevented){
          width = event.detail.width;

          if(width && width !== elem._lazysizesWidth){
            sizeElement(elem, parent, event, width);
          }
        }
      }
    };

    var updateElementsSizes = function(){
      var i;
      var len = autosizesElems.length;
      if(len){
        i = 0;

        for(; i < len; i++){
          getSizeElement(autosizesElems[i]);
        }
      }
    };

    var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

    return {
      _: function(){
        autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
        addEventListener('resize', debouncedUpdateElementsSizes);
      },
      checkElems: debouncedUpdateElementsSizes,
      updateElem: getSizeElement
    };
  })();

  var init = function(){
    if(!init.i){
      init.i = true;
      autoSizer._();
      loader._();
    }
  };

  lazysizes = {
    cfg: lazySizesConfig,
    autoSizer: autoSizer,
    loader: loader,
    init: init,
    uP: updatePolyfill,
    aC: addClass,
    rC: removeClass,
    hC: hasClass,
    fire: triggerEvent,
    gW: getWidth,
    rAF: rAF,
  };

  return lazysizes;
}
));


} )( jQuery, window, document );
;
/*
* Frontend Script for Elementor
*/
; (function ($) {
    "use strict";

    var editMode = false;
    var isRellax = false;
    var currentDevice = '';

    var getElementSettings = function ($element, setting) {

        var elementSettings = {},
            modelCID = $element.data('model-cid');

        if (elementorFrontend.isEditMode() && modelCID) {
            var settings = elementorFrontend.config.elements.data[modelCID],
                type = settings.attributes.widgetType || settings.attributes.elType,
                settingsKeys = elementorFrontend.config.elements.keys[type];

            if (!settingsKeys) {
                settingsKeys = elementorFrontend.config.elements.keys[type] = [];

                jQuery.each(settings.controls, function (name, control) {
                    if (control.frontend_available) {
                        settingsKeys.push(name);
                    }
                });
            }

            jQuery.each(settings.getActiveControls(), function (controlKey) {
                if (-1 !== settingsKeys.indexOf(controlKey)) {
                    elementSettings[controlKey] = settings.attributes[controlKey];
                }
            });
        } else {
            elementSettings = $element.data('settings') || {};
        }

        return getItems(elementSettings, setting);

    };

    var getItems = function (items, itemKey) {
        if (itemKey) {
            var keyStack = itemKey.split('.'),
                currentKey = keyStack.splice(0, 1);

            if (!keyStack.length) {
                return items[currentKey];
            }

            if (!items[currentKey]) {
                return;
            }

            return this.getItems(items[currentKey], keyStack.join('.'));
        }

        return items;
    };

    var getUniqueLoopScopeId = function($scope){
        if ( $scope.data('jltma-template-widget-id') ) {
            return $scope.data('jltma-template-widget-id');
        }
        return $scope.data('id');
    };



    var Master_Addons = {

        animatedProgressbar: function (id, type, value, strokeColor, trailColor, strokeWidth, strokeTrailWidth) {
            var triggerClass = '.jltma-progress-bar-' + id;
            if ("line" == type) {
                new ldBar(triggerClass, {
                    "type": 'stroke',
                    "path": 'M0 10L100 10',
                    "aspect-ratio": 'none',
                    "stroke": strokeColor,
                    "stroke-trail": trailColor,
                    "stroke-width": strokeWidth,
                    "stroke-trail-width": strokeTrailWidth
                }).set(value);
            }
            if ("line-bubble" == type) {
                new ldBar(triggerClass, {
                    "type": 'stroke',
                    "path": 'M0 10L100 10',
                    "aspect-ratio": 'none',
                    "stroke": strokeColor,
                    "stroke-trail": trailColor,
                    "stroke-width": strokeWidth,
                    "stroke-trail-width": strokeTrailWidth
                }).set(value);
                $($('.jltma-progress-bar-' + id).find('.ldBar-label')).animate({
                    left: value + '%'
                }, 1000, 'swing');
            }
            if ("circle" == type) {
                new ldBar(triggerClass, {
                    "type": 'stroke',
                    "path": 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
                    "stroke-dir": 'normal',
                    "stroke": strokeColor,
                    "stroke-trail": trailColor,
                    "stroke-width": strokeWidth,
                    "stroke-trail-width": strokeTrailWidth,
                }).set(value);
            }
            if ("fan" == type) {
                new ldBar(triggerClass, {
                    "type": 'stroke',
                    "path": 'M10 90A40 40 0 0 1 90 90',
                    "stroke": strokeColor,
                    "stroke-trail": trailColor,
                    "stroke-width": strokeWidth,
                    "stroke-trail-width": strokeTrailWidth,
                }).set(value);
            }
        },


        // Master Addons: Headlines

        MA_Animated_Headlines: function ($scope, $) {
            try {
                (function ($) {

                    Master_Addons.MA_Animated_Headlines.elementSettings    = getElementSettings( $scope );

                    /*----------- Animated Headlines --------------*/
                    //set animation timing
                    var $animatedHeaderContainer     = $scope.find('.jltma-animated-headline').eq(0),

                        animationDelay = Master_Addons.MA_Animated_Headlines.elementSettings.anim_delay ? Master_Addons.MA_Animated_Headlines.elementSettings.anim_delay : 2500,

                        //loading bar effect
                        barAnimationDelay = Master_Addons.MA_Animated_Headlines.elementSettings.bar_anim_delay ? Master_Addons.MA_Animated_Headlines.elementSettings.bar_anim_delay : 3800,
                        barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file

                        //letters effect
                        lettersDelay = Master_Addons.MA_Animated_Headlines.elementSettings.letters_anim_delay ? Master_Addons.MA_Animated_Headlines.elementSettings.letters_anim_delay : 50,

                        //type effect
                        typeLettersDelay = Master_Addons.MA_Animated_Headlines.elementSettings.type_anim_delay ? Master_Addons.MA_Animated_Headlines.elementSettings.type_anim_delay : 150,
                        selectionDuration = Master_Addons.MA_Animated_Headlines.elementSettings.type_selection_delay ? Master_Addons.MA_Animated_Headlines.elementSettings.type_selection_delay : 500,
                        typeAnimationDelay = selectionDuration + 800,

                        //clip effect
                        revealDuration = Master_Addons.MA_Animated_Headlines.elementSettings.clip_reveal_delay ? Master_Addons.MA_Animated_Headlines.elementSettings.clip_reveal_delay : 600,
                        revealAnimationDelay = Master_Addons.MA_Animated_Headlines.elementSettings.clip_anim_duration ? Master_Addons.MA_Animated_Headlines.elementSettings.clip_anim_duration : 1500;


                    Master_Addons.MA_Animated_Headlines.singleLetters = function($words) {
                        $words.each(function(){
                            var word = $(this),
                                letters = word.text().trim().split(''),
                                selected = word.hasClass('is-visible');

                            for( var i=0; i<letters.length; i++){
                                if(word.parents('.rotate-2').length > 0){ letters[i] = '<em>' + letters[i] + '</em>'; }
                                letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
                            }
                            var newLetters = letters.join('');
                            word.html(newLetters).css('opacity', 1);
                        });
                    }

                    // function animateHeadline($headlines) {
                    Master_Addons.MA_Animated_Headlines.animateHeadline = function($headlines) {

                        var duration = animationDelay;

                        $headlines.each(function(){
                            var headline = $(this);

                            if(headline.hasClass('loading-bar')) {
                                duration = barAnimationDelay;
                                setTimeout(function(){ headline.find('.ma-el-words-wrapper').addClass('is-loading') }, barWaiting);
                            } else if (headline.hasClass('clip')){
                                var spanWrapper = headline.find('.ma-el-words-wrapper'),
                                    newWidth = spanWrapper.width() + 10
                                spanWrapper.css('width', newWidth);
                            } else if (!headline.hasClass('type') ) {
                                //assign to .ma-el-words-wrapper the width of its longest word
                                var words = headline.find('.ma-el-words-wrapper b'),
                                    width = 0;

                                words.each(function(){
                                    var wordWidth = $(this).width();
                                    if (wordWidth > width) width = wordWidth;
                                });
                                headline.find('.ma-el-words-wrapper').css('width', width);
                            };

                            //trigger animation
                            setTimeout(function(){ Master_Addons.MA_Animated_Headlines.hideWord( headline.find('.is-visible').eq(0) ) }, duration);
                        });
                    }


                    Master_Addons.MA_Animated_Headlines.hideWord = function($word) {

                        var nextWord = Master_Addons.MA_Animated_Headlines.takeNext($word);

                        if($word.parents('.jltma-animated-headline').hasClass('type')) {
                            var parentSpan = $word.parent('.jltma-words-wrapper');
                            parentSpan.addClass('selected').removeClass('waiting');
                            setTimeout(function(){
                                parentSpan.removeClass('selected');
                                $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
                            }, selectionDuration);
                            setTimeout(function(){ Master_Addons.MA_Animated_Headlines.showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

                        } else if($word.parents('.jltma-animated-headline').hasClass('letters')) {
                            var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
                            Master_Addons.MA_Animated_Headlines.hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
                            Master_Addons.MA_Animated_Headlines.showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

                        }  else if($word.parents('.jltma-animated-headline').hasClass('clip')) {
                            $word.parents('.jltma-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
                                Master_Addons.MA_Animated_Headlines.switchWord($word, nextWord);
                                Master_Addons.MA_Animated_Headlines.showWord(nextWord);
                            });

                        } else if ($word.parents('.jltma-animated-headline').hasClass('loading-bar')){
                            $word.parents('.jltma-words-wrapper').removeClass('is-loading');
                            Master_Addons.MA_Animated_Headlines.switchWord($word, nextWord);
                            setTimeout(function(){ Master_Addons.MA_Animated_Headlines.hideWord(nextWord) }, barAnimationDelay);
                            setTimeout(function(){ $word.parents('.jltma-words-wrapper').addClass('is-loading') }, barWaiting);

                        } else {
                            Master_Addons.MA_Animated_Headlines.switchWord($word, nextWord);
                            setTimeout(function(){ Master_Addons.MA_Animated_Headlines.hideWord(nextWord) }, animationDelay);
                        }
                    }

                    Master_Addons.MA_Animated_Headlines.showWord = function($word, $duration) {
                        if($word.parents('.jltma-animated-headline').hasClass('type')) {
                            Master_Addons.MA_Animated_Headlines.showLetter($word.find('i').eq(0), $word, false, $duration);
                            $word.addClass('is-visible').removeClass('is-hidden');

                        }  else if($word.parents('.jltma-animated-headline').hasClass('clip')) {
                            $word.parents('.jltma-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
                                setTimeout(function(){ Master_Addons.MA_Animated_Headlines.hideWord($word) }, revealAnimationDelay);
                            });
                        }
                    }

                    Master_Addons.MA_Animated_Headlines.hideLetter = function($letter, $word, $bool, $duration) {
                        $letter.removeClass('in').addClass('out');

                        if(!$letter.is(':last-child')) {
                            setTimeout(function(){ Master_Addons.MA_Animated_Headlines.hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
                        } else if($bool) {
                            setTimeout(function(){ Master_Addons.MA_Animated_Headlines.hideWord(Master_Addons.MA_Animated_Headlines.takeNext($word)) }, animationDelay);
                        }

                        if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
                            var nextWord = Master_Addons.MA_Animated_Headlines.takeNext($word);
                            Master_Addons.MA_Animated_Headlines.switchWord($word, nextWord);
                        }
                    }

                    Master_Addons.MA_Animated_Headlines.showLetter = function($letter, $word, $bool, $duration) {
                        $letter.addClass('in').removeClass('out');

                        if(!$letter.is(':last-child')) {
                            setTimeout(function(){ Master_Addons.MA_Animated_Headlines.showLetter($letter.next(), $word, $bool, $duration); }, $duration);
                        } else {
                            if($word.parents('.jltma-animated-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.jltma-words-wrapper').addClass('waiting'); }, 200);}
                            if(!$bool) { setTimeout(function(){ Master_Addons.MA_Animated_Headlines.hideWord($word) }, animationDelay) }
                        }
                    }

                    Master_Addons.MA_Animated_Headlines.takeNext = function($word) {
                        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
                    }

                    Master_Addons.MA_Animated_Headlines.takePrev = function($word) {
                        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
                    }

                    Master_Addons.MA_Animated_Headlines.switchWord = function($oldWord, $newWord) {
                        $oldWord.removeClass('is-visible').addClass('is-hidden');
                        $newWord.removeClass('is-hidden').addClass('is-visible');
                    }

                    Master_Addons.MA_Animated_Headlines.initHeadline = function() {
                        //insert <i> element for each letter of a changing word
                        Master_Addons.MA_Animated_Headlines.singleLetters($('.jltma-animated-headline.letters').find('b'));
                        //initialise headline animation
                        Master_Addons.MA_Animated_Headlines.animateHeadline($('.jltma-animated-headline'));
                    }

                    Master_Addons.MA_Animated_Headlines.initHeadline();

                })(jQuery);
            } catch (e) {
                //We can also throw from try block and catch it here
                // No Error Show
            }

        },

        // Master Addons: Accordion
        MA_Accordion: function ($scope, $) {

            var elementSettings   = getElementSettings( $scope ),
                $accordionHeader  = $scope.find(".jltma-accordion-header"),
                $accordionType    = elementSettings.accordion_type,
                $accordionSpeed   = elementSettings.toggle_speed ? elementSettings.toggle_speed : 300;

            // Open default actived tab
            $accordionHeader.each(function () {
                if ($(this).hasClass("active-default")) {
                    $(this).addClass("show active");
                    $(this).next().slideDown($accordionSpeed);
                }
            });

            // Remove multiple click event for nested accordion
            $accordionHeader.unbind("click");

            $accordionHeader.click(function (e) {
                e.preventDefault();
                var $this = $(this);
                if ($accordionType === "accordion") {
                    if ($this.hasClass("show")) {
                        $this.removeClass("show active");
                        $this.next().slideUp($accordionSpeed);
                    } else {
                        $this.parent().parent().find(".jltma-accordion-header").removeClass("show active");
                        $this.parent().parent().find(".jltma-accordion-tab-content").slideUp($accordionSpeed);
                        $this.toggleClass("show active");
                        $this.next().slideDown($accordionSpeed);
                    }
                } else {
                    // Toggle type Accordion
                    if ($this.hasClass("show")) {
                        $this.next().slideUp($accordionSpeed);
                    } else {
                        $this.addClass("show active");
                        $this.next().slideDown($accordionSpeed);
                    }
                }
            });

        },



        // Master Addons: Tabs

        MA_Tabs: function ($scope, $) {

            try {
                (function ($) {

                    var $tabsWrapper    = $scope.find('[data-tabs]'),
                        $tabEffect      = $tabsWrapper.data('tab-effect');


                    $tabsWrapper.each( function() {
                        var tab = $(this);
                        var isTabActive = false;
                        var isContentActive = false;

                        tab.find('[data-tab]').each(function () {
                            if ($(this).hasClass('active')) {
                                isTabActive = true;
                            }
                        });
                        tab.find('.jltma--advance-tab-content').each(function () {
                            if ($(this).hasClass('active')) {
                                isContentActive = true;
                            }
                        });
                        if (!isContentActive) {
                            tab.find('.jltma--advance-tab-content').eq(0).addClass('active');
                        }

                        if( $tabEffect == "hover"){
                            tab.find('[data-tab]').hover(function() {
                                var $data_tab_id = $(this).data('tab-id');
                                $(this).siblings().removeClass('active');
                                $(this).addClass('active');
                                $(this).closest('[data-tabs]').find('.jltma--advance-tab-content').removeClass('active');
                                $('#' + $data_tab_id).addClass('active');
                            });
                        } else{
                            tab.find('[data-tab]').click(function() {
                                var $data_tab_id = $(this).data('tab-id');
                                $(this).siblings().removeClass('active');
                                $(this).addClass('active');
                                $(this).closest('[data-tabs]').find('.jltma--advance-tab-content').removeClass('active');
                                $('#' + $data_tab_id).addClass('active');
                            });
                        }
                    });

                })(jQuery);
            } catch (e) {
                //We can also throw from try block and catch it here
                // No Error Show
            }


        },


        //Master Addons: Progressbar
        MA_ProgressBar: function ($scope, $) {
            var id                  = $scope.data('id'),
                $progressBarWrapper = $scope.find('.jltma-progress-bar-' + id),
                type                = $progressBarWrapper.data('type'),
                value               = $progressBarWrapper.data('progress-bar-value'),
                strokeWidth         = $progressBarWrapper.data('progress-bar-stroke-width'),
                strokeTrailWidth    = $progressBarWrapper.data('progress-bar-stroke-trail-width'),
                color               = $progressBarWrapper.data('stroke-color'),
                trailColor          = $progressBarWrapper.data('stroke-trail-color');
            Master_Addons.animatedProgressbar(id, type, value, color, trailColor, strokeWidth, strokeTrailWidth);
        },

        //Master Addons: Image Hotspot
        MA_Image_Hotspot: function ($scope, $) {

            var elementSettings      = getElementSettings( $scope ),
                $ma_hotspot          = $scope.find( '.jltma-hotspots-container' );

            if ( ! $ma_hotspot.length ) {
                return;
            }

            var $tooltip = $ma_hotspot.find('> .jltma-tooltip-item'),
                widgetID = $scope.data('id');

            $tooltip.each( function( index ) {
                tippy( this, {
                    allowHTML: true,
                    theme    : 'jltma-tippy-' + widgetID
                });
            });
        },


        //Master Addons: Pricing Table
        MA_Pricing_Table: function ($scope, $) {

            var $jltma_pricing_table               = $scope.find( '.jltma-price-table-details ul' );

            if ( ! $jltma_pricing_table.length ) {
                return;
            }

            var $tooltip = $jltma_pricing_table.find('> .jltma-tooltip-item'),
                widgetID = $scope.data('id');

            $tooltip.each( function( index ) {
                tippy( this, {
                    allowHTML: true,
                    theme    : 'jltma-pricing-table-tippy-' + widgetID
                });
            });
        },


        

        // Dynamic Data Tables
        JLTMA_Data_Table: function ($scope, $) {
            console.log('jashljkfahsdljkf');
            console.log('jltma_data_table_vars',jltma_data_table_vars);
            console.log('a',a );

            var a = $scope.find(".jltma-data-table-container"),
                n = a.data("source"),
                r = a.data("sourcecsv");
            if (1 == a.data("buttons")) var l = "Bfrtip";
            else l = "frtip";
            if ("custom" == n) {
                var i = $scope.find("table thead tr th").length;
                $scope.find("table tbody tr").each(function() {
                    if (e(this).find("td").length < i) {
                        var t = i - e(this).find("td").length;
                        e(this).append(new Array(++t).join("<td></td>"))
                    }
                }), $scope.find(".jltma-data-table").DataTable({
                    dom: l,
                    paging: a.data("paging"),
                    pagingType: "numbers",
                    pageLength: a.data("pagelength"),
                    info: a.data("info"),
                    scrollX: !0,
                    searching: a.data("searching"),
                    ordering: a.data("ordering"),
                    buttons: [{
                        extend: "csvHtml5",
                        text: jltma_data_table_vars.csvHtml5
                    }, {
                        extend: "excelHtml5",
                        text: jltma_data_table_vars.excelHtml5
                    }, {
                        extend: "pdfHtml5",
                        text: jltma_data_table_vars.pdfHtml5
                    }, {
                        extend: "print",
                        text: jltma_data_table_vars.print
                    }],
                    language: {
                        lengthMenu: jltma_data_table_vars.lengthMenu,
                        zeroRecords: jltma_data_table_vars.zeroRecords,
                        info: jltma_data_table_vars.info,
                        infoEmpty: jltma_data_table_vars.infoEmpty,
                        infoFiltered: jltma_data_table_vars.infoFiltered,
                        search: "",
                        searchPlaceholder: jltma_data_table_vars.searchPlaceholder,
                        processing: jltma_data_table_vars.processing
                    }
                })
            } else if ("csv" == n) {
                ({
                    init: function(t) {
                        var a = (t = t || {}).csv_path || "",
                            n = $scope.element || $("#table-container"),
                            r = $scope.csv_options || {},
                            l = $scope.datatables_options || {},
                            i = $scope.custom_formatting || [],
                            s = {};
                        $.each(i, function(e, t) {
                            var a = t[0],
                                n = t[1];
                            s[a] = n
                        });
                        var d = $('<table class="jltma-data-table cell-border" style="width:100%;visibility:hidden;">');
                        n.empty().append(d), $.when($.get(a)).then(function(t) {
                            for (var a = e.csv.toArrays(t, r), n = $("<thead></thead>"), i = a[0], o = $("<tr></tr>"), c = 0; c < i.length; c++) o.append($("<th></th>").text(i[c]));
                            n.append(o), d.append(n);
                            for (var m = $("<tbody></tbody>"), p = 1; p < a.length; p++)
                                for (var _ = $("<tr></tr>"), g = 0; g < a[p].length; g++) {
                                    var b = $("<td></td>"),
                                        f = s[g];
                                    f ? b.html(f(a[p][g])) : b.text(a[p][g]), _.append(b), m.append(_)
                                }
                            d.append(m), d.DataTable(l)
                        })
                    }
                }).init({
                    csv_path: r,
                    element: a,
                    datatables_options: {
                        dom: l,
                        paging: a.data("paging"),
                        pagingType: "numbers",
                        pageLength: a.data("pagelength"),
                        info: a.data("info"),
                        scrollX: !0,
                        searching: a.data("searching"),
                        ordering: a.data("ordering"),
                        buttons: [{
                            extend: "csvHtml5",
                            text: jltma_data_table_vars.csvHtml5
                        }, {
                            extend: "excelHtml5",
                            text: jltma_data_table_vars.excelHtml5
                        }, {
                            extend: "pdfHtml5",
                            text: jltma_data_table_vars.pdfHtml5
                        }, {
                            extend: "print",
                            text: jltma_data_table_vars.print
                        }],
                        language: {
                            lengthMenu: jltma_data_table_vars.lengthMenu,
                            zeroRecords: jltma_data_table_vars.zeroRecords,
                            info: jltma_data_table_vars.info,
                            infoEmpty: jltma_data_table_vars.infoEmpty,
                            infoFiltered: jltma_data_table_vars.infoFiltered,
                            search: "",
                            searchPlaceholder: jltma_data_table_vars.searchPlaceholder,
                            processing: jltma_data_table_vars.processing
                        }
                    }
                })
            }
            $scope.find(".jltma-data-table").css("visibility", "visible");
        },

        // Dropdown Button
        JLTMA_Dropdown_Button: function ($scope, $) {
            console.log('sdfds');

            $scope.find(".jltma-dropdown").hover(
                function () {
                    $scope.find(".jltma-dd-menu").addClass("jltma-dd-menu-opened");
                },
                function () {
                    $scope.find(".jltma-dd-menu").removeClass("jltma-dd-menu-opened");
                }
            );
        },

        JLTMA_WC_Add_To_Cart: function ($scope, $) {
            $( document ).on( 'click', '.ajax_add_to_cart', function(e) {
                $( this ).append('<i class="fa fa-spinner animated rotateIn infinite"></i>');
            });

            $(".jltma-wc-add-to-cart-btn-custom-js").each(function( index ) {
                var custom_css = $(this).attr("data-jltma-wc-add-to-cart-btn-custom-css");
                $( custom_css ).appendTo( "head" );
            });
        },

        /* Offcanvas Menu */
        MA_Offcanvas_Menu: function ($scope, $) {
            Master_Addons.MA_Offcanvas_Menu.elementSettings = $scope.data('settings');

            var widgetSelector     = 'jltma-offcanvas-menu',
                getID              = $scope.data('id'),
                getElementSettings = $scope.data('settings'),
                is_esc_close       = getElementSettings.esc_close ? getElementSettings.esc_close : '',
                classes = {
                    widget                   : widgetSelector,
                    triggerButton            : 'jltma-offcanvas__trigger',
                    offcanvasContent         : 'jltma-offcanvas__content',
                    offcanvasContentBody     : "".concat(widgetSelector, "__body"),
                    offcanvasContainer       : "".concat(widgetSelector, "__container"),
                    offcanvasContainerOverlay: "".concat(widgetSelector, "__container__overlay"),
                    offcanvasWrapper         : "".concat(widgetSelector, "__wrapper"),
                    closeButton              : "".concat(widgetSelector, "__close"),
                    menuArrow                : "".concat(widgetSelector, "__arrow"),
                    menuInner                : "".concat(widgetSelector, "__menu-inner"),
                    itemHasChildrenLink      : 'menu-item-has-children > a',
                    contentClassPart         : 'jltma-offcanvas-content',
                    contentOpenClass         : 'jltma-offcanvas-content-open',
                    customContainer          : "".concat(widgetSelector, "__custom-container")
                },
                selectors = {
                    widget                   : ".".concat(classes.widget),
                    triggerButton            : ".".concat(classes.triggerButton),
                    offcanvasContent         : ".".concat(classes.offcanvasContent),
                    offcanvasContentBody     : ".".concat(classes.offcanvasContentBody),
                    offcanvasContainer       : ".".concat(classes.offcanvasContainer),
                    offcanvasContainerOverlay: ".".concat(classes.offcanvasContainerOverlay),
                    offcanvasWrapper         : ".".concat(classes.offcanvasWrapper),
                    closeButton              : ".".concat(classes.closeButton),
                    menuArrow                : ".".concat(classes.menuArrow),
                    menuParent               : ".".concat(classes.menuInner, " .").concat(classes.itemHasChildrenLink),
                    contentClassPart         : ".".concat(classes.contentClassPart),
                    contentOpenClass         : ".".concat(classes.contentOpenClass),
                    customContainer          : ".".concat(classes.customContainer)
                },
                elements = {
                    $document            : jQuery(document),
                    $html                : jQuery(document).find('html'),
                    $body                : jQuery(document).find('body'),
                    $outsideContainer    : jQuery(selectors.offcanvasContainer),
                    $containerOverlay    : jQuery(selectors.offcanvasContainerOverlay),
                    $triggerButton       : $scope.find(selectors.triggerButton),
                    $offcanvasContent    : $scope.find(selectors.offcanvasContent),
                    $offcanvasContentBody: $scope.find(selectors.offcanvasContentBody),
                    $offcanvasContainer  : $scope.find(selectors.offcanvasContainer),
                    $offcanvasWrapper    : $scope.find(selectors.offcanvasWrapper),
                    $closeButton         : $scope.find(selectors.closeButton),
                    $menuParent          : $scope.find(selectors.menuParent)
                };

            // resetCanvas
            Master_Addons.MA_Offcanvas_Menu.resetCanvas = function() {
                var contentId = getID;
                elements.$html.addClass("".concat(classes.offcanvasContent, "-widget"));

                if (!elements.$outsideContainer.length) {
                    elements.$body.append("<div class=\"".concat(classes.offcanvasContainerOverlay, "\" />"));
                    elements.$body.wrapInner("<div class=\"".concat(classes.offcanvasContainer, "\" />"));
                    elements.$offcanvasContent.insertBefore(selectors.offcanvasContainer);
                }

                var $wrapperContent = elements.$offcanvasWrapper.find(selectors.offcanvasContent);

                if ($wrapperContent.length) {

                    var $containerContent = elements.$outsideContainer.find("> .".concat(classes.contentClassPart, "-").concat(contentId));

                    if ($containerContent.length) {
                    $containerContent.remove();
                    }

                    var $bodyContent = elements.$body.find("> .".concat(classes.contentClassPart, "-").concat(contentId));

                    if ($bodyContent.length) {
                    $bodyContent.remove();
                    }

                    if (elements.$html.hasClass(classes.contentOpenClass)) {
                        $wrapperContent.addClass('active');
                    }

                    elements.$body.prepend($wrapperContent);
                }
            }



            //Master_Addons.MA_Offcanvas_Menu.offcanvasClose
            Master_Addons.MA_Offcanvas_Menu.offcanvasClose = function(){
                var openId = elements.$html.data('open-id');
                var regex = new RegExp("".concat(classes.contentClassPart, "-.*"));
                var classList = elements.$html.attr('class').split(/\s+/);

                jQuery("".concat(selectors.contentClassPart, "-").concat(openId)).removeClass('active');
                elements.$triggerButton.removeClass('trigger-active');
                classList.forEach(function (className) {
                    if (!className.match(regex)) {
                    return;
                    }
                    elements.$html.removeClass(className);
                });
                elements.$html.removeData('open-id');
            }

            // containerClick
            Master_Addons.MA_Offcanvas_Menu.containerClick = function (event) {

                var openId = elements.$html.data('open-id');

                if (getID !== openId || !getElementSettings.overlay_close) {
                    return;
                }

                if (!elements.$html.hasClass(classes.contentOpenClass)) {
                    return;
                }
                Master_Addons.MA_Offcanvas_Menu.offcanvasClose();
            }

            Master_Addons.MA_Offcanvas_Menu.closeESC = function(event){

                if (27 !== event.keyCode) {
                    return;
                }
                Master_Addons.MA_Offcanvas_Menu.offcanvasClose();
                $(elements.$triggerButton).removeClass('trigger-active');
            }


            Master_Addons.MA_Offcanvas_Menu.addLoaderIcon = function() {
                jQuery(document).find('.jltma-offcanvas__content').addClass('jltma-loading');
            }
            Master_Addons.MA_Offcanvas_Menu.removeLoaderIcon = function() {
                jQuery(document).find('.jltma-offcanvas__content').removeClass('jltma-loading');
            }

            // bindEvents
            Master_Addons.MA_Offcanvas_Menu.bindEvents = function () {

                elements.$body.on('click', selectors.offcanvasContainerOverlay, Master_Addons.MA_Offcanvas_Menu.containerClick.bind(this));

                if ('yes' === is_esc_close) {
                    elements.$document.on('keydown', Master_Addons.MA_Offcanvas_Menu.closeESC.bind(this));
                }

                elements.$triggerButton.on('click', Master_Addons.MA_Offcanvas_Menu.offcanvasContent.bind(this));
                elements.$closeButton.on('click', Master_Addons.MA_Offcanvas_Menu.offcanvasClose.bind(this));
                elements.$menuParent.on('click', Master_Addons.MA_Offcanvas_Menu.onParentClick.bind(this));

                $(elements.$menuParent).on('change',function(){
                    Master_Addons.MA_Offcanvas_Menu.onParentClick.bind($(this));
                });

                $("[data-settings=animation_type]").on('click',function(){
                    Master_Addons.MA_Offcanvas_Menu.changeControl.bind($(this));
                });
            }


            //perfectScrollInit
            Master_Addons.MA_Offcanvas_Menu.perfectScrollInit = function() {
                if (!Master_Addons.MA_Offcanvas_Menu.scrollPerfect) {
                    Master_Addons.MA_Offcanvas_Menu.scrollPerfect = new PerfectScrollbar(elements.$offcanvasContentBody.get(0), {
                        wheelSpeed: 0.5,
                        suppressScrollX: true
                    });
                    return;
                }

                Master_Addons.MA_Offcanvas_Menu.scrollPerfect.update();
            }

            //onEdit
            Master_Addons.MA_Offcanvas_Menu.onEdit = function() {
                // elementorFrontend.isEditMode()
                if (!Master_Addons.MA_Offcanvas_Menu.isEdit) {
                    return;
                }

                if (undefined === $element.data('opened')) {
                    $element.data('opened', 'false');
                }

                elementor.channels.editor.on('section:activated', Master_Addons.MA_Offcanvas_Menu.sectionActivated.bind(this));
            }


            //sectionActivated
            Master_Addons.MA_Offcanvas_Menu.sectionActivated = function(sectionName, editor) {
                var elementsData = elementorFrontend.config.elements.data[this.getModelCID()];
                var editedElement = editor.getOption('editedElementView');

                if (this.getModelCID() !== editor.model.cid || elementsData.get('widgetType') !== editedElement.model.get('widgetType')) {
                return;
                }

                if (-1 !== this.sectionsArray.indexOf(sectionName)) {
                if ('true' === $element.data('opened')) {
                    var editedModel = editor.getOption('model');
                    Master_Addons.MA_Offcanvas_Menu.offcanvasContent(null, editedModel.get('id'));
                }

                $element.data('opened', 'true');

                } else {
                    Master_Addons.MA_Offcanvas_Menu.offcanvasClose();
                }
            }

            //offcanvasContent
            Master_Addons.MA_Offcanvas_Menu.offcanvasContent = function(event) {
                var widgetId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                var boxPosition   = getElementSettings.canvas_position;
                var offcanvasType = getElementSettings.animation_type;
                var contentId     = getID;

                if (null !== widgetId) {
                    contentId = widgetId;
                }
                elements.$triggerButton.addClass('trigger-active');

                jQuery("".concat(selectors.contentClassPart, "-").concat(contentId)).addClass('active');
                elements.$html.addClass("".concat(classes.contentOpenClass)).addClass("".concat(classes.contentOpenClass, "-").concat(contentId)).addClass("".concat(classes.contentClassPart, "-").concat(boxPosition)).addClass("".concat(classes.contentClassPart, "-").concat(offcanvasType)).data('open-id', contentId);
            }


            //onParentClick
            Master_Addons.MA_Offcanvas_Menu.onParentClick = function(event) {
                var $clickedItem = jQuery(event.target);
                var noLinkArray = ['', '#'];
                var $menuParent = $clickedItem.hasClass(classes.menuArrow) ? $clickedItem.parent() : $clickedItem;

                if ($clickedItem.hasClass(classes.menuArrow) || -1 !== noLinkArray.indexOf($clickedItem.attr('href')) || !$menuParent.hasClass('active')) {
                event.preventDefault();
                }

                var $menuParentNext = $menuParent.next();
                $menuParent.removeClass('active');
                $menuParentNext.slideUp('normal');

                if ($menuParentNext.is('ul') && !$menuParentNext.is(':visible')) {
                    $menuParent.addClass('active');
                    $menuParentNext.slideDown('normal');
                }
            }


            //changeControl
            Master_Addons.MA_Offcanvas_Menu.changeControl = function() {
                Master_Addons.MA_Offcanvas_Menu.offcanvasClose();
            }

            // onInit
            Master_Addons.MA_Offcanvas_Menu.onInit = function() {

                Master_Addons.MA_Offcanvas_Menu.resetCanvas();

                // Master_Addons.MA_Offcanvas_Menu.perfectScrollInit();
                // Master_Addons.MA_Offcanvas_Menu.onEdit();
                Master_Addons.MA_Offcanvas_Menu.bindEvents();
            }
            // onInit

            return Master_Addons.MA_Offcanvas_Menu.onInit();
        },


        //Master Addons: Image Filter Gallery
        MA_Image_Filter_Gallery: function ($scope, $) {

            var elementSettings     = getElementSettings( $scope ),
                $jltma_image_filter_gallery_wrapper   = $scope.find('.jltma-image-filter-gallery-wrapper').eq(0),
                $ma_el_image_filter_gallery_container   = $scope.find('.jltma-image-filter-gallery'),
                $ma_el_image_filter_gallery_nav         = $scope.find('.jltma-image-filter-nav'),
                $ma_el_image_filter_gallery_wrapper     = $scope.find('.jltma-image-filter-gallery-wrapper'),
                $uniqueId 		    = getUniqueLoopScopeId( $scope ),
                $maxtilt         = elementSettings.ma_el_image_gallery_max_tilt,
                $perspective     = elementSettings.ma_el_image_gallery_perspective,
                $speed           = elementSettings.ma_el_image_gallery_speed,
                $axis            = elementSettings.ma_el_image_gallery_tilt_axis,
                $glare           = elementSettings.ma_el_image_gallery_glare,
                $overlay_speed   = elementSettings.line_location,
                $ma_el_image_gallery_tooltip   = elementSettings.ma_el_image_gallery_tooltip,
                $container       = $('.elementor-element-' + $uniqueId + ' .jltma-image-filter-gallery'),
                layoutMode       = $ma_el_image_filter_gallery_wrapper.hasClass('jltma-masonry-yes') ? 'masonry' : 'fitRows';

            if (!$jltma_image_filter_gallery_wrapper.length) {
                return;
            }

            if($ma_el_image_gallery_tooltip =="yes"){

                var $img_filter_gallery = $jltma_image_filter_gallery_wrapper.find('ul.jltma-tooltip');

                if ( ! $img_filter_gallery.length ) {
                    return;
                }

                var $tooltip = $img_filter_gallery.find('> .jltma-tooltip-item'),
                    widgetID = $scope.data('id');

                $tooltip.each( function( index ) {
                    tippy( this, {
                        allowHTML: true,
                        theme    : 'jltma-image-filter-tippy-' + widgetID
                    });
                });
            }

            //Masonry Start
            // let container_outerheight = $container.outerHeight();
            var optValues = {
                filter: '*',
                itemSelector: '.jltma-image-filter-item',
                percentPosition : true,
                animationOptions : {
                    duration    : 750,
                    easing      : 'linear',
                    queue       : false
                }
            };
            if(layoutMode === 'fitRows'){
                optValues['layoutMode'] = 'fitRows';
            }

            // if(layoutMode === 'masonry'){
            //     adata['macolumnWidthsonry'] = '.jltma-image-filter-item';
            //     adata['horizontalOrder'] = true;
            // };

            // var $grid = $container.isotope(adata);
            // $grid.imagesLoaded().progress(function() {
            //     $grid.isotope('layout');
            //     $scope.find('.jltma-image-filter-gallery').css({"min-height":"300px" ,"height" : container_outerheight});
            // });

            if ($.isFunction($.fn.imagesLoaded)) {
                $ma_el_image_filter_gallery_container.imagesLoaded(function () {
                    if ($.isFunction($.fn.isotope)) {
                        $ma_el_image_filter_gallery_container.isotope(optValues);
                    }
                });
            }
            //Masonry End


            // Tilt Effect Start
            if($axis === 'x'){
                $axis = 'y';
            }else if($axis === 'y'){
                $axis = 'x';
            }else{
                $axis = 'both';
            }

            if($glare === 'yes'){
                var $max_glare =   elementSettings.ma_el_image_gallery_max_glare;
            }

            if($glare === 'yes'){
                $glare = true;
            } else{
                $glare = false;
            }

            if($scope.find('.jltma-tilt-enable')){
                var tilt_args = {
                    maxTilt:        $maxtilt,
                    perspective:    $perspective,   // Transform perspective, the lower the more extreme the tilt gets.
                    //easing:         "cubic-bezier(.03,.98,.52,.99)",   // Easing on enter/exit.
                    easing :        "linear",
                    scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
                    speed:          $speed,    // Speed of the enter/exit transition.
                    disableAxis:    $axis,
                    transition:     true,   // Set a transition on enter/exit.
                    reset:          true,   // If the tilt effect has to be reset on exit.
                    glare:          $glare,  // Enables glare effect
                    maxGlare:       $max_glare       // From 0 - 1.
                }

                $scope.find('.jltma-tilt').tilt(tilt_args);
            }
            // Tilt Effect End


            $ma_el_image_filter_gallery_nav.on('click', 'li', function () {
                $ma_el_image_filter_gallery_nav.find('.active').removeClass('active');
                $(this).addClass('active');

                if ($.isFunction($.fn.isotope)) {
                    var selector = $(this).attr('data-filter');
                    $ma_el_image_filter_gallery_container.isotope({
                        filter: selector,
                    });
                    return false;
                }
            });

            $( ".jltma-fancybox" ).fancybox({
                // protect: false,
                animationDuration: 366,
                transitionDuration: 366,
                transitionEffect: "fade", // Transition effect between slides
                animationEffect: "fade",
                preventCaptionOverlap : true,
                // loop: false,
                infobar: false,
                buttons: [
                    "zoom",
                    "share",
                    "slideShow",
                    "fullScreen",
                    "download",
                    "thumbs",
                    "close"
                ],
                afterLoad : function(instance, current) {
                    var pixelRatio = window.devicePixelRatio || 1;

                    if ( pixelRatio > 1.5 ) {
                        current.width  = current.width  / pixelRatio;
                        current.height = current.height / pixelRatio;
                    }
                }
            });

        },


		MA_Carousel : function( $swiper, settings ) {
			var $slides = $swiper.find( '.jltma-swiper__slide' ),

				elementorBreakpoints = elementorFrontend.config.breakpoints,

				swiperInstance 	= $swiper.data( 'swiper' ),
				swiperArgs 		= {
					autoHeight				: settings.element.autoHeight || false,
					direction 				: settings.element.direction || settings.default.direction,
					effect 					: settings.element.effect || settings.default.effect,
					slidesPerView 			: settings.default.slidesPerView,
					slidesPerColumn 		: settings.default.slidesPerColumn,
					slidesPerColumnFill 	: 'row',
					slidesPerGroup			: settings.default.slidesPerGroup,
					spaceBetween 			: settings.default.spaceBetween,
					pagination 				: {},
					navigation 				: {},
					autoplay 				: settings.element.autoplay || false,
					grabCursor 				: true,
					watchSlidesProgress 	: true,
					watchSlidesVisibility 	: true,
				};

				if ( settings.default.breakpoints ) {
					swiperArgs.breakpoints = {};
					swiperArgs.breakpoints[ elementorBreakpoints.md ] = settings.default.breakpoints.tablet;
					swiperArgs.breakpoints[ elementorBreakpoints.lg ] = settings.default.breakpoints.desktop;
				}

				if ( ! elementorFrontend.isEditMode() ) {
					// Observer messes with free mode
					if ( ! settings.element.freeMode ) {
						swiperArgs.observer 			= true;
						swiperArgs.observeParents		= true;
						swiperArgs.observeSlideChildren = true;
					}
				} else { // But we're safe in edit mode
					swiperArgs.observer 			= true;
					swiperArgs.observeParents		= true;
					swiperArgs.observeSlideChildren = true;
				}

			Master_Addons.MA_Carousel.init = function() {
				if ( swiperInstance ) {
					Master_Addons.MA_Carousel.destroy();
					return;
				}

				// Number of columns
				if ( swiperArgs.breakpoints ) {
					if ( settings.element.breakpoints.desktop.slidesPerView ) {
						swiperArgs.breakpoints[ elementorBreakpoints.lg ].slidesPerView = Math.min( $slides.length, +settings.element.breakpoints.desktop.slidesPerView || 3 );
					}

					if ( settings.element.breakpoints.tablet.slidesPerView ) {
						swiperArgs.breakpoints[ elementorBreakpoints.md ].slidesPerView = Math.min( $slides.length, +settings.element.breakpoints.tablet.slidesPerView || 2 );
					}
				}

				if ( settings.element.slidesPerView ) {
					swiperArgs.slidesPerView = Math.min( $slides.length, +settings.element.slidesPerView || 1 );
				}

				// Number of slides to scroll
				if ( swiperArgs.breakpoints ) {
					if ( settings.element.breakpoints.desktop.slidesPerGroup ) {
						swiperArgs.breakpoints[ elementorBreakpoints.lg ].slidesPerGroup = Math.min( $slides.length, +settings.element.breakpoints.desktop.slidesPerGroup || 3 );
					}

					if ( settings.element.breakpoints.tablet.slidesPerGroup ) {
						swiperArgs.breakpoints[ elementorBreakpoints.md ].slidesPerGroup = Math.min( $slides.length, +settings.element.breakpoints.tablet.slidesPerGroup || 2 );
					}
				}

				if ( settings.element.slidesPerGroup ) {
					swiperArgs.slidesPerGroup = Math.min( $slides.length, +settings.element.slidesPerGroup || 1 );
				}

				// Rows
				if ( swiperArgs.breakpoints ) {
					if ( settings.element.breakpoints.desktop.slidesPerColumn ) {
						swiperArgs.breakpoints[ elementorBreakpoints.lg ].slidesPerColumn = settings.element.breakpoints.desktop.slidesPerColumn;
					}

					if ( settings.element.breakpoints.tablet.slidesPerColumn ) {
						swiperArgs.breakpoints[ elementorBreakpoints.md ].slidesPerColumn = settings.element.breakpoints.tablet.slidesPerColumn;
					}
				}

				if ( settings.element.slidesPerColumn ) {
					swiperArgs.slidesPerColumn = settings.element.slidesPerColumn;
				}

				// Column spacing

				if ( swiperArgs.breakpoints ) {
					swiperArgs.breakpoints[ elementorBreakpoints.lg ].spaceBetween = settings.element.breakpoints.desktop.spaceBetween || 0;
					swiperArgs.breakpoints[ elementorBreakpoints.md ].spaceBetween = settings.element.breakpoints.tablet.spaceBetween || 0;
				}

				if ( settings.element.spaceBetween ) {
					swiperArgs.spaceBetween = settings.element.spaceBetween || 0;
				}

				if ( settings.element.slidesPerColumnFill ) {
					swiperArgs.slidesPerColumnFill = settings.element.slidesPerColumnFill;
				}

				// Arrows and pagination
				if ( settings.element.arrows ) {
					swiperArgs.navigation.disabledClass = 'jltma-swiper__button--disabled';

					var $prevButton = settings.scope.find( settings.element.arrowPrev ),
						$nextButton = settings.scope.find( settings.element.arrowNext );

					if ( $prevButton.length && $nextButton.length ) {

						var arrowPrev = settings.element.arrowPrev + '-' + settings.id,
							arrowNext = settings.element.arrowNext + '-' + settings.id;

						$prevButton.addClass( arrowPrev.replace('.','') );
						$nextButton.addClass( arrowNext.replace('.','') );

						swiperArgs.navigation.prevEl = arrowPrev;
						swiperArgs.navigation.nextEl = arrowNext;
					}
				}

				if ( settings.element.pagination ) {
					swiperArgs.pagination.el = '.jltma-swiper__pagination-' + settings.id;
					swiperArgs.pagination.type = settings.element.paginationType;

					if ( settings.element.paginationClickable ) {
						swiperArgs.pagination.clickable = true;
					}
				}

				// Loop
				if ( settings.element.loop ) {
					swiperArgs.loop = true;
					// swiperArgs.loopedSlides = $slides.length;
				}

				// Autplay
				if ( swiperArgs.autoplay && ( settings.element.autoplaySpeed || settings.element.disableOnInteraction ) ) {
					swiperArgs.autoplay = {};

					if ( settings.element.autoplaySpeed ) {
						swiperArgs.autoplay.delay = settings.element.autoplaySpeed;
					}

					if ( settings.element.autoplaySpeed ) {
						swiperArgs.autoplay.disableOnInteraction = settings.element.disableOnInteraction;
					}
				} else {

				}

				// Speed
				if ( settings.element.speed ) {
					swiperArgs.speed = settings.element.speed;
				}

				// Resistance
				if ( settings.element.resistance ) {
					swiperArgs.resistanceRatio = 1 - settings.element.resistance;
				}

				// Free Mode
				if ( settings.element.freeMode ) {
					swiperArgs.freeMode = true;
					swiperArgs.freeModeSticky = settings.element.freeModeSticky;
					swiperArgs.freeModeMomentum = settings.element.freeModeMomentum;
					swiperArgs.freeModeMomentumBounce = settings.element.freeModeMomentumBounce;

					if ( settings.element.freeModeMomentumRatio ) {
						swiperArgs.freeModeMomentumRatio = settings.element.freeModeMomentumRatio;
					}

					if ( settings.element.freeModeMomentumVelocityRatio ) {
						swiperArgs.freeModeMomentumVelocityRatio = settings.element.freeModeMomentumVelocityRatio;
					}

					if ( settings.element.freeModeMomentumBounceRatio ) {
						swiperArgs.freeModeMomentumBounceRatio = settings.element.freeModeMomentumBounceRatio;
					}
				}

				// Conditional asset loading of the Swiper library with backwards compatibility
				// since Elementor 3.1
				// @link https://developers.elementor.com/experiment-optimized-asset-loading/
                var swiper;
				if ( 'undefined' === typeof Swiper ) {
					const asyncSwiper = elementorFrontend.utils.swiper;

					new asyncSwiper( $swiper, swiperArgs ).then( function( newSwiperInstance ) {
						swiper = newSwiperInstance;
					} );
				} else {
					swiper = new Swiper( $swiper, swiperArgs );
				}

				if ( settings.element.stopOnHover ) {
					$swiper.on( 'mouseover', function() {
						swiper.autoplay.stop();
					});

					$swiper.on( 'mouseout', function() {
						swiper.autoplay.start();
					});
				}

				if ( settings.element.slideChangeTriggerResize ) {
					swiper.on('slideChange', function () {
						$( window ).trigger('resize');
					});
				}

				$swiper.data( 'swiper', swiper );

				return swiper;
			};

			return Master_Addons.MA_Carousel.init();
		},

        // Gallery Slider
        MA_Gallery_Slider: function($scope, $){

            var elementSettings     = getElementSettings( $scope ),
                $swiperSlider 	    = $scope.find('.jltma-gallery-slider__slider'),
                $swiperCarousel     = $scope.find('.jltma-gallery-slider__carousel'),
                uniqueId 		    = getUniqueLoopScopeId( $scope ),
                scopeId 		    = $scope.data('id'),
                $preview            = $scope.find('.jltma-gallery-slider__preview'),
                $thumbs             = $scope.find('.jltma-swiper__wrapper .jltma-gallery__item'),
                $thumbnailsSlider   = $scope.find(".jltma-gallery-slider__gallery .jltma-gallery"),
                $thumbtype          = elementSettings.jltma_gallery_slider_thumb_type,
                $thumbposition      = elementSettings.jltma_gallery_slider_preview_position,
                $thumbVertical      = ( $thumbposition == "top" || $thumbposition == "bottom" ) ? false : true,

                start               = elementorFrontend.config.is_rtl ? 'right' : 'left',
                end                 = elementorFrontend.config.is_rtl ? 'left' : 'right',
                hasCarousel         = $swiperCarousel.length,

                swiperSlider        = null,
                swiperCarousel      = null,

                sliderSettings       = {
					key 		    : 'slider',
                    scope 		    : $scope,
                    id 			    : uniqueId,
					element : {
						autoHeight 				: 'yes' === elementSettings.jltma_gallery_slider_adaptive_height ? true : false,
						autoplay 				: 'yes' === elementSettings.jltma_gallery_slider_autoplay ? true : false,
						autoplaySpeed 			: 'yes' === elementSettings.jltma_gallery_slider_autoplay && elementSettings.jltma_gallery_slider_autoplay_speed ? elementSettings.jltma_gallery_slider_autoplay_speed.size : false,
						disableOnInteraction 	: '' !== elementSettings.autoplay_disable_on_interaction,
						stopOnHover 			: 'yes' === elementSettings.jltma_gallery_slider_pause_on_hover,
						loop 					: 'yes' === elementSettings.jltma_gallery_slider_infinite,
						arrows 					: '' !== elementSettings.jltma_gallery_slider_show_arrows,
                        arrowPrev 				: '.jltma-arrow--prev',
                        arrowNext 				: '.jltma-arrow--next',
						effect 					: elementSettings.jltma_gallery_slider_effect,
						speed 					: elementSettings.speed ? elementSettings.speed.size : 500,
                        resistance 				: elementSettings.resistance ? elementSettings.resistance.size : 0.25,
                        keyboard: {
                                // enabled: "yes" === slider_data.jltma_slider_keyboard ? true : false
                                enabled: true
                        },
					},
					default : {
						effect 			: 'slide',
						direction 		: 'horizontal',
						slidesPerView 	: 1,
						slidesPerGroup 	: 1,
						slidesPerColumn : 1,
						spaceBetween 	: 0,
                    }
                };

                // If Carousel
                if ( hasCarousel ) {
				    var carouselSettings = {
						key 		: 'carousel',
						scope 		: $scope,
						id 			: uniqueId,
						element : {
							direction 			: elementSettings.carousel_orientation,
							arrows 				: '' !== elementSettings.jltma_gallery_slider_thumb_show_arrows,
							arrowPrev 			: '.jltma-arrow--prev',
							arrowNext 			: '.jltma-arrow--next',
                            autoHeight 			: false,
                            loop                : 'yes' === elementSettings.jltma_gallery_slider_thumb_infinite ? true : false,
                            autoplay 			: 'yes' === elementSettings.jltma_gallery_slider_thumb_autoplay ? true : false,
                            autoplaySpeed 		: 'yes' === elementSettings.jltma_gallery_slider_thumb_autoplay && elementSettings.jltma_gallery_slider_thumb_autoplay_speed ? elementSettings.jltma_gallery_slider_thumb_autoplay_speed.size : false,
                            stopOnHover 		: 'yes' === elementSettings.jltma_gallery_slider_thumb_pause_on_hover,
							speed 				: elementSettings.jltma_gallery_slider_thumb_speed ? elementSettings.jltma_gallery_slider_thumb_speed.size : 500,
							slidesPerView 		: elementSettings.jltma_gallery_slider_thumb_items_mobile,
							slidesPerColumn 	: 'vertical' === elementSettings.carousel_orientation ? 1 : elementSettings.carousel_slides_per_column_mobile,
							slidesPerGroup 		: elementSettings.carousel_slides_to_scroll_mobile,
							resistance 			: elementSettings.carousel_resistance ? elementSettings.carousel_resistance.size : 0.15,
							spaceBetween 		: elementSettings.carousel_spacing_mobile ? elementSettings.carousel_spacing_mobile.size : 0,
							breakpoints 		: {
								tablet : {
									slidesPerView 	: elementSettings.jltma_gallery_slider_thumb_items_tablet,
									slidesPerColumn : 'vertical' === elementSettings.carousel_orientation ? 1 : elementSettings.carousel_slides_per_column_tablet,
									slidesPerGroup 	: elementSettings.carousel_slides_to_scroll_tablet,
									spaceBetween 	: elementSettings.carousel_spacing_tablet ? elementSettings.carousel_spacing_tablet.size : 0,
								},
								desktop : {
									slidesPerView 	: elementSettings.jltma_gallery_slider_thumb_items,
									slidesPerColumn : 'vertical' === elementSettings.carousel_orientation ? 1 : elementSettings.carousel_slides_per_column,
									slidesPerGroup 	: elementSettings.carousel_slides_to_scroll,
									spaceBetween 	: elementSettings.carousel_spacing ? elementSettings.carousel_spacing.size : 0,
								},
							},
						},
						default : {
							effect 			: 'slide',
							slidesPerView 	: 1,
							slidesPerGroup 	: 1,
							slidesPerColumn : 1,
							spaceBetween 	: 6,
							breakpoints 	: {
								tablet : {
									slidesPerView 	: 2,
									slidesPerGroup 	: 1,
									slidesPerColumn : 2,
									spaceBetween 	: 12,
								},
								desktop : {
									slidesPerView 	: 3,
									slidesPerGroup 	: 1,
									slidesPerColumn : 3,
									spaceBetween 	: 24,
								},
							},
						},
					};
                }


            Master_Addons.MA_Gallery_Slider.init = function() {

                swiperSlider = Master_Addons.MA_Carousel( $swiperSlider, sliderSettings );

				if ( hasCarousel ) {
                    swiperCarousel = Master_Addons.MA_Carousel( $swiperCarousel, carouselSettings );
				}

				Master_Addons.MA_Gallery_Slider.onSlideChange();
				Master_Addons.MA_Gallery_Slider.events();

            };

            Master_Addons.MA_Gallery_Slider.events = function() {
                swiperSlider.on('slideChange', Master_Addons.MA_Gallery_Slider.onSlideChange );
                $thumbs.on( 'click', Master_Addons.MA_Gallery_Slider.onThumbClicked );
            };

			Master_Addons.MA_Gallery_Slider.onSlideChange = function() {
				var activeIndex = sliderSettings.element.loop ? swiperSlider.realIndex : swiperSlider.activeIndex;

				if ( hasCarousel ) {
					swiperCarousel.slideTo( activeIndex );
				}

				$thumbs.removeClass('is--active');
				$thumbs.eq( activeIndex ).addClass('is--active');
            };

			Master_Addons.MA_Gallery_Slider.onThumbClicked = function( event ) {
                var offset = sliderSettings.element.loop ? 1 : 0;

				event.preventDefault();
				swiperSlider.slideTo( $(this).index() + offset );
            };

			Master_Addons.onElementRemove( $scope, function() {
				$scope.find('.swiper-container').each( function() {
					if ( $(this).data('swiper') ) {
						$(this).data('swiper').destroy();
					}
				});
            });


            Master_Addons.MA_Gallery_Slider.init();
        },

        // On Remove Event
        onElementRemove: function( $element, callback ) {
            if ( elementorFrontend.isEditMode() ) {
                // Make sure it is destroyed when element is removed in editor mode
                elementor.channels.data.on( 'element:before:remove', function ( model ) {
                    if ( $element.data('id') === model.id ) {
                        callback();
                    }
                });
            }
        },

        //Master Addons: Timeline
        MA_Timeline: function ($scope, $) {

			var elementSettings  = getElementSettings( $scope ),
			    $timeline        = $scope.find('.jltma-timeline'),
			    $swiperSlider    = $scope.find('.jltma-timeline-slider'),
			    $timeline_type   = elementSettings.ma_el_timeline_type,
			    $timeline_layout = elementSettings.ma_el_timeline_design_type,
			    swiperSlider     = null,
			    timelineArgs     = {},
			    hasCarousel      = $swiperSlider.length,
			    $uniqueId        = getUniqueLoopScopeId( $scope );

            if($timeline_layout === 'horizontal'){

                var $carousel = $scope.find('.jltma-timeline-carousel-slider');

                if (!$carousel.length) {
                    return;
                }

                var $carouselContainer = $scope.find('.swiper-container'),
                    $settings          = $carousel.data('settings'),
                    Swiper = elementorFrontend.utils.swiper;

                initSwiper();

                async function initSwiper() {
                    var swiper = await new Swiper($carouselContainer, $settings);
                    if ($settings.pauseOnHover) {
                        $($carouselContainer).hover(function() {
                            (this).swiper.autoplay.stop();
                        }, function() {
                            (this).swiper.autoplay.start();
                        });
                    }
                };
            }


            if($timeline_layout === 'vertical' || $timeline_type === "post"){
                var $timeline = $scope.find('.jltma-timeline'),
                    timelineArgs = {};

                Master_Addons.MA_Timeline.init = function() {
                    if ( elementorFrontend.isEditMode() ) {
                        timelineArgs.scope = window.elementor.$previewContents;
                    }

                    if ( 'undefined' !== typeof elementSettings.line_location && elementSettings.line_location.size ) {
                        timelineArgs.lineLocation = elementSettings.line_location.size;
                    }
                    $timeline.maTimeline( timelineArgs );
                };
                Master_Addons.MA_Timeline.init();
            }

        },


        //Master Addons: News Ticker
        MA_NewsTicker: function ($scope, $) {

            try {
                (function ($) {
                    $(window).load(function (e) {

                        var newsTickerWrapper = $scope.find(".jltma-news-ticker"),
                            tickerType = newsTickerWrapper.data('tickertype'),
                            tickerid = newsTickerWrapper.data('tickerid'),
                            feedUrl = newsTickerWrapper.data('feedurl'),
                            feedAnimation = newsTickerWrapper.data('feedanimation'),
                            limitPosts = newsTickerWrapper.data('limitposts'),
                            tickerStyleEffect = newsTickerWrapper.data('scroll'),
                            autoplay = newsTickerWrapper.data('autoplay'),
                            timer = newsTickerWrapper.data('timer');

                        if (tickerType === "content") {

                            $("#" + tickerid + "").breakingNews({
                                effect: "" + tickerStyleEffect + "",
                                autoplay: autoplay,
                                timer: timer,
                                border: false,
                                feed: false,
                                feedlabels: false
                            });
                        }

                        if (tickerType === "feed") {

                            jQuery(function ($) {

                                var feed_container = $("#" + tickerid + ' .jltma-ticker-content-inner');

                                $(feed_container).rss(feedUrl,
                                    {
                                        // how many entries do you want?
                                        // default: 4
                                        // valid values: any integer
                                        limit: limitPosts,

                                        // want to offset results being displayed?
                                        // default: false
                                        // valid values: any integer
                                        offsetStart: false, // offset start point
                                        offsetEnd: false, // offset end point

                                        // will request the API via https
                                        // default: false
                                        // valid values: false, true
                                        ssl: true,


                                        // which server should be requested for feed parsing
                                        // the server implementation is here: https://github.com/sdepold/feedr
                                        // default: feedrapp.info
                                        // valid values: any string
                                        // host: 'my-own-feedr-instance.com',


                                        // option to seldomly render ads
                                        // ads help covering the costs for the feedrapp server hosting and future improvements
                                        // default: true
                                        // valid values: false, true
                                        support: false,


                                        // formats the date with moment.js (optional)
                                        // default: 'dddd MMM Do'
                                        // valid values: see http://momentjs.com/docs/#/displaying/
                                        dateFormat: 'MMMM Do, YYYY',


                                        // localizes the date with moment.js (optional)
                                        // default: 'en'
                                        dateLocale: 'de',


                                        // outer template for the html transformation
                                        // default: "<ul>{entries}</ul>"
                                        // valid values: any string


                                        layoutTemplate: '<ul class="jltma-ticker-content-items">{entries}</ul>',

                                        // inner template for each entry
                                        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
                                        // valid values: any string
                                        // entryTemplate: '<p>{title}</p>',
                                        // entryTemplate: '<li><a href="{url}">[{author}@{date}] {title}</a>{teaserImage}{shortBodyPlain}</li>'
                                        entryTemplate: '<li> {teaserImage} <a href="{url}"> {title}</a></li>',

                                        // the effect, which is used to let the entries appear
                                        // default: 'show'
                                        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
                                        effect: feedAnimation,

                                    }, function () {

                                        $("#" + tickerid + "").breakingNews({
                                            effect: "" + tickerStyleEffect + "",
                                            autoplay: autoplay,
                                            timer: timer
                                        });
                                    })
                            });

                        }

                    }); // End of Window load

                })(jQuery);
            } catch (e) {
                //We can also throw from try block and catch it here
                // No Error Show
            }


        },


        /*
         * Master Addons: MA Blog Posts
         */

        MA_Blog: function ($scope, $) {
            var elementSettings     = getElementSettings( $scope ),
                uniqueId 		    = getUniqueLoopScopeId( $scope ),
                scopeId 		    = $scope.data('id'),
                $swiper 	        = $scope.find('.jltma-swiper__container'),
                $thumbs 	        = $scope.find('.jltma-grid__item'),
                blogElement         = $scope.find(".jltma-blog-wrapper"),
                colsNumber          = blogElement.data("col"),
                carousel            = blogElement.data("carousel"),
                grid                = blogElement.data("grid");

            $scope.find(".jltma-blog-cats-container li a").click(function (e) {
                e.preventDefault();

                $scope
                    .find(".jltma-blog-cats-container li .active")
                    .removeClass("active");

                $(this).addClass("active");

                var selector = $(this).attr("data-filter");

                blogElement.isotope({ filter: selector });

                return false;
            });

            var masonryBlog = blogElement.hasClass("jltma-blog-masonry");

            if (masonryBlog && !carousel) {
                blogElement.imagesLoaded(function () {
                    blogElement.isotope({
                        itemSelector: ".jltma-post-outer-container",
                        percentPosition: true,
                        animationOptions: {
                            duration: 750,
                            easing: "linear",
                            queue: false
                        }
                    });
                });
            }


            // Carousel
            var $carousel = $scope.find('.jltma-blog-carousel-slider');

            if (!$carousel.length) {
                return;
            }

            var $carouselContainer = $scope.find('.swiper-container'),
                $settings          = $carousel.data('settings'),
                Swiper = elementorFrontend.utils.swiper;

                initSwiper();

                async function initSwiper() {
                    var swiper = await new Swiper($carouselContainer, $settings);
                    if ($settings.pauseOnHover) {
                        $($carouselContainer).hover(function() {
                            (this).swiper.autoplay.stop();
                        }, function() {
                            (this).swiper.autoplay.start();
                        });
                    }
                };

        },


        /**** MA Image Carousel ****/
        MA_Image_Carousel: function ($scope, $) {

            var $carousel = $scope.find('.jltma-image-carousel-slider');

            if (!$carousel.length) {
                return;
            }

            var $carouselContainer = $scope.find('.swiper-container'),
                $settings          = $carousel.data('settings'),
                Swiper = elementorFrontend.utils.swiper;

                initSwiper();

                async function initSwiper() {
                    var swiper = await new Swiper($carouselContainer, $settings);
                    if ($settings.pauseOnHover) {
                        $($carouselContainer).hover(function() {
                            (this).swiper.autoplay.stop();
                        }, function() {
                            (this).swiper.autoplay.start();
                        });
                    }
                };
        },

        /**** MA Logo Slider ****/
        MA_Logo_Slider: function ($scope, $) {

            var $carousel = $scope.find('.jltma-logo-carousel-slider');

            if (!$carousel.length) {
                return;
            }

            var $carouselContainer = $scope.find('.swiper-container'),
                $settings          = $carousel.data('settings'),
                Swiper = elementorFrontend.utils.swiper;

                initSwiper();

                async function initSwiper() {
                    var swiper = await new Swiper($carouselContainer, $settings);
                    if ($settings.pauseOnHover) {
                        $($carouselContainer).hover(function() {
                            (this).swiper.autoplay.stop();
                        }, function() {
                            (this).swiper.autoplay.start();
                        });
                    }
                };


            /**
             * Icon click for hover
             */
            $carousel.find('.jltma-logo-slider-figure').on('click','.item-hover-icon',function(){
                var $this = $(this);
                $this.toggleClass('hide');
                $this.siblings('.jltma-hover-click').toggleClass('show');
            });

            /**
             * Tooltip jS
             */
            var $tooltipSelector = $carousel.find('.jltma-logo-slider-item');
            $tooltipSelector.each(function(e){
                var $currentTooltip = $(this).attr('id');
                if( $currentTooltip ){
                    var $dataId = $(this).data('id');
                    var $tooltipSettings = $(this).data('tooltip-settings');
                    var selector = '#'+$currentTooltip;
                    var $follow_cursor = $tooltipSettings.follow_cursor;
                    var placement_cursor;
                    if( $follow_cursor == 1 ){
                        placement_cursor = {
                            followCursor: true,
                        };
                    }else{
                        placement_cursor = {
                            placement: $tooltipSettings.placement,
                            followCursor: false,
                        };
                    }

                    console.log($tooltipSettings.arrow,$tooltipSettings.arrow_type);
                    var arrowType = false;
                    if( $tooltipSettings.arrow == 1 ) {
                        if($tooltipSettings.arrow_type == 'round'){
                            arrowType = tippy.roundArrow;
                        }else{
                            arrowType = true;
                        }
                    }

                    tippy(selector, {
                        content: $tooltipSettings.text,
                        ...placement_cursor,
                        animation: $tooltipSettings.animation,
                        arrow: arrowType,
                        duration: $tooltipSettings.duration,
                        delay: $tooltipSettings.delay,
                        trigger: $tooltipSettings.trigger, // mouseenter,click, manual
                        // flipOnUpdate: true,
                        // interactive: true,
                        offset: [$tooltipSettings.x_offset, $tooltipSettings.y_offset],
                        zIndex: 999999,
                        allowHTML: true,
                        theme: 'jltma-tippy-' +  $dataId,
                        onShow(instance) {
                            var tippyPopper = instance.popper;
                            $(tippyPopper).addClass($dataId);
                        }
                    });
                }
            });
        },



        /**** MA Team Slider ****/
        MA_TeamSlider: function ($scope, $) {

            var elementSettings     = getElementSettings( $scope ),
                uniqueId 		    = getUniqueLoopScopeId( $scope ),
                scopeId 		    = $scope.data('id'),
                $teamCarouselWrapper = $scope.find('.jltma-team-carousel-wrapper').eq(0),
                $team_preset = $teamCarouselWrapper.data("team-preset"),
                $ma_el_team_circle_image_animation = $teamCarouselWrapper.data("ma_el_team_circle_image_animation");

            if ($team_preset == "-content-drawer") {

                try {
                    (function ($) {

                        $('.gridder').gridderExpander({
                            scroll: false,
                            scrollOffset: 0,
                            scrollTo: "panel",                  // panel or listitem
                            animationSpeed: 400,
                            animationEasing: "easeInOutExpo",
                            showNav: true, // Show Navigation
                            nextText: "<span></span>", // Next button text
                            prevText: "<span></span>", // Previous button text
                            closeText: "", // Close button text
                            onStart: function () {
                                //Gridder Inititialized
                            },
                            onContent: function () {
                                //Gridder Content Loaded
                            },
                            onClosed: function () {
                                //Gridder Closed
                            }
                        });

                    })(jQuery);
                } catch (e) {
                    //We can also throw from try block and catch it here
                    // No Error Show
                }


            } else {

                var $carousel = $scope.find('.jltma-team-carousel-slider');

                if (!$carousel.length) {
                    return;
                }

                var $carouselContainer = $scope.find('.swiper-container'),
                    $settings          = $carousel.data('settings'),
                    Swiper = elementorFrontend.utils.swiper;

                    initSwiper();

                    async function initSwiper() {
                        var swiper = await new Swiper($carouselContainer, $settings);
                        if ($settings.pauseOnHover) {
                            $($carouselContainer).hover(function() {
                                (this).swiper.autoplay.stop();
                            }, function() {
                                (this).swiper.autoplay.start();
                            });
                        }
                    };
            }

            // else if ($team_preset == "-circle-animation"){
            //     if($ma_el_team_circle_image_animation == "animation_svg_04"){
            //
            //     }
            // }

        },

        /**** MA Advanced Image ****/
        MA_Advanced_Image: function ($scope, $) {

            Master_Addons.MA_Advanced_Image.elementSettings    = getElementSettings( $scope );

            $scope.find('.jltma-img-dynamic-dropshadow').each(function() {

                var imgFrame, clonedImg, img;

                if( this instanceof jQuery ){
                    if( this && this[0] ){
                        img = this[0];
                    } else {
                        return;
                    }
                } else {
                    img = this;
                }

                if ( ! img.classList.contains('jltma-img-has-shadow')){
                    imgFrame  = document.createElement('div');
                    clonedImg = img.cloneNode();

                    clonedImg.classList.add('jltma-img-dynamic-dropshadow-cloned');
                    clonedImg.classList.remove('jltma-img-dynamic-dropshadow');
                    img.classList.add('jltma-img-has-shadow');
                    imgFrame.classList.add('jltma-img-dynamic-dropshadow-frame');

                    img.parentNode.appendChild(imgFrame);
                    imgFrame.appendChild(img);
                    imgFrame.appendChild(clonedImg);
                }
            });

            //Tilt Effect
            $scope.find('.jltma-tilt-box').tilt({
                maxTilt : $(this).data('max-tilt'),
                easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
                speed: $(this).data('time'),
                perspective: 2000
            });
        },

        /* MA Tooltip */
        MA_Tooltip: function ($scope, $) {

            var elementSettings           = getElementSettings( $scope ),
                scopeId                   = $scope.data('id'),
                $currentTooltip           = '#jltma-tooltip-' + scopeId,
                $ma_el_tooltip_text       = elementSettings.ma_el_tooltip_text?elementSettings.ma_el_tooltip_text:'top',
                $ma_el_tooltip_direction  = elementSettings.jltma_tooltip_follow_cursor?elementSettings.jltma_tooltip_follow_cursor:elementSettings.ma_el_tooltip_direction,
                $jltma_tooltip_animation  = elementSettings.jltma_tooltip_animation?elementSettings.jltma_tooltip_animation:'',
                $jltma_tooltip_arrow      = elementSettings.jltma_tooltip_arrow?elementSettings.jltma_tooltip_arrow: true,
                $jltma_tooltip_duration   = elementSettings.jltma_tooltip_duration?elementSettings.jltma_tooltip_duration: 300,
                $jltma_tooltip_delay      = elementSettings.jltma_tooltip_delay?elementSettings.jltma_tooltip_delay: 300,
                $ma_el_tooltip_text_width = elementSettings.ma_el_tooltip_text_width?elementSettings.ma_el_tooltip_text_width: '200px',
                $jltma_tooltip_arrow_type = elementSettings.jltma_tooltip_arrow_type?elementSettings.jltma_tooltip_arrow_type: 'sharp',
                $jltma_tooltip_distance   = elementSettings.jltma_tooltip_distance?elementSettings.jltma_tooltip_distance: 10,
                $jltma_tooltip_trigger    = elementSettings.jltma_tooltip_trigger?elementSettings.jltma_tooltip_trigger:'mouseenter',
                $animateFill              = elementSettings.jltma_tooltip_animation == "fill" ? true : false;

                var $ma_tooltip = $scope.find('.jltma-tooltip');
                if ( ! $ma_tooltip.length ) {
                    return;
                }

                tippy($currentTooltip, {
                    content  : $ma_el_tooltip_text,
                    placement: $ma_el_tooltip_direction,
                    animation: $jltma_tooltip_animation,
                    arrow    : $jltma_tooltip_arrow,
                    arrowType: $jltma_tooltip_arrow_type,
                    duration : $jltma_tooltip_duration,
                    distance : $jltma_tooltip_distance,
                    delay    : $jltma_tooltip_delay,
                    size     : $ma_el_tooltip_text_width,
                    trigger  : $jltma_tooltip_trigger,
                    animateFill: $animateFill,
                    flipOnUpdate: true,
                    maxWidth    : $ma_el_tooltip_text_width,
                    zIndex      : 999,
                    allowHTML: true,
                    theme    : 'jltma-image-filter-tippy-' + scopeId,
                    interactive: true,
                    appendTo: 'parent',
                    onShow(instance) {
                        var tippyPopper = instance.popper;
                        jQuery(tippyPopper).attr('data-tippy-popper-id', scopeId);
                    }
                });
        },

        /**** MA Twitter Slider ****/

        MA_Twitter_Slider: function ($scope, $) {

            var $carousel = $scope.find('.jltma-twitter-carousel-slider');

            if (!$carousel.length) {
                return;
            }

            var $carouselContainer = $scope.find('.swiper-container'),
                $settings          = $carousel.data('settings'),
                Swiper = elementorFrontend.utils.swiper;

                initSwiper();

                async function initSwiper() {
                    var swiper = await new Swiper($carouselContainer, $settings);
                    if ($settings.pauseOnHover) {
                        $($carouselContainer).hover(function() {
                            (this).swiper.autoplay.stop();
                        }, function() {
                            (this).swiper.autoplay.start();
                        });
                    }
                };


        },


        MA_ParticlesBG: function ($scope, $) {

            if ($scope.hasClass('jltma-particle-yes')) {
                let id = $scope.data('id');
                let element_type = $scope.data('element_type');
                let pdata = $scope.data('jltma-particle');
                let pdata_wrapper = $scope.find('.jltma-particle-wrapper').data('ma-el-pdata');

                if (typeof pdata != 'undefined' && pdata != '') {
                    if ($scope.find('.ma-el-section-bs').length > 0) {
                        $scope.find('.ma-el-section-bs').after('<div class="jltma-particle-wrapper"' +
                            ' id="jltma-particle-' + id + '"></div>');
                        particlesJS('jltma-particle-' + id, pdata);
                    } else {

                        if (element_type == 'column') {

                            $scope.find('.elementor-column-wrap').prepend('<div class="jltma-particle-wrapper"' +
                                ' id="jltma-particle-' + id + '"></div>');
                        } else {
                            $scope.prepend('<div class="jltma-particle-wrapper" id="jltma-particle-' + id + '"></div>');
                        }

                        particlesJS('jltma-particle-' + id, pdata);
                    }


                } else if (typeof pdata_wrapper != 'undefined' && pdata_wrapper != '') {

                    // $scope.prepend('<div class="jltma-particle-wrapper" id="jltma-particle-'+ id +'"></div>');

                    if (element_type == 'column') {
                        $scope.find('.elementor-column-wrap').prepend('<div class="jltma-particle-wrapper"' +
                            ' id="jltma-particle-' + id + '"></div>');
                    }
                    else {
                        $scope.prepend('<div class="jltma-particle-wrapper" id="jltma-particle-' + id + '"></div>');
                    }

                    particlesJS('jltma-particle-' + id, JSON.parse(pdata_wrapper));
                }

            }
            //
            //     })(jQuery);
            // } catch(e) {
            //     //We can also throw from try block and catch it here
            //     // No Error Show
            // }

        },

        MA_BgSlider: function ($scope, $) {
            var ma_el_slides = [], ma_el_slides_json = [], ma_el_transition, ma_el_animation, ma_el_custom_overlay, ma_el_overlay, ma_el_cover, ma_el_delay, ma_el_timer;
            var slider_wrapper = $scope.children('.ma-el-section-bs').children('.ma-el-section-bs-inner');

            if (slider_wrapper && slider_wrapper.data('ma-el-bg-slider')) {

                var slider_images = slider_wrapper.data('ma-el-bg-slider');
                ma_el_transition = slider_wrapper.data('ma-el-bg-slider-transition');
                ma_el_animation = slider_wrapper.data('ma-el-bg-slider-animation');
                ma_el_custom_overlay = slider_wrapper.data('ma-el-bg-custom-overlay');
                if (ma_el_custom_overlay == 'yes') {
                    ma_el_overlay = jltma_scripts.plugin_url + 'assets/lib/vegas/overlays/' + slider_wrapper.data('ma-el-bg-slider-overlay');
                } else {
                    if (slider_wrapper.data('ma-el-bg-slider-overlay')) {
                        ma_el_overlay = jltma_scripts.plugin_url + 'assets/lib/vegas/overlays/' + slider_wrapper.data('ma-el-bg-slider-overlay');
                    } else {
                        ma_el_overlay = jltma_scripts.plugin_url + 'assets/lib/vegas/overlays/' + slider_wrapper.data('ma-el-bg-slider-overlay');
                    }
                }

                ma_el_cover = slider_wrapper.data('ma-el-bg-slider-cover');
                ma_el_delay = slider_wrapper.data('ma-el-bs-slider-delay');
                ma_el_timer = slider_wrapper.data('ma-el-bs-slider-timer');

                if (typeof slider_images != 'undefined') {
                    ma_el_slides = slider_images.split(",");

                    jQuery.each(ma_el_slides, function (key, value) {
                        var slide = [];
                        slide.src = value;
                        ma_el_slides_json.push(slide);
                    });

                    slider_wrapper.vegas({
                        slides: ma_el_slides_json,
                        transition: ma_el_transition,
                        animation: ma_el_animation,
                        overlay: ma_el_overlay,
                        cover: ma_el_cover,
                        delay: ma_el_delay,
                        timer: ma_el_timer,
                        init: function () {
                            if (ma_el_custom_overlay == 'yes') {
                                var ob_vegas_overlay = slider_wrapper.children('.vegas-overlay');
                                ob_vegas_overlay.css('background-image', '');
                            }
                        }
                    });

                }
            }
        },

        MA_AnimatedGradient: function ($scope, $) {

            if ($scope.hasClass('ma-el-animated-gradient-yes')) {
                let id = $scope.data('id');
                let color = $scope.data('color');
                let angle = $scope.data('angle');
                let gradient_color = 'linear-gradient(' + angle + ',' + color + ')';
                let heading = $scope.find('.elementor-heading-title');
                $scope.css('background-image', gradient_color);

                if ($scope.hasClass('elementor-element-edit-mode')) {
                    color = $scope.find('.animated-gradient').data('color');
                    angle = $scope.find('.animated-gradient').data('angle');
                    let gradient_color_editor = 'linear-gradient(' + angle + ',' + color + ')';
                    $scope.prepend('<div class="animated-gradient" style="background-image : ' + gradient_color_editor + ' "></div>');
                    //$scope.find('.animated-gradient').css('background-image', gradient_color_editor);
                    //$scope.find('.animated-gradient').css('background-color', 'red');
                }
                //$scope.css('position', 'relative');
                //$scope.css('background-color', 'black');

            }

        },


        MA_Image_Comparison: function ($scope, $) {
            var $jltma_image_comp_wrap       = $scope.find('.jltma-image-comparison').eq(0),
                $jltma_image_data            = $jltma_image_comp_wrap.data('image-comparison-settings');

                $jltma_image_comp_wrap.twentytwenty({
                    default_offset_pct          : $jltma_image_data.visible_ratio,
                    orientation                 : $jltma_image_data.orientation,
                    before_label                : $jltma_image_data.before_label,
                    after_label                 : $jltma_image_data.after_label,
                    move_slider_on_hover        : $jltma_image_data.slider_on_hover,
                    move_with_handle_only       : $jltma_image_data.slider_with_handle,
                    click_to_move               : $jltma_image_data.slider_with_click,
                    no_overlay                  : $jltma_image_data.no_overlay
                });
        },

        MA_PiechartsHandlerOnScroll: function ($scope, $) {

            $scope.waypoint(function (direction) {

                Master_Addons.MA_PiechartsHandler($(this.element), $);

            }, {
                offset: (window.innerHeight || document.documentElement.clientHeight) - 100,
                triggerOnce: true
            });
        },

        MA_PiechartsHandler: function ($scope, $) {

            $scope.find('.ma-el-piechart .ma-el-percentage').each(function () {

                var track_color = $(this).data('track-color');
                var bar_color = $(this).data('bar-color');

                $(this).easyPieChart({
                    animate: 2000,
                    lineWidth: 10,
                    barColor: bar_color,
                    trackColor: track_color,
                    scaleColor: false,
                    lineCap: 'square',
                    size: 220

                });

            });

        },

        StatsBarHandler: function ($scope, $) {
            $scope.find('.jltma-stats-bar-content').each(function () {
                var dataperc = $(this).data('perc');
                $(this).animate({ "width": dataperc + "%" }, dataperc * 20);
            });
        },

        StatsBarHandlerOnScroll: function ($scope, $) {
            $scope.MasterAddonshWaypoint(function (direction) {
                Master_Addons.StatsBarHandler($(this.element), $);
                this.destroy(); // Done with handle on scroll
            }, {
                offset: (window.innerHeight || document.documentElement.clientHeight) - 150
            });
        },

        // Toggle Content
        MA_Toggle_Content: function( $scope, $ ) {
            Master_Addons.getElementSettings    = getElementSettings($scope);
			var $wrapper 			= $scope.find( '.jltma-toggle-content' ),
				toggleElementArgs 	= {
					active : Master_Addons.getElementSettings.jltma_toggle_content_active_index,
                };

            if ( '' !== Master_Addons.getElementSettings.jltma_toggle_content_indicator_color ) {
                toggleElementArgs.indicatorColor = Master_Addons.getElementSettings.jltma_toggle_content_indicator_color;
            }

            if ( Master_Addons.getElementSettings.jltma_toggle_content_indicator_speed.size ) {
                toggleElementArgs.speed = Master_Addons.getElementSettings.jltma_toggle_content_indicator_speed.size;
            }

            if ( elementorFrontend.isEditMode() ) {
                toggleElementArgs.watchControls = true;
            }

            $wrapper.MA_ToggleElement( toggleElementArgs );
        },


        // Comment Form reCaptcha
        MA_Comment_Form_reCaptcha: function( $scope, $ ) {
            Master_Addons.getElementSettings    = getElementSettings($scope);
            var $commentsWrapper = $scope.find(".jltma-comments-wrap"),
                $comments_recaptcha_data = $commentsWrapper.data("recaptcha"),
                $recaptcha_protected = $commentsWrapper.data("jltma-comment-settings"),
                jltma_comment_form;

            if($recaptcha_protected.reCaptchaprotected == "yes"){
                var onloadCallback = function() {
                    jltma_comment_form = grecaptcha.render("jltma_comment_form", {
                        "sitekey" : $comments_recaptcha_data.sitekey,
                        "theme" : $comments_recaptcha_data.theme
                    });
                    grecaptcha.reset(jltma_comment_form);
                };
            }

        },


        // Master Addons: Counter Up
        MA_Counter_Up: function( $scope, $ ) {
            var $counterup = $scope.find(".jltma-counter-up-number");

            if ( $.isFunction($.fn.counterUp) ) {
                $counterup.counterUp({
                    duration: 2000,
                    delay: 15,

                });
            }
        },


        // Master Addons: Countdown Timer
        MA_CountdownTimer: function ($scope, $) {

            var $countdownWidget = $scope.find(".jltma-widget-countdown");
            $.fn.MasterCountDownTimer = function () {
                var $wrapper = $(this).find(".jltma-countdown-wrapper"),
                    data = {
                        year: $wrapper.data("countdown-year"),
                        month: $wrapper.data("countdown-month"),
                        day: $wrapper.data("countdown-day"),
                        hour: $wrapper.data("countdown-hour"),
                        min: $wrapper.data("countdown-min"),
                        sec: $wrapper.data("countdown-sec")
                    },

                    targetDate = new Date(data.year, data.month, data.day, data.hour, data.min, data.sec);
                var $year = $wrapper.find('.jltma-countdown-year'),
                    $month = $wrapper.find('.jltma-countdown-month'),
                    $day = $wrapper.find('.jltma-countdown-day'),
                    $hour = $wrapper.find('.jltma-countdown-hour'),
                    $min = $wrapper.find('.jltma-countdown-min'),
                    $sec = $wrapper.find('.jltma-countdown-sec');

                setInterval(function () {
                    var diffTime = (Date.parse(targetDate) - Date.parse(new Date())) / 1000;

                    if (diffTime < 0) return;

                    $year.text(Math.floor(diffTime / (31536000))); // 1 year = 3153600 second
                    $month.text(Math.floor((diffTime / 2592000) % 12)); // 1 month = 2592000 second
                    $day.text(Math.floor((diffTime / 86400) % 365)); // 1 day = 86400 second
                    $hour.text(Math.floor((diffTime / 3600) % 24)); // 1 hour = 3600 second
                    $min.text(Math.floor((diffTime / 60) % 60)); // 1 min  = 60 second
                    $sec.text(Math.floor((diffTime) % 60));
                }, 1e3)
            }, $countdownWidget.each(function () {
                $(this).MasterCountDownTimer()
            })


        },

        /**
         * Fancybox popup
         */
        MA_Fancybox_Popup: function ($scope, $) {
            (function ($) {
                if ($.isFunction($.fn.fancybox)) {
                    $("[data-fancybox]").fancybox({});
                }
            })(jQuery);
        },

        /*
        * REVEAL
        */
        MA_Reveal: function ($scope, $) {

            Master_Addons.MA_Reveal.elementSettings = getElementSettings($scope);

            var rev1,
                isReveal = false;

            Master_Addons.MA_Reveal.revealAction = function () {
                rev1 = new RevealFx(revealistance, {
                    revealSettings: {
                        bgcolor: Master_Addons.MA_Reveal.elementSettings.reveal_bgcolor,
                        direction: Master_Addons.MA_Reveal.elementSettings.reveal_direction,
                        duration: Number(Master_Addons.MA_Reveal.elementSettings.reveal_speed.size) * 100,
                        delay: Number(Master_Addons.MA_Reveal.elementSettings.reveal_delay.size) * 100,
                        onCover: function (contentEl, revealerEl) {
                            contentEl.style.opacity = 1;
                        }
                    }
                });
            }

            Master_Addons.MA_Reveal.runReveal = function () {
                rev1.reveal();
            }

            if (Master_Addons.MA_Reveal.elementSettings.enabled_reveal) {

                var revealId = '#reveal-' + $scope.data('id'),
                    revealistance = document.querySelector(revealId);

                Master_Addons.MA_Reveal.revealAction();

                Master_Addons.MA_Reveal.waypointOptions = {
                    offset: '100%',
                    triggerOnce: true
                };
                elementorFrontend.waypoint($(revealistance), Master_Addons.MA_Reveal.runReveal, Master_Addons.MA_Reveal.waypointOptions);
            }
        },

        /*
        * MA Rellax
        */
        MA_Rellax: function ($scope, $) {

            var elementSettings = getElementSettings($scope);
            var rellax = null;

            $(window).on('resize', function () {

                if (rellax) {
                    rellax.destroy();
                    if (rellax)
                        initRellax();
                }
            });

            var initRellax = function () {
                if (elementSettings.enabled_rellax) {

                    currentDevice = elementorFrontend.getCurrentDeviceMode();

                    var setting_speed = 'speed_rellax';
                    var value_speed = 0;

                    if (currentDevice != 'desktop') {
                        setting_speed = 'speed_rellax_' + currentDevice;
                    }

                    if (eval('elementSettings.' + setting_speed + '.size'))
                        value_speed = eval('elementSettings.' + setting_speed + '.size');


                    var rellaxId = '#rellax-' + $scope.data('id');

                    if ($(rellaxId).length)
                        rellax = new Rellax(rellaxId, {
                            speed: value_speed
                        }
                        );
                    isRellax = true;
                };
            };

            initRellax();

        },

        MA_Rellax_Final: function (panel, model, view) {
            Master_Addons.getElementSettings = getElementSettings($scope);
            var $scope = view.$el;
            var scene = $scope.find('#scene');
        },


        // Entrance Animations
        MA_Entrance_Animation: function ($scope, $) {

            $scope = $scope || $(this);

            var $target      = $scope.hasClass('jltma-appear-watch-animation') ? $scope: $scope.find('.jltma-appear-watch-animation'),
                hasAnimation = $('body').hasClass('jltma-page-animation');

            if( ! $target.length ){
                return;
            }

            if ( hasAnimation ) {
                document.body.addEventListener( 'JltmaPageAnimationDone', function(event) {
                    $target.appearl({
                        offset: '200px',
                        insetOffset:'0px'
                    }).one( 'appear', function(event, data) {
                        this.classList.add('jltma-animated');
                        this.classList.add('jltma-animated-once');
                    });
                });
            } else {
                $target.appearl({
                    offset: '200px',
                    insetOffset:'0px'
                }).one( 'appear', function(event, data) {
                    this.classList.add('jltma-animated');
                    this.classList.add('jltma-animated-once');
                });
            }

        },


        // Wrapper Link
        MA_Wrapper_Link: function ($scope, $) {


            // $('[data-jltma-wrapper-link]').each(function() {
            //     var link = $(this).data('jltma-wrapper-link');
            //     $(this).on('click.jltmaElementOnClick', function() {
            //         if (link.is_external) {
            //             window.open(link.url);
            //         } else {
            //             location.href = link.url;
            //         }
            //     })
            // });

        },

        /**
         * Restrict Content
         */
         MA_Restrict_Content_Ajax: function ($scope, $) {

            Master_Addons.getElementSettings = getElementSettings($scope);

            var $restrictwrapper    = $scope.find('.jltma-restrict-content-wrap').eq(0),
                $scopeId            = $scope.data('id'),
                $restrict_layout    = $restrictwrapper.data('restrict-layout-type'),
                $restrict_type      = $restrictwrapper.data('restrict-type'),
                $error_message      = $restrictwrapper.data('error-message'),
                $rc_ajaxify         = $restrictwrapper.data('rc-ajaxify'),

                $storageID          = 'ma_el_rc_' + $scopeId,
                $formID             = $scope.find('.jltma-restrict-form').eq(0).data('form-id'),

                // Content
                $content_div         = '#restrict-content-' + $scopeId,

                // Popup Settings
                $popup              = $scope.find( '.jltma-restrict-content-popup-content' ),
                $content_pass       = $restrictwrapper.data('content-pass') ? $restrictwrapper.data('content-pass') : '',
                $popup_type         = $popup.data('popup-type') ? $popup.data('popup-type') : '',

                // Restrict Age
                $age_wrapper        = $scope.find('.jltma-restrict-age-wrapper').eq(0),

                $restrict_age       = {
                    min_age             : $age_wrapper.data('min-age'),
                    age_type            : $age_wrapper.data('age-type'),
                    age_title           : $age_wrapper.data('age-title'),
                    age_content         : $age_wrapper.data('age-content'),
                    age_submit          : $( '#' + $formID ).find('button[name="submit"]').val(),
                    checkbox_msg        : $age_wrapper.data('checkbox-msg') ? $age_wrapper.data('checkbox-msg') : "",
                    empty_bday          : $age_wrapper.data('empty-bday') ? $age_wrapper.data('empty-bday') : "",
                    non_exist_bday      : $age_wrapper.data('non-exist-bday') ? $age_wrapper.data('non-exist-bday') : ""
                };


                //Check it the user has been accpeted the agreement
                if (localStorage.getItem($storageID)) {

                    $( '.jltma-rc-button' ).addClass('d-none');
                    $('#' + $formID).addClass('d-none');
                    $('#jltma-restrict-age-' + $scopeId).removeClass('card');
                    $('#jltma-restrict-age-' + $scopeId).removeClass('text-center');
                    $('#restrict-content-' + $scopeId).addClass('d-block');

                } else{

                    // Dom Selector for Onpage/Popup
                    if ($restrict_layout == "popup") {
                        var dom_selector = '#jltma-rc-modal-'  + $scopeId;
                    } else {
                        var dom_selector = '#jltma-restrict-content-' + $scopeId;
                    }

                    $( dom_selector ).on( 'click', '.jltma_ra_select', function() {
                        var wrap = $( this ).closest( '.jltma_ra_select_wrap' );
                        if( !wrap.find( '.jltma_ra_options' ).hasClass( 'jltma_ra_active' ) ) {
                            $( '.jltma_ra_options' ).removeClass( 'jltma_ra_active' );
                            wrap.find( '.jltma_ra_options' ).addClass( 'jltma_ra_active' );
                            wrap.find( '.jltma_ra_options' ).find( 'li:contains("' + wrap.find( '.jltma_ra_select_val' ).html() + '")' ).addClass( 'jltma_ra_active' );
                        }
                        else {
                            wrap.find( '.jltma_ra_options' ).removeClass( 'jltma_ra_active' );
                        }
                    });

                    $( dom_selector ).on( 'click', '.jltma_ra_options ul li', function() {
                        var wrap = $( this ).closest( '.jltma_ra_select_wrap' );
                        wrap.find( '.jltma_ra_select_val' ).html( $( this ).html() );
                        wrap.find( 'select' ).val( $( this ).attr( 'data-val' ) );
                        wrap.find( '.jltma_ra_options' ).removeClass( 'jltma_ra_active' );
                    });

                    $( dom_selector ).on( 'mouseover', '.jltma_ra_options ul li', function() {
                        if ( $( '.jltma_ra_options ul li' ).hasClass( 'jltma_ra_active' ) ) {
                            $( '.jltma_ra_options ul li' ).removeClass( 'jltma_ra_active' );
                        }
                    });

                    $( document ).click( function(e) {
                        if( $( e.target ).attr( 'class' ) != 'jltma_ra_select' && !$( '.jltma_ra_select' ).find( $( e.target ) ).length ) {
                            if( $( '.jltma_ra_options.jltma_ra_active' ).length ) {
                                $( '.jltma_ra_options' ).removeClass( 'jltma_ra_active' );
                            }
                        }
                    });


                    //Onload Fancybox
                    if( $popup_type == "windowload" || $popup_type=="windowloadfullscreen"){
                           $( "#ma-el-rc-modal-hidden" ).fancybox().trigger('click');
                    }else{
                        $("[data-fancybox]").fancybox({});
                    }

                    $( dom_selector ).on( 'submit', '#' + $formID , function(event) {
                        event.preventDefault();

                        var form = $( this );
                        form.find( '.jltma_rc_result' ).remove();

                        $.ajax({
                            type: "POST",
                            url: jltma_scripts.ajaxurl,
                            data: {
                                action: 'jltma_restrict_content',
                                fields: form.serialize(),
                                restrict_type: $restrict_type,
                                error_message: $error_message,
                                content_pass: $content_pass,
                                restrict_age: $restrict_age
                            },
                            cache: false,
                            success: function (result) {

                                try {
                                    result = jQuery.parseJSON( result );

                                    if ( result['result'] == 'success' ) {

                                        $('#restrict-content-'+ $scopeId).removeClass('d-none').addClass('d-block');

                                        //Custom Classes add/remove
                                        $('#' + $formID).addClass('d-none');
                                        $('#jltma-restrict-age-' + $scopeId).removeClass('card');
                                        $('#jltma-restrict-age-' + $scopeId).removeClass('text-center');


                                        //Set a cookie to remember the state
                                        localStorage.setItem($storageID, true);
                                        $.fancybox.close();

                                        $('.jltma-rc-button').addClass('d-none');

                                    } else if ( result['result'] == 'validate' ) {
                                        $( '#' + $formID + ' ' + '.jltma_rc_submit' ).after( '<div class="jltma_rc_result"><span class="eicon-info-circle-o"></span> ' + result['output'] + '</div>' );
                                    } else {
                                        throw 0;
                                    }
                                }
                                catch(err) {
                                    $(  '#' + $formID + ' ' + '.jltma_rc_submit' ).after( '<div class="jltma_rc_result"><span class="eicon-loading"></span> Failed, please try again.</div>' );
                                }

                            }
                        }); // ajax part end

                    }); // End of Submit Event


                } // localstorage


        },

        MA_Restrict_Content: function ($scope, $) {

            try {
                (function ($) {
                    Master_Addons.getElementSettings = getElementSettings($scope);

                    var $restrictwrapper = $scope.find('.jltma-restrict-content-wrap').eq(0),
                        $scopeId = $scope.data('id'),
                        $restrict_layout = $restrictwrapper.data('restrict-layout-type'),
                        $restrict_type = $restrictwrapper.data('restrict-type'),

                        $storageID = 'ma_el_rc',

                        // Popup Settings
                        $popup = $scope.find('.jltma-restrict-content-popup-content'),
                        $content_pass = $restrictwrapper.data('content-pass'),

                        // Restrict Age
                        $age_wrapper = $scope.find('.jltma-restrict-age-wrapper').eq(0),
                        $min_age = $age_wrapper.data('min-age'),
                        $age_type = $age_wrapper.data('age-type'),
                        $age_title = $age_wrapper.data('age-title'),
                        $age_content = $age_wrapper.data('age-content'),
                        $checkbox_msg = $age_wrapper.data('checkbox-msg');

                    Master_Addons.MA_Restrict_Content_Ajax($scope, $);

                })(jQuery);
            } catch (e) {
                //We can also throw from try block and catch it here
                // No Error Show
            }
        },

        MA_Nav_Menu: function ($scope, $) {
            Master_Addons.getElementSettings = getElementSettings($scope);

            var $menuContainer      = $scope.find(".jltma-nav-menu-element"),
                $menuID             = $menuContainer.data("menu-id"),
                $menu_type          = $menuContainer.data("menu-layout"),
                $menu_trigger       = $menuContainer.data("menu-trigger"),
                $menu_offcanvas     = $menuContainer.data("menu-offcanvas"),
                $menu_toggletype    = $menuContainer.data("menu-toggletype"),
                $submenu_animation  = $menuContainer.data("menu-animation"),
                $menu_container_id  = $menuContainer.data("menu-container-id"),
                $sticky_type = $menuContainer.data("sticky-type"),
                navbar_height = $('#' + $menu_container_id).outerHeight(),
                menu_container_selector = $('#' + $menu_container_id);

            // refresh window on resize
            // $(window).on('resize',function(){location.reload();});


            /* One Page Menu */
            if ($menu_type == "onepage") {

                $(document).on('click', '.jltma-navbar-nav li a', function (e) {
                    if ($(this).attr('href')) {
                        var self = $(this),
                            el = self.get(0),
                            href = el.href,
                            hasHash = href.indexOf('#'),
                            enable = self.parents('.jltma-navbar-nav-default').hasClass('jltma-one-page-enabled');

                        if (hasHash !== -1 && (href.length > 1) && enable && (el.pathname == window.location.pathname)) {
                            e.preventDefault();
                            self.parents('.jltma-menu-container').find('.jltma-close').trigger('click');
                        }
                    }
                });

                // Mobile Menu close outside clicking
                $(document).on('click', function (e) {
                    var click = $(e.target),
                        opened = $(".navbar-collapse").hasClass("show");
                     if(opened === true){
                        $(".jltma-one-page-enabled").removeClass('show');
                     }
                });

            } else {


                // Submenu Hover Animation Effect
                var submenu_animate_class = 'animated ' + $submenu_animation,
                    submenu_selector = $('.jltma-dropdown.jltma-sub-menu');
                $("#" + $menuID + " .jltma-menu-has-children").hover( function () {
                    if (submenu_selector.hasClass('fade-up')) {
                        submenu_selector.removeClass('fade-up');
                    }
                    if (submenu_selector.hasClass('fade-down')) {
                        submenu_selector.removeClass('fade-down');
                    }
                    $('.jltma-dropdown.jltma-sub-menu').addClass( $submenu_animation );
                });



                /* On Scroll Fixed Navbar */
                ///////////////// fixed menu on scroll for Desktop
                if ($sticky_type == "fixed-onscroll") {
                    if ($(window).width() > 768 ) {
                        $(function() {
                            $(window).scroll(function() {
                                var scroll = $(window).scrollTop();
                                if (scroll >= 10) {
                                    menu_container_selector.removeClass(''+$menu_container_id +'').addClass("jltma-on-scroll-fixed");
                                } else {
                                    menu_container_selector.removeClass("jltma-on-scroll-fixed").addClass(''+$menu_container_id +'');
                                }
                            });
                        });
                    }
                }


                if ($sticky_type == "sticky-top") {
                    if ($(window).width() > 768 ) {
                        $(function() {
                            $(window).scroll(function() {
                                var scroll = $(window).scrollTop();
                                if (scroll >= 10) {
                                    menu_container_selector.removeClass(''+$menu_container_id +'').addClass("sticky-top");
                                } else {
                                    menu_container_selector.removeClass("sticky-top").addClass(''+$menu_container_id +'');
                                }
                            });
                        });
                    }
                }


                if ($sticky_type == "smart-scroll") {

                    // add padding top to show content behind navbar
                    $('body').css('padding-top', navbar_height + 'px');
                        menu_container_selector.addClass('jltma-smart-scroll');

                    //////////////////////// detect scroll top or down
                    if ($('.jltma-smart-scroll').length > 0) { // check if element exists
                        var last_scroll_top = 0;

                        $(window).on('scroll', function() {
                            var scroll_top = $(this).scrollTop();
                            if(scroll_top < last_scroll_top) {
                                $('.jltma-smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                            }
                            else {
                                $('.jltma-smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
                            }
                            last_scroll_top = scroll_top;
                        });
                    }
                }


                if ($sticky_type == "nav-fixed-top") {
                    if ($(window).width() > 768 ) {
                        $(function() {
                            // add padding top to show content behind navbar
                            // $('body').css('padding-top', $('#' + $menu_container_id ).outerHeight() + 'px');
                            $('body').css('padding-top', navbar_height + 'px');
                            menu_container_selector.addClass('jltma-fixed-top');

                        });
                    }
                }



                // Menu Settings Megamenu Trigger Effect
                // if ($('.jltma-has-megamenu').hasClass('jltma-megamenu-click')) {
                //     $('.jltma-megamenu-click').on('click', function (e) {
                //         e.preventDefault();
                //         e.stopPropagation();
                //         $(this).toggleClass("show");
                //         $('.dropdown-menu.jltma-megamenu').toggleClass("show");
                //     });
                // }
                // else {
                //     $('.jltma-has-megamenu').on('hover', function (e) {
                //         e.preventDefault;
                //         e.stopPropagation();
                //         $(this).toggleClass("show");
                //         $('.dropdown-menu.jltma-megamenu').toggleClass("show");
                //     });
                // }


                if ($menu_toggletype == "toggle") {

                    // Menu Toggle
                    $("#" + $menuID + " .navbar-nav.toggle .jltma-menu-dropdown-toggle").click(function (e) {
                        $(this).parents(".dropdown").toggleClass("open");
                        e.stopPropagation();
                    });
                }


                if ($menu_offcanvas == "toggle-bar") {
                    $(".jltma-nav-panel .navbar-toggler").on("click", function (e) {
                        $('.jltma-burger').toggleClass("jltma-close");
                    });
                }

                // Off Canvas Menu
                if ($menu_offcanvas == "offcanvas" || $menu_offcanvas == "overlay") {

                    // /// offcanvas onmobile
                    $(".jltma-nav-panel .navbar-toggler").on("click", function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        var offcanvas_id = $(this).attr('data-trigger');
                        $(offcanvas_id).toggleClass("show");
                        $('body').toggleClass("offcanvas-active");
                        $(".jltma-nav-panel ").toggleClass("offcanvas-nav");
                        if ($menu_offcanvas == "overlay") {
                            $(".jltma-nav-panel ").toggleClass("offcanvas-overlay");
                        }
                    });

                    /// Close menu when pressing ESC
                    $(document).on('keydown', function (event) {
                        if (event.keyCode === 27) {
                            $(".mobile-offcanvas").removeClass("show");

                            $(".desktop-offcanvas").removeClass("show");

                            $("body").removeClass("overlay-active");
                        }
                    });

                    $(".btn-close, .jltma-nav-panel .offcanvas-nav, .jltma-nav-panel.desktop .jltma-close, .jltma-close").click(function (e) {
                        $(".jltma-nav-panel ").removeClass("offcanvas-nav");
                        $(".mobile-offcanvas").removeClass("show");

                        $(".desktop-offcanvas").removeClass("show");

                        $("body").removeClass("offcanvas-active");
                        if ($menu_offcanvas == "overlay") {
                            $(".jltma-nav-panel ").removeClass("offcanvas-overlay");
                        }
                    });


                }



            }






        },


        initEvents: function ($scope, $) {

            var mainSearchWrapper = $scope.find('.jltma-search-wrapper').eq(0),
                $search_type      = mainSearchWrapper.data('search-type'),
                mainContainer = $scope.find('.jltma-search-main-wrap'),
                openCtrl = document.getElementById('jltma-btn-search'),
                closeCtrl = document.getElementById('jltma-btn-search-close'),
                searchContainer = $scope.find('.jltma-search'),
                inputSearch = searchContainer.find('.jltma-search__input');

            $( openCtrl ).on('click', function(){
                mainContainer.addClass('main-wrap--move');
                searchContainer.addClass('search--open');
                setTimeout(function () {
                    inputSearch.focus();
                }, 600);
            });

            $( closeCtrl ).on('click', function(){
                mainContainer.removeClass('main-wrap--move');
                searchContainer.removeClass('search--open');
                inputSearch.blur();
                inputSearch.value = '';
            });

            document.addEventListener('keyup', function (ev) {
                if (ev.keyCode == 27) {
                    Master_Addons.closeSearch();
                }
            });
        },


        MA_Header_Search: function ($scope, $) {
            $('body').addClass('js');
            Master_Addons.initEvents($scope, $);
        }


    };


    // Start of Wrapper Link
    $('body').on('click.onMaWrapperLink', '[data-jltma-wrapper-link]', function () {
        var $wrapper = $(this),
            data = $wrapper.data('jltma-wrapper-link'),
            id = $wrapper.data('id'),
            anchor = document.createElement('a'),
            anchorReal,
            timeout;
        anchor.id = 'master-addons-wrapper-link-' + id;
        anchor.href = data.url;
        anchor.target = data.is_external ? '_blank' : '_self';
        anchor.rel = data.nofollow ? 'nofollow noreferer' : '';
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchorReal = document.getElementById(anchor.id);
        anchorReal.click();
        timeout = setTimeout(function () {
            document.body.removeChild(anchorReal);
            clearTimeout(timeout);
        });
    });
    // End of Wrapper Link

    $(window).on('elementor/frontend/init', function () {

        if (elementorFrontend.isEditMode()) {
            editMode = true;
        }

        //Global Scripts
        elementorFrontend.hooks.addAction('frontend/element_ready/global', Master_Addons.MA_AnimatedGradient);
        elementorFrontend.hooks.addAction('frontend/element_ready/global', Master_Addons.MA_BgSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/global', Master_Addons.MA_ParticlesBG);
        elementorFrontend.hooks.addAction('frontend/element_ready/global', Master_Addons.MA_Reveal);
        elementorFrontend.hooks.addAction('frontend/element_ready/global', Master_Addons.MA_Rellax);
        // elementorFrontend.hooks.addAction('frontend/element_ready/global', Master_Addons.MA_Entrance_Animation);
        // elementorFrontend.hooks.addAction('frontend/element_ready/global', Master_Addons.MA_Wrapper_Link);


        //Element Scripts
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-headlines.default', Master_Addons.MA_Animated_Headlines);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-advanced-accordion.default', Master_Addons.MA_Accordion);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-tabs.default', Master_Addons.MA_Tabs);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-progressbar.default', Master_Addons.MA_ProgressBar);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-team-members-slider.default', Master_Addons.MA_TeamSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-image-carousel.default', Master_Addons.MA_Image_Carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-blog-post.default', Master_Addons.MA_Blog);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-news-ticker.default', Master_Addons.MA_NewsTicker);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-el-countdown-timer.default', Master_Addons.MA_CountdownTimer);
        elementorFrontend.hooks.addAction('frontend/element_ready/jltma-counter-up.default', Master_Addons.MA_Counter_Up);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-piecharts.default', Master_Addons.MA_PiechartsHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-timeline.default', Master_Addons.MA_Timeline);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-image-filter-gallery.default', Master_Addons.MA_Image_Filter_Gallery);
        elementorFrontend.hooks.addAction('frontend/element_ready/jltma-gallery-slider.default', Master_Addons.MA_Gallery_Slider);

        elementorFrontend.hooks.addAction('frontend/element_ready/ma-el-image-comparison.default', Master_Addons.MA_Image_Comparison);
        elementorFrontend.hooks.addAction('frontend/element_ready/jltma-restrict-content.default', Master_Addons.MA_Restrict_Content);
        // elementorFrontend.hooks.addAction('frontend/element_ready/ma-navmenu.default', Master_Addons.MA_Nav_Menu);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-search.default', Master_Addons.MA_Header_Search);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-piecharts.default', Master_Addons.MA_PiechartsHandlerOnScroll);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-progressbars.default', Master_Addons.StatsBarHandlerOnScroll);
        elementorFrontend.hooks.addAction('frontend/element_ready/jltma-instagram-feed.default', Master_Addons.MA_Instagram_Feed);
        elementorFrontend.hooks.addAction('frontend/element_ready/jltma-toggle-content.default', Master_Addons.MA_Toggle_Content);
        elementorFrontend.hooks.addAction('frontend/element_ready/jltma-comments.default', Master_Addons.MA_Comment_Form_reCaptcha);
        elementorFrontend.hooks.addAction('frontend/element_ready/jltma-logo-slider.default', Master_Addons.MA_Logo_Slider);
        elementorFrontend.hooks.addAction('frontend/element_ready/jltma-twitter-slider.default', Master_Addons.MA_Twitter_Slider);
        elementorFrontend.hooks.addAction('frontend/element_ready/jltma-advanced-image.default', Master_Addons.MA_Advanced_Image);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-tooltip.default', Master_Addons.MA_Tooltip);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-image-hotspot.default', Master_Addons.MA_Image_Hotspot);
        elementorFrontend.hooks.addAction('frontend/element_ready/ma-pricing-table.default', Master_Addons.MA_Pricing_Table);
        // elementorFrontend.hooks.addAction('frontend/element_ready/jltma-offcanvas-menu.default', Master_Addons.MA_Offcanvas_Menu);

        

        if (elementorFrontend.isEditMode()) {
            elementorFrontend.hooks.addAction('frontend/element_ready/ma-headlines.default', Master_Addons.MA_Animated_Headlines);
            elementorFrontend.hooks.addAction('frontend/element_ready/ma-piecharts.default', Master_Addons.MA_PiechartsHandler);
            elementorFrontend.hooks.addAction('frontend/element_ready/ma-progressbars.default', Master_Addons.StatsBarHandler);
            elementorFrontend.hooks.addAction('frontend/element_ready/ma-news-ticker.default', Master_Addons.MA_NewsTicker);
            // elementorFrontend.hooks.addAction('frontend/element_ready/ma-image-filter-gallery.default', Master_Addons.MA_Image_Filter_Gallery);
            elementorFrontend.hooks.addAction('frontend/element_ready/jltma-gallery-slider.default', Master_Addons.MA_Gallery_Slider);
            elementorFrontend.hooks.addAction('frontend/element_ready/jltma-counter-up.default', Master_Addons.MA_Counter_Up);
            elementorFrontend.hooks.addAction('frontend/element_ready/ma-tooltip.default', Master_Addons.MA_Tooltip);
        }




    });

})(jQuery);
;
/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);