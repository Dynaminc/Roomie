import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, KeyboardAvoidingView, Spacer} from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DashHome from "../dashStack";
import SignUp from "../../signupStack/signup";
import SignIn from "../../signinStack/signin";
import Chats from "./chats";

const Tab = createMaterialTopTabNavigator()
const ChatLanding =() =>{
    return(
        <HStack style={{ flex: 1 }}  w={'full'} p={4} justifyContent={'center'}  bg={'white'}>
            <VStack  w={['full','90%', '70%','60%','40%']} alignItems={'center'}>

                <Text fontSize={'2xl'} mt={8} >  
                    Chat
                </Text>
                <Input bg={'gray.100'} w={'full'} mt={8} fontSize={'sm'} borderWidth={0} p={2} placeholder="Search"
                InputLeftElement={<Box p={2} color={'gray.200'}><Icon name="search" size={20} /></Box>}/>
                {/* <NavigationContainer independent={true}> */}
                <Box style={{ flex: 1 }} py={4} w='full'>
                    <Tab.Navigator>
                        <Tab.Screen name="Chats" component={Chats} />
                        <Tab.Screen name="Requests" component={Chats} />
                        <Tab.Screen name="Archived" component={Chats} />
                    </Tab.Navigator>
                {/* </NavigationContainer> */}
                </Box>
            </VStack>
        </HStack>
    )
}
export default ChatLanding;