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


// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.mainView}>
//         {/* <View style={styles.mainView}> */}
//           <View style={{width:40 ,height: 110,backgroundColor:'green'}}>
//             <Text>视图1</Text>
//           </View>
//           <View style={{width:60 ,height: 120,backgroundColor:'blue'}}>
//             <Text>视图2</Text>
//           </View>
//           <View style={{width: 70,height:130,backgroundColor:'orange'}}>
//             <Text>视图3</Text>
//           </View>
//           <View style={{width: 80,height:140,backgroundColor:'purple'}}>
//             <Text>视图4</Text>
//           </View>
//         {/* </View> */}
//       </SafeAreaView>
//     </>
//   );
// };
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainView}>
       <Text>
         当前屏幕的宽度：{Dimensions.get("window").width+'\n'}
         当前屏幕的高度：{Dimensions.get("window").height+'\n'}
         当前屏幕的分辨率：{Dimensions.get("window").scale+'\n'}
         当前运行的平台：{Platform.OS}
       </Text>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  mainView: {
   flex:1,
    backgroundColor: 'red',
    //主轴的方向
    flexDirection:'row',
    justifyContent:'center',
    alignItems:"center"
  }
})


export default App;
