import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Comment from '../../components/pages/community/postPage/Comment';

function PostPage() {

	const navigate = useNavigate();
	
	const { _id } = useParams();
	const pageId = Number(_id)

	const [ title, setTitle ] = useState("제목")
	const [ category, setCategory ] = useState("말머리")
	const [ content, setContent ] = useState("내용")
	const [ writer, setWriter ] = useState("작성자")
	const [ date, setDate ] = useState("작성일")

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await axios.get('https://jsonplaceholder.typicode.com/users')
				setTitle(res.data[pageId].email)
				setCategory(res.data[pageId].id)
				setContent(res.data[pageId].company.catchPhrase)
				setWriter(res.data[pageId].name)
				setDate(res.data[pageId].address.zipcode)
			} catch (error) {
				
			}
		}
		fetchPost();
		}, [pageId]);

	return (
		<Container>
			<PostCotainer>
				<TitleWrap>
					<Category>{category}</Category>
					<Title>{title}</Title>
					<Writer>작성자 : {writer}</Writer>
					<Date>작성일 : {date}</Date>
				</TitleWrap>
				<ContentWrap>
					<Content>{content}</Content>
				</ContentWrap>
				<BottomWrap>
					<BtnWrap>
						<Btn onClick={() => navigate(-1)}>뒤로가기</Btn>
						<Btn>수정하기</Btn>
					</BtnWrap>
				</BottomWrap>

				<Comment />
			</PostCotainer>
		</Container>	
	)

};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PostCotainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	margin: 50px;

	width: 1200px;
	height: 800px;
	border: 1px solid lightgray;
`;

const TitleWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	margin-top: 20px;
	padding: 15px;

	border-bottom: 1px solid gray;
`;

const Category = styled.div`
	display: flex;
	margin-right: 15px;
	padding-left: 10px;
	line-height: 30px;

	font-size: 20px;
	width: 80px;
	height: 30px;
	border-right: 1px solid lightgray;
`;

const Title = styled.div`
	display: flex;
	margin-right: 15px;
	padding-left: 10px;
	line-height: 30px;

	font-size: 25px;

	width: 540px;
	height: 30px;
`

const Writer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	width: 150px;
	height: 30px;
	padding-right: 15px;
	border-right: 1px solid lightgray;
`

const Date = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	width: 170px;
	height: 30px;
`

const ContentWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 15px;
`;

const Content = styled.div`
	display: flex;
	padding-left: 10px;

	font-size: 18px;

	width: 1000px;
	height: 600px;
`;

const BottomWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 0 15px 0 15px;

	width: 1012px;
	height: 50px;
`;


const BtnWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	
	width: 300px;
`;

const Btn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 75px;
	height: 30px;

	background-color: white;
	border-radius: 5px;
	border: 1px solid lightgray;
`;

export default PostPage;