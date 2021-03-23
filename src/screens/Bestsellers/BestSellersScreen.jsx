import React, {useState, useEffect, useContext} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';
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

        <View style={style.container}>
            <Text>NYT Best Sellers</Text>
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
            {bestsellers.length ? bestsellers?.map(el => {
                return (
                    <View key={el.primary_isbn10}>
                        <Text >{el.title}</Text>
                        <Image 
                            style={style.bestsellerImg}
                            source={{uri: `${el.book_image}`}}/>
                        <Text>by {el.title}</Text>
                    </View>
                )
            }) : ""}
        </View>
    )
}


const style = StyleSheet.create({
    container: {flex: 1,
    alignItems: 'center',
    justifyContent: 'center'},
    bestsellerImg: {
        width: 180,
        height: 250
    }
})

export default BestsellersScreen;