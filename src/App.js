import React from 'react';
import './App.css';
import {Header,Footer,Container, Hero, MostPopular} from './Components/Exports'

export default function App() {
  return (
    <>
   <Header/>
   <Container>
   <Hero/>
   <MostPopular/>
   </Container>
   {/* <Footer/> */}
</>
  )
}


