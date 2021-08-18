import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Image,
    StyleSheet,
    Text,
    Dimensions
} from "react-native"
export default class LkImages extends Component {
    constructor() {
        super();
        this.state = {
            // dataArr: require('../assets/localData/bao.json')
        }
    }
    render() {

        return (
            <View style={Styles.container}>
               {this._renderItem()}
            </View>
        )
    }
    _renderItem(){
        //0.常量 屏幕宽度
        let screenW =Dimensions.get("window").width;
        let cols =3,boxW=100,boxH=120;
        let WMargin = (screenW-boxW*cols) / (cols+1);
        let hMargin=20;
        let dataArr =require('../assets/localData/bao.json');

        //1.组件数据
        let ItemArr=[];
        //2.遍历数组
        dataArr.map((res,index)=>{
            //2.1拿到单个对象
            let data =res;
            //2.2创建组件装入数组
            ItemArr.push(
                <View key={index} style={{width:boxW,height:boxH,backgroundColor:'red',justifyContent:'center',alignItems:'center',marginLeft:WMargin,marginTop:hMargin}}>
                    <Image source={{uri: data.icon}} style={{width:80,height:80}}/>
                    <Text style={{marginTop:5}}>
                        {data.name}
                    </Text>
                </View>
            )
        })
        //3.组件返回数据
        return ItemArr
    }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    }


});