import { useState } from "react";


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDiv, setShowDiv] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
        setShowDiv(false)
    };
    const toggleDiv = () => {
        setShowDiv(!showDiv);
        setShowMenu(false)
    };

    const Menu = '/assets/Combined Shape 2 (2).svg';
    const ShopImg = '/assets/Group 14.svg';
    const MenImg = '/assets/Oval (21).svg';
    const SneakersLogoImg = '/assets/sneakers 2 (1).svg';
    const MenuImgX = '/assets/Combined Shape (7).svg';

    return (
        <div className="p-6 xl:pl-[165px] xl:pr-[165px] xl:pt-[28px]">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img
                        className="z-10 md:hidden"
                        onClick={handleToggle}
                        src={showMenu ? MenuImgX : Menu}
                    />
                    <img className="ml-4 relative bottom-[2px] z-10" src={SneakersLogoImg} alt="SneakersLogoImg" />

                    <div className="
                    hidden md:flex text-[15px] z-100 ml-[56px] gap-[32px]
                    text-[#69707D] font-normal cursor-pointer">
                        <a href="#">Collections</a>
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>

                </div>

                <div className="flex">
                    <img onClick={toggleDiv} className="mr-4 cursor-pointer md:w-[25px]" src={ShopImg} alt="ShopImg" />
                    <img src={MenImg} alt="MenImg" className="md:w-[40px]" />
                </div>
            </div>

            {showMenu && (
                <div className="
                flex flex-col pt-[84px] pl-6 text-[18px]
                font-bold gap-5 w-[250px] h-[100%]
                absolute top-0 left-0 bg-[white] md:hidden"
                >
                    <a href="#">Collections</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a className="z-10" href="#">About</a>
                    <a className="z-10" href="#">Contact</a>
                </div>
            )}

            <div className=" hidden md:flex border border-[gray] w-[98%] h-full mt-[45px] ml-4 opacity-30"></div>
            {showDiv &&
            <div className="w-[360px] h-[256px] bg-white absolute rounded-[10px] top-[75px] right-[8px] z-10 xl:right-[200px]" style={{ boxShadow: '0px 20px 50px -20px rgba(29, 32, 38, 0.50)' }}>
                <h2 className="text-[#1D2026] font-bold text-[16px] p-4">Cart</h2>
                <div className="border w-[100%] bg-black mt-[15px]"></div>
                <h3 className="flex justify-center pt-[77px] text-[#1D2026] font-bold text-[16px]">Your cart is empty.</h3>
            </div>}
        </div>
    );
};

export default Header;
