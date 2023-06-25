export const OrderChat = () => {
  return (
    <section className="main__orderchart-mobile">
      <main className="main__orderchart card">
        <div className="main__orderchart__tabset">
          <input
            className="main__orderchart__tabset-checkbox"
            type="radio"
            name="tabset"
            id="tab3"
            aria-controls="marzen"
            checked
          />
          <label className="main__orderchart__tabset-label" htmlFor="tab3">
            Charts
          </label>
          <input
            type="radio"
            name="tabset"
            id="tab4"
            aria-controls="rauchbier"
            className="main__orderchart__tabset-checkbox"
          />
          <label className="main__orderchart__tabset-label" htmlFor="tab4">
            Order Book
          </label>
          <input
            type="radio"
            name="tabset"
            id="tab5"
            aria-controls="rauchbier"
            className="main__orderchart__tabset-checkbox"
          />
          <label className="main__orderchart__tabset-label" htmlFor="tab5">
            Recent Trades
          </label>

          <div className="tabset__tab-panels">
            <section className="tabset__tab-chart tabset__tab-panel">
              <div className="main__chart__filter justify-between">
                <div className="flex">
                  <div className="main__chart__filter__item flex flex-row text-dark border-right">
                    <span>Time</span>
                    <span className="time cursor-pointer date-active">1H</span>
                    <span className="time cursor-pointer">2H</span>
                    <span className="time cursor-pointer">4H</span>
                    <span className="time cursor-pointer">1D</span>
                    <span className="time cursor-pointer">1W</span>
                    <span className="time cursor-pointer">1M</span>
                    <span className="time cursor-pointer">1Y</span>
                    {/* <img src="./images//dropdown-dark.svg" alt="" /> */}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <img src="./images/expand.svg" alt="" />
                </div>
              </div>
              <div id="container-mobile"></div>
            </section>
            <section className="tabset__tab-order tabset__tab-panel">
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
            <section className="tabset__tab-order tabset__tab-panel">
              <h2>No Trades</h2>
            </section>
          </div>
        </div>
      </main>
    </section>
  );
};

