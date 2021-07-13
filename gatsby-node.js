/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// const path = require(`path`)
// const { slash } = require(`gatsby-core-utils`)
// const { data } = require("dom7")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // query content for WordPress posts
//   const {
//     data: {
//       allWpPost: { nodes: allPosts },
//     },
//   } = await graphql(`
//   query MyQuery {
//     allWpPost {
//       posts {
//         nodes {
//           id
//           title
//           excerpt
//           slug
//           date
//         }
//       }
//     }
//   }
  
//   `)

//   const postTemplate = path.resolve(`./src/templates/post.js`)


  
//   data.allWpPost.pages.nodes.forEach(post => {
//     createPage({
//       // will be the url for the page
//       path: post.uri,
//       // specify the component template of your choice
//       component: slash(postTemplate),
//       // In the ^template's GraphQL query, 'id' will be available
//       // as a GraphQL variable to query for this post's data.
//       context: {
//         id: post.id,
//       },
//     })
//   })
// }