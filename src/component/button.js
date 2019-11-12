import React from 'react'

export default function Button (props){
    const classN=props.className?props.className:''
    const disabled= props.disabled?props.disabled:''
    return(
        <div>
            <input className={'buton'+classN} name={props.name} type={props.type} value={props.name} onClick={props.onClick} disabled={disabled}/>
        </div>
    )
}