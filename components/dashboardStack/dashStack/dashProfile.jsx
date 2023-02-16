import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input} from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';

const DashProfile =({navigation}) =>{
    const reviews = [
         {id:1, name: 'Oluwaseyi Brown', comment: 'Nice to live with'},
         {id:2, name: 'Larry Paul', comment: 'Excellent Person'},
         {id:3, name: 'Agba Dev', comment: 'Good listener'},
    ]
    return(
        <ScrollView style={{ flex: 1 }}  w={'full'} >
            <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'}>
                
            <VStack  w={['full','90%', '80%','70%','50%']} p={4} justifyContent={'center'} alignItems={'center'}> 
                <Text fontSize={'xl'} fontWeight={'medium'} mt={[4,5,6,8]} >  
                    Profile
                </Text>

                <Box rounded={'2xl'} h={40} bg={'gray.200'} w={'full'} mt={8}>
                    
                </Box>
                    
                <Text  w={'full'} mt={8} color={'orange.500'}>  
                    Bio:
                </Text>
                <Text w={'full'} fontSize={'sm'} color={'gray.500'} mb={4}>  
                    Lorem ipsum Dolor last las everyone go cast somehow agba dev dev always dev
                </Text>

                <Flex justifyContent={'space-between'} direction={'row'} w={'full'} >
                    <Text color={'orange.500'}>Details:</Text>
                    <Text color={'purple.800'} fontSize={'sm'}>View Interests:</Text>
                </Flex>
                
                <Text w={'full'} fontSize={'sm'} color={'gray.500'} mb={4}>  
                    Budget: $40  Occupation: Agba Dev  Age: 32 Allergies: None
                </Text>
                <Text  w={'full'} mt={2} color={'orange.500'}>  
                    Reviews:
                </Text>    
                <ScrollView w={'full'} horizontal={true} my={4} py={2}>
                    {/* <HStack h={48} gap={4}> */}
                        {reviews.map((item)=>(
                            <Box rounded ={'xl'} mr={4} h={40} bg={'gray.200'} w={48} key={item.id}>
                                <Box h={20}>
                                </Box>
                                <VStack  justifyContent ={'center'} alignItems={'center'} bg={'rgba(0,0,0,0.4)'} h={20} roundedBottom={'xl'}>
                                    <Text fontSize={'lg'} color={'gray.200'}>{item.name}</Text>
                                    <Text  color={'gray.300'}>{item.comment}</Text>
                                </VStack>

                            </Box>
                        ))}
                    {/* </HStack> */}
                </ScrollView>

                <Button rounded={'full'} w={'full'} bg={'purple.800'} mt={2}>
                    <Text fontSize={'sm'} color={'white'} onPress={()=>{navigation.navigate('Request_Sent')}}
                    >
                        SEND CHAT REQUEST</Text>
                </Button>                   
            </VStack>

            </HStack>
        </ScrollView>
    )
}
export default DashProfile;