import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import Overview from "../components/Home/Overview";
import Mission from "../components/Home/Mission";
import Estimate from "../components/Home/Estimate";
import Testimonial from "../components/Home/Testimonial";
import Footer from "../components/Home/Footer";
import Layout from "../utils/Layout";
import { theme } from "../styles/theme";
import "../styles/custom.scss";

export default () => {
  const query = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "img/banner.jpg" }) {
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
      carousel: allFile(filter: { relativeDirectory: { eq: "img/carousel" } }) {
        nodes {
          childImageSharp {
            fluid(fit: CONTAIN, maxWidth: 250, maxHeight: 250, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Container className="app p-0" fluid>
        <Layout>
          <Hero img={query.banner.childImageSharp.fluid} />
          <Overview img={query.overview.nodes} />
          <Mission />
          <Estimate img={query.carousel.nodes} />
          <Testimonial />
          <Footer />
        </Layout>
      </Container>
    </ThemeProvider>
  );
};
