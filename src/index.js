import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client'
import {Link} from 'react-scroll';
import './index.css';


const HeaderBtn = ({indexList=[], idList=[], headerLinkNameList=[]}) => {
        const className = 'HeaderBtn';
        const listItems = indexList.map((number) => 
            // <Link className={className} key={number.toString()} id={idList[number]}>
            <Link className={className} key={number.toString()} to={idList[number]} spy={true} smooth={true} style={{cursor : 'pointer'}}>
            <span>{headerLinkNameList[number]}</span>
        </Link>
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
                idList={['/#intro', '/#features', '/#course', '/#project', '/#review', '/#partner']}
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
        <div className='Introduction' id='/#intro'>
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
        <div className='Features' id='/#features'>
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

    const [circleColor1, setColor1] = useState(''); 
    const [circleColor2, setColor2] = useState('');
    const [circleColor3, setColor3] = useState('');
    const [circleFontColor1, setFontColor1] = useState(''); 
    const [circleFontColor2, setFontColor2] = useState('');
    const [circleFontColor3, setFontColor3] = useState('');
    const HandleValue = (event, num) => {
        if(num === 1) {
            setPicture(<FirstPicture />);
            setColor1('rgb(0, 62, 77)');
            setColor2('');
            setColor3('');
            setFontColor1('white');
            setFontColor2('grey');
            setFontColor3('grey');
        } else if(num === 2) {  
            setPicture(<SecondPicture />);
            setColor1('');
            setColor2('rgb(0, 62, 77)');
            setColor3('');
            setFontColor1('grey');
            setFontColor2('white');
            setFontColor3('grey');
        } else { 
            setPicture(<ThirdPicture />);
            setColor1('');
            setColor2('');
            setColor3('rgb(0, 62, 77)');
            setFontColor1('grey')
            setFontColor2('grey')
            setFontColor3('white')
        }
        event.preventDefault();
    }
    
    return (
        <div className='Wrap'>
            <div className='Left'>
                <a className='1' href='#' onClick={(event) => HandleValue(event, 1)}>
                    <div id='CircleNumber' style={{backgroundColor : circleColor1}} > 
                        <div style={{color : circleFontColor1}}>1</div> 
                    </div>
                    <H1 H1Title='단계별 학습'/>
                </a>
                <a className='2' href='#' onClick={(event) => HandleValue(event, 2)}>
                    <div style={{backgroundColor : circleColor2}} id='CircleNumber'> 
                        <div style={{color : circleFontColor2}}>2</div> 
                    </div>
                    <H1 H1Title='인터랙티브 콘텐츠'/>
                </a>
                <a className='3' href='#' onClick={(event) => HandleValue(event, 3)}>
                    <div style={{backgroundColor : circleColor3}} id='CircleNumber'> 
                        <div style={{color : circleFontColor3}}>3</div> 
                    </div>
                    <H1 H1Title='비주얼 프로그래밍'/>
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
        <div className='Course' id='/#course'>
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
        <div className='Project' id='/#project'>
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



const Review = ({sliderWidth}) => {
    const sliderHeight = parseInt(sliderWidth) * 0.28;
    const sliderElementsWidth = parseInt(sliderWidth)*0.45-100;
    const sliderSpeed = parseInt(sliderWidth) * 0.5;

    const [Step, SetStep] = useState(0);
    const [transitionTime, SetTransitionTime] = useState(0.2);
   
    const listItems = [
        {
            key : '#444(1)',
            text : `"codeAlive는 정말 재미있습니다. 저는 함수, 루프, 조건문을 배웠고 멋진 프로젝트를 만들었습니다. 또한 그로 인해 디지털 큐레이터라는 미래를 꿈꾸게 되었습니다."`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile.png)',
            user : '배정빈 | 아주중3'
        },

        {
            key : '#111',
            text : `"코딩을 중학교에 올라와서 시작했는데 codeAlive는 파이썬을 정말 쉽고 흥미롭게 배울 수 있습니다. 아이가 복잡한 코드로 스스로 게임작품을 만드는 것을 보니 놀랍습니다."`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile2.png)',
            user : '서이 Mom | 늘푸른중1'
        },

        {
            key : '#222',
            text : `"제 아들은 codeAlive를 정말 좋아합니다. 스크래치를 하다가 파이썬을 혼자 하기 시작했는데 어려워서 코딩을 그만뒀어요. codeAlive를 만나 파이썬을 재미있고 체계적으로 배울 수 있어 정말 다행입니다."`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile3.png)',
            user : '서준 Dad | 방배초6'
        },

        {
            key : '#333',
            text : `"codeAlive를 사용할 기회가 있어서 정말 기뻤습니다. 우리반 학생들은 모두 여학생이지만 이렇게 높은 참여를 이끌어 내는 프로그램은 지금까지 없었습니다. 텍스트 코딩이 처음인 아이들도 쉽게 이해할 수 있도록 잘 설계된 안내와 코스는 훌륭한 도구라고 생각됩니다."`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile4.png)',
            user : '이지현 | 중등교사'
        },

        {
            key : '#444',
            text : `"codeAlive는 정말 재미있습니다. 저는 함수, 루프, 조건문을 배웠고 멋진 프로젝트를 만들었습니다. 또한 그로 인해 디지털 큐레이터라는 미래를 꿈꾸게 되었습니다."`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile.png)',
            user : '배정빈 | 아주중3'
        },

        {
            key : '#111(1)',
            text : `"코딩을 중학교에 올라와서 시작했는데 codeAlive는 파이썬을 정말 쉽고 흥미롭게 배울 수 있습니다. 아이가 복잡한 코드로 스스로 게임작품을 만드는 것을 보니 놀랍습니다.'"`,
            url : 'url(https://www.codealive.co.kr/images/main/img_profile2.png)',
            user : '서이 Mom | 늘푸른중1'
        }
    ];

    useEffect(() => {
        SetStep(-sliderSpeed);    
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextHandler();

        }, 4000);

        return () => clearInterval(timer);
    }, [Step]);


    const sliderList = listItems.map((list) => 
        <div id='SliderElements' 
        className={list.key} 
        key={list.key}
        style={{
            flexDirection: 'column',
            width: `${sliderElementsWidth}px`,
            height: '70%', 
            transform: `translateX(${Step}px)`,
            transition: `${transitionTime}s ease-in-out`
            }}>
            {list.text}
            <div id='Profile' style={{width : '100%', height : '100%'}}>
                <div style={{width:'100px', height:'100px', backgroundPosition : 'center'}}> 
                    <div style={{width:'100%', height:'100%', backgroundSize : 'cover', backgroundImage : list.url}}></div>
                </div>
                <div style={{}}>
                    {list.user}
                </div>
            </div>
        </div>
    );

    const prevHandler = () => {
        if(Step >= 0) {
            SetTransitionTime(0);
            SetStep(-(sliderSpeed*(listItems.length-2))) // *4
            replaceLastSlide();
        } else {
        SetTransitionTime(0.2);
        SetStep(Step+sliderSpeed);
        }
    }

    const replaceLastSlide = () => {
        setTimeout(() => {
            SetTransitionTime(0.2);
            SetStep(-(sliderSpeed*(listItems.length-3))); // *3
        }, 150, transitionTime)
    }

    const nextHandler = () => {
        if(Step <= -2400) { // *4
            SetTransitionTime(0.2);
            SetStep(Step-sliderSpeed);
            replaceFirstSlide();
        } else {
        SetTransitionTime(0.2);
        SetStep(Step-sliderSpeed);
        }
    }

    const replaceFirstSlide = () => {
        setTimeout(() => {
            SetTransitionTime(0);
            SetStep(0); // *0
        }, 150, transitionTime)
    }

    const SliderNavHandler = () => {
        const NavBtns = null;

        if(Step === -sliderSpeed * 0)
        {
            return (
                <div className='Wrap'>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } else if(Step === -sliderSpeed * 1)
        {
            return (
                <div className='Wrap'>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } else if(Step === -sliderSpeed * 2)
        {
            return (
                <div className='Wrap'>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } else if(Step === -sliderSpeed * 3)
        {
            return (
                <div className='Wrap'>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a style={{backgroundColor : '#117a8b'}} className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );
        } else {
            return (
                <div className='Wrap'>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 0)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 1)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 2)}></a>
                    <a className='NavBtn' onClick={() => SetStep(-sliderSpeed * 3)}></a>
                </div>
            );            
        }
    }

    return (
        <div className='Review' id='/#review'>
            <div className='Wrap'>
                <H1 H1Title='모두가 CodeAlive를 좋아하는 이유' H1PWidth='100%'/>

                <div className='SliderWrap'>
                    <a className='PrevBtn' style={{width : '100px', height : '100px', fontSize : '60px', cursor : 'pointer', textAlign : 'center', color : 'gray'}} onClick={prevHandler}>&#60;</a>
                    <div className='Slider' style={{width : sliderWidth, height : `${sliderHeight}px`}}>
                        <div className='SliderList'>
                            {sliderList}
                        </div>
                    </div>
                    <a className='NextBtn' style={{width : '100px', height : '100px', fontSize : '60px', cursor : 'pointer', textAlign : 'center', color : 'gray'}} onClick={nextHandler}>&#62;</a>
                </div>
                <div className='SliderNav'> 
                    <SliderNavHandler />
                </div>                    
            </div>
        </div>
    );
}

const Partner = () => {
    return ( 
        <div className='Partner' id='/#partner'>
            <div className='Wrap'>
                <H1 H1PWidth='100%' H1Title='메타버스 코딩 학습 프로그램' />
                <H2 H2PWidth='100%' H2Title='메타버스 코딩 플랫폼에서 배우는' />
                <H2 H2PWidth='100%' H2Title='파이썬 버추얼 클래스' />
                <H2 H2PWidth='100%' H2Title='codeAlive와 함께 쉽고 재미있게 경험하세요.' />
                <div className='PartnerBtnWrap' style={{width : '100%', height : '15%', marginTop : '40px'}}>
                    <a className='PartnerBtn' href ='https://form.office.naver.com/form/responseView.cmd?formkey=ZmM3NDIzYjQtODBlNy00MTJiLWJjNzktNzQ1MjQ1OTcwZjMz&sourceId=urlshare' style={{fontSize : '1.3rem', color : 'rgb(0, 62, 77)', borderRadius : '45px', backgroundColor : 'white', padding : '1.8rem 6rem 1.8rem 6rem', cursor : 'pointer', textDecoration : 'none'}} >도입문의</a>
                </div>
            </div>
        </div>
    );
}

const Footer = () => {
    return  (
        <div className='Footer'>
            <div className='Wrap'>
                <div className='Logo' style={{width : '133px', height : '27px', padding : '1rem'}}>
                    <div style={{width : '100%', height : '100%', backgroundImage : 'url(https://www.codealive.co.kr/images/creverse_logo.svg)', backgroundSize: 'cover',backgroundPosition: 'center'}}>

                    </div>
                </div>
                <div className='IncWrap' style={{width:'100%', height : '100px'}}>
                    <div className='Inc' style={{width:'60%', height : '70%'}}>
                        <P PWidth='100%' PText='서울특별시 강남구 테헤란로 521, 21층(삼성동, 파르나스타워) | ㈜크레버스 대표이사 : 이충국 | 사업자등록번호 : 211-87-16710'/>
                        <P PWidth='100%' PText='대표전화 : 02-3429-9407 | 통신판매업신고 제 강남-8282호'/>
                    </div>
                    <div className='IncList' style={{width:'40%', height : '70%'}}>
                        <select style={{width: '180px', height : '30px',background : '#343a40', color : 'white', border : 'solid 0.1px white'}}>
                            <option>FAMILY SITE</option>  
                            <option>크레버스</option>
                            <option>씨큐브코딩</option>
                            <option>LC</option>
                            <option>VLC</option>
                            <option>CMS영재교육센터</option>
                            <option>영재관</option>
                        </select>    
                    </div>    
                </div>                
            </div>
        </div>
    );
}

const Copyright = () => {
    return (
        <div className='Copyright'>
            Copyright © CREVERSE Inc. All right reserved.
        </div>
    );
}


const App = () => {
    return (
        <div>
            <Header />
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