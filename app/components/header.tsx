import Image from 'next/image'
import { headerProps, SetStateType } from './types';

const Header: React.FC<headerProps> = ({projectLive, setProject, aboutLive, setAbout, skillsLive, setSkills, contactLive, setContact}) => {

    function handleClick() {
        if (projectLive) {
            setProject(false)
        } else if (aboutLive) {
            setAbout(false)
        } else if (skillsLive) {
            setSkills(false)
        } else if (contactLive) {
            setContact(false)
        }
    }

    return (
        <div className="w-full absolute flex flex-col items-start pl-[7px] gap-[11px] header">
            <button onClick={() => {handleClick()}} className="font-sans font-bold text-[100px] tracking-[-0.04em] text-darkgrey h-[93px] relative name">Varoon Enjeti</button>
            <div className="flex gap-5">
                <a href="/" className="">
                    <Image
                        src="/pfp.png"
                        alt='Profile Picture'
                        width={500}
                        height={500}
                        className='w-[98px] h-[98px] rounded-[30px] border-darkgrey border-[3px] pfp'
                    />
                </a>
                <div className="flex flex-col justify-center gap-3">
                    <div className="font-sans font-bold text-[43px] tracking-[-0.04em] text-darkgrey">Transit Map</div>
                    <div className="font-sans font-bold text-[43px] tracking-[-0.04em] text-darkgrey">Portfolio</div>
                </div>
            </div>
        </div>
    );
}

export default Header;