import { isExportSpecifier } from "typescript";
import React from 'react'
import './comp.css'

export default (props:any) => {
    return(
    <div className = "Header">
        <h1>{props.text}</h1>
        
    </div>

    )
}