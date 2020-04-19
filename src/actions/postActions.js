import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import data from "../db.json";

export function getPosts() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_POSTS,
        posts: data["posts"],
    });
}
