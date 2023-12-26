<template>
	<view class="content">
		<view class="" v-for="item in Detail" :key="item.id">
			<image v-if="item.imgUrl" :src="item.imgUrl" mode=""></image>
			<view class="">{{ item.name }}</view>
		</view>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<u-button text="月落" @click="gettest"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Detail:[]
			}
		},
		onLoad() {
		this.getMedicineDetail()
		},
		methods: {
			async gettest(){
				const db = uniCloud.database()
				const name = await db.collection('test').get().then(res => {
					console.log(res);
				}).catch(e => {
					console.log(e);
				})
			},
			async getMedicineDetail(){
				const db = uniCloud.database();
				const res = await db.collection('medicine-detail').get()
				this.Detail = res.result.data
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
