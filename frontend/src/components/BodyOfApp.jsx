import React, { useState } from "react";
import DetailChatBot from "./ChatBot/DetailChatBot";
import SkillChatBot from "./ChatBot/SkillChatBot";
import EducationChatBot from "./ChatBot/EducationChatBot";
import ProjectChatBot from "./ChatBot/ProjectChatBot";
import LicenseChatBot from "./ChatBot/LicenseChatBot";
import InfomationChatBot from "./ChatBot/InfomationChatBot";
import AwardChatBot from "./ChatBot/AwardChatBot";
import "../styles/bodyOfApp.css";
import logoLight from '../img/logoLight.jpg';
import logoDark from '../img/logoDark.jpg';

import 고양이눈 from '../img/종이사진_배경제거/고양이눈.jpg';
import 꽃 from '../img/종이사진_배경제거/꽃.jpg';
import 꽃1 from '../img/종이사진_배경제거/꽃1.jpg';
import 꽃2 from '../img/종이사진_배경제거/꽃2.jpg';
import 나비 from '../img/종이사진_배경제거/나비.jpg';
import 달_고양이 from '../img/종이사진_배경제거/달_고양이.jpg'; 
import 달 from '../img/종이사진_배경제거/달.jpg';
import 레코드_신문 from '../img/종이사진_배경제거/레코드_신문.jpg';
import 별 from '../img/종이사진_배경제거/별.jpg';
import 비둘기 from '../img/종이사진_배경제거/비둘기.jpg';
import 비행기 from '../img/종이사진_배경제거/비행기.jpg';
import 손_전구_꽃 from '../img/종이사진_배경제거/손_전구_꽃.jpg';
import 신문 from '../img/종이사진_배경제거/신문.jpg';
import 신문1 from '../img/종이사진_배경제거/신문1.jpg';
import 여자 from '../img/종이사진_배경제거/여자.jpg';
import 입 from '../img/종이사진_배경제거/입.jpg';
import 필기체 from '../img/종이사진_배경제거/필기체.jpg';
import 하관 from '../img/종이사진_배경제거/하관.jpg';
import 하트 from '../img/종이사진_배경제거/하트.jpg';
import 하트1 from '../img/종이사진_배경제거/하트1.jpg';

const BodyOfApp = () => {
  return (
    <div className="bodyOfApp">
        <div className="bodyOfApp__container">
            <div className="bodyOfApp__container__background">
                {/* <img className="고양이눈" src={고양이눈}/> */}
                {/* <img className="꽃" src={꽃}/>   */}
                {/* <img className="꽃1" src={꽃1}/> */}
                {/* <img className="꽃2" src={꽃2}/> */}
                {/* <img className="나비" src={나비}/> */}
                {/* <img className="달_고양이" src={달_고양이}/> */}
                {/* <img className="달" src={달}/> */}
                {/* <img className="레코드_신문" src={레코드_신문}/> */}
                {/* <img className="별" src={별}/> */}
                {/* <img className="비둘기" src={비둘기}/> */}
                {/* <img className="비행기" src={비행기}/> */}
                {/* <img className="손_전구_꽃" src={손_전구_꽃}/> */}
                <img className="신문" src={신문}/>
                <img className="신문1" src={신문1}/>
                {/* <img className="여자" src={여자}/> */}
                {/* <img className="입" src={입}/> */}
                {/* <img className="필기체" src={필기체}/> */}
                {/* <img className="하관" src={하관}/> */}
                {/* <img className="하트" src={하트}/> */}
                {/* <img className="하트1" src={하트1}/> */}
            </div>
            <div className="bodyOfApp__container__left">
                <div className="test1"><div className="profile"><img className="logoLight" src={logoLight} /></div></div>
                <div className="test1"><div className="name">자기소개<div className="line"></div></div> <InfomationChatBot /></div>
                <div className="test1"><div className="name">자격증<div className="line"></div></div><LicenseChatBot /></div>
                <div className="test1"><div className="name">기술 숙련도<div className="line"></div></div><SkillChatBot /></div>
            </div>
            <div className="bodyOfApp__container__right">
                <div className="test2"><div className="name">개인정보<div className="line"></div></div><DetailChatBot /></div>
                <div className="test2"><div className="name">학력사항<div className="line"></div></div><EducationChatBot /></div>
                <div className="test2"><div className="name">프로젝트 경험<div className="line"></div></div><ProjectChatBot /></div>
                <div className="test2"><div className="name">수상경력<div className="line"></div></div><AwardChatBot /></div>
            </div>
        </div>
    </div>
  );
};

export default BodyOfApp;