import { useCallback, useState } from 'react';

export default function useFormEditMode(initValue = true) {
  const [editMode, setEditMode] = useState(initValue);

  const setFormToEditMode = useCallback(() => setEditMode(true), []);

  return { editMode, setFormToEditMode, setEditMode };
}
