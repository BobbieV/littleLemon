import DatePicker, {ReactDatePickerProps} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerComponentProps extends ReactDatePickerProps {
    selectedDate: Date | null;
    handleDateSelect: (date: Date | null) => void;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
    selectedDate,
    handleDateSelect,
}) => {
return (
    <div className="availInput inputDateWrapper">
        <label>Date & Time of Reservation:</label>
        <DatePicker
            selected={selectedDate}
            onSelect={handleDateSelect}
            showTimeSelect
            dateFormat="Pp"
            onChange={(date: Date | null) => handleDateSelect(date)} />
        </div>);
};

export default DatePickerComponent;