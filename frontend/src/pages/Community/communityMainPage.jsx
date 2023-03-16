import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchFunc from '../../components/pages/community/mainPage/Search';
import Posts from '../../components/pages/community/mainPage/Posts';
import Pagination from '../../components/pages/community/mainPage/Pagination';

function CommunityMainPage() {

	const [ posts, setPosts ] = useState([]);
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
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(res => setPosts(res.data.reverse()))
		.catch(err => console.log(err))
	}, []);

  return (
	<Container>
		<MainHead>이야기 광장</MainHead>
			<SearchFunc></SearchFunc>
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
	margin: 80px 0 80px 0;
`;

const BoardWrap = styled.div`

`;

const ContentBar = styled.div`
	display: flex;
	width: 1200px;
	flex-direction: row;
	margin-top: 50px;
	// border: 1px solid gray;
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