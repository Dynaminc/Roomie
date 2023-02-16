import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, KeyboardAvoidingView, Spacer} from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';

const DashFilter =({navigation}) =>{
    return(
        <ScrollView style={{ flex: 1 }}  w={'full'}>
            <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'}  bg={'white'}>
                
            <VStack  w={['full','80%', '70%','50%','40%']} p={4} justifyContent={'center'} alignItems={'center'}> 

                <Box mt={8} position={'relative'} bg={'red.200'}>
                    <Button variant={'unstyled'}> <Icon name={'arrow-left'}
                        position={'absolute'} left={0} top={0}
                        onPress={()=>{
                        navigation.goBack()
                        }}
                    /></Button>
                    <Text fontSize={'xl'} fontWeight={'medium'}>  
                        Filter
                    </Text>
                </Box>

                
                <KeyboardAvoidingView w={'full'} mt={4}>
                    <Text color={'gray.600'} w={'full'} fontSize={'sm'} py={3} mt={2}>  
                        Category
                    </Text>
                    <Input bg={'gray.100'} h={12} fontSize={'sm'} borderWidth={0} placeholder="" w={'full'} rounded={'full'} />

                    <Text color={'gray.600'} w={'full'} fontSize={'sm'} py={3} mt={2}>  
                        Location
                    </Text>
                    <Input bg={'gray.100'} h={12} fontSize={'sm'} borderWidth={0} placeholder="Magodo, Lagos State" w={'full'} rounded={'full'} />                    

                    <Text color={'gray.600'} w={'full'} fontSize={'sm'} py={3} mt={2}>  
                        Budget
                    </Text>
                    <Flex direction={'row'} w={'full'}  py={2}>
                        <Input bg={'gray.100'} h={12} fontSize={'sm'} borderWidth={0}
                         placeholder="Min" w={'45%'} rounded={'full'} />             
                         <Spacer />       
                        <Input bg={'gray.100'} h={12} fontSize={'sm'} borderWidth={0} 
                        placeholder="Max" w={'45%'} rounded={'full'} />                    
                    </Flex>
                    

                </KeyboardAvoidingView>

                <Button rounded={'full'} w={'full'} bg={'purple.800'} mt={8} py={4}>
                    <Text fontSize={'sm'} color={'white'} fontWeight={'medium'}>Find</Text>
                </Button>    
                <Button rounded={'full'} w={'full'} variant={'outline'} mt={4} py={4}>
                    <Text fontSize={'sm'} color={'purple.800'} fontWeight={'medium'}>Cancel</Text>
                </Button>    
            </VStack>
            </HStack>

        </ScrollView>
    )
}
export default DashFilter;