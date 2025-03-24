/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";
import { checkoutSchema } from "../../schemas";
import { X } from "lucide-react";
import Button from "../common/Button";
import AuthButton from "../common/AuthButton";

const initialValues = {
  destination: "",
  phone: "",
};

function Checkout({ toggleCheckout }) {
  const handlePayment = (values, action) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <section className="fixed z-[999] flex items-center justify-center  inset-0 shadow-overlay">
      <div className="w-[90%] max-w-2xl   mx-auto bg-white rounded-2xl p-4">
        <div className="mb-5">
          <Button action={toggleCheckout}>
            <X size={30} color="#ED2939" />
          </Button>
          <h3 className="text-emerald font-bold text-2xl">
            Payment and Shipment Details
          </h3>
        </div>

        <Formik
          initialValues={initialValues}
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
              <Field type="text" name="destination">
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

            <div className="mb-12">
              <label
                htmlFor="destination"
                className="text-black text-xl font-bold block mb-2"
              >
                Phone
              </label>
              <Field type="text" name="phone">
                {({ field, meta }) => {
                  return (
                    <div>
                      <input
                        {...field}
                        placeholder="07xxx"
                        className={`border-2 ${
                          meta.touched && meta.error
                            ? "border-red-400"
                            : "border-transparent"
                        } bg-[#EAEAEA] text-base text-black/70  py-3 pl-4 rounded-lg  placeholder:text-night/60 w-full`}
                      />
                      {meta.touched && meta.error && (
                        <p className="text-red-400 ml-4">{meta.error}</p>
                      )}
                    </div>
                  );
                }}
              </Field>
            </div>

            <div className="flex justify-between mb-5">
              <AuthButton moreStyles="rounded-4xl text-xl py-2 px-8 md:px-16">
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
