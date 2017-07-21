import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { rhythm, scale } from '../utils/typography'
import FaGlass from 'react-icons/lib/fa/glass'

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
            background: `black`,
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
                // position: 'absolute',
              }}>
              <h1
                css={{
                  ...scale(4 / 5),
                  lineHeight: 1,
                  margin: 0,
                  overflow: `hidden`,
                }}>
                <Link
                  to="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    textShadow: '0 1px 5px grey',
                  }}>
                  <FaGlass style={{ color: 'white' }} />
                  <span
                    css={{
                      paddingLeft: `calc(${rhythm(1)} - 1px)`,
                      borderLeft: `1px solid rgba(0,0,0,0.3)`,
                      lineHeight: 1,
                      marginLeft: rhythm(1),
                    }}>
                    Mariana e Hugo
                  </span>
                </Link>
              </h1>
            </h1>
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
