import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Hero from './hero'
import Navigation from './navigation'
import Footer from './footer'
import '../assets/css/style.css'

// data.site.siteMetadata.title

const Layout = ({ children, hero }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <div className="container">
          <Navigation />
          { hero && <Hero /> }
        </div>
        {children}
        <Footer />
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hero: PropTypes.bool,
}

export default Layout
