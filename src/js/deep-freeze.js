const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi",
    gali: {
      total: 2,
    },
  },
};

// Object.freeze(employee);

console.log(employee);

employee.age = 30;
employee.designation = "Sr. Developer";
employee.address.city = "New Delhi";

console.log(employee);

console.log(employee);

function DeepFreeze(val) {
  if (typeof val !== "object" || val === null) {
    return val;
  }
  const getAllEnumAndNonEnumProp = Object.getOwnPropertyNames(val);
  for (let key of getAllEnumAndNonEnumProp) {
    DeepFreeze(val[key]);
  }
  Object.freeze(val);
}

DeepFreeze(employee);

employee.address.city = "Dilli";
employee.address.street = "Dilli 6";
employee.address.gali = 6;
console.log(employee);

export default DeepFreeze;
