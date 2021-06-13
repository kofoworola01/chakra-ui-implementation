import React from 'react'
import { 
    Box, Flex, HStack, Link, Input, Image, Icon, InputGroup, InputLeftElement, InputRightElement, Button, Text,
} from "@chakra-ui/react"
import { BsGrid3X3Gap, BsFillMicFill } from "react-icons/bs"
import { SearchIcon } from "@chakra-ui/icons"
import Kofo from "../../img/kofo.jpg"
import google from "../../img/google-logo.png"
import leaf from "../../img/leaf.png"
 
function homepage() {

    return (
        <Box maxW="100%"  bg="teal.400">

            <Flex h="48px" justify="flex-end" p={7} mb="4px" >
                <HStack spacing="24px">
                    <Link fontSize="sm">Gmail</Link>
                    <Link fontSize="sm">Images</Link>
                    <Icon as={BsGrid3X3Gap} w={5} h={5} color="gray.600"/>
                    <Image src={Kofo} boxSize="30px" objectFit="cover" borderRadius="full"/>
                </HStack>
            </Flex>

            <Flex justify="center" alignItems="center" direction="column" mb="198px">
                    <Image src={google} h="92px" mb="26px" />
                    
                    <InputGroup w={550} mb={8}>
                        <Input borderRadius="full" h="44px" _hover={{shadow: "md"}}/>
                        <InputLeftElement children={<SearchIcon color="gray.400" />}/>
                        <InputRightElement children={<Icon as={BsFillMicFill} w={5} h={5} color="gray.600"/>}/>
                    </InputGroup>

                    <HStack mb={6}>
                        <Button bg="#faf8f9" color="black" fontWeight="normal" fontSize="sm" h="36px">Google Search</Button>
                        <Button bg="#faf8f9" color="black" fontWeight="normal" fontSize="sm" h="36px">I'm Feeling Lucky</Button>
                    </HStack>

                    <HStack letterSpacing="tighter">
                        <Text fontSize="sm">Google offered in:</Text>
                        <Link fontSize="sm" color="#1a0dab" >Hausa</Link>
                        <Link fontSize="sm" color="#1a0dab">Igbo</Link>
                        <Link fontSize="sm" color="#1a0dab">Èdè Yorùbá</Link>
                        <Link fontSize="sm" color="#1a0dab">Nigerian Pidgin</Link>
                    </HStack>
                    
            </Flex>

            <Box h="92px" bg="#f2f2f2" color="#70757a" letterSpacing="tighter" fontSize="sm">
                <Box h="46px" borderBottom="1px" borderColor="#dadce0" pl={7} pt={2}>
                    <Text>Nigeria</Text>
                </Box>
                <Flex justifyContent="space-between" m={2}>

                   <HStack ml={5} spacing="30px">
                       <Link>About</Link>
                       <Link>Advertising</Link> 
                       <Link>Business</Link> 
                       <Link>How Search Works</Link>                     
                   </HStack>

                   <HStack mr={40}>
                    <Image src={leaf} boxSize="13px" objectFit="cover" />   
                    <Link>Carbon neutral since 2007</Link>
                   </HStack>

                   <HStack spacing="30px" mr={5}>
                       <Link>Privacy</Link>
                       <Link>Terms</Link> 
                       <Link>Settings</Link> 
                   </HStack>
                </Flex>
            </Box>
            
            
        </Box>
        
    )
}

export default homepage
