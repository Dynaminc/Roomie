import { Center, Heading } from 'native-base'
import { useEffect } from 'react'

// meant to contain the splash screen text
const SplashScreen = ({navigation})=>{
    useEffect(()=>{
        navigation.navigate('Onboarding1')
    },[])
    return(
        <Center h={'full'} w={'full'} bgColor={'purple.800'}>
            <Heading size={'lg'} color={'white'}>Roomie</Heading>
        </Center>
    )
}

export default SplashScreen