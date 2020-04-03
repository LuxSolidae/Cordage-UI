import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  text: Yup.string()
    .min(3, "Text must have at least 3 characters.")
    .max(50, "Text can't be longer than 50 characters.")
    .required("Text is required."),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Email is required."),
  phone: Yup.string()
    .min(8, "Phone must have at least 8 numbers.")
    .max(12, "Phone can' be longer than 12 characters."),
  select: Yup.string()
    .ensure()
    .required("Select is required.")
});

export const options = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' },
];

