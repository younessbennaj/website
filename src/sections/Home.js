import React from 'react';
import Typed from 'react-typed';
import styled, { keyframes } from "styled-components";
import avatar from "../../public/static/avatar.jpg";
import bush from "../../public/static/bush.png";

const HomeContainer = styled.section`
    height: 90%;
    text-align: center;
    position: relative;
    background-image: url(${bush});
`

// const StyledButton = styled.button`

//     border: 1px solid ${ props => props.border};
//     background: ${ props => props.bg};
//     color: ${ props => props.color};
//     border - radius: 3px;
//     font - size: 1em;
//     padding: 0.5em 1.3em;
//     cursor: pointer;
//     margin: 1em;
//     box - shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//     transition: all 0.3s cubic - bezier(.25, .8, .25, 1);


//         &: hover {
//             text - decoration: underline;
//             box - shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
//         }
// `

/***** PROFILE STYLED COMPONENTS *****/

const ProfileContainer = styled.div`
    width: 60%;
    height: 100%;
    position: relative;

    @media screen and (max-width: 480px) {
        display: none;
    }
`

const Profile = styled.div`
    background-color: #fff;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    left: 50%;
    padding: 2em;
    box-sizing: border-box;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
`

const Avatar = styled.img`
    border-radius: 50%;
    width: ${props => props.width};
`

const ProfileLink = styled.a`
    display:block;
    text-align: right;
    color: black;

    &:hover {
        color: royalblue;
    }

    @media screen and (max-width: 480px) {
        display: inline;
        height: max-content;
    }
`


/***** MESSENGER STYLED COMPONENTS *****/

//animation for the messenger element
const slide = keyframes`
    from {
        transform: translate(100%, -50%);
    }

    to {
    transform: translate(0, -50%);
    }
`
//Only on mobile view
const MessengerHeader = styled.div`
    display: none;

    @media screen and (max-width: 480px) {
        display: block;
        background: transparent;
        text-align: left;
        margin-bottom: 1em;
        padding: 1em 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid darkgrey;

        h1 {
            font-size: 1.3em;
            line-height: 1.6em;
        }
    }
    
    /* @media screen and (max-width: 480px) {
        display: none;
    } */
`

const Messenger = styled.div`
    position: absolute;
    height: 90%;
    width: 35%;
    box-sizing: border-box;

    top: 50%;
    right: 2%;
    transform: translate(0, -50%);
    animation: ${slide} 1s ease;
    padding: 2em;
    /* background: #f9f9f9; */
    background: white;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    @media screen and (max-width: 480px) {
        position: relative;
        width: 90%;
        margin: 0 auto;
        right: 0;
        height: 90%;
        padding: 0 1em 1em 1em;
    }
`

const StyledBubble = styled.div`
    border-radius: 10px 10px 0 10px;
    /* padding: 0.5em 0em; */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    text-align: left;
    background: royalblue;
    color: white;
    width: max-content;
    margin: 0 0 1em auto;

    p {
        margin: 0;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 0.7em;
        padding-bottom: 0.7em;
        font-size: 1.3em;
    }

`

const StyledLink = styled.a`
    color: #fff;

        &:hover {
            color: lightblue;
        }
`

const TypedContainer = styled.div`
    font-size: 1.3em;
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: left;
    padding-left: 1em;
    padding-right: 1em;

    p {
        border: 1px solid darkgray;
        background: #f9f9f9;
        border-radius: 5px;
        padding: 1em;
    }
`

const Home = () => {

    return (
        <HomeContainer id="home">
            <ProfileContainer>
                <Profile>
                    <Avatar src={avatar} width={"50%"} alt="" />
                    <h1>Youness   Bennaj</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus culpa cum explicabo nihil, molestiae nam fugiat corrupti esse quod assumenda temporibus, nisi ab tenetur excepturi, eligendi nemo totam neque!</p>
                    <ProfileLink target="_blank" href="https://github.com/younessbennaj?tab=repositories">Github →</ProfileLink>
                </Profile>
            </ProfileContainer>
            <Messenger>
                <MessengerHeader>
                    <Avatar src={avatar} width={"20%"}></Avatar>
                    <h1>Youness Bennaj</h1>
                    <ProfileLink target="_blank" href="https://github.com/younessbennaj?tab=repositories">Github →</ProfileLink>
                </MessengerHeader>
                <StyledBubble>
                    <p >Hello 👋 Je suis&nbsp;
                        <span><strong><StyledLink href="#about">Youness Bennaj</StyledLink></strong></span>
                    </p>
                </StyledBubble>

                <StyledBubble>
                    <p >Etudiant en M1 à <StyledLink href="#portfolio">EPITECH</StyledLink>&nbsp;🧑‍🎓</p>
                </StyledBubble>

                <StyledBubble>
                    <p >Et <StyledLink href="#portfolio">développeur JS</StyledLink>&nbsp;💻 🛠️</p>
                </StyledBubble>

                <StyledBubble>
                    <p>Découvrez <StyledLink href="#portfolio">mes projets</StyledLink>&nbsp;👇</p>
                </StyledBubble>
                <br />

                <TypedContainer>
                    <p>
                        <Typed strings={
                            [
                                'Je maitrise <strong style="color: royalblue;">HTML/CSS</strong>',
                                'Je maitrise <strong style="color: royalblue;">JavaScript ES5/ES6</strong>',
                                'Je maitrise <strong style="color: royalblue;">React</strong> et son ecosystem'
                            ]}
                            startDelay={1000}
                            smartBackspace={true}
                            typeSpeed={40}
                            backSpeed={40}
                            loop={true}
                        >
                        </Typed>
                    </p>
                </TypedContainer>
                {/* <h1>youness bennaj</h1>
                <p> développeur JS</p> */}
                {/* <StyledButton bg="lightgrey" color="white" border="lightgrey">Mes projets</StyledButton>
                <StyledButton bg="transparent" color="#5f5f5f;;" border="#5f5f5f;;">A propos de moi</StyledButton> */}
            </Messenger>
        </HomeContainer>
    );
}

export default Home;