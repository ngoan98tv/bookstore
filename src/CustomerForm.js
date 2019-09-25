
import React, { Fragment, useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, SafeAreaView, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { AppContext } from '../App';

export default CustomerForm = ({history}) => {
    const {cart} = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [phone, setTel] = useState('');
    const [add, setAdd] = useState('');
    const [error, setError] = useState({});

    const validate = () => {
        if (!email) setError(oldErr => ({...oldErr, email: true}));
        if (!phone) setError(oldErr => ({...oldErr, phone: true}));
        if (!add) setError(oldErr => ({...oldErr, add: true}));
        if (email && phone && add) return true;
        return false;
    }

    const sumbit = () => {
        fetch('http://172.30.115.13:3000/auth/signup', { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                email, phone, add, password: "123456"
            })
        }).then((response) => response.json())
        .then((responseJson) => {
            cart.foreach(item => {
                fetch('http://172.30.115.13:3000/api/bill', { 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        bookId: item._id,
                        userId: responseJson._id,
                        quantity: item.qty,
                        sum_price: item.price
                    })
                }).then((response) => history.push("/complete"))
                .catch((error) => {
                    console.error(error);
                });
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ backgroundColor:"#0f0f0f", flex: 1 }}>
                <View style={styles.topBar}>
                    <Icon style={{color: "#dedede"}} name="person" size={24}/>
                    <Text style={styles.appTitle}>Shipping Detail</Text>
                </View>
                <View style={styles.container}>
                    <Text style={[styles.label, error.email ? styles.error : '']}>Email {error.email ? "(*Required)" : ''}</Text>
                    <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)} autoCompleteType="email" />
                    <Text style={[styles.label, error.phone ? styles.error : '']}>Phone number {error.phone ? "(*Required)" : ''}</Text>
                    <TextInput style={styles.input} value={phone} onChangeText={text => setTel(text)} autoCompleteType="phone" />
                    <Text style={[styles.label, error.add ? styles.error : '']}>Address {error.add ? "(*Required)" : ''}</Text>
                    <TextInput style={styles.input} value={add} onChangeText={text => setAdd(text)} autoCompleteType="street-addess" />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Button title="Back" color="orange" onPress={() => history.push("/shopping-cart")} />
                        <View style={{ width: 12 }} />
                        <Button title="Done" onPress={() => {
                            if (validate()) sumbit();
                        }} />
                    </View>
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
        paddingLeft: 8,
        color: "#dedede"
    },
    container: {
        padding: 12
    },
    label: {
        marginBottom: 0,
        color: "#dedede"
    },
    input: {
        borderBottomWidth: 0.8,
        marginBottom: 12,
        fontSize: 18,
        color: "#dedede",
        borderBottomColor: "#dedede"
    },
    error: {
        color: '#ff2323'
    }
});