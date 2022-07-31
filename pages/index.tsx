import type { NextPage } from "next";
import OrderItem from "../components/order/order-item";
import Overview from "../components/overview/overview";
import cuid from "cuid";

const item_list = [
  {
    tag: ["shipping"],
    name: "Crystal Park",
    id: 12,
    reqDate: "2022-07-30",
  },
  {
    tag: ["processing"],
    name: "Central Pattaya",
    id: 13,

    reqDate: "2022-07-31",
  },
  {
    tag: ["important", "processing"],
    name: "Central Latprao",
    id: 14,
    reqDate: "2022-08-01",
  },
  {
    tag: ["pending"],
    name: "Central Latprao",
    id: 15,
    reqDate: "2022-08-01",
  },
];

const Home: NextPage = () => {
  const items = item_list;
  return (
    <div className="home">
      <div className="home__overview">
        <Overview icon="bxs-time-five" title="Pending" amount={1} />
        <Overview icon="bxs-package" title="Processing" amount={2} />
        <Overview icon="bxs-truck" title="Shipping" amount={1} />
        {/* <Overview icon="bxs-truck" title="Processing" amount={320} /> */}
      </div>

      <div className="home__item-list">
        <h3 className="home__item-list--title">Items</h3>
        {items.map((item) => {
          return (
            <OrderItem
              tag={item.tag}
              name={item.name}
              id={item.id}
              reqDate={new Date(item.reqDate).toLocaleDateString("en-UK", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
