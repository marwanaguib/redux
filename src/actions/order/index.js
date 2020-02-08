import api from '../../shared/axios'
 
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const ORDER_QNTY_SUCCESS = 'ORDER_QNTY_SUCCESS';

export const getOrderSuccess = (payload) => {
  return{
    type: GET_ORDER_SUCCESS,
    payload
  }
}

export const getOrderAPI = (id) => (dispatch) => {
  return api.get(`/orders/${id}`,{data: {}})
}

export const getOrder = (id) => (dispatch) => {
  return dispatch(getOrderAPI(id)).then(
    (response) => dispatch(getOrderSuccess(response.data)),
  );
}

export const incrementOrderQntyAPI = (orderId, itemId) => (dispatch) => {
  return api.post(`/orders/${orderId}/items/${itemId}?user_id=2`,{data: {}})
}

export const incrementOrderQnty = (orderId, itemId, qnty) => (dispatch) => {
  return dispatch(incrementOrderQntyAPI(orderId, itemId)).then(
    (response) => dispatch(orderQntySuccess(itemId, qnty, true)),
  );
}

export const decrementOrderQntyAPI = (orderId, itemId) => (dispatch) => {
  return api.delete(`/orders/${orderId}/items/${itemId}?user_id=2`,{data: {}})
}

export const decrementOrderQnty = (orderId, itemId, qnty) => (dispatch) => {
  return dispatch(decrementOrderQntyAPI(orderId, itemId)).then(
    (response) => dispatch(orderQntySuccess(itemId, qnty, false)),
  );
}

export const changeOrderQnty = (orderId, itemId, oldQnty, newQnty) => (dispatch) => {
  if(oldQnty < newQnty){
    return dispatch(incrementOrderQntyAPI(orderId, itemId)).then(
      (response) => dispatch(orderQntySuccess(response.data)),
    );
  }else{
    return dispatch(decrementOrderQntyAPI(orderId, itemId)).then(
      (response) => dispatch(orderQntySuccess(response.data)),
    );
  }
}

export const orderQntySuccess = (itemId, qnty, incrementFlag) => {
  return{
    type: ORDER_QNTY_SUCCESS,
    itemId,
    qnty,
    incrementFlag
  }
}