import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StarMap extends React.Component{
    render(){
        return(
            <View style = {{flex:1, justifyContent: "center", alignItems:"center", marginTop:60}}>
                <Text> Star Map </Text>
            </View>
        )
    }
}