export const contractions = {
  cannot: "can't",
  'could not': "couldn't",
  'must not': "mustn't",
  'should not': "shouldn't",
  'ought not to': "oughtn't to",
  'had better not': "hadn't better",
  'may not': "mayn't",
  'do not have to': "don't have to",
  'does not have to': "doesn't have to",
  'did not have to': "didn't have to",
  'is not able to': "isn't able to",
  'are not able to': "aren't able to",
  'was not able to': "wasn't able to",
  'were not able to': "weren't able to",
  'is not likely to': "isn't likely to",
  'are not likely to': "aren't likely to",
  'was not likely to': "wasn't likely to",
  'were not likely to': "weren't likely to",
};

export const replaceContractions = (text: string): string => {
  Object.entries(contractions).forEach(([key, value]) => {
    text = text.replace(new RegExp(key, 'g'), value);
  });
  return text;
};

export const checkAbbreviation = ({
  input,
  answer,
  selectedCell,
}: {
  input: string[];
  answer: string;
  selectedCell: string;
}) => {
  let normalizedInput = input
    .join(' ')
    .toLowerCase()
    .replace(/[?.,]/g, '')
    .replace(/’/g, "'");

  let normalizedAnswer = answer
    .toLowerCase()
    .replace(/[?.,]/g, '')
    .replace(/’/g, "'");
  let normalizedInputWithContractions = replaceContractions(normalizedInput);

  // Olumsuz yapıların açılımları
  normalizedAnswer = normalizedAnswer.replace(
    /can't|couldn't|mustn't|shouldn't|oughtn't to|hadn't better|mayn't|don't have to|doesn't have to|didn't have to|isn't able to|aren't able to|wasn't able to|weren't able to|isn't likely to|aren't likely to|wasn't likely to|weren't likely to/g,
    match => {
      return match === "can't"
        ? 'cannot'
        : match === "couldn't"
        ? 'could not'
        : match === "mustn't"
        ? 'must not'
        : match === "shouldn't"
        ? 'should not'
        : match === "oughtn't to"
        ? 'ought not to'
        : match === "hadn't better"
        ? 'had better not'
        : match === "mayn't"
        ? 'may not'
        : match === "don't have to"
        ? 'do not have to'
        : match === "doesn't have to"
        ? 'does not have to'
        : match === "didn't have to"
        ? 'did not have to'
        : match === "isn't able to"
        ? 'is not able to'
        : match === "aren't able to"
        ? 'are not able to'
        : match === "wasn't able to"
        ? 'was not able to'
        : match === "weren't able to"
        ? 'were not able to'
        : match === "isn't likely to"
        ? 'is not likely to'
        : match === "aren't likely to"
        ? 'are not likely to'
        : match === "wasn't likely to"
        ? 'was not likely to'
        : 'were not likely to';
    },
  );
  return {
    normalizedInput,
    normalizedAnswer,
    normalizedInputWithContractions,
  };
};
