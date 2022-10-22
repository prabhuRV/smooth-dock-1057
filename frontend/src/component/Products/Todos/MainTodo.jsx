import { Box, Grid, SimpleGrid, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Radio,
  RadioGroup,
  useColorModeValue,
  VStack,
  CheckboxGroup, } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addinTodo, getTodos } from "../../../Redux/Todo/action";
import { TodoList } from "./TodoList";



export const MainTodo = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [formData, setFormData] = useState({});
  const [radiovalue, setValue] = React.useState("");
  const [catgoryValue, setCatgoryValue] = useState([]);
  const { isLoading, isError, data } = useSelector(
    (state) => state.todos.todos
  );
  
  const dispatch = useDispatch();
 
  const flitervalues = (value) => {
    setCatgoryValue(value);
  };
  useEffect(() => {
    setFormData({
      ...formData,
      task_status: radiovalue,
      tags:catgoryValue
    });
  }, [radiovalue,catgoryValue]);

  

  const handleChange = (e) => {
    const inputName = e.target.name;
    // console.log(inputName);
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };

  const haddleSubmit = (e) => {
    e.preventDefault();
    var value = formData;

    console.log(value);
    if (value) {
      dispatch(addinTodo(value)).then(()=>
      {
        dispatch(getTodos());
      }
      )
      
      onClose()
    }
  }


  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <Box>
  
  <Flex justifyContent={"space-around"} mb="3%" mt="1%">
<Box><Heading>Project</Heading></Box>
<Box><Button onClick={onOpen} colorScheme="whatsapp">Add New Task in Project</Button></Box>
  </Flex>
      

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Box>
      <form onSubmit={haddleSubmit}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Enter yours title"
                name="title"
                onChange={handleChange}
                rounded={"50px"}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Descripition</FormLabel>
              <Input
                type="text"
                placeholder="Enter yours Descripition"
                name="discription"
                onChange={handleChange}
                rounded={"50px"}
              />
            </FormControl>

            <RadioGroup onChange={setValue} value={radiovalue}>
              <Stack direction="row">
                <Radio value="Todo">Todo</Radio>
                <Radio value="In-Progress">In-Progress</Radio>
                <Radio value="done">done</Radio>
              </Stack>
            </RadioGroup>

            <CheckboxGroup
              colorScheme="green"
              defaultValue={catgoryValue}
              onChange={flitervalues}
            >
              <VStack
                spacing={[1, 5]}
                direction={["column", "row"]}
                alignItems={"baseline"}
              >
                <Checkbox value="Official">Official</Checkbox>
                <Checkbox value="Personal">Personal</Checkbox>
                <Checkbox value="Others">Others</Checkbox>
              </VStack>
            </CheckboxGroup>

            <Stack spacing={10} pt={2}>
              <Input
                type={"submit"}
                loadingText="Submitting"
                size="lg"
                bg={"#3c07ff "}
                color={"white"}
                _hover={{
                  bg: "#3c07ff ",
                }}
                rounded={"50px"}
              />
            </Stack>
          </Stack>
        </Box>
      </form>
    </Box>
          </ModalBody>

        
  
         
        </ModalContent>
      </Modal>
 
          <SimpleGrid  columns={[1, 2, 3]} spacing="30px">
          <Box width={"300px"} >
      <Heading>Todo</Heading>
      {data.length > 0 &&
        data
          .filter((item) => item.task_status === "Todo")
          .map((todo) => {
            return <TodoList key={todo._id} {...todo} colorScheme="red" />;
          })}
    </Box>
    <Box width={"300px"} >
      <Heading>In-Progress</Heading>
      {data.length > 0 &&
        data
          .filter((item) => item.task_status === "In-Progress")
          .map((todo) => {
            return <TodoList key={todo._id} {...todo} colorScheme="purple" />;
          })}
    </Box>
    <Box width={"300px"}>
        <Heading>Done</Heading>
        {data.length > 0 &&
          data
            .filter((item) => item.task_status === "done")
            .map((todo) => {
              return <TodoList key={todo._id} {...todo} colorScheme="green" />;
            })}
      </Box>
          </SimpleGrid>
        </Box>
      
  );
};
