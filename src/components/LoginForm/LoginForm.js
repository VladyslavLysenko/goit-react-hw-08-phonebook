import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  InnerWrap,
  SectionForm,
  CommonButton,
  Input,
  RegFormWrapper,
} from './LoginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegFormWrapper onSubmit={handleSubmit} autoComplete="off">
      <SectionForm>
        <InnerWrap>
          <label>
            Email
            <Input type="email" name="email" placeholder="Add your Email..." />
          </label>
        </InnerWrap>
      </SectionForm>
      <SectionForm>
        <InnerWrap>
          <label>
            Password
            <Input
              type="password"
              name="password"
              placeholder="Add your Password..."
            />
          </label>
        </InnerWrap>
      </SectionForm>

      <CommonButton type="submit">Log In</CommonButton>
    </RegFormWrapper>
  );
};
