import {delay} from "@/lib/delay";
import HeaderLink from "@/components/HeaderLink";

// @ts-ignore
const Header = async () => {
    await delay(5000);

    return (
        <>
            <HeaderLink/>
            <header>Marketing Home</header>
        </>
    )
}

export default Header;
