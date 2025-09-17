// import { motion } from "motion/react"
import VoronoiBackground from "@/components/VoronoiBackground"
import AboutPage from "@/pages/about/AboutPage";
import ThemeButton from "@/components/buttons/ThemeButton";

function HomePage() {
    return <>
        <VoronoiBackground />
        <div className='absolute top-0 right-0 my-4 mx-4'>
            <ThemeButton />
        </div>
        <AboutPage />
    </>
}


export default HomePage;