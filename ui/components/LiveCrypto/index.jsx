import React from 'react'
import { Box, Flex, Image, HStack, Text, VStack } from '@chakra-ui/react'
import { ButtonPrimary, ButtonSecondary } from '../Button'

function CryptoItem({ name, id, price, change }) {
    return (<>
        <Box display={{ base: 'none', md: 'block' }}>
            <HStack justify={'space-between'} alignItems='center' mb='33px' >
                <HStack align={'flex-end'}>
                    <Text fontSize={{ base: '16px', lg: '32px' }} lineHeight={{ base: '20px', lg: '35px' }} color='#D1D0D1'>{name}</Text>
                    <Text fontSize={{ base: '16px', lg: '24px' }} lineHeight={{ base: '18px', lg: '29px' }} color='#7D7D7D'>{id}</Text>
                </HStack>
                <Text fontSize={{ base: '16px', lg: '32px' }} color='#F4F4F4'>${price}</Text>
                {change[0] === "-" ?
                    <Text fontSize='16px' color='#e64b58'>{change}%</Text> :
                    <Text fontSize='16px' color='#20BCA4'>+{change}%</Text>
                }
                <ButtonPrimary text='Trade' />
            </HStack>
            <Box h='1px' bg='rgba(244, 244, 244, 0.3)' mb='39px' />
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
            <HStack justify={'space-between'} mb='20px' >
                <VStack align={'flex-start'}>
                    <Text fontSize={{ base: '16px', lg: '32px' }} color='#D1D0D1'>{name}</Text>
                    <Text fontSize={{ base: '16px', lg: '24px' }} color='#7D7D7D'>{id}</Text>
                </VStack>
                <VStack align={'flex-end'}>
                    <Text fontSize={{ base: '16px', lg: '32px' }} color='#F4F4F4'>${price}</Text>
                    {change[0] === "-" ?
                        <Text fontSize='16px' color='#e64b58'>{change}%</Text> :
                        <Text fontSize='16px' color='#20BCA4'>+{change}%</Text>
                    }
                </VStack>
                <ButtonPrimary text='Trade' />
            </HStack>
            <Box h='1px' bg='rgba(244, 244, 244, 0.3)' mb='20px' />
        </Box>
    </>
    )
}

function CryptoList({ allCrypto }) {
    return (
        <Box bg='#131415' w={{ base: '95%', md: '80%' }} borderRadius={'25px'} p={{ base: '30px', md: '65px' }} mt='63px'>
            {allCrypto && allCrypto.data.map(ctx => <CryptoItem key={ctx.symbol} name={ctx.name} id={ctx.symbol} price={ctx.quote.USD.price.toString().slice(0, 8)} change={ctx.quote.USD.volume_change_24h.toString().slice(0, 6)} />)}
            <Flex justify={'center'}>
                <ButtonSecondary clickFunction={() => alert("To Be Developed")} text='Learn More' />
            </Flex>
        </Box>
    )
}

function LiveCrypto({ cryptoData }) {
    return (
        <Flex flexDirection={'column'} justify='center' align='center' position='relative'>
            <CryptoList allCrypto={cryptoData} />
            <Image src={'/assets/Decor.svg'} w='full' bottom='-12.5vw' position={'absolute'} zIndex='-1' alt='decor_bg' />
        </Flex>
    )
}

export default LiveCrypto

