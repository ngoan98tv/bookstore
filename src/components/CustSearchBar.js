import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native'
import {SearchBar, Icon} from 'react-native-elements';
import { Link } from 'react-router-native';

export default () => {
  const [val, setVal] = useState('');

  return (
      <View style={style.container}>
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
              <Icon name="shopping-cart" color="white" size={24}/>
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
      marginHorizontal: 12
    }
});