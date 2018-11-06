import * as React from "react";
import Link from "next/link";
import Head from "next/head";

interface Props {
    title?: string;
    children: React.ReactNode;
}

export function Layout(props: Props): JSX.Element {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>{" "}
                    |{" "}
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>
            </header>
            {props.children}
            <footer>I'm here to stay</footer>
        </div>
    );
}
