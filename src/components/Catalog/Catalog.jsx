import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productRequestAsynk } from '../../store/product/productSlice';

import CatalogProduct from "../CatalogProduct/CatalogProduct";
import Container from "../Container/Container";
import Order from "../Order/Order";

import style from './Catalog.module.css';

const Catalog = () => {
	const { products } = useSelector(state => state.product);
	const { category, activeCategory } = useSelector(state => state.category);
	const dispatch = useDispatch();

	useEffect(() => {
		if (category.length) {
			dispatch(productRequestAsynk(category[activeCategory].title))
		}
	}, [category, activeCategory]);

	return (
		<section className={style.catalog}>

			<Container className={style.container}>

				<Order />

				<div className={style.wrapper}>
					<h2 className={style.title}>{category[activeCategory]?.rus}</h2>

					<div className={style.wrap_list}>
						<ul className={style.list}>

							{products.map(item =>
								<li className={style.item} key={item.id}>
									<CatalogProduct item={item} />
								</li>
							)}

						</ul>
					</div>
				</div>

			</Container>

		</section>
	);
}

export default Catalog;