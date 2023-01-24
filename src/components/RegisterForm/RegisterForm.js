import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import {
  InnerWrap,
  SectionForm,
  CommonButton,
  Input,
  RegFormWrapper,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
            Username
            <Input type="text" name="name" placeholder="Add your Name..." />
          </label>
        </InnerWrap>
      </SectionForm>
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

      <CommonButton type="submit">Register</CommonButton>
    </RegFormWrapper>
  );
};
