import React, {
   Fragment
} from 'react'
import Cell from '../components/Cell';

let Board = ({
      cells,
      onMovePiece,
      onClickPiece
   }) => {

   return (
      <Fragment>
         <table> 
            <tbody>
               {
                  cells.map((row, index) => {
                     return ( 
                        <tr key={index}>
                           {row.map((cell, indexCell) => {
                              return (   
                                 <Cell 
                                 key={"cell-" + indexCell}
                                 position={cell.position}
                                 onMovePiece={onMovePiece}
                                 active={cell.active}
                                 piece={cell.piece || ""} 
                                 defaultClassColor={cell.defaultClassColor}
                                 classColor={cell.classColor}
                                 onClickPiece={onClickPiece}
                                 />
                              )
                           })
                           }
                        </tr>
                     )
                  })
               }
            </tbody>
         </table> 
      </Fragment>
   )
}

export default Board;