export interface IVerb {
  verb?: string;
  presentPlural: string;
  presentSingular?: string;
  pastV2?: string;
  verbIng?: string;
  pastV3?: string;
  turkishMean: string;
}

export interface IrregularVerb {
  v1: string;
  v2: string;
  v3: string;
  mean: string;
}

export interface IVerbsSentences {
  sentences: string[];
  word: string;
  mean: string;
}

export interface IThereIsAre {
  positivePlural?: string;
  negativePlural?: string;
  positiveSingular?: string;
  negativeSingular?: string;
}
