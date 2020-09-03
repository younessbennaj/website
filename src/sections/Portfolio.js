import React from 'react';
import styled from "styled-components";
import bush from "../../public/static/bush.png";
import { assertNamedType } from '../../node_modules/graphql';

const PortfolioSection = styled.section`
    padding: 1em;
    background-image: url(${bush});

    h2 {
        text-align: center;
    }
`

// PROJECT CARD STYLED COMPONENTS //

const ProjectCardContainer = styled.div`
    height: max-content;
    width: 90%;
    background-color: white;
    margin: 2em auto;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`

const ProjectCardContent = styled.div`
    height: 65%;
    box-sizing: border-box;
    padding: 1em;
    position: relative;

    h4 {
        text-transform: capitalize;
        font-size: 1.2em;
        margin-bottom: 1em;
        margin-top: 1em;
    }
`

const ProjectCardImage = styled.img`
    width: 100%;
    height: 35%;
`

const ProjectChips = styled.span`
    border: 1px solid royalblue;
    padding: 0.4em 0.5em;
    border-radius: 1.1em;
    color: royalblue;
    display: inline-block;
    margin: 0.2em;
`

const CardButton = styled.button`
    background: royalblue;
    border: 1px solid royalblue;
    padding-top: 0.5em;
    font-size: 1em;
    padding-bottom: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 3px;
    color: #fff;
    margin-right: 1em;
    margin-top: 0.5em;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    a {
        text-decoration: none;
        color: #fff;
    }

    &:hover {
        text-decoration: underline;
    }
`

const ChipsRow = styled.div`
    margin: 2em 0;
`


const mockProjectsModel = [
    {
        title: "title 1",
        description: "Lorem ipsum, dolor sit assertNamedType.",
        img: "https://source.unsplash.com/random/400x200",
        links: {
            site: "www.google.com",
            repo: "www.github.com"
        },
        tags: ["Html", "CSS", "JavaScript", "React", "Jest", "Cypress"]
    },
    {
        title: "title 2",
        description: "Lorem ipsum, dolor sit assertNamedType.",
        img: "https://source.unsplash.com/random/400x200",
        links: {
            site: "www.google.com",
            repo: "www.github.com"
        },
        tags: ["Html", "CSS", "JavaScript", "React", "Jest", "Cypress"]
    },
    {
        title: "title 3",
        description: "Lorem ipsum, dolor sit assertNamedType.",
        img: "https://source.unsplash.com/random/400x200",
        links: {
            site: "www.google.com",
            repo: "www.github.com"
        },
        tags: ["Html", "CSS", "JavaScript", "React", "Jest", "Cypress"]
    },
    {
        title: "title 4",
        description: "Lorem ipsum, dolor sit assertNamedType.",
        img: "https://source.unsplash.com/random/400x200",
        links: {
            site: "www.google.com",
            repo: "www.github.com"
        },
        tags: ["Html", "CSS", "JavaScript", "React", "Jest", "Cypress"]
    },
    {
        title: "title 5",
        description: "Lorem ipsum, dolor sit assertNamedType.",
        img: "https://source.unsplash.com/random/400x200",
        links: {
            site: "www.google.com",
            repo: "www.github.com"
        },
        tags: ["Html", "CSS", "JavaScript", "React", "Jest", "Cypress"]
    },
    {
        title: "title 6",
        description: "Lorem ipsum, dolor sit assertNamedType.",
        img: "https://source.unsplash.com/random/400x200",
        links: {
            site: "www.google.com",
            repo: "www.github.com"
        },
        tags: ["Html", "CSS", "JavaScript", "React", "Jest", "Cypress"]
    },
    {
        title: "title 7",
        description: "Lorem ipsum, dolor sit assertNamedType.",
        img: "https://source.unsplash.com/random/400x200",
        links: {
            site: "www.google.com",
            repo: "www.github.com"
        },
        tags: ["Html", "CSS", "JavaScript", "React", "Jest", "Cypress"]
    },
    {
        title: "title 8",
        description: "Lorem ipsum, dolor sit assertNamedType.",
        img: "https://source.unsplash.com/random/400x200",
        links: {
            site: "www.google.com",
            repo: "www.github.com"
        },
        tags: ["Html", "CSS", "JavaScript", "React", "Jest", "Cypress"]
    },
]

// const generateCarousel = (arr, p) => {
//     const n = arr.length;
//     let before = (n + p - 1) % n;
//     let after = (n + p + 1) % n;


//     return [arr[before], arr[p], arr[after]];
// }

const ProjectCard = ({ project: { title, description, img, links: { site, repo }, tags } }) => {
    return (
        <ProjectCardContainer>
            <ProjectCardImage src={img} />
            <ProjectCardContent>
                <h4>{title}</h4>
                <p>{description}</p>
                <CardButton><a href={site}>Visit</a></CardButton>
                <CardButton><a href={repo}>Repo</a></CardButton>
                <ChipsRow>
                    {tags.map(tag => {
                        return (
                            <ProjectChips key={tag} role="button">
                                <span>{tag}</span>
                            </ProjectChips>
                        )
                    })}
                </ChipsRow>
            </ProjectCardContent>
        </ProjectCardContainer>
    )
}

const Portfolio = () => {
    return (
        <PortfolioSection id="portfolio">
            <h2>Mes projets</h2>
            {mockProjectsModel.map(project => {
                return <ProjectCard key={project.title} project={project} />
            })}
        </PortfolioSection>
    );
}

export default Portfolio;