const sortCaseInsensitive = (array, field) => {
  return array.sort((a, b) => {
    const A = !field ? a : a[field];
    const B = !field ? b : b[field];
    return A.toLowerCase().localeCompare(B.toLowerCase());
  });
};

const uniqueFlatArray = (items) => [
  ...Array.from(new Set(items.map((item) => item))),
];

export function getOutput(input) {
  const getSortedRecordLabels = (inputData) => {
    const recordLabels = inputData.reduce((acc, recordLabel) => {
      return [
        ...acc,
        ...recordLabel.bands.reduce(
          (acc, band) => [...acc, band.recordLabel],
          []
        ),
      ];
    }, []);

    const uniqueSortedRecordLabels = sortCaseInsensitive(
      uniqueFlatArray(recordLabels)
    );

    return uniqueSortedRecordLabels.map((recordLabel) => recordLabel);
  };

  return getSortedRecordLabels(input).reduce((acc, recordLabel) => {
    const bandList = input.reduce((acc, responseItem) => {
      const found = responseItem.bands.find(
        (band) => band.recordLabel === recordLabel
      )?.name;

      const festivals = input.reduce((acc, inputItem) => {
        const festival = inputItem.bands.find((band) => band.name === found);
        return festival && inputItem.name ? [...acc, inputItem.name] : acc;
      }, []);

      const festivalsSorted = sortCaseInsensitive(festivals);

      return found
        ? [...acc, { name: found, festivals: festivalsSorted }]
        : acc;
    }, []);

    const sortedBandList = sortCaseInsensitive(bandList, "name");

    return [...acc, { recordLabel, bands: sortedBandList }];
  }, []);
}
