import { Input, Output } from "../types";

const sortCaseInsensitive = <T extends string>(array: T[]): T[] => {
  return [...array].sort((a, b) => {
    return a.toString().toLowerCase().localeCompare(b.toString().toLowerCase());
  });
};

const sortBands = (array: Record<"name", string>[]) => {
  return [...array].sort((a, b) => {
    return a["name"]
      .toString()
      .toLowerCase()
      .localeCompare(b["name"].toString().toLowerCase());
  });
};

const uniqueFlatArray = <T>(items: T[]): T[] => [
  ...Array.from(new Set(items.map((item) => item))),
];

export function transformData(input: Input[]): Output[] {
  const getRecordLabels = (inputData: Input[]) => {
    const recordLabels = inputData.reduce((acc: string[], recordLabel) => {
      return [
        ...acc,
        ...(recordLabel?.bands || []).reduce(
          (acc: string[], band) => [...acc, band?.recordLabel ?? ""],
          []
        ),
      ];
    }, []);

    const uniqueSortedRecordLabels = sortCaseInsensitive<string>(
      uniqueFlatArray<string>(recordLabels)
    );

    return uniqueSortedRecordLabels.map((recordLabel) => recordLabel);
  };

  const recordLabels = getRecordLabels(input);

  return recordLabels.reduce((acc: any, recordLabel) => {
    const bandList = input.reduce((acc: any, responseItem: any) => {
      const found = responseItem.bands.find(
        (band: any) => band.recordLabel === recordLabel
      )?.name;

      const festivals = input.reduce((acc: any, inputItem) => {
        const festival = (inputItem.bands || []).find(
          (band) => band.name === found
        );
        return festival && inputItem.name ? [...acc, inputItem.name] : acc;
      }, []);

      const festivalsSorted = sortCaseInsensitive<string>(festivals);

      return found
        ? [...acc, { name: found, festivals: festivalsSorted }]
        : acc;
    }, []);

    const sortedBandList = sortBands(bandList);

    return [...acc, { recordLabel, bands: sortedBandList }];
  }, []) as Output[]; // Lazy typing
}
