import { useContext } from 'react';
import LoginFormContext from '../context/LoginFormContext';

export default function useLoginFormContext() {
  return useContext(LoginFormContext);
}
