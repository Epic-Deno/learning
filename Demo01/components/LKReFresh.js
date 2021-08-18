// LKReFresh
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    ScrollView,
    RefreshControl
} from "react-native"
const screenW =Dimensions.get("window").width
export default class LKReFresh extends Component {
    constructor() {
        super();
        this.state = {
            rowDataArr:Array.from(new Array(30)).map((value,index)=>({
                title:'初始数据'+index
            })),
            //是否显示loading
            isRefreshing:false,
            loaded:0
        }
    }
    render() {
        const rowArr= this.state.rowDataArr.map((row,index)=>(<Row data={row} key={index} />))
        return (
            <View >
                <ScrollView
                    refreshControl = {
                        //ios支持title，Android支持colors
                        <RefreshControl 
                            refreshing={this.state.isRefreshing}
                            onRefresh={()=>this._onRefresh()}
                            colors={['red','cyan','green']}
                            title='正在加载中'
                        />
                    }
                >
                    {rowArr}
                </ScrollView>
            </View>
        )
    }
    _onRefresh(){
        //1.显示指示器
        this.setState({
            isRefreshing:true
        });
        //2.模拟器
        setTimeout(()=>{
            let newDataArr =Array.from(new Array(5)).map((value,index)=>({
                title:'我是下拉下的数据'+(this.state.loaded+index)
            })).concat(this.state.rowDataArr);
            //更新状态机
            //更新下拉列表
            //重置刷新
            this.setState({
                rowDataArr:newDataArr,
                isRefreshing:false,
                loaded:this.state.loaded
            })
        },2000)
    }

}
class Row extends Component{
    static defaultProps = {
        data:{}
    };
    render() {
        return (
             <View style={{
                 width:screenW,
                 height:40,
                 borderBottomWidth:1,
                 borderBottomColor:'red',
                 justifyContent:'center',
             }}>
                 <Text>
                     {this.props.data.title}
                 </Text>
             </View>
        );
    }
    
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }


});