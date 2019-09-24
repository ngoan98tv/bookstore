import React from 'react';
import { Text, SectionList, FlatList, StyleSheet } from 'react-native';
import BookItem from "./BookItem";

const BookList = ({sessions}) => {
  return (
    <SectionList 
      sections={sessions}
      renderSectionHeader={({section}) => <Text style={style.header}>{section.title}</Text>}
      renderItem={({item}) => (
        <FlatList
          data={item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <BookItem data={item}/>}
          />
      )}
      />
  );
}

const style = StyleSheet.create({
    header:{
        color:"#ebebeb",
        fontSize:22,
        fontWeight:"bold",
        fontFamily:"verdana",
        padding:10
        
    }
});
export default BookList;