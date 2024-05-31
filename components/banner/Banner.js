import {bannerStyles} from '../../styles/bannerStyles/bannerStyles.js'
import { View, Text } from 'react-native';

export default function Banner(){
    return(
        <View style = {bannerStyles.banner_container}>
            <Text> I am a banner </Text>
        </View>
    )
}