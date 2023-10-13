import Modal from "components/Modal";
import { deleteCustomer } from "store/features/customers";
import withRedux from "store/withRedux";

function Card({ customer, dispatch }) {
  const fullName = `${customer?.name}  ${customer?.surname}`;

  return (
    <div className="border border-gray-900 rounded p-2 m-1 h-[150px] flex justify-between items-center">
      <h3>{fullName}</h3>
      <Modal
        openText="Delete"
        confirmText="Confirm delete"
        action={() => dispatch(deleteCustomer(customer?.id))}
      >
        Are you sure you want to delete {fullName} ?
      </Modal>
    </div>
  );
}

export default withRedux(Card);
