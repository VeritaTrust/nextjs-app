import React, {useState, useEffect, useRef} from 'react';
import {createPopper} from '@popperjs/core';

type Props = {
  hash: string
}

function PopoverVerified({hash}: Props) {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [target, setTarget] = useState(null);
  const [popover, setPopover] = useState(null);
  const popoverRef = useRef<any>(null);

  const showPopover = () => {
    setPopoverVisible(true);
  };

  const hidePopover = () => {
    setPopoverVisible(false);
  };

  const updatePopover = () => {
    if (target && popover) {
      createPopper(target, popover, {
        placement: 'top',
      });
    }
  };

  const handleTargetRef = (element: any) => {
    setTarget(element);
    updatePopover();
  };

  const handlePopoverRef = (element: any) => {
    setPopover(element);
    updatePopover();
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        hidePopover();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popoverRef]);

  const popoverTitle = '<i class="flaticon-cube-3d me-1"></i> Verified via Blockchain';

  return (
    <div className="verified me-lg-3 mb-2" ref={popoverRef}>
      <button
        type="button"
        className="certified small bg-success text-white d-inline px-0 px-1 rounded-3"
        data-bs-html="true"
        data-bs-trigger="focus"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-custom-class="veritatrust-popover"
        data-bs-content={`We use the blockchain to track and verify the transaction. <br><a href='https://goerli.etherscan.io/tx/${hash}' target='_blank'>View the onchain transaction</a> | <a href='#' target='_blank'>What is Blockchain?</a>`}
        ref={handleTargetRef}
        onClick={showPopover}
      >
        <span className="text-white">
          <i className="flaticon-cube-3d me-1"></i> Verified via Blockchain
        </span>
      </button>
      {popoverVisible && (
        <div
          ref={handlePopoverRef}
          className="popover veritatrust-popover"
          data-bs-placement="top"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className="popover-header"
            dangerouslySetInnerHTML={{__html: popoverTitle}}
          />
          <div className="popover-body">
            We use the blockchain to track and verify the transaction. <br/>
            <a
              href={`https://goerli.etherscan.io/tx/${hash}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the onchain transaction
            </a>{' '}
            |{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">
              What is Blockchain?
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopoverVerified;
