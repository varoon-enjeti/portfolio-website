import Header from "./header";
import Redline from "./lines/redline";
import Yellowline from "./lines/yellowline";

export default function Body() {
    return (
        <div className=" w-[calc(100%-50px)] h-[calc(100%-50px)]">
            <Header />
            <Yellowline />
            <Redline />
        </div>
    );
}