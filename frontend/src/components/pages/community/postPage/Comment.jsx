import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as API from '../../../../utils/api';
import styled from 'styled-components';

const CommentList = ({commentList}) => {
	// const [ visible, setVisible ] = useState(false);

// .filter(writer => {
// 									if (writer === true) {
// 										return	'작성자'
// 									} else if ( writer.role === 'support') {
// 										const id = writer.email.split('@')
// 										return `${id[0]}`
// 									}	else if ( writer.role === 'admin') {
// 										return 'admin'
// 									}
// 								})

			return (
			<>
				{
					commentList.map((reply, idx) => (
						reply.map((reReply, idx) => {
							return (
								<CommentContainer key={idx} >
								<CommentBox className='Writer'>{reReply.isWriter ? '작성자' : '익명'} </CommentBox>
								<Commentary>{reReply.parentId ? ` ㄴ : ${reReply.contents}` : ` : ${reReply.contents}`}</Commentary>
								{/* <Btn onClick={() => setVisible(!visible)}>공감의 말</Btn> */}
								<CommentBox className='CreateAt' style={{textAlign:'right'}}>{reReply.createdAt.split("T")[0]}</CommentBox>
								{/* { visible && (
									<input placeholder='공감의 대댓글을 입력해주세요.'></input>
									)
								} */}
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

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await API.get(`/posts/${post_id}/replies`)
					setComments(res.data)
					console.log(res.data)
			} catch (error) {
				console.error('ErrorMessage: ', error)
				setComments(error)
			}
		}
		fetchData();
	}, [post_id])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const res = await API.get(`/users`)
	// 				setUser(res.data)
	// 				console.log(res.data)
	// 		} catch (error) {
	// 			console.error('유저 없음, Message: ', error)
	// 		}
	// 	}
	// 	fetchData();
	// }, [post_id])

	const handleSubmit = useCallback(async (e) => {
		e.preventDefault();

		try {
			const res = await API.post(`/replies`, { postId: post_id, parentId: null, contents: commentary })
			if (res.data) {
				alert('공감의 말이 정상적으로 등록되었습니다.');
				window.location.reload();
			}
		} catch (error) {
			console.error('ErrorMessage : ', error)
			alert('공감의 말을 등록하지 못했습니다.')
			}
		}
	, [commentary]);

	const CommentListComp = useMemo(() => <CommentList commentList={comments}/>, [comments])

	return (
		<Container>
			<CommentRegisterBox onSubmit={handleSubmit}>
				<TextBox>공감의 말 달기</TextBox>
				<CommentInput value={commentary} placeholder={'공감의 말을 입력해주세요.'} onChange={e => setCommentary(e.target.value)}></CommentInput>
				<Btn type='submit'>등록</Btn>
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
	flex: 0 1 75px;
	justify-content: center;
	align-items: center;

	height: 30px;

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