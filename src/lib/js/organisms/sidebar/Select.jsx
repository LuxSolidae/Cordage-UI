// @flow
import * as React from 'react';
import { t as typy } from 'typy';
import classNames from 'classnames';
import arrow from './../../../img/down-arrow.svg';


type Option = {
  key: number,
  text: string,
  icon?: string,
}

type Props = {
  /**
   * Expects the key of the selected option.
   */
  defaultSelected?: number, 
  options: Option[],
  onSelect?: (option: Option) => void,
}

export const useOutsideCallback = (ref, setOpen) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export const Select = ({ options, onSelect, defaultSelected }: Props) => {
  const [selected, setSelected] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef(null);
  useOutsideCallback(wrapperRef, setOpen);

  React.useEffect(() => {
    let newSelected;
    if (typy(defaultSelected).isNumber) {
      const [defaultOption] = options
        .filter(option => option.key === defaultSelected);
      newSelected = defaultOption;
    } else {
      const [defaultSelectedOption] = options;
      newSelected = defaultSelectedOption;
    }
    setSelected(newSelected);
  }, []);

  return (
    <div ref={wrapperRef} className='sidebar-select'>
      <div
        className='sidebar-selected'
        onClick={() => {
          setOpen(!open);
        }}
      >
        {
          selected.icon && (
            <div className='image-wrapper'>
              <img src={selected.icon}/>
            </div>
          )
        }
        <span className='selected-title'>
          {typy(selected.text).safeString}
        </span>
        <img
          src={arrow}
          className={
            classNames(
              'accordion-arrow',
              {open},
            )
          }
        />
      </div>
      <div
        className={
          classNames(
            'sidebar-select-options',
            {open},
          )
        }
      >
        {
          options.map((option) => (
            <div 
              className='sidebar-select-option'
              key={`option-${option.key}`}
              onClick={() => {
                setOpen(false);
                setSelected(option);
                if (onSelect) {
                  onSelect(option);
                }
              }}
            >
              {
                option.icon && (
                  <div className='image-wrapper'>
                    <img src={option.icon}/>
                  </div>
                )
              }
              {option.text}
            </div>
          ))
        }
      </div>
    </div>
  )
};

Select.defaultProps = {
  onSelect: undefined,
  selected: undefined,
};

export default Select;
