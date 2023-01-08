export interface Game {
  name: string;
  status: string;
}

export interface Player {
  id: string;
  name: string
}

export interface GameAndPlayers {
  players: Player[];
  game: Game;
}

export interface GameAndPlayer {
  player: Player;
  game: Game;
}

export type ChannelMessage =
  | PlayerAddedMessage;
  // | others can be added here

export interface PlayerAddedMessage {
  type: 'playerAdded';
  player: Player;
}
