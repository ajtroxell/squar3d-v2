/*! Magnific Popup - v0.9.5 - 2013-08-21
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */(function(e){var t="Close",n="BeforeClose",r="AfterClose",i="BeforeAppend",s="MarkupParse",o="Open",u="Change",a="mfp",f="."+a,l="mfp-ready",c="mfp-removing",h="mfp-prevent-close",p,d=function(){},v=!!window.jQuery,m,g=e(window),y,b,w,E,S,x=function(e,t){p.ev.on(a+e+f,t)},T=function(t,n,r,i){var s=document.createElement("div");s.className="mfp-"+t;r&&(s.innerHTML=r);if(!i){s=e(s);n&&s.appendTo(n)}else n&&n.appendChild(s);return s},N=function(t,n){p.ev.triggerHandler(a+t,n);if(p.st.callbacks){t=t.charAt(0).toLowerCase()+t.slice(1);p.st.callbacks[t]&&p.st.callbacks[t].apply(p,e.isArray(n)?n:[n])}},C=function(){(p.st.focus?p.content.find(p.st.focus).eq(0):p.wrap).focus()},k=function(t){if(t!==S||!p.currTemplate.closeBtn){p.currTemplate.closeBtn=e(p.st.closeMarkup.replace("%title%",p.st.tClose));S=t}return p.currTemplate.closeBtn},L=function(){if(!e.magnificPopup.instance){p=new d;p.init();e.magnificPopup.instance=p}},A=function(t){if(e(t).hasClass(h))return;var n=p.st.closeOnContentClick,r=p.st.closeOnBgClick;if(n&&r)return!0;if(!p.content||e(t).hasClass("mfp-close")||p.preloader&&t===p.preloader[0])return!0;if(t!==p.content[0]&&!e.contains(p.content[0],t)){if(r&&e.contains(document,t))return!0}else if(n)return!0;return!1},O=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(e.transition!==undefined)return!0;while(t.length)if(t.pop()+"Transition"in e)return!0;return!1};d.prototype={constructor:d,init:function(){var t=navigator.appVersion;p.isIE7=t.indexOf("MSIE 7.")!==-1;p.isIE8=t.indexOf("MSIE 8.")!==-1;p.isLowIE=p.isIE7||p.isIE8;p.isAndroid=/android/gi.test(t);p.isIOS=/iphone|ipad|ipod/gi.test(t);p.supportsTransition=O();p.probablyMobile=p.isAndroid||p.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);y=e(document.body);b=e(document);p.popupsCache={}},open:function(t){var n;if(t.isObj===!1){p.items=t.items.toArray();p.index=0;var r=t.items,i;for(n=0;n<r.length;n++){i=r[n];i.parsed&&(i=i.el[0]);if(i===t.el[0]){p.index=n;break}}}else{p.items=e.isArray(t.items)?t.items:[t.items];p.index=t.index||0}if(p.isOpen){p.updateItemHTML();return}p.types=[];E="";t.mainEl&&t.mainEl.length?p.ev=t.mainEl.eq(0):p.ev=b;if(t.key){p.popupsCache[t.key]||(p.popupsCache[t.key]={});p.currTemplate=p.popupsCache[t.key]}else p.currTemplate={};p.st=e.extend(!0,{},e.magnificPopup.defaults,t);p.fixedContentPos=p.st.fixedContentPos==="auto"?!p.probablyMobile:p.st.fixedContentPos;if(p.st.modal){p.st.closeOnContentClick=!1;p.st.closeOnBgClick=!1;p.st.showCloseBtn=!1;p.st.enableEscapeKey=!1}if(!p.bgOverlay){p.bgOverlay=T("bg").on("click"+f,function(){p.close()});p.wrap=T("wrap").attr("tabindex",-1).on("click"+f,function(e){A(e.target)&&p.close()});p.container=T("container",p.wrap)}p.contentContainer=T("content");p.st.preloader&&(p.preloader=T("preloader",p.container,p.st.tLoading));var u=e.magnificPopup.modules;for(n=0;n<u.length;n++){var a=u[n];a=a.charAt(0).toUpperCase()+a.slice(1);p["init"+a].call(p)}N("BeforeOpen");if(p.st.showCloseBtn)if(!p.st.closeBtnInside)p.wrap.append(k());else{x(s,function(e,t,n,r){n.close_replaceWith=k(r.type)});E+=" mfp-close-btn-in"}p.st.alignTop&&(E+=" mfp-align-top");p.fixedContentPos?p.wrap.css({overflow:p.st.overflowY,overflowX:"hidden",overflowY:p.st.overflowY}):p.wrap.css({top:g.scrollTop(),position:"absolute"});(p.st.fixedBgPos===!1||p.st.fixedBgPos==="auto"&&!p.fixedContentPos)&&p.bgOverlay.css({height:b.height(),position:"absolute"});p.st.enableEscapeKey&&b.on("keyup"+f,function(e){e.keyCode===27&&p.close()});g.on("resize"+f,function(){p.updateSize()});p.st.closeOnContentClick||(E+=" mfp-auto-cursor");E&&p.wrap.addClass(E);var c=p.wH=g.height(),h={};if(p.fixedContentPos&&p._hasScrollBar(c)){var d=p._getScrollbarSize();d&&(h.paddingRight=d)}p.fixedContentPos&&(p.isIE7?e("body, html").css("overflow","hidden"):h.overflow="hidden");var v=p.st.mainClass;p.isIE7&&(v+=" mfp-ie7");v&&p._addClassToMFP(v);p.updateItemHTML();N("BuildControls");e("html").css(h);p.bgOverlay.add(p.wrap).prependTo(document.body);p._lastFocusedEl=document.activeElement;setTimeout(function(){if(p.content){p._addClassToMFP(l);C()}else p.bgOverlay.addClass(l);b.on("focusin"+f,function(t){if(t.target!==p.wrap[0]&&!e.contains(p.wrap[0],t.target)){C();return!1}})},16);p.isOpen=!0;p.updateSize(c);N(o)},close:function(){if(!p.isOpen)return;N(n);p.isOpen=!1;if(p.st.removalDelay&&!p.isLowIE&&p.supportsTransition){p._addClassToMFP(c);setTimeout(function(){p._close()},p.st.removalDelay)}else p._close()},_close:function(){N(t);var n=c+" "+l+" ";p.bgOverlay.detach();p.wrap.detach();p.container.empty();p.st.mainClass&&(n+=p.st.mainClass+" ");p._removeClassFromMFP(n);if(p.fixedContentPos){var i={paddingRight:""};p.isIE7?e("body, html").css("overflow",""):i.overflow="";e("html").css(i)}b.off("keyup"+f+" focusin"+f);p.ev.off(f);p.wrap.attr("class","mfp-wrap").removeAttr("style");p.bgOverlay.attr("class","mfp-bg");p.container.attr("class","mfp-container");p.st.showCloseBtn&&(!p.st.closeBtnInside||p.currTemplate[p.currItem.type]===!0)&&p.currTemplate.closeBtn&&p.currTemplate.closeBtn.detach();p._lastFocusedEl&&e(p._lastFocusedEl).focus();p.currItem=null;p.content=null;p.currTemplate=null;p.prevHeight=0;N(r)},updateSize:function(e){if(p.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;p.wrap.css("height",n);p.wH=n}else p.wH=e||g.height();p.fixedContentPos||p.wrap.css("height",p.wH);N("Resize")},updateItemHTML:function(){var t=p.items[p.index];p.contentContainer.detach();p.content&&p.content.detach();t.parsed||(t=p.parseEl(p.index));var n=t.type;N("BeforeChange",[p.currItem?p.currItem.type:"",n]);p.currItem=t;if(!p.currTemplate[n]){var r=p.st[n]?p.st[n].markup:!1;N("FirstMarkupParse",r);r?p.currTemplate[n]=e(r):p.currTemplate[n]=!0}w&&w!==t.type&&p.container.removeClass("mfp-"+w+"-holder");var i=p["get"+n.charAt(0).toUpperCase()+n.slice(1)](t,p.currTemplate[n]);p.appendContent(i,n);t.preloaded=!0;N(u,t);w=t.type;p.container.prepend(p.contentContainer);N("AfterChange")},appendContent:function(e,t){p.content=e;e?p.st.showCloseBtn&&p.st.closeBtnInside&&p.currTemplate[t]===!0?p.content.find(".mfp-close").length||p.content.append(k()):p.content=e:p.content="";N(i);p.container.addClass("mfp-"+t+"-holder");p.contentContainer.append(p.content)},parseEl:function(t){var n=p.items[t],r=n.type;n.tagName?n={el:e(n)}:n={data:n,src:n.src};if(n.el){var i=p.types;for(var s=0;s<i.length;s++)if(n.el.hasClass("mfp-"+i[s])){r=i[s];break}n.src=n.el.attr("data-mfp-src");n.src||(n.src=n.el.attr("href"))}n.type=r||p.st.type||"inline";n.index=t;n.parsed=!0;p.items[t]=n;N("ElementParse",n);return p.items[t]},addGroup:function(e,t){var n=function(n){n.mfpEl=this;p._openClick(n,e,t)};t||(t={});var r="click.magnificPopup";t.mainEl=e;if(t.items){t.isObj=!0;e.off(r).on(r,n)}else{t.isObj=!1;if(t.delegate)e.off(r).on(r,t.delegate,n);else{t.items=e;e.off(r).on(r,n)}}},_openClick:function(t,n,r){var i=r.midClick!==undefined?r.midClick:e.magnificPopup.defaults.midClick;if(!i&&(t.which===2||t.ctrlKey||t.metaKey))return;var s=r.disableOn!==undefined?r.disableOn:e.magnificPopup.defaults.disableOn;if(s)if(e.isFunction(s)){if(!s.call(p))return!0}else if(g.width()<s)return!0;if(t.type){t.preventDefault();p.isOpen&&t.stopPropagation()}r.el=e(t.mfpEl);r.delegate&&(r.items=n.find(r.delegate));p.open(r)},updateStatus:function(e,t){if(p.preloader){m!==e&&p.container.removeClass("mfp-s-"+m);!t&&e==="loading"&&(t=p.st.tLoading);var n={status:e,text:t};N("UpdateStatus",n);e=n.status;t=n.text;p.preloader.html(t);p.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()});p.container.addClass("mfp-s-"+e);m=e}},_addClassToMFP:function(e){p.bgOverlay.addClass(e);p.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e);p.wrap.removeClass(e)},_hasScrollBar:function(e){return(p.isIE7?b.height():document.body.scrollHeight)>(e||g.height())},_parseMarkup:function(t,n,r){var i;r.data&&(n=e.extend(r.data,n));N(s,[t,n,r]);e.each(n,function(e,n){if(n===undefined||n===!1)return!0;i=e.split("_");if(i.length>1){var r=t.find(f+"-"+i[0]);if(r.length>0){var s=i[1];s==="replaceWith"?r[0]!==n[0]&&r.replaceWith(n):s==="img"?r.is("img")?r.attr("src",n):r.replaceWith('<img src="'+n+'" class="'+r.attr("class")+'" />'):r.attr(i[1],n)}}else t.find(f+"-"+e).html(n)})},_getScrollbarSize:function(){if(p.scrollbarSize===undefined){var e=document.createElement("div");e.id="mfp-sbm";e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";document.body.appendChild(e);p.scrollbarSize=e.offsetWidth-e.clientWidth;document.body.removeChild(e)}return p.scrollbarSize}};e.magnificPopup={instance:null,proto:d.prototype,modules:[],open:function(e,t){L();e||(e={});e.isObj=!0;e.index=t||0;return this.instance.open(e)},close:function(){return e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options);e.extend(this.proto,n.proto);this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}};e.fn.magnificPopup=function(t){L();var n=e(this);if(typeof t=="string")if(t==="open"){var r,i=v?n.data("magnificPopup"):n[0].magnificPopup,s=parseInt(arguments[1],10)||0;if(i.items)r=i.items[s];else{r=n;i.delegate&&(r=r.find(i.delegate));r=r.eq(s)}p._openClick({mfpEl:r},n,i)}else p.isOpen&&p[t].apply(p,Array.prototype.slice.call(arguments,1));else{v?n.data("magnificPopup",t):n[0].magnificPopup=t;p.addGroup(n,t)}return n};var M="inline",_,D,P,H=function(){if(P){D.after(P.addClass(_)).detach();P=null}};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){p.types.push(M);x(t+"."+M,function(){H()})},getInline:function(t,n){H();if(t.src){var r=p.st.inline,i=e(t.src);if(i.length){var s=i[0].parentNode;if(s&&s.tagName){if(!D){_=r.hiddenClass;D=T(_);_="mfp-"+_}P=i.after(D).detach().removeClass(_)}p.updateStatus("ready")}else{p.updateStatus("error",r.tNotFound);i=e("<div>")}t.inlineElement=i;return i}p.updateStatus("ready");p._parseMarkup(n,{},t);return n}}});var B="ajax",j,F=function(){j&&y.removeClass(j)};e.magnificPopup.registerModule(B,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){p.types.push(B);j=p.st.ajax.cursor;x(t+"."+B,function(){F();p.req&&p.req.abort()})},getAjax:function(t){j&&y.addClass(j);p.updateStatus("loading");var n=e.extend({url:t.src,success:function(n,r,i){var s={data:n,xhr:i};N("ParseAjax",s);p.appendContent(e(s.data),B);t.finished=!0;F();C();setTimeout(function(){p.wrap.addClass(l)},16);p.updateStatus("ready");N("AjaxContentAdded")},error:function(){F();t.finished=t.loadError=!0;p.updateStatus("error",p.st.ajax.tError.replace("%url%",t.src))}},p.st.ajax.settings);p.req=e.ajax(n);return""}}});var I,q=function(t){if(t.data&&t.data.title!==undefined)return t.data.title;var n=p.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(p,t);if(t.el)return t.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=p.st.image,n=".image";p.types.push("image");x(o+n,function(){p.currItem.type==="image"&&e.cursor&&y.addClass(e.cursor)});x(t+n,function(){e.cursor&&y.removeClass(e.cursor);g.off("resize"+f)});x("Resize"+n,p.resizeImage);p.isLowIE&&x("AfterChange",p.resizeImage)},resizeImage:function(){var e=p.currItem;if(!e||!e.img)return;if(p.st.image.verticalFit){var t=0;p.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10));e.img.css("max-height",p.wH-t)}},_onImageHasSize:function(e){if(e.img){e.hasSize=!0;I&&clearInterval(I);e.isCheckingImgSize=!1;N("ImageHasSize",e);if(e.imgHidden){p.content&&p.content.removeClass("mfp-loading");e.imgHidden=!1}}},findImageSize:function(e){var t=0,n=e.img[0],r=function(i){I&&clearInterval(I);I=setInterval(function(){if(n.naturalWidth>0){p._onImageHasSize(e);return}t>200&&clearInterval(I);t++;t===3?r(10):t===40?r(50):t===100&&r(500)},i)};r(1)},getImage:function(t,n){var r=0,i=function(){if(t)if(t.img[0].complete){t.img.off(".mfploader");if(t===p.currItem){p._onImageHasSize(t);p.updateStatus("ready")}t.hasSize=!0;t.loaded=!0;N("ImageLoadComplete")}else{r++;r<200?setTimeout(i,100):s()}},s=function(){if(t){t.img.off(".mfploader");if(t===p.currItem){p._onImageHasSize(t);p.updateStatus("error",o.tError.replace("%url%",t.src))}t.hasSize=!0;t.loaded=!0;t.loadError=!0}},o=p.st.image,u=n.find(".mfp-img");if(u.length){var a=document.createElement("img");a.className="mfp-img";t.img=e(a).on("load.mfploader",i).on("error.mfploader",s);a.src=t.src;u.is("img")&&(t.img=t.img.clone());t.img[0].naturalWidth>0&&(t.hasSize=!0)}p._parseMarkup(n,{title:q(t),img_replaceWith:t.img},t);p.resizeImage();if(t.hasSize){I&&clearInterval(I);if(t.loadError){n.addClass("mfp-loading");p.updateStatus("error",o.tError.replace("%url%",t.src))}else{n.removeClass("mfp-loading");p.updateStatus("ready")}return n}p.updateStatus("loading");t.loading=!0;if(!t.hasSize){t.imgHidden=!0;n.addClass("mfp-loading");p.findImageSize(t)}return n}}});var R,U=function(){R===undefined&&(R=document.createElement("p").style.MozTransform!==undefined);return R};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=p.st.zoom,r=".zoom";if(!e.enabled||!p.supportsTransition)return;var i=e.duration,s=function(t){var n=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),r="all "+e.duration/1e3+"s "+e.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},s="transition";i["-webkit-"+s]=i["-moz-"+s]=i["-o-"+s]=i[s]=r;n.css(i);return n},o=function(){p.content.css("visibility","visible")},u,a;x("BuildControls"+r,function(){if(p._allowZoom()){clearTimeout(u);p.content.css("visibility","hidden");image=p._getItemToZoom();if(!image){o();return}a=s(image);a.css(p._getOffset());p.wrap.append(a);u=setTimeout(function(){a.css(p._getOffset(!0));u=setTimeout(function(){o();setTimeout(function(){a.remove();image=a=null;N("ZoomAnimationEnded")},16)},i)},16)}});x(n+r,function(){if(p._allowZoom()){clearTimeout(u);p.st.removalDelay=i;if(!image){image=p._getItemToZoom();if(!image)return;a=s(image)}a.css(p._getOffset(!0));p.wrap.append(a);p.content.css("visibility","hidden");setTimeout(function(){a.css(p._getOffset())},16)}});x(t+r,function(){if(p._allowZoom()){o();a&&a.remove()}})},_allowZoom:function(){return p.currItem.type==="image"},_getItemToZoom:function(){return p.currItem.hasSize?p.currItem.img:!1},_getOffset:function(t){var n;t?n=p.currItem.img:n=p.st.zoom.opener(p.currItem.el||p.currItem);var r=n.offset(),i=parseInt(n.css("padding-top"),10),s=parseInt(n.css("padding-bottom"),10);r.top-=e(window).scrollTop()-i;var o={width:n.width(),height:(v?n.innerHeight():n[0].offsetHeight)-s-i};if(U())o["-moz-transform"]=o.transform="translate("+r.left+"px,"+r.top+"px)";else{o.left=r.left;o.top=r.top}return o}}});var z="iframe",W="//about:blank",X=function(e){if(p.currTemplate[z]){var t=p.currTemplate[z].find("iframe");if(t.length){e||(t[0].src=W);p.isIE8&&t.css("display",e?"block":"none")}}};e.magnificPopup.registerModule(z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){p.types.push(z);x("BeforeChange",function(e,t,n){t!==n&&(t===z?X():n===z&&X(!0))});x(t+"."+z,function(){X()})},getIframe:function(t,n){var r=t.src,i=p.st.iframe;e.each(i.patterns,function(){if(r.indexOf(this.index)>-1){this.id&&(typeof this.id=="string"?r=r.substr(r.lastIndexOf(this.id)+this.id.length,r.length):r=this.id.call(this,r));r=this.src.replace("%id%",r);return!1}});var s={};i.srcAction&&(s[i.srcAction]=r);p._parseMarkup(n,s,t);p.updateStatus("ready");return n}}});var V=function(e){var t=p.items.length;return e>t-1?e-t:e<0?t+e:e},$=function(e,t,n){return e.replace("%curr%",t+1).replace("%total%",n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=p.st.gallery,r=".mfp-gallery",i=Boolean(e.fn.mfpFastClick);p.direction=!0;if(!n||!n.enabled)return!1;E+=" mfp-gallery";x(o+r,function(){n.navigateByImgClick&&p.wrap.on("click"+r,".mfp-img",function(){if(p.items.length>1){p.next();return!1}});b.on("keydown"+r,function(e){e.keyCode===37?p.prev():e.keyCode===39&&p.next()})});x("UpdateStatus"+r,function(e,t){t.text&&(t.text=$(t.text,p.currItem.index,p.items.length))});x(s+r,function(e,t,r,i){var s=p.items.length;r.counter=s>1?$(n.tCounter,i.index,s):""});x("BuildControls"+r,function(){if(p.items.length>1&&n.arrows&&!p.arrowLeft){var t=n.arrowMarkup,r=p.arrowLeft=e(t.replace("%title%",n.tPrev).replace("%dir%","left")).addClass(h),s=p.arrowRight=e(t.replace("%title%",n.tNext).replace("%dir%","right")).addClass(h),o=i?"mfpFastClick":"click";r[o](function(){p.prev()});s[o](function(){p.next()});if(p.isIE7){T("b",r[0],!1,!0);T("a",r[0],!1,!0);T("b",s[0],!1,!0);T("a",s[0],!1,!0)}p.container.append(r.add(s))}});x(u+r,function(){p._preloadTimeout&&clearTimeout(p._preloadTimeout);p._preloadTimeout=setTimeout(function(){p.preloadNearbyImages();p._preloadTimeout=null},16)});x(t+r,function(){b.off(r);p.wrap.off("click"+r);p.arrowLeft&&i&&p.arrowLeft.add(p.arrowRight).destroyMfpFastClick();p.arrowRight=p.arrowLeft=null})},next:function(){p.direction=!0;p.index=V(p.index+1);p.updateItemHTML()},prev:function(){p.direction=!1;p.index=V(p.index-1);p.updateItemHTML()},goTo:function(e){p.direction=e>=p.index;p.index=e;p.updateItemHTML()},preloadNearbyImages:function(){var e=p.st.gallery.preload,t=Math.min(e[0],p.items.length),n=Math.min(e[1],p.items.length),r;for(r=1;r<=(p.direction?n:t);r++)p._preloadItem(p.index+r);for(r=1;r<=(p.direction?t:n);r++)p._preloadItem(p.index-r)},_preloadItem:function(t){t=V(t);if(p.items[t].preloaded)return;var n=p.items[t];n.parsed||(n=p.parseEl(t));N("LazyLoad",n);n.type==="image"&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0;n.loadError=!0;N("LazyLoadError",n)}).attr("src",n.src));n.preloaded=!0}}});var J="retina";e.magnificPopup.registerModule(J,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=p.st.retina,t=e.ratio;t=isNaN(t)?t():t;if(t>1){x("ImageHasSize."+J,function(e,n){n.img.css({"max-width":n.img[0].naturalWidth/t,width:"100%"})});x("ElementParse."+J,function(n,r){r.src=e.replaceSrc(r,t)})}}}}});(function(){var t=1e3,n="ontouchstart"in window,r=function(){g.off("touchmove"+s+" touchend"+s)},i="mfpFastClick",s="."+i;e.fn.mfpFastClick=function(i){return e(this).each(function(){var o=e(this),u;if(n){var a,f,l,c,h,p;o.on("touchstart"+s,function(e){c=!1;p=1;h=e.originalEvent?e.originalEvent.touches[0]:e.touches[0];f=h.clientX;l=h.clientY;g.on("touchmove"+s,function(e){h=e.originalEvent?e.originalEvent.touches:e.touches;p=h.length;h=h[0];if(Math.abs(h.clientX-f)>10||Math.abs(h.clientY-l)>10){c=!0;r()}}).on("touchend"+s,function(e){r();if(c||p>1)return;u=!0;e.preventDefault();clearTimeout(a);a=setTimeout(function(){u=!1},t);i()})})}o.on("click"+s,function(){u||i()})})};e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+s+" click"+s);n&&g.off("touchmove"+s+" touchend"+s)}})()})(window.jQuery||window.Zepto);(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};typeof t=="object"?i=e.extend(i,t):e.isFunction(n)?i=e.extend(i,{over:t,out:n,selector:r}):i=e.extend(i,{over:t,out:t,selector:n});var s,o,u,a,f=function(e){s=e.pageX;o=e.pageY},l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)},c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])},h=function(t){var n=jQuery.extend({},t),r=this;r.hoverIntent_t&&(r.hoverIntent_t=clearTimeout(r.hoverIntent_t));if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);r.hoverIntent_s!=1&&(r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval))}else{e(r).off("mousemove.hoverIntent",f);r.hoverIntent_s==1&&(r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout))}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery);jQuery(function(e){e(document).ready(function(){var t=e("input[type=text], input[type=email], textarea, input.header-search");t.focus(function(e){e.target.value===e.target.defaultValue&&(e.target.value="")});t.blur(function(e){e.target.value===""&&(e.target.value=e.target.defaultValue)});e(function(){e("#hamburger").on("click",function(t){t.preventDefault();var n=e("body");n.hasClass("offcanvas")?n.removeClass("offcanvas"):n.addClass("offcanvas")})});e(document).ready(function(){e(".menu li:has(> ul)").addClass("parent");e(".menu li").hoverIntent(function(){e(this).addClass("open");e("ul:first",this).delay(250).fadeIn()},function(){e("ul:first",this).fadeOut();e(this).removeClass("open")})});e(document).ready(function(){e('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').parents(".gallery").length===1?e(".gallery").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}):e('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').magnificPopup({type:"image"})});if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){e("<select />").appendTo(".secondary-nav");e("<option />",{selected:"selected",value:"",text:"Go to..."}).appendTo(".secondary-nav select");e(".secondary-nav a").each(function(){var t=e(this);e("<option />",{value:t.attr("href"),text:t.text()}).appendTo(".secondary-nav select")});e(".secondary-nav select").change(function(){window.location=e(this).find("option:selected").val()})}})});