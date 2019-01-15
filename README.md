# Crysfel.com
This is the code for my main website. I'm using [Gatsby](https://www.gatsbyjs.org/docs/) to build the front-end and [Tailwind](https://tailwindcss.com/docs/what-is-tailwind/) to handle the css.

The data comes from my original wordpress blog, I'm still using the backend to write content and pull the data to the  local grahpql. This script also pulls data from Medium, and render the links to the appropiate post. The idea is that this blog contains all my content from all other platforms.

## Installing
Just install the dependencies and run the development server.

```
$ yarn install
$ yarn develop
```

## TODO
- [x] Landing page
- [ ] A page to display all published posts with pagination
- [x] A page to display a single post
- [ ] Project page to show project details, images, link to demo/buy/download.
- [ ] About page with contact information
- [ ] Adding an `.env` file to set the wordpress/medium urls where the data will come from.
- [ ] Portfolio section in landing page

## Resources
* [Gatsby documentation](https://www.gatsbyjs.org/docs/)
* [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)

## License
[MIT](https://github.com/taylorbryant/gatsby-starter-tailwind/blob/master/LICENSE.md)
