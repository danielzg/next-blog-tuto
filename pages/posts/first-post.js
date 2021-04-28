import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost(){
    return (
    <Layout>

        <Head>
            <title>First Post</title>
        </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <Image
            src="/profile.jpg"
            height={120}
            width={120}
            alt="Utilizando Image"
            objectFit="cover"
            />
            <img src="/profile.jpg" alt="Testando folder public" />
        
    </Layout>
    )
}