import { useMemo } from 'react';

import { LOGIN_FORM } from '../../../../config';
import { useFormikMemorizer } from '../../../../hooks';

export default function useLoginMemorizer() {
  const formikSectionData = useFormikMemorizer(LOGIN_FORM);

  const loginFormikData = useMemo(
    () => ({
      ...formikSectionData,
      loginFormValues: formikSectionData.formSectionValues,
      isLoginFormTouched: formikSectionData.isFormSectionTouched,
    }),
    [formikSectionData]
  );

  return loginFormikData;
}
