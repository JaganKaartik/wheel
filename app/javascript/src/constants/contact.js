import * as yup from "yup";

export const CONTACTS = [
  {
    id: 1,
    name: "Neeraj Singh",
    email: "neeraj@email.com",
    number: "123456789",
    department: "Engineering",
    basecamp: false,
  },
  {
    id: 2,
    name: "Vinay Chandran",
    email: "vinay@email.com",
    number: "123456789",
    department: "Engineering",
    basecamp: false,
  },
  {
    id: 3,
    name: "Jagan Kaartik",
    email: "jagan@email.com",
    number: "123456789",
    department: "Engineering",
    basecamp: false,
  },
];

export const SORT_BY_OPTIONS = [
  { label: "Age", value: "age" },
  { label: "Name", value: "name" },
];

export const NEW_CONTACT_VALIDATION_SCHEMA = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  number: yup.string().required("Contact Number is required"),
  department: yup.object().required("Department is required"),
});

export const NEW_CONTACT_INITIAL_VALUES = {
  name: "",
  email: "",
  number: "",
  department: "",
};

export const DEPARTMENT_OPTIONS = [
  { label: "Engineering", value: "Engineering" },
  { label: "Marketing", value: "Marketing" },
  { label: "HR", value: "HR" },
  { label: "QA", value: "QA" },
];
