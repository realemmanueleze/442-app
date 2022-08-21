import React from 'react'
import {$HeroContainer, $HeroBg, $VideoBg, $HeroH1, $HeroP, $BtnWrapper, $Button, $ArrowFoward, $ArrowRight} from './HeroStyles'
import HeroVideo from '../../videos/video.mp4'
import { hover } from '@testing-library/user-event/dist/hover'

function Hero() {
  return (
    <$HeroContainer>
        <$HeroBg>
            <$VideoBg autoPlay loop muted src={HeroVideo} type='video/mp4' />
        </$HeroBg>
        <$HeroH1>
            When brothers unite, growth is exponential.
        </$HeroH1>
        <$HeroP>
            With just $200 monthly investment, you can join the felowship of financial elites that owns the major infrastructures in your city. 
        </$HeroP>
        <$BtnWrapper>
            <$Button to='signup'>
                Get Started {hover ? <$ArrowFoward /> : <$ArrowRight />}
            </$Button>
        </$BtnWrapper>
    </$HeroContainer>
  )
}

export default Hero