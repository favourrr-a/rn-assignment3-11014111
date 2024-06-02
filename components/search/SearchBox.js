import { View, Image, Text } from 'react-native';
import searchIcon from '../../assets/search-icon.png';
import { searchBoxStyles } from '../../styles/searchStyles/searchBoxStyles';

export default function SearchBox(){
    return(
        <View style = {searchBoxStyles.searchBoxContainer}>
            <IconAndSearch/>
        </View>
    )
}

function IconAndSearch(){
    return(
        <View style = {searchBoxStyles.searchBoxIconAndSearchContainer}>
            <Image source = {searchIcon}/>
            <Text style = {searchBoxStyles.searchBoxText}>
                Search
            </Text>
        </View>

    )
}