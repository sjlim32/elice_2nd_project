import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import * as API from '../../utils/api';

import styled from 'styled-components';
import CategoryFilter from '../../components/pages/community/mainPage/CategoryFilter';
import Search from '../../components/pages/community/mainPage/Search';
import Posts from '../../components/pages/community/mainPage/Posts';
import Pagination from '../../components/pages/community/mainPage/Pagination';

const categories = [
	{ title: '전체', _id: '' },	
	{ title: '소통공감', _id: '6411719e1410804b9b58697d' },
	{ title: '좋은정보', _id: '641171971410804b9b58697a' },
	{ title: '고민거리', _id: '641171911410804b9b586977' },
]

function CommunityMainPage() {

	const navigate = useNavigate();

	const [ category, setCategory ] = useState('전체');
	const [ posts, setPosts ] = useState([]);
	const [ isLogin, setIsLogin ] = useState(false);

	// pagination 구현을 위한 변수
	const [ page, setPage ] = useState(1);
	const limit = 10;
	const offset = (page-1) * limit;
	const postsData = (posts) => {
		if(posts) {
			let res = posts.slice(offset, offset + limit);
			return res;
		}
	}

	useEffect(() => {
		localStorage.getItem('token') === null ? setIsLogin(false) : setIsLogin(true)
	}, [])

	// ? 카테고리 별 게시물 받아오기
	const getCategoryPost = async (categoryId) => {
		try {
			if (categoryId === '') {
				const res = await API.get('/posts');
				setPosts(res.data)
			} else {
				const res = await API.get(`/posts/category/${categoryId}`)
				setPosts(res.data)
			}
		} catch (error) {
			console.error("ErrorMessage :", error);
			console.log(category)
			alert("이야기를 불러오지 못했습니다.")
		}
	};

	// ? 최초 전체포스트 받아오기
	useEffect(() => {
		const getPost = async () => {
			try {
				const res = await API.get('/posts');
				setPosts(res.data)
			} catch (error) {
				console.error(error);
			}
		}
		getPost();
	}, [])

  return (
	<Container>
		<MainHead>이야기 광장</MainHead>
		<SearchWrap>
			<CategoryFilter
				categories={categories}
				categoryTitle={category}
				setCategory={setCategory}
				setPosts={getCategoryPost}
			/>
			<Search></Search>
			<WriteBtn 
				style={ isLogin ? { display:'' }: { display:'none'} }
				onClick={() => {navigate('/posts/write')}}>이야기 등록</WriteBtn>
			</SearchWrap>
		<BoardWrap>
			<ContentBar>
				<SpanNo>No.</SpanNo>
				<SpanCate>말머리</SpanCate>
				<SpanTitle>제목</SpanTitle>
				<SpanAuthor>글쓴이</SpanAuthor>
				<SpanDate>작성일자</SpanDate>
			</ContentBar>
				<Posts contents = {postsData(posts)} />
				<Pagination limit = {limit} page = {page} totalPosts = {posts.length} setPage = {setPage} />
		</BoardWrap>
	</Container>);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MainHead = styled.h1`
  text-align: center;
	margin: 80px 0 40px 0;
`;

const SearchWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1200px;
	height: 180px;
	border-bottom: 1px solid gray;
`

const WriteBtn = styled.button`
	display: inline;
	flex-direction: row;
	margin: 15px;
	padding: 3px;

	width: 80px;
	border: 0.5px solid gray;
	border-radius: 5px;
	background-color: white;

	&:active {
		background-color: lightgray;
	}	
`;

const BoardWrap = styled.div`

`;

const ContentBar = styled.div`
	display: flex;
	width: 1200px;
	flex-direction: row;
	margin: 20px 0 20px 0;
	padding-bottom: 15px;
	border-bottom: 1px solid lightgray;
`;

const SpanNo = styled.span`
	display: flex;
	width: 50px;
	padding-left: 30px;
`;

const SpanCate = styled.span`
	display: flex;
	width: 150px;
	padding-left: 30px;
`;

const SpanTitle = styled.span`
	display: flex;
	width: 550px;
`;

const SpanAuthor = styled.span`
	display: flex;
	width: 200px;
`;

const SpanDate = styled.span`
	display: flex;
	width: 200px;
	padding-right: 15px;
`;

export default CommunityMainPage;