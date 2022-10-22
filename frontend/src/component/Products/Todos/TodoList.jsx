import { DeleteIcon } from '@chakra-ui/icons'
import { Badge, Box, Flex, Stack, Text,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Radio,
  RadioGroup,
  useColorModeValue,
  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodos, getTodos, updateTodos } from '../../../Redux/Todo/action'
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'
export const TodoList = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {title,discription,tags,colorScheme,_id}=props
  const [payload,setPayload]=useState({})
  const [radiovalue, setValue] =useState("");

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlleDelete = () => {
    //console.log(id);
   
    dispatch(deleteTodos(_id)).then(() => {
      dispatch(getTodos());
    });
  };

 
useEffect(() => {
  setPayload({
    ...payload,
    task_status:radiovalue
  })
}, [radiovalue])

  const handlleUpdate = () => {
   // console.log(_id);
    dispatch(updateTodos(_id,payload)).then(() => {
      dispatch(getTodos());
    });
  };

  return (
    <Box h="inherit" mt={"10"} bg={useColorModeValue("white", "gray.700")}>
      <Flex gap="10px" justifyContent={"space-between"}>
      <Text  fontSize={"20px"}>{title}</Text>
      <Stack direction={"row"} mt="2">
      <DeleteIcon  onClick={handlleDelete}/>
      <FiEdit   onClick={onOpen}/>
      </Stack>
      
      </Flex>
      

      <Text>{discription}</Text>
      <Box  fontSize={"19px"}>
        <Stack w="50%" textAlign={"center"}>
          {
            tags.length&&tags.map((item,index)=>
            {
              return (
                <Badge  h="5" variant='solid' key={index} colorScheme={colorScheme}>
                  {item}
                </Badge>
              )
            })
          }
        </Stack>
      </Box>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Box>
      <Stack direction={"row"} spacing="20px">
        
      <RadioGroup onChange={setValue} value={radiovalue}>
              <Stack fontSize={"20px"}>
                <Radio size="md" value="Todo">Todo</Radio>
                <Radio size="md" value="In-Progress">In-Progress</Radio>
                <Radio size="md" value="done">done</Radio>
              </Stack>
            </RadioGroup>
      </Stack>
            <Button onClick={handlleUpdate}>Update</Button>
     </Box>
          </ModalBody>

        
  
         
        </ModalContent>
      </Modal>
    </Box>
  )
}
