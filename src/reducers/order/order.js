import { GET_ORDER_SUCCESS, ORDER_QNTY_SUCCESS } from '../../actions/order/index'

const orderInitialState = {
    "id": null,
    "status": null,
    "min": null,
    "created_at": null,
    "updated_at": null,
    "order_items": [],
    "tax_per_person": null,
    "restaurant": {
        "id": null,
        "added_by": null,
        "title": null,
        "fees": null,
        "tax": null,
        "phone": null,
        "created_at": null,
        "updated_at": null
    },
    "user": {
        "id": null,
        "name": null,
        "email": null,
        "confirmation_token": null,
        "confirmed": null,
        "created_at": null,
        "updated_at": null,
        "short_name": null
    }
}

export default function (state= orderInitialState, action){
    switch (action.type) {
        case GET_ORDER_SUCCESS:
            return {...state,...action.payload}
        case ORDER_QNTY_SUCCESS:
            if(action.incrementFlag){
                return {...state, order_items: [...state.order_items].map((item)=>{
                    if(item.id == action.itemId && item.quantity > 0 && item.quantity < 100){
                        return {...item, quantity: ++item.quantity};
                    }else{
                        return item;
                    }
                })}
            }else{
                return {...state, order_items: [...state.order_items].map((item)=>{
                    if(item.id == action.itemId && item.quantity > 0 && item.quantity < 100){
                        return {...item, quantity: --item.quantity};
                    }else{
                        return item;
                    }
                })}
            }
        default:
            return state
    }
}
