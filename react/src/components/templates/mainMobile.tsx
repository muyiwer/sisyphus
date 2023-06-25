import { Filters } from "../organisms/filters";
import AnyChart from "anychart-react/dist/anychart-react.min.js";
import useAnyChart from "../../hooks/useCandleChart";
export const MainMobile = () => {
  const { chart } = useAnyChart();
  return (
    <section className="main mobile">
      <main className="main__chart card">
        <Filters />
        <div id="container">
          <AnyChart width={850} height={470} instance={chart} />
        </div>
      </main>
      <main className="main__orderbook card">
        <div className="main__orderbook-tabset">
          <input
            className="main__orderbook__tabset-checkbox"
            type="radio"
            name="tabset"
            id="tab1"
            aria-controls="marzen"
            checked
          />
          <label className="main__orderbook__tabset-label" htmlFor="tab1">
            Order Book
          </label>
          <input
            type="radio"
            name="tabset"
            id="tab2"
            aria-controls="rauchbier"
            className="main__orderbook__tabset-checkbox"
          />
          <label className="main__orderbook__tabset-label" htmlFor="tab2">
            Recent Trades
          </label>

          <div className="main__orderbook__tabset__tab-panels">
            <section className="main__orderbook__tabset__tab-panel">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between gap-4">
                  <div className="order-icon order-icon-active">
                    <img src={"/images/order.svg"} alt="" />
                  </div>
                  <div className="order-icon">
                    <img src={"/images/order.svg"} alt="" />
                  </div>
                  <div className="order-icon">
                    <img src={"/images/order.svg"} alt="" />
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
                <img src={"/images/arrow-up.svg"} alt="" />
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
            <section className="main__orderbook__tabset__tab-panel">
              {/* <h2>No Trades</h2> */}
            </section>
          </div>
        </div>
      </main>
      <main className="main__purchase card">
        <div className="main__purchase__order">
          <div className="main__purchase__order__buy">Buy</div>
          <div className="main__purchase__order__sell">Sell</div>
        </div>
        <div className="main__purchase__menu">
          <div className="main__purchase__menu-item active text-dark">
            Limit
          </div>
          <div className="main__purchase__menu-item text-dark">Market</div>
          <div className="main__purchase__menu-item text-dark">Stop-Limit</div>
        </div>
        <div className="main__purchase__info">
          <div className="main__purchase__info-item">
            <div className="flex gap-2">
              <span className="text-dark">Limit Price</span>
              <img src={"/images/info.svg"} alt="" />
            </div>
            <span className="text-dark">0.00 USD</span>
          </div>
          <div className="main__purchase__info-item">
            <div className="flex gap-2">
              <span className="text-dark">Amount</span>
              <img src={"/images/info.svg"} alt="" />
            </div>
            <span className="text-dark">0.00 USD</span>
          </div>
          <div className="main__purchase__info-item">
            <div className="flex gap-2">
              <span className="text-dark">Type</span>
              <img src={"/images/info.svg"} alt="" />
            </div>
            <span className="text-dark">Gone till cancelled</span>
          </div>
        </div>
        <div className="flex gap-3">
          <input type="checkbox" className="checkbox" checked />
          <span>Post only</span>
          <img src={"/images/info.svg"} alt="" />
        </div>
        <div className="flex justify-between text-dark text-sm">
          <span>Total</span>
          <span>0.00</span>
        </div>
        <button className="btn btn-gradient">Buy BTC</button>
        <div className="divider"></div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-dark text-sm">Total account value</span>
            <span>0.00</span>
          </div>
          <div>
            <div className="select-dropdown bg-light text-dark">
              <select>
                <option value="Option 1">NGN</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-dark text-sm">Open orders</span>
            <span>0.00</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-dark text-sm">Available</span>
            <span>0.00</span>
          </div>
        </div>
        <button className="btn-deposit">Deposit</button>
      </main>

      <main className="main__order card">
        <div className="order-tabset">
          <div className="tabset-active">Open Orders</div>
          <div>Positions</div>
          <div>Order History</div>
          <div className="m-r-10">Trade History</div>
        </div>
        <div className="main__order__content">
          <span className="text-xl">No Open Orders</span>
          <span className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
            nullam sit imperdiet pulvinar.
          </span>
        </div>
      </main>
    </section>
  );
};

export default MainMobile;
