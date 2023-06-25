export const PurchaseModal = () => {
  return (
    <div id="openModal-about" className="modal-dialog">
      <div className="main__purchase-modal">
        <a href="#close" title="Close" className="close">
          X
        </a>
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
              <img src="./images/info.svg" alt="Info" />
            </div>
            <span className="text-dark">0.00 USD</span>
          </div>
          <div className="main__purchase__info-item">
            <div className="flex gap-2">
              <span className="text-dark">Amount</span>
              <img src="./images/info.svg" alt="Info" />
            </div>
            <span className="text-dark">0.00 USD</span>
          </div>
          <div className="main__purchase__info-item">
            <div className="flex gap-2">
              <span className="text-dark">Type</span>
              <img src="./images/info.svg" alt="Info" />
            </div>
            <span className="text-dark">Gone till cancelled</span>
          </div>
        </div>
        <div className="flex gap-3">
          <input type="checkbox" className="checkbox" defaultChecked />
          <span>Post only</span>
          <img src="./images/info.svg" alt="Info" />
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
      </div>
    </div>
  );
};
