import styled from "styled-components";
import {Link} from 'react-scroll'

export const $Button = styled.button`
    border-radius: 50px;
    background: ${({primary})=> (primary ? '#0285A3' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#f5f5f5' )};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    


`