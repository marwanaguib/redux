import { connect } from 'react-redux';
import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";

import {getOrder} from '../../actions/order/index'


function OrderList(props) {
    let { id } = useParams();
    
    useEffect(() => { props.getOrder(id)} , [])

    return (
        <div className="list">{props.order.id}</div>
    )
}

const mapDispatchToProps = {
    getOrder
  }

const mapStateToProps = state => ({
    order: state.order,
})


export default connect(mapStateToProps, mapDispatchToProps)(OrderList);