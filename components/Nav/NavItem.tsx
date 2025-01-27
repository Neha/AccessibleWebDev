import Link from "next/link"
import styles from "./NavPrimary.module.css"
import { IPage } from "../../data/pages"

export interface INavItemProps {
	page: IPage
	activeNavLink: string
	handleNavClick?: () => void
}

export const NavItem = ({
	page,
	activeNavLink,
	handleNavClick,
}: INavItemProps) => {
	return (
		<li
			className={`${styles.navListItem} ${
				activeNavLink === page.href ? "active" : ""
			}`}>
			<Link href={page.href}>
				<a onClick={handleNavClick}>{page.name}</a>
			</Link>
		</li>
	)
}
