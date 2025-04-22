import { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Eye, EyeOff } from "lucide-react";
import { loginSchema } from "../schemas";
import { DEV_URL } from "../constants";
import toast, { Toaster } from "react-hot-toast";
import AuthButton from "./common/AuthButton";
import Input from "./common/Input";
import WarningToast from "./common/WarningToast";
import logo from "/icons/logo.png";
import useAuth from "../hooks/useAuth";
import axios from "axios";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [storedUser, setStoredUser] = useState(null);
  const { state } = useLocation();
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const hasShownToast = useRef(false);

  // when the component mounts get the user from local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setStoredUser(user);
    }
  }, []);

  const message = state?.message || null;
  const path = state?.path || "/";

  // If a message exists and I have not shown toast then  show the toast
  useEffect(() => {
    if (message && !hasShownToast.current) {
      toast.custom(<WarningToast message={message} />);
      hasShownToast.current = true;
    }
  }, [message]);

  //Function to toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  //Function to handle login form submission
  const handleSubmit = async (values, action) => {
    try {
      const { data } = await axios.post(`${DEV_URL}/login`, values);

      /* when login is successfull update accessToken */
      action.resetForm();
      setToken(data.access_token);

      /* Show toast message and navigate to necessary path */
      toast.success("Login successful.");
      navigate(path);
    } catch (error) {

      /* 
       When an error occurs who a friendly
       error message to user inorder for him/her to take
       the right action
     */
      const errorMessage = error.response.data.msg;
      toast.custom(<WarningToast message={errorMessage} />);
    }
  };

  return (
    <section className="flex flex-col sm:flex-row min-h-screen">
      <Toaster position="top-center" />
      <article className="bg-farmImage bg-cover bg-origin-content bg-left-bottom bg-no-repeat  hidden sm:flex w-1/2 flex-col items-center gap-20">
        <h2 className="font-bold font-nunito text-white text-5xl mt-24">
          Ukulima
        </h2>

        <div className="font-nunito italic text-xl text-center max-w-80 space-y-2  text-white">
          <p>Empowering Farmers, Connecting Suppliers.</p>
          <p>-Your trusted marketplace for agricultural products and tools.</p>
        </div>
      </article>

      <section className="sm:w-1/2">
        <Link to="/" className="ml-3 pt-3 block">
          <img src={logo} alt="ukulima logo" className="w-10 h-10" />
        </Link>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-11/12 max-w-2xl mx-auto min-h-[90vh]  relative">
            <div className="text-center mb-5">
              <h3 className="text-emerald font-bold font-nunito  capitalize text-3xl">
                Welcome {storedUser ? `back ${storedUser.firstname}` : "back"}
              </h3>
              <p className="text-grey font-nunito text-base">
                Log in to your account
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <label
                htmlFor="email"
                className="text-emerald font-nunito font-bold text-lg"
              >
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email."
                icon={Mail}
                moreStyles="bg-moldGreen bg-opacity-20  border-2 border-moldGreen border-opacity-30"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-emerald font-nunito font-bold text-lg"
              >
                Password
              </label>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                icon={showPassword ? Eye : EyeOff}
                placeholder="Enter your password."
                togglePassword={togglePassword}
                moreStyles="bg-moldGreen bg-opacity-20  border-2 border-moldGreen border-opacity-30"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 space-y-4">
              <div className="text-center">
                <AuthButton action="logging in..." moreStyles="w-2/3 max-w-80">
                  Log in
                </AuthButton>
              </div>

              <div className="text-center pb-5 text-sm space-y-2">
                <p className="text-gray-400">
                  Don&apos;t have an account?
                  <Link
                    to="/signup"
                    className="text-emerald hover:underline hover:underline-offset-4"
                  >
                    &nbsp;Sign up
                  </Link>
                </p>
                <p className="text-emerald">
                  &copy;copyright {new Date().getFullYear()}, All rights
                  reserved.
                </p>
              </div>
            </div>
          </Form>
        </Formik>
      </section>
    </section>
  );
}

export default Login;
