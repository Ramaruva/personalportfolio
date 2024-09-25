"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Java FullStack ",
    title: "Quickhire",
    description:
      "QuickHire is a Java-based web application that connects employers with employees for short-term employment opportunities, streamlining the hiring process for temporary roles.",
    stack: [
      {
        name: "Html5",
      },
      {
        name: "Css3",
      },
      {
        name: "Javascript",
      },
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "Java",
      },
      {
        name: "Springboot",
      },
      {
        name: "Mysql",
      },
    ],
    image: "/assets/work/quickhirethumb.png",
    live: null,
    github: "https://github.com/Ramaruva/QuickHire_fullstackProject",
  },
  {
    num: "02",
    category: "fullstack",
    title: "BudgetBuddy",
    description:
      "BudgetBuddy is a web application designed to manage personal finances and streamline bill splitting with friends, ensuring smooth and organized transactions.",
    stack: [
      {
        name: "Html5",
      },
      {
        name: "Css3",
      },
      {
        name: "Javascript",
      },
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "Java",
      },
      {
        name: "Springboot",
      },
      {
        name: "PostgreSQL",
      },
    ],
    image: "/assets/work/budgetbuddythumb.png",
    live: null,
    github: "https://github.com/gowthamdongari/budgetbuddy_backend",
  },
  {
    num: "03",
    category: "frontend",
    title: "Curious_Stoop_Sale",
    description:
      "CuriousStoopSale is a hackathon project where a team of two developed a webpage for a Brooklyn stoop sale within 24 hours, providing a platform for local sales and interactions.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Javascript",
      },
      {
        name: "Google Maps",
      },
    ],
    image: "/assets/work/stoopsalethumb.png",
    live: "https://team-curious-stoop-sale.vercel.app/",
    github: "https://github.com/gowthamdongari/Team_Curious_Stoop_Sale",
  },
  {
    num: "04",
    category: "frontend",
    title: "getHarvestClone",
    description:
      "GetHarvest is a clone of the original time-tracking and project management tool, developed remotely by a team of 4 during Masai Bootcamp training.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Javascript",
      },
      {
        name: "Google Maps",
      },
      {
        name: "firebase",
      },
    ],
    image: "/assets/work/getharvestclonethumb.png",
    github: "https://github.com/pujarianil4/getharvest_clone",
  },
  {
    num: "05",
    category: "frontend",
    title: "FrontendmastersClone",
    description:
      "FrontendMasters is a clone of the popular learning platform FrontendMaster's.com offering courses taught by top industry professionals, focusing on cutting-edge frontend technologies.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "Javascript",
      },
      {
        name: "styled components",
      },
      {
        name: "firebase",
      },
      {
        name: "stripe",
      },
      {
        name: "d3-ease",
      },
    ],
    image: "/assets/work/frontendmastersthumb.png",
    github: "https://github.com/Ramaruva/FrontendMasters_clone",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-wrap">
                {project?.num}
              </div>
              {/* project title */}
              <h2
                className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize sm:text-[32px] break-words"
              >
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live button */}
                {project?.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px]  rounded-full
                               bg-white/5 flex justify-center items-center group"
                        >
                          <BsArrowUpRight
                            className="text-white text-3xl
                                   group-hover:text-accent"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* github project button */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px]  rounded-full
                           bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub
                          className="text-white text-3xl
                               group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center 
                       items-center bg-pink-50/20"
                    >
                      {/* overlay */}
                      <div
                        className="absolute top-0 bottom-0 w-full h-full 
                      bg-black/10 z-10"
                      ></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover max-w-full"
                          alt="project thumb"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0
                z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px]
                h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
