import React, { useState } from 'react'

export default function TournInputs() {

    const [input, setInput] = useState({
        tournament: "",
        course: "",
        city: "",
        state: "",
        start: "",
        finish: "",
    })

    function handleChange(event) {
        const {name, value} = event.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value,
            }
        })
    }

    return (
        <div className='tourn-inputs-wrapper'>
            <div className="text-inputs-wrapper">
                <input 
                    onChange={handleChange}
                    name='tournament'
                    value={input.tournament}
                    className="input tournament-field" 
                    type='text' 
                    placeholder="Tournament"
                ></input>

                <input 
                    onChange={handleChange}
                    name='course'
                    value={input.course}
                    className="input course-field" 
                    type='text' 
                    placeholder="Golf Course" 
                ></input>

                <input 
                    onChange={handleChange}
                    name='city'
                    value={input.city}
                    className="input city-field" 
                    type='text' 
                    placeholder="City" 
                ></input>

                <input 
                    onChange={handleChange}
                    name='state'
                    value={input.state}
                    className="input state-field" 
                    type='text' 
                    placeholder="State" 
                ></input>
            </div>

            <div className="date-inputs-wrapper">
                <label>
                    <input 
                        onChange={handleChange}
                        name='start'
                        value={input.start}
                        className="input start-field" 
                        type='date' 
                    ></input>
                    Start Date
                </label>
                <input 
                    onChange={handleChange}
                    name='finish'
                    value={input.finish}
                    className="input finish-field" 
                    type='date' 
                    placeholder="Finish Date"
                ></input>
            </div>
        </div>
    )
}
