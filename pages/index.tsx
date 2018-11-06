import Link from "next/link";
import { Layout } from "../modules/layout";

function Index(): JSX.Element {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Hello Next.js 👋</h1>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
        </Layout>
    );
}

export default Index;
