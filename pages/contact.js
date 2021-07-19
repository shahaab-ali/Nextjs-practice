import Head from 'next/head'
import Link from 'next/link'
export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <h1>Contact Page</h1>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/services"><a>Services</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
            </ul>
        </>
    )
}