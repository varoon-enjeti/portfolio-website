import Image from 'next/image'

export default function Header() {
    return (
        <div className="w-full absolute flex flex-col items-start pl-[7px]">
            <button className="font-sans font-bold text-[100px] tracking-[-0.04em] text-darkgrey h-[93px] relative">Varoon Enjeti</button>
            <div className="flex">
                <a href="/" className="">
                    <Image
                        src="/pfp.png"
                        alt='Profile Picture'
                        width={500}
                        height={500}
                        className='w-[92px]'
                    />
                </a>
            </div>
        </div>
    );
}