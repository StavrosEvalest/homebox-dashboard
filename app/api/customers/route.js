const pageSize = 10;
let customers = [
  { id: 1, name: "John", surname: "Doe" },
  { id: 2, name: "Jane", surname: "Smith" },
  { id: 3, name: "Michael", surname: "Johnson" },
  { id: 4, name: "Emily", surname: "Brown" },
  { id: 5, name: "William", surname: "Davis" },
  { id: 6, name: "Sarah", surname: "Wilson" },
  { id: 7, name: "James", surname: "Jones" },
  { id: 8, name: "Olivia", surname: "Taylor" },
  { id: 9, name: "Robert", surname: "White" },
  { id: 10, name: "Linda", surname: "Lee" },
  { id: 11, name: "David", surname: "Hall" },
  { id: 12, name: "Sophia", surname: "Martinez" },
  { id: 13, name: "Joseph", surname: "Anderson" },
  { id: 14, name: "Mia", surname: "Thomas" },
  { id: 15, name: "Charles", surname: "Harris" },
  { id: 16, name: "Emma", surname: "Clark" },
  { id: 17, name: "Thomas", surname: "Lewis" },
  { id: 18, name: "Olivia", surname: "Turner" },
  { id: 19, name: "Daniel", surname: "Walker" },
  { id: 20, name: "Patricia", surname: "Wright" },
  { id: 21, name: "Matthew", surname: "King" },
  { id: 22, name: "Samantha", surname: "Scott" },
  { id: 23, name: "Christopher", surname: "Green" },
  { id: 24, name: "Ava", surname: "Baker" },
  { id: 25, name: "Andrew", surname: "Adams" },
  { id: 26, name: "Natalie", surname: "Evans" },
  { id: 27, name: "Joshua", surname: "Parker" },
  { id: 28, name: "Madison", surname: "Cook" },
  { id: 29, name: "Anthony", surname: "Murphy" },
  { id: 30, name: "Ella", surname: "Rogers" },
  { id: 31, name: "Ryan", surname: "Cooper" },
  { id: 32, name: "Avery", surname: "Morgan" },
  { id: 33, name: "David", surname: "Peterson" },
  { id: 34, name: "Grace", surname: "Morris" },
  { id: 35, name: "Joseph", surname: "Stewart" },
  { id: 36, name: "Sophia", surname: "Reed" },
  { id: 37, name: "Matthew", surname: "Phillips" },
  { id: 38, name: "Lily", surname: "Gonzalez" },
  { id: 39, name: "Christopher", surname: "Hernandez" },
  { id: 40, name: "Taylor", surname: "Adams" },
  { id: 41, name: "Oliver", surname: "Turner" },
  { id: 42, name: "Ella", surname: "Ross" },
  { id: 43, name: "Andrew", surname: "Ward" },
  { id: 44, name: "Isabella", surname: "Young" },
  { id: 45, name: "Daniel", surname: "Carter" },
  { id: 46, name: "Mia", surname: "Smith" },
  { id: 47, name: "Jacob", surname: "Foster" },
  { id: 48, name: "Lily", surname: "Hall" },
  { id: 49, name: "Olivia", surname: "Perez" },
  { id: 50, name: "Ethan", surname: "Howard" },
  { id: 51, name: "Sophia", surname: "Moore" },
  { id: 52, name: "Michael", surname: "Cox" },
  { id: 53, name: "Emily", surname: "Richardson" },
  { id: 54, name: "Benjamin", surname: "Wright" },
  { id: 55, name: "Harper", surname: "Roberts" },
  { id: 56, name: "Matthew", surname: "Bell" },
  { id: 57, name: "Charlotte", surname: "Garcia" },
  { id: 58, name: "William", surname: "Lewis" },
  { id: 59, name: "Amelia", surname: "Thomas" },
  { id: 60, name: "Alexander", surname: "Wilson" },
];

export async function GET(req) {
  const url = new URL(req.url);
  const page = url.searchParams.get("page");
  const from = (page - 1) * pageSize;
  const to = page * pageSize;

  return new Response(
    JSON.stringify({
      total: customers?.length,
      data: customers.slice(from, to),
    })
  );
}

export async function DELETE(req) {
  const { id } = await req.json();
  customers = customers.filter((d) => d.id !== id);

  return new Response(JSON.stringify({ message: "Customer deleted" }));
}
