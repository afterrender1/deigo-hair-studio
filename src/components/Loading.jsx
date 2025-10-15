import React from "react";

export default function LoadingSpinner({ size = "w-10 h-10" }) {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${size} border-3  border-white border-t-transparent rounded-full animate-spin`}
        role="status"
      ></div>
    </div>
  );
}
