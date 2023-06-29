import React, { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";

function CoustomeSpinner({ path = "login" }) {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="flex items-center">
          <svg
            className="animate-spin h-10 w-10 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-4a4 4 0 11-8 0v4.291z"
            />
          </svg>
          <span className="ml-2">Loading...</span>
        </div>
      </div>
    </Layout>
  );
}

export default CoustomeSpinner;
