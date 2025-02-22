// CoffeeItem.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CoffeeItem = ({ item, onAddCart }) => {
  return (
    <View style={styles.productItem}>
      {/* Image */}
      <Image source={{ uri: item.image }} style={styles.productImage} />

      {/* Product Information */}
      <View style={styles.textContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={onAddCart}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: 'gray',
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    marginRight: '5%',
    marginLeft: '5%',
  },
  productImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    marginBottom: 5,
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  productDescription: {
    color: '#A8A8A8',
    fontSize: 12,
    marginBottom: 3,
  },
  productPrice: {
    color: '#FF7A3D',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: '#FF7A3D',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17.5,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CoffeeItem;
