import React from "react";
import styled from "styled-components";


const Div = styled.div`
    width: 50%;
    border: 1px solid black;
    margin-left: 25%;
    margin-bottom: 20px; 
    display: flex;
    background-color: gray;
    
`;

const Info = styled.div`
    margin-left: 10%;
`;

const Img = styled.img`
    width: 30%;
    height: 200px;
`;

const Username = styled.p`
    font-size: 1.1em;
    border-bottom: 1px solid black;
    margin-bottom: 5px;
`;

const Location = styled.p`
    font-style: italic;
`;


const UserCard = (props) => {

    console.log(props);

    return(
        <Div>
            <Img src={props.userInfo.avatar_url} />
            <Info>
                <Username>{props.userInfo.login}</Username>
                <Location>{props.userInfo.location}</Location>
                <a href={props.userInfo.html_url}>{props.userInfo.login}'s profile</a>
            </Info>
        </Div>
    )
}

export default UserCard;