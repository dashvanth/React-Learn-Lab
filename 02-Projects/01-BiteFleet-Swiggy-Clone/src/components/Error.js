import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <h2>
        This is Error page. Status : {err.status} {err.statusText}
      </h2>
      <h3>Please Enter valid page name or return to homepage.</h3>
    </div>
  );
};
export default Error;
