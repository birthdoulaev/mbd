import { Fragment } from "react";

import './form-datepicker.styles.scss';

const FormDatePicker = ({ ...otherProps }) => {
    return (
        <Fragment>
            {/* <input type="date" className="date-input" {...otherProps} />
            <label
                className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                Due Date
    </label>*/}
            <section class="full" >
                <div class="form-label-group">
                    <input type="text" id="inputCheckin" class="form-control" placeholder="Check-in" name="checkin" autocomplete="off" onfocus="(this.type='date')" onblur="if(!this.value) this.type='text'" required />
                        <label for="inputCheckin">Check-in</label>
                </div>
            </section>
        </Fragment>
    )
}

export default FormDatePicker;