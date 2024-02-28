export interface ILoco extends IMechanical {
  id: string;
  series: string;
  number: number;
}

interface IMechanical {
  chockCount?: number;
  isReady?: boolean;
  extra?: string;
}
