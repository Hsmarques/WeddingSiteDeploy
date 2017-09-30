import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Item from '../components/item'

const info = [
  {
    id: 0,
    title: `Cerimónia`,
    location: `Capela de São Miguel`,
    link: `https://www.google.co.uk/maps/place/Chapel+of+S%C3%A3o+Miguel/@40.2074163,-8.426452,15z/data=!4m2!3m1!1s0x0:0x4235c0fc62ea0902?sa=X&ved=0ahUKEwiY6NOrxJHWAhUnDcAKHRm7D4kQ_BIIiAEwDw`,
    address: `R. Dr. Guilherme Moreira 10, 3000-210 Coimbra, Portugal`,
    time: `11:30 am`,
  },
  {
    id: 1,
    title: `Quinta`,
    location: `Quinta da Couceira`,
    link:
      'https://www.google.com/maps/place/Quinta+da+Couceira/@40.2824301,-8.6168047,17z/data=!3m1!4b1!4m5!3m4!1s0xd225302fb1fe38b:0xe232ee3383167516!8m2!3d40.282426!4d-8.614616?hl=en-US',
    address: `R. Central Norte, 3060-101 CADIMA, Portugal`,
  },
  {
    id: 2,
    title: `Contactos`,
    her: `910307508`,
    his: `07429544594`,
  },
]

export default class Index extends React.Component {
  render() {
    return (
      <div
        style={{
          display: `flex`,
          justifyContent: 'space-between',
          flexDirection: `column`,
          maxWidth: 960,
        }}
      >
        <Item
          info={info[0]}
          page={`igreja`}
          modalText={`Cerimónia`}
          image={'capela-sao-miguel'}
        />
        <div
          style={{ borderBottom: '1px solid lightgrey', marginBottom: '15px' }}
        />
        <Item
          info={info[1]}
          page={`quinta`}
          modalText={`Quinta`}
          image={'quinta'}
        />
        <div
          style={{ borderBottom: '1px solid lightgrey', marginBottom: '15px' }}
        />
        <Item
          info={info[2]}
          page={false}
          modalText={`Contactos`}
          image={'ele-e-ela'}
        />
      </div>
    )
  }
}
