import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Navbar, Nav } from "react-bootstrap";
// import AniLink from "gatsby-plugin-transition-link/AniLink";

const ROUTES = [
  { id: 1, name: "HOME", path: "/" },
  { id: 2, name: "SERVICES", path: "/services" },
  // { id: 3, name: "GALLERY", path: "/gallery" },
  { id: 4, name: "CONTACT", path: "/contact" },
];

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

  const renderRoutes = () => {
    return ROUTES.map((route) => (
      <Link key={route.id} to={route.path}>
        {route.name}
      </Link>
    ));
  };

  return (
    <Navbar expand="sm" fixed="top">
      <Navbar.Brand as={Link} to="/">
        <Img fluid={query.logo.childImageSharp.fluid} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>{renderRoutes()}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
