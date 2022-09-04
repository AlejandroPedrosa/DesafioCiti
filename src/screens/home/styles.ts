import {StyleSheet} from 'react-native';

export const makeStyles = () => {
    return StyleSheet.create({
        mainContainer: {
            backgroundColor:'#F7F9FA',
            flex:1,
        },
        topContainer: {
            flexDirection:'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical:10,
        },
        brandText: {
            fontSize: 18,
            fontWeight: '700',
            color:'#007A67',
        },
        productsText: {
            fontSize: 16,
            fontWeight: '700',
            color:'#253846'
        },
        searchBarContainer: {
            marginVertical: 10,
             alignItems: 'center',
        },
        serviceCardsContainer: {
            marginLeft: 5,
          marginVertical: 15,
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          flexDirection: 'row',
        },
        decoratedText:{
            textDecorationLine:'underline',
            color:'#007a67'
        }
    })
}