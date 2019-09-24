import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image } from 'react-native';
import BookItem2 from './components/BookItem2';
import BookGrid from './components/BookGrid';
import CustSearchBar from './components/CustSearchBar';

const sessions = [
    {title: "Related Books", data: [[{},{},{},{},{},{},{},{}]]}
];

export default ({match}) => {

    return (
        <Fragment>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ backgroundColor:"#0f0f0f", flex: 1 }}>
                <CustSearchBar/>
                <ScrollView>
                    <BookItem2 id={match.params.id}/>
                    <BookGrid title={"Related Books"}/>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}