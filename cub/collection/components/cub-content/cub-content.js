export class CubContent {
    render() {
        if (!this.padding) {
            return (h("div", { id: "cubContent" },
                h("slot", null)));
        }
        else {
            return (h("div", { id: "cubContent", class: "padding" },
                h("slot", null)));
        }
    }
    static get is() { return "cub-content"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "padding": {
            "type": Boolean,
            "attr": "padding"
        }
    }; }
    static get style() { return "/**style-placeholder:cub-content:**/"; }
}
