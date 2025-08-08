// import { motion } from "motion/react"
import VoronoiBackground from "../../components/VoronoiBackground"

function HomePage() {
    // return <h1 className="text-3xl font-bold text-blue-800">Hello there, you are at the home page.</h1>
    return <>
        <VoronoiBackground />
        <main className="relative z-10">
            <h1 className="text-white text-4xl p-8">Pietro Gori</h1>
        </main>
    </>
}

// function Rotate() {
//     return (
//         <motion.div
//             style={box}
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1 }}
//         />
//     )
// }

// const box = {
//     width: 100,
//     height: 100,
//     backgroundColor: "#ff0088",
//     borderRadius: 5,
// }

export default HomePage;