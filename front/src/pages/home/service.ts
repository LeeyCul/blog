import axios from '../../utils/http'
import api from '../../utils/api'

// 最新发布
export function latestRelease(params?: object, config?: object) {
    return axios.post(api.home.latestRelease, params, { ...config }).then((res: any) => res.data)
}
