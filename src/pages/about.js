import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTile="About">
      <title>About</title>
      <h1>About</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <Link to="/">Back to Home</Link>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage