/*! Built with http://stenciljs.com */
const{h:t}=window.cub;class r{render(){return"primary"===this.color?t("div",{id:"cubFab",class:"primary"},t("slot",null)):"secondary"===this.color?t("div",{id:"cubFab",class:"secondary"},t("slot",null)):"dark"===this.color?t("div",{id:"cubFab",class:"dark"},t("slot",null)):t("div",{id:"cubFab",class:"normal"},t("slot",null))}static get is(){return"cub-fab"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"}}}static get style(){return"#cubFab[data-cub-fab]:before{content:\"+\";-webkit-box-shadow:0 0 3px rgba(0,0,0,.5),3px 3px 3px rgba(0,0,0,.25);box-shadow:0 0 3px rgba(0,0,0,.5),3px 3px 3px rgba(0,0,0,.25);width:62px;height:62px;border-radius:50%;cursor:pointer;text-align:center;position:fixed;bottom:0;right:0;margin:6%;display:inline-block;padding-top:inherit;font-size:3.2em}.primary[data-cub-fab]:before{background:#3f51b5;color:#fff}.secondary[data-cub-fab]:before{background:#0097a7;color:#fff}.dark[data-cub-fab]:before{background:#212121;color:#fff}.normal[data-cub-fab]:before{background:#bdbdbd;color:#222}"}}export{r as CubFab};