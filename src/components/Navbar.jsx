import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Container = styled.div`
  position: sticky;
  top: 0;
  height:  56px;
  background-color: ${({theme}) =>theme.bgLighter};
  overflow: hidden;
  top: 0;
  `;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px; 
  position: relative;
`;
const Search = styled.div`
  width: 30%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  // background-color:  red;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 300;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {
  return (
   <Container>
     <Wrapper>
       <Search>
         <Input placeholder='Search'/>
          <SearchIcon />
       </Search>
       <Link to='signin' style={{textDecoration: 'none'}}> 
       </Link>
       <Button><AccountCircleIcon />SIGN IN</Button>
     </Wrapper>
   </Container>
  )
}

export default Navbar