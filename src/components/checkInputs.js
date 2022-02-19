import React, { useState } from 'react';

export default function CheckInputs() {

    const [checked, setCheck] = useState({
        ajga: false,
        jgs: false,
        kyjrpga: false,
        golfweek: false,
        jrpga: false,
        southern: false
    });

    function handleCheck(event) {
        const name = event.target
        console.log(event);

        setCheck(prevCheck => {
            return {
                ...prevCheck,
                [name]: true
            }
        })

    }
    return (
        <div>
            <div className="tour-selectors-wrapper">
                <label htmlFor='checkbox'>
                    <input 
                        name='ajga'
                        value={checked.ajga}
                        type='checkbox'
                        className='checkbox' 
                        defaultChecked={!checked}
                        onChange={handleCheck} 
                    ></input>
                    AJGA?
                </label>

                <label>
                    <input 
                        name='jgs'
                        type='checkbox' 
                        value={checked.jgs}
                        className='checkbox' 
                        defaultChecked={!checked}
                        onChange={handleCheck} 
                    ></input>
                    JGS?
                </label>

                <label>
                    <input 
                        name='kyjrpga'
                        type='checkbox'
                        value={checked.kyjrpga}
                        className='checkbox' 
                        defaultChecked={!checked}
                        onChange={handleCheck} 
                    ></input>
                    KY JrPGA?
                </label>

                <label>
                    <input 
                        name='golfweek'
                        type='checkbox'
                        value={checked.golfweek}
                        className='checkbox' 
                        defaultChecked={!checked}
                        onChange={handleCheck} 
                    ></input>
                    GolfWeek?
                </label>

                <label>
                    <input 
                        name='jrpga'
                        type='checkbox' 
                        value={checked.jrpga}
                        className='checkbox' 
                        defaultChecked={!checked}
                        onChange={handleCheck} 
                    ></input>
                    US JrPGA?
                </label>

                <label>
                    <input 
                        name='southern'
                        type='checkbox'
                        value={checked.southern}
                        className='checkbox' 
                        defaultChecked={!checked}
                        onChange={handleCheck} 
                    ></input>
                    Southern?
                </label>
            </div>
        </div>
    )
}
