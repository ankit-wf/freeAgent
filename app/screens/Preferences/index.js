import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Keyboard,
  TextInput,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {appImages} from '../../config';
import {COLORS} from '../../config/color';
import RightArrowIconWhite from '@assets/appimages/RightArrowIconWhite.svg';
import LeftArrowIconWhite from '@assets/appimages/LeftArrowIconWhite.svg';
import WhiteSearchIcon from '@assets/appimages/WhiteSearchIcon.svg';
import {categories} from '../../resources/baseServices/auth';

const Preferences = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [preferenceData, setPreferenceData] = useState([]);
  const [newPreferenceData, setNewPreferenceData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const numColumns = 3;
  const setNavigationBar = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.black,
        shadowColor: 'transparent',
      },
      headerLeft: () => (
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <LeftArrowIconWhite width={'100%'} height={'100%'} />
        </TouchableOpacity>
      ),
      headerTitle: (props) => (
        <Text style={styles.headerTitleStyle}>VOS PRÉFÉRENCES</Text>
      ),
      headerRight: (props) => (
        <TouchableOpacity onPress={null}>
          <Text style={styles.headerRightStyle}>
            {selectedItem ? 'Suivant' : 'Passer'}
          </Text>
        </TouchableOpacity>
      ),
    });
  };

  useEffect(() => {
    setNavigationBar();
    categoriesList();
    // setPreferenceData([
    //   {
    //     id: 0,
    //     image: appImages.Image2,
    //   },
    //   {
    //     id: 1,
    //     image: appImages.Image6,
    //   },
    //   {
    //     id: 2,
    //     image: appImages.Image7,
    //   },
    //   {
    //     id: 3,
    //     image: appImages.Image8,
    //   },
    //   {
    //     id: 4,
    //     image: appImages.Image3,
    //   },
    //   {
    //     id: 5,
    //     image: appImages.Image6,
    //   },
    //   {
    //     id: 6,
    //     image: appImages.Image7,
    //   },
    //   {
    //     id: 7,
    //     image: appImages.Image8,
    //   },
    //   {
    //     id: 8,
    //     image: appImages.Image2,
    //   },
    //   {
    //     id: 9,
    //     image: appImages.Image3,
    //   },
    // ]);
  }, []);

  const categoriesList = useCallback(async () => {
    try {
      const data = {
        apiauth: '6e=nM$/R{sCaPWE',
        pageno: 1,
        totalrecords: 20,
      };
      const res = await categories(data);
      if (res?.data) {
        console.log('categories==>>', res.data?.data);
        setPreferenceData(res?.data?.data);
      } else {
      }
    } catch (err) {
      console.log('err===>', err);
    }
  }, []);

  const formatedata = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numbersOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numbersOfElementsLastRow !== numColumns &&
      numbersOfElementsLastRow !== 0
    ) {
      data.push({image: `blank-${numbersOfElementsLastRow}`, empty: true});
      numbersOfElementsLastRow = numbersOfElementsLastRow + 1;
    }

    return data;
  };

  const _handleSelectedItem = (index) => {
    setSelectedItem(index);
    let itemID = index;
    let NewID = '';
    NewID = getIndexForExample(newPreferenceData, itemID);

    if (NewID === -1) {
      setNewPreferenceData(newPreferenceData.concat({id: itemID}));
    } else {
      removeValueForExample(itemID);
    }
  };

  const removeValueForExample = (e) => {
    var array = [...newPreferenceData];
    var index = getIndexForExample(array, e);
    if (index !== -1) {
      array.splice(index, 1);
      setNewPreferenceData(array);
    }
  };

  function getIndexForExample(arr, id) {
    return arr.findIndex((obj) => obj.id === id);
  }

  const renderItem = ({item, index}) => {
    console.log('item==>', item);
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    var isSelected =
      getIndexForExample(newPreferenceData, index) === -1 ? true : false;
    return (
      <TouchableOpacity
        onPress={() => _handleSelectedItem(index)}
        style={[
          {
            flex: 1,
            width: '28%',
            backgroundColor: '#373737',
            margin: 8,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            aspectRatio: 1.3,
          },
          {
            borderColor: !isSelected == true ? '#FF4747' : null,
            borderWidth: 1,
          },
        ]}>
        <View>
          {/* <Image source={item.image} style={styles.itemImage} /> */}
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              padding: 5,
              textAlign: 'center',
            }}>
            {item.category_title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <SafeAreaView translucent backgroundColor="transparent" flex={1}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={{flex: 1, paddingHorizontal: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 35,
              backgroundColor: '#4A4A4A',
              borderRadius: 6,
              paddingHorizontal: 10,
            }}>
            <View style={styles.searchImageView}>
              <WhiteSearchIcon width={'100%'} height={'100%'} />
            </View>
            <TextInput
              placeholder="Trouvez les ligues"
              placeholderTextColor="#E5E5E5"
              style={styles.searchItemTextInput}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
              keyboardType="default"
              returnKeyType="done"
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
            />
          </View>
          <Text style={styles.description}>
            En choisissant vos ligues préférées, votre fil sera composé des
            articles qui vous correspndent le mieux. Vous pourrez revenir à
            cette étape plus tard.
          </Text>
          <>
            <ScrollView
              flex={1}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}>
              <View style={{marginTop: 10}}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={false}
                  numColumns={numColumns}
                  data={formatedata(preferenceData, numColumns)}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              </View>

              {selectedItem !== null && (
                <TouchableOpacity
                  onPress={() => navigation.navigate('WithoutPreferences')}
                  activeOpacity={0.8}
                  style={styles.createFreeAccountView}>
                  <Text style={styles.createFreeAccountText}>
                    CHOISIR MES ÉQUIPES PRÉFÉRÉES
                  </Text>
                  <View style={styles.rightButtonView}>
                    <RightArrowIconWhite width={'100%'} height={'100%'} />
                  </View>
                </TouchableOpacity>
              )}
            </ScrollView>
          </>
        </View>

        {selectedItem !== null && (
          <View style={{width: '100%', bottom: 0}}>
            <View
              style={{
                height: 0.5,
                width: '100%',
                backgroundColor: COLORS.white,
              }}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
                padding: 15,
              }}
              onPress={() => navigation.navigate('BottomTabNavigator')}>
              <Text
                style={{
                  fontSize: 13,
                  color: COLORS.white,
                  textAlign: 'center',
                  fontFamily: 'GlacialIndifference-Bold',
                }}>
                Lire les articles sans préférences
              </Text>
              <View style={styles.rightButtonView}>
                <RightArrowIconWhite width={'100%'} height={'100%'} />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Preferences;
