import Image from 'next/image'

export default function Header() {
    return (
        <div className="w-full absolute flex flex-col items-start pl-[7px] gap-[11px]">
            <button className="font-sans font-bold text-[100px] tracking-[-0.04em] text-darkgrey h-[93px] relative">Varoon Enjeti</button>
            <div className="flex gap-5">
                <a href="/" className="">
                    <Image
                        src="/pfp.png"
                        alt='Profile Picture'
                        width={500}
                        height={500}
                        className='w-[98px] h-[98px] rounded-[30px] border-darkgrey border-[3px]'
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