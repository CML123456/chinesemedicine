<template>
	<view>
		<view class="">
			<view class="login">
				<input class="inp" type="text" v-model="userId" placeholder="请输入账号" />
			</view>
			<view class="login">
				<input class="inp"  type="safe-password" v-model="nickName" placeholder="请输入昵称"/>
			</view>
			<view class="login">
				<input class="inp"  type="safe-password" v-model="userpassword" placeholder="请输入密码"/>
			</view>
			<view class="login">
				<input class="inp"  type="safe-password" v-model="userpasswordone" placeholder="确认密码"/>
			</view>
		</view>
		<button @click="registerer" class="button-login">注册</button>
	</view>
</template>

<script>
	export default {
		name:'registered',
		data() {
			return {
				userId:'',//账号
				nickName:'',//昵称,
				userpassword:'',//密码
				userpasswordone:''//确认密码
			};
		},
		methods:{
			async registerer(){
				const avatarUrl = await uniCloud.getFileInfo({
					fileList:['adb1485e-c711-4e21-805a-efa3719fe150']
				})
				const avatar = avatarUrl.fileList[0].url
				const userId = this.userId
				const nickname = this.nickName
				const password = this.userpassword
				const obj ={
					userId,
					nickname,
					password,
					avatar
				}
				const db = uniCloud.database()
				const res = db.collection('user').add(obj)
				// console.log(res);
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
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
