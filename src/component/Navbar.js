import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setAuthenticate, authenticate }) => {
  const navi = useNavigate();
  const menuList = [
    '여성',
    'Devided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M HOME',
    'Sale',
    '지속가능성',
  ];

  const search = (e) => {
    if (e.key === 'Enter') {
      let keyword = e.target.value;
      console.log(keyword);

      navi(`/?q=${keyword}`);
    }
  };

  const goToLogin = () => {
    authenticate ? setAuthenticate(false) : navi('/login');
  };
  return (
    <NavContainer>
      <Login onClick={goToLogin}>{authenticate ? '로그아웃' : '로그인'}</Login>
      <Logo onClick={() => navi('/')}>
        <img
          src="https://i.namu.wiki/i/hjrE_CS9uuZnz80o0cPOpeANaSDSjEvhfrtsEQj_fSmjyqh1BfXuQXcmNLqO-GZxcetS3OGI0Os4ky94FfOBJeh0snuT8YMUkLRFZ6mUxGITtmQJ9d1c6ifsZyOcI89LhNWIUrAd7pDhyfEi23UnPw.svg"
          alt=""
          srcset=""
        />
      </Logo>
      <MenuContainer>
        <ul>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
        <Input onKeyPress={(e) => search(e)}></Input>
        {/* 검색 방법 */}
      </MenuContainer>
    </NavContainer>
  );
};

export default Navbar;

const Logo = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Login = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 40px;
`;

const MenuContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Input = styled.input.attrs({ type: 'text', placeholder: '제품 검색' })`
  position: absolute;
  right: 0px;
`;
