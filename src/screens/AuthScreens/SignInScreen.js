import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Icon } from 'react-native-elements'
import Header from '../../components/Header'
import { colors, title } from '../../globle/styles'

const SignInScreen = () => {
    const [textInputFocus, setTextInputFocus] = useState(true)

    const tectinput1 = useRef(1)
    const tectinput2 = useRef(2)

    return (
        <View style={styles.container}>
<Header title="MY ACCOUNT" type="arrow-left" />
<View style={{marginLeft:20, marginTop:10}}>
    <Text style={title}>Sign In</Text>
</View>

<View style={{alignItems:'center', marginTop:10}}>
    <Text style={styles.text1}>Please Enter The Email And Password</Text>
    <Text style={styles.text1}>registered with your account</Text>
</View>


<View style={{marginTop:20}}>

        <View>
            <TextInput style={styles.textinput1} placeholder='Email' ref={tectinput1} />
        </View>

        <View  style={styles.textinput2}>
            <Animatable.View animation={textInputFocus?"":"fadeInLeft"} duration={400}>
                <Icon name="lock" type="material" iconStyle={{color:colors.grey3}} />
            </Animatable.View>
            <TextInput placeholder='Password' style={{flex:1, marginHorizontal:10}} ref={tectinput2} onFocus={() => setTextInputFocus(false)} onBlur={()=> setTextInputFocus(true)} />
            <Animatable.View animation={textInputFocus?"":"fadeInRight"} duration={400}>
                <Icon name="visibility-off" type="material" iconStyle={{color:colors.grey3}} />
            </Animatable.View>
        </View>

</View>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container:{
        flex: 1
    }, 
    text1:{
        color:colors.grey1,
        fontSize:16
    },
    textinput1:{
        borderWidth:1,
        borderColor:colors.grey3,
        marginHorizontal:20, 
        borderRadius:12,
        marginBottom:20, paddingLeft:15
    },
     textinput2:{
        borderWidth:1,
        borderColor:colors.grey3,
        marginHorizontal:20, 
        borderRadius:12,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        alignContent:"center",
        padding:15
    }
})
