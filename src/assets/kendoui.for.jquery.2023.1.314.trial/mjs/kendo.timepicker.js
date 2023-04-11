/**
 * Kendo UI v2023.1.314 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.calendar.js";import"./kendo.popup.js";import"./kendo.dateinput.js";import"./kendo.html.button.js";import"./kendo.label.js";var __meta__={id:"timepicker",name:"TimePicker",category:"web",description:"The TimePicker widget allows the end user to select a value from a list of predefined values or to type a new value.",depends:["calendar","popup","html.button","label"]};!function(e,t){var i=window.kendo,n=i.keys,a=i.html,l=i.parseDate,s=i._activeElement,o=i._extractFormat,r=i.support,u=r.browser,c=i.ui,d=c.Widget,p="open",h="close",m="change",f=".kendoTimePicker",_="click"+f,g="disabled",v="readonly",b="li",k="k-focus",w="k-hover",y="mousedown"+f,x=6e4,T=864e5,M="k-selected",S="k-disabled",C="aria-selected",L="aria-expanded",D="aria-hidden",V="aria-disabled",H="aria-readonly",I="aria-activedescendant",P="id",R=Array.isArray,A=e.extend,F=Date,z=/d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|k{1,2}|K{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g,O="month",E="hour",q="zone",B="weekday",N="quarter",Y={G:"era",y:"year",q:N,Q:N,M:O,L:O,d:"day",E:B,c:B,e:B,h:E,H:E,k:E,K:E,m:"minute",s:"second",a:"dayperiod",x:q,X:q,z:q,Z:q},W={month:{type:"months",minLength:3,standAlone:"L"},quarter:{type:"quarters",minLength:3,standAlone:"q"},weekday:{type:"days",minLength:{E:0,c:3,e:3},standAlone:"c"},dayperiod:{type:"dayPeriods",minLength:0},era:{type:"eras",minLength:0}},j=new F,K=({mainSize:e,messages:t,buttonSize:n})=>`<div><div tabindex="0" class="k-timeselector ${e}"><div class="k-time-header"><span class="k-title"></span>`+i.html.renderButton(`<button class="k-time-now" title="Select now" aria-label="Select now">${t.now}</button>`,{fillMode:"flat",size:n})+'</div><div class="k-time-list-container"><span class="k-time-highlight"></span></div></div>'+$(n,t)+"</div>",$=(e,t)=>'<div class="k-time-footer k-actions k-actions-stretched k-actions-horizontal">'+i.html.renderButton(`<button class="k-time-accept" title="Set time" aria-label="Set time">${t.set}</button>`,{size:e,themeColor:"primary"})+i.html.renderButton(`<button class="k-time-cancel" title="Cancel changes" aria-label="Cancel changes">${t.cancel}</button>`,{size:e})+"</div>";j=new Date(j.getFullYear(),j.getMonth(),j.getDate(),0,0,0);var G=function(e){var t=this,i=e.id;t.options=e,t._dates=[],t._createList(e.timeView&&"scroll"===e.timeView.list),i&&(t._timeViewID=i+"_timeview",t._optionID=i+"_option_selected",t.ul.attr(P,t._timeViewID)),t._heightHandler=t._height.bind(t),t._popup()};function Q(e){return 60*e.getHours()*x+e.getMinutes()*x+1e3*e.getSeconds()+e.getMilliseconds()}function U(e,t,i){var n,a=Q(t),l=Q(i);return!e||a==l||(a>(n=Q(e))&&(n+=T),l<a&&(l+=T),n>=a&&n<=l)}G.prototype={_createList:function(e){e?this._createScrollList():this._createClassicRenderingList()},_createScrollList:function(){var t=e.extend({},this.options,{mainSize:i.getValidCssClass("k-timeselector-","size",this.options.size||"medium"),buttonSize:this.options.size||"medium"});this.popupContent=e(i.template(K)(t)).on(y,J),this.list=this.popupContent.find(".k-timeselector"),this.ul=this.list.find(".k-time-list-container"),this.popupContent.on("click"+f,".k-time-header button.k-time-now",this._nowClickHandler.bind(this)),this.popupContent.on("click"+f,".k-time-footer button.k-time-cancel",this._cancelClickHandler.bind(this)),this.popupContent.on("click"+f,".k-time-footer button.k-time-accept",this._setClickHandler.bind(this)),this.list.on("mouseover"+f,".k-time-list-wrapper",this._mouseOverHandler.bind(this)),this.list.on("keydown"+f,this._scrollerKeyDownHandler.bind(this))},_scrollerKeyDownHandler:function(t){var a=this,l=t.keyCode,s=e(t.currentTarget).find(".k-time-list-wrapper.k-focus"),o=a.list.find(".k-time-list-wrapper"),r=o.length,u=o.index(s),c=i.support.isRtl(a.wrapper),d=oe(s.find(".k-item:visible").eq(0)),p=s.find(".k-time-container.k-content.k-scrollable");s.length&&(l==n.RIGHT&&!c||l==n.LEFT&&c?u+1<r&&a._focusList(o.eq(u+1)):l==n.LEFT&&!c||l==n.RIGHT&&c?u-1>=0&&a._focusList(o.eq(u-1)):l==n.UP?(p.scrollTop(p.scrollTop()-d),t.preventDefault()):l==n.DOWN?(p.scrollTop(p.scrollTop()+d),t.preventDefault()):l===n.ENTER?a._setClickHandler(t):l===n.ESC&&a._cancelClickHandler(t))},_mouseOverHandler:function(t){this._focusList(e(t.currentTarget))},_focusList:function(e){this.list.find(".k-time-list-wrapper").removeClass(k),e.addClass(k),this.list.trigger("focus"),this._scrollTop=e.find(".k-scrollable").scrollTop()},_createClassicRenderingList:function(){var t=this,n=e('<div class="k-list '+i.getValidCssClass("k-list-","size",t.options.size)+'"><ul tabindex="-1" role="listbox" aria-hidden="true" unselectable="on" class="k-list-ul"/></div>');t.ul=n.find("ul").css({overflow:r.kineticScrollNeeded?"":"auto"}).on(_,b,t._click.bind(t)).on("mouseenter"+f,b,(function(){e(this).addClass(w)})).on("mouseleave"+f,b,(function(){e(this).removeClass(w)})),t.list=e("<div class='k-list-container k-list-scroller' unselectable='on'/>").append(n).on(y,J),t.template=e=>`<li tabindex="-1" role="option" class="k-list-item" unselectable="on"><span class="k-list-item-text">${e}</span></li>`},current:function(i){var n=this,a=n.options.active;if(i===t)return n._current;n._current&&(n._current.removeClass(M),n._current&&n._current.length&&(n._current[0].removeAttribute(P),n._current[0].removeAttribute(C))),i&&(i=e(i).addClass(M).attr(P,n._optionID).attr(C,!0),n.scroll(i[0])),n._current=i,a&&a(i)},_updateTitle:function(){this.list.find(".k-time-header > .k-title").html(i.toString(this._value,this.options.format,this.options.culture))},applyValue:function(e){if(e){var t,n=le(this.options.format.toLowerCase(),"t"),a=e.getHours(),l=e.getMinutes(),s=e.getSeconds(),o=i.attr("index"),r=this.ul.find("["+o+'="1"]'),u=this.ul.find("["+o+'="2"]'),c=this.ul.find("["+o+'="3"]'),d=this.ul.find("["+o+'="4"]');n&&(a>=12?(t="PM",a>12&&(a-=12)):(t="AM",0===a&&(a=12))),this._internalScroll=!0,r.length&&this._scrollListToPosition(r,a),u.length&&this._scrollListToPosition(u,l),c.length&&this._scrollListToPosition(c,s),d.length&&this._scrollListToPosition(d,t),this._internalScroll=!1}},_scrollListToPosition:function(e,t){var i=e.find('.k-item[data-value="'+se(t)+'"]'),n=oe(i);e.scrollTop(e.find(".k-item:visible").index(i)*n)},close:function(){this.popup.close()},destroy:function(){var e=this;e.ul.off(f),e.list.off(f),e.popupContent&&e.popupContent.off(f),e.popup&&e.popup.destroy()},open:function(){var e,t=this;(!t.ul[0].firstChild||t.ul.find("li").length<1)&&t.bind(),e=t.popup._hovered,t.popup._hovered=!0,t.popup.open(),setTimeout((function(){t.popup._hovered=e}),1),t._current&&t.scroll(t._current[0])},dataBind:function(e){for(var t,n=this,a=n.options,l=a.format,s=i.toString,o=n.template,r=e.length,u=0,c="";u<r;u++)U(t=e[u],a.min,a.max)&&(c+=o(s(t,l,a.culture)));n._html(c)},refresh:function(){var e,t,n,a,l,s=this,o=s.options,r=o.format,u=(n=new F,a=new F(n.getFullYear(),n.getMonth(),n.getDate(),0,0,0),l=new F(n.getFullYear(),n.getMonth(),n.getDate(),12,0,0),-1*(a.getTimezoneOffset()-l.getTimezoneOffset())),c=u<0,d=i.parseDate(s._value),p=ee(d||new Date,o.min),h=o.min,m=o.max,f=Q(h),_=Q(m),g=Q((e=o.interval,(t=new Date(2100,0,1)).setMinutes(-e),t)),v=o.interval*x,b=i.toString,k=s.template,w=o.useValueToRender?p:new Date(+o.min),y=new F(w),M="";f==_&&g!==_||f>_&&(_+=T),o.timeView&&"scroll"===o.timeView.list?M=s._createListContent(function(e){var t,n,a,l,s,o,r=i.culture(),u=function(e,t){var i,n=t.calendar;"string"==typeof e&&(i=n.patterns[e]?n.patterns[e]:e);i||(i=n.patterns.d);return i}(e,r),c=[],d=z.lastIndex=0,p=z.exec(u);for(;p;){var h=p[0];d<p.index&&te(c,u.substring(d,p.index)),ae(h,'"')||ae(h,"'")?te(c,h):(t=h[0],a={type:n=Y[t],pattern:h},"hour"===n&&(a.hour12=ie(h)),(l=W[n])&&(s="number"==typeof l.minLength?l.minLength:l.minLength[t],(o=h.length)>=s&&(a.names={type:l.type,nameType:ne(o),standAlone:l.standAlone===t})),c.push(a)),d=z.lastIndex,p=z.exec(u)}d<u.length&&te(c,u.substring(d));return c}(r)):s.getDatesInRange(undefined,_,y,m,v,w).forEach((function(e){M+=k(b(e,r,o.culture))})),s._html(M)},_showAllHiddenItems:function(){for(var t,i=this.list.find(".k-time-container"),n=i.length,a=0;a<n;a++)(t=e(i[a])).find(".k-item:hidden").show(),this._updateListBottomOffset(t)},_updateListBottomOffset:function(e){var t=oe(e.find(".k-item:visible").eq(0)),i=e.outerHeight()-t;e.find(".k-scrollable-placeholder").css({height:e.find("ul").height()+i})},_updateHoursRange:function(){var t,n,a=this,l=i.attr("index"),s=this.ul.find("["+l+'="1"]'),o=this._minHours,r=this._maxHours,u=le(this.options.format.toLowerCase(),"t"),c=this._findSelectedValue(this.ul.find("["+l+'="4"]'));s.length&&(u&&c?("AM"===c?(o<12&&(n=!0),r<12&&(t=!0)):"PM"===c&&(o>12&&(n=!0,o-=12),r>12&&(t=!0,r-=12)),s.find(".k-item").each((function(i,l){var s=+(l=e(l)).attr("data-value");a._validateMin&&n&&s<o||a._validateMax&&t&&s>r?l.hide():l.show()}))):s.find(".k-item").each((function(t,i){var n=+(i=e(i)).attr("data-value");a._validateMin&&n<o||a._validateMax&&n>r?i.hide():i.show()})),this._updateListBottomOffset(s))},_updateMinutesRange:function(){var t=this,n=i.attr("index"),a=this.ul.find("["+n+'="2"]'),l=this._minHours,s=this._maxHours,o=this._minMinutes,r=this._maxMinutes,u=+this._findSelectedValue(this.ul.find("["+n+'="1"]')),c=le(this.options.format.toLowerCase(),"t"),d=this._findSelectedValue(this.ul.find("["+n+'="4"]'));c&&"PM"===d&&(u+=12),a.length&&(a.find(".k-item").each((function(i,n){var a=+(n=e(n)).attr("data-value");t._validateMin&&a<o&&l&&u===l||t._validateMax&&a>r&&s&&u===s?n.hide():n.show()})),this._updateListBottomOffset(a))},_updateSecondsRange:function(){var t=this,n=i.attr("index"),a=this.ul.find("["+n+'="3"]'),l=this._minSeconds,s=this._minSeconds,o=this._minMinutes,r=this._maxMinutes,u=+this._findSelectedValue(this.ul.find("["+n+'="2"]'));a.length&&(a.find(".k-item").each((function(i,n){var a=+(n=e(n)).attr("data-value");t._validateMin&&a<l&&o&&u===o||t._validateMax&&a>s&&r&&u===r?n.hide():n.show()})),this._updateListBottomOffset(a))},_updateDesignatorRange:function(){var e=this._minHours,t=this._maxHours,n=i.attr("index"),a=this.ul.find("["+n+'="4"]');a.length&&(this._validateMin&&e>=12?a.find('.k-item[data-value="AM"]').hide():a.find('.k-item[data-value="AM"]').show(),this._validateMax&&t<12?a.find('.k-item[data-value="PM"]').hide():a.find('.k-item[data-value="PM"]').show())},_updateRanges:function(){if(this.options.specifiedRange){this._currentlySelected||(this._currentlySelected=new Date);var e=this.options.max,t=this.options.min;if(this.options.validateDate){if(e.getFullYear()===this._currentlySelected.getFullYear()&&e.getMonth()===this._currentlySelected.getMonth()&&e.getDate()===this._currentlySelected.getDate()?this._validateMax=!0:this._validateMax=!1,t.getFullYear()===this._currentlySelected.getFullYear()&&t.getMonth()===this._currentlySelected.getMonth()&&t.getDate()===this._currentlySelected.getDate()?this._validateMin=!0:this._validateMin=!1,!this._validateMax&&!this._validateMin)return void this._showAllHiddenItems()}else this._validateMax=!0,this._validateMin=!0;this._minMinutes=t.getMinutes(),this._maxMinutes=e.getMinutes(),this._minHours=t.getHours(),this._maxHours=e.getHours(),this._minSeconds=t.getSeconds(),this._maxSeconds=e.getSeconds(),this._updateDesignatorRange(),this._updateHoursRange(),this._updateMinutesRange(),this._updateSecondsRange()}},addTranslate:function(){for(var e,t,i,n,a,l=this.ul.find(".k-time-container.k-content.k-scrollable"),s=l.length,o=0;o<s;o++)t=oe((e=l.eq(o)).find(".k-item:visible").eq(0)),n="translateY("+((i=e.outerHeight())-t)/2+"px)",a=i-t,e.find("ul").css({transform:n,"-ms-transform":n}),e.find(".k-scrollable-placeholder").css({height:e.find("ul").height()+a}),e.off(f).on("click"+f,".k-item",this._itemClickHandler.bind(this)).on("scroll"+f,this._listScrollHandler.bind(this))},_nowClickHandler:function(e){e.preventDefault();var t=new Date;this.value(t),this.options.change(i.toString(t,this.options.format,this.options.culture),!0)},_cancelClickHandler:function(e){e.preventDefault(),this.value(this._value),this.popup.close()},_setClickHandler:function(e){e.preventDefault(),this._value=new Date(this._currentlySelected),this.options.change(i.toString(this._currentlySelected,this.options.format,this.options.culture),!0),this.popup.close()},_listScrollHandler:function(t){var i=this,n=oe(e(t.currentTarget).find(".k-item:visible").eq(0));i._internalScroll||(i._scrollingTimeout&&clearTimeout(i._scrollingTimeout),i._scrollingTimeout=setTimeout((function(){t.currentTarget.scrollTop%n>1&&(t.currentTarget.scrollTop+=n-t.currentTarget.scrollTop%n),i._scrollTop=t.currentTarget.scrollTop,i._updateCurrentlySelected(),i._updateRanges()}),100))},_updateCurrentlySelected:function(){var e,n,a,l,s=le(this.options.format.toLowerCase(),"t"),o=i.attr("index"),r=this.ul.find("["+o+'="1"]'),u=this.ul.find("["+o+'="2"]'),c=this.ul.find("["+o+'="3"]'),d=this.ul.find("["+o+'="4"]');this.ul.is(":visible")&&(this._currentlySelected||(this._currentlySelected=this._value?new Date(this._value):new Date),r.length&&(e=+this._findSelectedValue(r)),u.length&&(n=+this._findSelectedValue(u)),c.length&&(a=+this._findSelectedValue(c)),d.length&&(l=this._findSelectedValue(d)),s&&("PM"==l&&24==(e+=12)&&(e=12),"AM"===l&&12===e&&(e=0)),e!==t&&this._currentlySelected.setHours(e),n!==t&&this._currentlySelected.setMinutes(n),a!==t&&this._currentlySelected.setSeconds(a))},_findSelectedValue:function(e){var t,i,n=(t=e.scrollTop(),i=oe(e.find(".k-item:visible").eq(0)),Math.max(Math.round(t/i),0));return e.find(".k-item:visible").eq(n).attr("data-value")},_itemClickHandler:function(t){var i=e(t.originalEvent.currentTarget),n=i.find(".k-item:visible").index(e(t.currentTarget)),a=oe(i.find(".k-item:visible").eq(0));i.scrollTop(n*a)},getDatesInRange:function(e,t,i,n,a,l){for(var s=[];;){if(t&&(Q(l)>=t||i.getDate()!=l.getDate())){e=Q(l),i<l&&(e+=T),e>t&&(l=new F(+n)),Q(l)>0&&s.push(new Date(l));break}if(i.getDate()!=l.getDate())break;if(s.push(new Date(l)),l.setTime(l.getTime()+a),!t&&this.options.maxSet)break}return s},_createListContent:function(e){for(var t,i,n=e.length,a="",l=0;l<n;l++)"literal"===(t=e[l]).type?a+=this._literalTemplate(t):(i=this._getValues(t,!0),a+=this._itemTemplate(i.values,t,this.options.messages[t.type],i.index));return a},_itemTemplate:function(e,t,n,a){var l="",s=e.length,o=i.attr("index");l+='<div class="k-time-list-wrapper" role="presentation"><span class="k-title">'+(n||t.type)+'</span><div class="k-time-list"><div class="k-time-container k-content k-scrollable" role="presentation" '+o+'="'+a+'"><ul class="k-reset">';for(var r=0;r<s;r++)l+='<li class="k-item" data-value="'+e[r]+'"><span>'+e[r]+"</span></li>";return l+='</ul><div class="k-scrollable-placeholder"></div></div></div></div>'},_getValues:function(e,t){var i,n,a=[],l=0;for("hour"===e.type?(l=e.hour12?1:0,i=1,n=e.hour12?12:23):"minute"===e.type?(i=2,n=59):"second"===e.type&&(i=3,n=59);l<=n;l++)a.push(t?se(l):l);return{values:a,index:i}},_literalTemplate:function(e){var t='<div class="k-time-separator">'+(" tt"===e.pattern?":":e.pattern)+"</div>";return" tt"===e.pattern&&(t+=this._itemTemplate(["AM","PM"],e,"AM/PM",4)),t},bind:function(){var e=this,t=e.options.dates;t&&t[0]?e.dataBind(t):e.refresh()},_html:function(e){var t=this;t.options.timeView&&"scroll"===t.options.timeView.list?(e='<span class="k-time-highlight"></span>'+e,t.ul.html(e)):(t.ul[0].innerHTML=e,t.popup.unbind(p,t._heightHandler),t.popup.one(p,t._heightHandler),t.current(null),t.select(t._value))},scroll:function(e){e&&(e.scrollIntoViewIfNeeded?e.scrollIntoViewIfNeeded():function(e,t){function i(e,t){return{start:e,length:t,end:e+t}}function n(e,i){return!1===t||i.start<e.end&&e.start<i.end?Math.min(e.start,Math.max(i.start,e.end-i.length)):(e.start+e.end-i.length)/2}function a(e,t){return{x:e,y:t,translate:function(i,n){return a(e+i,t+n)}}}function l(e,t){for(;e;)t=t.translate(e.offsetLeft,e.offsetTop),e=e.offsetParent;return t}var s,o=l(e,a(0,0)),r=a(e.offsetWidth,e.offsetHeight),u=e.parentNode;for(;u instanceof HTMLElement;)s=l(u,a(u.clientLeft,u.clientTop)),u.scrollLeft=n(i(o.x-s.x,r.x),i(u.scrollLeft,u.clientWidth)),u.scrollTop=n(i(o.y-s.y,r.y),i(u.scrollTop,u.clientHeight)),o=o.translate(-u.scrollLeft,-u.scrollTop),u=u.parentNode}(e))},select:function(t){var n,a=this,l=a.options,s=a._current;t instanceof Date&&(t=i.toString(t,l.format,l.culture)),"string"==typeof t&&(t=s&&s.text()===t?s:(t=e.grep(a.ul[0].childNodes,(function(e){return(e.textContent||e.innerText)==t})))[0]?t:null),n=a._distinctSelection(t),a.current(n)},_distinctSelection:function(t){var i,n,a=this;return t&&t.length>1&&(i=Q(a._value),n=e.inArray(i,a._dates),t=a.ul.children()[n]),t},setOptions:function(e){var t=this.options;e.min=l(e.min),e.max=l(e.max),this.options=A(t,e,{active:t.active,change:t.change,close:t.close,open:t.open}),this.bind()},toggle:function(){var e=this;e.popup.visible()?e.close():e.open()},value:function(e){var t=this;t._value=e,t.ul[0].firstChild&&(t.options.timeView&&"scroll"===t.options.timeView.list?t.applyValue(e):t.select(e))},_click:function(t){var i=this,n=e(t.currentTarget),a=n.text(),l=i.options.dates;l&&l.length>0&&(a=l[n.index()]),t.isDefaultPrevented()||(i.select(n),i.options.change(a,!0),i.close())},_height:function(){var e=this,t=e.list,i=t.closest(".k-child-animation-container"),n=t.closest(".k-animation-container"),a=e.options.height,l=t.add(n),s=e.ul[0];s.children.length&&(l.add(i).show(),t.add(i).height(s.scrollHeight>a?a:"auto"),l.hide())},_parse:function(e){var t=this.options,i=Q(t.min)!=Q(j)?t.min:null,n=Q(t.max)!=Q(j)?t.max:null,a=this._value||i||n||j;return e instanceof F||(e=l(e,t.parseFormats,t.culture))&&(e=new F(a.getFullYear(),a.getMonth(),a.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())),e},_adjustListWidth:function(){var e,t,n=this.list,a=n[0].style.width,l=this.options.anchor,s=i._outerWidth;!n.data("width")&&a||(t=(e=window.getComputedStyle?window.getComputedStyle(l[0],null):0)?parseFloat(e.width):s(l),e&&(u.mozilla||u.msie)&&(t+=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth)),a=t-(s(n)-n.width()),n.css({fontFamily:l.css("font-family"),width:a}).data("width",a))},_popup:function(){var e=this,t=e.list,i=e.options,n=i.anchor;this.options.omitPopup?t.appendTo(i.timeDiv):e.popup=new c.Popup(e.popupContent||t,A(i.popup,{anchor:n,open:i.open,close:i.close,animation:i.animation,isRtl:r.isRtl(i.anchor),activate:function(){e.options.timeView&&"scroll"===e.options.timeView.list&&(e.addTranslate(),e._value?e.applyValue(e._value):e._updateCurrentlySelected(),e._updateRanges(),e._focusList(e.list.find(".k-time-list-wrapper").eq(0)))}}))},move:function(e){var t=this,i=e.keyCode,a=t.ul[0],l=t._current,s=i===n.DOWN;if(i===n.UP||s){if(e.altKey)return void t.toggle(s);(l=s?l?l[0].nextSibling:a.firstChild:l?l[0].previousSibling:a.lastChild)&&t.select(l),t.options.change(t._current.text()),e.preventDefault()}else i!==n.ENTER&&i!==n.TAB&&i!==n.ESC||(e.preventDefault(),l&&t.options.change(l.text(),!0),t.close())}},G.getMilliseconds=Q,i.TimeView=G;var X=d.extend({init:function(t,n){var a,s,o=this;(n=n||{}).componentType=n.componentType||"classic",d.fn.init.call(o,t,n),t=o.element,(n=o.options).min=l(t.attr("min"))||l(n.min),n.max=l(t.attr("max"))||l(n.max),+n.max==+j&&+n.min==+j||(this._specifiedRange=!0),Z(n),o._initialOptions=A({},n),o._wrapper(),o.options.timeView&&"scroll"===o.options.timeView.list&&(o.options.height=null),o.timeView=s=new G(A({},n,{id:t.attr(P),anchor:o.wrapper,format:n.format,change:function(e,i){i?o._change(e):t.val(e)},open:function(e){o.options.timeView&&"scroll"!==o.options.timeView.list?o.timeView._adjustListWidth():o.timeView._updateTitle(),o.trigger(p)?e.preventDefault():(t.attr(L,!0),a.attr(D,!1),s.current()&&t.attr(I,s._optionID))},close:function(e){o.trigger(h)?e.preventDefault():(t.attr(L,!1),a.attr(D,!0),t[0].removeAttribute(I))},active:function(e){t&&t.length&&t[0].removeAttribute(I),e&&t.attr(I,s._optionID)},specifiedRange:o._specifiedRange,maxSet:+n.max!=+j})),a=s.ul,o._ariaLabel(a),o._icon(),o._reset();try{t[0].setAttribute("type","text")}catch(e){t[0].type="text"}if(t.addClass("k-input-inner").attr({role:"combobox","aria-expanded":!1,"aria-controls":s._timeViewID,autocomplete:"off"}),t.is("[disabled]")||e(o.element).parents("fieldset").is(":disabled")?o.enable(!1):o.readonly(t.is("[readonly]")),n.dateInput){var r=n.min,u=n.max,m=new F;Q(r)==Q(u)&&(r=new F(m.getFullYear(),m.getMonth(),m.getDate(),0,0,0),u=new F(m.getFullYear(),m.getMonth(),m.getDate(),24,0,0)),o._dateInput=new c.DateInput(t,{culture:n.culture,format:n.format,min:r,max:u,value:n.value,interval:n.interval,size:n.size,fillMode:n.fillMode,rounded:n.rounded})}o._old=o._update(n.value||o.element.val()),o._oldText=t.val(),o._applyCssClasses(),n.label&&o._label(),i.notify(o)},options:{name:"TimePicker",min:j,max:j,format:"",dates:[],parseFormats:[],value:null,interval:30,height:200,animation:{},dateInput:!1,messages:{set:"Set",cancel:"Cancel",hour:"hour",minute:"minute",second:"second",millisecond:"millisecond",now:"Now"},componentType:"classic",size:"medium",fillMode:"solid",rounded:"medium",label:null},events:[p,h,m],componentTypes:{classic:{timeView:{list:"list"}},modern:{timeView:{list:"scroll"}}},setOptions:function(e){var t=this,n=t._value;d.fn.setOptions.call(t,e),+(e=t.options).max==+j&&+e.min==+j||(this._specifiedRange=!0),t._arrow.off(f),t._arrow.remove(),Z(e),t.timeView.setOptions(e),t._icon(),t._editable(e),n&&t.element.val(i.toString(n,e.format,e.culture)),e.label&&t._inputLabel?t.label.setOptions(e.label):!1===e.label?(t.label._unwrapFloating(),t._inputLabel.remove(),delete t._inputLabel):e.label&&t._label()},dataBind:function(e){R(e)&&this.timeView.dataBind(e)},_editable:function(e){var t=this,i=e.disable,n=e.readonly,a=t._arrow.off(f),l=t.element.off(f),s=t.wrapper.off(f);t._dateInput&&t._dateInput._unbindInput(),n||i?(s.addClass(i?S:"").removeClass(i?"":S),l.attr(g,i).attr(v,n).attr(V,i).attr(H,n)):(s.removeClass(S).on("mouseenter.kendoTimePicker mouseleave.kendoTimePicker",t._toggleHover),l&&l.length&&(l[0].removeAttribute(g),l[0].removeAttribute(v)),l.attr(V,!1).attr(H,!1).on("keydown"+f,t._keydown.bind(t)).on("focusout"+f,t._blur.bind(t)).on("focus"+f,(function(){t.wrapper.addClass(k)})),t._dateInput&&t._dateInput._bindInput(),a.on(_,t._click.bind(t)).on(y,J))},_label:function(){var t=this,n=t.options,a=e.isPlainObject(n.label)?n.label:{content:n.label};t._dateInput&&(a.floatCheck=()=>(t._dateInput._toggleDateMask(!0),!t.value()&&!t._dateInput._hasDateInput()&&document.activeElement!==t.element[0]&&(t._dateInput._toggleDateMask(!1),!0))),t.label=new i.ui.Label(null,e.extend({},a,{widget:t})),t._inputLabel=t.label.element},readonly:function(e){this._editable({readonly:e===t||e,disable:!1}),this.label&&this.label.floatingLabel&&this.label.floatingLabel.readonly(e===t||e)},enable:function(e){this._editable({readonly:!1,disable:!(e=e===t||e)}),this.label&&this.label.floatingLabel&&this.label.floatingLabel.enable(e=e===t||e)},destroy:function(){var e=this;d.fn.destroy.call(e),e.timeView.destroy(),e.element.off(f),e._arrow.off(f),e.wrapper.off(f),e._form&&e._form.off("reset",e._resetHandler),e.label&&e.label.destroy()},close:function(){this.timeView.close()},open:function(){this.timeView.open()},min:function(e){return e&&(this._specifiedRange=!0),this._option("min",e)},max:function(e){return e&&this.timeView?(this._specifiedRange=!0,this.timeView.options.maxSet=!0):this.timeView&&(this.timeView.options.maxSet=!1),this._option("max",e)},value:function(e){var i=this;if(e===t)return i._value;i._old=i._update(e),null===i._old&&i.element.val(""),i._oldText=i.element.val(),i.label&&i.label.floatingLabel&&i.label.floatingLabel.refresh()},_blur:function(){var e=this,t=e.element.val();e.options.timeView&&"scroll"===e.options.timeView.list||e.close(),t!==e._oldText&&e._change(t),e.wrapper.removeClass(k)},_click:function(){var e=this.element;this.timeView.toggle(),r.touch||e[0]===s()||e.trigger("focus")},_change:function(e){var t,n=this,a=n.element.val();e=n._update(e);var l=(t=!i.calendar.isEqualDate(n._old,e))&&!n._typing,s=a!==n.element.val();(l||s)&&n.element.trigger(m),t&&(n._old=e,n._oldText=n.element.val(),n.trigger(m)),n._typing=!1},_icon:function(){var t,i=this,n=i.element,l=i.options;(t=n.next("button.k-input-button"))[0]||(t=e(a.renderButton('<button unselectable="on" tabindex="-1" class="k-input-button" aria-label="select"></button>',{icon:"clock",size:l.size,fillMode:l.fillMode,shape:"none",rounded:"none"})).insertAfter(n)),i._arrow=t.attr({role:"button"})},_keydown:function(e){var t=this,i=e.keyCode,a=t.timeView,l=t.element.val();a.popup.visible()||e.altKey?(a.move(e),t._dateInput&&e.stopImmediatePropagation&&e.stopImmediatePropagation()):i===n.ENTER&&l!==t._oldText?t._change(l):t._typing=!0},_option:function(e,i){var n=this,a=n.options;if(i===t)return a[e];(i=n.timeView._parse(i))&&(i=new F(+i),a[e]=i,n.timeView.options[e]=i,n.timeView.bind())},_toggleHover:function(t){e(t.currentTarget).toggleClass(w,"mouseenter"===t.type)},_update:function(e){var t=this,n=t.options,a=t.timeView,l=a._parse(e);return U(l,n.min,n.max)||(l=null),t._value=l,t._currentlySelected=l,t._dateInput&&l?t._dateInput.value(l||e):t.element.val(i.toString(l||e,n.format,n.culture)),a.value(l),l},_wrapper:function(){var e,t=this.element;(e=t.parents(".k-timepicker"))[0]||(e=t.wrap("<span></span>").parent()),e[0].style.cssText=t[0].style.cssText,this.wrapper=e.addClass("k-timepicker k-input").addClass(t[0].className),t.css({height:t[0].style.height})},_reset:function(){var t=this,i=t.element,n=i.attr("form"),a=n?e("#"+n):i.closest("form");a[0]&&(t._resetHandler=function(){t.value(i[0].defaultValue),t.max(t._initialOptions.max),t.min(t._initialOptions.min)},t._form=a.on("reset",t._resetHandler))}});function Z(e){var t=e.parseFormats;e.format=o(e.format||i.getCulture(e.culture).calendars.standard.patterns.t),(t=R(t)?t:[t]).splice(0,0,e.format),e.parseFormats=t}function J(e){e.preventDefault()}function ee(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function te(e,t){var i=e[e.length-1];i&&"LITERAL"===i.type?i.pattern+=t:e.push({type:"literal",pattern:t})}function ie(e){return"h"===e||"K"===e}function ne(e){var t;return e<=3?t="abbreviated":4===e?t="wide":5===e?t="narrow":6===e&&(t="short"),t}function ae(e,t,i){return i=i||0,e.indexOf(t,i)===i}function le(e,t){var i=!1;return-1!==e.indexOf(t)&&(i=!0),i}function se(e,t){for(var i=String(e);i.length<(t||2);)i="0"+i;return i}function oe(e){return e.length&&e[0].getBoundingClientRect().height}i.cssProperties.registerPrefix("TimePicker","k-input-"),i.cssProperties.registerValues("TimePicker",[{prop:"rounded",values:i.cssProperties.roundedValues.concat([["full","full"]])}]),c.plugin(X)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.timepicker.js.map
