import React from 'react';
import styled from "styled-components";
import bush from "../../public/static/bush.png";

const PortfolioSection = styled.section`
    height: 100%;
    padding: 1em;
    background-image: url(${bush});

    h2 {
        text-align: center;
    }
`

// PROJECT CARD STYLED COMPONENTS //

const ProjectCardContainer = styled.div`
    height: 70%;
    width: 90%;
    background-color: white;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`



const mockProjectsModel = [
    {
        title: "title 1",
        img: "https://source.unsplash.com/random/300x250"
    },
    {
        title: "title 2",
        img: "https://source.unsplash.com/random/300x250"
    },
    {
        title: "title 3",
        img: "https://source.unsplash.com/random/300x250"
    },
    {
        title: "title 4",
        img: "https://source.unsplash.com/random/300x250"
    },
    {
        title: "title 5",
        img: "https://source.unsplash.com/random/300x250"
    },
    {
        title: "title 6",
        img: "https://source.unsplash.com/random/300x250"
    },
    {
        title: "title 7",
        img: "https://source.unsplash.com/random/300x250"
    },
    {
        title: "title 8",
        img: "https://source.unsplash.com/random/300x250"
    },
]

// const generateCarousel = (arr, p) => {
//     const n = arr.length;
//     let before = (n + p - 1) % n;
//     let after = (n + p + 1) % n;


//     return [arr[before], arr[p], arr[after]];
// }

const ProjectCard = () => {
    return (
        <ProjectCardContainer>
        </ProjectCardContainer>
    )
}

const Portfolio = () => {
    return (
        <PortfolioSection id="portfolio">
            <h2>Mes projets</h2>

            <ProjectCard />
        </PortfolioSection>
    );
}

export default Portfolio;