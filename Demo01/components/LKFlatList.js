import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    Dimensions
} from "react-native"
const ScreenW=Dimensions.get('window').width;
export default class LKFlatList extends Component {
    constructor() {
        super();
        this.state= {
            dataSource:[
                '第一行数据',
                '第二行数据',
                '第三行数据',
                '第四行数据',
                '第五行数据',
                '第六行数据',
                '第七行数据',
                '第八行数据',
                '第九行数据',
            ]
            
        }
    }
    render() {

        return (
           <FlatList 
            data={this.state.dataSource} 
            renderItem={({item,index})=>this._renderRow(item,index)}
            keyExtractor={(item,index)=>item+index}
            style={{
                width:ScreenW,
                flexDirection:'row',
                flexWrap:'wrap',
            }}
            numColumns={4}
           />
        )
    }
    _renderRow(item,index){
        return (
            <TouchableOpacity
                style={{
                    width:100,
                    height:200,
                    borderBottomColor:'red',
                    borderBottomWidth:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                onPress={()=>{
                   this._onClick(index)
                }}
            >
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        )
      
    };
    _onClick(index){
        alert(`点击了第${index+1}行`)
    }
}
const Styles = StyleSheet.create({



});