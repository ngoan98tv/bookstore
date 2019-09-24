import React, {Component} from 'react';
import { withRouter } from "react-router";
import { Text, Image, View, TouchableHighlight, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class BookItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'this is an id',
            name:'Name of book',
            price:0,
            type:'Trinh tham',
            author:'Who',
            img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
        };
    }

    componentDidMount(){
        //TODO
    }
    
    render(){
        return(
            <TouchableHighlight onPress={() => this.props.history.push('/book/' + this.state.id)} >
                <View style={styles.container}>
                    <Image  style={{width: "100%", height: "100%"}} source={{uri:this.state.img}}/>
                        <LinearGradient colors={['rgba(255, 255, 255,0)','rgba(0, 0, 0,0.8)', 'rgba(0, 0, 0,1)']} style={styles.infor}>
                            <Text style={styles.name}>{this.state.name}</Text>
                            <Text style={styles.price}>${this.state.price}</Text>
                        </LinearGradient>
                </View>
            </TouchableHighlight>
        );
    }
   
} 
const styles = StyleSheet.create({
    container:{
        margin:5,
        borderRadius:2,
        borderWidth:0.5,
        borderColor:"#d9d9d9",
        width:150,
        height:200,
        alignItems:"center",
        padding:2,
        shadowRadius:10
    },infor:{
        position:"absolute",
        bottom:0,
        width:"100%",
        height:"50%",
        justifyContent:"flex-end",
        padding:5
    },
    name:{
        color:"#ffffff",
        fontWeight:"bold"
    },
    price:{
        color:"red"        
    }      
})


export default withRouter(BookItem);