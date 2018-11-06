import * as React from "react";
// import Link from "next/link";
import Head from "next/head";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./layout.scss";


interface Props {
    title?: string;
    children: React.ReactNode;
}

export function Layout(props: Props): JSX.Element {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CssBaseline />
            <div className="layout">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Album layout
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>{props.children}</main>
                <footer>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
            </div>
        </>
    );
}
