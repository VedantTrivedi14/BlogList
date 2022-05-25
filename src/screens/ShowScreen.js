import React,{useContext} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons'; 

const ShowScreen = ({navigation}) => {

    const {state} = useContext(Context);
    const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));
    // console.log(navigation.getParam('id'));
    return (
        <View>
            <Text style={styles.titleStyle}>Title : {blogPost.title}</Text>
            <Text style={styles.msgStyle}>Massage : {blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight :()=><TouchableOpacity onPress={()=> navigation.navigate('Edit',{id : navigation.getParam('id')})}>     
               <Entypo name="edit" size={30} color="black" style={{marginRight :10}}/>
        </TouchableOpacity>
 
    
    };
};

const styles = StyleSheet.create({
    titleStyle :{
        marginHorizontal :10,
        fontSize :20,
        fontWeight : 'bold',
    },
    msgStyle : {
        marginHorizontal :10,
        fontSize :16,
        padding : 5,
    },

});

export default ShowScreen;