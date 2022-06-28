import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import styles from './styles';
import {appImages} from '../../config';
import {COLORS} from '../../config/color';
import LeftArrowIconWhite from '@assets/appimages/LeftArrowIconWhite.svg';
import WhiteSearchIcon from '@assets/appimages/WhiteSearchIcon.svg';

const WithoutPreferences = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [preferenceData, setPreferenceData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(0);
  const [companyNameList, setCompanyNameList] = useState([]);
  const [selectedCompanyName, setSelectedCompanyName] = useState(0);
  const [newPreferenceData, setNewPreferenceData] = useState([]);
  const numColumns = 3;
  const setNavigationBar = () => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: COLORS.black,
        shadowColor: 'transparent',
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
         <LeftArrowIconWhite width={'100%'} height={'100%'} />
        </TouchableOpacity>
      ),
      headerTitle: (props) => (
        <Text style={styles.headerTitleStyle}>VOS PRÉFÉRENCES</Text>
      ),
      headerRight: (props) => (
        <TouchableOpacity>
          <Text style={styles.headerRightStyle}>Terminer</Text>
        </TouchableOpacity>
      ),
    });
  };

  useEffect(() => {
    setNavigationBar();
    setPreferenceData([
      {
        id: 0,
        image: appImages.Image2,
      },
      {
        id: 1,
        image: appImages.Image6,
      },
      {
        id: 2,
        image: appImages.Image7,
      },
      {
        id: 3,
        image: appImages.Image8,
      },
      {
        id: 4,
        image: appImages.Image2,
      },
      {
        id: 5,
        image: appImages.Image6,
      },
      {
        id: 6,
        image: appImages.Image7,
      },
      {
        id: 7,
        image: appImages.Image8,
      },
      {
        id: 8,
        image: appImages.Image3,
      },
    ]);
    setCompanyNameList([
      {
        id: 0,
        name: 'NBA',
      },
      {
        id: 1,
        name: 'NFL',
      },
      {
        id: 2,
        name: 'NHL',
      },
      {
        id: 3,
        name: 'MLN',
      },
      {
        id: 4,
        name: 'NCAA',
      },
      {
        id: 5,
        name: 'MLS',
      },
      {
        id: 6,
        name: 'NNBA',
      },
    ]);
  }, []);

  const renderCompanyNameItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.renderCompanyNameMainView}
        onPress={() => _handleSelectedCompanyName(index)}>
        <Text
          style={[
            styles.companyNameText,
            {
              color: selectedCompanyName === index ? 'red' : COLORS.white,
              // textDecorationLine: selectedCompanyName === index && 'underline',
            },
          ]}>
          {item.name}
        </Text>
        {selectedCompanyName === index && (
          <View style={{height: 1, width: '100%', backgroundColor: 'red'}} />
        )}
      </TouchableOpacity>
    );
  };

  const _handleSelectedCompanyName = (selected) => {
    setSelectedCompanyName(selected);
  };

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
    // setSelectedItem(index);
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
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    var isSelected =
    getIndexForExample(newPreferenceData, item?.id) === -1 ? true : false;
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
        <View style={{height: 50, width: 50}}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <SafeAreaView translucent backgroundColor="transparent" flex={1}>
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
              <WhiteSearchIcon width={'100%'} height={'100%'}/>
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
          <View style={{marginTop: 15}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
              data={companyNameList}
              renderItem={renderCompanyNameItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={{marginTop: 10, flex: 1}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              scrollEnabled={true}
              numColumns={numColumns}
              data={formatedata(preferenceData, numColumns)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <View style={{bottom: 0}}>
          {/* <View /> */}
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: COLORS.white,
            }}
          />
          <View style={{backgroundColor: 'black'}}>
            <TouchableOpacity
              style={styles.terminarView}
              onPress={() => navigation.navigate('BottomTabNavigator')}>
              <Text style={styles.terminarText}>Terminer</Text>
              <View style={styles.rightIconImage}>
                <Image source={appImages.Right} style={styles.rightImage} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#636363'}}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.white,
                  fontFamily: 'GlacialIndifference-Bold',
                }}>
                Vos équipes préférées
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Preferences')}>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.white,
                    fontFamily: 'GlacialIndifference-Bold',
                  }}>
                  MODIFIER
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <View
                style={{
                  height: 35,
                  aspectRatio: 1,
                  borderRadius: 5,
                  backgroundColor: '#373737',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 10,
                  // bottom:15,
                }}>
                <View style={{height: 20, aspectRatio: 1}}>
                  <Image source={appImages.Image2} style={styles.image} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WithoutPreferences;
