// Generated by CoffeeScript 1.4.0
/*
jQuery Waypoints - v2.0.0
Copyright (c) 2011-2012 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t,e,n,r,i,o,l,s,f,u,a,c,h,d,p,w,y=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},v=[].slice;t=window.jQuery;e=t(window);i={horizontal:{},vertical:{}};o=1;s={};l="waypoints-context-id";a="resize.waypoints";c="scroll.waypoints";h=1;d="waypoints-waypoint-ids";p="waypoint";w="waypoints";n=function(){function e(e){var n=this;this.$element=e;this.element=e[0];this.didResize=false;this.didScroll=false;this.id="context"+o++;this.oldScroll={x:e.scrollLeft(),y:e.scrollTop()};this.waypoints={horizontal:{},vertical:{}};e.data(l,this.id);s[this.id]=this;e.bind(c,function(){var e;if(!n.didScroll){n.didScroll=true;e=function(){n.doScroll();return n.didScroll=false};return window.setTimeout(e,t[w].settings.scrollThrottle)}});e.bind(a,function(){var e;if(!n.didResize){n.didResize=true;e=function(){t[w]("refresh");return n.didResize=false};return window.setTimeout(e,t[w].settings.resizeThrottle)}})}e.prototype.doScroll=function(){var e,n=this;e={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(y.call(window,"ontouchstart")>=0&&(!e.vertical.oldScroll||!e.vertical.newScroll)){t[w]("refresh")}t.each(e,function(e,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;t.each(n.waypoints[e],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return t.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}};e.prototype.refresh=function(){var e,n,r,i=this;r=t.isWindow(this.element);n=this.$element.offset();e={horizontal:{contextOffset:r?0:n.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:n.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?t[w]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return t.each(e,function(e,n){return t.each(i.waypoints[e],function(e,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=t.isWindow(r.element)?0:r.$element.offset()[n.offsetProp];if(t.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")){i=Math.ceil(n.contextDimension*i/100)}}r.offset=o-n.contextOffset+n.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=n.oldScroll)&&s<=r.offset){return r.trigger([n.backward])}else if(l!==null&&l>(f=n.oldScroll)&&f>=r.offset){return r.trigger([n.forward])}else if(l===null&&n.oldScroll>=r.offset){return r.trigger([n.forward])}})})};e.prototype.checkEmpty=function(){if(t.isEmptyObject(this.waypoints.horizontal)&&t.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([a,c].join(" "));return delete s[this.id]}};return e}();r=function(){function e(e,n,r){var o,l;r=t.extend({},t.fn[p].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var e;e=t[w]("viewportHeight");if(!t.isWindow(n.element)){e=n.$element.height()}return e-t(this).outerHeight()}}this.$element=e;this.element=e[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=n;this.enabled=r.enabled;this.id="waypoints"+h++;this.offset=null;this.options=r;n.waypoints[this.axis][this.id]=this;i[this.axis][this.id]=this;o=(l=e.data(d))!=null?l:[];o.push(this.id);e.data(d,o)}e.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};e.prototype.disable=function(){return this.enabled=false};e.prototype.enable=function(){this.context.refresh();return this.enabled=true};e.prototype.destroy=function(){delete i[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};e.getWaypointsByElement=function(e){var n,r;r=t(e).data(d);if(!r){return[]}n=t.extend({},i.horizontal,i.vertical);return t.map(r,function(t){return n[t]})};return e}();u={init:function(e,i){var o;if(i==null){i={}}if((o=i.handler)==null){i.handler=e}this.each(function(){var e,o,f,u;e=t(this);f=(u=i.context)!=null?u:t.fn[p].defaults.context;if(!t.isWindow(f)){f=e.closest(f)}f=t(f);o=s[f.data(l)];if(!o){o=new n(f)}return new r(e,o,i)});t[w]("refresh");return this},disable:function(){return u._invoke(this,"disable")},enable:function(){return u._invoke(this,"enable")},destroy:function(){return u._invoke(this,"destroy")},prev:function(t,e){return u._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return u._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(e,n,r){var i,o;if(e==null){e="vertical"}if(n==null){n=window}o=f.aggregate(n);i=[];this.each(function(){var n;n=t.inArray(this,o[e]);return r(i,n,o[e])});return this.pushStack(i)},_invoke:function(e,n){e.each(function(){var e;e=r.getWaypointsByElement(this);return t.each(e,function(t,e){e[n]();return true})});return this}};t.fn[p]=function(){var e,n;n=arguments[0],e=2<=arguments.length?v.call(arguments,1):[];if(u[n]){return u[n].apply(this,e)}else if(t.isFunction(n)){return u.init.apply(this,arguments)}else if(t.isPlainObject(n)){return u.init.apply(this,[null,n])}else if(!n){return t.error("jQuery Waypoints needs a callback function or handler option.")}else{return t.error("The "+n+" method does not exist in jQuery Waypoints.")}};t.fn[p].defaults={context:window,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};f={refresh:function(){return t.each(s,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=window.innerHeight)!=null?t:e.height()},aggregate:function(e){var n,r,o;n=i;if(e){n=(o=s[t(e).data(l)])!=null?o.waypoints:void 0}if(!n){return[]}r={horizontal:[],vertical:[]};t.each(r,function(e,i){t.each(n[e],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[e]=t.map(i,function(t){return t.element});return r[e]=t.unique(r[e])});return r},above:function(t){if(t==null){t=window}return f._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=window}return f._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=window}return f._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=window}return f._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return f._invoke("enable")},disable:function(){return f._invoke("disable")},destroy:function(){return f._invoke("destroy")},extendFn:function(t,e){return u[t]=e},_invoke:function(e){var n;n=t.extend({},i.vertical,i.horizontal);return t.each(n,function(t,n){n[e]();return true})},_filter:function(e,n,r){var i,o;i=s[t(e).data(l)];if(!i){return[]}o=[];t.each(i.waypoints[n],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return t.map(o,function(t){return t.element})}};t[w]=function(){var t,e;e=arguments[0],t=2<=arguments.length?v.call(arguments,1):[];if(f[e]){return f[e].apply(null,t)}else{return f.aggregate.call(null,e)}};t[w].settings={resizeThrottle:200,scrollThrottle:100};e.load(function(){return t[w]("refresh")})}).call(this);