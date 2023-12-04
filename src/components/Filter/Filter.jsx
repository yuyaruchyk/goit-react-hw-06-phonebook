

import { FilterSection, Input, StyledTitle, StyledSection } from './Filter.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterReducer.js'; 
import { selectFilter } from 'redux/selectors.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter); 

  const handleSearchNumber = value => {
    dispatch(setFilter(value));
  };

  return (
    <FilterSection>
      <StyledSection>
        <StyledTitle>Find contacts by name</StyledTitle>
        <Input
          type="text"
          value={filter}
          onChange={e => handleSearchNumber(e.target.value)}
          placeholder="Number filter"
        />
      </StyledSection>
    </FilterSection>
  );
};
