import { Flex, Box, Heading, Text,Input, Button, VStack, HStack, KeyboardAvoidingView, Spacer } from 'native-base'
const Verify = ({navigation}) =>{
    return(
        
        <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'} bg={'white'}>
            
            <VStack p={2} w={['90%','80%', '70%','60%','60%']}  alignItems={'center'}>
                
                <Heading size={'xl'} color={'purple.800'} pt={4} mt={8}>Roomie</Heading>
                <VStack w={['full','80%', '70%']} p={1} justifyContent={'center'}>
                    <Text fontSize={'xl'} w={'full'}  fontWeight={'medium'} mt={[4,5,6,8]} py={4}>  
                        Verification
                    </Text>
                    <KeyboardAvoidingView   w={'full'}>
                    <HStack direction={'row'} w={'full'} py={2}>
                        <Input size={'2xl'}  textAlign={'center'} w={16} h={16} color={'purple.800'} bg={'purple.100'} shadow={'sm'}></Input>
                        <Spacer />
                        <Input size={'2xl'} textAlign={'center'} w={16} h={16} color={'purple.800'} bg={'purple.100'} shadow={'sm'}></Input>
                        <Spacer />
                        <Input size={'2xl'} textAlign={'center'} w={16} h={16} color={'purple.800'} bg={'purple.100'} shadow={'sm'}></Input>
                        <Spacer />
                        <Input size={'2xl'} textAlign={'center'} w={16} h={16}  color={'purple.800'} bg={'purple.100'} shadow={'sm'}></Input>
                        <Spacer />
                    </HStack>
                    </KeyboardAvoidingView>

                    <Button rounded={'full'} w={'full'} bg={'purple.800'} mt={8} py={4}
                        onPress={()=>{
                        navigation.navigate('Profile1')
                        }}>
                        VERIFY
                    </Button> 

                    <HStack alignItems={'center'} justifyContent={'center'} pt={2}>
                        <Text  color={'gray.600'} fontSize={'sm'}>Yet to recieve code? </Text>
                        <Button variant={'ghost'} size={'sm'} >
                            <Text fontSize={'xs'} fontWeight={'bold'} color={'purple.800'}> Resend</Text>
                        </Button>
                    </HStack>
                </VStack>

        

            </VStack>
            
        </HStack>
        
    )

}

export default Verify;