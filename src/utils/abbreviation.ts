const contractions = {
  'is not': "isn't",
  'are not': "aren't",
  'will not': "won't",
  'has not': "hasn't",
  'have not': "haven't",
  'had not': "hadn't",
  'would not': "wouldn't",
  'could not': "couldn't",
  'should not': "shouldn't",
  'do not': "don't",
  'does not': "doesn't",
  'did not': "didn't",
  'was not': "wasn't",
  'were not': "weren't",
};

const replaceContractions = (text: string): string => {
  Object.entries(contractions).forEach(([key, value]) => {
    console.log('key', key);
    console.log('value', value);
    text = text.replace(new RegExp(key, 'g'), value);
  });
  return text;
};

export const checkAbbrevation = ({
  input,
  answer,
  selectedCell,
  setSelectedCell,
  customFunction,
}: {
  input: string[];
  answer: string;
  selectedCell: string;
  setSelectedCell: (value: string) => void;
  customFunction: () => void;
}) => {
  let normalizedInput = input.join(' ').toLowerCase().replace(/[?.,]/g, '');
  const normalizedAnswer = answer.toLowerCase().replace(/[?.,]/g, '');
  let normalizedInputWithContractions = replaceContractions(normalizedInput);

  // i'm => i am, i'd => i had, he's => he is, they're => they are, we're => we are, you're => you are, she's => she is, it's => it is
  if (selectedCell[1] !== '4') {
    normalizedInputWithContractions = normalizedInputWithContractions.replace(
      /i'm not|he's not|they're not|we're not|you're not|she's not|it's not/g,
      match => {
        return match === "i'm not"
          ? 'i am not'
          : match === "he's not"
          ? "he isn't"
          : match === "they're not"
          ? "they aren't"
          : match === "we're not"
          ? "we aren't"
          : match === "you're not"
          ? "you aren't"
          : match === "she's not"
          ? "she isn't"
          : "it isn't";
      },
    );
    normalizedInputWithContractions = normalizedInputWithContractions.replace(
      /i'm|he's|they're|we're|you're|she's|it's/g,
      match => {
        return match === "i'm"
          ? 'i am'
          : match === "he's"
          ? 'he is'
          : match === "they're"
          ? 'they are'
          : match === "we're"
          ? 'we are'
          : match === "you're"
          ? 'you are'
          : match === "she's"
          ? 'she is'
          : 'it is';
      },
    );
  }

  //i'll not => i won't, he'll not => he won't, they'll not => they won't, we'll not => we won't, you'll not => you won't, she'll not => she won't, it'll not => it won't
  normalizedInputWithContractions = normalizedInputWithContractions.replace(
    /i'll not|he'll not|they'll not|we'll not|you'll not|she'll not|it'll not/g,
    match => {
      return match === "i'll not"
        ? "i won't"
        : match === "he'll not"
        ? "he won't"
        : match === "they'll not"
        ? "they won't"
        : match === "we'll not"
        ? "we won't"
        : match === "you'll not"
        ? "you won't"
        : match === "she'll not"
        ? "she won't"
        : "it won't";
    },
  );

  //he'll => he will , they'll => they will, we'll => we will, you'll => you will, she'll => she will, it'll => it will
  normalizedInputWithContractions = normalizedInputWithContractions.replace(
    /i'll|he'll|they'll|we'll|you'll|she'll|it'll/g,
    match => {
      return match === "i'll"
        ? 'i will'
        : match === "he'll"
        ? 'he will'
        : match === "they'll"
        ? 'they will'
        : match === "we'll"
        ? 'we will'
        : match === "you'll"
        ? 'you will'
        : match === "she'll"
        ? 'she will'
        : 'it will';
    },
  );

  if (selectedCell[1] === '4') {
    //i've not => i have not, you've not => you have not, they've not => they have not, we've not => we have not, he's not => he has not, she's not => she has not, it's not => it has not
    normalizedInputWithContractions = normalizedInputWithContractions.replace(
      /i've not|you've not|they've not|we've not|he's not|she's not|it's not/g,
      match => {
        return match === "i've not"
          ? "i haven't"
          : match === "you've not"
          ? "you haven't"
          : match === "they've not"
          ? "they haven't"
          : match === "we've not"
          ? "we haven't"
          : match === "he's not"
          ? "he hasn't"
          : match === "she's not"
          ? "she hasn't"
          : "it hasn't";
      },
    );
  }
  // i'd not => i had not, he'd not => he had not, they'd not => they had not, we'd not => we had not, you'd not => you had not, she'd not => she had not, it'd not => it had not
  normalizedInputWithContractions = normalizedInputWithContractions.replace(
    /i'd not|he'd not|they'd not|we'd not|you'd not|she'd not|it'd not/g,
    match => {
      return match === "i'd not"
        ? "i hadn't"
        : match === "he'd not"
        ? "he hadn't"
        : match === "they'd not"
        ? "they hadn't"
        : match === "we'd not"
        ? "we hadn't"
        : match === "you'd not"
        ? "you hadn't"
        : match === "she'd not"
        ? "she hadn't"
        : "it hadn't";
    },
  );

  // i'd => i had, he'd => he had, they'd => they had, we'd => we had, you'd => you had, she'd => she had, it'd => it had
  normalizedInputWithContractions = normalizedInputWithContractions.replace(
    /i'd|he'd|they'd|we'd|you'd|she'd|it'd/g,
    match => {
      return match === "i'd"
        ? 'i had'
        : match === "he'd"
        ? 'he had'
        : match === "they'd"
        ? 'they had'
        : match === "we'd"
        ? 'we had'
        : match === "you'd"
        ? 'you had'
        : match === "she'd"
        ? 'she had'
        : 'it had';
    },
  );

  normalizedInput = normalizedInput.trim();
  normalizedInputWithContractions = normalizedInputWithContractions.trim();
  console.log('normalizedInput', normalizedInput);
  console.log('normalizedAnswer', normalizedAnswer);
  console.log(
    'normalizedInputWithContractions',
    normalizedInputWithContractions,
  );

  // if (
  //   // textInputValue.join(' ').replace('.', '').toLowerCase() ===
  //   // answer.toLowerCase().replace('.', '')
  //   normalizedAnswer === normalizedInputWithContractions
  // ) {
  //   setSnapPoints(['32%']);
  //   bottomSheetRef.current?.expand();
  //   handleVoice(answer);
  //   setIsAnswerTrue(true);
  //   setCorrectAnswers(correctAnswers + 1);
  // } else {
  //   setSnapPoints(['38%']);
  //   bottomSheetRef.current?.expand();
  //   handleVoice(answer);
  //   setIsAnswerTrue(false);
  //   setWrongAnswers(wrongAnswers + 1);
  // }
  customFunction();
  setSelectedCell('');
};
