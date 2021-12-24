import {View, Text, StyleSheet, ScrollView, Button} from "react-native";
import {useLayoutEffect, useState, useRef, useEffect} from "react";
import {New} from "../icons";

function Status({navigation}) {

    const [editMode, setEditMode] = useState(false)
    const [showTitle, setShowTitle] = useState(false)

    const scrollHandle = e => {
        if (e?.nativeEvent.contentOffset.y < 33) {
            setShowTitle(false)
        } else {
            setShowTitle(true)
        }
    }

    return (
        <ScrollView
            style={styles.container}
            stickyHeaderIndices={[1]}
            stickyHeaderHiddenOnScroll={true}
            onScroll={scrollHandle}
        >

            <View style={styles.line} />
            <View style={{flex: 1, height: 2000, backgroundColor: '#fff'}}>

            </View>
        </ScrollView>
    )
}

export default Status

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 1000,
        backgroundColor: '#F6F6F6'
    },
    line: {
        backgroundColor: '#A6A6AA',
        height: 0.5,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#A6A6AA',
        paddingVertical: 3,
        paddingHorizontal: 5
    }
})
