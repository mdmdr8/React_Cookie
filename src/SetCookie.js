import { useState } from 'react'
import { useCookies } from 'react-cookie'

// 쿠키정보는 문자열로 들어감
export default function SetCookie() {
    const [data, setData] = useState("");
    const [cookies, SetCookies] = useCookies(['data']);

    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 2);

    const registCookie = () => {
        SetCookies('data', data, {
            url: '/',
            expires
        });
    }

    const loadCookie = () => {
        console.log(cookies);
    }

    return (
        <>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            <button onClick={registCookie}>add cookie</button>
            <button onClick={loadCookie}>load cookie</button>

        </>
    )

}
