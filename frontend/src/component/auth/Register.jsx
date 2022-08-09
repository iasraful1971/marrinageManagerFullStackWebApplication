/* eslint-disable react-hooks/exhaustive-deps */
import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { user_register } from "../../store/actions/authAction";

export function Register() {
  let history = useHistory();

  const dispatch = useDispatch();
  const { authenticate, userInfo, errorMessage, successMessage, loader } =
    useSelector((state) => state.userReducer);
    console.log(authenticate , userInfo , errorMessage , successMessage , loader);
  const form = useForm({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length === 0 ? "Please provide a strong password" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      showNotification({ message: "Please fill name field", color: "red" });
    } else if (errors.email) {
      showNotification({
        message: "Please provide a valid email",
        color: "red",
      });
    }
  };

  const handleSubmit = (e) => {
    dispatch(user_register(form.values));
  };

   useEffect(() => {
    if(authenticate){
      history.push("/");
    }
   
    if(errorMessage){
      toast.error(errorMessage)
      dispatch({type :"ERROR_CLEAR"})
    }
  }, [successMessage , errorMessage , authenticate])

  return (
    <>
      <div className="register">
      
      
      <Toaster position="bottom-right" reverseOrder={false} toastOptions={{style:{
          fontSize:'14px'
        }}} />
        <div className="register-form">
          <div className="text">
            <h1>Register</h1>
          </div>
          <div  style={{ position: 'relative' }}>
          <LoadingOverlay visible={loader}  overlayBlur={2} />
          <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
            <TextInput
              label="Name"
              placeholder="Name"
              {...form.getInputProps("name")}
            />
            <TextInput
              mt="sm"
              label="Email"
              placeholder="Email"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              mt="sm"
              label="Password"
              placeholder="Password"
              {...form.getInputProps("password")}
            />

            <PasswordInput
              mt="sm"
              label="Confirm password"
              placeholder="Confirm password"
              {...form.getInputProps("confirmPassword")}
            />
            <Button type="submit" mt="sm">
              Register
            </Button>
          </form>
          
          </div>
        </div>
      </div>
    </>
  );
}
