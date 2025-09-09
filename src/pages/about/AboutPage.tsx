import myPicture from '@/assets/images/pietro-picture3.png';
import VoronoiBackground from '@/components/VoronoiBackground.tsx';
import ThemeButton from '@/components/buttons/ThemeButton';

// eslint-disable-next-line prefer-const
let isDarkTheme = true;

function AboutPage() {
    return <>
        <VoronoiBackground isDarkTheme={isDarkTheme}/>
    
        <div className='absolute right-0 my-4 mx-4'>
            <ThemeButton />
        </div>
        <div className='h-screen content-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-primary w-full border-2 border-x-0 h-full md:h-[700px] overflow-hidden">
                <div className='min-w-0 min-h-0 '> 
                    <div className='aspect-square max-w-full max-h-full m-auto'>
                        <img src={myPicture} alt='Pietro picture' className="w-full h-full rounded-full object-contain py-2"/>
                    </div>
                </div>
                <div className='col-span-1 md:col-span-1 px-4 content-center overflow-auto'>
                    <div className="font-bold text-4xl md:text-7xl text-center">Pietro Gori</div>
                    <div className="text-2xl md:text-5xl text-center">Full Stack Developer</div>
                    <div className="text-xl md:text-4xl my-3 text-center">pietro_gori@hotmail.com</div>
                    <div className="text-lg md:text-3xl space-y-3 ">
                        <div>I’m a Brazilian full stack developer with over 9 years of professional experience, both in Brazil and abroad, specializing in web development. I mainly work with JavaScript frameworks such as Angular, Vue, and React, and I also build REST APIs using Laravel and Django.</div>
                        <div>I created this website to enhance my professional visibility and as a personal lab, where I share content about programming and run experiments to improve my skills.</div>
                        <div>Outside of work, I practice Brazilian jiu-jitsu and have a passion for martial arts and combat sports. I’d be happy to help bring your project vision to life.</div>
                    </div>
                    <div className='text-xl md:text-4xl my-4'>
                        <a href='https://drive.google.com/file/d/1hvT7T2ZuFlmMfWtHSsab8qBYm955Nokb/view?usp=drive_link' target='_blank'>
                            <strong>Download Resume/CV</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AboutPage