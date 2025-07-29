import EmailIcon from "@icons/EmailIcon";
import { useIsMobile } from "@hooks/useIsMobile";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";
import { Button } from "@ui";

import styles from "./Footer.module.scss";
import { useNavigate } from "react-router-dom";

const FooterApp = () => {
	return <div>
		<h2>Celestial expanse</h2>
		<h3>Made by miuruwax8</h3>
	</div>
}
const FooterNavigation = () => {
	const isMobile = useIsMobile(768);
  const toolkit = useToolKit();
  const pageData = languageData[toolkit.settings.language].footer;
	const navigate = useNavigate();

	return <div>
		{ !isMobile && <h3>{pageData.navigation}</h3>}
		{pageData.links.map((item, index) => <Button key={index} theme="transparent" title={item.title} onClick={() => navigate(item.path)} />)}
	</div>
}
const FooterSocial = () => {
	const { social } = styles;
  const toolkit = useToolKit();
  const pageData = languageData[toolkit.settings.language].footer;
	const emailURL = `email:${pageData.email}`;

	return <div className={social}>
		<Button theme="invert" icon={<EmailIcon />} onClick={() => window.location.href = `email:${emailURL}`} />
		{pageData.social.map((item, index) => <Button key={index} theme="invert" icon={item.icon} onClick={() => window.location.href = item.location} />)}
	</div>
}

const Footer = () => {
	const { mobileRoot, desktopRoot, column } = styles;
	const isMobile = useIsMobile(768);

	return isMobile ? <div className={mobileRoot}>
		<FooterApp />
		<FooterNavigation />
		<FooterSocial />
	</div> : <div className={desktopRoot}>
		<div className={column}>
			<FooterApp />
			<FooterSocial />
		</div>
		<FooterNavigation />
	</div>
}

export default Footer;