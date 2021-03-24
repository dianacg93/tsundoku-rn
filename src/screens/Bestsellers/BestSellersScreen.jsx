import React, {useState, useEffect, useContext} from 'react'
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import config from '../../../config'

const BestsellersScreen = () => {

    const [bestsellers, setBestsellers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [topic, setTopic] = useState("travel");

	const fetchCategoryNames = async () => {
		const response = await axios.get(`${config.REACT_APP_NYT_CATEGORY_NAMES}api-key=${config.REACT_APP_NYT_API_KEY}`);

		setCategories(response.data.results);
	};

	const renderTopicSection = async () => {
		const response = await axios.get(`${config.REACT_APP_NYT_CATEGORY}${topic}.json?api-key=${config.REACT_APP_NYT_API_KEY}`);

		setBestsellers(response.data.results.books);
	};
    
    useEffect(() => {
        fetchCategoryNames();
    }, []);
    
	useEffect(() => {
        renderTopicSection()
    }, [topic]);

    return (
        <ScrollView>
            <View style={style.container}>
                <Text style={{fontSize:25, flex:1, alignSelf:'center', padding: 10, fontWeight:'600'}}>NYT Best Sellers</Text>
                <Picker
                    selectedValue={topic}
                    onValueChange={(itemValue) =>
                        setTopic(itemValue)
                    }
                    >
                    {categories.map((cat, i) => {
                        return (
                            <Picker.Item 
                                key={i}
                                label={cat.list_name} 
                                value={cat.list_name_encoded}
                            />
                        )
                    })}
                </Picker>
                <ScrollView>
                {bestsellers.length ? bestsellers?.map((el,i) => {
                    return (
                        <View 
                        style={{flex:1, alignItems:'center', padding:10}}
                        key={i+1}>
                            <Text 
                            style={{flex:1, alignSelf:'center', flexWrap:'wrap', fontSize:20, color:'#AB1211', fontWeight:'600'}}
                            >{el.title}</Text>
                            <Text
                            style={{flex:1, alignSelf:'center', flexWrap:'wrap', fontSize:20}}
                            >by {el.author}</Text>
                            <Image 
                                style={style.bestsellerImg}
                                source={{uri: `${el.book_image}`}}
                                />
                        </View>
                    )
                }) : <Text></Text>}
                </ScrollView>
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFEE',
        justifyContent: 'center'
},
    bestsellerImg: {
        width: 180,
        height: 250,
        padding: 5
    }
})

export default BestsellersScreen;