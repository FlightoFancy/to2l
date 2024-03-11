export interface ILoco extends IMechanical {
  id: string;
  series: string;
  number: string;
}

interface IMechanical {
  chockCount?: number;
  isReady?: boolean;
  extra?: string;
}
