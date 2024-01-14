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
        <div className="w-full absolute flex flex-col items-start lg:pl-[7px] gap-0 lg:gap-[11px] header">
            <button onClick={() => {handleClick()}} className="font-sans font-bold h-[38px] lg:h-[93px] text-[35px] lg:text-[100px] tracking-[-0.04em] text-darkgrey relative z-20 name">Varoon Enjeti</button>
            <div className="h-[48px] lg:h-[98px] flex gap-3 lg:gap-5">
                <a href="/" className="">
                    <Image
                        src="/pfp.png"
                        alt='Profile Picture'
                        width={500}
                        height={500}
                        className='w-[48px] lg:w-[98px] h-[48px] lg:h-[98px] rounded-[15px] lg:rounded-[30px] border-darkgrey border-[2px] lg:border-[3px] pfp'
                    />
                </a>
                <div className="flex flex-col justify-center -mt-[10px] lg:mt-0 lg:gap-3">
                    <div className="font-sans font-bold h-[24px] lg:h-[36px] text-[21px] lg:text-[43px] tracking-[-0.04em] text-darkgrey">Transit Map</div>
                    <div className="font-sans font-bold h-[24px] lg:h-[36px] text-[21px] lg:text-[43px] tracking-[-0.04em] text-darkgrey">Portfolio</div>
                </div>
            </div>
        </div>
    );
}

export default Header;