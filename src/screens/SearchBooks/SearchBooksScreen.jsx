import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native';
import axios from 'axios';
import config from '../../../config'
import quoteData from '../../../quoteData'
import { ScrollView } from 'react-native-gesture-handler';

const SearchBooksScreen = () => {

    const [searchBook, setSearchBook] = useState("");
    const [resultBooks, setResultBooks] = useState([]);
    const [isAdvanced, setIsAdvanced] = useState(false);
    const [quote, setQuote] = useState(quoteData[Math.floor(Math.random() * quoteData.length)])

    const BASE_URL = `${config.REACT_APP_GOOG_URL}key=${config.REACT_APP_GOOG_API_KEY}&q=${searchBook}`

    useEffect(() => {
		const interval = setInterval(() => {
			setQuote(quoteData[Math.floor(Math.random() * quoteData.length)]);
		}, 8000);

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
        setSearchBook("")
    }

    return (
        <ScrollView>
            <View style={style.container}>
                <Text style={{fontSize:25, flex:1, alignSelf:'center', padding: 10, fontWeight:'600'}}>Search for Books</Text>
                <View
                style={{flex:2, flexDirection: 'row', alignItems: 'center'}}
                >
                    <TextInput
                    style={{ height: 40, width: 100, borderColor: '#E5E7EB', borderRadius:15, borderWidth: 2 }}
                    onChangeText={text => setSearchBook(text)}
                    value={searchBook}
                    />
                    <Button 
                    title="Search"
                    onPress={onPressChange}
                    />
                </View>
                <View 
                style={{flex:1, alignItems:'center', padding:10}}
                >
                {resultBooks.length ? 
                    resultBooks.map(el => {
                        return (
                            <View 
                            style={{flex:1, alignSelf:'center', alignItems: 'center', padding:10}}
                            key={el.id}>
                                <Text
                                style={{alignSelf:'center', flexWrap:'wrap', fontSize:20, color:'#AB1211', fontWeight:'600'}}
                                >{el.volumeInfo.title}</Text>
                                <Text
                                style={{flex:1, alignSelf:'center', flexWrap:'wrap', fontSize:20}}
                                > by {el.volumeInfo.authors? el.volumeInfo.authors[0] : "unknown"}</Text>
                                <Image 
                                style={style.resultImgs}
                                source={{uri: `${el.volumeInfo.imageLinks.thumbnail}`}}
                                />
                            </View>
                        )
                    }) 
                    : 
                    <View
                    style={{padding:10}}
                    >
                        <Text 
                        style={{fontSize:18, fontWeight:'500', alignSelf:'center'}}
                        >"{quote.quote}"</Text>
                        <Text >- {quote.author}</Text>
                    </View>
                }
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFEE',
        alignItems: 'center',
        justifyContent: 'center'},
    resultImgs: {
        width:180,
        height: 250,
        padding: 5
    }
})

export default SearchBooksScreen;