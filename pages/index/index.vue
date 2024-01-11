<template>
	<view class="">
		<view class="search">
			<u-search class="search-border" bgColor="#fff" shape="round" :show-action="false" :disabled="true" @click="goSearch()"></u-search>
		</view>
		<view class="swiper">
			<u-swiper 
			:list="list" 
			mode="dot"  
			indicator
            indicatorMode="dot"
            circular
			keyName="image" 
			:effect3d="true" 
			radius="5"
			previousMargin="10"
			nextMargin="10"
			autoplay>
			</u-swiper>
		</view>
		<view class="physical-therapy">
			<view class="therapy" v-for="item in technique" :key="item._id" @click="gotechnique(item)">
				<image :src="'../../static/technique/' + item.logoID + '.png'" class="img" mode=""></image>
				<view class="text">{{item.name}}</view>
			</view>
		</view>
		<view class="famous-doctor">
			<view class="doctor" v-for="item in 2" :key="item">
				<image class="img" src="../../static/logo.png" mode=""></image>
				<view class="text">
					<view class="">扁鹊</view>
					<view class="">我是扁鹊，我输出萨伏阿海还是覅和哈市啊hi收到</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Detail:[],
				list: [
					{
						image:'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						title:'1'
					},
					{
						image:'https://cdn.uviewui.com/uview/swiper/swiper2.png',
						title:'2'
					},
					{
						image:'https://cdn.uviewui.com/uview/swiper/swiper3.png',
						title:'3'
					},
				],
				technique:[]
			}
		},
		onLoad() {
	
		},
		methods: {
			goSearch(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			},
			async getTechniqueList(){
				const db = uniCloud.database();
				const res = await db.collection('technique').get()
				this.technique = res.result.data
			},
			gotechnique(item){
				const id = item._id
				uni.navigateTo({
					url:`./technique/technique?id=${id}`
				})
			}
		},
		onShow(){
			this.getTechniqueList()
		}
	}
</script>

<style scoped lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	.search{
		margin: 15rpx 0;
	}
	.swiper{
		margin-bottom: 15rpx;
	}
	.famous-doctor{
		.doctor{
			margin-bottom: 20rpx;
			display: flex;
			justify-content: center;
			.img{
				width: 200rpx;
				height: 300rpx;
				object-fit: contain;
			}
			.text{
				width: 400rpx;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: flex-start;
			}
		}
	}
	.physical-therapy{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		.therapy{
			width: 100rpx;
			display: flex;
			flex-direction: column;
			margin: 40rpx;
			.img{
				width: 100rpx;
				height: 100rpx;
			}
			.text{
				text-align: center;
			}
		}
	}
</style>
