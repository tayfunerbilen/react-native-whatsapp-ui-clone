import {View, Text, StyleSheet, Animated, Image, Pressable, Easing} from "react-native";
import {Delivered, Check} from "../../icons";
import {useEffect, useRef, useState} from "react";

function ChatItem({chat, editMode}) {

    const [selected, setSelected] = useState(false)
    const width = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (editMode) {
            Animated.timing(width, {
                toValue: 37,
                duration: 200,
                easing: Easing.inOut(Easing.linear),
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(width, {
                toValue: 0,
                duration: 200,
                easing: Easing.inOut(Easing.linear),
                useNativeDriver: false
            }).start();
            setSelected(false)
        }
    }, [editMode])

    const selectChat = () => {
        if (editMode) {
            setSelected(!selected)
        } else {
            // !todo : chat ekranı gösterilecek
        }
    }

    return (
        <Pressable onPress={selectChat}>
            <View style={[styles.chat, {
                backgroundColor: selected ? '#E3F0FF' : '#fff'
            }]}>
                <Animated.View style={{width}}>
                    <View style={{
                        width: 20,
                        height: 20,
                        borderWidth: 1.5,
                        borderColor: selected ? '#007AFF' : '#CECECF',
                        backgroundColor: selected ? '#007AFF' : 'transparent',
                        borderRadius: 20
                    }}>
                        <Check fill="#fff" size={16}/>
                    </View>
                </Animated.View>

                <Image style={styles.avatar} source={{
                    uri: chat.avatar
                }}/>
                <View style={{flex: 1}}>
                    <View style={styles.header}>
                        <Text style={styles.fullName}>{chat.fullName}</Text>
                        <Text style={{
                            color: chat.notification > 0 ? '#007AFF' : 'rgba(0,0,0,.5)'
                        }}>11/16/19</Text>
                    </View>
                    <View style={styles.messageTop}>
                        <View style={{flex: 1, alignSelf: 'flex-start'}}>
                            <Text style={styles.message} numberOfLines={2}>
                                {!chat?.me &&
                                <Text><Delivered fill={chat?.read ? '#007AFF' : 'rgba(0,0,0,.5)'}/> {' '}</Text>}
                                {chat.message.text}
                            </Text>
                        </View>
                        {chat.notification > 0 && (
                            <View style={styles.notification}>
                                <Text style={{color: '#fff'}}>{chat.notification}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default ChatItem

const styles = StyleSheet.create({
    chat: {
        paddingHorizontal: 16,
        height: 74,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 52,
        marginRight: 12,
        alignSelf: 'flex-start',
        marginTop: 15
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        marginBottom: 2,
        paddingTop: 7
    },
    fullName: {
        fontSize: 16,
        fontWeight: '600'
    },
    message: {
        color: 'rgba(0,0,0,.5)',
        lineHeight: 20,
    },
    messageTop: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#C6C6C8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 46
    },
    notification: {
        backgroundColor: '#007AFF',
        minWidth: 20,
        height: 20,
        paddingHorizontal: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15
    }
})
