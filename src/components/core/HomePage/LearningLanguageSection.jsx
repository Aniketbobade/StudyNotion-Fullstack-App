import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_other from "../../../assets/Images/Compare_with_others.png"
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button";
const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
            <div className='flex flex-col gap-5 items-center'>
                <h1 className='text-4xl font-semibold text-center'>
                Your swiss knife for <HighlightText text={"learning any language"}/>
                </h1>
                <p className='text-richblack-400 items-baseline text-center w-[70%]'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                </p>
                {/* image */}
                <div className='flex flex-row items-center justify-center mt-5'>
                    <img src={know_your_progress} alt="image1" 
                        className='object-contain -mr-32'
                    />
                    <img src={compare_with_other} alt="image1" />
                    <img src={plan_your_lessons} alt="image1" 
                        className='object-contain -ml-32'
                    />
                </div>
                <CTAButton active={true}>
                    Learn more
                </CTAButton>
            </div>
    </div>
  )
}

export default LearningLanguageSection