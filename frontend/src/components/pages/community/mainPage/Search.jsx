import React, { useState, useEffect} from 'react';
import styled from 'styled-components'
import CategoryFilter from './CategoryFilter'

const categories = [
	{
		name: '전체',
		value: 'all'
	},
	{
		name: '소통공감',
		value: 'category1'
	},
	{
		name: '좋은정보',
		value: 'category2'
	},
	{
		name: '고민상담',
		value: 'category3'
	},
]

function SearchFunc() {
	
	const [category, setCategory] = useState('all');
	const [search, setSearch] = useState('')

	// * 추후 디바운스 처리 필요 
	const handleSearch = (e) => {
		setSearch(e.target.value);
	}

	const handleSubmit = async (e) => {
		try { 
			e.preventDefault()
			console.log(search)
		} catch (error) {
		}
	};

	return (
		<SearchWrap>
			<CategoryFilter
				categories={categories}
				category={category}
				setCategory={setCategory}
			/>
			<SearchForm onSubmit={handleSubmit}>
				<SearchBox type='text' value={search} placeholder='검색어를 입력해주세요.' onChange={handleSearch} />
				<SearchBtn type='submit'> 검색 </SearchBtn>
			</SearchForm>
		</SearchWrap>
	);
};

	const SearchWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 800px;
	height: 100px;
	border: 1px solid gray;
`

const SearchForm = styled.form`
	display: flex;
	align-items: center;
`

const SearchBox = styled.input`
	display: flex;
	width: 400px;
	height: 30px;
	border: 1px solid gray;
	margin-right: 15px;
`

const SearchBtn = styled.button`
	height: 25px;
`

export default SearchFunc;