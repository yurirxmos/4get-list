import "./Home.css";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <List />
      <Footer />
    </div>
  );
}
