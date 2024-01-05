<template>
	<view>
		<view class="list" v-for="item in information" :key="item">
			<text class="text">{{item.displayName}}</text>
			<image v-if="item.displayName === '头像'" :src="item.value" class="img" @click="chosseImage" mode=""></image>
			<text class="text-right" v-else>{{item.value}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				information:[
					{
						displayName:'头像',
						value:'../../../static/logo.png'
					},
					{
						displayName:'昵称：',
						value:'奥特之父'
					},
					{
						displayName:'手机号：',
						value:'12345678910'
					}
				]
			};
		},
		methods:{
			chosseImage(){
				uni.chooseImage({
					count:1,
					success:res => {
						this.information.find(item => item.displayName === '头像').value = res.tempFilePaths?.[0]
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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
	.img{
		width: 100rpx;
		height: 100rpx;
		border-radius: 100rpx;
		margin-right: 30rpx;
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
