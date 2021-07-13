import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"

const data = ({ data }) => 


<Layout>

  <pre>
    {JSON.stringify(data, null, 4)}
  </pre>

  <Seo title="Home" />
  <h1>My WordPress Blog</h1>

</Layout>



export const query = graphql`
  {
    allWpPost {
      posts {
        nodes {
          id
          title
          excerpt
          slug
          date
        }
      }
    }
  }
`

export default data;


// const IndexPage = () => (
  // <Layout>
  //   <Seo title="Home" />
  //   <h1>My WordPress Blog</h1>
  //     <h4>Posts</h4>
  //     {data.allWpPost.posts.map(({ node }) => (
  //       <div>
  //         <p>{node.title}</p>
  //         <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
  //       </div>
  //     ))}
  //   <StaticImage
  //     src="../images/gatsby-astronaut.png"
  //     width={300}
  //     quality={95}
  //     formats={["AUTO", "WEBP", "AVIF"]}
  //     alt="A Gatsby astronaut"
  //     style={{ marginBottom: `1.45rem` }}
  //   />
  //   <p>
  //     <Link to="/page-2/">Go to page 2</Link> <br />
  //     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  //   </p>
  // </Layout>
// )

// export default IndexPage
