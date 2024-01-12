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
			<view class="doctor" v-for="item in doctorList" :key="item._id" @click="goDoctor(item._id)">
				<image class="img" :src="item.imgUrl" mode=""></image>
				<view class="text">
					<view class="">{{item.name}}</view>
					<view class="overflow">{{item.introduced}}</view>
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
				technique:[],
				doctorList:[]
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
			},
			async getDoctorList(){
				const db = uniCloud.database();
				const res = await db.collection('historical-doctor').get() 
				const doctorList = await Promise.all(res.result.data.map(async item => {
				const imgUrl = await uniCloud.getFileInfo({
						fileList:[item.imgID]
					})
				item.imgUrl = imgUrl.fileList[0].url
				return item
				}))
				this.doctorList = doctorList
				
			},
			goDoctor(id){
				uni.navigateTo({
					url:`./doctorDetail/doctorDetail?id=${id}`
				})
			}
		},
		onShow(){
			this.getTechniqueList()
			this.getDoctorList()
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
				.overflow{
					   display: -webkit-box; /* 设置为弹性盒子布局 */
					   -webkit-line-clamp: 3; /* 显示的行数 */
					   -webkit-box-orient: vertical; /* 设置垂直方向排列 */
					   overflow: hidden; /* 超出部分隐藏 */
					   text-overflow: ellipsis; /* 显示省略号 */
				}
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
