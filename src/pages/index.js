import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Checkout from '../components/checkout'

// https://cdni.iconscout.com/illustration/premium/thumb/creative-team-5-955545.png

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <h3>Hi, we are teamxearth 👋 </h3>
      <h1>We build software MVPs that users love because its good for them and Earth.</h1>
      <h2>An on-demand remote team and teams of team of developers combining the fields of strategy, design and software engineering. We make sure the best tools and techniques are used to deliver impact and value to users.</h2>
      <p>We get to work in 3 ways:
        <li>retain a teamxearth team for your monthly development needs</li>
        <li>project-based development</li>
        <li>incubate a startup idea</li>
      </p>
      <Checkout />
      <StaticImage
        alt="teamxearth"
        src="../images/Teams.png"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage