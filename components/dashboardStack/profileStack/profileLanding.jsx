import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, KeyboardAvoidingView, Spacer} from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileLanding =() =>{
    const actions = [
        {id:1,
            icon: 'shield',
            text: 'Account Privacy'},
        {id:2,
            icon: 'shield',
            text: 'Payment Options'},
        {id:3,
            icon: 'shield',
            text: 'Edit Profile'},                    
    ]
    return(
        <HStack style={{ flex: 1 }}  w={'full'} p={4} justifyContent={'center'}  bg={'white'}>
            <VStack  w={['full','90%', '70%','60%','40%']} alignItems={'center'}>

                <Text fontSize={'2xl'} mt={8} >  
                    Profile
                </Text>
                
                <Box h={32} bg={'purple.200'} w={32} rounded = {'full'} mt={8} mb={2} ></Box>
                <Text fontSize={'2xl'} color={'gray.800'}>Demilade Otemuyiwa</Text>
                <Text fontSize={'lg'} color={'gray.400'}>Agba Dev</Text>

                <Box w={'full'} p={2}>
                    <Text fontSize={'lg'} mt={8} mb={2} w={'full'}>Account Settings</Text>
                    <Box w={'full'}>
                        {actions.map((item)=>(
                        <HStack rounded={'lg'} bg ={'gray.100'} my={2}  key={item.id}
                            shadow={'sm'}  alignItems={'center'} p={2} px={4}>
                            <HStack h={10} w={10} mr={3} rounded={'full'} justifyContent={'center'} alignItems={'center'}>
                                <Icon name={item.icon} size={25} />
                            </HStack>
                            <Text color={'gray.600'}>{item.text}</Text>
                            <Spacer />
                            <Icon name={'chevron-right'}/>
                        </HStack>                            
                        ))}                    
                    </Box>         
                </Box>
            </VStack>
        </HStack>
    )
}
export default ProfileLanding;