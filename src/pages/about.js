// Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Define Component
const AboutPage = () => {
    return (
        <Layout pageTitle="About">
          <p>Hai, I'm an awsome not web-developer doing web development... but maybe I'll discover something cool</p>
        </Layout>
      )
}

// Metadata Build
export const Head = () => <Seo title="About Me" />

// Export constents
export default AboutPage