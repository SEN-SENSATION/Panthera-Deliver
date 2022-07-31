import { useRouter } from "next/router";

const Order = () => {
  const router = useRouter();
  return (
    <>
      <h3>Order #{router.query.id}</h3>
    </>
  );
};

export default Order;
