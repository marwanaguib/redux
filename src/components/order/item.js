import React, {useEffect} from 'react';
import OrderItemQuantity from './quantity'


export default function OrderItem(props) {
    let {item, orderId} = props
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.price} EGP</td>
            <td><OrderItemQuantity qnty={item.quantity} id={item.id} orderId={orderId}></OrderItemQuantity></td>
        </tr>
    )
}