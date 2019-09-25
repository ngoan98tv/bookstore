import React, { Fragment, useState, useEffect } from 'react'
import { ScrollView, StatusBar, SafeAreaView, Text, ActivityIndicator } from 'react-native'
import BookList from './components/BookList';
import CustSearchBar from './components/CustSearchBar';

const sampleData = [
    {
        id:'this is an id',
        name:'Name of book',
        price: 10,
        type:'Trinh tham',
        author:'Who',
        img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
    },{
        id:'this is an id',
        name:'Name of book',
        price:20,
        type:'Trinh tham',
        author:'Who',
        img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
    },{
        id:'this is an id',
        name:'Name of book',
        price:11,
        type:'Trinh tham',
        author:'Who',
        img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
    },{
        id:'this is an id',
        name:'Name of book',
        price:22,
        type:'Trinh tham',
        author:'Who',
        img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
    }];

const sample = [
    {title: "Top Selling", data: []},
    {title: "Recommends", data: []},
    {title: "Recently", data: []}
];

const HomePage = () => {
    const [sessions, setSessions] = useState(sample);

    useEffect(() => {
        fetch('http://172.30.115.13:3000/api/book/all')
            .then((response) => response.json())
            .then((responseJson) => {
                setSessions([
                    {title: "Top Selling", data: [responseJson]},
                    {title: "Recommends", data: [responseJson]},
                    {title: "Recently", data: [responseJson]}
                ]);
            })
            .catch((error) =>{
                console.error(error);
            });
    }, [])

    return(
        <Fragment>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ backgroundColor:"#0f0f0f", flex: 1}}>
                    <CustSearchBar />
                    <ScrollView>
                        {sessions[0].data.length ? <BookList sessions={sessions} /> : <ActivityIndicator/>}
                    </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default HomePage;