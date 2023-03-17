import React, { useEffect } from 'react';
import styled from 'styled-components';

// * localStorage 이용하여 새로고침해도 현재 선택한 카테고리 유지
const LS_KEY_CATEGORY = 'LS_KEY_CATEGORY'

const CategoryFilter = ({ categories, category, setCategory }) => {

	const makeCategories = () => {
		if (categories.length === 0) return;

		return categories.map((item, idx) => (
			<div
				key={idx}
				className={
					item.value === category ? 'category-child selected' : 'category-child'
				}
				onClick={() => {
					setCategory(item.value);
					localStorage.setItem(LS_KEY_CATEGORY, item.value);
				}}
				style={ item.value === category ? { borderBottom: '2px solid gray'} : {border: 'none'}}
			>
				{item.name}
			</div>
		));
	;}

	const init = () => {
		let data = localStorage.getItem(LS_KEY_CATEGORY);
		if (data !== null) setCategory(data);
	}

	useEffect(init, []);

	return (
		<div>
			<CategoryWrap className='category-set' >{makeCategories()}</CategoryWrap>
		</div>
	)
}

const CategoryWrap = styled.div`
	display: flex;
	justify-content: space-between;
	width: 300px;
	padding: 10px;
	margin: 25px;
`

export default CategoryFilter;