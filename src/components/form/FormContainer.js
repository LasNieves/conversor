import React from 'react';
import { FormLabel, Stack } from '@chakra-ui/react';
import CurrencyIcon from './CurrencyIcon';
import { useFormikContext } from 'formik';

import FormInput from './FormInput';
import FormSelect from './FormSelect';

const FormContainer = ({ name }) => {
  const { values } = useFormikContext();

  return (
    <Stack
      width='325px'
      height='66px'
      padding='17px'
      paddingBottom='8px'
      margin='auto'
      direction='row'
      alignItems='center'
    >
      <Stack direction='row' alignItems='center' gap={1} width='45%'>
        <FormLabel margin={0}>
          <CurrencyIcon currency={values[name]} />
        </FormLabel>

        <FormSelect name={name} />
      </Stack>

      <Stack width='55%'>
        <FormInput name={name} />
      </Stack>
    </Stack>
  );
};

export default FormContainer;