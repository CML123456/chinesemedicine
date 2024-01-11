<template>
	<view>
		<view class="">
			<view class="login">
				<input class="inp" type="text" v-model="username" placeholder="请输入账号" />
			</view>
			<view class="login">
				<input class="inp"  type="safe-password" v-model="userpassword" placeholder="请输入密码"/>
			</view>
		</view>
		<view class="forget">
			<view class="">忘记密码</view>
			<view class="" @click="goRegistered">注册账号</view>
		</view>
		<button @click="gologin" class="button-login">登录</button>
	</view>
</template>

<script>
	export default {
		name:'login',
		data() {
			return {
				username:'',
				userpassword:''
			};
		},
		methods:{
			gologin(){
				const userId = this.username
				const db = uniCloud.database();
				const res = db.collection('user').where("userId == '" + userId + "'").get().then(res => {
					console.log(res);
					uni.setStorageSync('userInfo',res.result.data[0])
					uni.showLoading({
						mask:true,
						title:'登录中',
						success() {
							uni.switchTab({
								url:'../home'
							})
						}
					})
				})
			},
			goRegistered(){
				uni.navigateTo({
					url:'../registered/registered'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.login{
	display: flex;
	justify-content: center;
	margin-top: 50rpx;
	.inp{
		border: 1rpx solid #bfbfbf;
		height: 60rpx;
	}
}
.forget{
	margin-top: 20rpx;
	color: #00aaff;
	font-size: 12px;
	display: flex;
	justify-content: space-around;
}
.button-login{
	margin-top: 50rpx;
	width: 400rpx;
	height: 60rpx;
	line-height: 60rpx;
}
</style>
