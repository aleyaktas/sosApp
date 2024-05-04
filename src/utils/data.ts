interface ICategory {
  id: number;
  title: string;
  mainCategory: string;
  description: string;
  image: any;
}

export const Categories: ICategory[] = [
  {
    id: 1,
    title: 'Zamanlar',
    mainCategory: 'Tenses',
    description: 'Zaman kavramları hakkında bilgiler.',
    image: require('../assets/icons/tenses.png'),
  },
  {
    id: 2,
    title: 'Sorular',
    mainCategory: 'Questions',
    description: 'Soru cümleleri ve nasıl oluşturuldukları.',
    image: require('../assets/icons/questions.png'),
  },
  {
    id: 3,
    title: 'Zamirler',
    mainCategory: 'Pronouns',
    description: 'Zamirlerin kullanımı ve çeşitleri.',
    image: require('../assets/icons/pronoun.png'),
  },
  {
    id: 4,
    title: 'There is / There are',
    mainCategory: 'ThereIsThereAre',
    description: 'There is ve there are yapıları.',
    image: require('../assets/icons/thereis.png'),
  },
  {
    id: 5,
    title: 'A, An, The',
    mainCategory: 'Articles',
    description: 'Belirli ve belirsiz tanımlıkların kullanımı.',
    image: require('../assets/icons/a_an.png'),
  },
  // {
  //   id: 6,
  //   title: 'This, That, These, Those',
  //   description: 'İşaret zamirlerinin kullanımı.',
  //   image: require('./images/demonstratives.jpg'),
  // },
  {
    id: 7,
    title: 'Prepositions',
    mainCategory: 'Prepositions',
    description: 'Edatların kullanımı ve çeşitleri.',
    image: require('../assets/icons/prepositions.png'),
  },
  {
    id: 8,
    title: "'s vs of",
    mainCategory: 'SvsOf',
    description: 'İyelik ekleri ve of kullanımı arasındaki farklar.',
    image: require('../assets/icons/s_vs_of.png'),
  },
  {
    id: 9,
    title: 'Comparative & Superlatives',
    mainCategory: 'Comparatives',
    description: 'Karşılaştırmalı ve üstünlük derecesi.',
    image: require('../assets/icons/comparatives.png'),
  },
  {
    id: 10,
    title: 'Have / Has',
    mainCategory: 'HaveHas',
    description: 'Have ve has fiillerinin kullanımı.',
    image: require('../assets/icons/have_has.png'),
  },
  {
    id: 11,
    title: 'Exciting / Excited',
    mainCategory: 'ExcitingExcited',
    description:
      'Exciting ve excited kelimelerinin kullanımı arasındaki farklar.',
    image: require('../assets/icons/excited.png'),
  },
  {
    id: 12,
    title: 'Emirler',
    mainCategory: 'Imperatives',
    description: 'Emir cümleleri oluşturma.',
    image: require('../assets/icons/command.png'),
  },
  {
    id: 13,
    title: 'Lets / Shall',
    mainCategory: 'LetsShall',
    description: 'Lets ve shall fiillerinin kullanımı.',
    image: require('../assets/icons/lets.png'),
  },
  {
    id: 14,
    title: 'Sıfatlar ve Zarflar',
    mainCategory: 'AdjectivesAdverbs',
    description: 'Sıfat ve zarfların kullanımı ve çeşitleri.',
    image: require('../assets/icons/adjective.png'),
  },
  {
    id: 15,
    title: 'Many, Much, Some, Any, A lot of',
    mainCategory: 'Quantifiers',
    description: 'Çokluk belirten kelimelerin kullanımı.',
    image: require('../assets/icons/quantifiers.png'),
  },
  {
    id: 16,
    title: 'Belgisiz Zamirler',
    mainCategory: 'IndefinitePronouns',
    description: 'Belgisiz zamirlerin kullanımı.',
    image: require('../assets/icons/indefinite.png'),
  },
  {
    id: 17,
    title: 'Modals',
    mainCategory: 'Modals',
    description: 'Modal yardımcı fiillerin kullanımı.',
    image: require('../assets/icons/modalverbs.png'),
  },
  {
    id: 18,
    title: 'Gerund & Infinitive',
    mainCategory: 'GerundInfinitive',
    description: 'Fiil çekimleri ve kullanımı.',
    image: require('../assets/icons/gerund.png'),
  },
  {
    id: 19,
    title: 'Passive',
    mainCategory: 'Passive',
    description: 'Edilgen yapıların kullanımı.',
    image: require('../assets/icons/passive_voice.png'),
  },
  {
    id: 20,
    title: 'Şahsiyetsiz "It"',
    mainCategory: 'ImpersonalIt',
    description:
      'İnsansı olmayan nesneleri işaret etmek için kullanılan it kelimesi.',
    image: require('../assets/icons/impersonal.png'),
  },
  {
    id: 21,
    title: 'Çiçek "To"',
    mainCategory: 'FlowerTo',
    description: 'İngilizcede yaygın olarak kullanılan "to" bağlaçları.',
    image: require('../assets/icons/flower.png'),
  },
  {
    id: 22,
    title: 'RC (Relative Clause)',
    mainCategory: 'RelativeClause',
    description: 'Sıfat cümleciklerinin kullanımı ve yapısı.',
    image: require('../assets/icons/relative_clause.png'),
  },
  {
    id: 23,
    title: 'NC (Noun Clause)',
    mainCategory: 'NounClause',
    description: 'İsim cümleciklerinin kullanımı ve yapısı.',
    image: require('../assets/icons/noun_clause.png'),
  },
  {
    id: 24,
    title: 'Bağlaçlar-1G',
    mainCategory: 'Conjunctions1G',
    description: '1G Bağlaçların kullanımı ve çeşitleri.',
    image: require('../assets/icons/conj_1.png'),
  },
  {
    id: 25,
    title: 'Bağlaçlar-2G',
    mainCategory: 'Conjunctions2G',
    description: '2G Bağlaçların kullanımı ve çeşitleri.',
    image: require('../assets/icons/conj_2.png'),
  },
  {
    id: 26,
    title: 'Bağlaçlar-3G',
    mainCategory: 'Conjunctions3G',
    description: '3G Bağlaçların kullanımı ve çeşitleri.',
    image: require('../assets/icons/conj_3.png'),
  },
];

export interface ISubCategory {
  id: number;
  title: string;
  mainCategory: string;
  description: string;
  page: string;
  image: any;
}
export const TensesSubCategory: ISubCategory[] = [
  {
    id: 1,
    title: 'Uygulama',
    mainCategory: 'Application',
    description: 'Sos uygulaması',
    page: 'Sos',
    image: require('../assets/icons/application.png'),
  },
  {
    id: 2,
    title: 'Videolar',
    mainCategory: 'Tenses',
    description: 'Konu videoları',
    page: 'Videos',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 3,
    title: 'Notlar',
    mainCategory: 'Tenses',
    description: 'Konu notları',
    page: 'Notes',
    image: require('../assets/icons/subjects.png'),
  },
  {
    id: 4,
    title: 'Çeviri Çalışması',
    mainCategory: 'Tenses',
    description: 'Çeviri çalışmaları',
    page: 'Translation',
    image: require('../assets/icons/translation.png'),
  },
  {
    id: 5,
    title: 'Test',
    mainCategory: 'Test',
    description: 'Konu testleri',
    page: 'Sos',
    image: require('../assets/icons/exam.png'),
  },
  {
    id: 6,
    title: '4 beceri',
    mainCategory: 'FourSkills',
    description: 'Dinleme, konuşma, okuma, yazma',
    page: 'Units',
    image: require('../assets/icons/four_skills.png'),
  },
];

export const QuestionsSubCategory: ISubCategory[] = [
  {
    id: 4,
    title: 'Çeviri Çalışması',
    mainCategory: 'Questions',
    description: 'Çeviri çalışmaları',
    page: 'Translation',
    image: require('../assets/icons/translation.png'),
  },
];

export interface IUnit {
  id: number;
  title: string;
  description: string;
  page: string;
  image: any;
}

export const FourSkillsUnits: IUnit[] = [
  {
    id: 1,
    title: 'Ünite 1',
    description: 'Zamanlar ünite 1',
    page: 'FourSkills',
    image: require('../assets/icons/1.png'),
  },
  {
    id: 2,
    title: 'Ünite 2',
    description: 'Zamanlar ünite 2',
    page: 'FourSkills',
    image: require('../assets/icons/2.png'),
  },
  {
    id: 3,
    title: 'Ünite 3',
    description: 'Zamanlar ünite 3',
    page: 'FourSkills',
    image: require('../assets/icons/3.png'),
  },
  {
    id: 4,
    title: 'Ünite 4',
    description: 'Zamanlar ünite 4',
    page: 'FourSkills',
    image: require('../assets/icons/4.png'),
  },
  {
    id: 5,
    title: 'Ünite 5',
    description: 'Zamanlar ünite 5',
    page: 'FourSkills',
    image: require('../assets/icons/5.png'),
  },
];

export interface IFourSkill {
  id: number;
  title: string;
  description: string;
  page: string;
  image: any;
}

export const fourSkills: IFourSkill[] = [
  {
    id: 1,
    title: 'Dinleme',
    description: 'Dinleme becerisi',
    page: 'Sos',
    image: require('../assets/icons/listening.png'),
  },
  {
    id: 2,
    title: 'Konuşma',
    description: 'Konuşma becerisi',
    page: 'Sos',
    image: require('../assets/icons/speaking.png'),
  },
  {
    id: 3,
    title: 'Okuma',
    description: 'Okuma becerisi',
    page: 'Sos',
    image: require('../assets/icons/reading.png'),
  },
  {
    id: 4,
    title: 'Yazma',
    description: 'Yazma becerisi',
    page: 'Sos',
    image: require('../assets/icons/writing.png'),
  },
];

export interface IVideo {
  id: number;
  title: string;
  page: string;
  image: any;
}

export const TensesVideos: IVideo[] = [
  {
    id: 1,
    title: '1. Ünite',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 2,
    title: '2. Ünite',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 3,
    title: '3. Ünite',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 4,
    title: '1b',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 5,
    title: '1c',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 6,
    title: '1a',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 7,
    title: '2b',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 8,
    title: '2c',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 9,
    title: '2a',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 10,
    title: '3b',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 11,
    title: '3c',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
  {
    id: 12,
    title: '3a',
    page: 'Video',
    image: require('../assets/icons/video.png'),
  },
];
