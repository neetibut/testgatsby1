import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
        <p>Hi there! I'm actuallly just another homo sapien trying to make the best use of my time alive. That said, I'm also a full stack software developer, building MVP and proof-of-concept phase web and mobile applications that works and are ready to scale.</p>
        <p>I work on projects that are good to humans and Earth. And I make sure that when it comes to software development, we are standing on the shoulders of giants.</p>
        <p>My academic training and research includes a bachelor and master degrees in Medical Engineering, Data Science and Artificial Intelligence from the University of London at Queen Mary and Goldsmith.
           Before switching to full-time coder, I was a founder of a-now-sunsetted food & tech startup based in Old Street (London, UK). This venture was acquired for a 7-figure GBP valuation in 2015 and provided me with a decade-long and an incredibly powerful and unique life experience.</p>
        <p>Nowadays, I am a lifelong learner and practiioner in better programming, smarter money and infinite kindness.</p>
        <p>Through the pains and joys of life, I have been inspired to start TeamXEarth, serving as the founder and Chief Engineer.</p>
        <p>TeamXEarth is an on-demand remote team of teams of developers from the fields of strategy, design and software engineering, unified by doing the right thing and the relentless pursuit for improved life experiences.</p>
        <p>I enjoy building and iterating better products for my users and offer consultancy services and partnerships to like minded leaders and businesses.</p>
        <StaticImage
        alt="neetibut profile photo"
        src="../images/nv-small.jpeg"
        width={"400"}
      />
      <br />
      <Link 
        to="/"
      >Back to Home</Link>
    </Layout>
  )
}

export default AboutPage