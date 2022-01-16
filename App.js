/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackComponent,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react/cjs/react.development';
import Header1 from './components/header'
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Emoji from './components/emoji';
import { useEffect } from 'react';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {

  const handleImagePress = () => {
    console.log("Dogukan pressed the image");
    // console.log(require('./img/logo-for-wasteFind.png'));
    alert("wasteFinder Logo", "Please type your custom image name.", (text) => console.log(text));
    console.log(todos)
  }

  const handleDetection = () => {
    console.log("Preparing the device camera...");
    Alert.alert("Detection Warning",
      "Do you want to open camera and start analyzing the waste?",
      [
        {
          text: "Ask me later",

          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]);

  }


  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [todos, setTodos] = useState([
    { text: 'System Engineering', key: '1' },
    { text: 'Dist. Systems', key: '2' },
    { text: 'Veri İletişimi(DT)', key: '3' }]);


  const pressHandler = (key) => {

    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const changeArrayKeyToInt = (array) => {
    return array.length != 0 ? parseInt((array.slice(-1)[0]).key) : 0;
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [...prevTodos, { text: text, key: (changeArrayKeyToInt(prevTodos) + 1).toString() }]
      })
    }
    else {
      Alert.alert("Todo Item Length Warning.",
        "Todo Items must be over 3 characters :(",
        [
          {
            text: "Ok",

            onPress: () => console.log("Todo Item Length Ok pressed")
          }
        ]);
    }

  }

  const editHandler = (todoKey, newText) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todos => todos.key === todoKey);
    newTodos[index] = Object.assign(newTodos[index], { text: newText });

    setTodos(newTodos);
  };

  const [selectedId, setSelectedId] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Keyboard dismissed');
    }}>
      <SafeAreaView style={styles.container}>
        <Header1 style={styles.header} />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.imageAndDetectButton}>
            <TouchableHighlight onPress={handleImagePress}>
              <Image
                style={styles.logo}
                source={require('./img/logo-for-wasteFind.png')}
              />
            </TouchableHighlight>
            <View style={styles.buttonAlert}>
              <Button color='limegreen' title="Detect" onPress={handleDetection} />
            </View>
          </View>
          <View style={styles.list}>
            <FlatList numColumns={2} data={todos} renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} editHandler={editHandler} />
            )} />
          </View>
        </View>
        <StatusBar style="auto" />
        <View style={styles.imageAndDetectButton}>
          <Emoji symbol="🐑" label="sheep" />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>);
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  header: {
    marginBottom: '0'
  },
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  imageAndDetectButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    paddingTop: 0,
    paddingHorizontal: 40
  },
  list: {
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    aspectRatio: 1.5,
    resizeMode: 'contain'
  },
  buttonAlert: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
