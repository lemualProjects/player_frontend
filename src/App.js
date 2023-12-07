import { Controls } from './components/controls'
import { Lateral } from './components/lateral'
import { Account } from './components/account'

export function App() {
    return (
        <div className="app">
            <div className='container'>
                <div className='Main'>
                    <Lateral/>
                    <Account className='Account'/>
                </div>
                <Controls/>
            </div>
        </div>
    )
}