import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input, KeyboardAvoidingView, Spacer} from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DashHome from "../dashStack";
import SignUp from "../../signupStack/signup";
import SignIn from "../../signinStack/signin";
import Roommate from "./roommates";

const Tab = createMaterialTopTabNavigator()
const BookmarkLanding =() =>{
    return(
        <HStack style={{ flex: 1 }}  w={'full'} p={4} justifyContent={'center'}  bg={'white'}>
            <VStack  w={['full','90%', '70%','60%','40%']} alignItems={'center'}>

                <Text fontSize={'2xl'} mt={8} >  
                    Bookmark
                </Text>
                <Box style={{ flex: 1 }} py={4} w='full'>
                    <Tab.Navigator>
                        <Tab.Screen name="Roommates" component={Roommate} />
                        <Tab.Screen name="Apartments" component={Roommate} />
                    </Tab.Navigator>
                </Box>
            </VStack>
        </HStack>
    )
}
export default BookmarkLanding;