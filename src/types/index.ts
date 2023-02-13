export interface Input {
  name?: string;
  bands?: {
    name?: string;
    recordLabel?: string;
  }[];
}

export interface Output {
  recordLabel: string;
  bands: [
    {
      name: string;
      festivals: string[];
    }
  ];
}

export const input: Input[] = [
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
