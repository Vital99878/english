import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.scss';

function ModalDelete({ keys, exerciseNumber, open, closeModal }) {
  keys.exerciseNumber = exerciseNumber;

  const dataRef = useRef();
  function onCopy() {
    const copiedData = dataRef.current;
    copiedData.select();
    document.execCommand('copy');
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  return (
    open && (
      <div className={classes.modal}>
        <div className={classes.triangle}>tr</div>
        <textarea ref={dataRef}>{JSON.stringify(keys)}</textarea>

        <div className={classes.buttons}>
          <button type="button" onClick={onCopy}>
            Copy answers
          </button>
          <button type="button">
            <a href="https://www.web-telegram.ru/#/im?p=@Vital_Lihoy">Send To My Telegram</a>
          </button>
          <button type="button">
            <a href="https://vk.com/im?sel=250003017">Send To VK</a>
          </button>
          <button
            className={classes.no}
            type="button"
            onClick={(evt) => {
              evt.stopPropagation();
              closeModal();
            }}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}

ModalDelete.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  keys: PropTypes.func.isRequired,
  exerciseNumber: PropTypes.number.isRequired,
};
export default ModalDelete;
