import React from 'react'
import { HStack, VStack, Text, Image, Link, Box } from '@chakra-ui/react'
import { ButtonPrimary } from '../Button'
import Cookies from 'js-cookie'

function Navbar() {
    return (
        <HStack justifyContent={'space-between'} px='10%' pt='40px' >
            <HStack alignItems={'flex-start'}>
                <Image src={'/assets/SquidLogo.svg'} boxSize={{ base: '31px', lg: '41px' }} alt='logo squid' />
                <Text fontSize={{ base: '22px', lg: '28px' }} fontWeight={500}>Squid</Text>
            </HStack>
            <HStack>
                <Text fontSize={'14px'} mr={4} color='#9E9E9E' cursor='pointer'>Home</Text>
                {Cookies.get('squid-token') !== undefined ?
                    <ButtonPrimary clickFunction={() => { Cookies.remove('squid-token'); window.location.reload() }} text='Logout' />
                    :
                    <Link href='/login' style={{ textDecoration: 'none' }}>
                        <ButtonPrimary text='Login' />
                    </Link>
                }
            </HStack>
        </HStack>
    )
}

function Hero() {
    return (
        <Box position={'relative'} >
            <Navbar />
            <VStack mt={{ base: '60px', lg: '109px' }}>
                <Text fontWeight={600} fontSize={{ base: '32px', sm: '48px', lg: '64px' }} textAlign={'center'} px={{ base: '15%', sm: '20%', lg: '22.5%' }} lineHeight={{ base: '45px', sm: '60px', lg: '80px' }}>The Most Trusted Crypto App Out There</Text>
                <Text fontSize={{ base: '14px', lg: '18px' }} color={'#9E9E9E'} textAlign={'center'} px={{ base: '15%', sm: '20%', lg: '30%' }} pt='38px'>Squid is the easiest place to buy and sell cryptocurrency today. Completely safe with 100M+ active users.</Text>
            </VStack>
            <Image src='/assets/HeroDesign.svg' boxSize={'130px'} position={'absolute'} bottom={0} left={'10%'} zIndex={-1} display={{ base: 'none', md: 'block' }} />
            <Image src='/assets/HeroDesign.svg' boxSize={'64px'} position={'absolute'} top={'20%'} right={'50%'} zIndex={-1} display={{ base: 'none', md: 'block' }} />
            <Image src='/assets/HeroDesign.svg' boxSize={'96px'} position={'absolute'} bottom={'25%'} right={'10%'} zIndex={-1} display={{ base: 'none', md: 'block' }} />
        </Box>
    )
}

export default Hero