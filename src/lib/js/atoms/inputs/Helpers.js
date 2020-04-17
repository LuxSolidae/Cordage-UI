import * as Yup from "yup";
import capas from "../../../img/products/CAPAS.svg";

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
    .required("This field is required."),
  multi: Yup.array()
    .min(2, "Pick at least 2 options")
    .of(
      Yup.object().shape({
        label: Yup.string(),
        value: Yup.string()
      })
      .nullable()
    ),
});

export const options = [
  { value: "select-1", label: "Option 1" },
  { value: "select-2", label: "Option 2" },
  { value: "select-3", label: "Option 3" },
];

export const multiOptions = [
  {
    value: "multi-1",
    label: "Lorem Ipsum",
    auxText: "example@cordage.ui",
    img: capas,
  },
  {
    value: "multi-2",
    label: "Dolor Sit",
    auxText: "example@cordage.ui",
    img: capas,
  },

  {
    value: "multi-3",
    label: "Amet Consectetur",
    auxText: "example@cordage.ui",
    img: capas,
  },
];
