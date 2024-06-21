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
        <div className="w-1/2 absolute flex flex-col items-start md:pl-[7px] gap-0 md:gap-[11px] header">
            <button onClick={() => {handleClick()}} className="font-sans font-bold md:w-[600px] h-[38px] md:h-[93px] text-[35px] md:text-[100px] tracking-[-0.04em] text-darkgrey relative z-20 name">Varoon Enjeti</button>
            <div className="h-[48px] md:h-[98px] flex gap-3 md:gap-5">
                <a href="/" className="">
                    <Image
                        src="/pfp.png"
                        alt='Profile Picture'
                        width={500}
                        height={500}
                        className='w-[48px] md:w-[98px] h-[48px] md:h-[98px] rounded-[15px] md:rounded-[30px] border-darkgrey border-[2px] md:border-[3px] pfp'
                    />
                </a>
                <div className="flex flex-col justify-center -mt-[10px] md:mt-0 md:gap-3">
                    <div className="font-sans font-bold h-[24px] md:h-[36px] text-[21px] md:text-[43px] tracking-[-0.04em] text-darkgrey">Transit Map</div>
                    <div className="font-sans font-bold h-[24px] md:h-[36px] text-[21px] md:text-[43px] tracking-[-0.04em] text-darkgrey">Portfolio</div>
                </div>
            </div>
        </div>
    );
}

export default Header;