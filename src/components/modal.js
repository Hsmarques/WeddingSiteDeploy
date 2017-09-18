import React from 'react'
import * as PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'
import GoogleMapReact from 'google-map-react'

import { rhythm } from '../utils/typography'

const AnyReactComponent = ({ text }) =>
  <div
    style={{
      color: 'blue',
      height: '13px',
      width: '13px',
      // borderCornerShape: 'bevel',
      borderRadius: '50%',
      backgroundColor: '#029dd9',
    }}
  />

export default class MapContainer extends React.Component {
  static defaultProps = {
    zoom: 12,
  }

  render() {
    const coord = this.props.center
    console.log({ coord })
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent lat={coord.lat} lng={coord.lng} />
      </GoogleMapReact>
    )
  }
}
