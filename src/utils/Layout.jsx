import React from "react";
import { Header } from "../components/shared/Header";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Footer from "../components/shared/Footer";
import { Container } from "react-bootstrap";

const GlobalStyles = createGlobalStyle`
  /* BASE */
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: white;
    height: 100vh;
    width: 100vw;
    text-rendering: optimizeLegibility;
    text-align: center;
    font-family: 'Roboto';
  }
  nav {
    background: ${({ theme }) => theme.primaryLight};
  }
  h2 {
    margin: 0;
  }
  p {
    margin-top: 0;
  }
  a {
    text-decoration: none;
  }
  footer {
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
  }

  /* LAYOUT */
  .row {
    display: flex;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .nowrap {
    flex-wrap: nowrap;
  }
  .jcc {
    justify-content: center;
  }
  .jcsb {
    justify-content: space-between;
  }
  .aic {
    align-items: center;
    padding: 1rem;
  }

  /* ELEMENTS */
  .carousel-container {
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
  }

  .footskis {
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
    padding: 3em;
  }

  .services-footer {
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
  }

  .about {
    padding: 8rem 4rem;
  }
`;

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container className="p-0" fluid>
				<main>{children}</main>
			</Container>
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;
