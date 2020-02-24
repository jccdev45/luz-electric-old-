import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Navbar, Nav } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
      <Navbar.Brand as={AniLink} cover duration={0.5} bg="#070f38" to="/">
        <Img fluid={query.logo.childImageSharp.fluid} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <AniLink cover duration={0.5} bg="#070f38" to="/">
            HOME
          </AniLink>
          <AniLink cover duration={0.5} bg="#070f38" to="/services">
            SERVICES
          </AniLink>
          <AniLink cover duration={0.5} bg="#070f38" to="/gallery">
            GALLERY
          </AniLink>
          <AniLink cover duration={0.5} bg="#070f38" to="/about-us">
            ABOUT
          </AniLink>
          <AniLink cover duration={0.5} bg="#070f38" to="/contact">
            CONTACT
          </AniLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
