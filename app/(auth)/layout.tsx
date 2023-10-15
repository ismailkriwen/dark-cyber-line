import { ProvidersContainer } from "@/components/providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dark Cyber-Line | Auth",
  description: "Dark dyber line for hacking and cybersecurity related.",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="sign-in">
        <ProvidersContainer>
          <main className="container">{children}</main>
        </ProvidersContainer>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          rtl={false}
          draggable
        />
      </body>
    </html>
  );
};

export default AuthLayout;
