import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt} 
            />
            <p>
                Photo Credit:{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
    console.log({data})
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
  
`

// {
//     "data": {
//       "allMdx": {
//         "edges": [
//           {
//             "node": {
//               "id": "b5a33810-1c1b-59d0-913a-5d3ad9300e0f"
//             }
//           },
//           {
//             "node": {
//               "id": "7e0c919c-cd9a-5865-9915-14b9034819cd"
//             }
//           },
//           {
//             "node": {
//               "id": "3a04b248-409d-59f3-a469-3073a6e52ac7"
//             }
//           }
//         ]
//       }
//     },
//     "extensions": {}
//   }


export default BlogPost