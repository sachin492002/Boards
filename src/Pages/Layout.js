import Navbar from "../Components/Navbar";
import DashBoard from "./DashBoard";

export default function Layout(){

    return(
        <div className='w-full'>
            <Navbar/>
            <DashBoard/>
        </div>
    )
}
