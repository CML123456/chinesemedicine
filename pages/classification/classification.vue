<template>
	<view class="classification">
		<view class="list-title">			
			<view :class="item.isShow ? 'list-item list-show':'list-item'" v-for="item in show" :key="item" @click="showClassfication(item)">{{item.name}}</view>
		</view>
		<view class="detail-classification">
			<view class="detail-box" v-for="items in rightClassfication" :key="items">
				<view class="detail-name">
					{{items.name}}
				</view>
				<view class="detail-content" v-for="item in items.detailsCategory" :key="item">
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
				show:[
					{
						name:1,
						isShow:true,
						classfication:[
							{
								name:'清热药',
								detailsCategory:[
									{
										id:1,
										name:'清虚热药'
									},
									{
										id:2,
										name:'哈哈哈哈'
									}
								]
							},
							{
								name:'养神',
								detailsCategory:[
									{
										id:1,
										name:'清虚热药'
									},
									{
										id:2,
										name:'哈哈哈哈'
									}
								]
							}
						]
					},
					{
						name:2,
						isShow:false,
						classfication:[
							{
								name:'清药',
								detailsCategory:[
									{
										id:1,
										name:'清虚热药'
									},
									{
										id:2,
										name:'哈哈哈哈'
									},{
										id:1,
										name:'清虚热药'
									},
									{
										id:2,
										name:'哈哈哈哈'
									},{
										id:1,
										name:'清虚热药'
									},
									{
										id:2,
										name:'哈哈哈哈'
									}
								]
							},
							{
								name:'养神',
								detailsCategory:[
									{
										id:1,
										name:'清虚热药'
									},
									{
										id:2,
										name:'哈哈哈哈'
									}
								]
							}
						]
					}
				]	
			}
		},
		onLoad() {
			console.log(this.show[1]);
				this.rightClassfication = this.show[0].classfication
		},
		methods: {
			showClassfication(item){
				if(item.isShow) return
				this.show.forEach(item => item.isShow = false)
				item.isShow = !item.isShow
				this.rightClassfication = item.classfication
			}
		},
		computed:{
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
