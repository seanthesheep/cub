// cub: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './cub.core.js';
import {
  CubButton,
  CubCard,
  CubContent,
  CubFab,
  CubHeader,
  CubSideNav,
  CubTitle
} from './cub.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    CubButton,
    CubCard,
    CubContent,
    CubFab,
    CubHeader,
    CubSideNav,
    CubTitle
  ], opts);
}