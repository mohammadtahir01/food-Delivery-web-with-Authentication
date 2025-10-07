import PizzaCard from "./pizzaCard";
import ResturentCard from "./showCard";
import SwiperNavigation from "./swiper";
import TimeInfo2 from "./timeInfo2";


function Pizza(){
    return(
        <>
        <SwiperNavigation/>
        <ResturentCard/>
        <PizzaCard/>
        <TimeInfo2/>
        </>
    )
}
export default Pizza;