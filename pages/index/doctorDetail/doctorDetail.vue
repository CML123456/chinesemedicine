<template>
	<view class="body">
		<view class="header">
			<view class="text">
				<view class="header-name">
					{{detail.name}}
				</view>
				<view class="header-old">
					{{detail.oldinfo || ''}}
				</view>
			</view>
			<image :src="imgUrl" class="img" mode=""></image>
		</view>
		<view class="introduced">
			{{detail.introduced}}
		</view>
		<view class="foot">
			<text class="text">主要成就</text>
			<text class="conter">{{detail.achievements}}</text>
		</view>
		<view class="foot">
			<text class="text">擅长领域</text>
			<text class="conter">{{detail.goodAt}}</text>
		</view>
		<view class="foot">
			<text class="text">作品</text>
			<text class="conter">{{detail.works}}</text>
		</view>
		 <u-collapse
		  >
		    <u-collapse-item
		      title="人物生平"
		      name="Docs guide"
		    >
		      <text class="u-collapse-content">
				  {{detail.file}}
			  </text>
		    </u-collapse-item>
		    <u-collapse-item
		      title="轶事典故"
		      name="Variety components"
		    >
		      <text class="u-collapse-content">{{detail.allusions}}</text>
		    </u-collapse-item>
		  </u-collapse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				detail:{},
				imgUrl:''
			};
		},
		methods:{
			async getdoctorDetail(id){
				const db = uniCloud.database();
				const res = await db.collection('historical-doctor').where("_id=='"+ id +"'").get()
				this.detail = res.result.data[0]
				const imgUrl = await uniCloud.getFileInfo({
					fileList:[this.detail.imgID]
				})
				this.imgUrl = imgUrl.fileList[0].url
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getdoctorDetail(e.id)
		}
	}
</script>

<style lang="scss" scoped>
	*{
		margin: 0;
		padding: 0;
	}
.body{
	margin: 20rpx 20rpx;
	background-color: #fff;
	border-radius: 20rpx;
	.header{
		margin: 20rpx;
		display: flex;
		justify-content: space-between;
		.text{
			.header-name{
				margin-top: 80rpx;
				font-size: 40rpx;
			}
			.header-old{
				font-size: 24rpx;
				color: #b1b1b1;
			}
		}
		.img{
			margin-top: 20rpx;
			width: 200rpx;
			height: 200rpx;
			border-radius: 10rpx;
		}
	}
	.introduced{
		margin: 0 20rpx ;
	}
	.foot{
		margin-top: 20rpx ;
		margin-left: 20rpx;
		.text{
			font-weight: 600;
		}
		.conter{
			margin-left: 20rpx;
			margin-top: 20rpx;
		}
	}
}

</style>
