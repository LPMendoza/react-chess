import React from 'react'
import Piece from '../components/Piece';

let Cell = ({piece, active, position, defaultClassColor, classColor, onClickPiece, onMovePiece}) => {

   let movePiece = (e) => {
      onMovePiece(position)
   }
   
   return(
      <React.Fragment>
         <td className={`${defaultClassColor} ${classColor} cell`} onClick={active ? movePiece : null}>
            <div className={" cell piece-container"}> 
            {
               piece != ""  ?
               <Piece 
               piece={piece}
               onClick={onClickPiece}
               /> 
               :
               ""
            } 
            </div>
         </td>
      </React.Fragment>
   )
}

export default Cell;