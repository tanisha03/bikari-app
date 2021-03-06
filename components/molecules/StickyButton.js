import React from 'react'
import Button from '../atoms/Button'

export default function StickyButton(props) {
    return (
        <Button bg={props.bg} color={props.color} style={{margin: 20}} {...props}>
            {props.children}
        </Button>
    )
}
