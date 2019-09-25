import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image } from 'react-native';
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

    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ backgroundColor:"#0f0f0f", flex: 1 }}>
                <CustSearchBar/>
                <ScrollView>
                    <BookDetail id={match.params.id}/>
                    <BookGrid title={"Related Books"} data={sampleData}/>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}