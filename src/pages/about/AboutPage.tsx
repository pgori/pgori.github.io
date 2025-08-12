import myPicture from '@/assets/images/pietro-arnold-sports.jpg';

function AboutPage() {
    return <>
        <div className="grid grid-cols-3 gap-4 font-primary">
            <div>
                <img src={myPicture} alt='Pietro picture'/>
            </div>
            <div className='col-span-2'>
                <h1 className="font-bold">Pietro Gori</h1>
                <div className="text-2xl">description</div>
            </div>
        </div>
        <div className="text-2xl mt-28">description</div>
    </>
}

export default AboutPage