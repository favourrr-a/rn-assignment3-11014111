import { View } from 'react-native';
import BannerText from './BannerText.js';
import BannerProfilePhoto from './BannerProfilePhoto.js';
import { bannerStyles } from '../../styles/bannerStyles/bannerStyles.js';

export default function Banner(){
    return(
        <View style = {bannerStyles.bannerContainer}>
            <BannerText/>
            <BannerProfilePhoto/>
        </View>
    )
}