import { useReducer, useState } from 'react';
import './Data.css';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export function DataForm() {

    let [formData, setFormData] = useReducer(formReducer, {});
    let [submitting, setSubmitting] = useState(false);

    let handleSubmit = e => {
        e.preventDefault();
        setSubmitting(true);
    }

    let handleChange = e => {
        let isCheckbox = e.target.type === 'checkbox';
        setFormData({
            name: e.target.name,
            value: isCheckbox ? e.target.checked : e.target.value,
        })
    }

    return (
        <>

            <form onSubmit={handleSubmit}>

                <div className='area1'>
                    <div className='email'>
                        <label >Email</label><br />
                        <input type="text" name="Email" placeholder='Enter email' onChange={handleChange}></input>
                    </div>
                    <div className='name'>
                        <label>Name</label><br />
                        <input type="text" name="Name" placeholder='Full name' onChange={handleChange}></input>
                    </div>
                </div>

                <div className='address1'>
                    <label>Address</label>
                    <input type="text" name="Address" placeholder='1234 main street' onChange={handleChange}></input>
                </div>
                <div className='address2'>
                    <label>Address2</label>
                    <input type="text" placeholder='Apartment, Studio or Floor' ></input>

                </div>
                <div className='area2'>
                    <div className='city'>
                        <label>City </label><br />
                        <input type="text" name="City" onChange={handleChange}></input>

                    </div>
                    <div className='province'>
                        <label>Province </label><br />
                        <select name='Province' onChange={handleChange}>
                            <option>choose...</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Northwest Territories">Northwest Territories</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Nunavut">Nunavut</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec">Quebec</option>
                            <option value="Saskatchewan">Saskatchewan</option>
                        </select>
                    </div>

                    <div className='pc'>
                        <label>Postal Code</label><br />
                        <input type="text" name='Postal Code' onChange={handleChange}></input>
                    </div>

                </div>

                <div className='agr'>
                    <input type='checkbox' name='Agreement'></input>
                    <label>Agree Term & Conditions?</label>
                </div>

                <div className='cen_btn'>
                    {/* <button className='ntm' type='submit'>Submit</button> */}
                    <input className='btn' type="submit" value="Submit"></input>
                </div>
            </form>

            {submitting &&
                <div className='res'>
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name} style={{}}>
                                <span style={{ color: "green", fontWeight: "bold"}}>{name}:</span>
                                <span style={{float:"right", textAlign:""}}>{value.toString()}</span>
                            </li>
                        ))}

                    </ul>
                </div>
            }
        </>

    );
}


