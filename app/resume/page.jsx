"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAngular,
  FaDocker,
  FaGitAlt
} from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiSpringboot,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
//about data
const about = {
  title: "About me",
  description:
    "I am Ramakrishna Aruva, a passionate software engineer with over 3 years of experience in full-stack development. Currently pursuing my Master’s in Software Engineering at Southern Methodist University, I specialize in building scalable, innovative solutions using cutting-edge technologies like Java, Spring Boot, React, and Machine Learning. I’m also an active open-source contributor, collaborating with global teams to improve code quality and project scalability. I’m always eager to learn, explore new challenges, and contribute to impactful projects.",
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
  description:
    "Experienced in developing scalable web applications and enhancing system performance using modern frameworks like Angular, Java, and Spring Boot.",
  items: [
    {
      company: "One Community Global",
      position: "Software engineer",
      duration: "May 2024-Present",
    },
    {
      company: "A-Lec-SMU",
      position: "Graduate Tutor",
      duration: "Septemeber 2023-Present",
    },
    {
      company: "Ivy Comptech ",
      position: "Software engineer",
      duration: "August 2022- July 2023",
    },
    {
      company: "Ivy Comptech ",
      position: "Trainee Software engineer",
      duration: "Septemeber 2021- August 2022",
    },
  ],
};

//education
const educationData = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Master's in Software Engineering from Southern Methodist University, with a Bachelor's in Electronics and Communication Engineering, specializing in full-stack development and machine learning.",
  items: [
    {
      institution: "Southern Methodist University",
      degree: "Master's Software engineering",
      duration: "August 2023-May 2025",
    },
    {
      institution: "Masai School",
      degree: "Full Stack Web Development",
      duration: "January 2021-August 2021",
    },
    {
      institution: "CMR College of Engineering & Technology",
      degree: "B.tech,Electronics and communication",
      duration: "August 2016- Septemeber 2020",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "Proficient in Java, Python, JavaScript, React.js, Angular, Node.js, Spring Boot, and experienced with databases like MySQL and MongoDB, as well as DevOps tools including Docker and AWS.",
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
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <TbBrandRedux />,
      name: "Redux",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <SiSpringboot />,
      name: "SpringBoot",
    },
    {
      icon: <SiMysql />,
      name: "Mysql",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon:<FaGitAlt/>,
      name:"Git"
    }
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
                <h3 className="text-4xl font-bold">{experienceData.title}</h3>

                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {experienceData.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experienceData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                            text-center lg:text-left"
                          >
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
                <h3 className="text-4xl font-bold">{educationData.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {educationData.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educationData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                            text-center lg:text-left"
                          >
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

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul
                    className="grid grid-cols-2 sm:grid-cols-3  gap-4
                 md:grid-cols-4 xl:gap-[30px]"
                  >
                    {skills.skillist.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className="w-full h-[150px] bg-[#232329] rounded-xl 
                            flex justify-center items-center group"
                              >
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 
                             max-w-[620px] mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start
                          gap-4
                        "
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
