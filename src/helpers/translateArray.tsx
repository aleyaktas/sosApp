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
