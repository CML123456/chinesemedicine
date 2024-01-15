<template>
	<view class="list">
		<view class="details" v-for="item in list" :key="item._id" @click="goDetails(item.name)">
			<image :src="item.imgUrl" mode="" class="img"></image>
			<view class="text">
				<view class="name">{{item.name}}</view>
				<view class="efficay">{{item.efficacy}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'DetailBox',
		data() {
			return {
				
			};
		},
		props:{
			list:{
				type:Array,
				default:() => []
			}
		},
		methods:{
			goDetails(name){
				uni.navigateTo({
					url:`../../medicineDetails/medicineDetails?name=${name}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	.details{
		background-color: #fff;
		margin-top: 20rpx;
		width: 25vh;
		border-radius: 10rpx;
		.img{
			width: 25vh;
			height: 25vh;
		}
		.text{
			font-size: 28rpx;
			line-height: 28rpx;
			color: #2c2c2c;
			border-top: 1rpx solid #eeeeee;
			.name{
	
			}
			.efficay{
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
}
</style>
