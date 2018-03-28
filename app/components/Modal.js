import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

import Paper from './Paper';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '90%',
    maxHeight: '90%',
    maxWidth: '38em',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
    backgroundColor: 'transparent',
    overflow: 'visible',
  },
};

Modal.setAppElement('#app');

const ModalModule = ({ children, ...props }) => (
  <Modal style={customStyles} {...props}>
    <Paper maxHeight="85vh">
      {children}
    </Paper>
  </Modal>
);

ModalModule.propTypes = {
  children: PropTypes.node,
};

export default ModalModule;
