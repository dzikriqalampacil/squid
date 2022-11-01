import React from 'react'
import { HStack, VStack, Image, Text, Input, Flex } from '@chakra-ui/react'
import { ButtonPrimary, ButtonTertiary } from '../ui/components/Button'

function Login() {
    return (
        <Flex justify={'center'} align='center' minH={'100vh'}>
            <HStack align={'flex-start'} w='full' px='12%' justify={{ base: 'center', md: 'space-between' }} >
                <VStack align={'flex-start'}>
                    <Text fontWeight={600} fontSize={{ base: '24px', lg: '48px' }} >Login</Text>
                    <Text fontSize={{ base: '14px', lg: '18px' }} color='#9E9E9E' pb='27px' >Enjoy the largest cryptocurrency <br /> exchange at your fingertips.</Text>
                    <VStack spacing={'16px'} w='full'>
                        <Input placeholder='Email' size='md' bg='#18181C' color='#9E9E9E' border={'none'} _placeholder={{ color: '#9E9E9E' }} />
                        <Input placeholder='Password' size='md' bg='#18181C' color='#9E9E9E' border={'none'} _placeholder={{ color: '#9E9E9E' }} />
                    </VStack>
                    <HStack pt='44px'>
                        <ButtonPrimary text='Login' />
                        <ButtonTertiary text="Haven't Registered?" />
                    </HStack>
                </VStack>
                <Image src='/assets/RegisterDesign.svg' pt='30px' pl='30px' boxSize={'60%'} display={{ base: 'none', md: 'block' }} />
            </HStack>
        </Flex>
    )
}

export default Login