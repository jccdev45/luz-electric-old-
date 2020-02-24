import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import { theme } from "../styles/theme";
import Layout from "../utils/Layout";
import Intro from "../components/Services/Intro";
import Overview from "../components/Home/Overview";
import Safety from "../components/Services/Safety";

export default () => {
  const query = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "img/services/banner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      overview: allFile(filter: { relativeDirectory: { eq: "img/overview" } }) {
        nodes {
          childImageSharp {
            fixed(width: 62, height: 62) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Container className="p-0" fluid>
        <Layout>
          <Hero img={query.banner.childImageSharp.fluid} />
          <Intro />
          <Overview img={query.overview.nodes} />
          <Safety />
        </Layout>
      </Container>
    </ThemeProvider>
  );
};
