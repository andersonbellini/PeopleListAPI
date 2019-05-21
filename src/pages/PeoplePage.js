import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import PeopleList from '../components/PeopleList';
import ErrorComponent from '../components/ErrorComponent';

import axios from 'axios';

export default class PeoplePage extends React.Component {
constructor(props){
  super(props);

  this.state = {
    peoples:[],
    loading: false,
    error: false
  };
}

componentDidMount(){
  this.setState({loading:true});
  //setTimeout(() => { // Usado apenas para simulação de latência de rede
    axios
            .get('http://randomuser.me/api/?nat=br&results=15')
            .then(response => {
              const {results}  = response.data;
              this.setState({
                peoples: results,
                loading: false
              })            
            })
            .catch(error => {
                this.setState({
                  loading:false,
                  error: true
                })
            });
    
  //}, 2000);
}

// renderLoading(){
//   if(this.state.loading){
//     return <ActivityIndicator size="large" color="#6ca2f7"/> 
//   }
//   return null;
// }

  render() {
    //this.props.navigation.navigate('PeopleDetail');
    return (
      <View style = {styles.container}>   
        { /*this.renderLoading()*/}      
        {
          this.state.loading 
            ? <ActivityIndicator size="large" color="#6ca2f7"/>   
            : this.state.error
                ? <ErrorComponent msg={"Ops ..  Algo deu errado!"}/>
                : <PeopleList 
                    peoples={this.state.peoples} 
                    onPressItem={(pageParams)=> {
                      this.props.navigation.navigate('PeopleDetail', pageParams);
                    }}
                  />              
        }         
      </View>
    );
  }
  
};

const styles =StyleSheet.create({
  container:{
      flex:1,
      justifyContent: 'center'
  },
  error:{
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  }
});