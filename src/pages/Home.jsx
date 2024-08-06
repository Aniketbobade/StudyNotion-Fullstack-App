import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import TimelineSection from "../components/core/HomePage/TimelineSection"
import ReviewSection from "../components/core/HomePage/ReviewSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import Exploremore from "../components/core/HomePage/Exploremore";

const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between"
      >
        <Link to={"/signup"}>
          <div
            className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit"
          >
            <div
              className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900"
            >
              <p>Become an Instructor </p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future with
          <HighlightText text={" Coding Skills"} />
        </div>

        <div
          className="mt-4 w-[80%] h-[48px] font-inter font-medium text-lg leading-6 
        items-center text-center justify-center text-richblack-300 max-w-maxContent"
        >
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        {/* buttons */}
        <div className="mt-8 gap-6 flex flex-row">
          <CTAButton active={true} linkto={"/signup"}>
            Learn more
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a demo
          </CTAButton>
        </div>
        {/* video */}
        <div className="mx-3 my-12 shadow-blue-200">
          <video
            className="h-[515px] custom-box-shadow w-fit"
            muted
            loop
            autoPlay
          >
            <source src={`${Banner}`} type="video/mp4" />
          </video>
        </div>

        {/* code section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={" coding potential "} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
<html>
<head>
  <title>My Web Page</title>
</head>
<body>
  <h1>Welcome to My Web Page</h1>
  <p>This is a sample paragraph.</p>
  <ul>
    <li>List item 1</li>
  </ul>
</body>
</html>`}
            codeColor={"text-yellow-25"}
          ></CodeBlocks>
        </div>
        {/* code section 2 */}

        <div>
          <CodeBlocks
            positon={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential"} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
<html>
<head>
  <title>My Web Page</title>
</head>
<body>
  <h1>Welcome to My Web Page</h1>
  <p>This is a sample paragraph.</p>
  <ul>
    <li>List item 1</li>
  </ul>
</body>
</html>`}
            codeColor={"text-yellow-25"}
          />
        </div>
        <Exploremore/>
      </div>
      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="bg_home h-[300px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-5 text-white">
              <CTAButton active={true}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false}>learn more</CTAButton>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto gap-7 max-w-maxContent items-center justify-between flex flex-col">
            <div className="flex flex-row gap-5 mb-10 mt-[15px]">
                <div className="text-4xl font-semibold w-[45%]">
                Get the Skills you need for a
                <HighlightText text={" Job that is in demand"} />
                </div>
                <div className="flex flex-col pag-10 w-[50%] items-start">
                  <p className="text-[16px]">
                  The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                  </p>
                  <CTAButton active={true} to={"/signup"}>
                    <div>
                      Learn more
                    </div>
                  </CTAButton>
                </div>
            </div>
            <TimelineSection />
        <LearningLanguageSection />
        </div>
      </div>
      {/* section 3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
            <InstructorSection/>
            <ReviewSection/>
      </div>
      {/* section 4 */}
      <Footer/>
    </div>
  );
};

export default Home;
