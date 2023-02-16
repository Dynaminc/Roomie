import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer } from '@react-navigation/native'
import SignIn from '../signinStack/signin';
import SignUp from '../signupStack/signup';
import { HStack } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileLanding from './profileStack/profileLanding';
import DashHome from './dashStack';
import ChatLanding from './chatStack/chatLanding';
import BookmarkLanding from './bookmarkStack/bookmarkIndex';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {

  return (
    <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'}>
        <Tab.Navigator
            initialRouteName="SignIn"
            activeColor="#606"  
            backgroundColor='#fff'
            screenOptions={({route})=>({
                backgroundColor: '#fff',
                tabBarIcon: ({focused, size, color }) =>{
                    let iconName;
                    if (route.name === 'Home'){
                        iconName = 'home'
                    }
                    else if (route.name === 'Bookmarks'){
                        iconName = 'book'
                    }
                    else if (route.name === 'Chat'){
                        iconName = 'book'
                    }  
                    else if (route.name === 'Profile'){
                        iconName = 'home'
                    }                                        
                    return(
                        <Icon
                            name={iconName}
                            size={25}
                        />
                    )
                }
            })}
            >
            <Tab.Screen 
                name="Home" component={DashHome} />
            <Tab.Screen 
                name="Bookmarks" component={BookmarkLanding} />
            <Tab.Screen 
                name="Chat" component={ChatLanding} />
            <Tab.Screen 
                name="Profile" component={ProfileLanding} />                
        </Tab.Navigator>
    </HStack>
  );
}

export default MyTabs;