export class CubSideNav {
    openNav() {
        document.getElementById('cubSideNav').style.width = '60%';
        document.getElementById('bars').style.visibility = 'hidden';
    }
    closeNav() {
        document.getElementById('cubSideNav').style.width = '0';
        document.getElementById('bars').style.visibility = 'visible';
    }
    render() {
        return (h("div", null,
            h("div", { id: "cubSideNav", class: "sidenav" },
                h("a", { href: "javascript:void(0)", class: "closebtn", onClick: this.closeNav }, "\u00D7"),
                h("slot", null)),
            h("div", { id: "bars", onClick: this.openNav }, "\u2630")));
    }
    static get is() { return "cub-sidenav"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:cub-sidenav:**/"; }
}
