const backendUrl = "/api";

const Request = async (url, options) => {
  return fetch(url, options).then((res) => res.json());
};

export function getCustomers(page) {
  return Request(`${backendUrl}/customers?page=${page}`);
}

export function deleteCustomer(id) {
  return Request(`${backendUrl}/customers`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
}
