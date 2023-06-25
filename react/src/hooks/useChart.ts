import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Time } from "../model/enum";
import { State } from "../model/state";
import { setAllAppState } from "../store";
import { apiConfig } from "../store/apiConfig";
import { useApi } from "./useApi";

export const useChart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any): State => {
    return state.app?.value;
  });
  const { getData } = useApi();
  const setTimeInterval = useCallback((value: string) => {
    dispatch(
      setAllAppState({
        ...state,
        activeTime: {
          ...state.activeTime,
          oneDay: value === Time.oneDay,
          oneHr: value === Time.oneHr,
          oneMonth: value === Time.oneMonth,
          oneWeek: value === Time.oneWeek,
          oneYear: value === Time.oneYear,
          twoHr: value === Time.twoHr,
          fourHr: value === Time.fourHr,
        },
      })
    );
    getData({
      url:
        apiConfig.Klines.Get + `symbol=LTCBTC&interval=${value.toLowerCase()}`,
    });
  }, []);
  const setTab = useCallback((value: string) => {
    dispatch(
      setAllAppState({
        ...state,
        tab: {
          ...state.tab,
          trade: value === "trade",
          orderBook: value === "orderBook",
          chart: value === "chart",
        },
      })
    );
  }, []);

  return { setTimeInterval, setTab };
};
