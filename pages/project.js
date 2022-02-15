import React, { useState, useEffect } from "react";
import { projectData } from "./api/projectsData";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SimpleGrid } from '@chakra-ui/react';
import { Spacer } from "@chakra-ui/react";

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
  // const [isOpen, setIsOpen] = React.useState(false)
  // const onClose = () => setIsOpen(false)
  // const cancelRef = React.useRef()
  return (
    <>
      <section>
        <div className="flex items-center justify-center">
          <p className="font-serif text-center dark:text-white text-2xl font-extrabold text-black-100">
            <p className="text-primary_orange-0 text-5xl text center font-extrabold mb-10">
              Projects <span className="dark:text-white">for GSSoC 2022</span>
            </p>
            "Unfinished projects are the symbol of progress, not of imperfection."
          </p>
        </div>
        <div className="flex flex-col justify-center content-center items-center mt-4 ">
        <input type="text" placeholder="Search Projects" className="h-20 w-5/12 pl-5 border-2	border-black dark:hover:bg-white" onChange={(event)=>{
            setsearchtrm(event.target.value);
          }}></input>
        </div>  
        <br />
        <div className="flex flex-row justify-center flex-wrap items-center gap-x-40 gap-y-10 mt-9">
          {data.filter((curElem, i) => {
            if (searchtrm == ""){
              return curElem;
            }
            else if (curElem.technology_used.includes(searchtrm)){
              return curElem;
            }
          }).map((curElem, i) => {
            return (
              <div
                className="flex items-center justify-between w-80"
                key={i}
                data-aos="flip-up"
                data-aos-duration="800"
              >
                <div className="shadow dark:bg-black rounded-lg">
                  <div className="mb-2 overflow-hidden rounded-lg shadow-lg md:h-80 w-80 p-5 flex flex-col justify-between">
                    <>
                      {/*                 
                <Button colorScheme='red' onClick={() => setIsOpen(true)}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog> */}

                      {/* <Button onClick={onOpen}>Open Modal</Button> */}

                      {/* <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Modal Title</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <h6> Duh </h6>
                          </ModalBody>

                          <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                              Close
                            </Button>
                            <Button variant="ghost">Secondary Action</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal> */}

                      <div className="font-bold text-primary_orange-0 md:text-lg">
                        {i + 1}. {curElem.project_name}
                      </div>
                      <p className="mb-3 text-sm dark:text-white md:text-base md:mb-4">
                        {curElem.owner_name}
                      </p>
                      
                      {/* {curElem.mentors_id.map((mentor, j) => {
                        return (
                          <h6 className="mb-3 text-sm text-gray-400" key={j}>
                            {j + 1}. {mentor.name}
                          </h6>
                        );
                      })} */}
                      
                      
                      <ButtonGroup
                        className="flex flex-row flex-wrap w-fit h-fit gap-4 mb-9 pl-7"
                        variant="outline"
                        spacing="2"
                      >
          
                     <SimpleGrid columns={2} spacing={5} margin={1} >
                        {curElem.technology_used
                          .split(",")
                          .map((techStk, k) => {
                            return (
                              <Button size="sm" colorScheme="orange" width="100%" className="dark:hover:bg-slate-700 dark:bg-stone-800" key={k}>
                                {techStk.trim()}
                              </Button>
                            );
                          })}
                      </SimpleGrid>
                      </ButtonGroup>
                    </>
                  </div>
                  <ProjectModal currProject={curElem}/>
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