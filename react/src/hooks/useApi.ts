import { useGetDataMutation } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../model/state";
import { useEffect } from "react";
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
      console.log(results.data);
      dispatch(
        setAllAppState({
          ...state,
          apiResponse: results.data,
        })
      );
    }
  }, [results.data]);
  useEffect(() => {
    getData({url: apiConfig.Klines.Get + `symbol=LTCBTC&interval=1d`})
  }, []);
  return {getData};
};
