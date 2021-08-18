import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Dimensions
} from "react-native"
import LKSwipers from './../components/Swiper/index'
//引入本地数据
const wineArr =require('./../assets/localData/Wine');
const ScreenW=Dimensions.get('window').width;
export default class LKWineList extends Component {
    constructor() {
        super();
       this.state={
           dataSource:wineArr
       }
    }
    render() {

        return (
           <FlatList 
           ListHeaderComponent={()=>(
            <LKSwipers />
           )}
           ListFooterComponent={()=>(
               <View>
                   <Image
                        source={require('./../assets/images/lk.jpg')}
                        style={{
                            width:ScreenW,
                            height:80
                        }}
                   />
               </View>
           )}
           data={this.state.dataSource} 
           renderItem={({item,index})=>this._renderRow(item,index)}
           keyExtractor={(item,index)=>item+index}
           />
        )
    }
    _renderRow(RowData,RowId){
        return (
            <TouchableOpacity
                style={Styles.cellStyle}
            >
                {/* 左边 */}
                    <Image 
                    style={{
                        width:80,
                        height:80,
                        backgroundColor:'cyan'
                    }}
                     source={{uri:RowData.image}}/>
                {/* 右边 */}
                <View 
                    style={{
                        flex:1,
                        // backgroundColor:"cyan",
                        marginLeft:10,
                        marginRight:10,
                        justifyContent:'space-around'
                    }}
                >
                     <Text
                        numberOfLines={2}
                        style={{
                            fontSize:18
                        }}
                     >{RowData.name}</Text>
                     <Text style={{
                         color:'red'
                     }}>¥{RowData.money}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const Styles = StyleSheet.create({
    cellStyle:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8',
        padding:10
    },


});