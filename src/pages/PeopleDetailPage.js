import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Line from '../components/Line'; 
import captalizeFirstLetter from '../util/captalizeFirstLetter';

export default class PeopleDetailPage extends React.Component{
    render() {
        const { people } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Image source={{ uri: people.picture.large}}
                    style={styles.avatar}
                />
                <View style={styles.detailsContainer}>
                <Line label='Email:' content={people.email} />
                <Line label='Cidade:' content={captalizeFirstLetter(people.location.city)} /> 
                <Line label='Estado:' content={captalizeFirstLetter(people.location.state)} /> 
                <Line label='Telefone:' content={people.phone} /> 
                <Line label='Celular:' content={people.cell} /> 
                <Line label='Nacionalidade:' content={people.nat} />           
                </View>
            </View>
        );
    }

}



 const styles = StyleSheet.create({
    container: {
         padding: 15         
    }, 
    avatar: {
        aspectRatio: 1,
        borderRadius: 50
     },
     detailsContainer:{
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1 
     }
     
 });