import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cub-button',
  styleUrl: 'cub-button.css',
  shadow: true
})
export class CubButton {
    @Prop() color: string;

    render() {
        if(this.color === 'primary') {
            return (
            <div id="cubButton" class="primary">
                <slot />
            </div>
            );
        } else if(this.color === 'secondary') { 
            return (
            <div id="cubButton" class="secondary">
                <slot />
            </div>
            );
        }
        else if (this.color === 'dark') { 
            return(
            <div id="cubButton" class="dark">
                <slot />
            </div>
            );
        } else {
            return(
            <div id="cubButton" class="normal">
                <slot />
            </div>
            );
        }
    }
}
