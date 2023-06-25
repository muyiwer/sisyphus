import { useSelector } from "react-redux";
import { useChart } from "../../hooks/useChart";
import { State } from "../../model/state";
export const Filters = () => {
  const state = useSelector((state: any): State => {
    return state.app?.value;
  });
  const { setTimeInterval } = useChart();
  return (
    <div className="main__chart__filter justify-between">
      <div className="flex">
        <div className="main__chart__filter__item flex flex-row text-dark border-right">
          <span>Time</span>
          <span
            onClick={(e: any) => setTimeInterval(e.target.textContent)}
            className={`time cursor-pointer ${
              state.activeTime?.oneHr && "date-active"
            }`}
          >
            1H
          </span>
          <span
            className={`time cursor-pointer ${
              state.activeTime?.twoHr && "date-active"
            }`}
            onClick={(e: any) => setTimeInterval(e.target.textContent)}
          >
            2H
          </span>
          <span
            className={`time cursor-pointer ${
              state.activeTime?.fourHr && "date-active"
            }`}
            onClick={(e: any) => setTimeInterval(e.target.textContent)}
          >
            4H
          </span>
          <span
            className={`time cursor-pointer ${
              state.activeTime?.oneDay && "date-active"
            }`}
            onClick={(e: any) => setTimeInterval(e.target.textContent)}
          >
            1D
          </span>
          <span
            className={`time cursor-pointer ${
              state.activeTime?.oneWeek && "date-active"
            }`}
            onClick={(e: any) => setTimeInterval(e.target.textContent)}
          >
            1W
          </span>
          <span
            className={`time cursor-pointer ${
              state.activeTime?.oneMonth && "date-active"
            }`}
            onClick={(e: any) => setTimeInterval(e.target.textContent)}
          >
            1M
          </span>
          <span
            className={`time cursor-pointer ${
              state.activeTime?.oneYear && "date-active"
            }`}
            onClick={(e: any) => setTimeInterval(e.target.textContent)}
          >
            1Y
          </span>
          {/* <img src={dropdownDarkImage} alt="" /> */}
        </div>
        <div className="main__chart__filter__item border-right desktop">
          <img src={"/images/candle.svg"} alt="" />
        </div>
        <div className="main__chart__filter__item border-right desktop">
          <span>Fx Indicators</span>
        </div>
        <div className="desktop main__chart__filter__item border-right flex">
          <img className="desktop" src="./images/back.svg" alt="" />
          <img className="desktop" src="./images/front.svg" alt="" />
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <img src={"/images/expand.svg"} alt="" />
      </div>
    </div>
  );
};
