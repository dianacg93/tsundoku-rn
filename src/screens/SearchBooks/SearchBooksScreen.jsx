import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native';
import axios from 'axios';
import config from '../../../config'
import quoteData from '../../../quoteData'

const SearchBooksScreen = () => {

    const [searchBook, setSearchBook] = useState("");
    const [resultBooks, setResultBooks] = useState([]);
    const [isAdvanced, setIsAdvanced] = useState(false);
    const [quote, setQuote] = useState(quoteData[Math.floor(Math.random() * quoteData.length)])

    const BASE_URL = `${config.REACT_APP_GOOG_URL}key=${config.REACT_APP_GOOG_API_KEY}&q=${searchBook}`

    useEffect(() => {
		const interval = setInterval(() => {
			setQuote(quoteData[Math.floor(Math.random() * quoteData.length)]);
		}, 6000);

		return () => clearInterval(interval);
	}, [quote]);

    const fetchSearchBook = async () => {
        try {
            const res = await axios.get(BASE_URL);
            setResultBooks(res.data.items);
        } catch (e) {
            console.log(e)
        }
    }

    const onPressChange = () => {
        fetchSearchBook();
    }

    return (
        <View style={style.container}>
            <Text>Search for Books</Text>
            <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setSearchBook(text)}
            value={searchBook}
            />
            <Text onPress={() => setIsAdvanced(!isAdvanced)}>Advanced Search</Text>
            {isAdvanced ? 
            <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setSearchBook(text)}
            value={searchBook}
            placeholder="Advanced"
            /> : 
            ""
            }
            <Button 
            title="Search"
            onPress={onPressChange}
             />
            {resultBooks.length ? 
                resultBooks.map(el => {
                    return (
                        <View key={el.id}>
                            <Text>{el.volumeInfo.title}</Text>
                            <Image 
                            style={style.resultImgs}
                            source={{uri: `${el.volumeInfo.imageLinks.thumbnail}`}}
                            />
                            <Text> by {el.volumeInfo.authors? el.volumeInfo.authors[0] : "unknown"}</Text>
                        </View>
                    )
                }) 
                : 
                        <View>
                            <Text>{quote.quote}</Text>
                            <Text>{quote.author}</Text>
                        </View>
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {flex: 1,
    alignItems: 'center',
    justifyContent: 'center'},
    resultImgs: {
        width:180,
        height: 250
    }
})

export default SearchBooksScreen;