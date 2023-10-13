import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex-auto max-w-screen-xl w-screen mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}
