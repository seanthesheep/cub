export class CubTitle {
    render() {
        return (h("div", { id: "cubTitle" },
            h("h1", null,
                h("slot", null))));
    }
    static get is() { return "cub-title"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:cub-title:**/"; }
}
