import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { colors, parameters } from '../globle/styles'

const Header = ({title, type}) => {
    return (
        <View style={styles.header} >
            <View style={{marginLeft:20}}>
                <Icon type="font-awesome-5" name={type} color={colors.headerText} size={25} onPress={() => {}} />
            </View>
                <View>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
    flexDirection:'row',
    alignItems:"center",
    backgroundColor:colors.button,
    height:parameters.headerHeight
    },
    headerText:{
        color:colors.headerText,
        fontSize:22,
        fontWeight:'bold',
        marginLeft:30
    }
})
