import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import './stencil.core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface CubButton {
      'color': string;
    }
  }

  interface HTMLCubButtonElement extends StencilComponents.CubButton, HTMLStencilElement {}

  var HTMLCubButtonElement: {
    prototype: HTMLCubButtonElement;
    new (): HTMLCubButtonElement;
  };
  interface HTMLElementTagNameMap {
    'cub-button': HTMLCubButtonElement;
  }
  interface ElementTagNameMap {
    'cub-button': HTMLCubButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cub-button': JSXElements.CubButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface CubButtonAttributes extends HTMLAttributes {
      'color'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CubCard {
      'padding': boolean;
    }
  }

  interface HTMLCubCardElement extends StencilComponents.CubCard, HTMLStencilElement {}

  var HTMLCubCardElement: {
    prototype: HTMLCubCardElement;
    new (): HTMLCubCardElement;
  };
  interface HTMLElementTagNameMap {
    'cub-card': HTMLCubCardElement;
  }
  interface ElementTagNameMap {
    'cub-card': HTMLCubCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cub-card': JSXElements.CubCardAttributes;
    }
  }
  namespace JSXElements {
    export interface CubCardAttributes extends HTMLAttributes {
      'padding'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CubContent {
      'padding': boolean;
    }
  }

  interface HTMLCubContentElement extends StencilComponents.CubContent, HTMLStencilElement {}

  var HTMLCubContentElement: {
    prototype: HTMLCubContentElement;
    new (): HTMLCubContentElement;
  };
  interface HTMLElementTagNameMap {
    'cub-content': HTMLCubContentElement;
  }
  interface ElementTagNameMap {
    'cub-content': HTMLCubContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cub-content': JSXElements.CubContentAttributes;
    }
  }
  namespace JSXElements {
    export interface CubContentAttributes extends HTMLAttributes {
      'padding'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CubFab {
      'color': string;
    }
  }

  interface HTMLCubFabElement extends StencilComponents.CubFab, HTMLStencilElement {}

  var HTMLCubFabElement: {
    prototype: HTMLCubFabElement;
    new (): HTMLCubFabElement;
  };
  interface HTMLElementTagNameMap {
    'cub-fab': HTMLCubFabElement;
  }
  interface ElementTagNameMap {
    'cub-fab': HTMLCubFabElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cub-fab': JSXElements.CubFabAttributes;
    }
  }
  namespace JSXElements {
    export interface CubFabAttributes extends HTMLAttributes {
      'color'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CubHeader {
      'color': string;
      'fixed': boolean;
    }
  }

  interface HTMLCubHeaderElement extends StencilComponents.CubHeader, HTMLStencilElement {}

  var HTMLCubHeaderElement: {
    prototype: HTMLCubHeaderElement;
    new (): HTMLCubHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'cub-header': HTMLCubHeaderElement;
  }
  interface ElementTagNameMap {
    'cub-header': HTMLCubHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cub-header': JSXElements.CubHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface CubHeaderAttributes extends HTMLAttributes {
      'color'?: string;
      'fixed'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CubSidenav {

    }
  }

  interface HTMLCubSidenavElement extends StencilComponents.CubSidenav, HTMLStencilElement {}

  var HTMLCubSidenavElement: {
    prototype: HTMLCubSidenavElement;
    new (): HTMLCubSidenavElement;
  };
  interface HTMLElementTagNameMap {
    'cub-sidenav': HTMLCubSidenavElement;
  }
  interface ElementTagNameMap {
    'cub-sidenav': HTMLCubSidenavElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cub-sidenav': JSXElements.CubSidenavAttributes;
    }
  }
  namespace JSXElements {
    export interface CubSidenavAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface CubTitle {

    }
  }

  interface HTMLCubTitleElement extends StencilComponents.CubTitle, HTMLStencilElement {}

  var HTMLCubTitleElement: {
    prototype: HTMLCubTitleElement;
    new (): HTMLCubTitleElement;
  };
  interface HTMLElementTagNameMap {
    'cub-title': HTMLCubTitleElement;
  }
  interface ElementTagNameMap {
    'cub-title': HTMLCubTitleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'cub-title': JSXElements.CubTitleAttributes;
    }
  }
  namespace JSXElements {
    export interface CubTitleAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;