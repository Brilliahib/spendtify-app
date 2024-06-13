import InputForm from "@/components/atoms/InputForm/page";
import GoogleForm from "@/components/atoms/GoogleAuth/page";
import PasswordInputForm from "@/components/atoms/PasswordInputForm/page";
import Button from "@/components/atoms/Button/page";

export default function Form() {
  return (
    <>
      <div className="flex flex-col items-center w-full justify-center h-screen">
        <div className="flex flex-col gap-y-4 mb-4 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center text-foreground mb-4">
            Spendtify
          </h1>
          <h2 className="text-xl font-semibold">
            Free financial assistant ready to help you at any time
          </h2>
          <p className="text-muted-foreground font-semibold text-md">
            Try it out now!
          </p>
          <GoogleForm />
          <span className="text-center">OR</span>
        </div>
        <form className="flex flex-col gap-y-4 w-full max-w-sm mb-4">
          <InputForm>Email</InputForm>
          <PasswordInputForm>Password</PasswordInputForm>
          <Button>Login</Button>
        </form>
        <p className="text-white text-sm">
          Don't have an account?{" "}
          <a href="" className="underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
}
