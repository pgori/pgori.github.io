import myPicture from '@/assets/images/pietro-arnold-sports.jpg';
import VoronoiBackground from '@/components/VoronoiBackground';

function AboutPage() {
    return <>
        <VoronoiBackground />
        <div className="grid grid-cols-3 gap-4 font-primary">
            <div>
                <img src={myPicture} alt='Pietro picture'/>
            </div>
            <div className='col-span-2'>
                <h1 className="font-bold">Pietro Gori</h1>
                <div className="text-2xl">Full Stack Developer</div>
                <div className="text-xl my-4">pietro_gori@hotmail.com</div>
                <div>I’m a Brazilian full stack developer with over 9 years of professional experience, both in Brazil and abroad, specializing in web development. I mainly work with JavaScript frameworks such as Angular, Vue, and React, and I also build REST APIs using Laravel and Django.</div>
                <div>I created this website to enhance my professional visibility and as a personal lab, where I share content about programming and run experiments to improve my skills.</div>
                <div>Outside of work, I practice Brazilian jiu-jitsu and have a passion for martial arts and combat sports. I’d be happy to help bring your project vision to life.</div>
            </div>
        </div>
    </>
}

export default AboutPage