import React, { useState } from 'react'
import { HStack, VStack, Image, Text, Input, Flex, Link } from '@chakra-ui/react'
import { ButtonPrimary, ButtonTertiary } from '../ui/components/Button'
import Cookies from 'js-cookie';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email == "" || password == "") {
            alert("Please fill in all fields");
        } else {
            if (email !== "turnkey@mail.com" && password !== "fe_turnkey") {
                alert("wrong credential")
            } else {
                Cookies.set("squid-token", "logged in", {
                    expires: 365,
                });
                alert("Sucessfully logged in");
                window.location.assign("/")
            }
        }
    }

    return (
        <Flex justify={'center'} align='center' minH={'100vh'}>
            <HStack align={'flex-start'} w='full' px='12%' justify={{ base: 'center', md: 'space-between' }} >
                <VStack align={'flex-start'}>
                    <Text fontWeight={600} fontSize={{ base: '24px', lg: '48px' }} >Login</Text>
                    <Text fontSize={{ base: '14px', lg: '18px' }} color='#9E9E9E' pb='27px' >Enjoy the largest cryptocurrency <br /> exchange at your fingertips.</Text>
                    <VStack spacing={'16px'} w='full'>
                        <Input type='email' onChange={e => setEmail(e.target.value)} value={email} placeholder='Email' fontSize='14px' py='12px' px='24px' bg='#18181C' color='#9E9E9E' border={'none'} _placeholder={{ color: '#9E9E9E' }} />
                        <Input type='password' onChange={e => setPassword(e.target.value)} value={password} placeholder='Password' fontSize='14px' py='12px' px='24px' bg='#18181C' color='#9E9E9E' border={'none'} _placeholder={{ color: '#9E9E9E' }} />
                    </VStack>
                    <HStack pt='44px'>
                        <ButtonPrimary text='Login' clickFunction={handleLogin} />
                        <Link href='/register' style={{ textDecoration: 'none' }}>
                            <ButtonTertiary text="Haven't Registered?" />
                        </Link>
                    </HStack>
                </VStack>
                <Image src='/assets/RegisterDesign.svg' pt='30px' pl='30px' boxSize={'60%'} display={{ base: 'none', md: 'block' }} />
            </HStack>
        </Flex>
    )
}

export default Login