export default function Blueline() {
    return (
        <div className="relative">
            <div className="bg-blue w-[calc(100%-50px-840px)] h-6 absolute top-[417px] left-[473px] tl-tr-br-bl sib"></div>
            <div className="bg-blue w-6 h-[159px] absolute top-[417px] left-[473px] tl-tr-br-bl sil"></div>
            <div className="bg-blue h-6 w-[390px] absolute top-[552px] right-[calc(100%-473px-24px)] tl-tr-br-bl sib"></div>
            <div className="bg-blue h-[112px] w-6 absolute top-[417px] left-[calc(100%-50px-840px+449px)] tl-tr-br-bl sir"></div>
            <div className="bg-blue h-6 w-[153px] absolute top-[505px] left-[calc(100%-50px-840px+449px)] tl-tr-br-bl sib"></div>
            <div className="bg-blue h-6 w-[180px] absolute top-[561px] left-[calc(100%-50px-840px+449px+107px)] tl-tr-br-bl rotate-45 sibr">
                <button onClick={() => {}} type="button" className="open-btn" id="selection-contact">
                    <p className="selection-txt">Contact</p>
                </button>
            </div>
        </div>
    )
}