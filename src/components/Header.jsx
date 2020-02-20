import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  const query = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "img/logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Navbar expand="sm" sticky="top">
      <Navbar.Brand href="/">
        <Img fluid={query.logo.childImageSharp.fluid} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/services">SERVICES</Nav.Link>
          <Nav.Link href="/gallery">GALLERY</Nav.Link>
          <Nav.Link href="/about-us">ABOUT</Nav.Link>
          <Nav.Link href="/contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
