import { useSelector } from 'react-redux';
import './Header.css';
import { useEffect } from 'react';

const Header = () => {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	useEffect(() => {
		// console.log('isAuthenticated:', isAuthenticated);
	}, [isAuthenticated]);
	return (
		<header className="header">
			<nav>
				<ul className="nav-links">
					<li>
						<a href="home">Home</a>
					</li>
					<li>
						<a href="/create">Create Post</a>
					</li>
					{!isAuthenticated && <li>
						<a href="/login">Login</a>
					</li>}
					{isAuthenticated && <li>
						<a href="/logout">Logout</a>
					</li>}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
