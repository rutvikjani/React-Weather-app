import { useNavigate } from 'react-router-dom'
import './Navigation.css'
import { useAuth } from '../auth'

function Navigation({ firstButton, secondButton, thirdButton }){
    const auth = useAuth()
    const navigation = useNavigate('')

    return(
        <div className='navigationBar'>
            <header className='Navigation'>
                <div>
                    <h1> Weather Application </h1>
                </div>
                <div>
                <button onClick={() => { navigation('/',{replace:true}) }}>{firstButton}</button>
                <button onClick={() => { navigation('/Sign-up', {replace:true})}}>{secondButton}</button>
                <button onClick={() => { 
                    auth.logout() 
                    navigation('/', {replace:true}) 
                    }}> {thirdButton} </button>
                </div>
            </header>
        </div>
    )
}

export default Navigation;