import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, KeyboardAvoidingView, Spacer, Container, Badge} from "native-base"
import { Circle } from "react-native-svg";
import Icon from 'react-native-vector-icons/FontAwesome';


const Recommended =({navigation})=>{
    console.log(navigation)
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
        <ScrollView  w={'full'} bg={'white'} py={4} horizontal={true}>
            
            {
                chat.map((item)=>(
                    <Box rounded ={'2xl'} mr={4} h={64} bg={'gray.300'} w={64} key={item.id}>
                        <Box h={32}>
                        </Box>
                        
                        <Box bg={'gray.100'} h={32} roundedBottom={'xl'} p={2}>
                            <HStack pb={1} justifyContent={'center'}>
                                <Text fontSize={'xl'} color={'gray.800'}>{item.name}</Text>
                                <Spacer />
                                <Text fontSize={'sm'} color={'amber.500'}>75% Match</Text>
                            </HStack>
                            <Text  color={'gray.600'} fontSize={'sm'} w={'full'}>{item.shortMessage}</Text>
                            <Spacer />
                            <HStack w={'full'} py={1} pb={2}>
                                <HStack gap={2}  justifyContent={'center'} alignItems='center'>
                                    <Text fontSize={'lg'} mr={1} fontWeight={'medium'}>$35</Text>
                                    <Text color={'xs'}>budget</Text>
                                </HStack>
                                <Spacer />
                                <Button variant={'ghost'} p={0}
                                    onPress={()=>{
                                        navigation.navigate('Profile')
                                    }}>

                                    <Flex direction={'row'} alignItems={'center'} p={1}> 
                                        <Text color={'purple.800'} fontSize={'sm'}  mr={1}>View Details</Text>
                                        <Icon name={'arrow-right'} color={'purple.800'}/> 
                                    </Flex>
                                </Button>
                            </HStack>                            
                            
                        </Box>
                    </Box>
                ))
            }
            
        </ScrollView>
    )
}

const Apartment =({navigation})=>{
    console.log(navigation)

    const apartments = [
        {
            id: 1,
            name: "2 Bedroom Flat",
            shortMessage: "This is a 3 bedrrom apartment meant for the just weddd couples, No room for ",
            budget: 250,
        },
        {
            id: 2,
            name: "Duplex",
            shortMessage: "This is a 3 bedrrom apartment meant for the just weddd couples, No room for ",
            budget: 250,

        },        
    ]
    return(
        <ScrollView  w={'full'} bg={'white'} py={4} horizontal={true}>
            
            {
                apartments.map((item)=>(
                    <Box rounded ={'2xl'} mr={4} bg={'gray.300'} w={64} key={item.id}>
                        <Box h={32}>
                        </Box>
                        
                        <Box bg={'gray.100'} h={32} roundedBottom={'xl'} p={2}>
                            <HStack pb={1} justifyContent={'center'}>
                                <Text fontSize={'xl'} color={'gray.800'}>{item.name}</Text>
                                <Spacer />
                                <Text fontSize={'sm'} color={'amber.500'}>75% Match</Text>
                            </HStack>
                            <Text  color={'gray.600'} fontSize={'sm'} w={'full'}>{item.shortMessage}</Text>
                            <Spacer />
                            <HStack w={'full'} py={1} pb={2}>
                                <HStack gap={2}  justifyContent={'center'} alignItems='center'>
                                    <Text fontSize={'lg'} mr={1} fontWeight={'medium'}>${item.budget}</Text>
                                    <Text color={'xs'}>budget</Text>
                                </HStack>
                                <Spacer />
                                <Button variant={'ghost'} p={0}
                                    onPress={()=>{
                                        navigation.navigate('Profile')
                                    }}>
                                    <Flex direction={'row'} alignItems={'center'} p={1}> 
                                        <Text color={'purple.800'} fontSize={'sm'}  mr={1}>View Details</Text>
                                        <Icon name={'arrow-right'} color={'purple.800'}/> 
                                    </Flex>
                                </Button>
                            </HStack>                            
                            
                        </Box>

                    </Box>
                ))
            }
            
        </ScrollView>
    )
}
export { Recommended, Apartment};