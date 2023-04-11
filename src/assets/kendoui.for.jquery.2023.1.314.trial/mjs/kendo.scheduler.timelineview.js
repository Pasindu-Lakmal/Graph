/**
 * Kendo UI v2023.1.314 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.scheduler.view.js";import"./kendo.icons.js";var __meta__={id:"scheduler.timelineview",name:"Scheduler Timeline View",category:"web",description:"The Scheduler Timeline View",depends:["scheduler.view","icons"],hidden:!0};!function(t,e){var i=window.kendo,n=i.ui,r=i.date.setTime,o=n.SchedulerView,a=i._outerWidth,s=i._outerHeight,l=t.extend,d=i.htmlEncode,u=i.date.getDate,c=i.date.getMilliseconds,h=i.date.MS_PER_DAY,f=i.date.MS_PER_MINUTE,_="k-event-inverse",v=.8666,p=".kendoTimelineView",g=i.template((({title:t,start:e,end:n})=>`<div><div class="k-event-template k-event-time">${d(i.format("{0:t} - {1:t}",e,n))}</div><div class="k-event-template">${t}</div></div>`)),m=i.template((({date:t})=>`<span class='k-link k-nav-day'>${i.format("{0:m}",t)}</span>`)),w=t=>`<div role="button" aria-label="${d(t.ariaLabel)}" data-${t.ns}uid="${t.uid}" `+(t.resources[0]?`style="background-color:${t.resources[0].color}; border-color: ${t.resources[0].color}" class="k-event">`:'class="k-event">')+'<span class="k-event-actions">'+`${t.tail?i.ui.icon("caret-alt-left"):""}`+`${t.isException()?i.ui.icon("arrows-no-repeat"):t.isRecurring()?i.ui.icon("arrow-rotate-cw"):""}</span>`+`${i.template(t.template)(t)}<span class="k-event-actions">`+(t.showDelete?`<a href="#" class="k-link k-event-delete" title="${t.messages.destroy}" aria-label="${t.messages.destroy}">${i.ui.icon("x")}</a>`:"")+`${t.head?i.ui.icon("caret-alt-right"):""}</span>`+(t.resizable&&!t.tail?'<span class="k-resize-handle k-resize-w"></span>':"")+(t.resizable&&!t.head?'<span class="k-resize-handle k-resize-e"></span>':"")+"</div>";function T(t){var e=new Date(1980,1,1,0,0,0);return r(e,c(t)),e}function D(t){var e=0;if(t.columns){for(var i=0;i<t.columns.length;i++)e+=D(t.columns[i]);return t.colspan=e,e}return t.colspan=1,1}var y=i.Class.extend({init:function(t){this._view=t},_getTimeSlotByPosition:function(t,e,i){return this._view.groups[i].timeSlotByPosition(t,e)},_hideHeaders:function(){var t=this._view;t.timesHeader.find("table tr").last().hide(),t.datesHeader.find("table tr").last().hide()},_setColspan:function(t){D(t)},_createRowsLayout:function(t,e,i){return this._view._createRowsLayout(t,e,i)},_createVerticalColumnsLayout:function(t,e,i,n){return n},_createColumnsLayout:function(t,e,i){return this._view._createColumnsLayout(t,e,i)},_getRowCount:function(){return this._view._groupCount()},_getGroupsCount:function(){return 1},_addContent:function(t,e,n,r,o,a,s,l){for(var d=this._view,u="",c=d.options,h=function(e){var n,r,o="",a="";return i.date.isToday(t[v])&&(a+="k-today"),(i.date.getMilliseconds(e)<i.date.getMilliseconds(c.workDayStart)||i.date.getMilliseconds(e)>=i.date.getMilliseconds(c.workDayEnd)||!d._isWorkDay(t[v]))&&(a+=" k-nonwork-hour"),o+="<td"+(""!==a?' class="'+a+'"':"")+">",n=i.date.getDate(t[v]),i.date.setTime(n,i.date.getMilliseconds(e)),o+=s({date:n,resources:(r=l?f:_,function(){return d._resourceBySlot({groupIndex:r})})}),o+="</td>"},f=0;f<r;f++){u+="<tr>";for(var _=0;_<n;_++)for(var v=0,p=e;v<p;v++)u+=d._forTimeRange(o,a,h);u+="</tr>"}return u},_addTimeSlotsCollections:function(t,e,i,n,r){var o=this._view,a=i.length;r&&(a=Math.floor(a/t));for(var s=0;s<t;s++){var l,d=0,u=o.groups[s];r&&(d=s);var h=0;r||(h=s);for(var f=i[d*a].children,_=f.length/(r?1:t),v=_/e,p=0;p<e;p++){var g=p*v+_*h;l=c(new Date(+o.startTime()));for(var m=0;m<v;m++)o._addTimeSlotToCollection(u,f,m,g,p,l,n),l+=n}}},_getVerticalGroupCount:function(t){return t},_getVerticalRowCount:function(t,e,i){return this._view._isVerticallyGrouped()?t[e].maxRowCount:i},_renderEvent:function(t,e,i,n,r,o){var a,s=this._view;(a=s._createEventElement(i.occurrence,e,r.head||i.head,r.tail||i.tail)).appendTo(o).css({top:0,height:s.options.eventHeight});var l={start:i.occurrence._startTime||i.occurrence.start,end:i.occurrence._endTime||i.occurrence.end,element:a,uid:e.uid,slotRange:r,rowIndex:0,offsetTop:0};t.events[e.uid]=l,s._inverseEventColor(a),s.addContinuousEvent(n,r,a,e.isAllDay),s._arrangeRows(l,r,t)},_verticalCountForLevel:function(t){return this._view._rowCountForLevel(t)},_horizontalCountForLevel:function(t){return this._view._columnCountForLevel(t)},_updateCurrentVerticalTimeMarker:function(e,i){var n=this._view,r="<div class='k-current-time'></div>",o=n.datesHeader.find(".k-scheduler-header-wrap"),s=Math.round(e[0].innerRect(i,new Date(i.getTime()+1),!1).left),l=t(r).prependTo(o).addClass("k-current-time-arrow-down");l.css({left:n._adjustLeftPosition(s-a(l)*v/2),top:o.find("tr").last().prev().position().top}),t(r).prependTo(n.content).css({left:n._adjustLeftPosition(s),width:"1px",height:n.content[0].scrollHeight-1,top:0})},_changeGroup:function(){return e},_prevGroupSlot:function(t,e,i){return this._view._isVerticallyGrouped()?t:e._collection(0,i).last()},_nextGroupSlot:function(t,e,i){return this._view._isVerticallyGrouped()?t:e._collection(0,i).first()},_verticalSlots:function(t,e){return this._view._changeGroup(t,e)},_verticalMethod:function(t){return t?"leftSlot":"rightSlot"},_normalizeVerticalSelection:function(){return e},_horizontalSlots:function(t,e,i,n,r,o,a){var s=this._view,l={};return l.startSlot=e[i](n),l.endSlot=e[i](r),o||!s._isHorizontallyGrouped()||l.startSlot&&l.endSlot||(l.startSlot=l.endSlot=s._changeGroup(t,a)),l},_changeVerticalViewPeriod:function(){return!1},_changeHorizontalViewPeriod:function(t,e,i,n){var r=this._view;return!(t.startSlot&&t.endSlot||e||!r._changeViewPeriod(i,n,!1))},_updateDirection:function(t,e,i,n){this._view._updateDirection(t,e,i,n,!0)},_createMoveHint:function(t,e){var i=this._view,n=t.start,r=i._createEventElement(e.occurrence,e.occurrence,!1,!1);r.addClass("k-event-drag-hint");var o=t.innerRect(e.occurrence.start,e.occurrence.end,i.options.snap),a=o.right-o.left;a<0&&(a=0);var s={left:i._adjustLeftPosition(o.left),top:n.offsetTop,height:n.offsetHeight,width:a};r.css(s),e.occurrence.inverseColor&&r.addClass(_),i._appendMoveHint(r)},_adjustLeftPosition:function(t){var e=this._view;return e._isRtl&&(t-=e.content[0].scrollWidth-e.content[0].clientWidth),t}}),k=i.Class.extend({init:function(t){this._view=t},_getTimeSlotByPosition:function(t,e,i){return this._view.groups[i].timeSlotByPosition(t,e,!0)},_hideHeaders:function(){var t=this._view;t._isVerticallyGrouped()?t.times.find(".k-last").hide():(t.timesHeader.find("table tr").eq(2).hide(),t.datesHeader.find("table tr").eq(2).hide())},_setColspan:function(){},_createRowsLayout:function(t,e,i,n){return this._view._createDateLayout(n,null,!0)},_createVerticalColumnsLayout:function(t,e,i){return this._view._createColumnsLayout(t,null,i)},_createColumnsLayout:function(t,e,i,n){return this._view._createColumnsLayout(t,e,i,n,!0)},_getRowCount:function(t){return this._view._rowCountForLevel(t)},_getGroupsCount:function(){return this._view._groupCount()},_addContent:function(t,e,n,o,a,s,l,d){for(var u,c=this._view,h="",_=c.options,v=function(e,n,r,o,a,s){var d,h,f="",v="",p=c._isVerticallyGrouped()?u:T;return i.date.isToday(t[T])&&(v+="k-today"),(i.date.getMilliseconds(e)<i.date.getMilliseconds(_.workDayStart)||i.date.getMilliseconds(e)>=i.date.getMilliseconds(_.workDayEnd)||!c._isWorkDay(t[p]))&&(v+=" k-nonwork-hour"),f+="<td"+(""!==v?' class="'+v+'"':"")+">",d=i.date.getDate(t[T]),i.date.setTime(d,i.date.getMilliseconds(e)),f+=l({date:d,resources:(h=s,function(){return c._resourceBySlot({groupIndex:h})})}),f+="</td>"},p=new Date(a),g=c.options.minorTickCount,m=c.options.majorTick*f/g||1,w=0;w<o;w++){h+="<tr>",w%(o/c._dates.length)==0&&(u=w/(o/c._dates.length),p=new Date(c._dates[u]),i.date.setTime(p,i.date.getMilliseconds(a)));for(var T=0,D=e;T<D;T++)if(h+=c._forTimeRange(p,s,v,d,n),d){r(p,m,!1);break}h+="</tr>"}return h},_addTimeSlotsCollections:function(t,e,i,n,r){var o=this._view,a=i.length;r&&(a/=e);for(var s=0;s<e;s++){var l,d=0;r&&(d=s);var u,h=i[d*a].children,f=r?a:h.length/(e*t),_=h.length/e;l=c(new Date(+o.startTime()));for(var v=0;v<f;v++){r?(u=0,h=i[v+f*s].children):(u=s*_+t*v);for(var p=0;p<t;p++){var g=o.groups[p];o._addTimeSlotToCollection(g,h,p,u,s,l,n)}l+=n}}},_getVerticalGroupCount:function(){return this._view.content.find("tr").length},_getVerticalRowCount:function(t,e,i){return i},_renderEvent:function(t,e,i,n,r,o,a,s){for(var l,d=this._view,u=[],c=r.start.index;c<=r.end.index;c++){(l=d._createEventElement(i.occurrence,e,c!==s,c!==a)).appendTo(o).css({top:0,height:d.options.eventHeight});var h=n._timeSlotCollections[0]._slots[c],f=n.timeSlotRanges(h.start,h.end,!1)[0],_={start:c===a?i.occurrence._startTime||i.occurrence.start:h.start,end:c===s?i.occurrence._endTime||i.occurrence.end:h.end,element:l,uid:e.uid,slotRange:f,rowIndex:0,offsetTop:0};t.events[e.uid]=_,u.push(_),d.addContinuousEvent(n,f,l,e.isAllDay),d._arrangeRows(_,f,t)}t.events[e.uid]=u},_verticalCountForLevel:function(t){return this._view._columnCountForLevel(t)},_horizontalCountForLevel:function(t,e){var i=this._view;return i._columnCountForLevel(e)/i._columnCountForLevel(2)},_updateCurrentVerticalTimeMarker:function(e,i){var n=this._view,r=n.times.find("tr").first().find("th").first(),o=n.times.find("tr").first().find("th").last(),l="<div class='k-current-time'></div>",d=t(l).prependTo(n.times),u=Math.round(e[0].innerRect(i,new Date(i.getTime()+1),!1).top),c={};this._isRtl?(c.right=r.position().left+s(r)-s(o),d.addClass("k-current-time-arrow-left")):(c.left=o.position().left,d.addClass("k-current-time-arrow-right")),c.top=u-a(d)*v/2,d.css(c),t(l).prependTo(n.content).css({top:u,height:"1px",right:"1px",width:n.content[0].scrollWidth,left:0})},_changeGroup:function(t,e,i){var n=this._view;i||(t.groupIndex=e?n.groups.length-1:0)},_prevGroupSlot:function(t){return t},_nextGroupSlot:function(t){return t},_changeDate:function(t,e,i){var n,r,o=this._view.groups[t.groupIndex];if(e){if(n=o._getCollections(!1),(r=i.index-1)>=0)return n[0]._slots[r]}else if(n=o._getCollections(!1),r=i.index+1,n[0]&&n[0]._slots[r])return n[0]._slots[r]},_verticalSlots:function(t,e,i){return this._changeDate(t,e,i)},_verticalMethod:function(t,e){return e?t?"upSlot":"downSlot":t?"leftSlot":"rightSlot"},_normalizeVerticalSelection:function(t,i,n,r){var o=this._view;return r?e:o._normalizeVerticalSelection(t,i,n)},_horizontalSlots:function(t,e,i,n,r,o,a){var s=this._view,l=s._changeGroup(t,a),d={};return l?d.startSlot=d.endSlot=l:s._isVerticallyGrouped()||(d.startSlot=e[i](n),d.endSlot=e[i](r)),d},_changeVerticalViewPeriod:function(t,e,i,n){var r=this._view;return!(t.startSlot&&t.endSlot||e||!r._changeViewPeriod(i,n,r._isVerticallyGrouped()))},_changeHorizontalViewPeriod:function(t,e,i,n){var r=this._view;return!r._isVerticallyGrouped()&&!(t.startSlot&&t.endSlot||e||!r._changeViewPeriod(i,n,!1))},_updateDirection:function(t,e,i,n){var r=this._view;r._updateDirection(t,e,i,n,!r._isVerticallyGrouped())},_createMoveHint:function(t,e){for(var i=this._view,n=t.start,r=t.end,o=n.index;o<=r.index;o++){var a=t.collection._slots[o],s=i._createEventElement(e.occurrence,e.occurrence,!1,!1);s.addClass("k-event-drag-hint");var l={left:a.offsetLeft+2,top:a.offsetTop,height:i.options.eventHeight,width:a.offsetWidth};s.css(l),e.occurrence.inverseColor&&s.addClass(_),i._appendMoveHint(s)}},_adjustLeftPosition:function(t){var e=this._view;return e._isRtl&&!e._isVerticallyGrouped()&&(t-=e.content[0].scrollWidth-e.content[0].offsetWidth),t}});i.ui.scheduler.TimelineGroupedView=y,i.ui.scheduler.TimelineGroupedByDateView=k;var S=o.extend({init:function(t,e){var i=this;o.fn.init.call(i,t,e),i._groupedView=i._getGroupedView(),i.title=i.options.title||i.options.name,i._workDays=function(t){if(t.workDays&&t.workDays.length)return t.workDays;var e=[],i=t.workWeekStart%7,n=Math.abs(t.workWeekEnd%7);for(e.push(i);n!=i;)i>6?i-=7:i++,e.push(i);return e}(i.options),i._templates(),i._editable(),i.calculateDateRange(),i._groups(),i._currentTime(!0)},name:"timeline",_isVirtualized:function(){return!1},_getGroupedView:function(){return this._isGroupedByDate()?new i.ui.scheduler.TimelineGroupedByDateView(this):new i.ui.scheduler.TimelineGroupedView(this)},_getNextEventIndexBySlot:function(t,e,n){if(this._isVerticallyGrouped())return i.ui.SchedulerView.fn._getNextEventIndexBySlot.call(this,t,e,n);for(var r=0,o=0;o<e.length;o++)if(t.startDate()>e[o].start.startDate())r++;else{if(!(t.startDate().getTime()===e[o].start.startDate().getTime()&&n>e[o].start.groupIndex))break;r++}return r},_getSelectedSlot:function(t,e,n,r,o,a){return this._isVerticallyGrouped()?i.ui.SchedulerView.fn._getSelectedSlot.call(this,t,e,n,r,o,a):t},_getSortedEvents:function(e){return this._isVerticallyGrouped()?i.ui.SchedulerView.fn._getSortedEvents.call(this,e):e.sort((function(e,i){var n=e.start.startDate().getTime()-i.start.startDate().getTime();return 0===n&&(e.start.isDaySlot&&!i.start.isDaySlot&&(n=-1),!e.start.isDaySlot&&i.start.isDaySlot&&(n=1)),0===n&&(n=e.start.groupIndex-i.start.groupIndex),0===n&&(n=t(e.element).index()-t(i.element).index()),n}))},_currentTimeMarkerUpdater:function(){this._updateCurrentTimeMarker(new Date)},_scrollTo:function(t,e){o.fn._scrollTo.call(this,t,e);var i=t.offsetLeft,n=t.offsetWidth,r=e.scrollLeft,a=e.clientWidth,s=i+n,l=0;l=r>i?i:s>r+a?n<=a?s-a:i:r,e.scrollLeft=l},_updateCurrentTimeMarker:function(e){var n=this.options;if(this.datesHeader.find(".k-current-time").remove(),this.times.find(".k-current-time").remove(),this.content.find(".k-current-time").remove(),this._isInDateSlot({start:e,end:e})){if(!1===n.currentTimeMarker.useLocalTimezone){var r=n.dataSource.options.schema.timezone;if(n.dataSource&&r){var o=i.timezone.offset(e,r);e=i.timezone.convert(e,e.getTimezoneOffset(),o)}}for(var s=n.group&&"vertical"!=n.group.orientation?this.groups.length:1,l=0;l<s;l++){var d=this.groups[l];if(!d)return;var u=i.date.toUtcTime(e),c=d.timeSlotRanges(u,u+1);if(0===c.length)return;if(c[0].collection.slotByStartDate(e))if(this._isVerticallyGrouped())this._groupedView._updateCurrentVerticalTimeMarker(c,e);else{var h="<div class='k-current-time'></div>",f=this.datesHeader.find(".k-scheduler-header-wrap"),_=Math.round(c[0].innerRect(e,new Date(e.getTime()+1),!1).left),p=t(h).prependTo(f).addClass("k-current-time-arrow-down");p.css({left:this._adjustLeftPosition(_-a(p)*v/2),top:f.find("tr").last().prev().position().top}),t(h).prependTo(this.content).css({left:this._adjustLeftPosition(_),width:"1px",height:this.content[0].scrollHeight-1,top:0})}}}},_adjustLeftPosition:function(t){return this._groupedView._adjustLeftPosition(t)},_currentTime:function(t){var i=this,n=i.options.currentTimeMarker;!1!==n&&n.updateInterval!==e&&(i._currentTimeMarkerUpdater(),t&&(i._currentTimeUpdateTimer=setInterval(this._currentTimeMarkerUpdater.bind(i),n.updateInterval)))},_editable:function(){this.options.editable&&(this._isMobile()?this._touchEditable():this._mouseEditable())},_mouseEditable:function(){var e=this;e.element.on("click"+p,".k-event a:has(.k-i-x),.k-event a:has(.k-svg-i-x)",(function(n){e.trigger("remove",{uid:t(this).closest(".k-event").attr(i.attr("uid"))}),n.preventDefault()})),!1!==e.options.editable.create&&e.element.on("dblclick"+p,".k-scheduler-content td",(function(t){var i=e._slotByPosition(t.pageX,t.pageY);if(i){var n=e._resourceBySlot(i);e.trigger("add",{eventInfo:l({start:i.startDate(),end:i.endDate()},n)})}t.preventDefault()})),!1!==e.options.editable.update&&e.element.on("dblclick"+p,".k-event",(function(n){e.trigger("edit",{uid:t(this).closest(".k-event").attr(i.attr("uid"))}),n.preventDefault()}))},_touchEditable:function(){var n=this,r=0;i.support.mobileOS.android&&(r=5),!1!==n.options.editable.create&&(n._addUserEvents=new i.UserEvents(n.element,{threshold:r,useClickAsTap:!i.support.browser.edge,filter:".k-scheduler-content td",tap:function(t){if(!n._scrolling){var i=t.x.location!==e?t.x.location:t.x,r=t.y.location!==e?t.y.location:t.y,o=n._slotByPosition(i,r);if(o){var a=n._resourceBySlot(o);n.trigger("add",{eventInfo:l({start:o.startDate(),end:o.endDate()},a)})}t.preventDefault()}}})),!1!==n.options.editable.update&&(n._editUserEvents=new i.UserEvents(n.element,{threshold:r,useClickAsTap:!i.support.browser.edge,filter:".k-event",tap:function(e){if(!n._scrolling){var r=t(e.target).closest(".k-event");t(e.touch.initialTouch).is(".k-i-x,.k-svg-i-x")?n.trigger("remove",{uid:r.attr(i.attr("uid"))}):r.hasClass("k-event-active")||n.trigger("edit",{uid:r.attr(i.attr("uid"))}),e.preventDefault()}}}))},_slotByPosition:function(t,e){var n,r,o=this.content,a=o.offset();if(t-=a.left,e-=a.top,this._isRtl){var s=i.support.browser;s.mozilla||s.webkit&&s.version>=85?(t+=o[0].scrollWidth-o[0].offsetWidth,t+=o[0].scrollLeft):s.msie?(t-=i.scrollLeft(o),t+=o[0].scrollWidth-o[0].offsetWidth):s.webkit&&(t+=o[0].scrollLeft)}else t+=o[0].scrollLeft;for(e+=o[0].scrollTop,t=Math.ceil(t),e=Math.ceil(e),r=0;r<this.groups.length;r++)if(n=this._groupedView._getTimeSlotByPosition(t,e,r))return n;return null},options:{name:"TimelineView",title:"Timeline",selectedDateFormat:"{0:D}",selectedShortDateFormat:"{0:d}",selectedMobileDateFormat:"{0:MMM dd}",date:i.date.today(),startTime:i.date.today(),endTime:i.date.today(),showWorkHours:!1,minorTickCount:2,editable:!0,workDayStart:new Date(1980,1,1,8,0,0),workDayEnd:new Date(1980,1,1,17,0,0),workWeekStart:1,workWeekEnd:5,majorTick:60,eventHeight:25,eventMinWidth:0,columnWidth:100,groupHeaderTemplate:({text:t})=>t,majorTimeHeaderTemplate:({date:t})=>i.toString(t,"t"),slotTemplate:()=>"&nbsp;",eventTemplate:g,dateHeaderTemplate:m,footer:{command:"workDay"},currentTimeMarker:{updateInterval:1e4,useLocalTimezone:!0},messages:{defaultRowText:"All events",showFullDay:"Show full day",showWorkDay:"Show business hours"}},events:["remove","add","edit"],_templates:function(){var t=this.options,e=l({},i.Template,t.templateSettings);this.eventTemplate=i.template(w),this.majorTimeHeaderTemplate=i.template(t.majorTimeHeaderTemplate,e),this.dateHeaderTemplate=i.template(t.dateHeaderTemplate,e),this.slotTemplate=i.template(t.slotTemplate,e),this.groupHeaderTemplate=i.template(t.groupHeaderTemplate,e)},_render:function(e){var i=this;e=e||[],i._dates=e,i._startDate=e[0],i._endDate=e[e.length-1||0],i._calculateSlotRanges(),i.createLayout(i._layout(e)),i._content(e),i._footer(),i._setContentWidth(),i.refreshLayout(),i.datesHeader.on("click"+p,".k-nav-day",(function(e){var n=t(e.currentTarget).closest("th"),r=i._slotByPosition(n.offset().left,i.content.offset().top);i.trigger("navigate",{view:"timeline",date:r.startDate()})})),i._groupedView._hideHeaders()},_setContentWidth:function(){var t=this.content.width(),e=this.content.find("table"),i=100,n=e.find("tr").first().children().length*this.options.columnWidth;t<n&&(i=Math.ceil(n/t*100)),e.add(this.datesHeader.find("table")).css("width",i+"%")},_calculateSlotRanges:function(){var t=this._dates,e=this.startTime(),n=this.endTime();(n=c(n))===(e=c(e))?n+=h-1:n<e&&(n+=h);for(var o=[],a=0;a<t.length;a++){var s=u(t[a]);r(s,e);var l=u(t[a]);r(l,n),o.push({start:i.date.toUtcTime(s),end:i.date.toUtcTime(l)})}this._slotRanges=o},_forTimeRange:function(t,e,i,n,o){t=T(t),e=T(e);var a,s=c(t),l=c(e),d=this.options.minorTickCount,u=this.options.majorTick*f,_=u/d||1,v=new Date(+t),p=0,g="";for(a=h/_,s!=l&&(s>l&&(l+=h),a=(l-s)/_),a=n?1:Math.round(a),o&&(a*=o);p<a;p++){var m=p%(u/_),w=0===m,D=d;if(a%d!=0)w&&a-(p+1)<d&&(D=a%d);g+=i(v,w,m<d-1,m===d-1,D,p%o),n||(o?p%o==o-1&&r(v,_,!1):r(v,_,!1))}return g},_layout:function(t){for(var e=[],i=[],n=this,r=[{text:n.options.messages.defaultRowText}],o=n._groupedView,a=[],s=0;s<n.options.minorTickCount;s++)a.push({text:"&#8203;",className:"k-last",minorTicks:!0});this._forTimeRange(n.startTime(),n.endTime(),(function(t,i,r,s,l){var d=n.majorTimeHeaderTemplate;if(i){var u={text:d({date:t}),className:s?"k-slot-cell":"",columns:a.slice(0,l)};o._setColspan(u),e.push(u)}}));for(var l=0;l<t.length;l++)i.push({text:n.dateHeaderTemplate({date:t[l]}),className:"k-slot-cell",columns:e.slice(0)});var d=this.groupedResources;return d.length&&("vertical"===this._groupOrientation()?(r=o._createRowsLayout(d,null,this.groupHeaderTemplate,i),i=o._createVerticalColumnsLayout(d,null,this.groupHeaderTemplate,i)):i=o._createColumnsLayout(d,i,this.groupHeaderTemplate,i)),{columns:i,rows:r}},_footerItems:function(){var t=this,e=[],i=this.options.footer.command;return t._isMobile()&&e.push(t._defaultTools.todayMobile),i&&"workDay"===i&&(t._isMobile()?e.push(t._defaultTools.fulldayMobile):e.push(t._defaultTools.fulldayDesktop)),e},toggleFullDay:function(){var t=this.options;this.trigger("navigate",{view:this.name||t.name,date:t.date,isWorkDay:!t.showWorkHours})},_columnCountForLevel:function(t){var e=this.columnLevels[t];return e?e.length:0},_rowCountForLevel:function(t){var e=this.rowLevels[t];return e?e.length:0},_isWorkDay:function(t){for(var e=t.getDay(),i=this._workDays,n=0;n<i.length;n++)if(i[n]===e)return!0;return!1},_content:function(t){var e=this,i=e.startTime(),n=this.endTime(),r=1,o=1,a=t.length,s="",l=this.groupedResources,d=this.slotTemplate,u=!1;l.length&&((u="vertical"===e._groupOrientation())?(o=e._groupedView._getRowCount(this.rowLevels.length-1),r=e._groupedView._getGroupsCount()):r=e._groupCount()),s+="<tbody>",s+=e._groupedView._addContent(t,a,r,o,i,n,d,u),s+="</tbody>",this.content.find("table").append(s)},_groups:function(){var t=this._groupCount(),e=this._dates,n=e.length;this.groups=[];for(var o=0;o<t;o++){var a=this._addResourceView(o),s=e[0],l=e[e.length-1||0],d=c(this.startTime()),h=c(this.endTime());0!==d&&h<=d&&(s=u(s),r(s,d),l=u(l),r(l,h)),a.addTimeSlotCollection(s,i.date.addDays(l,1))}this._timeSlotGroups(t,n)},_isHorizontallyGrouped:function(){return this.groupedResources.length&&"horizontal"===this._groupOrientation()},_timeSlotGroups:function(t,e){var i=this._timeSlotInterval(),n=this._isVerticallyGrouped(),r=this.content.find("tr");this._groupedView._addTimeSlotsCollections(t,e,r,i,n)},_addTimeSlotToCollection:function(t,e,i,n,r,o,a){var s=e[i+n],l=t.getTimeSlotCollection(0),d=this._dates[r],u=Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())+o,c=u+a;l.addTimeSlot(s,u,c,!0)},startDate:function(){return this._startDate},endDate:function(){return this._endDate},visibleEndDate:function(){var t=c(this.startTime()),e=c(this.endTime()),n=this.endDate();return 0!==t&&e<=t&&(n=i.date.addDays(n,1)),n},startTime:function(){var t=this.options;return t.showWorkHours?t.workDayStart:t.startTime},endTime:function(){var t=this.options;return t.showWorkHours?t.workDayEnd:t.endTime},_timeSlotInterval:function(){var t=this.options;return t.majorTick/t.minorTickCount*f},nextDate:function(){return i.date.nextDay(this.endDate())},previousDate:function(){return i.date.previousDay(this.startDate())},calculateDateRange:function(){this._render([this.options.date])},render:function(t){this._headerColumnCount=0,this._groups(),this.element.find(".k-event").remove(),t=new i.data.Query(t).sort([{field:"start",dir:"asc"},{field:"end",dir:"desc"}]).toArray();var e=[];this._eventsByResource(t,this.groupedResources,e);for(var n=[],r=0,o=0;o<e.length;o++){var a={groupIndex:o,maxRowCount:0,events:{}};n.push(a),this._renderEvents(e[o],o,a),r<a.maxRowCount&&(r=a.maxRowCount)}this._setRowsHeight(n,e.length,r),this._positionEvents(n,e.length),this._currentTime(!1),this.trigger("activate")},_positionEvents:function(t,e){for(var i=0;i<e;i++){var n=t[i].events;for(var r in n){var o=n[r];if(Array.isArray(o))for(var a=0;a<o.length;a++)this._positionEvent(o[a]);else this._positionEvent(o)}}},_setRowsHeight:function(e,i,n){var r=this.options.eventHeight,o=this._getBottomRowOffset(),a=this._groupedView,s=a._getVerticalGroupCount(i);i=this._isVerticallyGrouped()?s:1;for(var l=0;l<i;l++){var d=a._getVerticalRowCount(e,l,n),u=(r+2)*(d=d||1)+o,c=t(this.times.find("tr")[l]),h=t(this.content.find("tr")[l]);c.height(u),h.height(u)}this._setContentWidth(),this.refreshLayout(),this._refreshSlots()},_getBottomRowOffset:function(){var t,e,i=.5*this.options.eventHeight;return this._isMobile()?(t=30,e=60):(t=15,e=30),i>e?i=e:i<t&&(i=t),i},_positionEvent:function(t){var e=this.options.eventHeight,i=t.slotRange.innerRect(t.start,t.end,!1),n=this._adjustLeftPosition(i.left),r=i.right-i.left;if(r<0&&(r=0),r<this.options.eventMinWidth){var o=t.slotRange.collection,a=o._slots[o._slots.length-1],s=a.offsetLeft+a.offsetWidth;s<n+(r=this.options.eventMinWidth)&&(r=s-i.left)}t.element.css({top:t.slotRange.start.offsetTop+t.rowIndex*(e+2)+"px",left:n,width:r})},_refreshSlots:function(){for(var t=0;t<this.groups.length;t++)this.groups[t].refresh()},_eventsByResource:function(t,n,r,a){var s=n[0];if(s){var l=s.dataSource.view();l=l.filter((function(t){var n=i.getter(s.dataParentValueField)(t);return null===n||n===e||n===a}));for(var d=0;d<l.length;d++){var u=this._resourceValue(s,l[d]),c=new i.data.Query(t).filter({field:s.field,operator:o.groupEqFilter(u)}).toArray();n.length>1?this._eventsByResource(c,n.slice(1),r,u):r.push(c)}}else r.push(t)},_isInDateSlot:function(t){var e=t.start,n=t.end,r=u(this._startDate);return e<i.date.addDays(u(this.visibleEndDate()),1)&&r<=n},_isInTimeSlot:function(t){var e=t._startTime||i.date.toUtcTime(t.start),n=t._endTime||i.date.toUtcTime(t.end),r=this._slotRanges;e===n&&(n+=1);for(var o=0;o<r.length;o++)if(e<r[o].end&&r[o].start<n)return!0;return!1},_adjustEvent:function(t){var e=t.start,n=t.end,o=t._time("start"),a=t._time("end"),s=c(this.startTime()),l=c(this.endTime()),d=null,f=null,_=!1,v=!1;return t.isAllDay&&(e=u(e),o=0,n=u(n),a=h,f=i.date.addDays(n,1)),0===l&&(l=h),l<=s?(o<s&&o>=l&&(d=u(e),r(d,s),v=!0),a>l&&a<=s&&(f=u(n),r(f,l),_=!0)):(s>o?(d=u(e),r(d,s),v=!0):l<=o&&(d=u(e),d=i.date.addDays(d,1),r(d,s),v=!0),l<a?(f=u(n),r(f,l),_=!0):s>a&&(f=u(n),f=i.date.addDays(f,-1),r(f,l),_=!0)),{occurrence:t.clone({start:d||e,end:f||n,_startTime:d?i.date.toUtcTime(d):t._startTime,_endTime:f?i.date.toUtcTime(f):t._endTime,isAllDay:!1}),head:_,tail:v}},_renderEvents:function(t,e,i){var n,r,o;for(r=0,o=t.length;r<o;r++)if(n=t[r],this._isInDateSlot(n)){var a=n.isAllDay||n.duration()>=h,s=this.content;if(a||this._isInTimeSlot(n)){var l=this._adjustEvent(n),d=this.groups[e];if(d._continuousEvents||(d._continuousEvents=[]),this._isInTimeSlot(l.occurrence)){var u=d.slotRanges(l.occurrence,!1)[0],c=u.start.index,f=u.end.index;this._groupedView._renderEvent(i,n,l,d,u,s,c,f)}}}},addContinuousEvent:function(t,e,n,r){t._continuousEvents.push({element:n,isAllDay:r,uid:n.attr(i.attr("uid")),start:e.start,end:e.end})},_createEventElement:function(e,n,r,o){var a=this.eventTemplate,s=this.options.editable,d=this._isMobile(),u=s&&!1!==s.destroy&&!d,c=s&&!1!==s.resize,h=n._time("start"),f=n._time("end"),_=n.start,v=n.end,p=this.eventResources(n);n._startTime&&h!==i.date.getMilliseconds(n.start)&&(_=new Date(h),_=i.timezone.apply(_,"Etc/UTC")),n._endTime&&f!==i.date.getMilliseconds(n.end)&&(v=new Date(f),v=i.timezone.apply(v,"Etc/UTC"));var g=l({},{ns:i.ns,resizable:c,showDelete:u,head:r,tail:o,singleDay:1==this._dates.length,resources:p,inverseColor:!1,messages:this.options.messages,ariaLabel:this._formatEventAriaLabel(n.title,_,v,n.isAllDay),template:this.options.eventTemplate},n,{start:_,end:v}),m=t(a(g));return this.angular("compile",(function(){return{elements:m,data:[{dataItem:g}]}})),m},_arrangeRows:function(t,e,i){var n=e.start.index,r=e.end.index,a=t.slotRange.innerRect(t.start,t.end,!1),s=a.right+this.options.eventMinWidth,l=function(t,e,i){var n,r,o;for(n=t.length-1;n>=0;n--)r=t[n].rectLeft,o=t[n].rectRight,(r<=e&&o>=e||r>=e&&o<=i||e<=r&&i>=r)&&(r<e&&(e=r),o>i&&(i=o));return function(t,e,i){for(var n=[],r=0;r<t.length;r++){var o={rectLeft:t[r].rectLeft,rectRight:t[r].rectRight};(o.rectLeft<e&&o.rectRight>e||o.rectLeft>=e&&o.rectRight<=i)&&n.push(t[r])}return n}(t,e,i)}(e.events(),a.left,s);e.addEvent({slotIndex:n,start:n,end:r,rectLeft:a.left,rectRight:s,element:t.element,uid:t.uid}),l.push({start:n,end:r,uid:t.uid});var d=o.createRows(l);i.maxRowCount<d.length&&(i.maxRowCount=d.length);for(var u=0,c=d.length;u<c;u++)for(var h=d[u].events,f=0,_=h.length;f<_;f++)i.events[h[f].uid].rowIndex=u},_groupCount:function(){var t=this.groupedResources,e=this._groupedView;return t.length?"vertical"===this._groupOrientation()?e._verticalCountForLevel(t.length-1):e._horizontalCountForLevel(t.length-1,this.columnLevels.length-1):1},_updateEventForSelection:function(t){return this._adjustEvent(t.clone()).occurrence},_eventOptionsForMove:function(t){return t.isAllDay?{isAllDay:!1}:{}},_updateEventForResize:function(t){t.isAllDay&&t.set("isAllDay",!1)},_updateMoveHint:function(t,e,i){var n=this.groups[e],r=t.clone({start:t.start,end:t.end}),o=r.duration();if(r.start=new Date(r.start.getTime()+i),r.end=new Date(+r.start+o),this._removeMoveHint(t.uid),this._isInDateSlot(r)&&(r.isAllDay||r.duration()>=h||this._isInTimeSlot(r)))for(var a=this._adjustEvent(r),s=n.slotRanges(a.occurrence,!1),l=0;l<s.length;l++)this._groupedView._createMoveHint(s[l],a)},_appendMoveHint:function(t){t.appendTo(this.content),this._moveHint=this._moveHint.add(t)},_updateResizeHint:function(t,e,n,r){var a=this.groups[e].ranges(n,r,!1,!1);this._removeResizeHint();for(var s=0;s<a.length;s++){var l=a[s],d=l.startSlot(),u=l.innerRect(n,r,!1);u.top=d.offsetTop;var c=u.right-u.left;if(c<0)for(var h=0;h<l.events().length;h++)if(l.events()[h].uid===t.uid){c=l.events()[h].rectRight-u.left;break}var f=l.endSlot().offsetTop+d.offsetHeight-u.top,_=this._adjustLeftPosition(u.left),v=o.fn._createResizeHint.call(this,_,u.top,c,f);this._resizeHint=this._resizeHint.add(v)}var p=this.content;this._resizeHint.appendTo(p),this._resizeHint.find(".k-label-top,.k-label-bottom").text(""),this._resizeHint.first().addClass("k-first").find(".k-label-top").text(i.toString(i.timezone.toLocalDate(n),"t")),this._resizeHint.last().addClass("k-last").find(".k-label-bottom").text(i.toString(i.timezone.toLocalDate(r),"t"))},selectionByElement:function(t){var e=t.offset();return this._slotByPosition(e.left,e.top)},_updateDirection:function(t,e,i,n,r){var o=e[0].start,a=e[e.length-1].end;i&&!r&&o.index===a.index&&o.collectionIndex===a.collectionIndex&&(t.backward=n)},_changeGroup:function(t,e){var i=this[e?"prevGroupSlot":"nextGroupSlot"](t.start,t.groupIndex,!1);return i&&(t.groupIndex+=e?-1:1),this._groupedView._changeGroup(t,e,i),i},prevGroupSlot:function(t,e,i){var n=this.groups[e],r=n.ranges(t,t,i,!1)[0].start;if(!(e<=0))return this._groupedView._prevGroupSlot(r,n,i)},nextGroupSlot:function(t,e,i){var n=this.groups[e],r=n.ranges(t,t,i,!1)[0].start;if(!(e>=this.groups.length-1))return this._groupedView._nextGroupSlot(r,n,i)},_verticalSlots:function(t,e,i,n){var r=this._groupedView,o=r._verticalMethod(n,i),a=e[0].start,s=e[e.length-1].end,l=this.groups[t.groupIndex],d=r._normalizeVerticalSelection(t,e,n,i);return d&&(a=s=d),a=l[o](a),s=l[o](s),i||!this._isVerticallyGrouped()||a&&s||(a=s=r._verticalSlots(t,n,d)),{startSlot:a,endSlot:s}},_horizontalSlots:function(t,e,i,n){var r=n?"upSlot":"downSlot",o=e[0].start,a=e[e.length-1].end,s=this.groups[t.groupIndex],l={};return i?(l.startSlot=s[r](o),l.endSlot=s[r](a),i||!this._isHorizontallyGrouped()||o&&a||(l.startSlot=l.endSlot=this._changeGroup(t,n))):l=this._groupedView._horizontalSlots(t,s,r,o,a,i,n),l},_changeViewPeriod:function(t,e){var i,n,o=e?this.previousDate():this.nextDate(),a=t.start,s=t.end;if(i=new Date(o),n=new Date(o),this._isInRange(i,n))return!1;t.start=i,t.end=n,this._isHorizontallyGrouped()&&(t.groupIndex=e?this.groups.length-1:0);var l=s-a;return e?(s=0===(s=c(this.endTime()))?h:s,r(t.start,s-l),r(t.end,s)):(a=c(this.startTime()),r(t.start,a),r(t.end,a+l)),t.events=[],!0},move:function(t,e,n){var r,o,a,s,l=!1,d=this.groups[t.groupIndex],u=i.keys,c=this._groupedView,h=d.ranges(t.start,t.end,!1,!1);if(e===u.DOWN||e===u.UP){if(l=!0,a=e===u.UP,c._updateDirection(t,h,n,a),s=this._verticalSlots(t,h,n,a),c._changeVerticalViewPeriod(s,n,t,a))return l}else if((e===u.LEFT||e===u.RIGHT)&&(l=!0,a=e===u.LEFT,this._updateDirection(t,h,n,a,!1),s=this._horizontalSlots(t,h,n,a),c._changeHorizontalViewPeriod(s,n,t,a)))return l;if(l){if(r=s.startSlot,o=s.endSlot,n){var f=t.backward;f&&r?t.start=r.startDate():!f&&o&&(t.end=o.endDate())}else r&&o&&(t.start=r.startDate(),t.end=o.endDate());t.events=[]}return l},destroy:function(){var t=this;t.element&&t.element.off(p),t._currentTimeUpdateTimer&&clearInterval(t._currentTimeUpdateTimer),o.fn.destroy.call(this),this._isMobile()&&t.options.editable&&(!1!==t.options.editable.create&&t._addUserEvents.destroy(),!1!==t.options.editable.update&&t._editUserEvents.destroy())},_resourceBySlot:function(t){var e=this.groupedResources,i={},n=this.options.group;if(e.length&&"horizontal"===n.orientation&&n.date){var r,a,s,l,d=t.groupIndex,u=this.columnLevels,c=u[u.length-1],h=e[e.length-1],f=c[d];for(this._setResourceValue(f,h,i),s=u.length-2;s>=3;s--)for(c=u[s],h=e[s-3],r=0,l=0;l<c.length;l++)(a=(f=c[l]).columns.length)>d-r?(this._setResourceValue(f,h,i),l=c.length):r+=a;return i}return o.fn._resourceBySlot.call(this,t)}});l(!0,n,{TimelineView:S,TimelineWeekView:S.extend({options:{name:"TimelineWeekView",title:"Timeline Week",selectedDateFormat:"{0:D} - {1:D}",selectedShortDateFormat:"{0:d} - {1:d}",selectedMobileDateFormat:"{0:MMM dd} - {1:dd}",majorTick:120},name:"timelineWeek",calculateDateRange:function(){var t,e=this.options.date,n=i.date.dayOfWeek(e,this.calendarInfo().firstDay,-1),r=[];for(t=0,7;t<7;t++)r.push(n),n=i.date.nextDay(n);this._render(r)}}),TimelineWorkWeekView:S.extend({options:{name:"TimelineWorkWeekView",title:"Timeline Work Week",selectedDateFormat:"{0:D} - {1:D}",selectedShortDateFormat:"{0:d} - {1:d}",selectedMobileDateFormat:"{0:MMM dd} - {1:dd}",majorTick:120},name:"timelineWorkWeek",nextDate:function(){var t=i.date.dayOfWeek(i.date.nextDay(this.endDate()),this.calendarInfo().firstDay,1);return i.date.addDays(t,this._workDays[0])},previousDate:function(){var t=i.date.dayOfWeek(this.startDate(),this.calendarInfo().firstDay,-1),e=this._workDays;return i.date.addDays(t,e[e.length-1]-7)},calculateDateRange:function(){var t=this.options,e=t.date,n=i.date.dayOfWeek,r=n(e,this.calendarInfo().firstDay,-1),o=n(r,t.workWeekStart,1),a=n(o,t.workWeekEnd,1),s=[],l=t.workDays&&t.workDays.length?t.workDays.map((function(t){return n(r,t,1).getTime()})):null;for(l&&(a=n(o=r,this.calendarInfo().firstDay+6,1));o<=a;)l&&l.indexOf(o.getTime())>-1?s.push(o):l||s.push(o),o=i.date.nextDay(o);this._render(s)}}),TimelineMonthView:S.extend({options:{name:"TimelineMonthView",title:"Timeline Month",selectedDateFormat:"{0:D} - {1:D}",selectedShortDateFormat:"{0:d} - {1:d}",workDayStart:new Date(1980,1,1,0,0,0),workDayEnd:new Date(1980,1,1,23,59,59),footer:!1,majorTick:1440,minorTickCount:1},name:"timelineMonth",calculateDateRange:function(){var t,e,n=this.options.date,r=i.date.firstDayOfMonth(n),o=[];for(t=0,e=i.date.lastDayOfMonth(n).getDate();t<e;t++)o.push(r),r=i.date.nextDay(r);this._render(o)}})})}(window.kendo.jQuery);
//# sourceMappingURL=kendo.scheduler.timelineview.js.map
