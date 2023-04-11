/**
 * Kendo UI v2023.1.314 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.pivotgrid.js";import"./kendo.menu.js";import"./kendo.window.js";import"./kendo.treeview.js";import"./kendo.dropdownlist.js";import"./kendo.icons.js";var __meta__={id:"pivot.fieldmenu",name:"PivotFieldMenu",category:"web",description:"The PivotFieldMenu widget allows the user to filter on fields displayed in PivotGrid",depends:["menu","window","treeview","treeview.draganddrop","dropdownlist","icons"],advanced:!0};!function(e,t){var i=window.kendo,n=i.ui,r=i.htmlEncode,s="kendoContextMenu",a=".kendoPivotFieldMenu",l=n.Widget,o="k-filter-item",c="aria-label",u=l.extend({init:function(e,t){l.fn.init.call(this,e,t),this._dataSource(),this._layout(),i.notify(this)},events:[],options:{name:"PivotFieldMenuV2",animation:{expand:{effects:"expand:vertical",duration:200},collapse:{duration:200,effects:"expand:vertical",hide:!0,reverse:!0}},filter:null,filterable:!0,sortable:!0,messages:{apply:"Apply",sortAscending:"Sort Ascending",sortDescending:"Sort Descending",filterFields:"Fields Filter",filter:"Filter",include:"Include Fields...",clear:"Clear",reset:"Reset",operators:{contains:"Contains",doesnotcontain:"Does not contain",startswith:"Starts with",endswith:"Ends with",eq:"Is equal to",neq:"Is not equal to"}}},destroy:function(){l.fn.destroy.call(this),this.menu&&(this.menu.element.off(a),this.menu.destroy(),this.menu=null,this._applyProxy=this._resetIncludes=null),this.treeView&&(this.treeView.destroy(),this.treeView=null),this.wrapper=null,this.element=null},setDataSource:function(e){this.options.dataSource=e,this._dataSource()},_createTreeView:function(e){var t=this;t._includesCache={},t.treeView=new n.TreeView(e,{autoBind:!1,dataSource:t._treeViewDataSource(),dataTextField:"caption",template:({item:e})=>`${r(e.caption||e.name)}`,check:function(e){var i=e.sender.dataItem(e.node);t._includesCache[i.uniqueName]?delete t._includesCache[i.uniqueName]:t._includesCache[i.uniqueName]=e.node},checkboxes:{checkChildren:!0}})},_dataSource:function(){this.dataSource=i.data.PivotDataSourceV2.create(this.options.dataSource)},_layout:function(){var t=this,n=t.options;t.wrapper=e(i.template(b)({ns:i.ns,filterable:n.filterable,sortable:n.sortable,messages:n.messages})),t.menu=t.wrapper[s]({filter:n.filter,target:t.element,orientation:"vertical",showOn:"click",closeOnClick:!1,open:this._menuOpen.bind(this),close:this._closeMenu.bind(this),copyAnchorStyles:!1}).data(s),t.menu.element.off("blur.kendoMenu","[tabindex]",t.menu._checkActiveProxy),n.filterable&&(t._initFilterForm(),t._attachFilterHandlers(),t._createTreeView(t.wrapper.find(".k-treeview"))),t._clickHandler=t._click.bind(t),t.wrapper.on("click",".k-item:not([role='treeitem'])",t._clickHandler)},_closeMenu:function(t){var n=e(i._activeElement());(n[0]===this._filterOperator.wrapper[0]||n.closest(".k-treeview")[0]===this.treeView.wrapper[0]||n.hasClass("k-button-includes-reset"))&&t.preventDefault()},_treeViewDataSource:function(){var t=this;return i.data.HierarchicalDataSource.create({schema:{model:{id:"uniqueName",hasChildren:function(e){return parseInt(e.childrenCardinality,10)>0}}},transport:{read:function(i){var n,r,s,a,l,o=t.treeView.dataSource.get(i.data.uniqueName),c=i.data.uniqueName,u=[];t.dataSource.cubeSchema?(u=c?t.dataSource.cubeSchema.members(t.currentMember):t.dataSource.cubeSchema.members(t.currentMember+".[(ALL)]"),n=t.dataSource.filter(),t._getFilterStorage(t.currentMember)&&1==f({filter:n,member:t.currentMember}).length&&!c?u[0].checked=!0:function(t,i,n){var r,s=0,a=n.length,l=f({filter:t,member:i,operator:"neq"});if(n[0].name.indexOf("[(ALL)]")>=0)return void(n[0].checked=!l.length);if(l.length)for(r=l.map((function(e){return e.value}));s<a;s++)n[s].checked=e.inArray(n[s].uniqueName,r)<0;else for(;s<a;s++)n[s].checked=!0}(t.dataSource.filter(),t.currentMember,u),i.success(u)):(a={catalogName:r=t.dataSource.transport.catalog(),cubeName:s=t.dataSource.transport.cube()},l={command:"schemaMembers"},c?(a.memberUniqueName=o.uniqueName.replace(/\&/g,"&amp;"),a.treeOp=1):a.levelUniqueName=t.currentMember+".[(ALL)]",l.connection={catalog:r,cube:s},l.restrictions=a,t.dataSource.discover(l).then((function(e){o&&!o.checked||k(t.dataSource.filter(),t.currentMember,e),i.success(e)})))}}})},_storeFilterForm:function(e){var t=this;t._filterStorage||(t._filterStorage={}),t._filterStorage[e]={value:t._filterValue.val(),operator:t._filterOperator.value()}},_getFilterStorage:function(e){return this._filterStorage&&this._filterStorage[e]?this._filterStorage[e]:null},_clearFilterStorage:function(e){this._filterStorage[e]=null},_click:function(t){var i=e(t.currentTarget).closest(":not(path,svg)"),n=i.next();i.hasClass("k-expander")?this._toggle(n,i):i.hasClass("k-columnmenu-item")&&i.find(".k-i-sort-asc-small,.k-svg-i-sort-asc-small").length?this._sort("asc"):i.hasClass("k-columnmenu-item")&&i.find(".k-i-sort-desc-small,.k-svg-i-sort-desc-small").length&&this._sort("desc")},_attachFilterHandlers:function(){this._applyIncludesProxy=this._applyIncludes.bind(this),this._resetIncludesProxy=this._resetIncludes.bind(this),this.menu.element.on("click"+a,".k-button-includes-reset",this._resetIncludesProxy).on("click"+a,".k-button-includes-apply",this._applyIncludesProxy)},_includesHandler:function(t){t.preventDefault(),e(t.target).closest(":not(path,svg)").hasClass("k-button-includes-reset")?this._resetIncludes():this._applyIncludes()},_applyIncludes:function(e){e.preventDefault();var t,i=this.treeView.dataSource.view(),n=this.dataSource.filter();t=this.dataSource.cubeSchema?function(e,t,i){var n=[];h(t,i,"neq"),t||(t={logic:"and",filters:[]});if(v(e,n,!1),n.length)for(var r=0;r<n.length;r++)t.filters.push({field:i,operator:"neq",value:n[r]});return t||null}(i,n,this.currentMember):function(e,t,i){var n,r=[],s=e[0].checked,a=f({filter:t,member:i,operator:"in"})[0];v(e,r,!0),a&&(s?(t.filters.splice(t.filters.indexOf(a),1),t.filters.length||(t={})):a.value=r.join(","),n=t);r.length&&(n||s||(n={field:i,operator:"in",value:r.join(",")},t&&(t.filters.push(n),n=t)));return n||null}(i,n,this.currentMember),this._includesCache={},t&&(this.dataSource._preventRefresh=!0,this.dataSource.filter(t),this.menu.close())},_resetIncludes:function(t){t.preventDefault();var i,n=this;for(var r in n._includesCache)(i=e(n._includesCache[r]).find(".k-checkbox")).prop("checked",!i.prop("checked")),n.treeView._checkboxChange({target:i}),delete n._includesCache[r]},_initFilterForm:function(){var e=this.menu.element.find(".kendo-grid-filter-menu-container"),t=this._filter.bind(this);this._filterOperator=new i.ui.DropDownList(e.find("select"),{popup:{appendTo:document.body}}),this._filterValue=e.find("input.k-input-inner"),this._filterForm=e,this._updateFilterAriaLabel(),e.on("click"+a,".k-button-filter",t).on("click"+a,".k-button-filter-clear",this._reset.bind(this))},_updateFilterAriaLabel:function(){var e=this._filterOperator.value(),t=this.options.messages.operators[e];this._filterForm.find("select").attr(c,t)},_filter:function(e){var t=this,i=m(t._filterValue.val(),t.dataSource,t.currentMember),n=t.dataSource.filter();if(e.preventDefault(),""!==i){var r={field:t.currentMember,operator:t._filterOperator.value(),value:i};n?function(e,t){if(!t)return;e=e.filters;var i=0,n=e.length;for(i=n-1;i>=0;i--)e[i].value===t.value&&e[i].operator===t.operator&&e.splice(i,1)}(n,t._getFilterStorage(t.currentMember)):n={logic:"and",filters:[]},t._storeFilterForm(t.currentMember),n.filters.push(r),t.dataSource._preventRefresh=!0,t.dataSource.filter(n),t.menu.close()}else t.menu.close()},_reset:function(e){var t=this,i=t.dataSource.filter();h(i,t.currentMember),e.preventDefault(),i.filters[0]||(i={}),t.dataSource._preventRefresh=!0,t.dataSource.filter(i),t._clearFilterStorage(t.currentMember),t._setFilterForm(null),t.menu.close()},_setFilterForm:function(e){var t=this._filterOperator,i="",n="";e&&(i=e.operator,n=e.value),t.value(i),t.value()||t.select(0),this._filterValue.val(n)},_collapseItems:function(t){t.find(".k-expander-indicator").each(((t,n)=>i.ui.icon(e(n),{icon:"chevron-up"}))),t.nextAll().hide()},_toggle:function(t,n){var r=this.options.animation,s=t.is(":visible"),a=s?r.collapse:r.expand;n.find(".k-expander-indicator").each(((t,n)=>i.ui.icon(e(n),{icon:s?"chevron-down":"chevron-up"}))),t.kendoStop(!0,!0).kendoAnimate(a)},_sort:function(e){var t=this.currentMember,i=this.dataSource.sort()||[];(i=p(i,t)).push({field:t,dir:e}),this.dataSource._preventRefresh=!0,this.dataSource.sort(i),this.menu.close()},_menuOpen:function(t){if(t.event){var i,n=this,r=n.dataSource.cubeSchema;n.currentMember=e(t.event.target).closest(":not(path,svg)").prev().text(),n.menu.popup._hovered=!0,n.options.filterable&&(n._setFilterForm(n._getFilterStorage(n.currentMember)),i=n.wrapper.find(".k-columnmenu-item-wrapper").last(),r&&"string"!==r.memberType(n.currentMember).toLowerCase()?i.hide():i.show(),n.currentMember!==n._oldCurrentmember&&(n._oldCurrentmember&&n._collapseItems(n.menu.element.find(".k-item.k-expander")),n._oldCurrentmember=n.currentMember,n._includesCache={},this.treeView.dataSource.read()))}}}),d=l.extend({init:function(e,t){l.fn.init.call(this,e,t),this._dataSource(),this._layout(),i.notify(this)},events:[],options:{name:"PivotFieldMenu",filter:null,filterable:!0,sortable:!0,messages:{info:"Show items with value that:",sortAscending:"Sort Ascending",sortDescending:"Sort Descending",filterFields:"Fields Filter",filter:"Filter",include:"Include Fields...",title:"Fields to include",clear:"Clear",ok:"OK",cancel:"Cancel",operators:{contains:"Contains",doesnotcontain:"Does not contain",startswith:"Starts with",endswith:"Ends with",eq:"Is equal to",neq:"Is not equal to"}}},_layout:function(){var t=this.options;this.wrapper=e(i.template(w)({ns:i.ns,filterable:t.filterable,sortable:t.sortable,messages:t.messages})),this.menu=this.wrapper[s]({filter:t.filter,target:this.element,orientation:"vertical",showOn:"click",closeOnClick:!1,open:this._menuOpen.bind(this),select:this._select.bind(this),copyAnchorStyles:!1}).data(s),this._createWindow(),t.filterable&&this._initFilterForm()},_initFilterForm:function(){var e=this.menu.element.find("."+o),t=this._filter.bind(this);this._filterOperator=new i.ui.DropDownList(e.find("select")),this._filterValue=e.find("input.k-input-inner"),this._updateFilterAriaLabel(),e.on("submit"+a,t).on("click"+a,".k-button-filter",t).on("click"+a,".k-button-clear",this._reset.bind(this))},_setFilterForm:function(e){var t=this._filterOperator,i="",n="";e&&(i=e.operator,n=e.value),t.value(i),t.value()||t.select(0),this._filterValue.val(n)},_clearFilters:function(e){var t,i,n=this.dataSource.filter()||{},r=0;for(n.filters=n.filters||[],i=(t=f({filter:n,member:e})).length;r<i;r++)n.filters.splice(n.filters.indexOf(t[r]),1);return n},_filter:function(e){var t=this,i=m(t._filterValue.val(),t.dataSource,t.currentMember);if(e.preventDefault(),""!==i){var n={field:t.currentMember,operator:t._filterOperator.value(),value:i},r=t._clearFilters(t.currentMember);r.filters.push(n),t.dataSource.filter(r),t.menu.close()}else t.menu.close()},_updateFilterAriaLabel:function(){var e=this.menu.element.find("."+o),t=this._filterOperator.value(),i=this.options.messages.operators[t];e.find("select").attr(c,i)},_reset:function(e){var t=this,i=t._clearFilters(t.currentMember);e.preventDefault(),i.filters[0]||(i={}),t.dataSource.filter(i),t._setFilterForm(null),t.menu.close()},_sort:function(e){var t=this.currentMember,i=this.dataSource.sort()||[];(i=p(i,t)).push({field:t,dir:e}),this.dataSource.sort(i),this.menu.close()},setDataSource:function(e){this.options.dataSource=e,this._dataSource()},_dataSource:function(){this.dataSource=i.data.PivotDataSource.create(this.options.dataSource)},_createWindow:function(){var t=this.options.messages;this.includeWindow=e(i.template(g)({messages:t})).on("click"+a,".k-button-ok",this._applyIncludes.bind(this)).on("click"+a,".k-button-cancel",this._closeWindow.bind(this)),this.includeWindow=new n.Window(this.includeWindow,{title:t.title,visible:!1,resizable:!1,open:this._windowOpen.bind(this)})},_applyIncludes:function(e){var t,i=[],n=this.treeView.dataSource.view(),r=n[0].checked,s=this.dataSource.filter(),a=f({filter:s,member:this.currentMember,operator:"in"})[0];v(n,i,!0),a&&(r?(s.filters.splice(s.filters.indexOf(a),1),s.filters.length||(s={})):a.value=i.join(","),t=s),i.length&&(t||r||(t={field:this.currentMember,operator:"in",value:i.join(",")},s&&(s.filters.push(t),t=s))),t&&this.dataSource.filter(t),this._closeWindow(e)},_closeWindow:function(e){e.preventDefault(),this.includeWindow.close()},_treeViewDataSource:function(){var e=this;return i.data.HierarchicalDataSource.create({schema:{model:{id:"uniqueName",hasChildren:function(e){return parseInt(e.childrenCardinality,10)>0}}},transport:{read:function(t){var i={},n=e.treeView.dataSource.get(t.data.uniqueName);t.data.uniqueName?(i.memberUniqueName=n.uniqueName.replace(/\&/g,"&amp;"),i.treeOp=1):i.levelUniqueName=e.currentMember+".[(ALL)]",e.dataSource.schemaMembers(i).done((function(i){k(e.dataSource.filter(),e.currentMember,i),t.success(i)})).fail(t.error)}}})},_createTreeView:function(e){var t=this;t.treeView=new n.TreeView(e,{autoBind:!1,dataSource:t._treeViewDataSource(),dataTextField:"caption",template:({item:e})=>`${r(e.caption||e.name)}`,checkboxes:{checkChildren:!0},dataBound:function(){n.progress(t.includeWindow.element,!1)}})},_menuOpen:function(t){if(t.event){var n=i.attr("name");this.currentMember=e(t.event.target).closest("["+n+"]").attr(n),this.options.filterable&&this._setFilterForm(f({filter:this.dataSource.filter(),member:this.currentMember})[0])}},_select:function(t){var i=e(t.item);e(".k-pivot-filter-window").not(this.includeWindow.element).kendoWindow("close"),i.hasClass("k-include-item")?this.includeWindow.center().open():i.hasClass("k-sort-asc")?this._sort("asc"):i.hasClass("k-sort-desc")?this._sort("desc"):i.hasClass(o)&&this._updateFilterAriaLabel()},_windowOpen:function(){this.treeView||this._createTreeView(this.includeWindow.element.find(".k-treeview")),n.progress(this.includeWindow.element,!0),this.treeView.dataSource.read()},destroy:function(){l.fn.destroy.call(this),this.menu&&(this.menu.destroy(),this.menu=null),this.treeView&&(this.treeView.destroy(),this.treeView=null),this.includeWindow&&(this.includeWindow.destroy(),this.includeWindow=null),this.wrapper=null,this.element=null}});function m(t,i,n){var r=((i.options.schema.model||{}).fields||{})[n];return r&&("number"===r.type?t=parseFloat(t):"boolean"===r.type&&(t=Boolean(e.parseJSON(t)))),t}function p(e,t){for(var i=[],n=0,r=e.length;n<r;n++)e[n].field!==t&&i.push(e[n]);return i}function h(e,t,i){if(e){var n,r=0;for(r=(e=e.filters).length-1;r>=0;r--)n=e[r].operator,i&&n!==i||e[r].field!==t||e.splice(r,1)}}function f(e){if(!e.filter)return[];for(var t,i=e.filter.filters,n=0,r=[],s=i.length,a=e.isLocal?"neq":"in";n<s;n++)t=i[n].operator,(e.operator||t===a)&&t!==e.operator||i[n].field!==e.member||r.push(i[n]);return r}function k(t,i,n){var r,s=0,a=n.length;if(t=f({filter:t,member:i,operator:"in"})[0])for(r=t.value.split(",");s<a;s++)n[s].checked=e.inArray(n[s].uniqueName,r)>=0;else for(;s<a;s++)n[s].checked=!0}function v(e,t,i){var n,r=e.length;for(n=0;n<r;n++)e[n].checked===i&&0!==e[n].level()&&t.push(e[n].uniqueName),e[n].hasChildren&&v(e[n].children.view(),t,i)}var b=({messages:t})=>`<div class="k-pivotgrid-column-menu k-column-menu k-popup k-child-animation-container"><div class="k-pivotgrid-column-menu-popup k-grid-columnmenu-popup"><div><div class="k-columnmenu-item-wrapper"><div class="k-columnmenu-item k-item">${i.ui.icon("sort-asc-small")}${r(t.sortAscending)}</div><div class="k-columnmenu-item k-item">${i.ui.icon("sort-desc-small")}${r(t.sortDescending)}</div></div><div class="k-columnmenu-item-wrapper"><div class="k-widget k-expander k-item"><div class="k-columnmenu-item">${i.ui.icon("grid-layout")}${r(t.include)}<span class="k-expander-spacer"></span>`+i.ui.icon(e('<span class="k-expander-indicator"></span>'),{icon:"chevron-down"})+'</div></div><div class="k-columnmenu-item-content" style="width: 100%; height: auto; display:none"><div class="k-column-list-wrapper"><div class="k-column-list"><div class="k-treeview"></div></div></div><div class="k-actions k-hstack k-justify-content-stretch">'+`<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-button-includes-reset"><span class="k-button-text">${r(t.reset)}</span></button>`+`<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-button-includes-apply"><span class="k-button-text">${r(t.apply)}</span></button></div></div></div><div class="k-columnmenu-item-wrapper"><div class="k-widget k-expander k-item"><div class="k-columnmenu-item">`+`${i.ui.icon("filter")}${r(t.filterFields)}<span class="k-expander-spacer"></span>`+i.ui.icon(e('<span class="k-expander-indicator"></span>'),{icon:"chevron-down"})+'</div></div><div class="k-columnmenu-item-content" style="display:none"><div class="k-animation-container k-animation-container-relative" style="display: block; "><div class="k-child-animation-container"><div class="kendo-grid-filter-menu-container"><form class="k-filter-menu k-group k-reset"><div class="k-filter-menu-container"><select class="k-dropdown k-picker k-dropdown-list" style="overflow:visible">'+`${Object.keys(t.operators).map((e=>'<option value="'+e+'">'+t.operators[e]+"</option>")).join("")}</select><span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input class="k-input-inner" value=""></span><div class="k-actions k-hstack k-justify-content-stretch">`+`<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-button-filter-clear"><span class="k-button-text">${t.clear}</span></button>`+`<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-button-filter"><span class="k-button-text">${r(t.filter)}</span></button></div></div></form></div></div></div></div></div></div></div></div>`,_=(e,t)=>{var n="";return t&&(n+='<li class="k-item k-menu-item k-include-item"><span class="k-link k-menu-link">'+i.ui.icon("filter")+`<span class="k-menu-link-text">${e.include}</span></span></li><li class="k-separator"></li><li class="k-item k-menu-item `+o+'"><span class="k-link k-menu-link">'+i.ui.icon("filter")+`<span class="k-menu-link-text">${e.filterFields}</span></span><ul><li>`+(e=>`<div class="k-filterable k-content" tabindex="-1" data-role="fieldmenu"><form class="k-filter-menu"><div class="k-filter-menu-container"><div class="k-filter-help-text">${e.info}</div><select>${Object.keys(e.operators).map((t=>'<option value="'+t+'">'+e.operators[t]+"</option>")).join("")}</select><span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input class="k-input-inner" type="text" aria-label="${e.filter}" title="${e.filter}" /></span><div class="k-actions"><a class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-button-filter" href="#"><span class="k-button-text">${e.filter}</span></a><a class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-button-clear" href="#"><span class="k-button-text">${e.clear}</span></a></div></div></form></div>`)(e)+"</li></ul></li>"),n},w=({messages:e,filterable:t,sortable:n})=>'<ul class="k-pivot-fieldmenu">'+((e,t,n)=>{var r="";return t&&(r+='<li class="k-item k-menu-item k-sort-asc"><span class="k-link k-menu-link">'+i.ui.icon("sort-asc-small")+`<span class="k-menu-link-text">${e.sortAscending}</span></span></li><li class="k-item k-menu-item k-sort-desc"><span class="k-link k-menu-link">`+i.ui.icon("sort-desc-small")+`<span class="k-menu-link-text">${e.sortDescending}</span></span></li>`,n&&(r+='<li class="k-separator"></li>')),r})(e,n,t)+_(e,t)+"</ul>",g=({messages:e})=>`<div class="k-popup-edit-form k-pivot-filter-window"><div class="k-edit-form-container"><div class="k-treeview"></div><div class="k-edit-buttons"><a class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-button-ok" href="#"><span class="k-button-text">${e.ok}</span></a><a class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-button-cancel" href="#"><span class="k-button-text">${e.cancel}</span></a></div></div>`;n.plugin(d),n.plugin(u)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.pivot.fieldmenu.js.map
