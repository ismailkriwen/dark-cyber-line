import { Navbar } from "@/components/navbar";
import { ProvidersContainer } from "@/components/providers";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

export const metadata: Metadata = {
  title: "Dark Cyber-Line",
  description: "Dark dyber line for hacking and cybersecurity related.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="main">
        <ProvidersContainer>
          <Navbar />
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
}
