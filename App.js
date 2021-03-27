// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip
              from any slide or Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 420,

    height: 1000,
    resizeMode: 'stretch',
  },
  introTextStyle: {
    fontSize: 25,
    fontStyle: 'normal',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: '',
    title: 'Suivez le cap...',
    image: require('/Users/paulgerard/Desktop/Hackathon/my_app/assets/Frame5.png'),
    backgroundColor: 'transparent',
  },
  {
    key: 's2',
    title: '...et maintenez le !',
    text: '',
    image: require('/Users/paulgerard/Desktop/Hackathon/my_app/assets/Frame6.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Ressentir de la souffrance est normal. Il faut l’accepter.',
    text: '',
    image: require('/Users/paulgerard/Desktop/Hackathon/my_app/assets/Frame7.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'TODO',
    text: 'TODO',
    backgroundColor: '#3395ff',
  },

];