import { connect } from 'react-redux';
import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";

import {getOrder} from '../../actions/order/index'

import OrderItem from './item';


function OrderList(props) {
    let { id } = useParams();
    let { order_items } = props.order
    
    useEffect(() => { props.getOrder(id)} , [])

    return (
        <div className="order">
            <h2 className="order__header">{props.order.restaurant.title}, by {props.order.user.name}</h2>
            <div className="order__items">
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>Order Items</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        order_items.map((item) => {
                                    return <OrderItem item={item} key={item.id} orderId={props.order.id}></OrderItem>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getOrder
  }

const mapStateToProps = state => ({
    order: state.order,
})


export default connect(mapStateToProps, mapDispatchToProps)(OrderList);