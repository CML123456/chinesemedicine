<template>
	<view>
		<view class="people-new">
			<view class="avatar">
				<image src="../../static/logo.png" mode="" class="img"></image>
				<view class="">奥特之父</view>
			</view>
			<view class="" @click="goEdit">编辑</view>
		</view>
		<view class="record">
			浏览记录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goEdit(){
				uni.navigateTo({
					url:'/pages/home/details/details'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.people-new{
	width: 690rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 30rpx;
	margin-top: 20rpx;
	background-color: #fff;
	border-radius: 20rpx;
	.avatar{
		display: flex;
		justify-content: center;
		align-items: center;
		.img{
			border-radius: 200rpx;
			width: 200rpx;
			height: 200rpx;
		}
	}
}
.record{
	width: 100%;
	height: 70rpx;
	line-height: 70rpx;
	margin-top: 20rpx;
	border: 1rpx solid #b1b1b1;
	padding-left: 40rpx;
}
</style>
