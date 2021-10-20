import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact">
        <p>Contact form goes here</p>
      <Link to="/">Back to Home</Link>
    </Layout>
    )
}

export default ContactPage
