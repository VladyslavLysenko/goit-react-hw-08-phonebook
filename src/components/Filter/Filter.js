import React from 'react';
import { Input, InnerWrap, SectionForm } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <InnerWrap>
      <SectionForm>
        <label>
          Find contacts by Name
          <Input
            name="filter"
            onChange={evt => onChange(evt.currentTarget.value)}
            type="text"
            placeholder="Search contact..."
          />
        </label>
      </SectionForm>
    </InnerWrap>
  );
};

export default Filter;
