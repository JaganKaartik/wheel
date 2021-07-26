export const NOTES = [
  {
    id: 1,
    title: "Change support email",
    description: "forward all internal mails test mails test mails",
    tag: { message: "Internal", color: "blue" },
    createdDate: new Date().toDateString(),
    dueDate: "",
    contact: "Neeraj Singh",
  },
  {
    id: 2,
    title: "Feedback",
    description: "Feedback v1.0",
    tag: { message: "Agile Workflow", color: "green" },
    createdDate: "Jul 22, 2021",
    dueDate: "Jul 22, 2021",
    contact: "Vinay C",
  },
  {
    id: 3,
    title: "Feedback Hover",
    description: "Feedback v2.0 feedback test",
    tag: { message: "Bug", color: "red" },
    createdDate: new Date().toDateString(),
    dueDate: "",
    contact: "Charlie Smith",
  },
];

export const SORT_BY_OPTIONS = [
  { label: "Name", value: "name" },
  { label: "Age", value: "age" },
];

export const TAG_OPTIONS = [
  { label: "Internal", value: "Internal" },
  { label: "Agile Workflow", value: "Agile Workflow" },
  { label: "Bug", value: "Bug" },
];

export const ASSIGN_CONTACT_OPTIONS = [
  { label: "Karthik Menon", value: "Karthik Menon" },
  { label: "Jagan Kaartik", value: "Jagan Kaartik" },
  { label: "Neeraj Singh", value: "Neeraj Singh" },
];
