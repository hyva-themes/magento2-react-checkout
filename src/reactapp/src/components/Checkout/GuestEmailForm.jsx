import React from 'react';
import { GuestEmailFormManager } from '../../context/Form';
import GuestEmail from './Form/GuestEmail';

function GuestEmailForm() {
  return (
    <GuestEmailFormManager>
      <GuestEmail />
    </GuestEmailFormManager>
  );
}

export default GuestEmailForm;
