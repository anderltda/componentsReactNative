import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

//export default function(props) {
//   return <Text>{props.texto}</Text>
//}

//export default props => [
//    <Text key={1}>Arrow: {props.texto}</Text>,
//    <Text key={2}>Arrow: {props.texto}</Text>
//]

//export default props => 
//    <View>
//        <Text>Arrow: {props.texto}</Text>
//        <Text>Arrow: {props.texto}</Text>
//    </View>

//export default props => {
//    return [
//        <Text key={1}>Arrow: {props.texto}</Text>,
//        <Text key={2}>Arrow: {props.texto}</Text>
//   ]

export default props => 
    <Text style={Padrao.ex}>Arrow: {props.texto}</Text>

