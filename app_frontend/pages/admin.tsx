import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* ทำให้ Container ขยายตามความสูงของหน้าจอ */
`;

const Main = styled.main`
  text-align: center;
  font-family: "JetBrains Mono", monospace;
  border-radius: 20px;
  width: 400px;
  border: 2px solid black;
  padding: 20px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const LinkButton = styled.button`
  background-color: #E67E22;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 20px;
  

  &:hover {
    background-color: #007C1B;
  }
`;

export default function AdminSystem() {
  const router = useRouter();

  const handlePm = () => {
    router.push('/signin');
  };

  const handleUm = () => {
    router.push('/signin'); 
  };
  const handlekm = () => {
    router.push('/signin'); 
  }

  return (
    <Container>
      <Main>
        <h1>Admin Dashboard</h1>
        <Links>
          <LinkButton as="a" href="http://127.0.0.1:3341/admin" onClick={handlePm}>Admin Site : Product Manage</LinkButton>
          <LinkButton as="a" href="http://127.0.0.1:3342/admin" onClick={handleUm}>Admin Site : User Manage</LinkButton>
          <LinkButton onClick={handlekm}>Back to Sign In</LinkButton>
        </Links>
      </Main>
    </Container>
  );
}