import { Flex, Box, Heading, Text,Input, Button, VStack, HStack, KeyboardAvoidingView, Spacer } from 'native-base'
const SignIn = ({navigation}) =>{
    return(
        
        <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'} bg={'white'}>
            
            <VStack p={2} w={['90%','80%', '70%','60%','40%']}  alignItems={'center'}>
                
                <Heading size={'xl'} color={'purple.800'} pt={4} mt={8}>Roomie</Heading>
                <VStack w={['full','80%', '70%']} p={1} justifyContent={'center'}>
                    <Text fontSize={'xl'} w={'full'}  fontWeight={'medium'} mt={[4,5,6,8]} py={2}>  
                        Sign In
                    </Text>
                    <KeyboardAvoidingView   w={'full'}>
                    <Text color={'gray.600'} w={'full'} fontSize={'xs'} py={3} mt={2}>  
                        Email
                    </Text>
                    <Input bg={'gray.100'} h={12} fontSize={'sm'} borderWidth={0} placeholder="johndoe@gmail.com" w={'full'} rounded={'full'} />

                    <Text color={'gray.600'} w={'full'} fontSize={'xs'} py={3} mt={2}>  
                        Password
                    </Text>
                    <Input bg={'gray.100'} h={12} fontSize={'sm'} borderWidth={0} placeholder="********" w={'full'} rounded={'full'} />

                    </KeyboardAvoidingView>

                    <Button rounded={'full'} w={'full'} bg={'purple.800'} mt={8} py={4}
                        onPress={()=>{
                        navigation.navigate('Signin')
                        }}>
                        Sign In
                    </Button>

                    <HStack alignItems={'center'} py={2} mt={4} w={'full'}>
                        <Button rounded={'full'} py={4} w={'45%'} bg={'blue.100'}>
                            <Text color={'blue.700'}>Twitter</Text>
                        </Button>
                        <Spacer />
                        <Button rounded={'full'} py={4} w={'45%'} bg={'purple.100'} color={'purple.700'}>
                        <Text color={'blue.700'}>Facebook</Text>
                        </Button>                
                    </HStack>  

                    <HStack alignItems={'center'} justifyContent={'center'} pt={2}>
                        <Text  color={'gray.600'} fontSize={'sm'}>Don't have an account? </Text>
                        <Button variant={'ghost'} size={'sm'} 
                            onPress={()=>{
                            navigation.navigate('Signup')
                            }}>
                            <Text fontSize={'xs'} fontWeight={'bold'} color={'purple.800'}> Sign Up</Text>
                        </Button>
                    </HStack>
                </VStack>

        

            </VStack>
            
        </HStack>
        
    )

}

export default SignIn;