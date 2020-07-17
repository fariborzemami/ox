import Server from '../server'
export default (APP_CONFIG, token) => {
  return Server({
    baseURL: APP_CONFIG.apiBaseURL,
    token: token
  }, APP_CONFIG.apiJson)
}
