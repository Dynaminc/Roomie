import { Flex, Box, Heading, Text,Input, Button, VStack, HStack, KeyboardAvoidingView, Spacer, ScrollView } from 'native-base'
const ProfileScreen1 = ({navigation}) =>{
    return(
        <ScrollView style={{ flex: 1 }}  w={'full'} bg={'white'} > 
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
                    
                    <Box bg={'purple.100'} w={'40%'} h={1}></Box>

                    <VStack rounded={'full'} bg={'purple.100'} h={6} w={6} alignItems={'center'} justifyContent={'center'}>
                        <Text color={'purple.800'}>2</Text>
                    </VStack>

                    <Box bg={'purple.100'} w={'40%'} h={1}></Box>

                    <VStack rounded={'full'} bg={'purple.100'} h={6} w={6} alignItems={'center'} justifyContent={'center'}>
                        <Text color={'purple.800'}>3</Text>
                    </VStack>
                </Flex>
                <Text color={'gray.600'} fontSize={'sm'} p={3} mt={2} >  
                        Let's get you started in just 3 easy steps
                </Text>

                <VStack w={['full','80%', '70%']} p={1} justifyContent={'center'}>
                    <Text fontSize={'2xl'} w={'full'}  fontWeight={'medium'} mt={[4,5,6,8]} >  
                        Profile
                    </Text>
                    <Text w={'full'} fontSize={'lg'} color={'gray.500'}  fontWeight={'medium'} mb={4}>  
                        Let's get to know you better
                    </Text>

                    <KeyboardAvoidingView   w={'full'}>
                    <Text color={'gray.600'} w={'full'} fontSize={'sm'} py={3} mt={2}>  
                        Full Name
                    </Text>
                    <Input bg={'gray.100'} h={12} fontSize={'sm'} borderWidth={0} placeholder="John Doe" w={'full'} rounded={'full'} />

                    <Text color={'gray.600'} w={'full'} fontSize={'sm'} py={3} mt={2}>  
                        Occupation
                    </Text>
                    <Input bg={'gray.100'} h={12} fontSize={'sm'} borderWidth={0} placeholder="e.g Agba Dev" w={'full'} rounded={'full'} />


                    <Text color={'gray.600'} w={'full'} fontSize={'sm'} py={3} mt={2}>  
                        Age
                    </Text>
                    <Input bg={'gray.100'} h={12} fontSize={'sm'} borderWidth={0} placeholder="" w={'full'} rounded={'full'} />

                    <Text color={'gray.600'} w={'full'} fontSize={'sm'} py={3} mt={2}>  
                        Location
                    </Text>
                    <Input bg={'gray.100'} h={12} fontSize={'sm'} borderWidth={0} placeholder="Magodo, Lagos State" w={'full'} rounded={'full'} />                    
                    </KeyboardAvoidingView>

                    <Button rounded={'full'} w={'full'} bg={'purple.800'} mt={8} py={4}
                        onPress={()=>{
                        navigation.navigate('Profile2')
                        }}>
                        <Text fontSize={'lg'} color={'white'}>Next</Text>
                    </Button>

                </VStack>

        

            </VStack>
            
        </HStack>
        </ScrollView>   
    )

}

export default ProfileScreen1;