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
import * as searchService from '~/services/searchService';

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

  const handlChangeInput = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setsearchValue(searchValue);
    }
  };

  return (
    //Using a wrapper <div> tag around the reference element solves
    // this by creating a new parentNode context.
    <div>
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
            placeholder="Search accounts and videos"
            spellCheck="false"
            onChange={handlChangeInput}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loadingResult && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loadingResult && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
