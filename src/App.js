import { Controls } from './components/controls'
import { Lateral } from './components/lateral'
import { Account } from './components/account'

export function App() {
    return (
        <div className="app">
            <div>
                <div className='Main'>
                    <Lateral/>
                    <Account className='Account'/>
                </div>
                <Controls/>
            </div>
        </div>
    )
}