// LKOther.js
import React, { Component } from 'react';
import {
    View,
    Button,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Switch

} from "react-native"
const {width,height} = Dimensions.get('window');
//引入本地数据
 const dataArr = require('../assets/localData/bao.json');
export default class LKFlex extends Component {
    constructor() {
        super();
        this.state={
            shopArr:[],
            //开关状态
            on:false
        }

    }
    render() {

        return (
            <View style={Styles.container}>
              {/* 上部分 */}
                <View style={Styles.topView}>
                    <TouchableOpacity 
                    style={Styles.clickBtnStyle}
                        onPress={()=>this._addShop()}
                    >
                        <Text style={{color:'#fff'}}>添加商品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[Styles.clickBtnStyle,{backgroundColor:'red',marginLeft:10}]}
                        onPress={()=>this._removeShop()}
                    >
                        <Text style={{color:'#fff'}}>删除商品</Text>
                    </TouchableOpacity>
                    <Switch
                     value={this.state.on}
                     onValueChange={()=>this.setState({on:!this.state.on})}
                     ios_backgroundColor='red'
                     
                    />
                </View>
              {/* 下部分 */}
              <View style={Styles.bottomStyle}> 
                {this.state.shopArr}
              </View>
            </View>
        )
    }
    /**
     * 添加商品
     * @private
     */
    _addShop() {
      //1.定义变量
      let cols =3,shopW=100,shopH=120;

      //2.取出下标
      let index =this.state.shopArr.length;
        if(index >=9){
            alert('购物车已满');
            return;
        }
      //3.求出当前盒子的行和列
        let row =Math.floor(index/cols);
        let col =Math.floor(index%cols);
        //4.左边和上边
        let xSpace = (0.9*width -cols*shopW)/(cols-1);
        let ySpace =(0.7*height -3*shopH)/2;

        let left = col*(shopW+xSpace);
        let top = row*(shopH+ySpace);
        //5.创建盒子
       
       
        let shopBox =(
            <View
                style={{
                    position:"absolute",
                    left,
                    top,
                    width:shopW,
                    height:shopH,
                    justifyContent:"center",
                    alignItems:'center'
                }}
                key={index}
            >
                 <Image 
                   source={{uri:  dataArr[index].icon}}
                    style={{width:shopW,height:shopW}}/>
                <Text>{dataArr[index].name}</Text>
            </View>
        );
        //6.更新状态机
        let tempArr = this.state.shopArr;
       
        tempArr.push(shopBox);
        this.setState({
            shopArr:tempArr
        })
    };
    /**
     * 移除商品
     * @private
     */
    _removeShop(){
        let tempArr = this.state.shopArr;
        if(tempArr.length === 0){
            alert("购物车没有商品");
            return;
        };
        tempArr.pop();
        //更新状态机
        this.setState({
            shopArr:tempArr
        });
    }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        backgroundColor:'cyan',
    },
    topView:{
        flexDirection:'row',
        justifyContent:"center",
        marginTop:20
    },
    clickBtnStyle:{
        width:120,
        height:40,
        borderRadius:10,
        backgroundColor:"green",
        justifyContent:"center",
        alignItems:"center",

    },
    bottomStyle:{
        width:0.9*width,
        height:0.7*height,
        backgroundColor:'#fff',
        marginTop:40,
        marginLeft:0.05*width,
        position:"relative"
    }


});