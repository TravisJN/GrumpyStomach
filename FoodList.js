import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

export default class FoodList extends React.Component {

  render() {
    return (
      <View  style={styles.container}>
        <FlatList
          data={[
            {key: 'Tacos'},
            {key: 'Steak'},
            {key: 'Beer'},
            {key: 'Salad'},
          ]}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  renderItem = ({item}) => {
    return (
        <Button
            title={item.key}
            onPress={() => this.props.navigation.navigate('FoodInput')}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
