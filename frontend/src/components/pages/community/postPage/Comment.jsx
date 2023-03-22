import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import axios from 'axios';
import * as API from '../../../../utils/api';
import styled from 'styled-components';

const CommentList = ({commentList}) => {
// const data = [
// {
// id: “a”,
// message: “이것은 부모 댓글1”,
// children: [
// { id: “a1”, message: “나는 부모댓글1의 대댓글1” },
// { id: “a2”, message: “나는 부모댓글1의 대댓글1” },
// ],
// },
// { id: 2, message: “이것은 부모 댓글2” },
// { id: 3, message: “이것은 부모 댓글3” },
// ];

// return (
//   data.map((vaule, index) => (
//     <>
//     <div> 댓글 : {value.comment} </div>
//     { value.child ? child.map((value, index) => (
//         <div> {value.comment} </div>
//         : none
//       )
//     }
//     </>
//   )
// )

			return (
			<>
				{
					commentList.map((reply, idx) => (
						reply.map((reReply, idx) => {
							return (
								<CommentContainer>
								<CommentBox className="Writer">{reReply.isWriter ? "작성자" : reReply.userId} </CommentBox>
								<Commentary>{reReply.parentId ? ` ㄴ : ${reReply.contents}` : ` : ${reReply.contents}`}</Commentary>
								<CommentBox className="CreateAt" style={{textAlign:"right"}}>{reReply.createdAt}</CommentBox>
								</CommentContainer>
							)
						})
					))
				}
			</>
	)}

function Comment({post_id}) {

	const [ comments, setComments ] = useState([])
	const [ commentary, setCommentary] = useState('')
	const [ user, setUser ] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await API.get(`/posts/${post_id}/replies`)
					setComments(res.data)
					console.log(res.data)
			} catch (error) {
				console.error("ErrorMessage: ", error)
				setComments("소통마당을 불러오지 못했습니다.")
			}
		}
		fetchData();
	}, [post_id])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await API.get(`/users`)
					setUser(res.data)
					console.log(res.data)
			} catch (error) {
				console.error("유저 없음, Message: ", error)
			}
		}
		fetchData();
	}, [post_id])

	const handleSubmit = useCallback(async (e) => {
		e.preventDefault();

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
	, []);

	const CommentListComp = useMemo(() => <CommentList commentList={comments}/>, [comments])

	return (
		<Container>
			<CommentRegisterBox onSubmit={handleSubmit}>
				<TextBox>공감의 말 달기</TextBox>
				<CommentInput placeholder={"공감의 말을 입력해주세요."} onChange={e=>{setCommentary(e.target.value)}}></CommentInput>
				<Btn type="submit">등록</Btn>
			</CommentRegisterBox>
				<TextBox>공감 공간</TextBox>
				{CommentListComp}
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
	// flex-direction: row;
	// justify-content: space-between;
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
	display: flex;
	width: 800px;
`


export default Comment;