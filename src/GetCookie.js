
import { useCookies } from 'react-cookie'

export default function GetCookie() {
    const [cookies, SetCookie, removeCookie] = useCookies(['data']);

    const deleteCookie = () => {
        removeCookie('data');
    }

    return (
        <>
            <button onClick={deleteCookie}>remove cookie</button>
            <h1>cookie : {cookies.data}</h1>
        </>
    )

}