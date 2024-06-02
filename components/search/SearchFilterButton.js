import { View, Image } from 'react-native';
import filterIcon from '../../assets/filter-icon.png';
import { searchFilterButton } from '../../styles/searchStyles/searchFilterButtonStyles';

export default function SearchFilterButton(){
    return(
        <View style = {searchFilterButton.searchFilterButtonContainer}>
            <View style = {searchFilterButton.searchFilterButtonBackgroundRectangle}>
                <Image source = {filterIcon}/>
            </View>
        </View>
    )
}