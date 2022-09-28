import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import { Header } from './Components/Header';
import { VideoWrap } from './Components/VideoWrap';
import { Introduction } from './Components/Introduction';
import { Features } from './Components/Features';
import { Course } from './Components/Course';
import { Project } from './Components/Project';
import { Review } from './Components/Review_InfiniteSlider';
import { Partner } from './Components/Partner';
import { Footer } from './Components/Footer';
import { Copyright } from './Components/Copyright';
import { Contact } from './Components/Contact';



const App = () => {
    return (
        <div>
            <Header />
            <Contact />
            <VideoWrap VideoWrapSrc='https://www.codealive.co.kr/images/banner/mov_banner_creverse_v2.mp4'/>
            <Introduction />
            <Features />
            <Course />
            <Project />
            <Review sliderWidth={'1800px'}/>
            <Partner />
            <Footer />
            <Copyright />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);