import React from 'react'
import * as PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

let touched = false

export default class Item extends React.Component {
  constructor() {
    super()
    this.state = {
      hovering: false,
    }
  }
  render() {
    return (
      <div
        // style={{
        //   display: `block`,
        //   backgroundColor: `lightgray`,
        //   flex: `1 0 0%`,
        //   marginRight: rhythm(1 / 8),
        //   width: `100%`,
        //   maxWidth: 290.1,
        //   position: `relative`,
        //   // [presets.Tablet]: {
        //   //   marginRight: rhythm(1),
        //   // },
        //   ':last-child': {
        //     marginRight: 0,
        //   },
        // }}
        // to={`/${this.props.image}`}
        onTouchStart={() => console.log('touched me')}
        onMouseEnter={() => {
          if (!touched) {
            this.setState({ hovering: true })
          }
        }}
        onMouseLeave={() => {
          if (!touched) {
            this.setState({ hovering: false })
          }
        }}>
        <div
          // onMouseEnter={() => }
          style={{
            flexDirection: `column`,
            flexShrink: 0,
            position: `relative`,
            // paddingBottom: `100%`,
            overflow: `hidden`,
          }}>
          <img
            onTouchStart={() => console.log('I just pressed you')}
            style={{
              boxShadow: '0 0 5px #999999',
              // overflow: `hidden`,
            }}
            src={require(`../data/${this.props.image}.jpg`)}
          />
          {this.state.hovering &&
            <div
              style={{
                position: `absolute`,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: `rgba(0,0,0,0.3)`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                color: `white`,
                // ...scale(2 / 5),
              }}>
              hello
            </div>}
        </div>
      </div>
    )
  }
}
