import React from 'react'
import { Button, Flex, Text, Image } from '@chakra-ui/react'

export function ButtonPrimary({ text, clickFunction }) {
    return (
        <Button onClick={clickFunction} fontSize={'14px'} fontWeight={400} bg='linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%);'>{text}</Button>
    )
}

export function ButtonSecondary({ text, clickFunction }) {
    return (
        <Flex onClick={clickFunction} align='center' justify={'center'} color='white' bg='#222228' py={{ base: '5px', md: '13px' }} px={{ base: '24px', md: '34px' }} borderRadius={'10px'} cursor='pointer'>
            <Text fontSize={{ base: '18px', md: '24px' }}>{text}</Text>
            <Image src='/assets/RightArrow.svg' ml='18px' boxSize={'43px'} alt='arrow' />
        </Flex>
    )
}

export function ButtonTertiary({ text }) {
    return (
        <Button fontSize={'14px'} fontWeight={400} bg='#222228' color='#9E9E9E'>{text}<Image src='/assets/SmallArrow.svg' ml='10px' boxSize={'18px'} alt='arrow' /></Button>
    )
}