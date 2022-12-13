// pages/Game.js
import { NavLink } from "react-router-dom";

const Game = ({match})=>{

    const gameStyle={
        backgroundColor:"green",
        height:"300px"
    };

    // "/game/:name" 의 name 을 읽어오기
    let gameName = match.params.name; // 경로 파라미터
    if(!gameName){
        gameName="기본";
    }

    return (
        <div style={gameStyle}>
            <h3>game 페이지 입니다.</h3>
            <p><strong>{gameName}</strong> 게임을 시작합니다.</p>
            <NavLink to='/'>홈으로</NavLink>
        </div>
    );
}

export default Game;