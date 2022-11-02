import { Menu } from "../../ui/menu/Menu";
import { AboutUs } from "./aboutUs/AboutUs";
import { Hero } from "./hero/Hero";
import { Experements } from "./experements/Experements";
import { OtherCoffeShops } from "./otherCoffeShops/OtherCoffeShops";
import { RecordCard } from "./recordCard/RecordCard";
import { Vacancy } from "./vacancy/Vacancy";
import { WeVoteFor } from "./weVoteFor/WeVoteFor";
import './main.scss';

export const Main: React.FC = () => {
  return <main className="main-page">
    <Hero />
    <AboutUs />
    <WeVoteFor />
    <OtherCoffeShops />
    <Menu className='main-page__menu'><Experements /></Menu>
    <RecordCard />
    <Vacancy />
  </main>
}