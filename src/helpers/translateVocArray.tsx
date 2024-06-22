type UnitData = {
  [key: string]: string;
};

interface Unit {
  unitNumber: number;
  words: {word: string; mean: string}[];
}

export function translateVocArray(jsonData: UnitData[]): Unit[] {
  let units: Unit[] = [];

  for (let unitNumber = 1; unitNumber <= 30; unitNumber++) {
    let unit: Unit = {
      unitNumber: unitNumber,
      words: [],
    };

    for (let i = 0; i < jsonData.length; i++) {
      let wordProp = `Unit${unitNumber}Word` as keyof UnitData;
      let meanProp = `Unit${unitNumber}Mean` as keyof UnitData;

      if (
        jsonData[i][wordProp] !== undefined &&
        jsonData[i][meanProp] !== undefined
      ) {
        unit.words.push({
          word: jsonData[i][wordProp],
          mean: jsonData[i][meanProp],
        });
      }
    }

    units.push(unit);
  }

  return units;
}
