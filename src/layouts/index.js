import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import CameraIcon from 'react-icons/lib/fa/camera-retro'
import { rhythm, scale } from '../utils/typography'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  componentDidMount() {
    // Cache the window width.
    this.windowWidth = window.innerWidth
  }

  render() {
    let isModal = false
    if (
      this.props.location.pathname !== `/` &&
      this.props.location.pathname !== `/about/` &&
      this.windowWidth > 750
    ) {
      isModal = true
    }
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
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `${rhythm(3 / 4)} ${rhythm(3 / 4)}`,
              paddingBottom: `${rhythm(0)}`,
            }}
          >
            <h1
              style={{
                margin: 0,
                padding: `${rhythm(3 / 4)}`,
                ...scale(4 / 5),
                lineHeight: 1,
                margin: 0,
                overflow: `hidden`,
              }}
            >
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <CameraIcon
                  style={{
                    top: -4,
                    display: `inline-block`,
                    position: `relative`,
                  }}
                />
                <span
                  style={{
                    paddingLeft: `calc(${rhythm(1 / 2)} - 1px)`,
                    borderLeft: `1px solid white`,
                    lineHeight: 1,
                    marginLeft: rhythm(1 / 2),
                  }}
                >
                  Mariana e Hugo
                </span>
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${rhythm(0)} ${rhythm(4 / 5)}`,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
