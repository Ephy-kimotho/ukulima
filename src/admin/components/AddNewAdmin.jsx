import { Formik, Form } from "formik";
import { useState } from "react";
import { User, Phone, Mail, Eye, EyeOff } from "lucide-react";
import { addNewAdminSchema } from "../../schemas";
import { DEV_URL } from "../../constants";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/common/Input";
import AuthButton from "../../components/common/AuthButton";
import axios from "axios";

function AddNewAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const { token } = useAuth();

  // Function to toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  // Function to add a new admin
  const handleSubmit = async (values, actions) => {
    try {
      const res = await axios.post(`${DEV_URL}/register/staff`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      actions.resetForm();

      const message = res.data.msg;
      toast.success(message);
    } catch (error) {
      console.error("Error adding new admin: ", error);
      toast.error("Failed, please try again");
    }
  };

  const additionalInputStyles =
    "bg-moldGreen bg-opacity-20  border-2 border-moldGreen border-opacity-30";

  return (
    <section className="px-4 py-24 md:py-7">
      <div className="bg-white min-h-screen rounded-lg shadow-md p-4">
        <h2 className="text-[#1E2025] font-bold font-nunito text-xl md:text-3xl lg:text-4xl capitalize text-center mb-4">
          Add new admin
        </h2>

        <Formik
          initialValues={{
            ukulima_superuser_username: "",
            ukulima_superuser_password: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
          }}
          validationSchema={addNewAdminSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-11/12 mx-auto">
            {/* Super user admin credentials section */}
            <section>
              <h3 className="text-[#0D141C] font-semibold text-2xl capitalize my-4">
                Your credentials
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  type="text"
                  name="ukulima_superuser_username"
                  placeholder="Username"
                  icon={User}
                  moreStyles={additionalInputStyles}
                />

                <Input
                  type={showPassword ? "text" : "password"}
                  name="ukulima_superuser_password"
                  placeholder="Password"
                  icon={showPassword ? Eye : EyeOff}
                  togglePassword={togglePassword}
                  moreStyles={additionalInputStyles}
                />
              </div>
            </section>

            {/* New admin credentials section */}
            <section>
              <h3 className="text-[#0D141C] font-semibold text-2xl capitalize my-4">
                New admin credentials
              </h3>
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

            </section>

            {/* Save admin button */}
              <div className="text-center my-6">
                <AuthButton
                  moreStyles="w-2/3 max-w-80"
                  action="adding new admin..."
                >
                  Save admin
                </AuthButton>
              </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default AddNewAdmin;
