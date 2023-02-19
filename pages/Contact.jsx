import React from 'react'
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react'
import bitcoin from "../src/assets/bitcoin.png"
import ClipLoader from "react-spinners/ClipLoader";
import PreLoader from '../components/PreLoader';


import axios from 'axios'

import { fetchHeroes } from '../utils/utils';

const FormEngine = styled.form`
  
`;

const Searchword = styled.input`
  width: 80%;
  padding: 1rem;
  font-size: 1rem;
  line-height: 1;
  background.color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    
`;

const Searchword2 = styled.textarea`
  width: 80%;
  padding: 1rem; 
  font-size: 1rem;
  line-height: 1;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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

const FormLabel = styled.label`
  color: white;
`

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
 
  justify-content: space-between;
  flex-wrap: nowrap;

  min-height: calc(100vh - 120px);
  

`;





function Contact() {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const {name, email, message} = e.target.elements 
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }  

  return (
    <Container>
    

      <Section className="bg-main">
        <div className='text-center'>
            <Title className='font-main text-5xl md:text-6xl font-[700] text-white max-w-[18ch]'><GradientText>Contact Us</GradientText></Title>
            <Subtitle className='font-main text-white font-semibold mx-5 my-3'>Have a question or want to be featured?
            Feel free to leave a message and we will get back to you shortly.</Subtitle>
        </div>
          <FormEngine onSubmit={onSubmit} className='text-1xl'>
              <div className='text-center my-7'>
                <div className='mb-6'>
                  <Searchword className='font-main'
                  type="text" 
                  id='name'  
                  placeholder="Name" 
                  required
                  />
                </div>
                <div className='mb-6'>
                  <Searchword className='font-main'
                    type="email" 
                    id='email'  
                    placeholder="Email" 
                    required
                    />
                </div>
                <div>
                  <Searchword2 rows="5" className='font-main'
                    type="text" 
                    id='message'
                    
                    placeholder="Message" 
                    required
                    />
                </div>
                <div className='my-6'>
                
                  <SearchButton className='btn btn-5 text-white font-main font-semibold text-xl px-6 py-3 bg-pink-400 hover:bg-pink-300 transition '>Send</SearchButton>
                
                </div>
              </div>
            </FormEngine>
      </Section>
    
  
      
    </Container>
    
  )
}

export default Contact