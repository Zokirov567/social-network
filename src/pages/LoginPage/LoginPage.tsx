import { Link } from "react-router-dom";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
// import "./LoginPage.scss";
import { LoginWith } from "../../components/LoginWith/LoginWith";
import { AppHeading } from "../../components/Typography/AppHeading";
import { SCLoginPage } from "./LoginPage.styled";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { data } from "../../components/FollowersList/data";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormScheme = yup.object({
  useremail: yup.string().required("Обязательное поле"),
  userpassword: yup
    .string()
    .required("Введите пароль")
    .min(8, "Не менее 8 символов"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormScheme),
    defaultValues: { useremail: "", userpassword: "" },
  });

  const onLoginSubmit:SubmitHandler<ILoginForm> = () => {
console.log(data);
  }

  return (
    <SCLoginPage>
      <AppHeading headingText="Авторизация" headingType={"h1"} />

      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <AppInput type={"email"} placeholder={"Почта"} {...field} />
          )}
        />

  <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput type={"password"} placeholder={"Пароль"} {...field} />
          )}
        />
          <AppButton buttonText={"Войти"} type={"button"} />
      </form>
      <Link to="#">Забыли пароль?</Link>
      <div className="registration">
        <span>
          У вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
        </span>
        <p>Войти с помощью</p>
        <LoginWith />
      </div>
    </SCLoginPage>
  );
};
