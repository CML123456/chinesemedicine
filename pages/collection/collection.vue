<template>
	<view>
		<view class="selectAll">
			<checkbox :checked="selectAll" @click="selectAllchange(selectAll)"><text>全选</text></checkbox>
			<view class=""><button class="delete" :disabled="!deteleuse" @click="deleteCollection">取消收藏</button></view>
		</view>
		<checkbox class="checkbox" v-for="item in checkboxs" @click="checkboxchange(item)" :key="item._id" :checked="item.status">
				<view class="collection">
					<image :src="item.imgUrl" class="image" mode=""></image>
					<view class="collection-text">
						<view class="">{{item.name}}</view>
					</view>
				</view>
		</checkbox>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 selectedOptions: [],
				 checkboxs:[]
			}
		},
		methods:{
			checkboxchange(item){
				console.log(item);
				console.log(item.status);
				item.status = !item.status
				
			},
			selectAllchange(selectAll){
				this.checkboxs.forEach(item => item.status = !selectAll)
			},
			async deleteCollection(){
				const userId = uni.getStorageSync('userInfo').userId
				this.checkboxs = this.checkboxs.filter(item => !item.status)
				const db = uniCloud.database();
				const obj = {
					medicineDetails:this.checkboxs
				}
			   const res = await db.collection('collection').where("user_id=='"+ userId+"'").update(obj);	
			    
			},
			async getCollectionList(){
				const userId = uni.getStorageSync('userInfo').userId
				// console.log(userId);
				const db = uniCloud.database();
				const res = await db.collection('collection').where("user_id=='"+userId+"'").get()
				this.checkboxs = res.result.data[0].medicineDetails
				console.log(this.checkboxs);
			}
		},
		computed:{
			selectAll:function(){
				return this.checkboxs.every(item => item.status)
			},
			deteleuse: function(){
				return this.checkboxs.some(item => item.status)
			}
		},
		onShow() {
			this.getCollectionList()
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
