import axios from "axios";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const UPDATE_TOKEN = "UPDATE_TOKEN";




const authRequest = () => ({
  type: AUTH_REQUEST,
});

const authError = () => ({
  type: AUTH_ERROR,
});

const authSuccess = (token) => ({
  type: AUTH_SUCCESS,
  payload: token,
});

export const getToken = (payload, navigate) => async (dispatch) => {
    console.log("hey")
  dispatch(authRequest());
  try {
    let res = await axios.post("https://reqres.in/api/login", payload);
    let data = await res.data;
    console.log(data);
    dispatch(authSuccess(data.token));

    navigate("/posts");

    localStorage.setItem("token", data.token);
  } catch (err) {
    dispatch(authError());
  }
};


export const updateToken = (token) => async (dispatch) => {
  dispatch({
    type: UPDATE_TOKEN,
    payload: token,
  });
};


