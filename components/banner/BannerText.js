import { View, Text } from 'react-native';
import { bannerTextStyles } from '../../styles/bannerStyles/bannerTextStyles.js'

export default function BannerText(){
    return(
        <View style = {bannerTextStyles.textContainer}>
            <Text style = {bannerTextStyles.textStyle}> Hello, Devs </Text>
            <BannerTasksText/>
        </View>
    )
}

function BannerTasksText(){
    return(
        <View style = {bannerTextStyles.tasksTextContainer}>
            <Text style = {bannerTextStyles.tasksText}>14 tasks today</Text>
        </View>
    )
}