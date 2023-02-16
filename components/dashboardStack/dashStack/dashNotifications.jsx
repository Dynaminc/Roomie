import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, KeyboardAvoidingView, Spacer, Container, Center} from "native-base"
import { Circle } from "react-native-svg";
import Icon from 'react-native-vector-icons/FontAwesome';

const DashNotifications =({navigation}) =>{
    return(
            <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'}  bg={'white'}>
                
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
                        <Box h={9} w={9}  bg={'gray.200'} rounded={'full'} />

                        <Text color={'gray.600'} > @Maytt Layman Just sent you a chat request
                        </Text>

                    
                        <Spacer />
                        <Flex direction={'row-reverse'} p={2} >
                            <Box>
                                <Text fontWeight={'medium'} fontSize={'xs'}>Today</Text>
                                <Text fontSize={'xs'}>17:31</Text>
                            </Box>
                        </Flex>
                    </HStack>
                    <HStack borderWidth={1} rounded={'lg'} borderColor={'gray.200'} my={2}
                     shadow={'sm'}  alignItems={'center'} p={4}>
                        <Box h={10} w={10}  bg={'gray.200'} rounded={'full'} />
                        <Text color={'gray.600'} > @Maytt Layman Just sent you a chat request
                        </Text>
                
                        <Spacer />
                        <Flex direction={'row-reverse'} p={2}>
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