import { Input, PasswordInput } from "@mantine/core";
import { IconLock, IconUserCircle } from "@tabler/icons-react";
import { styled } from "styled-components";

const Login = () => {
  return (
    <Container>
      <Form action="">
      <Input icon={<IconUserCircle />} placeholder="Your UserName" radius="md" />
        <PasswordInput
          label="Your password"
          placeholder="Your password"
          icon={<IconLock size="1rem" />}
        />
        <LoginBtn type="submit">Login</LoginBtn>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  /* margin-top: 20px; */
  /* border: 1px solid red; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    padding: 0.5rem;
  }
`;
const LoginBtn = styled.button`
  padding: 0.6rem;
  color: white;
  background-color: #3939f4;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
