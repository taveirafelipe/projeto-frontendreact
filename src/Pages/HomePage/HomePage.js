import React from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

const HomePage = (props) => {
    return(
        <>
            <Header
                name={props.name}
                setName={props.setName}
                setSearchName={props.setSearchName}
                clientName={props.clientName}
                cartPage={props.cartPage}
                counter={props.counter}
                fill1={props.fill1}
                fill2={props.fill2}
                home={props.home}
                items={props.items}
            />
            <div>

            </div>
            <Footer/>
        </>
    );
};

export default HomePage;