import { useCallback, useState } from 'react';

export default function useFormEditMode(initValue = true) {
  const [editMode, setEditMode] = useState(initValue);

  const setFormToEditMode = useCallback(() => setEditMode(true), []);

  const setFormEditMode = useCallback(status => setEditMode(status), []);

  const setFormToViewMode = useCallback(() => setEditMode(false), []);

  return {
    editMode,
    viewMode: !editMode,
    setFormToEditMode,
    setFormEditMode,
    setFormToViewMode,
  };
}
