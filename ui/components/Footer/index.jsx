import React from 'react'
import { HStack, VStack, Image, Text, Flex } from '@chakra-ui/react'

function Footer() {
    return (
        <>
            <Flex bg='#18181C' px='12%' py='50px' justify={'space-between'} flexDirection={{ base: 'column', md: 'row' }}>
                <VStack w='full' align={'flex-start'}>
                    <Image src='/assets/SquidLogo.svg' alignSelf={'flex-start'} mb='28px' />
                    <Text color='#9E9E9E' fontSize='14px' lineHeight={'24px'} w={{ base: '80%', md: '40%' }}>
                        Trading cryptocurrencies involves significant risk and can result in the loss of your capital.
                    </Text>
                </VStack>
                <VStack align={'flex-start'} w={{ base: '100%', md: '50%' }} mt={{ base: '30px', md: '0' }}>
                    <Text fontWeight={600}>
                        Sections
                    </Text>
                    <HStack justifyContent={'space-between'} w='full' color='#9E9E9E' fontSize={'14px'}>
                        <VStack align={'flex-start'}>
                            <Text>Home</Text>
                            <Text>Live Trade</Text>
                            <Text>Pricing</Text>
                            <Text>Consult</Text>
                        </VStack>
                        <VStack align={'flex-start'}>
                            <Text>Home</Text>
                            <Text>Live Trade</Text>
                            <Text>Pricing</Text>
                            <Text>Consult</Text>
                        </VStack>
                        <VStack align={'flex-start'}>
                            <Text>Home</Text>
                            <Text>Live Trade</Text>
                            <Text>Pricing</Text>
                            <Text>Consult</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </Flex>
            <Flex px='12%' py='32px' bg='#121216' justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }}>
                <Text color='#9E9E9E' fontSize={'14px'} mb={{ base: '20px', md: '0' }}>Copyright © 2022 Dzikri. All rights reserved.</Text>
                <HStack>
                    <Flex bg='#18181C' boxSize={'40px'} justify='center' align={'center'} borderRadius='16px'>
                        <Image src='/assets/Twitter.svg' />
                    </Flex>
                    <Flex bg='#18181C' boxSize={'40px'} justify='center' align={'center'} borderRadius='16px'>
                        <Image src='/assets/LinkedIn.svg' />
                    </Flex>
                    <Flex bg='#18181C' boxSize={'40px'} justify='center' align={'center'} borderRadius='16px'>
                        <Image src='/assets/Discord.svg' />
                    </Flex>
                </HStack>
            </Flex>
        </>
    )
}

export default Footer