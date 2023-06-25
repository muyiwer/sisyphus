import { useGetDataMutation } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../model/state";
import { useCallback, useEffect } from "react";
import { setAllAppState } from "../store";
import { apiConfig } from "../store/apiConfig";

export const useApi = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any): State => {
    return state.app?.value;
  });
  const [getData, results] = useGetDataMutation();
  useEffect(() => {
    if (results) {
      if (!localStorage.getItem("profile")) {
        window.location.href = "/";
      }
      const profileSrc = localStorage.getItem("profile") as string;
      const email = localStorage.getItem("email") as string;
      dispatch(
        setAllAppState({
          ...state,
          tab: {
            ...state.tab,
            chart: true,
          },
          activeTime: {
            oneHr: true,
          },
          profileSrc,
          email,
          apiResponse: results.data,
        })
      );
    }
  }, [results.data]);
  useEffect(() => {
    getData({ url: apiConfig.Klines.Get + `symbol=LTCBTC&interval=1d` });
  }, []);
  return { getData };
};
