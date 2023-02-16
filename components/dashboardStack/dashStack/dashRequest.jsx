import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, KeyboardAvoidingView, Spacer} from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';

const DashRequestSent =({navigation}) =>{
    return(
        <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'} bg={'white'}>
            <VStack  w={['full','90%', '70%','60%','40%']} bg={'white'} justifyContent={'center'} alignItems={'center'} p={4}>
                
                <Box h={96} bg={'gray.100'} w={'full'} ></Box>
                <Text fontSize={'lg'} color={'gray.500'} py={2}>Chat Request Sent Successfully</Text>
                <Button rounded={'full'} w={'full'} bg={'purple.800'} my={2} py={4} onPress={()=>{
                    navigation.goBack()
                }}>
                    <Text fontSize={'sm'} color={'white'} fontWeight={'medium'}
                        
                    >DONE</Text>
                </Button>      
                    
                    
            </VStack>
        </HStack>
    )
}
export default DashRequestSent;