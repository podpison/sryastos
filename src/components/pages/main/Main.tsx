import { Hero } from "./hero/Hero"
import { OtherCoffeShops } from "./otherCoffeShops/OtherCoffeShops"
import { WeVoteFor } from "./weVoteFor/WeVoteFor"

export const Main: React.FC = () => {
    return <section className="main-page">
        <Hero />
        <WeVoteFor />
        <OtherCoffeShops />
    </section>
}