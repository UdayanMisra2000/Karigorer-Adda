import React from 'react'
import { Button } from 'react-bootstrap'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'

export default function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div>
            <CurrencyFormat
              renderText = {(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox' /> This order contains a gift.
                </small>
                </>  
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₹'}
            />
            <Button  variant="warning">Proceed to checkout</Button>
        </div>
    )
}
