import { useState } from "react";
import DatePicker from "react-datepicker";

() => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp">
        <div style={{ color: "red" }}>Don't forget to check the weather!</div>
      </DatePicker>
    );
  };

export default DatePicker;