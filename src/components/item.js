import React from 'react'
import * as PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'
// import

export default class Item extends React.Component {
  render() {
    return (
      <Link
        to={`/${this.props.image}`}
        onTouchStart={() => console.log('I just pressed you')}
        onMouseEnter={() => console.log('HELLOOOOO')}>
        <div>
          <img
            onTouchStart={() => console.log('I just pressed you')}
            style={{
              boxShadow: '0 0 5px #999999',
            }}
            src={require(`../data/${this.props.image}.jpg`)}
          />
        </div>
      </Link>
    )
  }
}
