import React from 'react';
import { render } from 'react-dom';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
   return (
        <View>
            <FlatList  style={{ flex: 1 , width: '100%'}}
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                 <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {}}
                    onAddToCart={() => {}}
                 />
                )}
            />
        </View>
     )
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductsOverviewScreen;