import { SignIn } from "../auth/Login";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-black">
      <SignIn />
    </div>
  );
};

export default LoginPage;
