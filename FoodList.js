import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

export default class FoodList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [{
        key: 'Tacos'
      }]
    };
  }

  render() {
    return (
      <View  style={styles.container}>
        <Button
            title="What are you eating?"
            onPress={() => this.props.navigation.navigate('FoodInput', { submit: this.submit.bind(this) })}
        />
        <FlatList
          data={this.state.items}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  renderItem = ({item}) => {
    return (
        <Button
            style={styles.listItem}
            title={item.key}
            onPress={() => this.props.navigation.navigate('FoodInput', { submit: this.submit.bind(this) })}
        />
    )
  }

  submit(newItem) {
    const { items } = this.state;

    items.push({ key: newItem });

    this.setState({items: items.slice()});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  listItem: {
    color: 'black'
  }
});
