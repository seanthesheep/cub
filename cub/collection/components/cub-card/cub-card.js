export class CubCard {
    render() {
        if (!this.padding) {
            return (h("div", { id: "cubCard" },
                h("slot", null)));
        }
        else {
            return (h("div", { id: "cubCard", class: "padding" },
                h("slot", null)));
        }
    }
    static get is() { return "cub-card"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "padding": {
            "type": Boolean,
            "attr": "padding"
        }
    }; }
    static get style() { return "/**style-placeholder:cub-card:**/"; }
}
