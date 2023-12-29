import Header from "./header";
import Redline from "./lines/redline";
import Yellowline from "./lines/yellowline";
import Greenline from "./lines/greenline";

export default function Body() {
    return (
        <div className=" w-[calc(100%-50px)] h-[calc(100%-50px)]">
            <Header />
            <Yellowline />
            <Redline />
            <Greenline />
        </div>
    );
}