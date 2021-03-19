import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import axios from 'axios';
import config from '../../../config'

const style = StyleSheet.create({
    container: {flex: 1,
    alignItems: 'center',
    justifyContent: 'center'},
    giphyImg: {
        width:250,
        height: 250
    }
})

const BestsellersScreen = () => {

    const [bestsellers, setBestsellers] = useState("");
    const BASE_URL = `${config.REACT_APP_NYT_URL}api-key=${config.REACT_APP_NYT_API_KEY}`;

    const fetchBestsellers = async () => {
        const res = await axios.get(BASE_URL);
        setBestsellers(res.data.results);
    }

    useEffect(() => {
        fetchBestsellers()
    }, [])

    const onPressChange = () => {
        fetchBestsellers();
    }

    console.log(bestsellers)

    return (

        <View style={style.container}>
            <Text>NYT Best Sellers</Text>
            <Button 
            title="Fetch"
            onPress={onPressChange}
             />
            <View>
                {bestsellers != "" ? bestsellers?.books.map(el => {
                    return <View key={el.primary_isbn10}>
                        <Text >{el.title}</Text>
                        <Text>Here</Text>
                        <Image 
                        style={style.giphyImg}
                        source={{uri: `${el.book_image}`}}/>
                    </View>
                }) : ""}
            </View>
        </View>
    )
}

export default BestsellersScreen;