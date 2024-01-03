<template>
	<view>
		<view class="selectAll">
			<checkbox :checked="selectAll" @click="selectAllchange(selectAll)"><text>全选</text></checkbox>
			<view class=""><button class="delete" :disabled="!deteleuse" @click="deleteCollection">取消收藏</button></view>
		</view>
		<view>
			<checkbox v-for="item in checkboxs" :key="item.id" class="checkbox" :value="item.id" :checked="item.status" @click="checkboxchange(item)">
				<view class="collection">
					<image :src="item.imgUrl" class="image"mode=""></image>
					<view class="collection-text">
						<view class="">{{item.name}}</view>
						<view class="">11212312</view>
						<view class="">1234123</view>
					</view>
				</view>
			</checkbox>
		</view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 selectedOptions: [],
				 checkboxs:[
					 {
						 id:1,
						 imgUrl:'../../static/logo.png',
						 name:'哈哈',
						 status:true
					 },
					 {
					 	id:2,
					 	imgUrl:'../../static/logo.png',
					 	name:'哈哈哈',
						status:true
					 }
				 ]
			}
		},
		methods:{
			checkboxchange(item){
				item.status = !item.status
			},
			selectAllchange(selectAll){
				this.checkboxs.forEach(item => item.status = !selectAll)
			},
			deleteCollection(){
				this.checkboxs = this.checkboxs.filter(item => !item.status)
			}
		},
		computed:{
			selectAll:function(){
				return this.checkboxs.every(item => item.status)
			},
			deteleuse: function(){
				return this.checkboxs.some(item => item.status)
			}
		}
	}
</script>

<style scoped lang="scss">
	.checkbox{
		width: 80%;
		background-color: #fff;
		border-radius: 15rpx;
		margin-left: 80rpx;
		margin-bottom: 20rpx;
		.collection{
			display: flex;
			.collection-text{
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			.image{
				width: 200rpx;
				height: 200rpx;
			}
		}
	}
	.selectAll{
		display: flex;
		justify-content: space-between;
		.delete{
			width: 200rpx;
			height: 60rpx;
			line-height: 60rpx;
		}
	}
</style>
