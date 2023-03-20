import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const categories = [
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

function PostingPage() {

	const [ title, setTitle ] = useState('')
	const [ content, setContent ] = useState('')
	const [ categoryId, setCategoryId ] = useState('소통공감')

	const CategoryContainer = ({categories}) => {
		const handleCategory = (e) => {
			setCategoryId(e.target.value);
		}
		
		return (
			<CategorySelector value={categoryId} onChange={handleCategory}>
				{categories.map((category, idx) => (
					<option
						key = {idx}
						value = {category.value}
					>
						{category.name}
					</option>
					)
				)}
			</CategorySelector> 
		)
	}	

	const handleSubmit = async () => {
		// console.log(title, content, categoryId)
		if (title.trim() === '') {
			alert('제목을 입력해주세요.');
			return;
		}

		if (content.trim() === '') {
			alert('내용을 입력해주세요.');
			return;
		}	
		try {
			const res = await axios.post('/posts/', { title: title, content: content, category:categoryId })
			if (res.data && res.data.ok === true) {
				alert('이야기가 정상적으로 등록되었습니다.');
			}
		} catch (error) {	
			console.error('message :', error)
			alert('이야기 등록에 실패했습니다.')
		}
	}

	return (
		<WriteContainer>
			<MainHead>{'이야기 전달'}</MainHead>
			<TitleWrap>
				<CategoryContainer categories={categories}/>
				<TitleInput type='text' value={title} placeholder={'제목'} onChange={(e) => {setTitle(e.target.value)}} />
			</TitleWrap>
			<ContentWrap>
				<ContentInput type='text' value={content} placeholder={'본문'} onChange={(e) => {setContent(e.target.value)}} />
			</ContentWrap>
			<SubmitBtn onClick={handleSubmit}>{'등록하기'}</SubmitBtn>		
		</WriteContainer>
	)

};


const WriteContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

`;

const MainHead = styled.h1`
	text-align: center;
	margin-top: 50px;
`

const TitleWrap = styled.div`
	display: flex;
	margin: 30px 0 10px 0;
`;

const CategorySelector = styled.select`
	width: 80px;
	margin-right: 15px;
`

const TitleInput = styled.input`
	width: 705px;
	height: 30px;
	padding-left: 5px;
`;

const ContentWrap = styled.div`
	display: flex;
	margin: 15px;
`;

const ContentInput = styled.input`
	width: 800px;
	height: 400px;
	padding-left: 5px;
`;

const SubmitBtn = styled.button`
	border: 1px solid lightgray;
	border-radius: 5px;
	background-color: white;
	&:active {
		background-color: lightgray;
	}
`;

export default PostingPage;