import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ search, onSearch }) => (
  <Label>
    Find contact by name
    <input type="text" value={search} onChange={onSearch} />
  </Label>
);

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
