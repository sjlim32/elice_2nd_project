import styled from 'styled-components';
import loadingImg from '../../../../images/loadingImg.png';
import { Link } from 'react-router-dom';

function Posts({contents}){

		// ! SpanNo = get으로 받아온 게시물을 시간 순으로 정렬 후 map 돌려서 리스트로 만듦
		// ! SpanCate = post.categoryId
		// ! spanTitle = post.title
		// ! SpanWriter = 
		// 1. post.writer.role = 'user' -> '익명'
		// 2. post.writer.role = 'support' -> const author = post.writer.split('@')
		// 			-> SpanAuthor = author[0]
		// ! SpanDate = post.createdAt

		return (
			<ContentWrap>
				{
					contents !== undefined ? contents.map((post, idx) => { 
						return (
							<Content key={idx}>
								<SpanNo className="no">{post.id}</SpanNo>
								<SpanCate className="category">{post.username}</SpanCate>
								<SpanTitle className="title">
									<Link to={`/posts/${post.id}`}>{post.email}</Link>
								</SpanTitle>
								<SpanWriter className="writer">{post.username}</SpanWriter>
								<SpanDate className="date">{post.name}</SpanDate>
							</Content>
						)
					})
					: (
							<ImageWrap>
								<img src={loadingImg} alt="loadingImg" style={{width: 100}}/>
							</ImageWrap>
					)
				}	
			</ContentWrap>
		)
	};

	const ContentWrap = styled.div`

`;

const Content = styled.div`
	display: flex;
	width: 1200px;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 10px;
	padding-top: 15px;
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

const SpanWriter = styled.span`
	display: flex;
	width: 200px;
`;

const SpanDate = styled.span`
	display: flex;
	width: 200px;
	padding-right: 15px;
`;

const ImageWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export default Posts;