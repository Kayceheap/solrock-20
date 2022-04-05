import React from "react";
import Nav from '../../components/nav';

function Header(props){
    const{
        currentSelection, 
        setCurrentSelection
    }=props;

    return(
        <section className="kayce"> 
        <h1 className="kayce-heap">Kayce Heap</h1>
            <Nav currentSelection={currentSelection}
                 setCurrentSelection={setCurrentSelection}></Nav>
        </section>
    )
}

export default Header;