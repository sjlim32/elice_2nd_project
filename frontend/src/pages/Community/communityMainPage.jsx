import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchFunc from '../../components/pages/community/mainPage/Search';
import Posts from '../../components/pages/community/mainPage/Posts';

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

	const Pagenation = ({totalPosts, limit, page, setPage}) => {
		const numPages = Math.ceil(totalPosts / limit);
		const [ currPage, setCurrPage ] = useState(page);
		let firstNum = currPage - (currPage % 5) + 1;
		let lastNum = currPage - (currPage % 5) + 5;

		return (
			<PageSection>
				<ButtonWrap>
						<Button
							onClick= {() => {setPage(page - 1); setCurrPage(page - 2);}}
							disabled= {page === 1}>
								&lt;
						</Button>
						<Button
							onClick= {() => setPage(firstNum)}>
								{firstNum}
						</Button>
						{Array(4).fill().map((_, i) => {
							if(i <= 2) {
								return (
									<Button
										key= {i + 1}
										onClick= {() => {setPage(firstNum + 1 + i)}}>
											{firstNum + 1 + i}
									</Button>
								)
							}
							else if(i >= 3) {
								return (
									<Button
										key= {i + 1}
										onClick= {() => setPage(lastNum)}>
											{lastNum}
									</Button>
								)
							}
						})}
						<Button
							onClick= {() => {setPage(page + 1); setCurrPage(page);}}
							disabled={page === numPages}>
								&gt;
						</Button>
				</ButtonWrap>
			</PageSection>
		)
	};

  return (
	<Container>
		<MainHead>이야기 광장</MainHead>
			<SearchFunc></SearchFunc>
		<BoardWrap>
			<ContentBar>
				<SpanNo>No.</SpanNo>
				<SpanTitle>제목</SpanTitle>
				<SpanAuthor>글쓴이</SpanAuthor>
				<SpanDate>작성일자</SpanDate>
			</ContentBar>
				<Posts contents = {postsData(posts)} />
				<Pagenation limit = {limit} page = {page} totalPosts = {posts.length} setPage = {setPage}/>
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
	width: 150px;
	padding-left: 30px;
`;

const SpanTitle = styled.span`
	display: flex;
	width: 650px;
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

const PageSection = styled.div`

`;

const ButtonWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 25px;
`;

const Button = styled.button`
	font-size: 15px;
	border: none;
	background-color: #ffffff;
	color: gray;
	padding: 5px;
	&:hover{
		color : black;
	};
`;

export default CommunityMainPage;