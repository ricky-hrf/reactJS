import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center bg-slate-50 min-h-screen items-center flex-col">
      <h1 className="text-3xl text-red-600 font-bold">Mau ngapain Boss??</h1>
      <p className="text-2xl" >Lu udah makan..?</p>
      <p>{error.message }</p>
    </div>
  );
};

export default ErrorPage;