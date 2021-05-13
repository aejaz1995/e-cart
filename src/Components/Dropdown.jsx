import React from 'react'
import "./Css/Dropdown.module.css"
import onClickOutside from "react-onclickoutside"

const Dropdown = () => {
    const [isOpen, setIsOpen] =React.useState(false)
    const toggle =()=> setIsOpen(!isOpen)

    Dropdown.handleClickOutside = () => setIsOpen(false)
    return (<div className={isOpen ? "m-menu -active" :"m-menu"}  onClick={toggle}>
        <div>Open menu</div>
        <ul className="m-menu__list">
            <li className="m-menu__item">
                <div className="m-menu__link">
                    Log Out
                </div>
            </li>
        </ul>

    </div>     )
};

const clickOutSide= {
    handleClickOutside: ()=> Dropdown.handleClickOutside
}

export default onClickOutside( Dropdown,clickOutSide)
