import React from 'react'
import Layout from '../shared/layout'
import Hero from '../Hero/Hero'
import Mainsection from '../main-section/main-section'
import FeaturedCollection from '../FeaturedCollection/featuredCollection'

const Home = () => {
    return(
        <>
          <Layout>
              <Hero />
              <Mainsection />
              <FeaturedCollection />
          </Layout>
        
        </>
    )
}

export default Home 