/*! Built with http://stenciljs.com */
cub.loadBundle("n10wl2i3",["exports"],function(e){var r=window.cub.h,n=function(){function e(){}return e.prototype.render=function(){return"primary"===this.color?r("div",{id:"cubFab",class:"primary"},r("slot",null)):"secondary"===this.color?r("div",{id:"cubFab",class:"secondary"},r("slot",null)):"dark"===this.color?r("div",{id:"cubFab",class:"dark"},r("slot",null)):r("div",{id:"cubFab",class:"normal"},r("slot",null))},Object.defineProperty(e,"is",{get:function(){return"cub-fab"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"#cubFab:before{content:\"+\";-webkit-box-shadow:0 0 3px rgba(0,0,0,.5),3px 3px 3px rgba(0,0,0,.25);box-shadow:0 0 3px rgba(0,0,0,.5),3px 3px 3px rgba(0,0,0,.25);width:62px;height:62px;border-radius:50%;cursor:pointer;text-align:center;position:fixed;bottom:0;right:0;margin:6%;display:inline-block;padding-top:inherit;font-size:3.2em}.primary:before{background:#3f51b5;color:#fff}.secondary:before{background:#0097a7;color:#fff}.dark:before{background:#212121;color:#fff}.normal:before{background:#bdbdbd;color:#222}"},enumerable:!0,configurable:!0}),e}();e.CubFab=n,Object.defineProperty(e,"__esModule",{value:!0})});