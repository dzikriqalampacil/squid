import React from 'react'
import { Image, VStack, Text, Flex, Link } from '@chakra-ui/react'
import { ButtonPrimary } from '../Button'

function CTA() {
    return (
        <Flex px={{ base: '10%', lg: '12%' }} justify={'space-between'} align={'center'} mt={{ base: '75px', lg: '153px' }} mb='153px' flexDirection={{ base: 'column', lg: 'row' }}>
            <Image src='/assets/CTA.svg' boxSize={{ base: '300px', md: '400px', lg: '510px' }} alt='cta_design' />
            <VStack w={{ base: '80%', lg: '34%' }} alignItems={'flex-start'} mt={{ base: '80px', lg: '0' }} >
                <Text fontSize={{ base: '32px', lg: '48px' }} fontWeight={600} lineHeight={{ base: '42px', lg: '64px' }}>Join the Largest Cryptoasset Marketplace</Text>
                <Text fontSize={'18px'} color='#9E9E9E' pt='12px' pb='31px'>Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</Text>
                <Link href='/register' style={{ textDecoration: 'none' }}>
                    <ButtonPrimary text='Get Started' />
                </Link>
            </VStack>
        </Flex>
    )
}

export default CTA