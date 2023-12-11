import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <p>
        Document Credit:{" "}
        <a
          href="https://www.gatsbyjs.com/docs/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.gatsbyjs.com/docs/
        </a>
      </p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <Seo title="About Me" />
    <meta name="description" content="Your description" />
  </>
);

export default AboutPage;
