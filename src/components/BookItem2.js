import React, {Component} from 'react';
import { Text, Image, View, TouchableHighlight, StyleSheet, Button } from 'react-native';
export default class BookItem2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'Name of asdasda sadsadsa',
            price:0,
            type:'Trinh tham',
            author:'Who',
            img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
        };
    }

    componentDidMount(){
        //TODO
    }
    _onPress(){
        console.log("Pressed");
    }
    render(){
        return(
            <TouchableHighlight onPress={this._onPress} >
                <View style={styles.container}>
                <Image  
                    style={styles.img} 
                    source={{uri:this.state.img}}/>
                <View style={styles.infor} >
                    <Text numberOfLines={2} style={styles.title}>{this.state.name}</Text>
                    <Text numberOfLines={1} style={styles.author}>{this.state.author}</Text>
                    <Text numberOfLines={1} style={styles.type}>{this.state.type}</Text>
                    <Text style={styles.price}>${this.state.price}</Text>
                    <Button title="Add to cart" />
                </View>
                
                </View>
            </TouchableHighlight>
        );
    }
   
} 
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        margin:5,
        width:"100%",
        height:200,
        alignItems:"flex-start",
        padding:2
    },img:{
        width: "35%", 
        height: "100%"

    },infor:{
        flex:1,
        padding:5,
        height:"100%"
    },title:{
        color:"white",
        fontSize:25,
        fontWeight:"bold"
    },author:{
        color:"white",
        fontSize:15,
        fontStyle:"italic"
        
    },type:{
        paddingTop:5,
        color:"white",
        fontSize:15,
    },price:{
        alignSelf:"flex-end",
        padding:10,
        color:"red",
        fontSize:20
    }
})

