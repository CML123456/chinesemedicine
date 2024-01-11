<template>
	<view>
		<view class="list">
			<text class="text">头像</text>
			<button class="button" open-type="chooseAvatar" @chooseavatar="chosseImage">
			 <image :src="userInfo.avatar" class="img" mode=""></image>
			</button> 
		</view>
		<view class="list">
			<text class="text">账号</text>
			<text class="text-right">{{userInfo.userId}}</text>
		</view>
		<view class="list" @click="changeNickname">
			<text class="text">昵称</text>
			<text class="text-right">{{userInfo.nickname}}</text>
		</view>
	</view>
</template>

<script>
	import {setUserinfo} from '../../../util/Storage.js'
	import {update,select} from '../../../util/operation.js'
	export default {
		data() {
			return {
				userInfo:{}
			};
		},
		methods:{
			chosseImage(e){
					const { avatarUrl } = e.detail 
					console.log(e);
					this.userInfo.avatar = avatarUrl
					const avatar = avatarUrl
					const db = uniCloud.database()
					const obj = {
						avatar
					}
					// const userInfo = uni.getStorageSync('userInfo')
					const userId = this.userInfo.userId
					db.collection('user').where("userId == '" + userId + "'").update(obj)
					// select('user',"userId == '" + userId + "'")
					db.collection('user').where("userId == '" + userId + "'").get().then(res => {
						 console.log(res);
						 uni.setStorageSync('userInfo',res.result.data[0])
					 })
			},
			getuserInfo(){
				this.userInfo = uni.getStorageSync('userInfo')
			},
			changeNickname(){
				const nickName = this.userInfo.nickname
				const userId = this.userInfo.userId
				uni.navigateTo({
					url:`./changgeNickname/changgeNickname?nickName=${nickName}&&userId=${userId}`
				})
			}
		},
		onShow() {
			this.getuserInfo()
		}
	}
</script>

<style lang="scss" scoped>
	*{
		margin: 0;
		padding: 0;
	}
.list{
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100rpx;
	border: 1rpx solid #d6d6d6;
	line-height: 100rpx;
	.text{
		margin-left: 30rpx;
	}
	.button{
		display: inline-block;
		  width: auto;
		  height: auto;
		border: none;
		background-color: transparent;
		.img{
			width: 100rpx;
			height: 100rpx;
			border-radius: 100rpx;
			margin-right: 30rpx;
		}
	}
	
	.text-right{
		margin-right: 30rpx;
	}
}
.avatar{
	
}
.nickname{
	
}
</style>
