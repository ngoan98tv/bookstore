import React from 'react';
import { withRouter } from "react-router";
import { Text, Image, View, TouchableHighlight, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BookItem = ({data, history}) => {
        return(
            <TouchableHighlight onPress={() => history.push('/book/' + data.id)} >
                <View style={styles.container}>
                    <Image  style={{width: "100%", height: "100%"}} source={{uri: data.img}}/>
                    <LinearGradient colors={['rgba(255, 255, 255,0)','rgba(0, 0, 0,0.8)', 'rgba(0, 0, 0,1)']} style={styles.infor}>
                        <Text style={styles.name}>{data.name}</Text>
                        <Text style={styles.price}>$ {data.price}</Text>
                    </LinearGradient>
                </View>
            </TouchableHighlight>
        );
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