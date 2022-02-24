import React, { useState, useEffect } from "react";
import { projectData } from "./api/projectsData";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SimpleGrid } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import ProjectModal from "../components/ProjectModal";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure, Lorem } from "@chakra-ui/react";

const Project = () => {
  // const [data, setData] = useState(projectData);
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchtrm, setsearchtrm] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const getProjects2022 = async () => {
    const response = await fetch(
      "https://opensheet.elk.sh/1OC5gOWCpUrDXI8HAPEM9iOohoznBfAVF9d-rSMO7FXM/Project2022"
    );
    setData(await response.json());
  };

  useEffect(() => {
    setMounted(true);
    getProjects2022();
  }, []);
  if (!mounted) return null;
  // const [isOpen, setIsOpen] = React.useState(false)
  // const onClose = () => setIsOpen(false)
  // const cancelRef = React.useRef()
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center px-24 w-full">
          <div className="flex flex-col md:flex-row wrap items-center justify-between w-full gap-2">
            <p className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-start flex-col md:flex-row">
              <h1 className="text-primary_orange-0">Projects&nbsp;</h1>
              <h1>-&nbsp;GSSOC&apos;22 </h1>
            </p>
            <div className="flex object-right">
              {theme === "light" ? (
                <div className="border-b-2">
                  <Search2Icon color="black" />
                </div>
              ) : (
                <div className="border-b-2">
                  <Search2Icon color="white" />
                </div>
              )}
              <input
                className="px-3 py-1 border-b-2 bg-transparent outline-none dark:text-white text-black"
                type="search"
                placeholder="Search..."
                name="search"
                id="search"
                onChange={(event) => {
                  setsearchtrm(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <p className="dark:text-white font-sans text-2xl md:text-4xl font-semibold text-black mt-20 px-24 mb-10">
          “Unfinished projects are a symbol of progress, not of imperfection.”
        </p>
        <br />
        <div className="flex flex-row justify-center flex-wrap items-center 
        gap-x-10 gap-y-10 mt-9">
          {data
            .filter((curElem, i) => {
              if (searchtrm == "") {
                return curElem;
              } else if (curElem.technology_used.toLowerCase().includes(searchtrm.toLowerCase())) {
                return curElem;
              }
            })
            .map((curElem, i) => {
              return (
                <div
                  className="flex items-center justify-between w-80"
                  key={i}
                  data-aos="flip-up"
                  data-aos-duration="800"
                >
                  <div className="shadow dark:bg-black rounded-lg">
                    <div className="overflow-y-clip rounded-lg h-fit md:h-80 
                    w-80 flex flex-col justify-start 
                    shadow-lg shadow-black-200 relative">
                      <>
                        <div className="flex flex-col justify-start gap-2 px-5 py-3">
                          <div className="font-bold text-primary_orange-0 md:text-xl">
                            <a 
                          target="_blank"
                          rel="noreferrer"
                          href={curElem.project_link}>
                              {i + 1}. {curElem.project_name}
                            </a>
                          </div>
                          <div className="mb-3 text-sm dark:text-white md:text-md md:mb-4">
                            By {curElem.owner_name}
                          </div>
                        </div>

                          <SimpleGrid
                            columns={{ sm: 2, md: 3 }}
                            spacing={2}
                            margin={1}
                            className="px-2"
                          >
                            {curElem.technology_used
                              .split(",")
                              .sort((a, b) => a.length - b.length)
                              .map((techStk, k) => {
                                return (
                                  <button
                                    className="bg-orange-50 dark:hover:bg-slate-700 dark:bg-stone-800 rounded-2xl w-full py-1
                                    text-orange-600 drop-shadow-md font-semibold"
                                    key={k}
                                    onClick={() => {
                                      setsearchtrm(techStk.trim());
                                    }}
                                  >
                                    {techStk.trim()}
                                  </button>
                                );
                              })}
                          </SimpleGrid>
                      </>
                      <br/><br/>
                    <ProjectModal currProject={curElem} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <br />
        <br />
      </section>
    </>
  );
};

export default Project;
