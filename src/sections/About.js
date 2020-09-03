import React from 'react';
import styled from "styled-components";

const AboutContainer = styled.section`
    height: max-content;
    width: 100%;
    padding: 2em 0;
    position: relative;
    box-sizing: border-box;
    background: white;
    color: black;

    @media screen and (max-width: 480px) {
        display: block;
        height: max-content;
    }
`

const AboutSection = styled.div`
    width: 80%;
    height: max-content;
    margin: 0 auto;
    padding: 1em 3em;
    box-sizing: border-box;

    h2 {
        margin-top: 1em;
        margin-bottom: 1em;
        font-size: 2em;
    }

    p {
        font-size: 1.2em;
    }

    @media screen and (max-width: 480px) {
        display: block;
        width: 100%;
    }
`


const About = () => {
    return (
        <AboutContainer id="about">
            <AboutSection>
                <h2>A propos de moi</h2>
                {/* <br /> */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque voluptatibus sed sapiente aperiam porro perspiciatis
                     saepe corrupti atque blanditiis, dicta incidunt vitae
                     sint excepturi explicabo hic quas cupiditate est
                     reiciendis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque voluptatibus sed sapiente aperiam porro perspiciatis
                     saepe corrupti atque blanditiis, dicta incidunt vitae
                     sint excepturi explicabo hic quas cupiditate est
                     reiciendis.
                </p>
            </AboutSection>
        </AboutContainer>

    );
}

export default About;