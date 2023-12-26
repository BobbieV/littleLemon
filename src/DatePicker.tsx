import ReactDatePicker, {ReactDatePickerProps} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';



interface DatePickerComponentProps extends ReactDatePickerProps {
    handleDateSelect: (date: Date | null) => void;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
    handleDateSelect,
    onChange,
    ...props //Collect remaining props for ReactDatePicker//
}) => {

    const [showDatePicker, setShowDatePicker] = useState(false);

    const toggleDatePicker = () => {
        setShowDatePicker((prevState) => !prevState);
    }



return (
    <div className="availInput inputDateWrapper ">

        <label>Date & Time of Reservation:</label>
        {props.selected !== null ? (
            <p>Selected Date/Time: {props.selected?.toLocaleString()}</p>
             ) : null}
        <FontAwesomeIcon
                icon={faCalendar}
                className="calendarIcon"
                onClick={toggleDatePicker}
        />
        {showDatePicker && (
            <ReactDatePicker
                showTimeSelect
                dateFormat="Pp"
                selected={props.selected}
                onChange={(date: Date | null) =>{
                    handleDateSelect(date);
                    toggleDatePicker();
                }}
                {...props}
                />
        )}
        
        </div>
        );
};

export default DatePickerComponent;