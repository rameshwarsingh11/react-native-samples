import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, ShadowPropTypesIOS } from 'react-native';

// getting full propos object
//const HomeScreen = (props) => {
 
//Getting selected nexted object only from propos object 
  const HomeScreen = ({navigation}) => {
  //console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => /*console.log('button pressed')*/
          //props.navigation.navigate('Components')
          navigation.navigate('Components')
        }
      />

      <Button
        title = 'Go to List Demo'
        //onPress={() => props.navigation.navigate('List')
        onPress={() => navigation.navigate('List')
        }
      />

      <Button
        title = 'Go to Images'
        //onPress={() => props.navigation.navigate('List')
        onPress={() => navigation.navigate('Image')
        }
      />

      <Button
        title="Go to Counter Demo"
        onPress={() => /*console.log('button pressed')*/
          //props.navigation.navigate('Components')
          navigation.navigate('Counter')
        }
      />
      <Button
        title="Go to Color Demo"
        onPress={() => /*console.log('button pressed')*/
          //props.navigation.navigate('Components')
          navigation.navigate('Color')
        }
      />
      <TouchableOpacity onPress={() => /*console.log('List pressed!')*/
        props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
