import React from 'react'
import Box from './Box'
import general from '../../utils/general'

const Tutorials = ({ props, columnNumbers }) => {
    columnNumbers = 4;
    let colStyle = general.getColumnsStyle(columnNumbers);
    return (
        
        <>  
            {
                general.chunk(props, columnNumbers).map((items, i)=>{
                    return(
                        <div className="row tutorials" >
                            {items.map((item, index)=>{
                                return(
                                <Box key={general.generateKey(index)} item={item} index={index} colStyle={colStyle}></Box>
                            )})}
                        </div>
                    )
                })}
        </>

    )
}
export default Tutorials;