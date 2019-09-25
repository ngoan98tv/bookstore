import React, { useContext, useState } from 'react';
import { Text, Image, View, TouchableHighlight, StyleSheet, Button } from 'react-native';
import { AppContext } from '../../App';

const sample = {
    id:'',
    name:'Name of asdasda sadsadsa',
    price: 10,
    type:'Trinh tham',
    author:'Who',
    img:'https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg'
};

export default BookDetail = ({id}) => {
    const context = useContext(AppContext);
    const [book, setBook] = useState({...sample, qty: 1});

    return(
        <View style={styles.container}>
            <Image  
                style={styles.img} 
                source={{uri: book.img}}/>
            <View style={styles.infor} >
                <Text numberOfLines={2} style={styles.title}>{book.name}</Text>
                <Text numberOfLines={1} style={styles.author}>{book.author}</Text>
                <Text numberOfLines={1} style={styles.type}>{book.type}</Text>
                <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                    <View style={styles.qtyRow}>
                        <Text style={{color: 'white'}}>Qty:</Text>
                        <Text style={styles.txtBtn} onPress={() => {
                            const qty = book.qty === 1 ? book.qty : book.qty -1;
                            const price = book.price/book.qty * qty
                            setBook(oldBook => ({...oldBook, qty, price}));
                        }}>-</Text>
                        <Text style={styles.qty}>{book.qty}</Text>
                        <Text style={styles.txtBtn} onPress={() => {
                        const qty = book.qty +1;
                        const price = book.price/book.qty * qty
                        setBook(oldBook => ({...oldBook, qty, price}));
                        }}>+</Text>
                    </View>
                    <Text style={styles.price}>${book.price}</Text>
                </View>
                <Button title="Add to cart" onPress={() => {
                    context.setCart(oldCart => [...oldCart, book]);
                }}/>
            </View>
        </View>
    );
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
    },
    qtyRow: {
        marginBottom: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    qty: {
        fontSize: 16,
        color: 'white'
    },
    txtBtn: {
        color: 'white',
        fontSize: 18,
        marginHorizontal: 6,
        paddingHorizontal: 6
    },
})

