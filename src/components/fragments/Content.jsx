
import Section1 from "../elements/Section1";
import Section2 from "../elements/Section2";
import Section3 from "../elements/Section3";
import Section4 from "../elements/Section4";


export default function Content() {
    return (
        <div>
            <div className="w-full mb-[40px]">
                <Section1/>
            </div>
            <div className="w-full mb-[90px]">
                <Section2/>
            </div>
            <div className="w-full ">
                <Section3/>
            </div>
            <div className="w-full h-screenflex items-center justify-center">
                <Section4/>
            </div>
        </div>
    );
}