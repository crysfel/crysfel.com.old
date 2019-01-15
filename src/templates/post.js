import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const disqusShortname = 'crysfel';

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const disqusConfig = {
      identifier: `${post.wordpress_id} http:\/\/crysfel.com\/?p=${post.wordpress_id}`,
      postId: post.wordpress_id,
      title: post.title,
    }

    console.log(disqusConfig);

    return (
      <Layout>
        <div className="container">
          <div className="flex">
            <div className="md:w-2/3">
              <h1 className="my-6 text-4xl lg:text-5xl" dangerouslySetInnerHTML={{ __html: post.title }} />
              <div className="text-content" dangerouslySetInnerHTML={{ __html: post.content }} />
              <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
          </div>
        </div>
        {post.acf &&
          post.acf.page_builder_post &&
          post.acf.page_builder_post.map((layout, i) => {
            if (layout.__typename === `WordPressAcf_image_gallery`) {
              return (
                <div key={`${i} image-gallery`}>
                  <h2>ACF Image Gallery</h2>
                  {layout.pictures.map(({ picture }) => {
                    const img = picture.localFile.childImageSharp.fluid
                    return (
                      <Img
                        key={img.src}
                        fluid={img}
                      />
                    )
                  })}
                </div>
              )
            }
            if (layout.__typename === `WordPressAcf_post_photo`) {
              const img = layout.photo.localFile.childImageSharp.fluid
              return (
                <div key={`${i}-photo`}>
                  <h2>ACF Post Photo</h2>
                  <Img
                    src={img.src}
                    fluid={img}
                  />
                </div>
              )
            }
            return null
          })}
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      wordpress_id
      slug,
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`