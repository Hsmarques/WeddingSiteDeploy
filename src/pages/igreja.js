import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Cerimónia</h1>
        <p>Capela de São Miguel</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
