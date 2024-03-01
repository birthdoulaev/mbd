import './form-datepicker.styles.scss';

const FormDatePicker = ({ ...otherProps }) => {
    return (
        <div className="date-group">
            <label className="date-label">Due date</label>
            <input type='date' className="date-form-input" {...otherProps} />
        </div>
    )
}

export default FormDatePicker;