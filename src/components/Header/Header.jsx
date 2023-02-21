import Container from '../Container/Container';

import logo from '../../assets/img/logo.svg';

import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<Container className={style.container}>
				<img className={style.logo} src={logo} alt="Логотип YourMeal" />

				<div className={style.wrapper}>
					<h1 className={style.title}>
						<span>Только самые</span>
						<span className={style.red}>сочные бургеры!</span>
					</h1>

					<p className={style.appeal}>Бесплатная доставка от 599₽</p>
				</div>
			</Container>
		</header>
	);
}

export default Header;