import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Item from '../components/item'

export default class Index extends React.Component {
  render() {
    return (
      <div
        style={{
          display: `flex`,
          alignItems: `stretch`,
          flexShrink: 0,
          flexDirection: `column`,
          maxWidth: 960,
        }}>
        {/* <Link style={{ textDecoration: 'none' }} to="/igreja/">
          Local da Cerimónia
        </Link> */}
        <Item image={'capela-sao-miguel'} />
        <Item image={'quinta-da-couceira'} />
        <Item image={'ele-e-ela'} />
      </div>
    )
  }
}
