import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
    const { state, deleteBlogPost } = useContext(Context);
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id : item.id})}>
                        <View style={styles.rowStyle}>
                            <Text style={styles.titleStyle}>
                                {item.title} - {item.id}
                            </Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.iconeStyle} name="trash" color="black" />
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    );
                }}

            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight :()=><TouchableOpacity onPress={()=> navigation.navigate('Create')}>     
              <Entypo name="add-to-list" size={30} color="black" style={{marginRight : 10}}/>
        </TouchableOpacity>
 
    
    };
};

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderColor: 'gray',
        borderTopWidth: 1,
    },
    titleStyle: {
        fontSize: 18,
    },
    iconeStyle: {
        fontSize: 24,
    },

});

export default IndexScreen;