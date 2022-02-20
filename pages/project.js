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

// import {
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogContent,
//   AlertDialogOverlay,
// } from '@chakra-ui/react'
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
  const [data, setData] = useState(projectData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchtrm, setsearchtrm] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
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
              <h1 className="text-primary_orange-0">Projects</h1>
              <h1>- GSSOC&apos;22 </h1>
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
        <div className="flex flex-row justify-center flex-wrap items-center gap-x-10 gap-y-10 mt-9">
          {data
            .filter((curElem, i) => {
              if (searchtrm == "") {
                return curElem;
              } else if (curElem.technology_used.includes(searchtrm)) {
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
                    <div className="mb-2 overflow-hidden rounded-lg md:h-72 w-80 p-5 flex flex-col justify-between">
                      <>
                        <div className="flex flex-col justify-start gap-2">
                          <div className="font-bold text-primary_orange-0 md:text-xl">
                            {i + 1}. {curElem.project_name}
                          </div>
                          <div className="mb-3 text-sm dark:text-white md:text-md md:mb-4">
                            By {curElem.owner_name}
                          </div>
                        </div>

                        <ButtonGroup
                          className="flex flex-row flex-wrap w-full h-fit gap-4 mb-9"
                          variant="outline"
                          spacing="1"
                        >
                          <SimpleGrid
                            columns={{ sm: 2, md: 3 }}
                            spacing={5}
                            margin={1}
                          >
                            {curElem.technology_used
                              .split(",")
                              .map((techStk, k) => {
                                return (
                                  <Button
                                    size="sm"
                                    colorScheme="orange"
                                    width="100%"
                                    className="dark:hover:bg-slate-700 dark:bg-stone-800 rounded-full"
                                    borderRadius="30px"
                                    key={k}
                                    onClick={() => {
                                      setsearchtrm(techStk.trim());
                                    }}
                                  >
                                    {techStk.trim()}
                                  </Button>
                                );
                              })}
                          </SimpleGrid>
                        </ButtonGroup>
                      </>
                    </div>
                    <ProjectModal currProject={curElem} />
                  </div>
                </div>
              );
            })}
        </div>
        <Spacer mt={10} />
      </section>
    </>
  );
};

export default Project;
