import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";
import { theme } from "../styles/theme";
import Layout from "../utils/Layout";

export default () => {
  // const query = useStaticQuery(graphql`
  //   query {
  //     banner: file(relativePath: { eq: "img/services/banner.jpg" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <ThemeProvider theme={theme}>
      <Container className="p-0" fluid>
        <Layout>
          Hi
        </Layout>
      </Container>
    </ThemeProvider>
  );
};
