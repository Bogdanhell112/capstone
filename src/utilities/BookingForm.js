import { Button, VStack, Box } from '@chakra-ui/react';
import './BookingForm.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { fetchAPI, submitAPI } from '../utilities/api';

function BookingForm({ bookedSlots, onSubmit, onDateChange }) {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const validationSchema = Yup.object().shape({
    date: Yup.date().required('Date is required').min(new Date(), 'Date must be in the future'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number().required('Number of guests is required').min(1, 'Must be at least 1').max(10, 'Cannot exceed 10'),
    occasion: Yup.string().required('Occasion is required'),
  });

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  const {values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue} = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: '',
      occasion: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
     onSubmit(values);
    },
  });

    console.log(values);
    console.log(errors);


  useEffect(() => {
    fetchAPI(selectedDate).then(slots => setAvailableSlots(slots));
  }, [selectedDate]);


// get the submited values and update the available slots

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    onDateChange(date);
    setFieldValue('date', date);
    fetchAPI(date).then(slots => setAvailableSlots(slots));
  };

  return (
    <VStack backgroundColor='white'>
        <form id="form" className='form' onSubmit={handleSubmit}>
            <VStack border='4px'margin={5} borderRadius='18' borderColor="#495e57" justify='center' justifyContent='space-between' alignContent='center' textAlign='left' spacing={5} padding='2rem'>
            <Box display='grid' fontFamily='karla'  fontSize={18} fontWeight='bold' >
            <label htmlFor="date">Select date</label>
              <input
              type="date"
              placeholder="Select date"
              id="date"
              name="date"
              onChange={handleDateChange}
              value={values.date}
              onBlur={handleBlur}

              className={touched.date && errors.date ? 'input-error' : null}/>
              {errors.date && touched.date && <p className='error'>{errors.date}</p>}
            </Box>
            <Box display='grid' fontFamily='karla'  fontSize={18} fontWeight='bold' >
          <label htmlFor="time">Choose time</label>
          <select
          placeholder="Select time"
          id="time"
          name="time"
          value={values.time}
          onChange={handleChange}
          onBlur={handleBlur}
          className={ errors.time && touched.time ? 'input-error' : null}>
            {availableSlots.map(slot => (
              <option key={slot} value={slot} disabled={bookedSlots.includes(slot)}>{slot}</option>))}
          </select>
          {errors.time && touched.time && <p className='error'>{errors.time}</p>}
          </Box>

          <Box display='grid' fontFamily='karla'  fontSize={18} fontWeight='bold' >
          <label htmlFor='guests'>Number of guests</label>
          <input type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={handleChange}
          value={values.guests}
          className={ errors.guests && touched.guests ? 'input-error' : null}/>
          {errors.guests && touched.guests && <p className='error'>{errors.guests}</p>}
          </Box>

          <Box display='grid' fontFamily='karla'  fontSize={18} fontWeight='bold' >
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion"
          name="occasion"
          placeholder="Select occasion"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.occasion}
          className={touched.occasion && errors.occasion ? 'input-error' : null}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          </select>
          {errors.occasion && touched.occasion && <p className='error'>{errors.occasion}</p>}
          </Box>

          <Button
  type='submit'
  isLoading={isSubmitting}
  loadingText='Submitting'
  fontFamily='Karla'
  fontSize='18'
  fontWeight='extrabold'
  textColor='black'
  backgroundColor='#f4ce14'
  padding='1.5rem 3rem'
  borderRadius='16' w='3xs' boxShadow='lg'
  _hover={{ boxShadow: 'none', backgroundColor: '#495e57', textColor: 'white' }} _active={{ boxShadow: 'none' }} _focus={{ boxShadow: 'none' }}
>
  Make Your reservation
</Button>
</VStack>
        </form>
    </VStack>

  );
}

export default BookingForm;