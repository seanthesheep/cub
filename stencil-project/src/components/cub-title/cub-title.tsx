import { Component } from '@stencil/core';

@Component({
  tag: 'cub-title',
  styleUrl: 'cub-title.css',
  shadow: true
})
export class CubTitle {
    render(){
        return(
            <div id="cubTitle">
                <h1><slot/></h1>
            </div>
        );
    }
}