import React, { useState, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';

import { ISearchFieldProps } from 'interfaces/common';

import useDebounce from 'hooks/useDebounce';

import styles from './SearchField.module.scss';

const SearchField: React.FC<ISearchFieldProps> = (props) => {

  const { placeholder, onSearch } = props;

  const [searchText, setSearchText] = useState('');

  const debounceValue = useDebounce(searchText, 500);

  useEffect(() => {

    if (debounceValue === '') {
      return;
    }

    onSearch(debounceValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  function handleKeyDownEvent(event: any) {

    if (event.key !== 'Enter') {
      return;
    }

    onSearch(searchText);

  }

  const searchControlAttributes = {
    type: 'text',
    placeholder: placeholder ? placeholder : 'SEARCH',
    className: styles.searchFieldControl,
    value: searchText,
    onChange(event: any) {
      setSearchText(event.target.value);
    },
    onKeyDown: handleKeyDownEvent
  };

  return (
    <div className={styles.searchFieldMain}>
      <SearchIcon className={styles.searchIcon} />
      <input {...searchControlAttributes} />
    </div>
  );

};

export default SearchField;