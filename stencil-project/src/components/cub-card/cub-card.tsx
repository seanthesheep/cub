import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cub-card',
  styleUrl: 'cub-card.css',
  shadow: true
})
export class CubCard {
    @Prop() padding: boolean;
    render(){
        if(!this.padding){
            return(
                <div id="cubCard">
                <slot/>
                </div>
            );
        } else {
            return(
                <div id="cubCard" class="padding">
                <slot />
                </div>
            );
        }
    }
}