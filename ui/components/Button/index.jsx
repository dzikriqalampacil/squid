import React from 'react'
import { Button, Flex } from '@chakra-ui/react'

export function ButtonPrimary({ text, clickFunction }) {
    return (
        <Button onClick={clickFunction} fontSize={'14px'} fontWeight={400} bg='linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%);'>{text}</Button>
    )
}

export function ButtonSecondary({ text, clickFunction }) {
    return (
        <Flex onClick={clickFunction} color='white' fontSize={{ base: '18px', md: '24px' }} bg='#222228' py={{ base: '18px', md: '24px' }} px={{ base: '24px', md: '34px' }} borderRadius={'10px'} cursor='pointer'>
            {text}
        </Flex>
    )
}

export function ButtonTertiary({ text }) {
    return (
        <Button fontSize={'14px'} fontWeight={400} bg='#222228' color='#9E9E9E'>{text}</Button>
    )
}