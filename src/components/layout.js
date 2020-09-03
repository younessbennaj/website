import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const StyledContainer = styled.div`
    height: 100vh;
    width: 100vw;
`

const StyledNavbar = styled.header`
    z-index: 10;
    background: royalblue;
    position: fixed;
    width: 100%;
    height: 7vh;
    box-sizing: border-box;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    @media screen and (max-width: 480px) {
        display: none;
    }

    nav {
        height: 100%;
        display: flex;
        align-items: center;

        @media screen and (max-width: 480px) {
            display: none;
        }
    }

    ul {
        box-sizing: border-box;
        list-style: none;
        width: max-content;
        height: max-content;
        padding: 0;
        margin: 0 auto;

        li {
            display: inline-block;
            padding: 0 0.5em;

            a {
                color: #fff;
                text-decoration: none;
                font-size: 1.2em;
                text-transform: capitalize;
            }

            a:hover {
                text-decoration: underline;
            }
        }

        
    }
`

// const StyledFooter = styled.footer`
//     background-color: lightgrey;
// `

const StyledMain = styled.main`
    height: 100vh;
    width: 100vw;
    padding-top: 7vh;
    box-sizing: border-box;

    @media screen and (max-width: 480px) {
        padding-top: 0;
    }
`

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <StyledContainer>
                <StyledNavbar>
                    <nav>
                        <ul>
                            <li><a href="#home">home</a></li>
                            <li><a href="#about">about</a></li>
                            <li><a href="#portfolio">portfolio</a></li>
                        </ul>
                    </nav>
                </StyledNavbar>
                <StyledMain>
                    {children}
                </StyledMain>
                {/* <StyledFooter>Footer</StyledFooter> */}
            </StyledContainer>
        </>
    );
}

export default Layout;