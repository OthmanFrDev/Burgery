import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Pickle', type: 'pickle' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    
]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price : <strong> {props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => { props.ingredientsAdded(ctrl.type) }}
                    removed={() => { props.ingredientsRemoved(ctrl.type) }}
                    disabled={props.disabled[ctrl.type]} />
            ))}
            {<button className={classes.OrderButton}
                disabled={!props.purchaseable} 
                onClick={props.ordered}>ORDER NOW </button>}
        </div>
    );
}

export default buildControls;