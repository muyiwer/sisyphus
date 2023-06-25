export const OrdersMobile = () => {
  return (
    <section className="main-mobile">
      <main className="main__order card">
        <div className="order-tabset">
          <div className="tabset-active">Open Orders</div>
          <div>Positions</div>
          <div>Order History</div>
          <div className="m-r-10">Trade History</div>
        </div>
        <div className="main__order__content">
          <span className="text-base">No Open Orders</span>
          <span className="text-dark tex-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
            nullam sit imperdiet pulvinar.
          </span>
        </div>
      </main>
    </section>
  );
};
