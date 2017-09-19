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
        <h2>Capela de São Miguel</h2>
        <img src={require(`../data/capela-sao-miguel.jpg`)} />
        <blockquote style={{ borderLeft: '10px solid lightgrey' }}>
          <p style={{ marginLeft: '10px', fontSize: '15px' }}>
            A Capela de São Miguel é uma capela da Universidade de Coimbra
            construída entre os séculos XVI e XVIII. Pertence ao conjunto
            arquitetónico do Paço das Escolas, núcleo histórico da Universidade
            de Coimbra, estando por isso classificada como Monumento Nacional
            (desde 1910) e inscrita na listagem de Património Mundial da UNESCO
            (desde junho de 2013).
          </p>
        </blockquote>
        <h4>Localização</h4>
        <p>R. Dr. Guilherme Moreira 10, 3000-210 Coimbra, Portugal</p>
      </div>
    )
  }
}
