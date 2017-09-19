import React from 'react'
import * as PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

let touched = false

const normalCard = (info: {
  id: number,
  title: string,
  location: string,
  link: string,
  address: string,
  time?: string,
}) =>
  <div
    style={{
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    }}
  >
    <a href={`${info.link}`} style={{ color: 'grey' }}>
      <h3 style={{ color: 'grey' }}>
        {info.location}
      </h3>
      <p style={{ color: 'grey' }}>
        {info.address}
      </p>
    </a>
    {!!info.time &&
      <p style={{ color: 'grey', paddingTop: '10px' }}>
        Hora: {info.time}
      </p>}
  </div>

const contactCard = (info: {
  id: number,
  title: string,
  her: number,
  his: number,
}) =>
  <div>
    <p style={{ color: 'grey' }}>
      Mariana: {info.her}
    </p>
    <p style={{ color: 'grey' }}>
      Hugo: {info.his}
    </p>
  </div>

export default class Item extends React.Component {
  constructor() {
    super()
    this.state = {
      hovering: false,
      width: '0',
      height: '0',
    }
  }

  componentDidMount() {
    this.windowWidth = window.innerWidth
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const info = this.props.info
    return (
      <div>
        <h1>
          {info.title}
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: this.state.width > 750 ? `row` : `column`,
            position: `relative`,
            overflow: `hidden`,
          }}
        >
          <img
            onTouchStart={() => console.log('I just pressed you')}
            style={{
              overflow: `hidden`,
              width: '100%',
              height: '40%',
            }}
            src={require(`../data/${this.props.image}.jpg`)}
          />
          <div
            style={{
              flexDirection: 'column',
              color: 'black',
              justifyContent: `flex-start`,
              alignItems: 'center',
              fontSize: 20,
              padding: 10,
              width: '100%',
            }}
          >
            {info.id === 0 && normalCard(info)}
            {info.id === 1 && normalCard(info)}
            {info.id === 2 && contactCard(info)}
          </div>
        </div>
      </div>
    )
  }
}
