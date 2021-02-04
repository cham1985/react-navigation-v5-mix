import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import * as routes from '../route/routes';
import CustomNavigationBar from '../components/CustomNavigationBar';
import {useTheme} from '@react-navigation/native';

const DetailsScreen = ({navigation}) => {
  const {setOptions} = navigation; //在具体页面内设置 ScreenOptions https://www.jianshu.com/p/a2582f8b16fd
  const {colors} = useTheme();

  /**
   * componentDidMount && componentWillUnmount
   */
  useEffect(
    /*The async keyword cannot be added to the first parameter https://juejin.im/post/6844903985338400782#heading-27 */
    () => {
      //todo
      console.log('DetailsScreen componentDidMount navigation=', navigation);
      setOptions({
        header: props => (
          <CustomNavigationBar
            {...props}
            rightComp={<Text style={{color: colors.text}}>右按钮</Text>}
          />
        ),
        // headerShown: false,
      });

      //componentWillUnmount
      return () => {
        console.log('DetailsScreen componentWillUnmount');
      };
    },
    [colors.text, navigation, setOptions],
  );

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details screen again"
        onPress={() => navigation.push(routes.DetailsScreen.routeName)}
      />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
