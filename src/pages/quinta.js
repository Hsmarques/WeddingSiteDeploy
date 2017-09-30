import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Link style={{ color: 'grey', marginBottom: '5px' }} to="/">
          Home
        </Link>
        <h2>Quinta da Couceira</h2>
        <img src={require(`../data/quinta.jpg`)} />
        <blockquote style={{ borderLeft: '5px solid #eaecef' }}>
          <p style={{ marginLeft: '10px', fontSize: '15px' }}>
            A beleza natural da paisagem e um património cultural rico em
            história são a essência da Quinta da Couceira. O ar puro, os aromas
            em cada estação, a tranquilidade, o contacto com a natureza e a vida
            simples do campo convidam à realização de um evento de sonho.
          </p>
        </blockquote>
        <h4>Localização</h4>
        <p style={{ marginLeft: '20px' }}>
          <a
            href={`https://www.google.com/maps/place/Quinta+da+Couceira/@40.2824301,-8.6168047,17z/data=!3m1!4b1!4m5!3m4!1s0xd225302fb1fe38b:0xe232ee3383167516!8m2!3d40.282426!4d-8.614616?hl=en-US`}
            style={{ color: 'grey' }}
          >
            Rua Central Norte, Cadima 3060-101 Cantanhede, Coimbra
          </a>
        </p>
      </div>
    )
  }
}
