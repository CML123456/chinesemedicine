export const getUserInfo = () => {
	uni.getStorageSync('useriInfo')
}
export const setUserinfo = (obj) => {
	uni.setStorageSync('userInfo',obj)
}