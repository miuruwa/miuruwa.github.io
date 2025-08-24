import EmailIcon from "@icons/EmailIcon.svg?react";
import { useIsMobile } from "@hooks/useIsMobile";
import { footer } from "@shared/footer";
import { email } from "@shared/common";
import { Button } from "@ui/Button";
import { useNavigate } from "@hooks/useNavigate";
import { useTranslation } from "@hooks/useTranslation";

import styles from "./Footer.module.scss";

const FooterApp = () => {
	const { info } = useTranslation<Shared.Footer>(footer.translations);
	return <div>
		<h3>{info.headline}</h3>
		<h4>{info.description}</h4>
	</div>
}
const FooterNavigation = () => {
	const isMobile = useIsMobile(768);
	const { navigation } = useTranslation<Shared.Footer>(footer.translations);
	const { navigate } = useNavigate();

	return <div>
		{ !isMobile && <h3>{navigation.headline}</h3>}
		{navigation.links.map((item, index) => <Button key={index} theme="transparent" title={item.title} onClick={() => navigate(item.path ?? "")} />)}
	</div>
}
const FooterSocial = () => {
	const { social } = styles;
	const { navigation } = useTranslation<Shared.Footer>(footer.translations);
	const emailURL = `email:${email}`;
	const { goTo } = useNavigate();

	return <div className={social}>
		<Button theme="invert" icon={<EmailIcon />} onClick={() => goTo(`email:${emailURL}`)} />
		{navigation.social.map((item, index) => <Button key={index} theme="invert" icon={item.icon} onClick={() => goTo(item.location ?? "")} />)}
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