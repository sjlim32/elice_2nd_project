import React, { useState } from 'react'
import styled from 'styled-components'

function Pagination({totalPosts, limit, page, setPage}) {
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

export default Pagination;