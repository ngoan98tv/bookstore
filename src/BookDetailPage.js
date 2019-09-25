import React, { Fragment, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, ActivityIndicator } from 'react-native';
import BookDetail from './components/BookDetail';
import BookGrid from './components/BookGrid';
import CustSearchBar from './components/CustSearchBar';

const sampleData = [{
    id:'this is an id',
    name:'Name of book',
    price:0,
    type:'Trinh tham',
    author:'Who',
    img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
},{
    id:'this is an id',
    name:'Name of book',
    price:0,
    type:'Trinh tham',
    author:'Who',
    img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
},{
    id:'this is an id',
    name:'Name of book',
    price:0,
    type:'Trinh tham',
    author:'Who',
    img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
},{
    id:'this is an id',
    name:'Name of book',
    price:0,
    type:'Trinh tham',
    author:'Who',
    img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
}];

export default ({match}) => {
    const [book, setBook] = useState({});
    const [sameType, setSameType] = useState([]);

    useEffect(() => {
        fetch('http://172.30.115.13:3000/api/book/id?book_id=' + match.params.id)
            .then((response) => response.json())
            .then((responseJson) => {
                setBook({...responseJson, qty: 1});
                fetch('http://172.30.115.13:3000/api/book/all')
                    .then((response) => response.json())
                    .then((responseJson) => {
                        setSameType(responseJson);
                    })
                    .catch((error) =>{
                        console.error(error);
                    });
            })
            .catch((error) =>{
                console.error(error);
            });
    }, [match.params.id])

    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ backgroundColor:"#0f0f0f", flex: 1 }}>
                <CustSearchBar/>
                <ScrollView>
                    {book ? <BookDetail book={book}/> : <ActivityIndicator color="blue" />}
                    {sameType ? <BookGrid title={"Related Books"} data={sameType}/>  : <ActivityIndicator/>}
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}