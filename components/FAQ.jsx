import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import Glass from "../src/assets/Glass.png"
import bulb from "../src/assets/bulb.png"
import spotify from "../src/assets/spotify.png"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 4rem
`;

const Title = styled.h1`
  line-height: 120%;
`;

const Subtitle = styled.h2``;

const GradientText = styled.span`
  color: #ffffff;
  background-image: -webkit-linear-gradient(
    0deg,
    #ffffff 0%,
    #a299ff 43%,
    #ff4ed2 96%
  );
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  
`;


const Section2 = styled.section`
  max-width: 1400px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%; 

  
  }

  @media screen and (max-width: 1150px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`


const Question = styled.div`
    display: flex;


`

function FAQ() {
    const [faqs, setfaqs] = useState([
        {
            question: 'What is Playlist Surfer?',
            answer: 'Playlist Surfer is a web application that allows you to search for Spotify playlists based on keywords like genre or artist. It then displays the results in rows with information like follower count, track count, and contact address.',
            open: true
        },
        {
            question: 'How does Playlist Surfer work?',
            answer: 'Playlist Surfer scrapes Spotify for playlists that match your search criteria. It then extracts information like the playlist name, number of followers, and number of tracks. If a playlist has a contact email in the description, it will be flagged as a playlist that accepts song submissions.',
            open: false
        },
        {
            question: 'Is Playlist Surfer affiliated with Spotify?',
            answer: 'No, Playlist Surfer is an independent web application that is not affiliated with Spotify in any way.',
            open: false
        }
    ])

    
  return (
    <Container className='px-12'>
        
        <Title className='text-center font-main text-4xl md:text-5xl font-[700] text-white max-w-[18ch] py-7 '>
            <GradientText>FAQ</GradientText>
        </Title>
        

        <Section2>
            <div>
                <div className={`flex flex-col p-6`}>
                    <div className={`mb-4`}>
                    <img src={Glass} alt="star" className="" />
                    </div>
                    <div className="flex-1 flex flex-col ">
                    <h4 className="font-main font-semibold text-white text-[18px]  mb-2">
                    What is Playlist Surfer?
                    </h4>
                    <p className="font-main font-normal text-white text-[16px] leading-[24px] max-w-[35ch] mb-4">
                    Playlist Surfer is a free web app that allows you to search for Spotify playlists along with their contact information based on keywords like genre or artist.
                    </p>
                    </div>
                </div>
            </div>
            <div>
                <div className={`flex flex-col p-6`}>
                    <div className={`mb-4`}>
                    <img src={bulb} alt="star" className="" />
                    </div>
                    <div className="flex-1 flex flex-col ">
                    <h4 className="font-main font-semibold text-white text-[18px]  mb-2">
                    How does Playlist Surfer work?
                    </h4>
                    <p className="font-main font-normal text-white text-[16px] leading-[24px] max-w-[35ch]">
                    Playlist Surfer uses an AI-powered algorithm to search for Spotify playlists, picking the ones that are curated by real people with real-time analytics.
                    </p>
                    </div>
                </div>
            </div>
            <div>
                <div className={`flex flex-col p-6`}>
                    <div className={`mb-4`}>
                    <img src={spotify} alt="star" className="" />
                    </div>
                    <div className="flex-1 flex flex-col ">
                    <h4 className="font-main font-semibold text-white text-[18px]  max-w-[30ch] mb-2">
                    Can I save playlists I find on Playlist Surfer to my Spotify account?
                    </h4>
                    <p className="font-main font-normal text-white text-[16px] leading-[24px] max-w-[35ch]">
                    Not currently, but this is a feature that we hope to add in the future.
                    </p>
                    </div>
                </div>
            </div>
        </Section2>
        <Section2>
        <div>
                <div className={`flex flex-col p-6`}>
                    <div className={`mb-4`}>
                    <img src={Glass} alt="star" className="" />
                    </div>
                    <div className="flex-1 flex flex-col ">
                    <h4 className="font-main font-semibold text-white text-[18px] max-w-[30ch] mb-2">
                    What happens when I submit my songs to a playlist?
                    </h4>
                    <p className="font-main font-normal text-white text-[16px] leading-[24px] max-w-[35ch] mb-4">
                    That depends on the playlist curator. They may listen to your song and decide whether or not to add it to their playlist.
                    </p>
                    </div>
                </div>
            </div>
            <div>
                <div className={`flex flex-col p-6`}>
                    <div className={`mb-4`}>
                    <img src={Glass} alt="star" className="" />
                    </div>
                    <div className="flex-1 flex flex-col ">
                    <h4 className="font-main font-semibold text-white text-[18px]  mb-2">
                    How does Playlist Surfer work?
                    </h4>
                    <p className="font-main font-normal text-white text-[16px] leading-[24px] max-w-[35ch]">
                    Playlist Surfer uses an AI-powered algorithm to search for Spotify playlists, picking the ones that are curated by real people with real-time analytics.
                    </p>
                    </div>
                </div>
            </div>
            <div>
                <div className={`flex flex-col p-6`}>
                    <div className={`mb-4`}>
                    <img src={Glass} alt="star" className="" />
                    </div>
                    <div className="flex-1 flex flex-col ">
                    <h4 className="font-main font-semibold text-white text-[18px]  max-w-[30ch] mb-2">
                    Can I save playlists I find on Playlist Surfer to my Spotify account?
                    </h4>
                    <p className="font-main font-normal text-white text-[16px] leading-[24px] max-w-[35ch]">
                    Not currently, but this is a feature that we hope to add in the future.
                    </p>
                    </div>
                </div>
            </div>
        </Section2>
    </Container>
  )
}

export default FAQ