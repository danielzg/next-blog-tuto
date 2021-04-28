import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Daniel and I've worked in web develloper about 5 year. 
          And now I'm studding frontend Next frameWork to increase my skills</p>
        
      </section>
    </Layout>
  )
}