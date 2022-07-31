import Link from "next/link";

const prioritizeImportant = (items: string[]) => {
  const prioritizeSet = new Set(["important"]);

  const newArr = items.sort((a, b) => {
    if (a.includes("important")) {
      return -1;
    }
    return +1;
  });
  return newArr; // Note that the original array has been sorted in-place
};

const OrderItem: React.FC<{
  id: number | string;
  tag: string[];
  name: string;
  reqDate: string;
}> = (props) => {
  return (
    <Link href={`/order/${props.id}`}>
      <div className="order-item">
        <div className="order-item__info">
          <h3>#{props.id}</h3>
          <h2>{props.name}</h2>
          <h4>Requested on: {props.reqDate}</h4>
        </div>
        <div className="order-item__tag">
          {prioritizeImportant(props.tag).map((tag) => {
            console.log(tag);
            return (
              <div className={`order-item__tag--item order-item__tag--${tag}`}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default OrderItem;
