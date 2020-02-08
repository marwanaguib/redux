import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import {incrementOrderQnty, decrementOrderQnty, changeOrderQnty} from '../../actions/order/index'


function OrderItemQuantity(props) {
    let {qnty, id, orderId} = props
    // const [iqnty, setIqnty] = useState(qnty);

    return (
        <div className="order__qnty">
            <button onClick={()=>{if(qnty >= 0 && qnty < 100)props.decrementOrderQnty(orderId, id, qnty)}}>-</button>
            {/* <input value={iqnty} min="0" max="99" type="number" onChange={($event)=>{setIqnty($event.target.value);props.changeOrderQnty(orderId, id, qnty, $event.target.value)}}/> */}
            <input value={qnty} min="0" max="99" type="number" readOnly/>
            <button onClick={()=>{if(qnty >= 0 && qnty < 100)props.incrementOrderQnty(orderId, id, qnty)}}>+</button>
        </div>
    )
}

const mapDispatchToProps = {
    incrementOrderQnty,
    decrementOrderQnty,
    changeOrderQnty
  }

export default connect(null, mapDispatchToProps)(OrderItemQuantity);