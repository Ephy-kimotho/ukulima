import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[^\d]+$/, "First name should not have numerical digits")
    .min(3, "Should be atleast 3 characters")
    .required("Required*"),
  lastName: Yup.string()
    .matches(/^[^\d]+$/, "Last name should not have numerical digits")
    .min(4, "Should be atleast 4 characters")
    .required("Required*"),
  email: Yup.string().email("Invalid email address").required("Required*"),
  phone: Yup.string()
    .matches(/^\S*$/, "Phone number must not contain whitespaces")
    .matches(
      /^\+?\d+$/,
      "Phone number can only contain digits or start with a +"
    )
    .matches(/^\+?\d{10,}$/, "Phone number must be at least 10 digits long")
    .required("Required*"),
  password: Yup.string()
    .matches(/^\S*$/, "Password should not have white spaces.")
    .matches(/[A-Z]+/, "Password must have atleast one uppercase letter")
    .matches(/\d+/, "Password must have atleast one number")
    .min(8, "Password must be more than 8 characters.")
    .required("Required*"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required*"),
  password: Yup.string().required("Required*"),
});

export const contactFormSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[^\d]+$/, "First name should not have numerical digits")
    .min(3, "Should be atleast 3 characters")
    .required("Required*"),
  email: Yup.string().email("Invalid email address").required("Required*"),
  message: Yup.string()
    .min(10, "Should be atleast 10 characters.")
    .required("Required*"),
});
