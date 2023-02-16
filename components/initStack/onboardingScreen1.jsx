import { Flex, Box, Text, Button, VStack, HStack } from 'native-base'
const OnboardingScreen1 = ({navigation}) =>{
    return(
        <HStack style={{ flex: 1 }} w={'full'} bg={'white'} justifyContent={'center'} position={'relative'}>
                
                <Button variant={'unstyled'} size={'lg'} position={'absolute'} top={10} right={5}
                 onPress={()=>{
                    navigation.navigate('Signup')
                 }}
                >
                    Skip
                </Button>
                
            <VStack p={4}  w={['90%','80%', '70%','60%','60%']} alignItems={'center'} justifyContent={'center'}>

                <Box h={64} bg={'gray.100'} w={'full'}>
                </Box>
                <Text fontSize={'xl'} fontWeight={'medium'} py={2} mt={2}>  
                    Find the Perfect Roomate
                </Text>
                <Text fontSize={'xs'} fontWeight={'medium'} py={2} textAlign={'center'}>  
                    Get to find someone with the same interests as you and make them your roomie
                </Text>  
                <HStack justifyContent={'center'}  py={2} mb={4}>
                    <Box h={2} w={4} m={1} borderRadius={25} bg={'purple.800'}></Box>
                    <Box h={2} w={2} m={1} borderRadius={25} bg={'gray.300'}></Box>
                </HStack>          
                <Button rounded={'full'} w={['full','60%','50%','55%','40%']} bg={'purple.800'}
                 onPress={()=>{
                    navigation.navigate('Onboarding2')
                 }}>
                    NEXT
                </Button>
            </VStack>
        </HStack>
    )

}

export default OnboardingScreen1;