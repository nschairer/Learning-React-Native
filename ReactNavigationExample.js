import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title={"Go to Details"}
          onPress={() => {this.props.navigation.navigate('Details',{
            name: 'noah'
          })}}
        />
      </View>
    );
  }
}
class Details extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'A Nested Details Screen'),
      headerStyle: {
      backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    };
  };
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name','DEFAULTVALUE')
    return (
      <View>
      <Text>{name}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => this.props.navigation.push('Details')}
      />
      <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      <Button
        title="Go back"
        onPress={() => this.props.navigation.goBack()}
      />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: Details
  },{
    initialRouteKey: "Home"
  });

export default createAppContainer(AppNavigator);
