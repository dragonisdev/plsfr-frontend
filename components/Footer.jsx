import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
  
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Hoverlink = styled.p`
  color: grey;
  

  &:hover {
  color: #fff;
}

`


const Footer = () => {
  return (
    <Container>
    <section className={`flex px-12 flex-col`}>
    
    
    <div className="w-full flex text-center pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-main font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 Playlist Surfer. All Rights Reserved.
      </p>
      
    </div>
    <div className='flex flex-row justify-between py-3'>
        <Link href="/"><Hoverlink className='font-main font-normal text-[18px] leading-[27px] '>Terms of Service</Hoverlink></Link>
        <Link href="/"><Hoverlink className='font-main font-normal text-[18px] leading-[27px] '>Privacy Policy</Hoverlink></Link>
        <Link href="/"><Hoverlink className='font-main font-normal text-[18px] leading-[27px] '>Contact</Hoverlink></Link>
    </div>  
  </section>
  </Container>
  )
}

export default Footer