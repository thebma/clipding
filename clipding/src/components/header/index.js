import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import config from "../../static/config.json"

const Header = () => (
	<header class={style.header}>
		<h1>{config.title}</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Week</Link>
			<Link activeClassName={style.active} href="/maand">Maand</Link>
			<Link activeClassName={style.active} href="/jaar">Jaar</Link>
			<Link activeClassName={style.active} href="/altijd">Altijd</Link>
		</nav>
	</header>
);

export default Header;
