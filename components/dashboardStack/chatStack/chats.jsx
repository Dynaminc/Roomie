import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, KeyboardAvoidingView, Spacer, Container, Badge} from "native-base"
import { Circle } from "react-native-svg";
import Icon from 'react-native-vector-icons/FontAwesome';

const Chats =()=>{
    const chat = [
        {
            id: 1,
            name: "Matt Lake",
            shortMessage: "Good afternoon bro",
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
            {
                chat.map((item)=>(
                    <HStack borderTopWidth={1}  borderBottomWidth={1} borderColor={'gray.200'} hover={{backgroundColor:'gray.100'}}
                    key={item.id}
                    shadow={'sm'}  alignItems={'center'} p={4}>
                    <Box h={12} w={12} mr={2} bg={'gray.200'} rounded={'full'} />
                    <Container p={1} fontSize={'lg'}>
                            <Text fontSize={'sm'} fontWeight={'medium'}>{item.name}</Text>
                            <Text color={'gray.600'} fontSize={'xs'}>{item.shortMessage}</Text>
                    </Container>
                    <Spacer />
                    <Flex direction={'row-reverse'} >
                        <Box>
                            <Badge bg={'purple.200'} color={'purple.800'} rounded={'full'}>{item.unread}</Badge>
                            <Text fontSize={'xs'}>{item.time}</Text>
                        </Box>
                    </Flex>
                </HStack>
                ))
            }
            
        </ScrollView>
    )
}
export default Chats;