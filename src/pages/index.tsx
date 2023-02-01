import Link from "next/link";
import Layout from "../components/Layout";
import ShopifyError from "../utils/error-classes/ShopifyError";

// Create a custom error message

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    <button
      type="button"
      onClick={() => {
        throw new ShopifyError("Sentry Frontend Error");
      }}
    >
      Throw error
    </button>
  </Layout>
);

export default IndexPage;
