/* eslint-disable react-hooks/exhaustive-deps */
import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { user_login } from "../../store/actions/authAction";
export function Login() {
  const dispatch = useDispatch();
  let history = useHistory();
  const { authenticate, userInfo, errorMessage, successMessage, loader } =
    useSelector((state) => state.userReducer);
  console.log(authenticate, userInfo, errorMessage, successMessage, loader);
  const form = useForm({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length === 0 ? "Please provide a strong password" : null,
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
    dispatch(user_login(form.values));
  };
  useEffect(() => {
    if (authenticate) {
      history.push("/");
    }

    if (errorMessage) {
      toast.error(errorMessage);
      dispatch({ type: "ERROR_CLEAR" });
    }
  }, [successMessage, errorMessage, authenticate]);
  return (
    <>
      <div className="register">
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "14px",
            },
          }}
        />
        <div className="register-form">
          <div className="text">
            <h1>Login</h1>
          </div>
          <div  style={{ position: 'relative' }}>
          <LoadingOverlay visible={loader}  overlayBlur={2} />
          <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
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

            <Button type="submit" mt="sm">
              Login
            </Button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
}
