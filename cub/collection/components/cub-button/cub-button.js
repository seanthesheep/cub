export class CubButton {
    render() {
        if (this.color === 'primary') {
            return (h("div", { id: "cubButton", class: "primary" },
                h("slot", null)));
        }
        else if (this.color === 'secondary') {
            return (h("div", { id: "cubButton", class: "secondary" },
                h("slot", null)));
        }
        else if (this.color === 'dark') {
            return (h("div", { id: "cubButton", class: "dark" },
                h("slot", null)));
        }
        else {
            return (h("div", { id: "cubButton", class: "normal" },
                h("slot", null)));
        }
    }
    static get is() { return "cub-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        }
    }; }
    static get style() { return "/**style-placeholder:cub-button:**/"; }
}
