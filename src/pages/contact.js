import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { theme } from "../styles/theme";
import Layout from "../utils/Layout";
import Hours from "../components/Contact/Hours";
import ContactForm from "../components/Contact/Form";

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
          <Container>
            <Row>
              <Col md={12}>
                <Hours />
              </Col>
              <Col md={12}>
                <ContactForm />
              </Col>
            </Row>
          </Container>
        </Layout>
      </Container>
    </ThemeProvider>
  );
};
