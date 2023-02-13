import { transformData } from "./transformData";

describe("transformData", () => {
  it("should return the correct output 1", () => {
    const input = [
      {
        name: "LOL-palooza",
        bands: [
          {
            name: "Winter Primates",
            recordLabel: "",
          },
          {
            name: "Frank Jupiter",
            recordLabel: "Pacific Records",
          },
          {
            name: "Jill Black",
            recordLabel: "Fourth Woman Records",
          },
          {
            name: "Werewolf Weekday",
            recordLabel: "XS Recordings",
          },
        ],
      },
      {
        bands: [
          {
            name: "Critter Girls",
            recordLabel: "ACR",
          },
          {
            name: "Propeller",
            recordLabel: "Pacific Records",
          },
        ],
      },
      {
        name: "Trainerella",
        bands: [
          {
            name: "Wild Antelope",
            recordLabel: "Still Bottom Records",
          },
          {
            name: "Manish Ditch",
            recordLabel: "ACR",
          },
          {
            name: "Adrian Venti",
            recordLabel: "Monocracy Records",
          },
          {
            name: "YOUKRANE",
            recordLabel: "Anti Records",
          },
        ],
      },
      {
        name: "Small Night In",
        bands: [
          {
            name: "Squint-281",
            recordLabel: "Outerscope",
          },
          {
            name: "The Black Dashes",
            recordLabel: "Fourth Woman Records",
          },
          {
            name: "Green Mild Cold Capsicum",
            recordLabel: "Marner Sis. Recording",
          },
          {
            name: "Yanke East",
            recordLabel: "MEDIOCRE Music",
          },
          {
            name: "Wild Antelope",
            recordLabel: "Marner Sis. Recording",
          },
        ],
      },
    ];

    const expectedOutput = [
      {
        recordLabel: "",
        bands: [
          {
            name: "Winter Primates",
            festivals: ["LOL-palooza"],
          },
        ],
      },
      {
        recordLabel: "ACR",
        bands: [
          {
            name: "Critter Girls",
            festivals: [],
          },
          {
            name: "Manish Ditch",
            festivals: ["Trainerella"],
          },
        ],
      },
      {
        recordLabel: "Anti Records",
        bands: [
          {
            name: "YOUKRANE",
            festivals: ["Trainerella"],
          },
        ],
      },
      {
        recordLabel: "Fourth Woman Records",
        bands: [
          {
            name: "Jill Black",
            festivals: ["LOL-palooza"],
          },
          {
            name: "The Black Dashes",
            festivals: ["Small Night In"],
          },
        ],
      },
      {
        recordLabel: "Marner Sis. Recording",
        bands: [
          {
            name: "Green Mild Cold Capsicum",
            festivals: ["Small Night In"],
          },
        ],
      },
      {
        recordLabel: "MEDIOCRE Music",
        bands: [
          {
            name: "Yanke East",
            festivals: ["Small Night In"],
          },
        ],
      },
      {
        recordLabel: "Monocracy Records",
        bands: [
          {
            name: "Adrian Venti",
            festivals: ["Trainerella"],
          },
        ],
      },
      {
        recordLabel: "Outerscope",
        bands: [
          {
            name: "Squint-281",
            festivals: ["Small Night In"],
          },
        ],
      },
      {
        recordLabel: "Pacific Records",
        bands: [
          {
            name: "Frank Jupiter",
            festivals: ["LOL-palooza"],
          },
          {
            name: "Propeller",
            festivals: [],
          },
        ],
      },
      {
        recordLabel: "Still Bottom Records",
        bands: [
          {
            name: "Wild Antelope",
            festivals: ["Small Night In", "Trainerella"],
          },
        ],
      },
      {
        recordLabel: "XS Recordings",
        bands: [
          {
            name: "Werewolf Weekday",
            festivals: ["LOL-palooza"],
          },
        ],
      },
    ];

    expect(transformData(input)).toEqual(expectedOutput);
  });
});
