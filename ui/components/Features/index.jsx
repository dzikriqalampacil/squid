import React from 'react'
import { Text, Box, VStack, SimpleGrid, Image, Flex } from '@chakra-ui/react'

function Card({ image, title, desc }) {
    return (
        <VStack bg='#18181C' borderRadius={'20px'} w={{ base: '250px', lg: '350px' }} h={{ base: '271px', lg: '371px' }} justify={'center'} align='center' px='23px' py='50px'>
            <Flex bg='#222228' borderRadius={'30px'} p={{ base: '15px', lg: '30px' }} mb={{ base: '10px', lg: '40px' }} justify={'center'}>
                <Image src={image} boxSize={{ base: '30px', lg: '45px' }} />
            </Flex>
            <Text textAlign={'center'} fontWeight={600} fontSize={{ base: '16', lg: '20px' }} color='white'>{title}</Text>
            <Text textAlign={'center'} fontSize='14px' color='#9E9E9E' mt='15px'>
                {desc}
            </Text>
        </VStack>
    )
}

function Features() {
    return (
        <Box mt='15vw' px='10%'>
            <Text fontWeight={600} fontSize={{ base: '24px', lg: '48px' }}>
                Why bother using Squid?
            </Text>
            <Text mt={{ base: '20px', md: '33px' }} fontSize={{ base: '14px', lg: '18px' }} color='#9E9E9E'>
                Here are a few reasons why you should choose Squid <br />
                as your primary Crypto Application
            </Text>
            <SimpleGrid minChildWidth={{ base: '250px', lg: '360px' }} spacing={'60px'} mt='56px' justifyItems={'center'}>
                <Card image='/assets/Scissor.svg' title='Low Trading Fees' desc='Our platform offers one of the lowest trading fees (<0.1%) in the cryptoasset industry.' />
                <Card image='/assets/Storage.svg' title='Secure Storage' desc="Most user's funds and assets are safely stored in offline, cold storage facilities." />
                <Card image='/assets/Scatter.svg' title='Diverse Asset Portfolio' desc='Buy, trade or sell up to 675+ cryptoassets on Squid with a growing number of assets added daily.' />
                <Card image='/assets/Wallet.svg' title='Encrypted Wallets' desc='Advanced security measures, including multisignature and threshold signature schemes (TSS)' />
                <Card image='/assets/CustomerService.svg' title='Dedicated Support 24/7' desc='Got a problem? Just get in touch. Our support team is available 24/7.' />
                <Card image='/assets/FingerPrint.svg' title='Latest Authenticator Tools' desc='Squid supports the world’s most secure two-factor authentication tools, including hardware and app-based methods.' />
            </SimpleGrid>
        </Box>
    )
}

export default Features