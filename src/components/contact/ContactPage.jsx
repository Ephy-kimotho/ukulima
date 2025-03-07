import { Formik, Form } from "formik";
import Input from "../common/Input";
import Button from "../common/Button";
import Textarea from "../common/Textarea";
import { contactFormSchema } from "../../schemas";

function ContactPage() {
  const handleSubmit = async (values, action) => {
    /* REPLACE WITH REAL API CALL FOR SIGNUP */
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });

    console.log(values);
    action.resetForm();
  };

  //JS here
  return (
    <div className="bg-[#f1f3f5]">
      <div className="bg-mobileContact sm:bg-contact shadow-overlay min-h-screen bg-no-repeat bg-center  bg-cover flex flex-col  justify-center pl-4 md:pl-8  space-y-8">
        <h1 className="text-white font-bold text-5xl font-nunito  tracking-wide text-balance">
          Do you have any questions?
        </h1>
        <p className="text-white font-regular text-lg md:text-xl font-nunito max-w-80 md:max-w-2xl text-balance tracking-wide">
        We&apos;re here to help! Reach out to us for inquiries, support, or feedback, and we&apos;ll get back to you as soon as possible.
        </p>
        <br />
      </div>

      <div className=" max-w-4xl mx-auto pb-9">
        <p className="text-mint text-4xl font-bold text-center mt-[4.5rem] font-nunito">
          CONTACT FORM
        </p>
        <div className="w-[190px] h-[5px] bg-mint rounded-lg mx-auto mt-2"></div>

        <Formik
          initialValues={{
            firstName: "",
            email: "",
            message: "",
          }}
          validationSchema={contactFormSchema}
          onSubmit={handleSubmit}
        >
          <Form className="bg-zinc-300 p-8 rounded-3xl m-8 w-11/12 mx-auto">
            <Input
              type="text"
              name="firstName"
              placeholder="Enter your first name."
              moreStyles="bg-white bg-opacity-100 text-night border-2 border-moldGreen border-opacity-50 pl-4"
            />
            <Input
              type="email"
              name="email"
              placeholder="Enter your email."
              moreStyles="bg-white bg-opacity-100 text-night border-2 border-moldGreen border-opacity-50 pl-4"
            />

            <Textarea name="message" placeholder="Enter your message" />
            <div className="text-center">
              <Button
                type="submit"
                moreStyles="bg-mint text-white px-14 py-3 rounded-lg font-bold active:scale-95 hover:bg-emerald text-lg capitalize"
              >
                Send message
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ContactPage;
