import Link from "next/link";
import { Layout } from "../modules/layout";

function About(): JSX.Element {
    return (
        <Layout title="About | Next.js + TypeScript Example">
            <p>This is the about page</p>
            <p>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </p>
        </Layout>
    );
}

export default About;
