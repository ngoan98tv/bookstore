import React, { useState, useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native'
import {SearchBar, Icon} from 'react-native-elements';
import { Link } from 'react-router-native';
import { AppContext } from '../../App';

export default () => {
  const { cart } = useContext(AppContext);
  const [val, setVal] = useState('');

  return (
      <View style={style.container}>
            <Link style={style.cartBtn} to="/">
              <Icon name="home" color="white" size={24}/>
            </Link>
            <SearchBar
                containerStyle={{ flex: 1, backgroundColor: "#232323" }}
                searchIcon={{ size: 24 }} //Size of the search icon
                //onChangeText={text => this.SearchFilterFunction(text)}  
                //Filter the list using the keywords inserted in searchbar
                //onClear={text => this.SearchFilterFunction('')}
                placeholder="Type Here..."
                value={val}
                onChangeText={(value) => setVal(value)}
            />
            <Link style={style.cartBtn} to="/shopping-cart">
              <View style={{ position: 'relative' }}>
                <Text style={style.badge}>{cart.length}</Text>
                <Icon name="shopping-cart" color="white" size={24}/>
              </View>
            </Link>
      </View>
  );
}

const style = StyleSheet.create({
    container:{
      display: 'flex',
      flexDirection:"row",
      alignItems: "center",
      backgroundColor: "#232323"
    },
    cartBtn: {
      marginHorizontal: 12,
      position: 'relative'
    },
    badge: {
      position: 'absolute',
      top: -6,
      right: -6,
      color: 'white',
      paddingHorizontal: 6,
      zIndex: 9,
      backgroundColor: 'red',
      borderRadius: 20
    }
});