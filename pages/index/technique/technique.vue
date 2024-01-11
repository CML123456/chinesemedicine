<template>
	<view>
		<view class="video">
			<video 
				:src="videoSrc"
				class="video-style"
				
				direction="90"
			 ></video>
		</view>
		<view class="text">
			<view class="title">
				{{detail.name}}
			</view>
			<view class="content">
				{{detail.introduced}}
			</view>
			<view class="title">
				发展历史
			</view>
			<view class="content">
				{{detail.cultural}}
			</view>
			<view class="title">
				注意事项
			</view>
			<view class="content" v-for="item in detail.application" :key="item">
				{{item}}
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				detail:{},
				videoSrc:''
			};
		},
		methods:{
			//得到针灸详细信息
		async gettechniqueDetail(id){
				const db = uniCloud.database();
				const res = await db.collection('technique').where("_id=='"+ id +"'").get()
				this.detail = res.result.data[0]
				const videoid = this.detail.videoID
				const result = await uniCloud.getFileInfo({
					fileList:[videoid]
				})
				this.videoSrc = result.fileList[0].url
			},
		},
		onLoad(e) {
			const id = e.id
			this.gettechniqueDetail(id)
		}
	}
</script>

<style lang="scss" scoped>
*{
	padding: 0;
	margin: 0;
}
.video{
	.video-style{
		width: 100%;
		height: 400rpx;
	}
}
.text{
	margin-top: 20rpx;
	.title{
		font-size: 60rpx;
		text-indent: 2rem;
		color: #69c8f4;
	}
	.content{
		margin: 0 40rpx;
		text-indent: 2rem;
		line-height: 50rpx;
	}
}
</style>
