import React from "react";
import Layout from "../utils/Layout";
import Hero from "../components/Hero";

import "../styles/styles.css";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const banner = useStaticQuery(graphql`
    query {
      file(relativeDirectory: { eq: "img" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="app col">
      <Layout>
        <Hero img={banner.file.childImageSharp.fluid} />
      </Layout>
    </div>
  );
};
