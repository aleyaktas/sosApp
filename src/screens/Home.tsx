import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Icon from '../themes/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../navigation/types';

const Home = () => {
  const topics = [
    {
      id: 1,
      title: 'Zamanlar',
      description: 'Zaman kavramları hakkında bilgiler.',
      image: require('../assets/icons/tenses.png'),
    },
    {
      id: 2,
      title: 'Zamirler',
      description: 'Zamirlerin kullanımı ve çeşitleri.',
      image: require('../assets/icons/pronoun.png'),
    },
    {
      id: 3,
      title: 'Sorular',
      description: 'Soru cümleleri ve nasıl oluşturuldukları.',
      image: require('../assets/icons/questions.png'),
    },
    {
      id: 4,
      title: 'There is / There are',
      description: 'There is ve there are yapıları.',
      image: require('../assets/icons/thereis.png'),
    },
    {
      id: 5,
      title: 'A, An, The',
      description: 'Belirli ve belirsiz tanımlıkların kullanımı.',
      image: require('../assets/icons/a_an.png'),
    },
    // {
    //   id: 6,
    //   title: 'This, That, These, Those',
    //   description: 'İşaret zamirlerinin kullanımı.',
    //   image: require('./images/demonstratives.jpg')
    // },
    {
      id: 7,
      title: 'Prepositions',
      description: 'Edatların kullanımı ve çeşitleri.',
      image: require('../assets/icons/prepositions.png'),
    },
    {
      id: 8,
      title: "'s vs of",
      description: 'İyelik ekleri ve of kullanımı arasındaki farklar.',
      image: require('../assets/icons/s_vs_of.png'),
    },
    {
      id: 9,
      title: 'Comparative & Superlatives',
      description: 'Karşılaştırmalı ve üstünlük derecesi.',
      image: require('../assets/icons/comparatives.png'),
    },
    {
      id: 10,
      title: 'Have / Has',
      description: 'Have ve has fiillerinin kullanımı.',
      image: require('../assets/icons/have_has.png'),
    },
    {
      id: 11,
      title: 'Exciting / Excited',
      description:
        'Exciting ve excited kelimelerinin kullanımı arasındaki farklar.',
      image: require('../assets/icons/excited.png'),
    },
    {
      id: 12,
      title: 'Emirler',
      description: 'Emir cümleleri oluşturma.',
      image: require('../assets/icons/command.png'),
    },
    {
      id: 13,
      title: 'Lets / Shall',
      description: 'Lets ve shall fiillerinin kullanımı.',
      image: require('../assets/icons/lets.png'),
    },
    {
      id: 14,
      title: 'Sıfatlar ve Zarflar',
      description: 'Sıfat ve zarfların kullanımı ve çeşitleri.',
      image: require('../assets/icons/adjective.png'),
    },
    {
      id: 15,
      title: 'Many, Much, Some, Any, A lot of',
      description: 'Çokluk belirten kelimelerin kullanımı.',
      image: require('../assets/icons/quantifiers.png'),
    },
    {
      id: 16,
      title: 'Belgisiz Zamirler',
      description: 'Belgisiz zamirlerin kullanımı.',
      image: require('../assets/icons/indefinite.png'),
    },
    {
      id: 17,
      title: 'Modals',
      description: 'Modal yardımcı fiillerin kullanımı.',
      image: require('../assets/icons/modalverbs.jpeg'),
    },
    {
      id: 18,
      title: 'Gerund & Infinitive',
      description: 'Fiil çekimleri ve kullanımı.',
      image: require('../assets/icons/gerund.png'),
    },
    {
      id: 19,
      title: 'Passive',
      description: 'Edilgen yapıların kullanımı.',
      image: require('../assets/icons/passive_voice.png'),
    },
    {
      id: 20,
      title: 'Şahsiyetsiz "It"',
      description:
        'İnsansı olmayan nesneleri işaret etmek için kullanılan it kelimesi.',
      image: require('../assets/icons/impersonal.png'),
    },
    {
      id: 21,
      title: 'Çiçek "To"',
      description: 'İngilizcede yaygın olarak kullanılan "to" bağlaçları.',
      image: require('../assets/icons/flower.png'),
    },
    {
      id: 22,
      title: 'RC (Relative Clause)',
      description: 'Sıfat cümleciklerinin kullanımı ve yapısı.',
      image: require('../assets/icons/relative_clause.png'),
    },
    {
      id: 23,
      title: 'NC (Noun Clause)',
      description: 'İsim cümleciklerinin kullanımı ve yapısı.',
      image: require('../assets/icons/noun_clause.png'),
    },
    // {
    //   id: 24,
    //   title: '1G Bağlaçlar',
    //   description: 'Birinci grup bağlaçlar ve kullanımları.',
    //   image: require('../assets/icons/conjunctions1.png')
    // },
    // {
    //   id: 25,
    //   title: '2G Bağlaçlar',
    //   description: 'İkinci grup bağlaçlar ve kullanımları.',
    //   image: require('./images/conjunctions2.jpg')
    // },
    // {
    //   id: 26,
    //   title: '3G Bağlaçlar',
    //   description: 'Üçüncü grup bağlaçlar ve kullanımları.',
    //   image: require('./images/conjunctions3.jpg')
    // }
  ];

  const navigation = useNavigation<ScreenProp>();
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: 'white',
        }}>
        {topics.map(item => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Sos')}
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'space-between',

              gap: 14,
              padding: 16,

              backgroundColor: 'white',
              // borderBottomWidth: 1,
              // borderBottomColor: '#e0e0e0',
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
            }}>
            <Image
              source={item.image}
              style={{width: 60, height: 60}} // Set width and height as per your requirement
            />
            <View
              style={{
                flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
