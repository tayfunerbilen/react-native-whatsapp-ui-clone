import { memo,useCallback } from "react";
import {View, Text, StyleSheet, ScrollView, Button, Pressable, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../Constants/Colors";
import { Calls, ChevronLeft, VideoCall } from "../icons";

function Chat({navigation,route}) {
    const {chat} = route.params;

    const handleNavigatePrevScreen = useCallback(() => {
        navigation.navigate("Root",{
            screen:"Chats"
        });
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.chatHeaderSection}>
                <Pressable  onPress={handleNavigatePrevScreen}>
                    <ChevronLeft /> 
                </Pressable>

                <View style={styles.userInfoWrapper}>
                    <Image style={styles.avatar} source={{
                        uri: chat.avatar
                    }}/>

                    <View>
                        <Text style={styles.fullName}>{chat.fullName}</Text>
                        <Text style={styles.userStatus}>tap here for contact info</Text>
                    </View>
                </View>

                <Pressable>
                    <VideoCall /> 
                </Pressable>

                <Pressable>
                    <Calls fill={"#007AFF"} /> 
                </Pressable>
 
            </View>

        </SafeAreaView>
    )
}

export default memo(Chat)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 1000,
        backgroundColor: Colors.white
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#A6A6AA',
        paddingVertical: 3,
        paddingHorizontal: 5,
    },
    chatHeaderSection:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor: Colors.white
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginRight:5
    },
    fullName:{
        fontSize:16,
        fontWeight:'bold'
    },
    userStatus:{
        fontSize:11,
        fontWeight:'200',
        marginTop:3,
        marginLeft:3
    },
    userInfoWrapper:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center'
    }
})
