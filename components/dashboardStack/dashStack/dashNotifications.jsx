import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, KeyboardAvoidingView, Spacer, Container} from "native-base"
import { Circle } from "react-native-svg";
import Icon from 'react-native-vector-icons/FontAwesome';

const DashNotifications =({navigation}) =>{
    return(
            <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'}>
                
            <VStack  w={['full','90%', '70%','60%','40%']} p={4} justifyContent={'center'} alignItems={'center'}> 
            
            <VStack mt={8} position={'relative'} w={'full'} alignItems={'center'} justifyContnt={'center'}>
                    
                    <Button variant={'unstyled'} position={'absolute'}  left={0} top={0}> 
                        <Icon name={'arrow-left'}
                        onPress={()=>{
                        navigation.goBack()
                        }}
                    /></Button>
                    <Text fontSize={'xl'} fontWeight={'medium'}>  
                        Notification
                    </Text>
                </VStack>

                <Flex direction={'row-reverse'} w={'full'}>
                    <Text color={'purple.600'} fontSize={'sm'}>Clear All</Text>
                </Flex>
                <ScrollView style={{ flex: 1 }}  w={'full'} bg={'white'} py={2}>
                    <HStack borderWidth={1} rounded={'lg'} borderColor={'gray.200'} my={2}
                     shadow={'sm'}  alignItems={'center'} p={4}>
                        <Box h={10} w={10}  bg={'gray.200'} rounded={'full'} />
                        <Container p={1} fontSize={'lg'}>
                            <HStack>
                                <Text color={'purple.800'} fontSize={'sm'} mx={1}>@Maytt Layman</Text>
                                <Text color={'gray.600'} fontSize={'sm'}>Just sent you a chat request</Text>
                            </HStack>
                        </Container>
                        <Spacer />
                        <Flex direction={'row-reverse'} >
                            <Box>
                                <Text fontWeight={'medium'} fontSize={'xs'}>Today</Text>
                                <Text fontSize={'xs'}>17:31</Text>
                            </Box>
                        </Flex>
                    </HStack>
                    <HStack borderWidth={1} rounded={'lg'} borderColor={'gray.200'} my={2}
                     shadow={'sm'}  alignItems={'center'} p={4}>
                        <Box h={10} w={10}  bg={'gray.200'} rounded={'full'} />
                        <Container p={1} fontSize={'lg'}>
                            <HStack>
                                <Text color={'purple.800'} fontSize={'sm'} mx={1}>@Aga dev</Text>
                                <Text color={'gray.600'} fontSize={'sm'}>Just sent you a chat request</Text>
                            </HStack>
                        </Container>
                        <Spacer />
                        <Flex direction={'row-reverse'} >
                            <Box>
                                <Text fontWeight={'medium'} fontSize={'xs'}>Today</Text>
                                <Text fontSize={'xs'}>17:31</Text>
                            </Box>
                        </Flex>
                    </HStack>
                </ScrollView>
               
            </VStack>

            </HStack>
        
    )
}
export default DashNotifications;