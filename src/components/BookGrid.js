import React, {Component} from 'react';
import { Text, SectionList, FlatList,StyleSheet, View } from 'react-native';
import BookItem from "./BookItem"

const BookGrid = ({title, data}) => {
  return (
    <View>
      <Text style={style.header}>{title}</Text>
      <View style={style.container}>
        {data.map((item, index) => <BookItem key={index} style={style.item} data={item}/>)}
    </View>
    </View>
  );
}

const style = StyleSheet.create({
    container:{
      flex:1,
      flexDirection: 'row', 
      flexWrap: 'wrap',
      alignItems:"stretch",
      justifyContent:"space-around",
      alignItems:"center",
    },
    header:{
        flex:1,
        flexDirection: 'row',
        color:"#ebebeb",
        fontSize:22,
        fontWeight:"bold",
        fontFamily:"verdana",
        padding:10
        
    },
    item:{
      flex:1
    }
});
export default BookGrid;