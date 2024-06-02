import { View, Image, Button } from 'react-native';
import filterIcon from '../../assets/filter-icon.png';
import { searchFilterButton } from '../../styles/searchStyles/searchFilterButtonStyles';

export default function SearchFilterButton(){
    return(
        <View style = {searchFilterButton.searchFilterButtonContainer}>
            <Button style = {searchFilterButton.searchFilterButtonBackgroundRectangle}>
                <Image source = {filterIcon}/>
            </Button>
        </View>
    )
}