import { FormLabel, NumberInput,
NumberInputField,
NumberInputStepper,
NumberIncrementStepper,
NumberDecrementStepper,
Select,
Button,
VStack } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function BookingForm({ bookedSlots, availableSlots, onSubmit }) {
  const validationSchema = Yup.object().shape({
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number().required('Number of guests is required').min(1, 'Must be at least 1').max(10, 'Cannot exceed 10'),
    occasion: Yup.string().required('Occasion is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  return (
    <VStack backgroundColor='white'>
    <Formik initialValues={{ date: '', time: '', guests: 1, occasion: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
            <FormLabel>Date</FormLabel>
            <Field type="date" name="date" />
            <ErrorMessage name="date" component="div" />

          <label htmlFor="time">Choose time</label>
          <Field as="select" id="time" name="time">
            {availableSlots.map(slot => (
              <option key={slot} value={slot} disabled={bookedSlots.includes(slot)}>
                {slot}
              </option>
            ))}
          </Field>
          <ErrorMessage name="time" component="div" />

          <FormLabel>Number of guests</FormLabel>
          <NumberInput max={10} min={1}>
            <NumberInputField />
            <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
            </NumberInputStepper>
            </NumberInput>

          <ErrorMessage name="guests" component="div" />

          <FormLabel>Occasion</FormLabel>
          <Select id="occasion" placeholder='Select occasion'>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Select>
          <ErrorMessage name="occasion" component="div" />

          <Button
  type='submit'
  isLoading={isSubmitting}
  loadingText='Submitting'
  backgroundColor='#f4ce14'
  fontFamily='karla'
  fontWeight='extrabold'
  textColor='black'
  borderRadius='16'
  w={40}
>
  Make Your reservation
</Button>
        </Form>
      )}
    </Formik>
    </VStack>
  );
}

export default BookingForm;