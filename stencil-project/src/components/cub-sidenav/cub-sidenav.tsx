import { Component } from '@stencil/core';

@Component ({
  tag: 'cub-sidenav',
  styleUrl: 'cub-sidenav.css',
  shadow: true
})

export class CubSideNav {

  openNav() {
    document.getElementById('cubSideNav').style.width = '60%';
    document.getElementById('bars').style.visibility = 'hidden';
  }
  closeNav() {
    document.getElementById('cubSideNav').style.width = '0';
    document.getElementById('bars').style.visibility = 'visible';
  }

  render() {
    return(
      <div>
      <div id="cubSideNav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
        <slot />
      </div>
      <div id="bars" onClick={this.openNav}>&#9776;</div>
      </div>
    );
  }
  
  
}