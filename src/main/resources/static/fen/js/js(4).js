﻿(function(a){var b=a({});a.ajaxQueue=function(c){var f,d=a.Deferred(),g=d.promise();function e(h){f=a.ajax(c).done(d.resolve).fail(d.reject).then(h,h)}b.queue(e);g.abort=function(j){if(f){return f.abort(j)}var i=b.queue(),h=a.inArray(e,i);if(h>-1){i.splice(h,1)}d.rejectWith(c.context||c,[g,j,""]);return g};return g}})(jQuery);var PAGELAB_PATTERN=/^(PageLab_PLE[0-9]{4})=([^;]*)$/;$(document).ready(function(){$(document.body).mousedown(function(a){a=a?a.target:window.event.srcElement;if(a.className.toUpperCase().indexOf("TRACK")>-1){trackurl(a.name)}else{var b=a.parentNode;if(b.className.toUpperCase().indexOf("TRACK")>-1){trackurl(b.name)}}})});function trackurl(a){if(a==null||a==""){return}var c=[];var b=getGatherCookie();c.push(document.location.protocol);c.push("//vamr.vancl.com/track.aspx?ref=");c.push(escape(window.document.referrer));c.push("&areaid=");c.push(a);if(b!=""){c.push("&gather_cookies="+b)}var d=c.join("");$("#weblog_track").remove();$("body").append('<img id="weblog_track" src='+d+' style="display:none;"/>')}function getGatherCookie(){var b="";var c=document.cookie.split(";");for(var a=0;a<c.length;a++){if(PAGELAB_PATTERN.test(trim(c[a]))){b+=trim(c[a].split("=")[1])+","}}b=(b.length>0)?b.substr(0,b.length-1):"";return b}function trim(c){for(var a=0;a<c.length&&c.charAt(a)==" ";a++){}for(var b=c.length;b>0&&c.charAt(b-1)==" ";b--){}if(a>b){return""}return c.substring(a,b)};$(function(){var b,c,d,a;b=(function(){window.VANCL=window.VANCL||{};window.VANCL.Global=window.VANCL.Global||{};return window.VANCL.Global}());c=document.location.hash;d=c.indexOf("@");a=c.length;if(document.all&&c.length>-1&&document.title.split("#").length>1){document.title=document.title.split("#")[0]}if(d>-1){document.location.hash=c.substr(d+1)}if(c.substr(0,5)==="#ref="){if(d>-1){a=d}b.ref=c.substring(5,a)}$("body").mousedown(function(e){function k(p){var o=b.hasOwnProperty("ref")?b.ref:null;return p.attr("location")===undefined?o:p.attr("location")}function h(o){return o===undefined||o===""||o===null}function n(p,r){var s=k(r),q,o;if(h(s)===true){return h(p)?null:p}if(p===""){return s}q=p+"|"+s;o=q.split("|");if(o.length>1&&o[0]===o[1]){return s}if(o.length>=10){o.splice(8,o.length-9)}return o.join("|")}function i(p){var o=p.attr("href");if(h(o)===true){return null}o=o.replace(" ","");if(o.indexOf("javascript")>-1){return null}if(o.indexOf("#")>-1&&p.attr("target")===undefined){return null}return o}function f(o){if(o===undefined){return false}if(o===""){return true}if(o.indexOf("_")===-1&&o.indexOf("-")===-1){return false}return true}function j(r,u){var o="",t=r,p,q,s;p=r.lastIndexOf("#");q=r.indexOf("@");if(p>-1){t=r.substr(0,p);if(q===-1){q=p}o="@"+r.substr(q+1)}if(r.indexOf("vjia.com")===-1){return t+"#ref="+u+o}if(r.indexOf(u)>-1){return r}s=r.indexOf("?")===-1?"?":"&";return t+s+"ref="+u}var m,l,g;m=$(e.target).closest("a");if(m.length===0){return}l=m.attr("rel");g=i(m);if(g===null){return}if(h(l)&&m.hasClass("track")){l=m.attr("name")}if(f(l)===false){return}l=n(l,m);if(l){m.attr("href",j(g,l))}})});function getCookie(b){var a="";var c=b+"=";if(document.cookie.length>0){offset=document.cookie.indexOf(c);if(offset!=-1){offset+=c.length;end=document.cookie.indexOf(";",offset);if(end==-1){end=document.cookie.length}a=unescape(document.cookie.substring(offset,end))}}return a}function setCookie(a,b,d){var e="";var c=1;if(d!=null){c=d}e=new Date((new Date()).getTime()+c*86400000);e="; expires="+e.toGMTString();document.cookie=a+"="+escape(b)+";path=/"+e}function delCookie(a){var b="";b=new Date((new Date()).getTime()-1);b="; expires="+b.toGMTString();document.cookie=a+"="+escape("")+";path=/"+b};function ClickSourceVancl(){}ClickSourceVancl.prototype.url=location.href;ClickSourceVancl.prototype.refUrl=document.referrer;ClickSourceVancl.prototype.clickwwwname="http://click.vancl.com/";ClickSourceVancl.prototype.redirect=function(b){var a=document.createElement("script");a.src=b;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)};ClickSourceVancl.prototype.get_param=function(d){var f=location.search.substring(1)||location.hash.substring(1);var c=f.split("&");for(var b=0;b<c.length;b++){var e=c[b].indexOf("=");if(e==-1){continue}var a=c[b].substring(0,e);if(a.toLowerCase()==d.toLowerCase()){var g=c[b].substring(e+1);g=decodeURIComponent(g);return g}}return null};ClickSourceVancl.prototype.getHost=function(d){var a="";if(typeof d=="undefined"||d==null){return a}var c=/.*\:\/\/([^\/]*).*/;var b=d.match(c);if(typeof b!="undefined"&&b!=null){a=b[1]}return a};ClickSourceVancl.prototype.getCookie=function(b){var a="";var c=b+"=";if(document.cookie.length>0){offset=document.cookie.indexOf(c);if(offset!=-1){offset+=c.length;end=document.cookie.indexOf(";",offset);if(end==-1){end=document.cookie.length}a=unescape(document.cookie.substring(offset,end))}}return a};ClickSourceVancl.prototype.setCookie=function(a,b,d){var e="";var c=1;if(d!=null){c=d}e=new Date((new Date()).getTime()+c*86400000);e="; expires="+e.toGMTString();document.cookie=a+"="+escape(b)+";domain=vancl.com;path=/"+e};ClickSourceVancl.prototype.excuteFunction=function(a){try{if(window.location.host.indexOf("vancl.com")<0){return}try{if(window.top==window){a.setCookie("union_frame","0",1)}else{a.setCookie("union_frame","1",1)}}catch(b){a.setCookie("union_frame","1",1)}if(window.document.referrer&&window.document.referrer.indexOf("soso.com")>=0){VanclUnionClick();return}var j=a.get_param("source");if(j!=null&&j!=""){var k=a.get_param("sourcesuninfo");if(k==null){k=""}if(k==""){var g=a.get_param("psId");if(g!=null&&g!=""){k="ad-0-1-"+g+"-0"}var l=a.get_param("srcId");if(l!=null&&l!=""){k="ad-0-3-0"+l+"-1"}}var n=a.getCookie("union_visited");var d;if(n=="1"){d=0}else{a.setCookie("union_visited","1",1);d=1}var c=a.clickwwwname+"websource/websource.aspx?source="+j+"&sourceInfo="+k+"&referer="+encodeURIComponent(a.refUrl)+"&hrefurl="+encodeURIComponent(a.url)+"&isnew="+d;a.redirect(c)}else{var h=a.refUrl;if(h!=null&&h!=""){if(a.getHost(h).indexOf("vancl.com")<0&&a.getHost(h).indexOf("vanclimg.com")<0){var n=a.getCookie("union_visited");var d;if(n=="1"){d=0}else{a.setCookie("union_visited","1",1);d=1}var f=a.clickwwwname+"websource/websourceurl.aspx?SourceUrl="+encodeURIComponent(h)+"&hrefurl="+encodeURIComponent(a.url)+"&isnew="+d;a.redirect(f)}else{var m=a.getCookie("WebSourceTemp");if(m!=""){var i=a.clickwwwname+"websource/websource.aspx";a.redirect(i)}}}}}catch(b){}};var clickSourceVanclObj=new ClickSourceVancl();clickSourceVanclObj.excuteFunction(clickSourceVanclObj);function VanclUnionClick(){var b=location.href;var c=document.referrer;var d=document.createElement("script");d.src="http://click.vancl.com/Default.aspx?landingPage="+encodeURIComponent(b)+"&referrer="+encodeURIComponent(c);d.language="javascript";d.type="text/javascript";var a=document.getElementsByTagName("head")[0];a.appendChild(d)};function generateImageDomain(f){var b=["http://p1.vanclimg.com","http://p2.vanclimg.com","http://p3.vanclimg.com","http://p4.vanclimg.com","http://p5.vanclimg.com"],g=0,e=b.length,a=0;if(typeof f==="undefined"){return b[0]}a=f.length;while(a--){g+=f.charCodeAt(a)}return b[g%e]};var vancl=window.vancl||{};vancl.search=vancl.search||{};vancl.search.scrollbar=(function(){var c={container:"recommendscontainer",callback:function(k){}};var i=false;var e=false;var a,h,b,f;var d=function(){a=$("#"+c.container);h=$(a).find(".scrollbar2");b=$(a).find(".controller");f=h.width()-b.width();b.mousedown(function(k){$(this).css("cursor","move");i=true});h.hover(function(){e=true},function(){e=false});h.click(function(k){if(e&&!i){var m=k.pageX-h.offset().left-b.width()/2;var l=0;if(m<=0){l=0}else{if(m>=f){l=100}else{l=parseInt(m/f*100)}}vancl.search.scrollbar.scroll(l);c.callback(l)}});$(document).bind("mousemove",function(k){if(!i){return}var l=0;var m=k.pageX-h.offset().left-b.width()/2;if(m<=0){b.css("margin-left","0px")}else{if(m>=f){b.css("margin-left",f+"px");l=100}else{b.css("margin-left",m+"px");l=parseInt(m/f*100)}}c.callback(l)});$(document).mouseup(function(){b.css("cursor","default");i=false})};var j=function(k){var l=k/100*f;b.animate({marginLeft:l+"px"},"slow")};var g=function(){b.css("margin-left","0px")};return{init:function(k){$.extend(c,k);d()},scroll:j,reset:g}})();$(document).ready(function(){$("#history").css("display","block")});function clearhistory(){$("#history").css("display","none");var b="/common/clearhistory?"+Math.random();$.getJSON(b);var a=new Date((new Date()).getTime()+30*86400000);a="; expires="+a.toGMTString();document.cookie="_vuca="+escape("")+";path=/"+a+";domain=.vancl.com"};String.trim||(String.prototype.trim=function(){var b=this;b=b.replace(/^\s\s*/,"");var c=/\s/;var a=b.length;while(c.test(b.charAt(--a))){}return b.slice(0,a+1)});String.prototype.limitStringLength||(String.prototype.limitStringLength=function(e,c){var f=this;if(!f||!e){return""}var b=0;var d=0;var g="";for(d=0;d<f.length;d++){if(f.charCodeAt(d)>255){b+=2}else{b++}if(b>e){return typeof(c)!=="string"||c.length==0?g:g+c}g+=f.charAt(d)}return f});String.prototype.stringLength||(String.prototype.stringLength=function(){var d=this;if(!d){return 0}var b=0;var c=0;for(c=0;c<d.length;c++){if(d.charCodeAt(c)>255){b+=2}else{b++}}return b});String.prototype.parseToDate||(String.prototype.parseToDate=function(){var f=this;if(!isNaN(Date.parse(f))){return new Date(Date.parse(f))}var d=/\/Date\(([0-9]+)([\+\-])?(\d{2})?(\d{2})?\)\//;if(d.test(f)){var b=d.exec(f);var a=parseInt(b[1]);if(b[2]){if(!isNaN(parseInt(b[3]))){a=a+(b[2]=="+"?parseInt(b[3])*3600:-parseInt(b[3])*3600)}if(!isNaN(parseInt(b[4]))){a=a+(b[2]=="+"?parseInt(b[4])*60:-parseInt(b[4])*60)}}alert(f+","+a);return new Date(a)}var c=/(\d{4})\-(\d{1,2})\-(\d{1,2})[T\s](\d{1,2})\:(\d{1,2})\:(\d{1,2})\.?(\d{1,3})?[Z\+]?(\d{2})?(\d{2})?/;if(c.test(f)){var e=c.exec(f);return new Date(e[1],(e[2]-1),e[3],e[4],e[5],e[6],e[7])}return new Date(1900,1,1)});Array.prototype.indexOf||(Array.prototype.indexOf=function(c,b){for(var a=this.length;a--&&(!b?this[a]!==c:this[a][b]!==c[b]);){}return a});Array.prototype.remove||(Array.prototype.remove=function(d,c){for(var b=0,a=this.length;b<a;b++){if(this[b]===d){this.splice(b,1);b--;a--;if(!c){break}}}});Array.prototype.removeAt||(Array.prototype.removeAt||function(a){if(a>=this.length){return}this.splice(a,1)});var vancl=window.vancl||{};vancl.namespace=function(c){if(!c||!c.length){return null}var b=c.split(".");var d=vancl;for(var a=(b[0]=="vancl")?1:0;a<b.length;++a){d[b[a]]=d[b[a]]||{};d=d[b[a]]}return d};vancl.namespace("util");vancl.util.querystring=function(c){var d,g,b;var f=typeof(c)=="undefined"?location.href:c;f=decodeURIComponent(f);var e=f.indexOf("?");f=f.substr(e+1);var a=f.split("&");for(b=0;b<a.length;b++){e=a[b].indexOf("=");if(e>0){d=a[b].substring(0,e);g=a[b].substr(e+1);this[d]=g}}};vancl.util.stringBuilder=(function(){var a=function(){this._strings=[];if(typeof(a._initialized)=="undefined"){a.prototype.append=function(b){this._strings.push(b)};a.prototype.toString=function(){return this._strings.join("")};a._initialized=true}};return a}());vancl.util.delayJobs=(function(){var a={};var b=function(d,h,g){if(typeof(a[g])=="undefined"){a[g]={index:0,jobs:{}}}var f=++a[g].index;var e=window.setTimeout(function(){delete a[g].jobs[f];if(f!=a[g].index){return}d()},h);a[g].jobs[f]=e};var c=function(f){if(typeof(a[f])=="undefined"){return}var d=a[f].jobs;for(var e in d){clearTimeout(d[e]);delete d[e]}};return{start:b,stop:c}})();vancl.namespace("ui");vancl.ui.getOffsetPosition=function(a){var c={top:0,left:0};if(a.length>0){var b=a[0];do{c.top+=b.offsetTop;c.left+=b.offsetLeft;b=b.offsetParent}while(!(b==null||b.tagName=="BODY"))}return c};vancl.namespace("channel");vancl.channel.getStar=function(c){var a=new vancl.util.stringBuilder();for(var b=1;b<6;b++){if(c>=1){c-=1;a.append('<span class="s_s1"></span>')}else{if(c>0){c=0;a.append('<span class="s_s05"></span>')}else{a.append('<span class="s_s0"></span>')}}}return a.toString()};vancl.channel.processtrack=function(c,a){var b=c;if(a&&a.brandid){if(parseInt(a.brandid)==1){b+="-v"}else{b+="-b"}}return b};$(function(){var b=function(){return $(window).scrollTop()+$(window).height()-97};var c=false;if($.browser.msie&&($.browser.version=="6.0")&&!$.support.style){c=true}var a=$('<div style="right:10px;bottom:10px; POSITION: absolute;z-index:9999"><a href="#"><div style="cursor: pointer;background-image:url(http://i.vanclimg.com/channel/list2013/go2top.png);background-color:transparent;background-repeat:no-repeat;width:25px;height:90px"></div></a></div>').hide();var d=function(){if($(window).scrollTop()<8){a.fadeOut()}else{a.fadeIn();if(c){a.css({top:b()})}}};if(!c){a.css({position:"fixed",bottom:10})}else{if($(window).scrollTop()>0){a.css({top:b()}).show()}$(window).resize(d)}$(window).scroll(d);$("body").prepend(a)});window.jqproductinfo=function(a){};vancl.namespace("vancl.channel");vancl.channel.productpop=(function(){var j={services:"http://page.vanclimg.com/producthandler.ashx",container:"body",elementcontainerid:"popup",arrowiconid:"arrowicon",elements:"",property:"pop",popupimageid:"popupimage",updatetime:"time",delayhide:false,commentsid:"popupcomments",imgtype:"mp",defaultConstructHTML:null,constructHTML:null};var x={services:"http://vanclsearch.vjia.com/search.ashx?callback=?"};var c=(function(){vancl.channel.productsCached=vancl.channel.productsCached||[];return vancl.channel.productsCached}());var o=false;var h="";var s;var t;var i=0;var u=0;var p=function(){if(!!("ontouchstart" in window)||!!("onmsgesturechange" in window)){return}if($("#"+j.arrowiconid).length<=0){$(j.container).append('<div id="'+j.arrowiconid+'" class="ico" style="display:none;z-index:1002"></div>')}if($("#"+j.elementcontainerid).length<=0){$(j.container).append('<div id="'+j.elementcontainerid+'" style="position:absolute;z-index:1001;height:499px"></div>')}$("#"+j.elementcontainerid).hover(function(){o=true},function(){o=false;k()});b()};var b=function(y){if(!y){y=document}$(j.elements+"["+j.property+"]",y).live("mouseover",function(z){var A=$(this);var B=A.attr(j.property);var C=A.attr(j.updatetime);o=true;h=B;vancl.util.delayJobs.start(function(){if(o&&h==B){w(B,C,A,z)}},100,"showpop")}).live("mouseout",function(){o=false;h="";k();clearInterval(t);clearInterval(s);i=0;u=0})};var l=function(y){if(!y){y=document}$(j.elements+"["+j.property+"]",y).unbind()};var d=function(){c=[]};var w=function(C,D,B,z){var y=undefined;if(typeof(c)!="undefined"){for(var A=0;A<c.length;A++){if(c[A].c==C){y=c[A];break}}}if(typeof(y)=="undefined"){if(C.substr(0,1)!="v"){$.ajaxQueue({mode:"abort",type:"GET",url:j.services,dataType:"jsonp",data:{productcode:C,t:D,v:1},jsonpCallback:"jqproductinfo",timeout:2000,cache:true,error:function(F){},success:function(F){if(typeof(F)!="undefined"&&F!=null){c.push(F);if(o&&h==C){v(F,B,z,false)}}}})}else{var E=C.substr(1);$.getJSON(x.services,{productcode:E,start:0,rows:1},function(G){if(typeof(G)!="undefined"&&G!=null){var F=g(G);c.push(F);v(F,B,z,true)}})}}else{v(y,B,z,false)}};var r=function(y,z){clearInterval(t);var A=document.getElementById(j.commentsid);t=setInterval(function(){var B=(y*z-A.scrollTop)*0.1;A.scrollTop+=Math[B>0?"ceil":"floor"](B);if(B==0){clearInterval(t)}},10)};var m=j.getImgName=function(y){if(y[j.imgtype]){return y[j.imgtype]}else{return y.mp}};var q=j.productImageUrl=function(A,y,z){return generateImageDomain(A)+"/product/"+[A.charAt(0),A.charAt(1),A.charAt(2),A,y,z].join("/")};var v=function(C,E,A,B){var z=$("#"+j.elementcontainerid);var y=$("#"+j.arrowiconid);z.attr("class","fc02");z.html('<div style="text-align:center;padding-top:200px;"><img src="http://i.vanclimg.com/logo/loading.gif"/></div>');a(C,E,A);z.show();y.show();var D=B?C.mainpath:q(C.c,"mid",C.mp);$('<img src="'+D+'">').load(function(){if(!o){z.hide();y.hide();return}var F=new Image();F.src=D;if(F.width=="570"){$("#"+j.elementcontainerid).attr("class","fc")}else{$("#"+j.elementcontainerid).attr("class","fc02")}if(!B){z.html(j.constructHTML(C,E));if(!C.cl||C.cl.length<=0){z.addClass("msTipfc02")}else{z.removeClass("msTipfc02");clearInterval(s);s=window.setInterval(function(){if(o){if(i<u){i++}else{i=0}r(i,36)}},2000)}}else{z.html(f(C))}a(C,E,A)})};var a=function(M,N,L){var D=N;if(typeof(D)=="undefined"){D=$(j.elements+"["+j.property+"="+M.c+"]")}var R=50;var y=$("#"+j.arrowiconid);var B=y.width();var z=y.height();var H=$("#"+j.elementcontainerid);var K=H.width();var I=H.height();var F=vancl.ui.getOffsetPosition(D),O=vancl.ui.getOffsetPosition(N);var E=F.left;var G=F.top;var P=O.top;var Q=document.documentElement.scrollTop||document.body.scrollTop;var J=parseInt(document.documentElement.clientHeight)-(P-Q)-I;if(J<0){J=P+G-10;if(J<0){J=scrollTop}}else{J=P-30;if(P-Q<80){J=Q+10}}var C=J+H.height()-($(window).height()+Q);if(C>0){J=J-C-10}H.css("top",J);H.css("left",E+D.width()+B);if(parseInt(H.css("left"))>$("body").width()-(K+R)){H.css("left",E-K-B);y.css("left",E-B);y.css("background-position","0 -25px")}else{y.css("background-position","0 0");y.css("left",E+D.width()+1)}var A=Q+L.clientY-12;if(A+12<=G){A=G}if(A+12>=G+D.height()){A=G+D.height()-25}if(A+12>=J+H.height()-10){A=J+H.height()-25}y.css("top",A)};var g=function(A){var z=A.response.docs[0];var y={};y.imgbigurl=z.photodomain+z.photourl.replace("mid","big");y.mainpath=z.photodomain+z.photourl;y.productname=z.productname;y.productcode=z.productcode;y.SalesFlag=z.salesflag;var B=z.price;if(z.sprice<z.price){B=z.sprice}y.realprice=B;y.vprice=z.vprice;y.colligation=z.userrating;y.commentcount=z.assesscount;return y};var e=function(z,A){var y=new vancl.util.stringBuilder();y.append('<div class="msTipjJ"><img style="width:270px;height:270px;" id="'+j.popupimageid+'" src="'+q(z.c,"mid",m(z))+'"></div>');y.append('<div class="msTipsd"><span>'+z.n+'</span><em class="msTipjJ01">产品编号：'+z.c+"</em></div>");y.append('<ul class="msTipPrice"><li class="msTipjJ02"><strong>售价：￥'+parseInt(z.sp)+'</strong></li><li class="msTipjJ03">市场价：<del>￥'+parseInt(z.vp)+"</del> <span></span></li></ul>");y.append('<p class="msTipjJ04">');if(z.r&&z.r>0){y.append("<span>好评率</span><em>"+z.r+"%</em>")}else{y.append('<span class="msTipNopl">暂无评论</span>')}y.append('</p><div class="blank10"></div>');y.append('<div class="msTipjJ05" id='+j.commentsid+'><div style="position:relative">');if(z.cl&&z.cl.length>0){$.each(z.cl,function(B,C){y.append('<div style="height:36px;word-wrap:break-word;overflow:hidden;">');if(C.un){y.append(C.un+"：")}y.append(C.c+"</div>")});u=z.cl.length;i=0}y.append("</div></div>");return y.toString()};var f=function(z,A){var y=new vancl.util.stringBuilder();y.append('<div align="center" class="jJ" style="position: relative;width:270px;margin:0 auto;">');y.append('<img id="'+j.popupimageid+'" src="'+z.mainpath+'" style="width:270px;height:270px;" />');y.append("</div>");y.append('<div class="sd">'+z.productname+"</div>");y.append('<p class="jJ01">产品编号：'+z.productcode+"</p>");y.append('<p class="jJ02"><strong>');if(typeof(z.point)!="undefined"){y.append("积分换购价：￥"+z.pointprice+"+"+z.points)}else{switch(z.SalesFlag){case"1":y.append("特惠价：￥");break;case"2":y.append("抢购价：￥");break;case"3":y.append("清仓价：￥");break;default:y.append("售价：￥")}y.append(z.realprice)}y.append("</strong></p>");y.append('<p class="jJ03">市场价：<del>￥'+z.vprice+"</del><span>");y.append("</span></p>");y.append('<p class="jJ04">用户综合评分：'+vancl.channel.getStar(z.colligation)+"共有 <strong>"+z.commentcount+"</strong> 条评论</p>");return y.toString()};var k=function(){if(j.delayhide){vancl.util.delayJobs.start(n,200,"hidepop")}else{n()}};var n=function(){$("#"+j.arrowiconid).hide();$("#"+j.elementcontainerid).hide()};return{init:function(y){j.constructHTML=j.defaultConstructHTML=e;$.extend(j,y);p()},load:function(y){b(y)},unload:function(y){d();l(y)}}})();