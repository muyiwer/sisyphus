import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../model/state";
import { setAllAppState } from "../store";

export const useDashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any): State => {
    return state.app?.value;
  });
  const validateUser = useCallback(() => {
    if (!localStorage.getItem("profile")) {
      window.location.href = "/";
    }
    const profileSrc = localStorage.getItem("profile") as string;
    const email = localStorage.getItem("email") as string;
    dispatch(
      setAllAppState({
        ...state,
        tab:{
          ...state.tab,
          chart:true
        },
        profileSrc,
        email
      })
    );
  }, []);
  useEffect(() => {
    validateUser();
  }, []);
};
