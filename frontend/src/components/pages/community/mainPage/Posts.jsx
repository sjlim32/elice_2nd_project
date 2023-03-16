import styled from 'styled-components';
import loadingImg from '../../../../images/loadingImg.png';
import { Link } from 'react-router-dom';

function Posts({contents}){
		return (
			<ContentWrap>
				{
					contents !== undefined ? contents.map((post, idx) => { 
						return (
							<Content key={idx}>
								<SpanNo subject="no">{post.id}</SpanNo>
								<SpanTitle subject="title">
									<Link to={`/posts/:${post.id}`}>{post.email}</Link>
								</SpanTitle>
								<SpanAuthor subject="author">{post.username}</SpanAuthor>
								<SpanDate subject="date">{post.name}</SpanDate>
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

const ImageWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export default Posts;