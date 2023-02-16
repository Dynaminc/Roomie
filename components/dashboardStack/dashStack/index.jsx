import { HStack, ScrollView, VStack, Text, Box , Button, Flex, Input} from "native-base"
import Icon from 'react-native-vector-icons/FontAwesome';
import DashProfile from "./dashProfile";
import DashLanding from "./dashLanding";
import DashFilter from "./dashFilter";
import DashNotifications from "./dashNotifications";
import DashRequestSent from "./dashRequest";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const DashHome =() =>{
    return(
    <Stack.Navigator
        detachInactiveScreens
        independent={true}
        animationEnabled
        screenOptions={{
            headerShown: false
          }}
        gestureEnabled
        animationTypeForReplace={'push'}
        >
        <Stack.Screen name="Landing" component={DashLanding} />
        <Stack.Screen name="Profile" component={DashProfile} />
        <Stack.Screen name="Filter" component={DashFilter} />
        <Stack.Screen name="Notification" component={DashNotifications} />
        <Stack.Screen name="Requestsent" component={DashRequestSent} />
      </Stack.Navigator>


    )
}
export default DashHome;

{/* <DashProfile />*/}
{/* <DashLanding /> */}
{/* <DashFilter /> */}

{/* <DashNotifications /> */}
{/* <DashNotifications /> */}
        //  <DashNotifications />
        {/* <DashRequestSent /> */}