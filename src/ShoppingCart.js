import React, {Fragment, useState} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const books = [
  {title: "An Awesome Book", qty: 1, price: 99},
  {title: "Inspiring Book", qty: 1, price: 99},
  {title: "How Best You Are", qty: 1, price: 99}
]

const ShoppingCart = ({history}) => {
  const [items, setItems] = useState(books);

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView  style={{ flex: 1 }}>
        <View style={styles.topBar}>
          <Icon name="shopping-cart" size={24}/>
          <Text style={styles.appTitle}>Shopping Cart</Text>
        </View>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.container}>
            {items.map((item, index) => 
              <View style={styles.bookItem} key={index}>
                <Image style={styles.bookImg} source={{uri: "https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg"}}/>
                <View style={styles.bookInfo}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.qtyRow}>
                    <Text>Qty:</Text>
                    <Text style={styles.txtBtn} onPress={() => {
                      const qty = item.qty === 1 ? item.qty : item.qty -1;
                      const price = item.price/item.qty * qty;
                      setItems(oldItems => [
                        ...oldItems.slice(0, index), 
                        {...item, qty, price },
                        ...oldItems.slice(index+1, oldItems.length)
                      ]);
                    }}>-</Text>
                    <Text style={styles.qty}>{item.qty}</Text>
                    <Text style={styles.txtBtn} onPress={() => {
                      const qty = item.qty +1;
                      const price = item.price/item.qty * qty;
                      setItems(oldItems => [
                        ...oldItems.slice(0, index), 
                        {...item, qty, price },
                        ...oldItems.slice(index+1, oldItems.length)
                      ]);
                    }}>+</Text>
                  </View>
                  <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
                  <Text style={styles.xBtn} onPress={() => {
                    setItems(oldItems => [...oldItems.slice(0, index), ...oldItems.slice(index+1, oldItems.length)]);
                  }}><Icon name="clear" size={20}/></Text>
                </View>
              </View>
            )}
            <View style={styles.footer}>
              <View style={styles.divider}/>
              <Text style={styles.total}>Shipping Fee: $ 0.00</Text>
              <Text style={styles.total}>Total: $ {items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</Text>
              <View style={styles.btnGroup}>
                <Button title="Continue Shopping" onPress={() => history.push('/')}/>
                <View style={styles.spacer} />
                <Button title="Next" color="green" onPress={() => {
                  // TODO: Navigate to Customer Info
                }} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 8
  },
  container: {
    padding: 12
  },
  bookItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12
  },
  bookImg: {
    width: 96,
    height: 96
  },
  bookInfo: {
    flex: 1
  },
  title: {
    fontSize: 18,
    marginBottom: 3
  },
  qtyRow: {
    marginBottom: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  qty: {
    fontSize: 16
  },
  txtBtn: {
    fontSize: 18,
    marginHorizontal: 6,
    paddingHorizontal: 6
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3
  },
  xBtn: {
    position: 'absolute',
    top: 3,
    right: 3,
    fontSize: 16,
    color: 'red',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  divider: {
    width: 92,
    borderTopWidth: 1,
    marginBottom: 12
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 8
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  spacer: {
    width: 12,
    height: 12
  }
});

export default ShoppingCart;
