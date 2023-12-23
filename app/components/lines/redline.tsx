export default function Redline() {
    return (
        <div className="h-full w-full relative">
            <div className="bg-red h-6 w-[calc(100%-40px-100px)] absolute top-[40px] left-[40px] tl-tr-br"></div>
            <div className="bg-red h-[400px] w-6 absolute top-[40px] left-[calc(100%-100px-24px)] tr-br-bl"></div>
            <div className="bg-red h-[250px] w-6 absolute left-[40px] top-[40px] tl-tr-bl"></div>
        </div>
    );
}