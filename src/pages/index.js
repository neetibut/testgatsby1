import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// https://cdni.iconscout.com/illustration/premium/thumb/creative-team-5-955545.png

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <title>TeamXEarth</title>
      <h1>Hi, we're teamxearth</h1>
      <p>We build software MVPs that users love because its good for them and Earth.</p>
      <h2>An on-demand remote team and teams of team of developers combining the fields of strategy, design and software engineering. We know modern and best in class tools for fast and secure development projects.</h2>
      <p>We get to work in 3 ways
        <li>retain a teamxearth team for your monthly development needs</li>
        <li>project-based development</li>
        <li>incubate a startup idea</li>
      </p>
      <StaticImage
        alt="teamxearth"
        src="../images/Teams.png"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage