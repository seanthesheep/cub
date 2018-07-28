import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cub-fab',
  styleUrl: 'cub-fab.css',
  shadow: true
})
export class CubFab {
    @Prop() color: string;

    render() {
        if(this.color === 'primary') {
            return (
            <div id="cubFab" class="primary">
                <slot />
            </div>
            );
        } else if(this.color === 'secondary') { 
            return (
            <div id="cubFab" class="secondary">
                <slot />
            </div>
            );
        }
        else if (this.color === 'dark') { 
            return(
            <div id="cubFab" class="dark">
                <slot />
            </div>
            );
        } else {
            return(
            <div id="cubFab" class="normal">
                <slot />
            </div>
            );
        }
    }
}
