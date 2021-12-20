// ローカルストレージからuid・access-token・clientを取得する
// Ruby on RailsのAPIと通信し、セッションの有効期限が切れていないか確認する

import axios from "axios";
// vue3から生まれたComposition APIの機能の一つ
// errorが読み込まれると検知する
import { ref } from 'vue'
// nullはオブジェクトとなり、valueプロパティで参照できる
const error = ref(null)

const validate = async () => {
    error.value = null
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
        if(!res){
            throw new Error("認証に失敗しました")
        }
        return res
    }
    catch (error){
        console.log(error)
        error.value = "認証に失敗しました"
        window.localStorage.removeItem('access-token')
        window.localStorage.removeItem('client')
        window.localStorage.removeItem('uid')
        window.localStorage.removeItem('name')

    }
}

const useValidate = () => {
    return {error, validate}
}

export default useValidate

