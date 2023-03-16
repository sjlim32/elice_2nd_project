import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Search() {
	
	const [search, setSearch] = useState('');

	// * 추후 디바운스 처리 필요 
	const handleSearch = (e) => {
		setSearch(e.target.value);
	}
	
	// ! axios.get('post/category/:categoryId/:seaerch') -> 이 떄, post.title 에 search 값이 포함된 모든 것 불러옴
	const handleSubmit = async (e) => {
		try { 
			e.preventDefault()
		} catch (error) {
		}
	};

	return (
			<SearchForm onSubmit={handleSubmit}>
				<SearchBox type='text' value={search} placeholder='검색어를 입력해주세요.' onChange={handleSearch} />
				<SearchBtn type='submit'> 검색 </SearchBtn>
			</SearchForm>
	);
};

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

export default Search;