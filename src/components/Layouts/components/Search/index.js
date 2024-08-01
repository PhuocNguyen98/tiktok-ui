import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/serchService';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setsearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loadingResult, setLoadingResult] = useState(false);

  const debounceValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoadingResult(true);

      const result = await searchService.search(debounceValue);

      setSearchResult(result);
      setLoadingResult(false);
    };

    fetchApi();
  }, [debounceValue]);

  const handleClear = () => {
    setsearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <TippyHeadless
      interactive
      visible={searchResult.length > 0 && showResult}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          type="text"
          placeholder="Tìm kiếm"
          spellCheck="false"
          onChange={(e) => setsearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && !loadingResult && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loadingResult && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')}>
          <SearchIcon className={cx('fill')} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
