import Header from "./components/Header";
import Intro from "./components/main/Intro";
import Stats from "./components/main/Stats";
import style from "./components/main/Stats.module.scss"
import {statistics} from "../src/helpers/stats.data"
import Business from "./components/main/Business";
import Billing from "./components/main/Billing";
import Card from "./components/main/Card";
import People from "./components/main/People";
import Company from "./components/main/Company";
import "./global.scss"
import Try from "./components/main/Try";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header/>
      <main>
          <Intro/>
          <div className={style.stats__row}>
              {statistics.map((stat) => {
              return <Stats key={stat.id} number = {stat.number} text = {stat.text}/>
              })}
          </div>
          <Business/>
          <Billing/>
          <Card/>
          <People/>
          <Company/>
          <Try/>
      </main>
      <Footer/>
     

    </div>
  );
}

export default App;
