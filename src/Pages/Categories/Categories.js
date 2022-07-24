import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './Categories.style';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch/useFetch';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Categories = ({navigation}) => {
  const {error, data, loading} = useFetch(Config.API_URL + `categories.php`);

  const handleCategorySelect = strCategory => {
    navigation.navigate('FoodListPage', {strCategory});
  };
  const renderCategory = ({item}) => (
    <ProductCard
      categoryItem={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Categories;