import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, KeyboardAvoidingView, Spacer, Container, Badge} from "native-base"
import { Circle } from "react-native-svg";
import Icon from 'react-native-vector-icons/FontAwesome';

const Roommate =({navigation})=>{
    const chat = [
        {
            id: 1,
            name: "Matt Lake",
            shortMessage: "Paul is currently in need of roommates. Send me a chat request to be my rew roomie",
            unread: 4,
            time: '17:31'
        },
        {
            id: 2,
            name: "Agba Dev",
            shortMessage: "Leemao, this is so nice bruh",
            unread: 2,
            time: '12:00',

        },        
    ]
    return(
        <ScrollView style={{ flex: 1 }}  w={'full'} bg={'white'} py={2}>
            <Box w={'full'}>
            {
                chat.map((item)=>(
                        <HStack borderColor={'gray.200'} shadow={'sm'} bg={'gray.100'} rounded={'xl'} my={2} key={item.id}
                        h={40}>  
                            <Box style={{ flex: 1 }} w={'40%'}  mr={1} bg={'gray.200'} roundedLeft={'xl'} />
                            <Box p={1} fontSize={'lg'} w={'60%'}>
                                    <HStack alignItems={'center'} justifyContent={'center'} py={2}>
                                        <Text fontSize={'lg'} fonteight={'medium'}>{item.name}</Text>
                                        <Spacer />
                                        <Flex pr={2} direction={'row-reverse'} alignItems={'center'} justifyContent={'center'}>
                                            <Text mx={2}>3+ Reviews</Text>
                                            <Box h={4} w={4} bg={'purple.300'} rounded={'full'}></Box>
                                            <Box h={4} w={4} bg={'purple.200'} rounded={'full'}></Box>
                                            
                                        </Flex>
                                    </HStack>
                                    <Text fontSize={'sm'} py={2} color={'gray.600'}>{item.shortMessage}</Text>
                                    <Spacer />
                                    <HStack w={'full'}>
                                        <HStack gap={2}  justifyContent={'center'} alignItems='center'>
                                            <Text fontSize={'sm'} mr={1} fontWeight={'medium'}>$35</Text>
                                            <Text color={'xs'}>budget</Text>
                                        </HStack>
                                        <Spacer />
                                        <Button variant={'ghost'} p={0}
                                        onPress={()=>{
                                            navigation.navigate('Requestsent')
                                        }}
                                        >
                                            <Flex direction={'row'} alignItems={'center'} p={1}> 
                                                <Text color={'purple.800'} fontSize={'sm'}  mr={1}>Send Chat Request</Text>
                                                <Icon name={'arrow-right'} color={'purple.800'}/> 
                                            </Flex>
                                        </Button>
                                    </HStack>
                            </Box>

                    </HStack>
                ))
            }
            </Box>
            
        </ScrollView>
    )
}
export default Roommate;