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
