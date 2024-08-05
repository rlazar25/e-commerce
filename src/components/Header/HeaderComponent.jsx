import { useState } from "react";
//components
import HeaderInfoComponent from "./HeaderInfoComponent";
import NavbarComponent from "./NavbarComponent";
import CategoryComponent from "./CategoryComponent";

function HeaderComponent(){

    const [toggleHeader, setToggleHeader] = useState(true);

    return(
        <div>
            {toggleHeader && <HeaderInfoComponent setToggleHeader={setToggleHeader} />}
            <NavbarComponent />
            <CategoryComponent />
        </div>
    )
} 

export default HeaderComponent;