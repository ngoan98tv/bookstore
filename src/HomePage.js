import React, { Fragment } from 'react'
import { ScrollView, StatusBar, SafeAreaView } from 'react-native'
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

const sessions = [
    {title: "Top Selling", data: [sampleData]},
    {title: "Recommends", data: [sampleData]},
    {title: "Recently", data: [sampleData]}
];

const HomePage = () => {
    return(
        <Fragment>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ backgroundColor:"#0f0f0f", flex: 1}}>
                    <CustSearchBar />
                    <ScrollView>
                        <BookList sessions={sessions} />
                    </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default HomePage;