import React from 'react'
import Instuctor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../HomePage/Button"

const InstructorSection = () => {
  return (
    <div className='mt-15' >
        <div className='flex flex-row gap-20 items-center pt-10'>
            <div className='w-[50%]'>
                <img src={Instuctor} alt="Instuctor" className='shadow-lg shadow-white'/>
            </div>
            <div className='flex flex-col items-start justify-center w-[50%]'>
                    <div className='text-4xl font-semibold text-richblack-5 w-[50%]'>
                    Become an 
                    <HighlightText text={" instructor"}></HighlightText>
                    </div>
                    <p className='font-medium text-[16px] text-richblack-300'>
                    Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                    </p>
                    <div className='mt-16'>
                        <CTAButton active={true} to={"/signup"}>
                            <div className='flex gap-2 items-center'>
                                start teaching Today
                                <FaArrowRight/>
                            </div>
                        </CTAButton>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default InstructorSection