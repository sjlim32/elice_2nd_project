import React, { useState } from "react";
import * as API from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

function MyPage() {

	return(
		<Container>
			<MainHead>My Page</MainHead>
			<MyPageWrap>
				<BtnWrap>
					<Btn>내가 쓴 댓글 보기</Btn>
					<Btn>내가 쓴 게시글 보기</Btn>
				</BtnWrap>
				<Show>

				</Show>
			</MyPageWrap>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`

const MainHead = styled.h1`
  text-align: center;
	margin: 80px 0 40px 0;
`;

const MyPageWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: top;
	align-items: center;

	width: 1300px;
	height: 1200px;

	border: 1px solid lightgray;
`

const BtnWrap = styled.div`
	display: flex;
	justify-content: center;

	gap: 40px;
`

const Btn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	margin: 30px 0 30px 0;

	width: 150px;
	height: 50px;

	background-color: white;
	border: 1px solid lightgray;
	border-radius: 5px;
`

const Show = styled.div`
	display: flex;
	// justify-content: center;
	// align-items: center;

	width: 1200px;
	height: 1070px;
	
	border: 1px solid lightgray;
`

export default MyPage;