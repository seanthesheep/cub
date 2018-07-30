export class CubHeader {
    render() {
        if (this.color === 'primary') {
            return (h("div", { id: "cubHeader", class: "primary" },
                h("slot", null)));
        }
        else if (this.color === 'secondary') {
            return (h("div", { id: "cubHeader", class: "secondary" },
                h("slot", null)));
        }
        else if (this.color === 'dark') {
            return (h("div", { id: "cubHeader", class: "dark" },
                h("slot", null)));
        }
        else {
            return (h("div", { id: "cubHeader", class: "normal" },
                h("slot", null)));
        }
    }
    static get is() { return "cub-header"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "fixed": {
            "type": Boolean,
            "attr": "fixed"
        }
    }; }
    static get style() { return "/**style-placeholder:cub-header:**/"; }
}
