/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform
} from 'react-native';
import LKText from './components/LK_text'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainView}>
        <LKText />
      </SafeAreaView>
    </>
  );
};
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.mainView}>
//           <View style={{width:200,height:150,backgroundColor:'cyan'}}>
//             <Text>我是文本</Text>
//           </View>
//           <View style={{width:200,height:150,backgroundColor:'purple'}}></View>
//       </SafeAreaView>
//     </>
//   );
// };
const styles = StyleSheet.create({
  mainView: {
   flex:1,
    backgroundColor: 'red',
    //主轴的方向
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:"flex-start"
  }
})


export default App;
