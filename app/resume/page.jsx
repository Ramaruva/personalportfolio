"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
//about data
const data = {
  title: "About me",
  description:
    "I am ramakrishna software engineer studying i smu looking for jobs ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ramakrishna Aruva",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 940 843 1082",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Mail",
      fieldValue: "raruva@smu.edu",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Telugu, English, Hindi",
    },
  ],
};

//experience
const experienceData = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "haha aha ahaha aha aha aha aha ahahah adjaf,muO a hsajknc",
  items: [
    {
      company: "Ivy Comptech ",
      position: "Software engineer",
      duration: "2021-2023",
    },
    {
      company: "Ivy Comptech ",
      position: "Software engineer",
      duration: "2021-2023",
    },
    {
      company: "Ivy Comptech ",
      position: "Software engineer",
      duration: "2021-2023",
    },
    {
      company: "Ivy Comptech ",
      position: "Software engineer",
      duration: "2021-2023",
    },
    {
      company: "Ivy Comptech ",
      position: "Software engineer",
      duration: "2021-2023",
    },
  ],
};

//education
const educationData = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "haha aha ahaha aha aha aha aha ahahah adjaf,muO a hsajknc",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Software engineer",
      duration: "2021-2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Software engineer",
      duration: "2021-2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Software engineer",
      duration: "2021-2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Software engineer",
      duration: "2021-2023",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description: "ho alao rlalaor alalor amlaa dkaka ajdjdao roa akdhaha adajaja",
  skillist: [
    {
      icon: <FaHtml5 />,
      name: "html-5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* contenet */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experienceData.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experienceData.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experienceData.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                          flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{educationData.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {educationData.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educationData.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                          flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
