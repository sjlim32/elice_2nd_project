import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import * as API from '../../../../utils/api';
import styled from 'styled-components';

function Comment({post_id}) {

		// const { _id } = useParams(); 

	const [ comments, setComments ] = useState([])
	const [ commentary, setCommentary] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await API.get(`/posts/${post_id}/replies`)
				console.log({post_id})
				setComments(res.data)
				console.log(res.data)
			} catch (error) {
				console.error("ErrorMessage: ", error)
				setComments("소통마당을 불러오지 못했습니다.")
			}
		}
		fetchData();
	}, [])

	const CommentList = () => {
		
		return comments.map((comment, idx) => (
			<CommentContainer
				key={idx}
				isDeleted={comment.isDeleted}
				parent={comment.parentId}
			>
				<CommentBox className="Writer">{comment.isWriter ? "작성자" : "익명"}</CommentBox>
				{/* <Commentary> : {CommentContainer.isDeleted ? "삭제된 말입니다" : comment.contents}</Commentary> */}
				<Commentary> : {comment.contents}</Commentary>
				<CommentBox className="CreateAt" style={{textAlign:"right"}}>{comment.createdAt.split('T')[0]}</CommentBox>
			</CommentContainer>
		))
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (commentary.trim() === '') {
			alert('공감의 말을 입력해주세요.');
			return;
		}	

		try {
			const res = await API.post(`/replies`, {postId: post_id, userId: 'none', parentId: 'none', contents: commentary})
			if (res.data && res.data.ok === true) {
				alert('공감의 말이 정상적으로 등록되었습니다.');
			}
		} catch (error) {
			console.error("ErrorMessage : ", error)
			alert("공감의 말을 등록하지 못했습니다.")
		}

	}


	return (
		<Container>
			<CommentRegisterBox onSubmit={handleSubmit}>
				<TextBox>공감의 말 달기</TextBox>
				<CommentInput placeholder={"공감의 말을 입력해주세요."} onChange={e=>{setCommentary(e.target.value)}}></CommentInput>
				<Btn type="submit">등록</Btn>
			</CommentRegisterBox>
				<TextBox>공감 공간</TextBox>
				<CommentList commentList={comments}>
					{comments}
				</CommentList>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 5px 30px 5px;

	width: 1200px;
	border: 1px solid lightgray;
`;

const CommentRegisterBox = styled.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 5px;
	margin: 0 5px 0 5px;

	width: 1180px;
	height: 100px;
`;

const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px 0 10px 0;

	width: 80px;
	font-size: 18px;
	text-align: center;
`

const CommentInput = styled.input`
	display: flex;
	padding: 5px;
	
	width: 1000px;
	height: 50px;

	border: 1px solid lightgray;
`;

const Btn = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 50px;
	height: 25px;

	background-color: white;
	border: 1px solid lightgray;
	border-radius: 5px;

	&:active {
		background-color: lightgray;
	}
	
`;

const CommentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 5px;
	margin: 5px;


	width: 1100px;
	height: 30px;

	border-bottom: 1px solid lightgray;
`

const CommentBox = styled.div`
	padding: 5px;
	width: 200px;
`

const Commentary = styled.div`
	width: 800px;

`


export default Comment;