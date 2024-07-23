type SentenceCategory =
  | 'positivePlural'
  | 'positiveSingular'
  | 'negativePlural'
  | 'negativeSingular';

interface SentenceObject {
  positivePlural?: string;
  positiveSingular?: string;
  negativePlural?: string;
  negativeSingular?: string;
}

interface OrganizedData {
  presentPlural: {sentence: string}[];
  presentSingular: {sentence: string}[];
  absentPlural: {sentence: string}[];
  absentSingular: {sentence: string}[];
}

export function organizeSentences(array: SentenceObject[]): OrganizedData {
  const result: OrganizedData = {
    presentPlural: [],
    presentSingular: [],
    absentPlural: [],
    absentSingular: [],
  };

  array.forEach(obj => {
    if (obj.positivePlural) {
      result.presentPlural.push({sentence: obj.positivePlural});
    }
    if (obj.positiveSingular) {
      result.presentSingular.push({sentence: obj.positiveSingular});
    }
    if (obj.negativePlural) {
      result.absentPlural.push({sentence: obj.negativePlural});
    }
    if (obj.negativeSingular) {
      result.absentSingular.push({sentence: obj.negativeSingular});
    }
  });

  return result;
}
