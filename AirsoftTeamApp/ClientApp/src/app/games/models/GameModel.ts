export enum GameType {
  Дневная = 1,
  Ночная = 2,
  Суточная = 3
};

export namespace GameType {

  export function values() {
    return Object.keys(GameType).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}

export class GameModel {
  id: number;
  name: string;
  coordX: string;
  coordY: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  place: string;
  link: string;
  gameType: GameType;
  cost: string;
  organizators: string;
  organizatorsLink: string;
}
