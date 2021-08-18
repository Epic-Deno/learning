import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native"
export default class LKText extends Component {
    constructor() {
        super();
        this.state = {
            name: "逍遥子",
            realname: '张朕',
            bodyText: '对酒当歌人生几何，譬如朝露，去日苦多'
        }
    }
    render() {
        const { name, realname, bodyText } = this.state;
        return (
            <View>
                {/* <Text style={Styles.commonStyle,Styles.mainTitleStyle}>{name}</Text> */}
                <Text style={[Styles.mainTitleStyle, Styles.commonStyle]}>{name}</Text>
                <Text style={[Styles.subTitleStyle, Styles.commonStyle]}>{realname}</Text>
                {/* <Text style={{fontSize:20,color:'cyan'}}>
                    <Text style={Styles.mainTitleStyle}>{name+'\n'}</Text>
                    <Text style={Styles.subTitleStyle}>{realname}</Text>
                </Text> */}
                <View style={{ backgroundColor: 'cyan', width: 200, height: 150 }}>
                    <Text style={{ fontSize: 25, lineHeight: 40 }} numberOfLines={2} ellipsizeMode="middle">{bodyText}</Text>
                </View>
            </View>
        )
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