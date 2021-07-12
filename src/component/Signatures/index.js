import React, { useState } from 'react';
import './style.css'
import Crypto from '../../lib/Crypto';

function getCookie(){
    let cookies = document.cookie.split("; ").map(item => {
        let [key, value] = item.split("=");
        return {[key]: value}
    })
    return Object.assign({}, ...cookies);
}
function createCookie(str){
    document.cookie = "msg="+str+"; max-age=86400; path=/;";
}

const style = {
    success:{ backgroundColor: "#28a745"},
    failed:{backgroundColor: "#dc3545"}
}

function Signatures(){
    const [active, setActive] = useState(false);
    const cookies = getCookie();
    const [privateKey] = useState(cookies["privateKey"]);
    const [msg, setMsg] = useState(cookies["msg"]?cookies["msg"]:"")
    const [publicKey] = useState(cookies["publicKey"]);
    const [signature, setSignature] = useState();
    const [verify, setVerify] = useState(false);
    return (
        <>
        <div className="content">
            <input class="btn-change-form" type="button" value="Sign" onClick={
                (e)=>{
                    e.preventDefault();
                    setActive(false);
                }
            }/>
            <input class="btn-change-form" type="button" value="Verify"   onClick={
                (e)=>{
                    e.preventDefault();
                    setActive(true);
                }
            }
            />
        </div>
        <div className="block" id="block" style={{marginTop:"0px"}}> 
            
            <form className={"content-block" + (active?" d-none":"")} id="sign">
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Message:</b></label>
                    <div className="col-sm-10">
                    <textarea name="textData" id="textData" form="block" value={msg} onChange={e => {
                        setMsg(e.target.value);
                        createCookie(e.target.value);
                    }} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>privateKey:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="privateKey-sign" value={privateKey} disabled/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2"><i className="icon-spinner icon-spin icon-large"></i></div>
                    <div className="col-sm-10">
                    <input className="btn btn-primary" type="button" value="Sign" onClick={(e)=>{
                        setSignature(Crypto.signMsg(msg, privateKey));
                    }}/>
                    </div>
                </div>
                
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Sign msg:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="privateKey-sign" value={signature} disabled/>
                    </div>
                </div>

            </form>

            <form className={"content-block"+ (!active?" d-none":"")} id="verify" style={verify?style.success: style.failed}>
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Message:</b></label>
                    <div className="col-sm-10">
                    <textarea name="textData" id="textData" form="block" value={msg} onChange={e => {
                        setMsg(e.target.value);
                        createCookie(e.target.value);
                    }} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>publicKey:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="privateKey" value={publicKey} disabled/>
                    </div>
                </div>

                
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Signature:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="privateKey-verify" value={signature} disabled/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-2"><i className="icon-spinner icon-spin icon-large"></i></div>
                    <div className="col-sm-10">
                    <input className="btn btn-primary" type="button" value="verify" onClick={(e)=>{
                        setVerify(Crypto.verifyMsg(msg, publicKey, signature))
                    }}/>
                    </div>
                </div>
            </form>
        </div>
        
    </>
    );
}

export default Signatures;