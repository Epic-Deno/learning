/**
 * @format
 */
//引入注册类组件
import {AppRegistry} from 'react-native';
//引入汇总模块
import App from './App';
//引入输出组件的名称
import {name as appName} from './app.json';
//主程序入口
AppRegistry.registerComponent(appName, () => App);
