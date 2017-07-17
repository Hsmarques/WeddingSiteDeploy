import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Casamento Mariana e Hugo"
          meta={[
            { name: 'description', content: 'Casamento' },
            { name: 'keywords', content: 'Casamento, wedding' },
          ]}
        />
        <div
          style={{
            background: `white`,
            marginBottom: rhythm(1),
          }}>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              // maxHeight: 960,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
              paddingBottom: `${rhythm(0)}`,
            }}>
            <h1
              style={{
                margin: 0,
                padding: `${rhythm(3 / 4)}`,
                position: 'absolute',
              }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  textShadow: '0 1px 5px #000000',
                }}>
                Mariana e Hugo
              </Link>
            </h1>
            <img src={require('../data/background-image-crop2.jpg')} />
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${rhythm(0)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}>
          {this.props.children()}
        </div>
      </div>
    )
  }
}
