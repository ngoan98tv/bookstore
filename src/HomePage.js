import React, { Fragment } from 'react'
import { ScrollView, StatusBar, SafeAreaView } from 'react-native'
import BookList from './components/BookList';
import CustSearchBar from './components/CustSearchBar';

const sampleData = [{},{},{},{},{},{},{},{},{}];
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