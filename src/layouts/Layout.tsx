import { Outlet } from "react-router-dom";
import ThemeButton from "@/components/buttons/ThemeButton";
import TopNavBar from "@/components/TopNavBar";
import VoronoiBackground from "@/components/VoronoiBackground";

export default function Layout() {
    return <>
        <VoronoiBackground />
        <div className='absolute top-0 right-0 my-4 mx-4 font-primary'>
            <TopNavBar />
            <ThemeButton />
        </div>

        <div className="font-primary">
            <Outlet />
        </div>
    </>
}