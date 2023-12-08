import '../assets/css/account.css'
import { NextBtn } from './btn_next_account'

export function Account () {
    return(
        <div className='account_container'>
            <div className="Account_header">
                <div className='BtnControl'>
                    <NextBtn symbol='&lsaquo;'></NextBtn> &nbsp; &nbsp;
                    <NextBtn style={{marginLeft: '10px'}} symbol='&rsaquo;'></NextBtn>
                </div>
                <div>
                    <h1>Felbm</h1>
                    <h6>241,070 <i>monthly listense</i></h6>    
                </div>
            </div>
            <div className='TrackList'>
                <div className='TrackList_Control'>
                    <button className='TrackList_Control_BtnPlay'>&#9658;</button>
                    <button></button>
                    <span class="material-symbols-outlined">more_horiz</span>
                </div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    )
}