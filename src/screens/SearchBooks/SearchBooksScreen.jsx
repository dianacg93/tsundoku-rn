import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native';
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

const SearchBooksScreen = () => {

    const [searchBook, setSearchBook] = useState("cats");
    const [resultBooks, setResultBooks] = useState([]);
    const BASE_URL = `${config.REACT_APP_GOOG_URL}key=${config.REACT_APP_GOOG_API_KEY}&q=${searchBook}`

    const fetchSearchBook = async () => {
        try {
            const res = await axios.get(BASE_URL);
            setResultBooks(res.data.items);
        } catch (e) {
            console.log(e)
        }
    }

    // useEffect(() => {
    //     fetchSearchBook()
    // }, [])

    const onPressChange = () => {
        console.log(apiUrl)
        fetchSearchBook();
    }

    return (
        <View style={style.container}>
            <Text>SearchGiphyScreen</Text>
            <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setSearchBook(text)}
            value={searchBook}
            />
            <Button 
            title="Search Gif!"
            onPress={fetchSearchBook}
             />
             <View>
                 <Text>Search Book</Text>
                 {
                     resultBooks.length ? 
                     resultBooks.map(el => {
                        return (
                            <View key={el.id}>
                                <Text>{el.volumeInfo.title}</Text>
                                <Image 
                                style={style.giphyImg}
                                source={{uri: `${el.volumeInfo.imageLinks.thumbnail}`}}
                                />

                            </View>
                        )
                     }) 
                     : ""
                 }
             </View>
        </View>
    )
}

export default SearchBooksScreen;