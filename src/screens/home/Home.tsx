import React from 'react';
import {View, Pressable, Text, FlatList, ScrollView} from 'react-native';
import {makeStyles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AnnouncementCard} from './Components/announcementCard/AnnouncementCard';
import {
  annoucementCardsData,
  serviceCardsData,
  shelfItems,
} from '../../utils/data';
import {SearchBar} from './Components/searchBar/SearchBar';
import {ServicesCard} from './Components/servicesCard/ServicesCard';
import {ShelfCard} from './Components/shelfCard/ShelfCard';
import {SpecialAnnouncementCard} from './Components/specialAnnouncementCard/SpecialAnnouncementCard';
import {CarrousselAdCard} from './Components/carrousselAdCard/CarrousselAdCard';

const Home = () => {
  const [toggleReceiveProducts, setToggleReceiveProducts] =
    React.useState(false);

  const styles = makeStyles();
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Text style={styles.brandText}>7-BRAND</Text>
          <Pressable onPress={() => console.log('Navigate canasta')}>
            <Icon name="shopping-bag" size={22} color={'#007A67'} />
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => setToggleReceiveProducts(!toggleReceiveProducts)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Text style={styles.productsText}>
              ¿Como quieres recibir tus productos?
            </Text>
            <Icon
              name={
                toggleReceiveProducts
                  ? 'keyboard-arrow-up'
                  : 'keyboard-arrow-down'
              }
              size={22}
              color={'#7F8E99'}
            />
          </Pressable>
        </View>
        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>
        <View>
          <FlatList
            data={annoucementCardsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View key={index}>
                <AnnouncementCard text={item.text} image={item.image} />
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View style={{marginHorizontal: 5}} />
            )}
          />
        </View>
        <View style={styles.serviceCardsContainer}>
          {serviceCardsData.map((item, index) => (
            <View style={{margin: 3}} key={index}>
              <ServicesCard
                text={item.text}
                image={item.image}
                iconName={item.iconName}
              />
            </View>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginBottom: 3,
          }}>
          <Text style={styles.productsText}>Categoría shelf</Text>
          <Pressable onPress={() => 'ver todo'}>
            <Text style={styles.decoratedText}>Ver todo</Text>
          </Pressable>
        </View>
        <View style={{marginLeft: 5}}>
          <FlatList
            data={shelfItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <ShelfCard
                key={index}
                lastPrice={item.lastPrice}
                image={item.image}
                actualPrice={item.actualPrice}
                description={item.description}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={{marginHorizontal: 5}} />
            )}
          />
        </View>
        <View style={{marginLeft: 5, marginTop: 10}}>
          <Text style={styles.productsText}>Anuncio especial estático</Text>
          <SpecialAnnouncementCard />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginBottom: 3,
            marginTop: 20,
          }}>
          <Text style={styles.productsText}>Categoría shelf</Text>
          <Pressable onPress={() => 'ver todo'}>
            <Text style={styles.decoratedText}>Ver todo</Text>
          </Pressable>
        </View>
        <View style={{marginLeft: 5}}>
          <FlatList
            data={shelfItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <ShelfCard
                key={index}
                lastPrice={item.lastPrice}
                image={item.image}
                actualPrice={item.actualPrice}
                description={item.description}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={{marginHorizontal: 5}} />
            )}
          />
        </View>
        <View style={{marginLeft: 5, marginTop: 10}}>
          <Text style={styles.productsText}>Anuncios en carrousel</Text>
          <FlatList
            data={annoucementCardsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <CarrousselAdCard
                key={index}
                image={item.image}
                text={item.text}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={{marginHorizontal: 5}} />
            )}
          />
        </View>
        <View style={{marginVertical: 10}} />
      </ScrollView>
    </View>
  );
};

export default Home;
