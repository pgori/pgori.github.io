import myPicture from '@/assets/images/pietro-picture.png';
import { useGlobal } from '@/contexts/useGlobal';

function AboutPage() {
    const { isDarkTheme } = useGlobal();

    return <>
        <div className={'h-screen content-center mt-[80px] md:mt-0 ' + (isDarkTheme ? 'text-matrix': '')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full border-2 border-x-0  md:h-[700px] ">
                <div className='min-w-0 min-h-0 '> 
                    <div className='aspect-square max-w-full max-h-full m-auto'>
                        <img src={myPicture} alt='Pietro picture' className="w-full h-full rounded-full object-contain py-2"/>
                    </div>
                </div>
                <div className='col-span-1 md:col-span-1 px-4 content-center '>
                    <div className="font-bold text-4xl md:text-7xl text-center">Pietro Gori</div>
                    <div className="text-2xl md:text-5xl text-center">Full Stack Developer</div>
                    <div className="text-xl md:text-4xl my-3 text-center">pietro_gori@hotmail.com</div>
                    <div className="text-lg md:text-3xl space-y-3 ">
                        <div>I'm a Brazilian full-stack developer with over 9 years of hands-on experience in web development, spanning projects in Brazil and internationally. Beyond tech, I serve as a Judicial Assistant and occasionally consult as a digital forensics expert.</div>
                        <div>My toolkit includes JavaScript frameworks like Angular, Vue, and React, plus building robust REST APIs with Laravel and Django. This site is my professional showcase and personal playground, where I share programming insights here and experiment to sharpen my edge.</div>
                        <div>When I'm not coding, you'll find me on the mats practicing Brazilian jiu-jitsu, fueled by a lifelong passion for martial arts and combat sports. I’d be happy to help bring your project vision to life.</div>
                    </div>
                    <div className='text-xl md:text-4xl my-4'>
                        <a href='https://drive.google.com/file/d/1E5A_kcNHEbg_NxhiGCG_SjFoOOPCqOx_/view?usp=drive_link' target='_blank'>
                            <strong>Download Resume/CV</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AboutPage