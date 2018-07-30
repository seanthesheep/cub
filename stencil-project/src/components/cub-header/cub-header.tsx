import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'cub-header',
  styleUrl: 'cub-header.css',
  shadow: true
})
export class CubHeader {

  @Prop() color: string;
  @Prop() fixed: boolean;


  render() {
    if(this.color === 'primary') {
      return (
        <div id="cubHeader" class="primary">
          <slot />
        </div>
      );
    } else if(this.color === 'secondary') { 
      return (
        <div id="cubHeader" class="secondary">
          <slot />
        </div>
      );
    }
    else if (this.color === 'dark') { 
      return(
        <div id="cubHeader" class="dark">
          <slot />
        </div>
      );
    } else {
      return(
        <div id="cubHeader" class="normal">
          <slot />
        </div>
      );
    }
  }

}
