import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";
import { theme } from "../styles/theme";
import Layout from "../utils/Layout";
import Hero from "../components/Hero";

export default () => {
  const query = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "img/about/luz-wiring.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
          <Container>
            <h1>OUR TEAM</h1>
            <p>
              Established in 2002, Luz Electric & Control Systems Inc. takes
              pride in employing some of the best industrial, residential, and
              commercial electricians and project managers which have over 40
              years of experience with all types of electrical wiring and
              communication systems. This includes professional experience with
              installations, repairs, maintenance of electrical systems, fire
              protection, and security. As prime and subcontractors, we
              specialize in new residential housing projects, industrial
              facilities, alterations, building automation systems, and HVAC
              controls. Luz Electric & Control Systems Inc. offers and provides
              a wide range of multiple electrical services. No matter how big or
              how small, we focus on quality and customer satisfaction.
            </p>
          </Container>
        </Layout>
      </Container>
    </ThemeProvider>
  );
};
