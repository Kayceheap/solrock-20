import React from "react";
import Nav from '../../components/nav';

function Header(props){
    const{
        currentSelection, 
        setCurrentSelection
    }=props;

    return(
        <section>Kayce Heap
            <Nav currentSelection={currentSelection}
                 setCurrentSelection={setCurrentSelection}></Nav>
        </section>
    )
}

export default Header;