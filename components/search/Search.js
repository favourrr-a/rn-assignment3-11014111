import { View } from 'react-native';
import SearchBox from './SearchBox';
import SearchFilterButton from './SearchFilterButton';
import { searchStyles } from '../../styles/searchStyles/searchStyles';

export default function Search(){
    return(
        <View style = {searchStyles.searchContainer}>
            <SearchBox/>
            <SearchFilterButton/>
        </View>
    )
}