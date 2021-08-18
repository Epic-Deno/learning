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
// import LKText from './components/LK_text'
// import LkImages from './components/LKImages'
// import LkTextInput from './components/LKTextInput'
// LKOther
// LKFlex
// import LKOther from './components/LKOther'
// import LKFlex from './components/LKFlexDemo'
// import LKScrollView from './components/LKScrollView'
// import LKSwiper from './components/LKSwiper'
// import LKReFresh from './components/LKReFresh'
// LKFlatList.js
// import LKFlatList from './components/LKFlatList'
// LKWineList
// import LKWineList from './components/LKWineList'
import LKNet from './components/LKNet'



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainView}>
        {/* <LKFlex /> */}
        {/* <LKScrollView /> */}
        {/* <LKSwiper /> */}
        {/* <LKReFresh /> */}
        {/* <LKFlatList /> */}
        {/* <LKWineList /> */}
        <LKNet />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  mainView: {
   flex:1,
    backgroundColor: '#fff',
    //主轴的方向
    flexDirection:'row',
    justifyContent:'center',
    alignItems:"flex-start"
  }
})

export default App;
