import classNames from "classnames"
import { MonotonFont, BreeSerifFont } from "@/common/font"
import { SECTION_TYPE } from "../tabs/constants"
import Link from "../link"
import Image from "next/image"

const projectList = [
  {
    img: "/projects/paint-board.png",
    title: "React Playground",
    link: "http://tuskers.top:5173/",
    github: "https://github.com/tuskermanshu/playground-react",
    desc: "A comprehensive web-based development environment built with React, offering a flexible platform for prototyping and experimenting with modern web components. This playground provides instant setup, real-time previews, and a seamless development experience without any complex configuration.",
  },
  {
    img: "/projects/one-space.png",
    title: "One Space",
    link: "http://tuskers.top",
    github: "https://github.com/LHRUN/one-space",
    desc: "One Space is the current website, as the first window to present myself, welcome to browse!"
  },
  {
    img: "/projects/work.svg",
    title: "My Work",
    desc: "The above are open source projects that I develop in my spare time. At work, I am a front-end development engineer mainly responsible for C-end projects, focusing on media and e-commerce industry. My work involves multiple platforms, including PC, mobile, mini program and APP. Brands worked and served include Converse, Coach, UA, and DJCars.",
    maxWidth: "170px"
  }
]

const Projects = () => {
  return (
    <div id={SECTION_TYPE.PROJECTS} className="w-full mt-32 pt-40 relative">
      <div
        className={classNames("w-full text-center text-6xl", MonotonFont.className)}
      >
        Projects
      </div>

      <div className="relative w-full">
        <div
          className="w-[90%] max-w-[1040px] mt-20 mx-auto relative rounded-3xl"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 15px 0px"
          }}
        >
          <div className="relative z-[2]">
            {
              projectList.map((project, index) => (
                <div
                  className="flex px-10 gap-x-4 relative py-12"
                  key={index}
                  style={{
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    wordSpacing: "0.2rem"
                  }}
                >
                  <div className={classNames("w-1/2 flex-1", BreeSerifFont.className)}>
                    <div className="text-4xl text-center font-black">{project.title}</div>

                    <Image
                      src={project.img}
                      className="w-full h-auto rounded-xl my-5 mx-auto hidden max-600:block dark:opacity-80"
                      style={{
                        maxWidth: project.maxWidth || "auto"
                      }}
                      alt="projectImage"
                      width={200}
                      height={200}
                    /> 

                    {
                      project.link && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Link: </span>
                          <Link href={project.link} />
                        </div>
                      )
                    }
                    {
                      project.github && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Github: </span>
                          <Link href={project.github} />
                        </div>
                      )
                    }
                    <div className="text-base mt-2 flex">
                      <span className="font-semibold shrink-0 w-16">Desc: </span>
                      <span>
                        {project.desc}
                      </span>
                    </div>
                    {
                      project.author && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Author: </span>
                          <span className="whitespace-pre-line">
                            {project.author}
                          </span>
                        </div>
                      )
                    }
                  </div>

                  <div className="w-1/2 h-fit shrink-0 sticky top-20 justify-center flex max-600:hidden dark:opacity-80">
                    <Image
                      src={project.img}
                      width={200}
                      height={200}
                      className="w-full h-fit rounded-xl"
                      alt="projectImg"
                      style={{
                        maxWidth: project.maxWidth || "auto"
                      }}
                    />
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
