import Head from "next/dist/shared/lib/head";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Edulane'

export default function Layout({ children, title, description, home, blog }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta 
                    name="description" content={description}
                />
            </Head>

            <header className={styles.header}>
                {home ? (
                <>
                    <Image
                    priority
                    src="/img/1.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                    <a>
                        <Image
                        priority
                        src="/img/1.jpg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={name}
                        />
                    </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                    </h2>
                </>
                )}
            </header>
            <nav>
                <Link href="/">
                    <a>Inicio | </a>
                </Link>
                <Link href="/blog">
                    <a>Blog | </a>
                </Link>
                <Link href="/contact">
                    <a>Contact | </a>
                </Link>
                <Link href="/about">
                    <a>About | </a>
                </Link>
            </nav>

            <main>{children}</main>

            <footer>
                {home ? (
                    <>
                        {/* <Link href=''> */}
                            <a>Footer en Home</a>
                        {/* </Link> */}
                    </>
                ):
                (blog ? (
                        <>
                            <Link href='/blog'>
                                <a>Back to Blog</a>
                            </Link>
                        </>
                    ):
                    (
                        <>
                            <Link href='/'>
                                <a>← Back to Home</a>
                            </Link>
                        </>
                    )
                )}
            </footer>
        </div>
    );
}

Layout.defaultProps = {
    title: "Next.js | mi sitio web",
    description: "Descripcion de mi Sitio Web",
}