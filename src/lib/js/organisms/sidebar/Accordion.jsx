// @flow
import * as React from 'react';
import classNames from 'classnames';
import arrow from '@_src_/img/icons/down-arrow.svg';


export type Props = {
  children: React.Node,
  text: string,

  /** Url or data base 64 */
  icon?: string,
}

const Accordion = ({ children, text, icon }: Props) => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <div className={classNames('sidebar-accordion', {open})}>
      <div
        className="accordion-title-container"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {
          icon && (
            <img src={icon} className='accordion-icon'/>
          )
        }
        <span className='accordion-title'>{text}</span>
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
        className='accordion-content'
        style={!open ? ({
          maxHeight: '0px',
        }) : ({
          maxHeight: document.body.scrollHeight + 'px',
        })}
      >
        {children}
      </div>
    </div>
  )
};

Accordion.defaultProps = {
  icon: undefined,
};

export default Accordion;
