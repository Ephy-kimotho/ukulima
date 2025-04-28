/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";
import { checkoutSchema } from "../../schemas";
import { X } from "lucide-react";
import { DEV_URL } from "../../constants";
import toast from "react-hot-toast";
import Button from "../common/Button";
import AuthButton from "../common/AuthButton";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

function Checkout({ toggleCheckout }) {
  const { token } = useAuth();

  const initiatePayment = async (orderId) => {
    try {
      const { data } = await axios.post(
        `${DEV_URL}/paystack/initiate_payment/${orderId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(data);
      
      // Redirect to Paystack checkout
      window.location.href = data.url;
    } catch (error) {
      console.error("Error initiating payment: ", error);
    }
  };

  const handlePayment = async (values, action) => {
    try {
      const { data } = await axios.post(`${DEV_URL}/create_order`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data);

      // show success message to the user
      toast.success(data.msg);

      // initiate payment for the order
      initiatePayment(data.orderID);
      action.resetForm();
    } catch (error) {
      console.error("Error initiating payment: ", error);
      toast.error("Failed, please try again.");
    }
  };

  return (
    <section className="fixed z-[999] flex items-center justify-center  inset-0 shadow-overlay">
      <div className="w-[90%] max-w-2xl   mx-auto bg-white rounded-2xl p-4">
        <div className="mb-5">
          <Button action={toggleCheckout}>
            <X size={30} color="#ED2939" />
          </Button>
          <h3 className="text-emerald font-bold text-2xl">Shipment Details</h3>
        </div>

        <Formik
          initialValues={{
            delivery_address: "",
          }}
          validationSchema={checkoutSchema}
          onSubmit={handlePayment}
        >
          <Form>
            <div className="mb-6">
              <label
                htmlFor="destination"
                className="text-black text-xl font-bold block mb-2"
              >
                Destination
              </label>
              <Field type="text" name="delivery_address">
                {({ field, meta }) => {
                  return (
                    <div>
                      <input
                        placeholder="i.e Nairobi..."
                        {...field}
                        className={`border-2 ${
                          meta.touched && meta.error
                            ? "border-red-400"
                            : "border-transparent"
                        } bg-[#EAEAEA] text-base text-black/70 py-3 pl-4 rounded-lg placeholder:text-night/60 w-full`}
                      />
                      {meta.touched && meta.error && (
                        <p className="text-red-400 ml-4">{meta.error}</p>
                      )}
                    </div>
                  );
                }}
              </Field>
            </div>

            <div className="flex justify-between pt-5 mb-5">
              <AuthButton
                moreStyles="rounded-4xl text-xl py-2 px-8 md:px-16"
                action="placing order "
              >
                Confirm
              </AuthButton>
              <Button
                action={toggleCheckout}
                moreStyles="bg-[#E54040] hover:bg-[#ED2939] border-2 border-[#E54040] rounded-full text-xl text-white font-bold py-2 px-10 md:px-16"
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default Checkout;
