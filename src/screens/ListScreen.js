import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import { FlatList } from "react-native";

/*const ListScreen = ()=>{
    return <Text>List screen1</Text>
};
*/
const ListScreen = () => {
    const friends = [ 
        {name : 'friend #1', key: '1', age : 20},
        {name : 'friend #2', key: '2', age : 21},
        {name : 'friend #3', key: '3', age : 22},
        {name : 'friend #4', key: '4', age : 23},
        {name : 'friend #5', key: '5', age : 24},
        {name : 'friend #6', key: '6', age : 24},
        {name : 'friend #7', key: '7', age : 26},
        {name : 'friend #8', key: '8', age : 27},
    ];

    return (
        <FlatList
            //keyExtractor={ (friend) => friend.name} 
            //horizontal 
            //showsHorizontalScrollIndicator = {true}
            
            data ={friends} 
            renderItem = {({item}) => {
            return <Text style={styles.textStyle1}>{item.name} - Age = {item.age}</Text>;
        }}
        />
    );
};
const styles = StyleSheet.create({
    textStyle1 : {
        marginVertical : 50
    }
})
export default ListScreen;