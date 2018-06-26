import Piece from './piece';
import Board from "../board";
import {default as Player, PlayerType} from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player: PlayerType) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        if(this.player == Player.WHITE){
            [Square.at(currentSquare.row + 1, currentSquare.col)]
        }
        const moves: Square[] = [Square.at(1, 0)];
        return moves;
    }
}