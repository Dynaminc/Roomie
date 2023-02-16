import { Flex, Box, Heading, Text,Input, Button, VStack, HStack, KeyboardAvoidingView, Spacer, ScrollView } from 'native-base'

const ProfileScreen3 = ({navigation}) =>{
    return(
        <ScrollView style={{ flex: 1 }}  w={'full'} bg={'white'}> 
        <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'}>
            
            <VStack  p={2} w={['90%','80%', '70%','60%','60%']}  alignItems={'center'} justifyContent={'center'}>
                
                <Flex w={['full','90%', '80%','70%','50%']} size={'xl'} 
                direction={'row'}
                color={'purple.800'} 
                pt={8} mt={8} alignItems={'center'}
                h={8}
                justifyContent={'center'}>
                    <VStack rounded={'full'} bg={'purple.800'} h={6} w={6} alignItems={'center'} justifyContent={'center'}>
                        <Text color={'white'}>1</Text>
                    </VStack>
                    
                    <Box bg={'purple.800'} w={'40%'} h={1}></Box>

                    <VStack rounded={'full'} bg={'purple.800'} h={6} w={6} alignItems={'center'} justifyContent={'center'}>
                        <Text color={'white'}>2</Text>
                    </VStack>

                    <Box bg={'purple.800'} w={'40%'} h={1}></Box>

                    <VStack rounded={'full'} bg={'purple.800'} h={6} w={6} alignItems={'center'} justifyContent={'center'}>
                        <Text color={'white'}>3</Text>
                    </VStack>
                </Flex>
                <Text color={'gray.600'} fontSize={'sm'} p={3} mt={2} >  
                        You are done
                </Text>

                <VStack w={['full','80%', '70%']} p={1} justifyContent={'center'} alignItems={'center'}>
                    
                    <Box h={96}>
                        
                    </Box>
                    <Button rounded={'full'} w={['full','80%','70%','50%']} bg={'purple.800'} mt={8}
                        onPress={()=>{
                        navigation.navigate('Mytabs')
                        }}>
                        <Text fontSize={'lg'} color={'white'}>Next</Text>
                    </Button>

                </VStack>

        

            </VStack>
            
        </HStack>
        </ScrollView>   
    )

}

export default ProfileScreen3;