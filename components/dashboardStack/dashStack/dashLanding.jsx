import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, Spacer} from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';
import {Recommended,  Apartment } from "./recommended";

const DashLanding =({navigation}) =>{
    console.log(navigation)
    return(
        <ScrollView style={{ flex: 1 }}  w={'full'} bg={'white'}>
            <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'}>
                
            <VStack  w={['full','90%', '80%','70%','50%']} p={4} justifyContent={'center'}> 
                
                    <Flex direction={'row'} justify={'space-between'} w={'full'}  alignItems={'center'} my={8}>
                        <Box>
                            <Text fontSize={'2xl'} w={'full'}  fontWeight={'medium'} mt={[4,5,6,8]} >  
                                Olaoluwa,
                            </Text>
                            <Text w={'full'} fontSize={'lg'} color={'gray.500'}  fontWeight={'medium'} mb={4}>  
                                Good morning
                            </Text>
                        </Box>
                        <Button rounded={'full'} h={12} w={12}  bg={'purple.200'} shadow={'sm'}> 
                            <Icon
                                name={'bell'}
                                size={16}
                            />
                        </Button>
                    </Flex>

                    <Text w={'full'} fontSize={'sm'} color={'gray.500'}  mb={4}>  
                        What are you looking for?
                    </Text>
                    <Flex direction= {'row'} gap={4}  h={10}>
                        <Button variant={'subtle'} mr={2} color={'white'} bg={'purple.800'} >
                            <Text fontWeight={'medium'} fontSize={'sm'} color={'white'}>Both</Text>
                        </Button>
                        <Button variant={'subtle'} mr={2} color={'white'} bg={'purple.200'} >
                            <Text fontWeight={'medium'} fontSize={'sm'} color={'purple.800'}>Roommate</Text>
                        </Button>
                        <Button variant={'subtle'} color={'white'} bg={'purple.200'} >
                            <Text fontWeight={'medium'} fontSize={'sm'} color={'purple.800'}>Apartment</Text>
                        </Button>
                    </Flex>
                    <Flex direction= {'row'} gap={2} h={8} w={'full'} mt={8}>
                        <Input  w={'85%'}  mr={2} bg={'gray.200'} />
                        <Button w={['15%','10%']} variant={'subtle'} color={'white'} bg={'gray.200'} gap={2}
                            onPress={()=>{
                                navigation.navigate('Filter')
                            }}
                        > 
                            <Text fontWeight={'medium'} fontSize={'sm'} color={'gray.800'}>
                                <Icon name={'filter'} size={16} />
                            </Text>
                        </Button>
                    </Flex>           

                    <HStack py={2} alignItems={'center'}>
                        <Text fontSize={'lg'}>Recommended</Text>
                        <Spacer />
                        <Text color={'purple.800'}>See all</Text>
                    </HStack>    

                    <Recommended navigation={navigation}/>

                    <HStack py={2} alignItems={'center'}>
                        <Text fontSize={'lg'}>Apartments Near You</Text>
                        <Spacer />
                        <Text color={'purple.800'}>See all</Text>
                    </HStack>    
                    <Apartment navigation={navigation}/>
            </VStack>

            </HStack>
        </ScrollView>
    )
}
export default DashLanding;