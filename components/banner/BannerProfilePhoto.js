import { View, Image } from 'react-native';
import profileImage from '../../assets/profile-photo.png';
import { bannerProfilePhotoStyles } from '../../styles/bannerStyles/bannerProfilePhotoStyles';

export default function BannerProfilePhoto(){
    return(
        <View style = {bannerProfilePhotoStyles.profilePhotoContainer}>
            <Image source = {profileImage} style = {bannerProfilePhotoStyles.profilePhoto}></Image>
        </View>
    )
}