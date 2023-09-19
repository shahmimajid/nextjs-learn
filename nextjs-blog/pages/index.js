import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm a tech-savvy professional with a passion for transforming the intersection of technology and finance. With expertise in DevOps, Cloud, IoT, and Unit Trust Consulting, I specialize in creating seamless and efficient solutions that drive business growth.</p>
        <p>With a knack for streamlining processes and leveraging innovative solutions, I help businesses achieve growth by seamlessly integrating technology and financial strategies</p> 
        <p>Let's collaborate to unlock the potential of your organization and drive success through effective and efficient solutions.</p>
      </section>
    </Layout>
  );
}