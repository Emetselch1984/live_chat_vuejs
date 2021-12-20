// ローカルストレージからuid・access-token・clientを取得する
// Ruby on RailsのAPIと通信し、セッションの有効期限が切れていないか確認する
// セッションの有効期限が切れていない場合は、チャットルームページにリダイレクトする
// セッションの有効期限が切れている場合は、ウェルカムページにリダイレクトする

import axios from "axios";
const validate = async () => {
    // ローカルストレージからuid・access-token・clientを取得する
    const uid = window.localStorage.getItem('uid')
    const client = window.localStorage.getItem('client')
    const accessToken = window.localStorage.getItem('access-token')
    // Ruby on RailsのAPIと通信し、セッションの有効期限が切れていないか確認する
    try {
        const res = await axios.get('http://localhost:3000/auth/validate_token',{
            headers: {
                uid: uid,
                'access-token': accessToken,
                client: client
            }
        })
        return res
    }
    catch (error){
        console.log(error)
    }
}

const useValidate = () => {
    return {validate}
}

export default useValidate

