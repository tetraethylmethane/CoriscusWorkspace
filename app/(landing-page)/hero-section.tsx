"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import { useState, useRef } from "react";

import { FaMagnifyingGlass, FaPeopleGroup } from "react-icons/fa6";

import { FaBook, FaLightbulb } from "react-icons/fa";

import { PiArrowRight, PiArrowLeft } from "react-icons/pi";

import { HiArrowUpRight } from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";

const tabs = [
  {
    name: "Bring Your Ideas to Life",
    feature:"",
    description: "Create pages that showcase your ideas and plans. Whether you need notes for brainstorming, task management for projects, meeting agendas, or compelling project proposals, our fully customizable pages offer diverse templates, layouts, and block types to suit any purpose. Organize your content effortlessly and adapt it to your evolving needs.",
    more: (
      <div className="text-blue-600 flex text-center">
        <Link href="/features">Learn more</Link><PiArrowRight className="ml-1 text-sm"/>
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    name: "Collaborate in Real-time",
    description: "Foster a collaborative environment and enhance remote teamwork with Coriscus Workspace. Enable multiple users to work together in real-time, syncing changes instantly. Invite colleagues and partners to edit or view your content, ensuring everyone is on the same page and boosting overall productivity.",
    more: (
      <div className="text-blue-600 flex items-center">
        <Link href="/features">Learn more</Link><PiArrowRight className="ml-1 text-sm"/>
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },

  {
    name: "Master Your Data",
    description: "Take control of your data with our flexible custom database feature. Easily track projects, manage inventory, monitor sales pipelines, or create comprehensive knowledge bases. Our database system adapts to your unique requirements, ensuring efficient data management and informed decision-making.",
    more: (
      <div className="text-blue-600 flex items-center">
        <Link href="/features">Learn more</Link><PiArrowRight className="ml-1 text-sm"/>
      </div>
    ),

    image: "/assets/CoffeeDoddle.svg",
  },

  {
    name: "Security and Privacy",
    description: "Your data security and privacy are of utmost importance to us. Coriscus Workspace employs industry-leading encryption protocols and two-factor authentication to safeguard your information. Control access to your content with granular permission settings, ensuring confidentiality and peace of mind.",
    more: (
      <div className="text-blue-600 flex items-center">
        <Link href="/features">Learn more</Link><PiArrowRight className="ml-1 text-sm"/>
      </div>
    ),

    image: "/assets/CoffeeDoddle.svg",
  },

  {
    name: "AI and ML Integration",
    description: "Coriscus Workspace goes beyond traditional workspace tools. We empower your business to develop, monitor, and deploy custom AI and ML models using an easy-to-use visual programming language directly in your web browser. Leverage AI to perform financial analysis, build predictive models, and stay ahead of the competition.",
    more: (
      <div className="text-blue-600 flex items-center">
        <Link href="/features">Learn more</Link><PiArrowRight className="ml-1 text-sm"/>
      </div>
    ),

    image: "/assets/RunningDoodle.svg",
  },

  {
    name: "Collaborative Innovation Hub",
    description: "With Coriscus Workspace, you're joining a vibrant community of innovators and entrepreneurs. We constantly evolve our platform, incorporating user feedback to deliver the best possible experience. Let Coriscus Workspace empower your ideas and unlock the full potential of your business journey.",
    more: (
      <div className="text-blue-600 flex items-center">
        <Link href="/features">Learn more</Link><PiArrowRight className="ml-1 text-sm"/>
      </div>
    ),

    image: "/assets/CoffeeDoddle.svg",
  },

];

const HeroSection = () => {
  const ref = useRef(null);

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const prevTab = () => {
    const newIndex = (activeTabIndex === 0) ? tabs.length - 1 : activeTabIndex - 1;
    setActiveTabIndex(newIndex);
  };

  const nextTab = () => {
    const newIndex = (activeTabIndex === tabs.length - 1) ? 0 : activeTabIndex + 1;
    setActiveTabIndex(newIndex);
  };

  const goToTab = (tabIndex)=> {
    setActiveTabIndex(tabIndex)
  }

  const activeTab = tabs[activeTabIndex];


  return (

      <div className=" max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative items-center flex flex-col">
        <div
          className="
            font-semibold 
            2xl:w-1/3 
            md:w-2/3 
            xl:w-1/2 
            lg:px-0 
            px-8 
            text-4xl
            xl:text-6xl     
            flex-row
            justify-center
            xl:pt-12
            text-center 
            pt-6
            mt-10
          "
        >
          Create, Collaborate, and Grow.
        </div>

        <p className="text-xl pt-4 text-center w-2/3 mx-auto">
          All-in-One Workspace
        </p>

        <div className="flex gap-4 pt-6 items-center justify-center">
          <Link href="/signup">
            <Button className="py-1">
              <div className="flex items-center justify-center">
                <div className="text-lg">Get started</div>
                <div>
                  <HiArrowUpRight className="ml-2 " />
                </div>
              </div>
            </Button>
          </Link>
        </div>

          <div className="max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group justify-center">
            {/* Display content based on the active tab */}
            <div
            style={{background: 'tabs[activeTabIndex]'}}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            >
              <div className="hidden md:flex py-10 px-8 md:px-0">
                {activeTab && (
                  <div className="md:flex items-center justify-center space-x-6">
                    <div className="w-[80%] h-[100%] my-4 mx-4">
                        <motion.div
                          key={activeTab.name}
                          className={`
                          w-full h-full rounded-2xl bg-center bg-cover duration-500
                          ${
                            activeTab === activeTab
                              ? "border rounded-xl pt-2 bg-white "
                              : "shadow-md rounded-xl pt-2  bg-[#f6f5f4] m-auto"
                          }
                        `}
                        >
                          <div className="px-4">
                            <div className="flex items-center">
                              <div className="text-2xl font-medium">{activeTab.name}</div>
                            </div>
                            <motion.div
                              className="flex flex-col text-sm"
                              initial={{ y: 0 }}
                              animate={{ y: activeTab === activeTab ? 10 : 25 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div>
                                {/* Only animate the description */}
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {activeTab.description}
                                </motion.div>
                              </div>
                              {/* Conditional rendering f "Learn more" link */}
                              {activeTab === activeTab && (
                                <div className="text-sm mt-2">{activeTab.more}</div>
                              )}
                            </motion.div>
                          </div>
                        </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/*Left arrow*/}
            <button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full">
              <PiArrowLeft onClick={prevTab} size={30}/>
            </button>
            {/*Right arrow*/}
            <button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full">
              <PiArrowRight onClick={nextTab} size={30}/>
            </button>
             {/*Dot thing*/}
             <div className="flex top-4 justify-center py-2">
              {tabs.map((tab, tabIndex) => (
                <div key={tabIndex} onClick={() => goToTab} className="text-2xl cursor-pointer">
                  <RxDotFilled/>
                </div>
              ))}
             </div>
          </div>

 
      </div>
  );
};

export default HeroSection;
