import './style.css';
import React, { useState } from 'react';
import Crypto from '../../lib/Crypto';
function Hash(){
    const [hash256, setHash256] = useState();

    return (
        <div className="block" id="block"> 
            <form className="content-block">
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Data:</b></label>
                    <div className="col-sm-10">
                    <textarea name="textData" id="textData" form="block" onChange={e => {setHash256(Crypto.createHash256BaseHex(e.target.value))}}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Hash:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="valueHash" value={hash256} disabled/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Hash;