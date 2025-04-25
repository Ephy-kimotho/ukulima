import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstname: Yup.string()
    .matches(/^[^\d]+$/, "First name should not have any numerical digits")
    .min(3, "Should be atleast 3 characters")
    .required("Required*"),
  lastname: Yup.string()
    .matches(/^[^\d]+$/, "Last name should not have any numerical digits")
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
    .min(8, "Password must be atleast 8 characters.")
    .required("Required*"),
});

export const addNewAdminSchema = Yup.object({
  ukulima_superuser_username: Yup.string()
    .matches(/^[^\d]+$/, "Username should not have any numerical digits")
    .min(3, "Should be atleast 3 characters")
    .required("Required*"),
  ukulima_superuser_password: Yup.string().required("Required*"),
  firstname: Yup.string()
    .matches(/^[^\d]+$/, "First name should not have numerical digits")
    .min(3, "Should be atleast 3 characters")
    .required("Required*"),
  lastname: Yup.string()
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
    .min(8, "Password must be atleast 8 characters.")
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

export const checkoutSchema = Yup.object({
  delivery_address: Yup.string()
    .min(4, "Should be more than 4 characters.")
    .required("Required*"),
});

export const addProductModalSchema = Yup.object({
  productName: Yup.string()
    .matches(/^[^\d]+$/, "Product name must not contain any numbers")
    .min(3, "Product name should be atleast 3 characters")
    .required("Required"),
  price: Yup.number()
    .positive("Price must be non-zero and positive")
    .required("Required"),
  quantity: Yup.number()
    .positive("Quantity must be non-zero and positive")
    .required("Required"),
  categoryId: Yup.string().required("Required"),
  productDescription: Yup.string()
    .min(10, "Description should be at least 10 characters")
    .required("Required"),
  file: Yup.mixed()
    .required("Required")
    .test(
      "fileSize",
      "Image is too large",
      (value) => value && value.size <= 2 * 1024 * 1024
    ),
});

export const addCategoryModalSchema = Yup.object({
  name: Yup.string()
    .matches(/^[^\d]+$/, "Product name must not contain any numbers")
    .min(4, "Product name should be atleast 4 characters")
    .required("Required"),
  file: Yup.mixed()
    .required("Required")
    .test(
      "fileSize",
      "Image is too large",
      (value) => value && value.size <= 2 * 1024 * 1024
    ),
});
