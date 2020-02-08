import api from '../../shared/axios'
 
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';

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