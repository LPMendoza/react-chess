import React from 'react'

let Piece = ({piece, onClick}) => {
   let handleOnClick = (e) => {
      onClick(piece);
   }
   return (
      <button className={`piece ${piece.player == 2 ? 'piece-white' : 'piece-dark'}`} onClick={handleOnClick}>
        <img src={piece.image} /> 
      </button>
   )
   
}

export default Piece;