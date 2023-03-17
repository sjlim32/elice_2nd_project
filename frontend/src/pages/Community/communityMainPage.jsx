import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import CategoryFilter from '../../components/pages/community/mainPage/CategoryFilter';
import Search from '../../components/pages/community/mainPage/Search';
import Posts from '../../components/pages/community/mainPage/Posts';
import Pagination from '../../components/pages/community/mainPage/Pagination';

const categories = [
	{
		name: '전체',
		value: 'users'
	},
	{
		name: '소통공감',
		value: '소통공감'
	},
	{
		name: '좋은정보',
		value: '좋은정보'
	},
	{
		name: '고민상담',
		value: '고민상담'
	},
]

function CommunityMainPage() {

	const navigate = useNavigate();

	// 게시글의 카테고리 선택
	const [category, setCategory] = useState('all');

	// 조건에 따른 DB의 게시글 조회
	const [ posts, setPosts ] = useState([]);

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

	// useEffect(() => {
	// 	axios.get('https://jsonplaceholder.typicode.com/users')
	// 	.then(res => setPosts(res.data))
	// 	.catch(err => console.log(err))
	// }, []);

	// ! /post/category/:categoryId
	// ! default 값을 ''(빈 값)으로 설정, 빈 값이 오면 전체 게시글 = /post/category/
	// api 구조 확인해서 req, res 값 맞춰봐야할 듯
	
	// ! useEffect 대신 CategoryFilter 에서 axios.get(/post/category/${category})
	useEffect(() => {
		const fetchData = async () => {
			try {
				// const res = await axios.get(`/category/${category}`)
				const res = await axios.get(`https://jsonplaceholder.typicode.com/${category}`);
				setPosts(res.data)
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, [category])

  return (
	<Container>
		<MainHead>이야기 광장</MainHead>
		<SearchWrap>
			<CategoryFilter
				categories={categories}
				category={category}
				setCategory={setCategory}
			/>
			<Search></Search>
			<WriteBtn onClick={() => {navigate('/posts/write')}}>글쓰기</WriteBtn>
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
				<Pagination limit = {limit} page = {page} totalPosts = {posts.length} setPage = {setPage}/>
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
	border: 0.5px solid gray;
	border-radius: 5px;
	background-color: white;
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