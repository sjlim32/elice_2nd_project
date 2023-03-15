import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchFunc from '../../components/pages/community/mainPage/Search'

function CommunityMainPage() {

	const [ posts, setPosts ] = useState([])

	useEffect(() => {
		axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
		.then(res => setPosts(res.data.reverse()))
		.catch(err => console.log(err))
	})

  return (
	<Container>
		<MainHead>이야기 광장</MainHead>
			<SearchFunc></SearchFunc>
		<BoardWrap>
			<ContentTitle>
				<span>No.</span>
				<span>제목</span>
				<span>글쓴이</span>
				<span>작성일자</span>
			</ContentTitle>
				<Posts info={posts} />
				<Pagenation />
		</BoardWrap>
	</Container>);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const MainHead = styled.h1`
  text-align: center;
`;

const BoardWrap = styled.div`
	
`

const ContentTitle = styled.div`
	display: flex;
	width: 1200px;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 30px;
	border: 1px solid gray;
	border-radious: 5px;
	
`

export default CommunityMainPage;