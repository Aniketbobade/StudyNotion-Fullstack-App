import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore";
import HighlightText from "../HomePage/HighlightText"

const tabName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skill paths",
    "Career paths"
]

const Exploremore = () => {
    const [currentTab, setCurrentTab] = useState(tabName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);
    const setMyCard = (value) =>{
        setCurrentTab(value);
        const result= HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);

    }
  return (
    <div>
        <div className='text-4xl text-center font-semibold'>
            Unlock the 
            <HighlightText text={" Power of Coding"}></HighlightText>
        </div>
        <p className='text-center text-sm text-richblack-300 mt-2'>
        Learn to Build Anything You Can Imagine
        </p>
        <div className='flex flex-row bg-richblack-800 rounded-full border-richblack-100 py-2 px-2'>
            {
                tabName.map((element, index) =>{
                    return(
                        <div 
                        className={`text-[16px]  items-center gap-2
                        ${currentTab === element ? 
                        "text-richblack-5 bg-richblack-900"
                        :"text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer
                hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2
                        `}
                        key={index}
                        onClick={()=>setMyCard(element)}
                        >
                            {element}
                        </div>
                    )    
                })
            }
        </div>
    </div>
  )
}

export default Exploremore