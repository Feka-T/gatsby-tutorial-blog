/* 
Pro Tip: useStaticQuery lends itself really well when creating small, reusable React components. You can even create custom React hooks, for example:
*/

import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
