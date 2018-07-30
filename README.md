# Cub
![alt](https://cub-pwa.firebaseapp.com/images/icons/icon-180x180.png)
### Reusable UI Components

A collection of web components designed for fast markup and responsive design for websites and UI. The components were built using [Stencil](https://stenciljs.com/docs/introduction/) and can be editied in the projects "stencil-project" folder.

Simply download or clone this project and include the cub folder in your project's source directory. Load it in like a script `<script src="cub/cub.js">`.

### Components:
`<cub-header>`
`<cub-title>`
`<cub-content>`
`<cub-sidenav>`
`<cub-button>`
`<cub-fab>`
`<cub-card>`

### Colors:
primary
secondary
dark

### Example markup

```<html>
  <head>
    <script src="cub/cub.js">
  </head>
  <body>
    <cub-header color="secondary" fixed="true">
        <cub-title>Title</cub-title>
      <cub-sidenav>
        <a href="#">test</a>
      </cub-sidenav>
    </cub-header>
    <cub-content padding>
      <h1>heading</h1>
      <p>paragraph</p>
   
      <cub-card padding>
        <p>a card with some padding</p>
        <p>Mollitia nesciunt voluptatem provident est facilis nihil. Odit ullam maiores sit libero numquam optio. Debitis consequatur non est praesentium. At ut voluptatem earum. Corrupti voluptas voluptatem harum ratione sit voluptatibus eveniet. Quia et ab corrupti porro sint quibusdam commodi.</p>
        <cub-button color="primary">
          Button
        </cub-button>
      </cub-card>
      
      <cub-button color="secondary">
        Button 2
      </cub-button>
      <cub-button color="dark">
      Button dark
      </cub-button>
      <cub-fab color="primary"></cub-fab>
    </cub-content>
  </body>
 </html>
```
