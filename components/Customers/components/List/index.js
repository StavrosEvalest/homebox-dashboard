import { useSelector } from "react-redux";
import withRedux from "store/withRedux";
import Card from "./components/Card";

function Customers() {
  const { customers } = useSelector((state) => state?.customers);

  return customers?.map((customer) => (
    <Card customer={customer} key={customer?.id} />
  ));
}

export default withRedux(Customers);
