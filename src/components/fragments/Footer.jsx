import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import FooterList from "../elements/FooterList";

export default function Footer() {
    return (
        <div className="w-full py-[50px] px-[80px] bg-[#d7ad82] text-[#716255] flex justify-between items-center">
            <FooterList>
                <FooterList.Title title={'Other Info'}/>
                <FooterList.ListContent content={'Terms & conditions'}/>
                <FooterList.ListContent content={'Privacy policy'}/>
                <FooterList.ListContent content={'License'}/>
            </FooterList>
            <FooterList>
                <FooterList.Title title={'Media'}/>
                <FooterList.ListContent content={'Blogs'}/>
                <FooterList.ListContent content={'Photo galery'}/>
                <FooterList.ListContent content={'Latest news'}/>
            </FooterList>
            <FooterList>
                <FooterList.Title title={'Company'}/>
                <FooterList.ListContent content={'About us'}/>
                <FooterList.ListContent content={'Career'}/>
                <FooterList.ListContent content={'Services'}/>
            </FooterList>
            <FooterList>
                <FooterList.Title title={'Be social'}/>
                <FooterList.ListContent icon={<FaFacebookF/>} content={' facebook'}/>
                <FooterList.ListContent icon={<FaTwitter/>} content={'twitter'}/>
                <FooterList.ListContent icon={<FaLinkedinIn/>} content={'linkedln'}/>
            </FooterList>

            
            {/* <div>
                <h3 className="text-[29px] font-semibold">Be social</h3>
                <ul className="mt-[5px] flex flex-col items-start gap-[5px]">
                    <li className="text-[23px] list-none">
                        <a href="#" className="flex justify-center items-center"><FaFacebookF className="mr-[7px]"/> facebook</a>
                    </li>
                    <li className="text-[23px] list-none">
                        <a href="#" className="flex justify-center items-center"><FaTwitter className="mr-[7px]"/>twitter</a>
                    </li>
                    <li className="text-[23px] list-none">
                        <a href="#" className="flex justify-center items-center"><FaLinkedinIn className="mr-[7px]"/>linkedln</a>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}