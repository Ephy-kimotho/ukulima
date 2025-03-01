import { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import AuthButton from "./common/AuthButton";
import Input from "./common/Input";
import { Mail, Eye, EyeOff } from "lucide-react";
import { loginSchema } from "../schemas";
import logo from "/icons/logo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  //Function to toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  //Function to handle form submission
  const handleSubmit = async (values, action) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });

    console.log(values);
    action.resetForm();
  };

  return (
    <section className="flex flex-col sm:flex-row min-h-screen">
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
              <h3 className="text-emerald font-bold font-nunito text-3xl">
                Welcome back
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
