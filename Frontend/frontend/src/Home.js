import { Navigate } from "react-router-dom";

export default function Home({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <div className="fs-1">WELCOME</div>;
}
