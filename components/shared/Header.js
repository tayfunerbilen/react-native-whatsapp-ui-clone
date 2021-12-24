import {Button, StyleSheet, Text, View} from "react-native";
import {New} from "../../icons";
import {useLayoutEffect, memo} from "react";

function Header({ navigation, headerRight = () => {}, headerLeft, editMode, showTitle, title }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight,
            headerLeft,
            headerStyle: {
                backgroundColor: '#F6F6F6',
                shadowOpacity: 0
            },
            headerTitle: () => {
                return (
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '600',
                        display: showTitle ? 'flex' : 'none'
                    }}>
                        {title}
                    </Text>
                )
            }
        });
        console.log('çalıştı!')
    }, [navigation, editMode, showTitle]);

    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

export default memo(Header)

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#F6F6F6',
        paddingLeft: 10
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold'
    },
})
