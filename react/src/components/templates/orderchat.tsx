import useAnyChart from "../../hooks/useCandleChart";
import { Filters } from "../organisms/filters";
import AnyChart from "anychart-react/dist/anychart-react.min.js";
import { useChart } from "../../hooks/useChart";
import { State } from "../../model/state";
import { useSelector } from "react-redux";
import { useRef } from "react";
export const OrderChat = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const state = useSelector((state: any): State => {
    return state.app?.value;
  });
  const { chart } = useAnyChart("ontainer-mobile");
  const { setTab } = useChart();
  return (
    <section className="main__orderchart-mobile">
      <main className="main__orderchart card">
        <div className="main__orderchart__tabset">
          <input
            className={`main__orderchart__tabset-checkbox ${
              state.tab?.chart && "bg-light"
            }`}
            type="radio"
            name="tabset"
            id="tab3"
            aria-controls="marzen"
            onClick={() => setTab("chart")}
            checked
          />
          <label
            className={`main__orderchart__tabset-label ${
              state.tab?.chart && "bg-light"
            }`}
            htmlFor="tab3"
          >
            Charts
          </label>
          <input
            type="radio"
            name="tabset"
            id="tab4"
            aria-controls="rauchbier"
            className={`main__orderchart__tabset-checkbox ${
              state.tab?.orderBook && "bg-light"
            }`}
            onClick={() => setTab("orderBook")}
          />
          <label
            className={`main__orderchart__tabset-label ${
              state.tab?.orderBook && "bg-light"
            }`}
            htmlFor="tab4"
          >
            Order Book
          </label>
          <input
            type="radio"
            name="tabset"
            id="tab5"
            aria-controls="rauchbier"
            className={`main__orderchart__tabset-checkbox ${
              state.tab?.trade && "bg-light"
            }`}
            onClick={() => setTab("trade")}
          />
          <label
            className={`main__orderchart__tabset-label ${
              state.tab?.trade && "bg-light"
            }`}
            htmlFor="tab5"
          >
            Recent Trade
          </label>

          <div className="tabset__tab-panels">
            <section
              className={`tabset__tab-chart tabsets__tab-panel ${
                !state.tab?.chart && "none"
              }`}
            >
              <Filters />
              <div ref={chartContainerRef} id="container-mobile">
                <AnyChart
                  id="chart-container"
                  width={370}
                  height={320}
                  instance={chart}
                />
              </div>
            </section>
            <section
              className={`tabset__tab-order tabsets__tab-panel ${
                !state.tab?.orderBook && "none"
              }`}
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between gap-4">
                  <div className="order-icon order-icon-active">
                    <img src="./images//order.svg" alt="" />
                  </div>
                  <div className="order-icon">
                    <img src="./images//order.svg" alt="" />
                  </div>
                  <div className="order-icon">
                    <img src="./images//order.svg" alt="" />
                  </div>
                </div>
                <div className="select-dropdown bg-active text-white">
                  <select>
                    <option value="Option 1">10</option>
                    <option value="Option 2">20</option>
                    <option value="Option 3">30</option>
                  </select>
                </div>
              </div>
              <div className="order-table-header text-dark flex justify-between">
                <div className="flex flex-col gap-1">
                  <span>Price</span>
                  <span>(USDT)</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span>Amounts</span>

                  <span>(BTC)</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span>Total</span>
                </div>
              </div>
              <div className="order-table-body flex flex-col gap-2">
                <div className="order-table-row flex justify-between relative">
                  <span>36920.21</span>
                  <span>0.758965</span>
                  <span>28.020.98</span>
                  <div className="order-meter absolute"></div>
                </div>
                <div className="order-table-row flex justify-between relative">
                  <span>36920.21</span>
                  <span>0.758965</span>
                  <span>28.020.98</span>
                  <div className="absolute"></div>
                </div>
                <div className="order-table-row flex justify-between relative">
                  <span>36920.21</span>
                  <span>0.758965</span>
                  <span>28.020.98</span>
                  <div className="order-meter2 absolute"></div>
                </div>
              </div>
              <div className="order-table-body m-10 flex flex-row gap-2 justify-center">
                <span className="text-success text-base">36.641.20</span>
                <img src="./images/arrow-up.svg" alt="" />
                <span className="text-success text-base">36.641.20</span>
              </div>
              <div className="order-table-body m-10 flex flex-col gap-2">
                <div className="order-table-row flex justify-between relative">
                  <span>36920.21</span>
                  <span>0.758965</span>
                  <span>28.020.98</span>
                  <div className="order-meter-high absolute"></div>
                </div>
                <div className="order-table-row flex justify-between relative">
                  <span>36920.21</span>
                  <span>0.758965</span>
                  <span>28.020.98</span>
                  <div className="absolute"></div>
                </div>
                <div className="order-table-row flex justify-between relative">
                  <span>36920.21</span>
                  <span>0.758965</span>
                  <span>28.020.98</span>
                  <div className="order-meter-high2 absolute"></div>
                </div>
              </div>
            </section>
            <section
              className={`tabset__tab-order tabsets__tab-panel ${
                !state.tab?.trade && "none"
              }`}
            >
              <h2>No Trades</h2>
            </section>
          </div>
        </div>
      </main>
    </section>
  );
};
