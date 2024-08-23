export const contractions = {
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

export const replaceContractions = (text: string): string => {
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

  //they're not => they are not, we're not => we are not, you're not => you are not, she's not => she is not, it's not => it is not, i'm not => i am not, he's not => he is not,
  normalizedAnswer = normalizedAnswer.replace(
    /they're not|we're not|you're not|she's not|it's not|he's not|I'm not/g,
    match => {
      return match === "they're not"
        ? 'they are not'
        : match === "we're not"
        ? 'we are not'
        : match === "you're not"
        ? 'you are not'
        : match === "she's not"
        ? 'she is not'
        : match === "it's not"
        ? 'it is not'
        : match === "he's not"
        ? 'he is not'
        : 'i am not';
    },
  );
  //they're => they are, we're => we are, you're => you are, she's => she is, it's => it is, i'm => i am, he's => he is,
  normalizedAnswer = normalizedAnswer.replace(
    /they're|we're|you're|she's|it's|he's|i'm|I'm/g,
    match => {
      return match === "they're"
        ? 'they are'
        : match === "we're"
        ? 'we are'
        : match === "you're"
        ? 'you are'
        : match === "she's"
        ? 'she is'
        : match === "he's"
        ? 'he is'
        : match === "i'm"
        ? 'i am'
        : match === "I'm"
        ? 'I am'
        : 'it is';
    },
  );

  //won't => will not, hasn't => has not, haven't => have not, hadn't => had not, wouldn't => would not, couldn't => could not, shouldn't => should not, don't => do not, doesn't => does not, didn't => did not, wasn't => was not, weren't => were not
  normalizedAnswer = normalizedAnswer.replace(
    /won't|hasn't|haven't|hadn't|wouldn't|couldn't|shouldn't|don't|doesn't|didn't|wasn't|weren't/g,
    match => {
      return match === "won't"
        ? 'will not'
        : match === "hasn't"
        ? 'has not'
        : match === "haven't"
        ? 'have not'
        : match === "hadn't"
        ? 'had not'
        : match === "wouldn't"
        ? 'would not'
        : match === "couldn't"
        ? 'could not'
        : match === "shouldn't"
        ? 'should not'
        : match === "don't"
        ? 'do not'
        : match === "doesn't"
        ? 'does not'
        : match === "didn't"
        ? 'did not'
        : match === "wasn't"
        ? 'was not'
        : 'were not';
    },
  );

  //isn't => is not, aren't => are not, won't => will not, hasn't => has not, haven't => have not, hadn't => had not, wouldn't => would not, couldn't => could not, shouldn't => should not, don't => do not, doesn't => does not, didn't => did not, wasn't => was not, weren't => were not
  normalizedAnswer = normalizedAnswer.replace(
    /isn't|aren't|won't|hasn't|haven't|hadn't|wouldn't|couldn't|shouldn't|don't|doesn't|didn't|wasn't|weren't/g,
    match => {
      return match === "isn't"
        ? 'is not'
        : match === "aren't"
        ? 'are not'
        : match === "won't"
        ? 'will not'
        : match === "hasn't"
        ? 'has not'
        : match === "haven't"
        ? 'have not'
        : match === "hadn't"
        ? 'had not'
        : match === "wouldn't"
        ? 'would not'
        : match === "couldn't"
        ? 'could not'
        : match === "shouldn't"
        ? 'should not'
        : match === "don't"
        ? 'do not'
        : match === "doesn't"
        ? 'does not'
        : match === "didn't"
        ? 'did not'
        : match === "wasn't"
        ? 'was not'
        : 'were not';
    },
  );

  //i'm not => i am not, he's not => he is not, they're not => they are not, we're not => we are not, you're not => you are not, she's not => she is not, it's not => it is not
  normalizedAnswer = normalizedAnswer.replace(
    /i'm not|he's not|they're not|we're not|you're not|she's not|it's not/g,
    match => {
      return match === "i'm not"
        ? 'i am not'
        : match === "he's not"
        ? 'he is not'
        : match === "they're not"
        ? 'they are not'
        : match === "we're not"
        ? 'we are not'
        : match === "you're not"
        ? 'you are not'
        : match === "she's not"
        ? 'she is not'
        : 'it is not';
    },
  );

  //i'm => i am, he's => he is, they're => they are, we're => we are, you're => you are, she's => she is, it's => it is
  normalizedAnswer = normalizedAnswer.replace(
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

  //i'll not => i won't, he'll not => he won't, they'll not => they won't, we'll not => we won't, you'll not => you won't, she'll not => she won't, it'll not => it won't
  normalizedAnswer = normalizedAnswer.replace(
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
  normalizedAnswer = normalizedAnswer.replace(
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

  //i've not => i have not, you've not => you have not, they've not => they have not, we've not => we have not, he's not => he has not, she's not => she has not, it's not => it has not

  normalizedAnswer = normalizedAnswer.replace(
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

  // i'd not => i had not, he'd not => he had not, they'd not => they had not, we'd not => we had not, you'd not => you had not, she'd not => she had not, it'd not => it had not
  normalizedAnswer = normalizedAnswer.replace(
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
  normalizedAnswer = normalizedAnswer.replace(
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
    // //isn't => is not, aren't => are not, won't => will not, hasn't => has not, haven't => have not, hadn't => had not, wouldn't => would not, couldn't => could not, shouldn't => should not, don't => do not, doesn't => does not, didn't => did not, wasn't => was not, weren't => were not
    normalizedInputWithContractions = normalizedInputWithContractions.replace(
      /isn't|aren't|won't|hasn't|haven't|hadn't|wouldn't|couldn't|shouldn't|don't|doesn't|didn't|wasn't|weren't/g,
      match => {
        return match === "isn't"
          ? 'is not'
          : match === "aren't"
          ? 'are not'
          : match === "won't"
          ? 'will not'
          : match === "hasn't"
          ? 'has not'
          : match === "haven't"
          ? 'have not'
          : match === "hadn't"
          ? 'had not'
          : match === "wouldn't"
          ? 'would not'
          : match === "couldn't"
          ? 'could not'
          : match === "shouldn't"
          ? 'should not'
          : match === "don't"
          ? 'do not'
          : match === "doesn't"
          ? 'does not'
          : match === "didn't"
          ? 'did not'
          : match === "wasn't"
          ? 'was not'
          : 'were not';
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

    // i've => i have, you've => you have, they've => they have, we've => we have, he's => he has, she's => she has, it's => it has
    normalizedInputWithContractions = normalizedInputWithContractions.replace(
      /i've|you've|they've|we've|he's|she's|it's/g,
      match => {
        return match === "i've"
          ? 'i have'
          : match === "you've"
          ? 'you have'
          : match === "they've"
          ? 'they have'
          : match === "we've"
          ? 'we have'
          : match === "he's"
          ? 'he has'
          : match === "she's"
          ? 'she has'
          : 'it has';
      },
    );

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

    //hasn't => has not, haven't => have not, hadn't => had not, wouldn't => would not, couldn't => could not, shouldn't => should not, don't => do not, doesn't => does not, didn't => did not, wasn't => was not, weren't => were not
    normalizedInputWithContractions = normalizedInputWithContractions.replace(
      /hasn't|haven't|hadn't|wouldn't|couldn't|shouldn't|don't|doesn't|didn't|wasn't|weren't/g,
      match => {
        return match === "hasn't"
          ? 'has not'
          : match === "haven't"
          ? 'have not'
          : match === "hadn't"
          ? 'had not'
          : match === "wouldn't"
          ? 'would not'
          : match === "couldn't"
          ? 'could not'
          : match === "shouldn't"
          ? 'should not'
          : match === "don't"
          ? 'do not'
          : match === "doesn't"
          ? 'does not'
          : match === "didn't"
          ? 'did not'
          : match === "wasn't"
          ? 'was not'
          : 'were not';
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

  return {
    normalizedInput,
    normalizedAnswer,
    normalizedInputWithContractions,
  };
};
