import { useContext } from 'react';
import AppContext from '../context/App/AppContext';

export default function useAppContext() {
  return useContext(AppContext);
}
