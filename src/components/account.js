import '../assets/css/account.css'
import { NextBtn } from './btn_next_account'

export function Account () {
    return(
        <div>
            <div className="Account_header">
                <div>
                    <NextBtn symbol='&lsaquo;'></NextBtn>
                    <NextBtn symbol='&rsaquo;'></NextBtn>
                </div>
                <div className='BtnControl'>
                    <h1>Felbm</h1>
                    <h6>241,070 <i>monthly listense</i></h6>    
                </div>
            </div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}