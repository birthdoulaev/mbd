import { useMediaQuery } from "react-responsive";

import "./dropdown.styles.scss";

const Dropdown = ({ isPhoneDropdownOpen, phoneDropdownRef }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

	return (
		<article ref={phoneDropdownRef} className={"phone-dropdown-container" + (isPhoneDropdownOpen ? " height-full" : "")}>
			<div className={"triangle" + (isMobile ? ' back-triangle' : '')} />
			<div className={"phone-dropdown-content" + (isMobile ? ' back' : '')} onClick={(e) => e.stopPropagation()}>
				<a href="tel:9293200120">(929) 320-0120</a>
			</div>
		</article>
	);
};

export default Dropdown;