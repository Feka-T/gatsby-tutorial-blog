import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/SEO";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Gatsby site!">
      {/* <h1>Welcome to my Gatsby site!</h1> */}
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/E1oMV3QVgAIr1NT.webp"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;
// export const Head = ({ data }) => <title>{data.site.siteMetadata.title}</title>;

export default IndexPage;
