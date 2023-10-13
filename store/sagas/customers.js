import { call, put, select, throttle } from "redux-saga/effects";
import {
  getCustomers,
  setCustomers,
  setError,
  deleteCustomer,
  reset,
} from "store/features/customers";
import {
  getCustomers as getCustomersService,
  deleteCustomer as deleteCustomerService,
} from "services";

const customersSelector = (state) => state.customers.customers;
const pageSelector = (state) => state.customers.page;

function* getCustomersSaga() {
  try {
    const page = yield select(pageSelector);
    const result = yield call(() => getCustomersService(page));

    if (result?.data) {
      const customers = yield select(customersSelector);
      yield put(
        setCustomers({
          customers: [...customers, ...result.data],
          total: result?.total,
        })
      );
    }
  } catch (e) {
    yield put(setError("Couldn't fetch customers"));
    console.error("Error in fetch customers", e);
  }
}

function* deleteCustomerSaga(action) {
  try {
    yield call(() => deleteCustomerService(action?.payload));
    yield put(reset());
    yield put(getCustomers());
  } catch (e) {
    yield put(setError("Couldn't delete customer"));
    console.error("Error in delete customer", e);
  }
}

export default function* saga() {
  yield throttle(2000, getCustomers, getCustomersSaga);
  yield throttle(500, deleteCustomer, deleteCustomerSaga);
}
