import React from 'react'
import banner from "../src/assets/banner.gif"
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useState } from 'react'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
`;



const Section2 = styled.section`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  
  
`

function BannerAd() {
  return (
    <Container>
    <div>
      <img src={banner} href=""></img>
    </div>
    </Container>
  )
}

export default BannerAd