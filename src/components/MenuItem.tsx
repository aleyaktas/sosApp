import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SubCategory} from '../screens/SubCategory';
import {ScreenProp} from '../navigation/types';
import {useNavigation} from '@react-navigation/native';

const MenuItem = ({
  item,
  onPress,
}: {
  item: SubCategory;
  onPress?: () => void;
}) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={item.disabled ? true : false}
      onPress={() => {
        onPress && onPress();
        if (item.page) {
          if (item.mainCategory && item.stack) {
            return navigation.navigate(item.stack, {
              screen: item.page as any,
              params: {
                title: item.mainCategory,
                item: item,
              },
            });
          } else if (item.mainCategory) {
            return navigation.navigate(item.page as any, {
              title: item.mainCategory,
              item: item,
            });
          }
          navigation.navigate(item.page as never);
        }
      }}
      key={item.id}
      style={[
        styles.button,
        {
          backgroundColor: !item.disabled ? 'white' : '#f5f5f5',
        },
      ]}>
      <Image source={item.image} style={{width: 60, height: 60}} />
      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 4,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
    flex: 1,
  },
});

export default MenuItem;
