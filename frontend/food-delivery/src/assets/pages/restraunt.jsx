import MenuCard from "./menuCard";
import SwiperNavigation from "./swiper";
import TimeInfo from "./timeInfo";
import Map from "./map"
import Review from "./reviews";


function RestrauntMenu(){
    return(
        <>
         <SwiperNavigation/>
         <MenuCard/>
         <TimeInfo/>
         <Map/>
         <Review/>
        </>
    )
}
export default RestrauntMenu;