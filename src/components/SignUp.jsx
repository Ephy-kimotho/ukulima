import { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { User, Phone, Mail, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { signUpSchema } from "../schemas";
import { DEV_URL } from "../constants";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Input from "./common/Input";
import AuthButton from "./common/AuthButton";
import ukulimaLogo from "/icons/logo.png";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  // Function to toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  //Function to handle Form Submission
  const handleSubmit = async (values, action) => {
    const {
      data: { User },
    } = await axios.post(`${DEV_URL}/register`, values);
    setUser(User);
    action.resetForm();
    toast.success("Account created successfully.");
    navigate("/login");
  };

  const additionalInputStyles =
    "bg-moldGreen bg-opacity-20  border-2 border-moldGreen border-opacity-30";

  return (
    <section className="">
      <Toaster position="top-center" />
      <Link to="/" className="pt-3 mt-2 block">
        <img src={ukulimaLogo} alt="Ukulima logo" className="ml-5 w-10 h-10" />
      </Link>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          password: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-11/12 max-w-2xl mx-auto" autoComplete="off">
          <div className="text-center mb-5">
            <h2 className="text-emerald font-bold font-nunito text-3xl">
              Create Account
            </h2>
            <p className="text-grey font-nunito text-base">Register here</p>
          </div>

          <div className="grid sm:grid-cols-2 sm:gap-4">
            <Input
              type="text"
              name="firstname"
              placeholder="First Name"
              icon={User}
              moreStyles={additionalInputStyles}
            />

            <Input
              type="text"
              name="lastname"
              placeholder="Last Name"
              icon={User}
              moreStyles={additionalInputStyles}
            />
          </div>

          <Input
            type="email"
            name="email"
            placeholder="Email"
            icon={Mail}
            moreStyles={additionalInputStyles}
          />

          <Input
            type="text"
            name="phone"
            placeholder="Phone Number"
            icon={Phone}
            moreStyles={additionalInputStyles}
          />

          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            icon={showPassword ? Eye : EyeOff}
            togglePassword={togglePassword}
            moreStyles={additionalInputStyles}
          />

          <div className="text-center my-6">
            <AuthButton moreStyles="w-2/3 max-w-80" action="Signing up...">
              Sign up
            </AuthButton>
          </div>

          <div className="text-center pb-5 text-sm">
            <p className="text-gray-400">
              Already have an account?
              <Link
                to="/login"
                className="text-emerald hover:underline hover:underline-offset-4"
              >
                &nbsp;Login
              </Link>
            </p>
            <p className="text-emerald">
              &copy;copyright {new Date().getFullYear()}, All rights reserved.
            </p>
          </div>
        </Form>
      </Formik>
    </section>
  );
}

export default SignUp;
