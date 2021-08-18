// LKOther.js
import React, { Component } from 'react';
import {
    View,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity

} from "react-native"
export default class LkOther extends Component {
    constructor() {
        super();

    }
    render() {

        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Button
                    title="登陆"
                    onPress={() => this._onBtnpress()}
                    color="green"
                />
                <TouchableOpacity 
                style={Styles.btnstyle}
                activeOpacity={0.6}
                onLongPress={()=>{this._onBtnpress()}}
                >
                    <Text style={{ fontSize: 20, color: '#fff' }}>注册账号</Text>
                </TouchableOpacity>

            </View>
        )
    }
    _onBtnpress() {
        alert("点我干嘛")
    }
}

const Styles = StyleSheet.create({
    btnstyle:{
        width:200,
        height:30,
        borderRadius:10,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'red'

    }


});