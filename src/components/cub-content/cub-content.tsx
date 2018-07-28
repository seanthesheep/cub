import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cub-content',
  styleUrl: 'cub-content.css',
  shadow: true
})
export class CubContent {
    @Prop() padding: boolean;
    render(){
        if(!this.padding){
            return(
                <div id="cubContent">
                <slot/>
                </div>
            );
        } else {
            return(
                <div id="cubContent" class="padding">
                <slot />
                </div>
            );
        }
    }
}