import React from 'react'
import general from '../../utils/general'
import Box from './Box'

const Tutorials = ({ props, columnNumbers }) => {
    columnNumbers = 4;
    let colStyle = general.getColumnsStyle(columnNumbers);
    return (
        
        <>  
            {
                general.chunk(props, columnNumbers).map((items, i)=>{
                    return(
                        <div className="row tutorials" key={"row-"+i}>
                            {items.map((item, index)=>{
                                return(
                                <Box item={item} index={index} colStyle={colStyle}></Box>
                            )})}
                        </div>
                    )
                })}
        </>

    )
}
export default Tutorials;