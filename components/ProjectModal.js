import React, { useState, useEffect } from "react";
import { projectData } from "../pages/api/projectsData";
import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useDisclosure, Lorem } from "@chakra-ui/react";

const ProjectModal = ({ currProject }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <>
    //   <Button onClick={onOpen}>Open Modal</Button>

    //   <Modal isOpen={isOpen} onClose={onClose}>
    //     <ModalOverlay />
    //     <ModalContent>
    //       <ModalHeader>Modal Title</ModalHeader>
    //       <ModalCloseButton />
    //       <ModalBody>
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quos
    //         nisi alias quas corporis in enim corrupti consequuntur, veniam ab
    //         suscipit odio libero recusandae eligendi mollitia labore quis sint
    //         ad officiis rem vero dolores consectetur magni eius! Quae quod
    //         dolor, quos corporis dicta nam ipsam eligendi dolores nisi
    //         exercitationem. Consequuntur.
    //       </ModalBody>

    //       <ModalFooter>
    //         <Button colorScheme="blue" mr={3} onClick={onClose}>
    //           Close
    //         </Button>
    //         <Button variant="ghost">Secondary Action</Button>
    //       </ModalFooter>
    //     </ModalContent>
    //   </Modal>
    // </>
    <>
      <div className="bg-orange-500"><Button className="text-black bg-orange-500 dark:hover:bg-orange-500 ml-20" variant="ghost" onClick={onOpen}>Project Details</Button></div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="dark:bg-black h-96">
          <ModalHeader className="flex text-center justify-center text-orange-500 font-medium font-Rubik border-2	border-red-600 border-dashed">{currProject.project_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex flex-col justify-evenly content-center text-orange-500"> 
          <div className="text-white">{currProject.owner_name}</div>
          <ButtonGroup className="flex flex-row flex-wrap w-fit h-fit gap-8 ml-7" variant="outline"
                        spacing="1">{currProject.technology_used.split(",").map((techStk, k)=>{
                          return(
                            <Button size="sm" colorScheme="orange" key={k}>
                              {techStk.trim()}
                            </Button>
                          )})}
          </ButtonGroup>
            {/* {currProject.mentors_id.map((mentor, j) => {
              return(<p key={j}>{mentor.name}</p>);
            })}   */}
          </ModalBody>

          <ModalFooter className="flex text-center justify-center content-center bg-orange-500 dark:bg-orange-500 ">
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Button className="mr-36 text-black dark:hover:bg-orange-500" variant="ghost">View Projects</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectModal;