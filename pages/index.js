import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {


  return (
    <>
      <Head>
        <title>Arten Guinee</title>
      </Head>

      <ul>
        {posts.map(post => <li>
            <h4> {post.title} </h4>
        </li>
        )}
      </ul>
    </>
  )
}


export async function getStaticProps(){
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    .then(r => r.json())
  return {
    props: {
      posts
    }
  }
}
