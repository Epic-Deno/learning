import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    FlatList
} from "react-native"
import axios from 'axios'
import LKSwipers from './../components/Swiper/index'
const ScreenW = Dimensions.get('window').width;
export default class LKNet extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [],
            imgDataArr: []
        }
    }
    render() {

        return (
            <FlatList
                ListEmptyComponent={()=>(<Text>正在努力加载中。。。。。</Text>)}
                ListHeaderComponent={() => (
                    <LKSwipers imgDataArr={this.state.imgDataArr} />
                )}
                data={this.state.dataSource}
                renderItem={({ item, index }) => this._renderRow(item, index)}
                keyExtractor={(item, index) => item + index}
            />
        )
    }
    _renderRow(item, index) {
        return (
            <TouchableOpacity
                style={{
                    width:ScreenW,
                    height:140,
                    borderBottomWidth:1,
                    borderBottomColor: '#e8e8e8',
                    flexDirection:'row',
                    padding:10
                }}
                key={index}
            >

               <Image source={{uri: item.small_image}}  style={{width:120,height:120}} />
               <View style={{
                   flex:1
               }}>
                   <Text>{item.product_name}</Text>
                   <Text style={{color:'red'}}>{item.price}¥</Text>
               </View>

            </TouchableOpacity>
        )
    }
    componentDidMount() {
        //发起网络请求(fetch)
        // fetch('http://demo.itlike.com/web/xlmc/api/homeApi').then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson)
        //     }).catch((error) => {
        //         console.error(error);
        //     });
        // this._getHomeFromApi();

        //2.发起网络请求axios
        axios.get('http://demo.itlike.com/web/xlmc/api/homeApi').then(res => {
            let homeSwiperDataArr = res.data.data.list[0].icon_list;
            let product_list = res.data.data.list[res.data.data.list.length - 1].product_list;

            this.setState({
                imgDataArr: homeSwiperDataArr,
                dataSource: product_list
            })
        }).catch(error => {
            console.log(error)
        })
    }
    // 注意这个方法前面有async关键字
    async _getHomeFromApi() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch(
                'http://demo.itlike.com/web/xlmc/api/homeApi',
            );
            let responseJson = await response.json();
            console.log(responseJson)
        } catch (error) {
            console.error(error);
        }
    }
}
const Styles = StyleSheet.create({

    mainTitleStyle: {
        fontSize: 30,
        color: 'cyan'
    },
    subTitleStyle: {
        fontSize: 20,
        color: '#00f',
    },
    commonStyle: {
        fontWeight: 'bold'
    },

});