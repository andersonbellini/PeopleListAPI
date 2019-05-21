import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ErrorComponent = ({msg=""}) => {
    return (
        <View style={styles.borda}>
            <Text style={styles.error}>{msg}</Text>
        </View>
    );

}

const styles =StyleSheet.create({
    error:{ 
      color: 'white',
      alignSelf: 'center',
      fontSize: 18
    },
    borda:{
        backgroundColor: 'red',
        padding: 10,
        marginLeft: 10,
        marginRight:10,
        borderRadius:10
        
    }
  });
export default ErrorComponent;