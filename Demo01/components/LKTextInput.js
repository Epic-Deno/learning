import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,

} from "react-native"
export default class LkTextInput extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }
    render() {

        return (
            <View >
                <TextInput
                    style={{
                        width: 300, height: 80,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginLeft: 10,
                        padding: 10,
                    }}
                    clearButtonMode="always"
                    //键盘类型
                    // keyboardType="number-pad"
                    placeholder="请输入用户名"
                    placeholderTextColor="#efefef"
                    // 多行显示
                    // multiline={true}
                    //文字变化
                    onChangeText={(text) => { this.setState({ inputValue: text }) }}
                />
                <Text>上面输入的内容:{this.state.inputValue}</Text>
            </View>
        )
    }

}

const Styles = StyleSheet.create({



});