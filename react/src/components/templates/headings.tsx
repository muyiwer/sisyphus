import { HeadingsItem } from "../molecules/headingsItem";
export const Headings = () => {
  return (
    <section className="headings">
      <div className="headings__item align-center">
        <img src={"/images/coin.svg"} alt="" />
        <span>BTC/USDT</span>
        <img src={"/images/dropdown.svg"} alt="" />
        <span className="text-success">$20,634</span>
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto space-nowrap w-90">
        <HeadingsItem
          imageSrc={"/images/clock.svg"}
          title="24hr change"
          value="520.80 +1.25%"
        />
        <HeadingsItem
          imageSrc={"/images/arrow-up.svg"}
          title="24hr high"
          value="520.80 +1.25%"
        />
        <HeadingsItem
          imageSrc={"/images/arrow-down.svg"}
          title="24hr low"
          value="520.80 +1.25%"
        />
        <HeadingsItem
          imageSrc={"/images/graph.svg"}
          title="24hr volume"
          value="520.80 +1.25%"
        />
      </div>
    </section>
  );
};
