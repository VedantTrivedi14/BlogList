import React ,{useState} from 'react';
import {View,StyleSheet,Text,TouchableOpacity,TextInput} from 'react-native';

const BlogPostForm =({onSubmit,initialValues})=>{
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}>Enter Title:</Text>
            <TextInput
                style={styles.inputStyle}
                value={title} onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.labelStyle}>Enter Content:</Text>
            <TextInput
                style={styles.inputStyle}
                value={content} onChangeText={(text) => setContent(text)}
            />
            <View style={styles.buttonStyle}>
            <TouchableOpacity 
            onPress={() => onSubmit(title,content,)}
            >
            <Text style={styles.btnStyle}>Save Blog Post</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};
BlogPostForm.defaultProps = {
    initialValues: {
        title :'',
        content : ''
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal :20,
    },
    inputStyle: {
        fontSize: 18,
        borderRadius: 20,
        marginVertical: 5,
        padding: 5,
        backgroundColor: 'white',
    },
    labelStyle: {
        fontSize: 20,
    },
    btnStyle :{
        marginVertical : 20,
        paddingVertical :10,
        backgroundColor :'#abcdef',
        borderRadius :20,
        alignSelf : 'stretch',
        textAlign : 'center',
        fontWeight : 'bold',
    },
});

export default BlogPostForm;