import { auth } from "../../services/firebase";
import { login, logout ,setUser} from "../slices/authSlice";


export const setCurrentUser = (user) => async (dispatch) => {
    dispatch(setUser(user))
}

export const signIn = (user) => async (dispatch) => {
    dispatch(login(user));
};

export const signOutUser = () => async (dispatch) => {
    dispatch(logout());
};