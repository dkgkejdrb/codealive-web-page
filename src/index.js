import React, {useEffect, useRef, useState} from 'react';
import {Transition} from 'react-transition-group'
import ReactDOM from 'react-dom/client'
import './index.css';

const HeaderBtn = ({indexList=[], hrefList=[], headerLinkNameList=[]}) => {
        const className = 'HeaderBtn';
        const listItems = indexList.map((number) => 
            <a className={className} key={number.toString()} href={hrefList[number]}>
            <span>{headerLinkNameList[number]}</span>
        </a>
        );
        return (
            <div className='Container'>
                {listItems}
            </div>
        )
    }

const Header = () => {
    return (
        <header>
            <a className='Logo' href='/#home'></a>
                <HeaderBtn 
                indexList={[0, 1, 2, 3, 4, 5]} 
                hrefList={['/#intro', '/#features', '/#course', '/#project', '/#review', '/#partner']}
                headerLinkNameList={['Introduction', 'Features', 'Course', 'Project', 'Review', 'Partner']}
                />
        </header>
    )
}

const VideoWrap = ({VideoWrapSrc=''}) => {
    return (
        <div className='VideoWrap'>
            <video autoPlay muted loop playsInline>
                <source src={VideoWrapSrc} type='video/mp4' />
            </video>
        </div>
    );
}

const H1 = ({H1Title='', H1PWidth=647}) => {
    if(H1PWidth === null) { 
        return (<h1 style={{display: 'inline-block'}}>{H1Title}</h1>); 
    } else { 
        return (<h1 style={{width: H1PWidth}}>{H1Title}</h1>); }
}

const H2 = ({H2Title='', H2PWidth=262}) => {
    if(H2PWidth === null) {
        return (<h2 style={{display: 'inline-block'}}>{H2Title}</h2>); 
    } else {
        return (
            <h2 style={{width: H2PWidth}}>{H2Title}</h2>); }
}

const P = ({PText='', PWidth=550}) => {
    if (PText === null) {
        return (<p style={{display: 'inline-block'}}>{PText}</p>); 
    } else { return (
        <p style={{width: PWidth}}>{PText}</p>); }
}

const IframeWrap = ({IframeWrapSrc=''}) => {
    return (
        <div className='IframeWrap'>
            <iframe src={IframeWrapSrc}></iframe>
        </div>
    );
}

const Introduction = () => {
    return (
        <div className='Introduction'>
            <div className='Left'>
                <IframeWrap IframeWrapSrc={'https://www.youtube.com/embed/IeGj7s_KuFg'}/>
            </div>
            <div className='Right'>
                <H1 H1PWidth={647} 
                    H1Title='파이썬을 쉽게 배우는 혁신적인 방법'/>
                <P PWidth={550} 
                    PText='codeAlive는 코딩 초보자도 쉽고 재미있게 파이썬 프로그래밍을 배울 수 있는 실시간 인터랙티브 코딩교육 플랫폼입니다.
                            유니티 엔진 기반의 혁신적인 비주얼 프로그래밍은 미래를 준비하는 가장 빠른 방법을 안내합니다.' />
            </div>
        </div>
    );
}

const Features = () => {
    return (
        <div className='Features'>
            <div className='Title'>
                <H1 H1PWidth={1200} 
                H1Title='실시간 인터랙티브 메타버스 코딩교육 플랫폼'
                />
                <P H1PWidth={1200}
                PText='창의력과 문제해결능력을 향상시키는 혁신적인 접근법'
                />
            </div>
            <div className='Contents'>
                <SelectScreen />
            </div>
        </div>
    );
}

const SelectScreen = () => {
    const [picture, setPicture] = useState(1);

    useEffect(() => {
        setPicture(<FirstPicture />);
    }, []);
    
    const FirstPicture = () => {
        return (
            <div
            className='Picture'
            style={{
                backgroundImage: 'url(https://www.codealive.co.kr/images/main/img_platform.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%'
            }}>
            <br></br>
            <br></br>
            <p>학습-실습-프로젝트, 하나의 플랫폼 안에서 파이썬 개념 학습부터 코드구현까지<br></br>모든 것이 가능한 코스웨어</p>   
            </div>
        );
    }

    const SecondPicture = () => {
        return (
            <div
            className='Picture'
            style={{
                backgroundImage: 'url(https://www.codealive.co.kr/images/main/img_platform2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
        }}>
        <br></br>
        <br></br>
        <p>작성한 코드에 따라 실시간으로 반응하는<br></br>오브젝트를 통해 몰입 경험 극대화</p>    
        </div>
        );
    }

    const ThirdPicture = () => {
        return (
            <div
            className='Picture'
            style={{
                backgroundImage: 'url(https://www.codealive.co.kr/images/main/img_platform3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%'
        }}>
        <br></br>
        <br></br>
        <p>플레이그라운드로 파이썬 프로그래밍을 배우는 완벽한 방법을 제공합니다.<br></br>유니티 실시간 3D 개발 플랫폼을 통해 전문가 수준의 게임과 소프트웨어를 만들 수 있습니다.</p>                
        </div>
        );
    }

    const HandleValue = (event, num) => {
        if(num === 1) { 
            setPicture(<FirstPicture />);
        } else if(num === 2) {  
            setPicture(<SecondPicture />);
        } else { 
            setPicture(<ThirdPicture />);
        }
        event.preventDefault();
    }

    return (
        <div className='Wrap'>
            <div className='Left'>
                <a className='1' href='#' onClick={(event) => HandleValue(event, 1)}>
                    <div id='CircleNumber'> 
                        <div>1</div> 
                    </div>
                    <H2 H2Title='단계별 학습'/>
                </a>
                <a className='2' href='#' onClick={(event) => HandleValue(event, 2)}>
                    <div id='CircleNumber'> 
                        <div>2</div> 
                    </div>
                    <H2 H2Title='인터랙티브 콘텐츠'/>
                </a>
                <a className='3' href='#' onClick={(event) => HandleValue(event, 3)}>
                    <div id='CircleNumber'> 
                        <div>3</div> 
                    </div>
                    <H2 H2Title='비주얼 프로그래밍'/>
                </a>
            </div>
            <div className='Right'>
                <div className='Screen'>
                    {picture}
                </div>
            </div>
        </div>
    );
}

const Course = () => {
    return (
        <div className='Course'>
            <div className='Wrap'>
                <H1 H1Title='커리큘럼' H1PWidth='100%'/>
                <br></br>
                <P PText='입문자부터 전문가까지 모두를 위한 스캐폴딩 커리큘럼' PWidth='100%'/>
                <CourseBox BoxNumbers={[0, 1, 2]} 
                BoxTitles={['Power Base', 'Core Algorithm', 'Super AI']}
                BoxTexts={[
                    'Python의 기본문법 순차, 선택, 반복 구조 객체 지향 프로그래밍 패러다임',
                    '스택(stack), 큐(queue)등 자료 구조 정렬(sort), 탐색(search)등 알고리즘',
                    '머신러닝 에이전트를 이용한 딥 러닝(deep learning) 개념과 동작원리'
                ]}
                />
            </div>
        </div>
    );
}

const CourseBox = ({BoxNumbers=[], BoxTitles=[], BoxTexts=[]}) => {
    const listItems = BoxNumbers.map((BoxNumber) =>
        <div className={BoxNumber} key={BoxNumber.toString()}>
            <H1 H1Title={BoxTitles[BoxNumber]} H1PWidth='80%'/>
            <div>
                <H2 H2Title='24 Lessons x 100min'/>
                <br></br>
                <br></br>
                <p>{BoxTexts[BoxNumber]}</p>            
            </div>
        </div>
    );
    return (
        <div className='BoxWrap'>
            {listItems}
        </div>
    );
}

const Project = () => {
    return (
        <div className='Project'>
            <div className='Wrap'>
            <H1 H1Title='CodeAlive의 무한한 창의력' H1PWidth='100%'/>
                <br></br>
                <P PText='모든 크리에이터를 위한 플레이그라운드' PWidth='100%'/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <GalleryWrap indexList={[0, 1, 2]} 
                UrlList={[
                    'url(https://www.codealive.co.kr/images/main/img_project.jpg)',
                    'url(https://www.codealive.co.kr/images/main/img_project2.gif)',
                    'url(https://www.codealive.co.kr/images/main/img_project3.gif)',
                ]} />
                <br></br>
                <br></br>
                <GalleryWrap indexList={[0, 1, 2]} UrlList={[
                    'url(https://www.codealive.co.kr/images/main/img_project4.gif)',
                    'url(https://www.codealive.co.kr/images/main/img_project5.gif)',
                    'url(https://www.codealive.co.kr/images/main/img_project6.jpg)'
                ]}/>
            </div>
        </div>
    );
}

const GalleryWrap = ({indexList=[], UrlList=[]}) => {
    const listItems = indexList.map((index) =>
        <div className={index} 
        key={index.toString()}
        style={{
            backgroundImage: UrlList[index],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        > </div>
    );
    return (
        <div className='GalleryWrap'>
            {listItems}
        </div>
    )
}

const Review = () => {
    const StepWeight = 800;

    const [Step, SetStep] = useState(0);
    const [transitionTime, SetTransitionTime] = useState(0.2);

                         // 0,     -800,    -1600,  -2400,   -3200, -4000    
    const listItems = ['#444(1)', '#111', '#222', '#333', '#444', '#111(1)'];

    useEffect(() => {
        SetStep(-800)
    }, []);

    // useEffect(() => {
    //     const timer = setInterval(() => {prevHandler()}, 3000);

    //     return () => clearInterval(timer);
    // }, []);

    const sliderList = listItems.map((list) => 
        <div id='SliderElements' 
        className={list} 
        key={list} 
        style={{
            width: '690px', 
            height: '60%', 
            transform: `translateX(${Step}px)`,
            transition: `${transitionTime}s ease-in-out`
            }}>
            {list}
        </div>
    );

    const prevHandler = () => {
        if(Step >= -800) {
            SetTransitionTime(0);
            SetStep(-3200)
            replaceLastSlide();
        } else {
        SetTransitionTime(0.2);
        SetStep(Step+StepWeight);
        }
    }

    const replaceLastSlide = () => {
        setTimeout(() => {
            SetTransitionTime(0.2);
            SetStep(-2400);
        }, 150, transitionTime)
    }

    const nextHandler = () => {
        if(Step <= -2400) {
            SetTransitionTime(0.2);
            SetStep(Step-StepWeight);
            replaceFirstSlide();
        } else {
        SetTransitionTime(0.2);
        SetStep(Step-StepWeight);
        }
    }

    const replaceFirstSlide = () => {
        setTimeout(() => {
            SetTransitionTime(0);
            SetStep(0); // 0
            console.log(Step);
        }, 150, transitionTime)
    }

    return (
        <div className='Review'>
            <div className='Wrap'>
                <H1 H1Title='모두가 CodeAlive를 좋아하는 이유' H1PWidth='100%'/>

                <div className='SliderWrap'>
                    <a className='PrevBtn' style={{width : '100px', height : '100px', fontSize : '60px', cursor : 'pointer', textAlign : 'center', color : 'gray'}} onClick={prevHandler}>&#60;</a>
                    <div className='Slider'>
                        <div className='SliderList'>
                            {sliderList}
                        </div>
                    </div>
                    <a className='NextBtn' style={{width : '100px', height : '100px', fontSize : '60px', cursor : 'pointer', textAlign : 'center', color : 'gray'}} onClick={nextHandler}>&#62;</a>
                </div>
            </div>
        </div>
    );
}

// const Review1 = () => {
//     const listItems = [
//         {
//             Item1: '#111',
//             Item2: '#222'
//         },
//         {
//             Item1: '#222',
//             Item2: '#333'
//         },
//         {
//             Item1: '#333',
//             Item2: '#444'
//         },
//         {
//             Item1: '#444',
//             Item2: '#111(1)'
//         },
//         {
//             Item1: '#111(1)',
//             Item2: '#222(1)'
//         },
//     ];


//     const SlideWidth = 350;
//     const [CurrIndex, SetCurrentIndex] = useState(0);

//     const sliderList = listItems.map((list) => 
//     <div className='SliderElementsWrap'
//         style={{
//             // transform: `translateX(${(-100 / SlideWidth) * (0.5 + CurrIndex)}%)`
//             transform: `translateX(${(-350 / SlideWidth) * (0.5 + CurrIndex)}%)`
//         }}>

//         <div
//             id='SliderElements'
//             className={list.Item1} 
//             // key={list.Item1}
//             key={'1'}
//             style={{
//                 width:`${SlideWidth}px`, 
//                 height: '220px',                 
//                 }}>
//             {list.Item1}
//         </div>
//         <div
//             id='SliderElements'
//             className={list.Item2}
//             // key={list.Item2}
//             key={'2'}
//             style={{
//                 width:`${SlideWidth}px`, 
//                 height: '220px', 
//                 }}>
//             {list.Item2}
//         </div>
//     </div>
// );

// const handleSwipe = (direction) => {
//     SetCurrentIndex(CurrIndex => CurrIndex + direction);
//     console.log(`translateX(${(-350 / SlideWidth) * (0.5 + CurrIndex)}%)`);
// }

// return (
//     <div className='Review'>
//         <div className='Wrap'>
//             <H1 H1Title='모두가 CodeAlive를 좋아하는 이유' H1PWidth='100%'/>

//             <div className='SliderWrap'>
//                 <button className='PrevBtn' style={{width : '100px', height : '100px'}} onClick={() => handleSwipe(-1)}>Prev</button>
//                 <div className='Slider'>
//                     <div className='SliderList'>
//                         {sliderList}
//                     </div>
//                 </div>
//                 <button className='NextBtn' style={{width : '100px', height : '100px'}} onClick={() => handleSwipe(1)}>Next</button>
//             </div>
//         </div>
//     </div>
// );
// }

const App = () => {
    return (
        <div>
            <Header />
            <VideoWrap VideoWrapSrc='https://www.codealive.co.kr/images/banner/mov_banner_creverse_v2.mp4'/>
            <Introduction />
            <Features />
            <Course />
            <Project />
            <Review />
            <div className='seventhRow'> </div>
            <div className='eighthRow'> </div>
            <footer> </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);