import React, {
   Fragment
} from 'react'
import Board from './Board';
import Pawn from '../assets/img/peon.svg';
import Horse from '../assets/img/horse.svg';
import Bishop from '../assets/img/bishop.svg';
import Tower from '../assets/img/tower.svg';
import Queen from '../assets/img/queen.svg';
import King from '../assets/img/king.svg';

class BoardContainer extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         arrayCordenadas: [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [1, 2, 3, 4, 5, 6, 7, 8]
         ],
         cells: [],
         pieces: [],
         selectedPiece: null,
         factorY: -1,
         currentPlayer: 1

      }
   }

   componentDidMount = () => {

      this.setState({
         pieces: this.createPawns(this.state.pieces, 1)
      })
      this.setState({
         pieces: this.createPawns(this.state.pieces, 2)
      })
      this.setState({
         pieces: this.createPieces(this.state.pieces)
      })
      this.createCells();
   }

   searchPiece = (indexX, indexY) => {
      let piece = this.state.pieces.filter((piece) => {
         return (piece.position.x == indexX && piece.position.y == indexY)
      })
      return piece.length != 0 ? 
      piece
      : ""
   }

   createCells = () => {
      let cells = this.state.cells;

      this.state.arrayCordenadas.forEach((el, indexR) => {
         let row = [];

         el.map((td, indexC) => row.push(
               {
                  piece: this.searchPiece(indexC, indexR)[0],
                  active: false,
                  position: {
                     x: indexC,
                     y: indexR
                  },
                  defaultClassColor: indexR % 2 == 0 ? indexC % 2 == 0 ? "bg-white" : "bg-black" : indexC % 2 == 0 ? "bg-black" : "bg-white",
                  classColor: ""
               }
            )
         )

         cells.push(row);
      })

      this.setState({
         cells
      })
   }

   createPawns = (pieces, player) => {
      for(let i = 0; i < 8; i++) {
         if(player == 1) {
            pieces.push({
               position: {
                  y: 6,
                  x: i,
               },
               moves: [{
                  x: 0,
                  y: 1,
               }],
               movesCount: 0,
               pawnAttack: [
                  {
                     x: 1,
                     y: 2,
                  },
                  {
                     x: -1,
                     y: 2,
                  },
               ],
               extraMove: [{
                  x: 0,
                  y: 2
               }],
               player: player,
               name: "Pawn",
               image: Pawn
            }, )
         }
         else {
            pieces.push({
               position: {
                  y: 1,
                  x: i,
               },
               moves: [{
                  x: 0,
                  y: -1,
               }],
               movesCount: 0,
               pawnAttack: [{
                     x: 1,
                     y: 2,
                  },
                  {
                     x: -1,
                     y: 2,
                  },
               ],
               extraMove: [{
                  x: 0,
                  y: -2
               }],
               player: player,
               name: "Pawn",
               image: Pawn
            }, )
         }
         
      }

      return pieces;
   }

   createHorse = (player, position) => {
         return {
            position: {
               y: position.y,
               x: position.x,
            },
            moves: [{
                  x: 1,
                  y: 2
               },
               {
                  x: -1,
                  y: 2
               },
               {
                  x: 1,
                  y: -2
               },
               {
                  x: -1,
                  y: -2
               },
               {
                  x: 2,
                  y: 1
               },
               {
                  x: -2,
                  y: 1
               },
               {
                  x: 2,
                  y: -1
               }, {
                  x: -2,
                  y: -1
               }
            ],
            player: player,
            anyPlace: false,
            name: "Horse",
            image: Horse
         }
      
   }

   createTower = (player, position) => {
      return {
         position: {
            y: position.y,
            x: position.x,
         },
         moves: [{
               x: 1,
               y: 0
            },
            {
               x: -1,
               y: 0
            },
            {
               x: 0,
               y: 1
            },
            {
               x: 0,
               y: -1
            }
         ],
         anyPlace: true,
         player: player,
         name: "Tower",
         image: Tower
      }
   }

   createBishop = (player, position) => {
      return {
         position: {
            y: position.y,
            x: position.x,
         },
         moves: [{
               x: 1,
               y: 1
            },
            {
               x: -1,
               y: 1
            },
            {
               x: 1,
               y: -1
            },
            {
               x: -1,
               y: -1
            }
         ],
         anyPlace: true,
         player: player,
         name: "Bishop",
         image: Bishop
      }
   }

   createQueen = (player, position) => {
      return {
         position: {
            y: position.y,
            x: position.x,
         },
         moves: [{
               x: 1,
               y: 0
            },
            {
               x: -1,
               y: 0
            },
            {
               x: 0,
               y: 1
            },
            {
               x: 0,
               y: -1
            },
            {
               x: 1,
               y: 1
            },
            {
               x: -1,
               y: 1
            },
            {
               x: 1,
               y: -1
            },
            {
               x: -1,
               y: -1
            }
         ],
         anyPlace: true,
         player: player,
         name: "Queen",
         image: Queen
      }
   }

   createKing = (player, position) => {
      return {
         position: {
            y: position.y,
            x: position.x,
         },
         moves: [{
               x: 1,
               y: 0
            },
            {
               x: -1,
               y: 0
            },
            {
               x: 0,
               y: 1
            },
            {
               x: 0,
               y: -1
            },
            {
               x: 1,
               y: 1
            },
            {
               x: -1,
               y: 1
            },
            {
               x: 1,
               y: -1
            },
            {
               x: -1,
               y: -1
            }
         ],
         anyPlace: false,
         player: player,
         name: "King",
         image: King
      }
   }
   createPieces = (pieces, player) => {
      let arrayPieces = [
         this.createTower(1, {
            y: 7,
            x: 0,
         }),
         this.createHorse(1, {
            y: 7,
            x: 1,
         }),
         this.createBishop(1, {
            y: 7,
            x: 2,
         }),
         this.createQueen(1, {
            y: 7,
            x: 3,
         }),
         this.createKing(1, {
            y: 7,
            x: 4,
         }),
         this.createBishop(1, {
            y: 7,
            x: 5,
         }),
         this.createHorse(1, {
            y: 7,
            x: 6,
         }),
         this.createTower(1, {
            y: 7,
            x: 7,
         }),
         //
         this.createTower(2, {
            y: 0,
            x: 7,
         }),
         this.createHorse(2, {
            y: 0,
            x: 6,
         }),
         this.createBishop(2, {
            y: 0,
            x: 5,
         }),
         this.createQueen(2, {
            y: 0,
            x: 4,
         }),
         this.createKing(2, {
            y: 0,
            x: 3,
         }),
         this.createBishop(2, {
            y: 0,
            x: 2,
         }),
         this.createHorse(2, {
            y: 0,
            x: 1,
         }),
         this.createTower(2, {
            y: 0,
            x: 0,
         }),
      ]

      arrayPieces.forEach((el) => {pieces.push(el)});

      return pieces;
   }

   clearPositions = () => {
      let cells = this.state.cells;
      cells.forEach((row) => row.forEach((cell) => {
         cell.classColor = "";
         cell.active = false;
      }))
      this.setState({
         cells
      });
   }

   getPiecePositions = (piece) => {
      if(piece.player == this.state.currentPlayer){  
         this.setState({
            selectedPiece: piece
         })
         let {
            moves,
            anyPlace,
            position,
            player,
         } = piece
         
         this.clearPositions();
         
         let cells = this.state.cells;

         cells[piece.position.y][piece.position.x].classColor = "bg-selected";

         moves.forEach((move, index) => {
            let stop = false;

            if(anyPlace) {


               for(let i = 1; i <= 8; i++) {

                  let newX = (position.x) + (move.x * i);
                  let newY = (position.y) + ((move.y * i));
                  if ((newY <= 7 == true && newY >= 0 == true) &&
                     (newX >= 0 == true && newX <= 7 == true)) {
                     if (!stop) {

                        if (cells[newY][newX].piece == undefined) {
                           cells[newY][newX].active = true;
                           cells[newY][newX].classColor =  "bg-active";
                           this.setState({
                              cells
                           })
                        } else {
                           if (cells[newY][newX].piece.player != player) {
                              cells[newY][newX].active = true;
                              cells[newY][newX].classColor = "bg-enemy";
                              this.setState({
                                 cells
                              })
                           }
                           stop = true;
                           continue;
                        }
                     } else {
                        cells[newY][newX].active = false;
                        cells[newY][newX].classColor = "";
                        this.setState({
                           cells
                        })
                     }
                  }
               }
               
            } 
            else {
               let newX = position.x + move.x;
               let newY = position.y + (this.state.factorY * move.y);


               if ((newY <= 7 == true && newY >= 0 == true) &&
                  (newX >= 0 == true && newX <= 7 == true)) {
                  
                  if(!stop) {
                     if (cells[newY][newX].piece == undefined) {
                        
                        cells[newY][newX].active = true;
                        cells[newY][newX].classColor = "bg-active";
                        this.setState({
                           cells
                        })
                     } else {
                        if (cells[newY][newX].piece.player != player && piece.name != "Pawn") {
                           cells[newY][newX].active = true;
                           cells[newY][newX].classColor = "bg-enemy";
                           this.setState({
                              cells
                           })
                        }
                        stop = true;
                     }
                  }
                  else {
                     cells[newY][newX].active = true;
                     cells[newY][newX].classColor = "";
                     this.setState({
                        cells
                     })
                  }
                  
               }
            }
            
         });

         if(piece.extraMove != undefined) {
            piece.extraMove.forEach((move) => {
               let newX = piece.position.x + move.x;
               let newY = piece.position.y + (this.state.factorY * move.y);

               if (cells[newY][newX].piece != undefined && cells[newY][newX].piece.player != player) {
                  cells[newY][newX].active = true;
                  cells[newY][newX].classColor = "bg-enemy";

               } else {
                  cells[newY][newX].active = true;
                  cells[newY][newX].classColor = "bg-active";
               }

               this.setState({
                  cells
               })
            });

            delete piece.extraMove;

         }
         
         
         if(piece.pawnAttack != undefined) {

            piece.pawnAttack.forEach((move) => {
               let stop = false;
               let newX = piece.position.x + move.x;
               let newY = piece.position.y + (this.state.factorY * move.y);

               if ((newY <= 7 == true && newY >= 0 == true) &&
                  (newX >= 0 == true && newX <= 7 == true)) {

                  if (!stop) {
                        if (cells[newY][newX].piece != undefined && cells[newY][newX].piece.player != player) {
                           cells[newY][newX].active = true;
                           cells[newY][newX].classColor = "bg-enemy";
                           this.setState({
                              cells
                           })
                        }
                        stop = true;
                  } else {
                     cells[newY][newX].active = true;
                     cells[newY][newX].classColor = "";
                     this.setState({
                        cells
                     })
                  }

               }
            })
         }
      }
   }

   movePiece = (position) => {

      let cells = this.state.cells;
      delete cells[this.state.selectedPiece.position.y][this.state.selectedPiece.position.x].piece;

      this.state.selectedPiece.position = {
         x: position.x,
         y: position.y
      }

      cells[position.y][position.x].piece = this.state.selectedPiece;

      if (this.state.selectedPiece.movesCount == 0) {

         cells[this.state.selectedPiece.position.y][this.state.selectedPiece.position.x].piece.moves = [{
            x: 0,
            y: this.state.selectedPiece.player == 1 ? 1 : -1,
         }]
         cells[this.state.selectedPiece.position.y][this.state.selectedPiece.position.x].piece.pawnAttack = [{
               x: 1,
               y: this.state.selectedPiece.player == 1 ? 1 : -1,
            },
            {
               x: -1,
               y: this.state.selectedPiece.player == 1 ? 1 : -1,
            }
         ]
         cells[this.state.selectedPiece.position.y][this.state.selectedPiece.position.x].piece.movesCount = 1;

      }

      this.clearPositions();

      this.setState({
         cells,
         selectedPiece: null,
         currentPlayer: this.state.currentPlayer == 1 ? 2: 1
      });


   }

   render = () => {
      return (
         <Board 
         cells={this.state.cells} 
         onMovePiece={this.movePiece}
         onClickPiece={this.getPiecePositions}
         />
      )
   }
}

export default BoardContainer;