export function questionsTranslateArray(data: any) {
  const translatedData: any = {};
  for (const item of data) {
    for (const key in item) {
      if (key.endsWith('-meaning')) {
        const questionKey = key.replace('-meaning', '');
        const answerType = questionKey.includes('-')
          ? questionKey.split('-')[1]
          : undefined;

        if (!translatedData[questionKey]) {
          translatedData[questionKey] = [];
        }

        translatedData[questionKey].push({
          meaning: item[key],
          sentence: item[questionKey],
          possibleAnswer: item[`${questionKey}-possible-answer`],
        });
      }
    }
  }
  return translatedData;
}

export function translateArray(data: any) {
  const translatedData: any = {};
  for (const item of data) {
    for (const key in item) {
      if (key.endsWith('-meaning')) continue;
      if (!translatedData[key]) {
        translatedData[key] = [];
      }
      translatedData[key].push({
        sentence: item[key],
        meaning: item[`${key}-meaning`],
      });
    }
  }
  return translatedData;
}

type OutputObject = {
  RC: {ing: string; tr: string}[];
  NC: {ing: string; tr: string}[];
};

type InputArray = {
  RC_ing?: string;
  RC_tr?: string;
  NC_ing?: string;
  NC_tr?: string;
}[];

export const translateRcNc = (inputArray: InputArray): OutputObject => {
  const output: OutputObject = {RC: [], NC: []};

  inputArray.forEach(item => {
    if (item.RC_ing && item.RC_tr) {
      output.RC.push({ing: item.RC_ing, tr: item.RC_tr});
    }

    if (item.NC_ing && item.NC_tr) {
      output.NC.push({ing: item.NC_ing, tr: item.NC_tr});
    }
  });

  return output;
};

type TranslationEntry = {
  'Passive ing'?: string;
  'Passive TR'?: string;
  'active ing'?: string;
  'active tr'?: string;
};

type TranslatedResult = {
  Passive: Array<{ing: string; tr: string}>;
  Active: Array<{ing: string; tr: string}>;
};

export const translateActivePassive = (
  input: TranslationEntry[],
): TranslatedResult => {
  const result: TranslatedResult = {
    Passive: [],
    Active: [],
  };

  input.forEach(item => {
    if (item['Passive ing'] && item['Passive TR']) {
      result.Passive.push({
        ing: item['Passive ing'],
        tr: item['Passive TR'],
      });
    }
    if (item['active ing'] && item['active tr']) {
      result.Active.push({
        ing: item['active ing'],
        tr: item['active tr'],
      });
    }
  });

  return result;
};

export const translateConjuctions = (data: any) => {
  return data.reduce((acc: any, item: any) => {
    Object.keys(item).forEach(key => {
      const [category, lang] = key.split('_');

      if (!acc[category]) {
        acc[category] = [];
      }

      let lastObj =
        acc[category].length > 0
          ? acc[category][acc[category].length - 1]
          : null;

      if (!lastObj || lastObj[lang]) {
        lastObj = {ing: '', tr: ''};
        acc[category].push(lastObj);
      }

      lastObj[lang] = item[key];
    });
    return acc;
  }, {});
};

type AAnThe = {
  A_An_ing?: string;
  A_An_tr?: string;
  The_ing?: string;
  The_tr?: string;
  All_ing?: string;
  All_tr?: string;
}[];

type AAnTheResult = {
  AAn: Array<{ing: string; tr: string}>;
  The: Array<{ing: string; tr: string}>;
  All: Array<{ing: string; tr: string}>;
};

export const translateAAnThe = (data: AAnThe): AAnTheResult => {
  const result: AAnTheResult = {
    AAn: [],
    The: [],
    All: [],
  };

  data.forEach(item => {
    if (item.A_An_ing && item.A_An_tr) {
      result.AAn.push({ing: item.A_An_ing, tr: item.A_An_tr});
    }
    if (item.The_ing && item.The_tr) {
      result.The.push({ing: item.The_ing, tr: item.The_tr});
    }
    if (item.All_ing && item.All_tr) {
      result.All.push({ing: item.All_ing, tr: item.All_tr});
    }
  });

  return result;
};

type AdjectivesAdverbs = {
  Adjectives_ing?: string;
  Adjectives_tr?: string;
  Adverbs_ing?: string;
  Adverbs_tr?: string;
  AdjectivesAdverbs_ing?: string;
  AdjectivesAdverbs_tr?: string;
}[];

type AdjectivesAdverbsResult = {
  Adjectives: Array<{ing: string; tr: string}>;
  Adverbs: Array<{ing: string; tr: string}>;
  AdjectivesAdverbs: Array<{ing: string; tr: string}>;
};

export const translateAdjectivesAdverbs = (
  data: AdjectivesAdverbs,
): AdjectivesAdverbsResult => {
  const result: AdjectivesAdverbsResult = {
    Adjectives: [],
    Adverbs: [],
    AdjectivesAdverbs: [],
  };

  data.forEach(item => {
    if (item.Adjectives_ing && item.Adjectives_tr) {
      result.Adjectives.push({
        ing: item.Adjectives_ing,
        tr: item.Adjectives_tr,
      });
    }
    if (item.Adverbs_ing && item.Adverbs_tr) {
      result.Adverbs.push({ing: item.Adverbs_ing, tr: item.Adverbs_tr});
    }
    if (item.AdjectivesAdverbs_ing && item.AdjectivesAdverbs_tr) {
      result.AdjectivesAdverbs.push({
        ing: item.AdjectivesAdverbs_ing,
        tr: item.AdjectivesAdverbs_tr,
      });
    }
  });

  return result;
};

type IndefinitePronouns = {
  S_pronouns_ing?: string;
  S_pronouns_tr?: string;
  E_pronouns_ing?: string;
  E_pronouns_tr?: string;
  A_pronouns_ing?: string;
  A_pronouns_tr?: string;
  N_pronouns_ing?: string;
  N_pronouns_tr?: string;
}[];

type IndefinitePronounsResult = {
  SPronouns: Array<{ing: string; tr: string}>;
  EPronouns: Array<{ing: string; tr: string}>;
  APronouns: Array<{ing: string; tr: string}>;
  NPronouns: Array<{ing: string; tr: string}>;
};

export const translateIndefinitePronouns = (
  data: IndefinitePronouns,
): IndefinitePronounsResult => {
  const result: IndefinitePronounsResult = {
    SPronouns: [],
    EPronouns: [],
    APronouns: [],
    NPronouns: [],
  };

  data.forEach(item => {
    if (item.S_pronouns_ing && item.S_pronouns_tr) {
      result.SPronouns.push({
        ing: item.S_pronouns_ing,
        tr: item.S_pronouns_tr,
      });
    }
    if (item.E_pronouns_ing && item.E_pronouns_tr) {
      result.EPronouns.push({
        ing: item.E_pronouns_ing,
        tr: item.E_pronouns_tr,
      });
    }
    if (item.A_pronouns_ing && item.A_pronouns_tr) {
      result.APronouns.push({
        ing: item.A_pronouns_ing,
        tr: item.A_pronouns_tr,
      });
    }
    if (item.N_pronouns_ing && item.N_pronouns_tr) {
      result.NPronouns.push({
        ing: item.N_pronouns_ing,
        tr: item.N_pronouns_tr,
      });
    }
  });

  return result;
};

type Imperatives = {
  Emirler_ing?: string;
  Emirler_tr?: string;
}[];

type ImperativesResult = {
  Imperatives: Array<{ing: string; tr: string}>;
};

export const translateImperatives = (data: Imperatives): ImperativesResult => {
  const result: ImperativesResult = {
    Imperatives: [],
  };

  data.forEach(item => {
    if (item.Emirler_ing && item.Emirler_tr) {
      result.Imperatives.push({
        ing: item.Emirler_ing,
        tr: item.Emirler_tr,
      });
    }
  });

  return result;
};

type ExcitingExcited = {
  Exciting_ing?: string;
  Exciting_tr?: string;
  Excited_ing?: string;
  Excited_tr?: string;
}[];

type ExcitingExcitedResult = {
  Exciting: Array<{ing: string; tr: string}>;
  Excited: Array<{ing: string; tr: string}>;
};

export const translateExcitingExcited = (
  data: ExcitingExcited,
): ExcitingExcitedResult => {
  const result: ExcitingExcitedResult = {
    Exciting: [],
    Excited: [],
  };

  data.forEach(item => {
    if (item.Exciting_ing && item.Exciting_tr) {
      result.Exciting.push({
        ing: item.Exciting_ing,
        tr: item.Exciting_tr,
      });
    }
    if (item.Excited_ing && item.Excited_tr) {
      result.Excited.push({
        ing: item.Excited_ing,
        tr: item.Excited_tr,
      });
    }
  });

  return result;
};
