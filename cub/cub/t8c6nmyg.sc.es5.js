/*! Built with http://stenciljs.com */
cub.loadBundle("t8c6nmyg",["exports"],function(e){var r=window.cub.h,n=function(){function e(){}return e.prototype.render=function(){return"primary"===this.color?r("div",{id:"cubHeader",class:"primary"},r("slot",null)):"secondary"===this.color?r("div",{id:"cubHeader",class:"secondary"},r("slot",null)):"dark"===this.color?r("div",{id:"cubHeader",class:"dark"},r("slot",null)):r("div",{id:"cubHeader",class:"normal"},r("slot",null))},Object.defineProperty(e,"is",{get:function(){return"cub-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},fixed:{type:Boolean,attr:"fixed"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"#cubHeader[data-cub-header]{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 2px 9px 1px rgba(0,0,0,.12),0 4px 2px -2px rgba(0,0,0,.2);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 2px 9px 1px rgba(0,0,0,.12),0 4px 2px -2px rgba(0,0,0,.2);padding:16px;will-change:transform;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1) .1s;transition:-webkit-transform 233ms cubic-bezier(0,0,.21,1) .1s;transition:transform 233ms cubic-bezier(0,0,.21,1) .1s;transition:transform 233ms cubic-bezier(0,0,.21,1) .1s,-webkit-transform 233ms cubic-bezier(0,0,.21,1) .1s;z-index:1000}.primary[data-cub-header]{background-color:#3f51b5;color:#fff}.secondary[data-cub-header]{background-color:#0097a7;color:#fff}.dark[data-cub-header]{background-color:#212121;color:#fff}.normal[data-cub-header]{background:#bdbdbd;color:#222}.fixed[data-cub-header]{position:fixed}#cubHeader[data-cub-header]   .primary[data-cub-header]   #cubSideNav[data-cub-header]{background-color:#3f51b5;color:#fff}#cubHeader[data-cub-header]   .secondary[data-cub-header]   #cubSideNav[data-cub-header]{background-color:#0097a7;color:#fff}#cubHeader[data-cub-header]   .dark[data-cub-header]   #cubSideNav[data-cub-header]{background-color:#212121;color:#fff}#cubHeader[data-cub-header]   .normal[data-cub-header]   #cubSideNav[data-cub-header]{background:#bdbdbd;color:#222}"},enumerable:!0,configurable:!0}),e}();e.CubHeader=n,Object.defineProperty(e,"__esModule",{value:!0})});