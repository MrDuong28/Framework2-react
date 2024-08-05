import React from "react";

type Props = {
  children: React.ReactNode;
};
const PrivateRouter = ({ children }: Props) => {
  const user = sessionStorage.getItem("user");
  if (user) {
    return <>{children}</>;
  } else {
    return (
      <>
        <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundColor: "red",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-transparent opacity-70"></div>
          <div className="relative text-center p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/30">
            <p className="text-white text-2xl font-semibold mb-4 animate-bounce">
              Bạn không có quyền truy cập
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default PrivateRouter;
