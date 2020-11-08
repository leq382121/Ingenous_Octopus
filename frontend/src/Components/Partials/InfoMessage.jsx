import React from 'react';

import infoMessage from '../../images/infoMessage.svg';

import './InfoMessage.css';

export const InfoMessage = ({type, message}) => {

  const infoIcon = () => {
    switch (type) {
      case 'error': {
        return <img></img>;
      }
      case 'waring': {
        return <img></img>;
      }
      case 'info': {
        return <img className='info' src={infoMessage} alt='info'/>;
      }
      default:
        return <img className='info' src={infoMessage} alt='info'/>;
    }
  }

  return (
    <div className={'InfoMessage ' + (type && type)}>
      {infoIcon()}
      <p>{message && message}</p>
    </div>
  )
}