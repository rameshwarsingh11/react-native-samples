import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';


//const ImageDetail = (props) => {
// instead of full props object, take whatever you need
const ImageDetail = ({imageSource, title, score}) => {
    //console.log(props);
    return (
        <View>
            {/* <Image source = {require('../../../assets/beach.jpg')}/> */}
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageDetail;