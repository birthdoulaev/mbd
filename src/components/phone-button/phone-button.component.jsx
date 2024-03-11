import { useState, useRef } from "react";

import { ReactComponent as PhoneIcon } from "../../assets/phone-number-svgrepo-com.svg";
import Dropdown from "../../components/dropdown/dropdown.component";

import './phone-button.styles.scss';

const PhoneButton = () => {
    const [isPhoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

	const phoneDropdownRef = useRef(null);
    const handlePhoneClick = () => {
		setPhoneDropdownOpen(!isPhoneDropdownOpen);
	};

	const closePhoneDropdown = (e) => {
		if (isPhoneDropdownOpen && !phoneDropdownRef.current?.contains(e.target)) {
			setPhoneDropdownOpen(false);
		}
	};

	document.addEventListener("mousedown", closePhoneDropdown);
    return (
        <div className="telephone-icon-container">
        <div onClick={handlePhoneClick}>
            <PhoneIcon className="social-media-icon phone-icon" />
        </div>
        <Dropdown isPhoneDropdownOpen={isPhoneDropdownOpen} phoneDropdownRef={phoneDropdownRef} />
    </div>
    )
}

export default PhoneButton;