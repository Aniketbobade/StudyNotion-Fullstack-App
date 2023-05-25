import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
const Home = () => {
  return (
    <div>
    {/* section 1 */}
    <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between mt-[124px]'>

        <Link to={"/signup"}>
            <div className='mx-auto rounded-full bg-richblack-800 font-bold 
            text-richblack-200 transition-all duration-200 hover:scale-95 shadow-inner mb-1 bg-opacity-18 border-spacing-2'>
                <div className='flex items-center gap-2 rounded-full py-[5px] px-10
                transition-all duration-200 hover:bg-richblack-900'>
                    <p>Become an Instructor </p>
                    <FaArrowRight/>
                </div>
            </div>
        </Link>

        <div className='text-center text-4xl font-semibold mt-[38px]'>
        Empower Your Future with 
        <HighlightText text={" Coding Skills"} />
        </div>

        <div className='mt-4 w-[80%] h-[48px] font-inter font-medium text-lg leading-6 
        items-center text-center justify-center text-richblack-300 max-w-maxContent'>
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>
{/* buttons */}
        <div className='mt-8 gap-6 flex flex-row'>
        <CTAButton active={true} linkto={"/signup"}>
          Learn more
        </CTAButton>

        <CTAButton active={false} linkto={"/login"}>
          Book a demo
        </CTAButton>
        </div>
{/* video */}
        <div className='absolute w-[1035px] h-[515px] left-[203px] top-[458px]'>
          <video 
          muted
          loop
          autoPlay
          infinite
          >
          <source src={`${Banner}`} type="video/mp4"/>
          </video>
        </div>

    </div>
    {/* section 2 */}
    {/* section 3 */}
    {/* section 4 */}
    </div>
  )
}

export default Home