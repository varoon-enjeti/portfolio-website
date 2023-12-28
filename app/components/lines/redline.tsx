export default function Redline() {
    return (
        <div className="h-full w-full relative">
            <div className="bg-red h-6 w-[calc(100%-50px-760px)] absolute top-[345px] left-[314px] tl-tr-br-bl sit"></div>
            <div className="bg-red h-[247px] w-6 absolute top-[122px] left-[calc(100%-50px-760px+290px)] tl-tr-br-bl sir"></div>
            <div className="bg-red h-[310px] w-6 absolute top-[345px] left-[314px] tl-tr-br-bl sil"></div>
{/*             
            <div className="bg-red h-6 w-[calc(100%-40px-100px)] absolute top-[40px] left-[40px] tl-tr-br"></div>
            <div className="bg-red h-[400px] w-6 absolute top-[40px] left-[calc(100%-100px-24px)] tr-br-bl"></div>
            <div className="bg-red h-[250px] w-6 absolute left-[40px] top-[40px] tl-tr-bl"></div> */}
        </div>
    );
}