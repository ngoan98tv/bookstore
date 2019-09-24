import React, {Component} from 'react';
import { Text, SectionList, FlatList,StyleSheet, View } from 'react-native';
import BookItem from "./BookItem"

class BookGrid extends React.Component{
        constructor(props) {
          super(props);
          this.state = {
            data:[1,2,3,4]
          }
        }
      
        render() {
          return (
            <View>
              <Text style={style.header}>{this.props.title}</Text>
              <View style={style.container}>
              
                {this.state.data.map((data,index)=>{
                  return(
                    <BookItem style={style.item}></BookItem>
                  )
                })}
            </View>
           </View>
          );
        }
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