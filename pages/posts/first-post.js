import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
export default function firstPost() {
  return (
    <Layout>
    <Head>
      <title>
      First post 
      </title>
    </Head>
    <h1>
      First post
    </h1>
    <h2>
      <Link href="/">
        <a  href="/">Back to home</a>
      </Link>
    </h2>
    </Layout>
  )
}
