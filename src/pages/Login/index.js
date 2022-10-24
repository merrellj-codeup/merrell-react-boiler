import styled from 'styled-components'
import CodeyLogo from './images/codey.webp'
import GithubLogo from './images/github_logo.svg'

const LoginPage = (props) => {

  return (
    <LoginWrapper>
      <LogosContainer>
        <LogoWrapper>
          <LoginLogo src={CodeyLogo} />
        </LogoWrapper>
        <div>+</div>
        <LogoWrapper>
          <LoginLogo src={GithubLogo} />
          </LogoWrapper>
      </LogosContainer>
      <LoginBox>
        <div>The <strong>Codeup Curriculum app</strong> uses <strong>Github</strong> to determine if you have access. Make sure you are a member of the <strong>CodeupClassroom Organization</strong>.</div>
        <LoginButton onClick={props.doLogin}>
          {props.isPending ? "Loading..." : "Login With Github"}
        </LoginButton>
      </LoginBox>
    </LoginWrapper>
  )
}
const LoginButton = styled.a`
    padding-top: 8px;
    padding-bottom: 8px; 
    border-radius: 4px;
    background-color: #769e48;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
`
const LoginBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 30px;
  flex-direction: column;
  align-self: center;
  grid-row-gap: 20px;
  border: 1px solid #d8dee4;
  background-color: #f6f8fa;
  box-shadow: 0 0 10px -6px #000;
  text-align: center;
`
const LoginLogo = styled.img`
  width: 60px;
  height: 60px;
  flex: 0 0 auto;
  object-fit: contain;
`
const LogoWrapper = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`
const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-column-gap: 20px;
`
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 30px;
`
export default LoginPage