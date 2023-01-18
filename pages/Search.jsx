import React from 'react'
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from 'react'
import bitcoin from "../src/assets/bitcoin.png"



const FormEngine = styled.form`
  
`;

const Searchword = styled.input`
  border:none;
  outline:none;
  height: 60px;
  color: white;
  border-radius:8px;
  width:420px;
  background-color: #17161A;
  box-sizing:border-box;
  padding:0 18px; 
  filter: drop-shadow(5px 5px 10px #17161A);
  @media screen and (max-width: 500px) {
    
    width:220px;
  }
`;

const SearchButton = styled.button`


justify-content: center;
box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
outline: 1px solid;
outline-color: #fff;
border-radius:8px
text-shadow: none;
transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

&:hover {
  box-shadow: inset 0 0 20px #d830ae74, 0 0 20px #d830ae2b;
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
}
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 12rem;

  @media screen and (max-width: 500px) {
    padding-top: 8rem;
  }
`;

const Title = styled.h1`
  line-height: 120%;
  display: inline;
  font-size: 3.5rem;
  
  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
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

const Section = styled.section`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  min-height: calc(100vh - 120px);
  

`;


function Search() {
    const [keyword, setKeyword] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchWord = {keyword}

        setIsPending(true)

        fetch('', {method:'POST', headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(searchWord)
      }).then(() => {
        console.log('searching')
        setIsPending(false)
      }
      )
    }
  return (
    <Container>
      <Section className="bg-main">
        <div className='text-center '>
          
          <Title className="font-main   font-[700] text-white max-w-[18ch] text-center">Maximize Your Playlist <GradientText>Potential</GradientText></Title>
          
          <div className='my-6'>
            <FormEngine onSubmit={handleSubmit} className='text-1xl'>
              <div>
                <Searchword className='font-main'
                type="text" 
                placeholder="Enter search word... (Genre, Artist, Style)" 
                required  
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <div className='my-6'>
                { !isPending && <SearchButton className='btn btn-5 text-white font-main font-semibold text-xl px-6 py-3 bg-pink-400 hover:bg-pink-300 transition '>Search</SearchButton>}
                { isPending && <SearchButton disabled className='btn btn-5 text-white font-main font-semibold text-xl px-6 py-3 bg-pink-400 hover:bg-pink-300 transition '>Searching...</SearchButton>}
                <p className='text-white'>{keyword}</p>
              </div>
            </FormEngine>
           

          </div>
        </div>
      </Section>
    </Container>
    
  )
}

export default Search