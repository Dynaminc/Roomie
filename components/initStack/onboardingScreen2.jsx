import { Flex, Box, Text, Button, IconButton, Icon, VStack, HStack } from 'native-base'
import MaterialIcons from 'react-native-vector-icons'
const OnboardingScreen2 = ({navigation}) =>{
    return(
        <HStack style={{ flex: 1 }} w={'full'} bg={'white'} justifyContent={'center'}  position={'relative'}>

            <VStack p={4}  w={['90%','80%', '70%','60%','60%']} bg={'whitea'} alignItems={'center'} justifyContent={'center'}>
                
                
                    <IconButton 
                    size={'lg'} position={'absolute'} top={10} left={5}
                     variant={'unstyled'} />
                {/* icon={<Icon as={MaterialIcons} name="arrow-left" />}  */}

                <Box h={64} bg={'gray.100'} w={'full'}>
                </Box>
                <Text fontSize={'xl'} fontWeight={'medium'} py={2} mt={2}>  
                    Looking for an Apartment?
                </Text>
                <Text fontWeight={'lg'} color = {'gray.700'} py={2} textAlign={'center'}>  
                    Get to explore the best apartments based on your budget
                </Text>  
                <HStack justifyContent={'center'}  py={2} mt={2} mb={4}>
                    <Box h={2} w={2} m={1} borderRadius={25} bg={'gray.300'}></Box>
                    <Box h={2} w={4} m={1} borderRadius={25} bg={'purple.800'}></Box>
                    
                </HStack>          
                <Button rounded={'full'} w={['full','60%','50%','55%','40%']} bg={'purple.800'}
                onPress={()=>{
                navigation.navigate('Signup')
                }}>
                    GET STARTED
                </Button>
            </VStack>
        </HStack>
    )

}

export default OnboardingScreen2;