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
