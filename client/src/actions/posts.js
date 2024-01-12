import * as api from "../api/index.js";

// Action Creators => Functions that returns actions. An action is an object that has type and a payload. With redux thunk, since we will be dealing with asynchronous logic, we have to add this async (dispatch) function in front of it and then instead of returning the action,  we have to dispatch it.

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
