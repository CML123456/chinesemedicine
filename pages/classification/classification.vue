<template>
	<view class="classification">
		<view class="list-title">			
			<view :class="item.isShow ? 'list-item list-show':'list-item'" v-for="item in show" :key="item" @click="showClassfication(item)">{{item. classification}}</view>
		</view>
		<view class="detail-classification">
			<view class="detail-box" v-for="items in rightClassfication" :key="items">
				<view class="detail-name">
					{{items.classificationname}}
				</view>
				<view class="detail-content" v-for="item in items.children" :key="item">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { vShow } from "vue"
	export default {
		data() {
			return {
				rightClassfication:{},
				show:[]
				}
		},
		onLoad() {
		},
		methods: {
			showClassfication(item){
				if(item.isShow) return
				this.show.forEach(item => item.isShow = false)
				item.isShow = !item.isShow
				console.log(item);
				if(item.id._value === '1'){
					this.rightClassfication = item.id.classificationtwogongxiao	
				}else if(item.id._value === '2'){
					this.rightClassfication = item.id.classificationtwoguijing
				}else if(item.id._value === '3'){
					this.rightClassfication = item.id.classificationtwoyaoxing
				}else if(item.id._value === '4'){
					this.rightClassfication = item.id.classificationtwoyaowei
				}else if(item.id._value === '5'){
					this.rightClassfication = item.id.classificationtwobuwei
				}
			},
			async getclassificationList(){
				const db = uniCloud.database();
				const res = await db.collection('classification-one,classificationtwogongxiao,classificationtwoguijing,classificationtwoyaoxing,classificationtwoyaowei,classificationtwobuwei').get()
				console.log(res);
				this.show = res.result.data
				this.rightClassfication = this.show[0].id.classificationtwogongxiao	
			}
		},
		onShow() {
			this.getclassificationList()
			}
}
</script>

<style scoped lang="scss">
	*{
		padding: 0;
		margin: 0;
	}
	.classification{
		display: flex;
		flex-flow: row;
		.list-title{
			.list-item{
				width: 180rpx;
				height: 80rpx;
				text-align: center;
				line-height: 80rpx;
				background-color: #528b8d;
			}
			.list-show{
				background-color: #254444;
			}
		}
		.detail-classification{
			.detail-box{
				display: flex;
				flex-flow: row;
				flex-wrap: wrap;
				margin: 10rpx 0;
				.detail-name{
					text-indent: 2rem;
				}
				.detail-content{
					color: #00ffff;
					margin: 0 10rpx ;
				}
			}
		}
	}
	
</style>
