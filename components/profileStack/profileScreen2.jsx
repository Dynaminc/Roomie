import { Flex, Box, Heading, Text,Input, Button, VStack, HStack, KeyboardAvoidingView, Spacer, ScrollView } from 'native-base'
import {useState, useEffect} from 'react'


const ProfileScreen2 = ({navigation}) =>{
    console.log('inin')
    const interests = [
        'Dancing', 'Cartoon', 'Anime', 'Partying', 'Religious', 'Games', 'Tech',
        'Books', 'Love','Cooking', 'Music', 'FootBall', 'Smoking', 'Pets', 'Talks', 'PodCasts','Education'
    ]
    
    const makeInterestState = () =>{
        let initialInterests = [] // going to return an array of the interests and it's initial state
        interests.forEach(interest=>{initialInterests.push({id:interests.indexOf(interest), name: interest, selected: false})})
        return initialInterests
    }

    
    const toggleInterest =(item)=>{
        let interestObject = interest.filter(interestItem=> interestItem.name === item)[0]
        interestObject.selected = !interestObject.selected
        let finalObject =  interest.filter(interestItem=> interestItem.name !== item)
        console.log('sdfsdf')
        setInterest(fragmentInterest([...finalObject, interestObject]))
        
    }
    const fragmentInterest =(preInterest)=>{
        let data = []
        let count = 0 
        let tmpData = []
        preInterest.forEach(interestItem=>{
            if (count < 4){
                tmpData.push(interestItem)
                count ++ 
            }
            else{
                data.push(tmpData)
                
                tmpData = []
                count = 0
            }
        })
        return data
    }
    
    const [interest, setInterest] = useState(fragmentInterest(makeInterestState()))
    return(
        <HStack style={{ flex: 1 }}  w={'full'} justifyContent={'center'} bg={'white'}>
            
            <VStack  p={2} w={['90%','80%', '70%','60%','60%']}  alignItems={'center'} justifyContent={'center'}>
                
                <Flex w={['full','90%', '80%','70%','50%']} size={'xl'} 
                direction={'row'}
                color={'purple.800'} 
                pt={8} mt={8} alignItems={'center'}
                h={8}
                justifyContent={'center'}>
                    <VStack rounded={'full'} bg={'purple.800'} h={6} w={6} alignItems={'center'} justifyContent={'center'}>
                        <Text color={'white'}>1</Text>
                    </VStack>
                    
                    <Box bg={'purple.800'} w={'40%'} h={1}></Box>

                    <VStack rounded={'full'} bg={'purple.800'} h={6} w={6} alignItems={'center'} justifyContent={'center'}>
                        <Text color={'white'}>2</Text>
                    </VStack>

                    <Box bg={'purple.100'} w={'40%'} h={1}></Box>

                    <VStack rounded={'full'} bg={'purple.100'} h={6} w={6} alignItems={'center'} justifyContent={'center'}>
                        <Text color={'purple.800'}>3</Text>
                    </VStack>
                </Flex>
                <Text color={'gray.600'} fontSize={'sm'} p={3} mt={2} >  
                        You are almost there
                </Text>

                <VStack  w={['full','90%', '80%','70%','50%']} p={1} justifyContent={'center'}>
                    <Text fontSize={'2xl'} w={'full'}  fontWeight={'medium'} mt={[4,5,6,8]} >  
                        Interest
                    </Text>
                    <Text w={'full'} fontSize={'lg'} color={'gray.500'}  fontWeight={'medium'} mb={4}>  
                        Let us know what interests you
                    </Text>
                    <Box h={80} w={'90%'}>
                        {interest.map(item=>(
                            <HStack key={interest.indexOf(item)}>
                                {
                                item.map((interestItem)=>(
                                    <Button m={1} w={'25%'} 
                                        key={item.indexOf(interestItem)} variant={'outline'}
                                        onClick={()=>{toggleInterest(interestItem);}}>
                                            {interestItem.name}
                                    </Button>
                                ))
                                }
                            </HStack>
                        ))}
                    </Box>

                    <Button rounded={'full'} w={'full'} bg={'purple.800'} mt={8}
                        onPress={()=>{
                        navigation.navigate('ProfileComplete')
                        }}>
                        <Text fontSize={'lg'} color={'white'}>Next</Text>
                    </Button>

                </VStack>

        

            </VStack>
            
        </HStack> 
    )

}

export default ProfileScreen2;