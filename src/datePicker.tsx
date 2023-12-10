import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const DatePickerExample = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      value={startDate}
      onChange={date => setStartDate(date)}
    />
  );
};

export default DatePicker;