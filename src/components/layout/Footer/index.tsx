import type { FC } from "react";

import EmailIcon from "@icons/EmailIcon";
import { useIsMobile } from "@hooks/useIsMobile";
import { page } from "@shared/footer";
import { email } from "@shared/common";
import { useToolKit } from "@shared/toolkit";
import { Button } from "@ui/Button";

import styles from "./Footer.module.scss";
import { useNavigate } from "@hooks/useNavigate";

const FooterApp = () => {
	return <div>
		<h3>Celestial expanse</h3>
		<h4>Made by miuruwax8</h4>
	</div>
}
const FooterNavigation = () => {
	const isMobile = useIsMobile(768);
  const toolkit = useToolKit();

	// @ts-expect-error // TODO: useLanguage()
  const pageData = page[toolkit.settings.language];
	const { navigate } = useNavigate();

	return <div>
		{ !isMobile && <h3>{pageData.navigation}</h3>}
		{pageData.links.map((item: {title: string, path: string}, index: number) => <Button key={index} theme="transparent" title={item.title} onClick={() => navigate(item.path)} />)}
	</div>
}
const FooterSocial = () => {
	const { social } = styles;
  const toolkit = useToolKit();

	// @ts-expect-error // TODO: useLanguage()
  const pageData = page[toolkit.settings.language];
	const emailURL = `email:${email}`;
	const { goTo } = useNavigate();

	return <div className={social}>
		<Button theme="invert" icon={<EmailIcon />} onClick={() => goTo(`email:${emailURL}`)} />
		{pageData.social.map((item: {icon: FC, title: string, location: string}, index: number) => <Button key={index} theme="invert" icon={item.icon} onClick={() => goTo(item.location)} />)}
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