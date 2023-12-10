import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page not found">
      <p>Sorry 😔, we couldn’t find what you were looking for.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Not Found" />;
