
import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, SafeAreaView, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default CompletePage = ({history}) => {
    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.topBar}>
                    <Icon name="check" size={24}/>
                    <Text style={styles.appTitle}>Finish Order</Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Icon name="check-circle" size={120} color="#99ff66"/>
                        <Text style={{ fontSize: 18 }}>Order Complete</Text>
                    </View>
                    <Button title="Back to home" onPress={() => history.push("/")} />
                </View>
            </SafeAreaView>
        </Fragment>
    );
}

var styles = StyleSheet.create({
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 8
    },
    container: {
        padding: 12,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});