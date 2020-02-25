import React from "react";
import { Header } from "../components/Header";
import { createGlobalStyle } from "styled-components";

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
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
