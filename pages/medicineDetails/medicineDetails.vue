<template>
	<view class="details">
		<image class="img" :src="medicineDetail.imgUrl"></image>
		<view class="">
			<view class="text-left">
				<text class="name-title">{{medicineDetail.name}}</text> 
			</view>
			<view class="text-left">
				<text class="title">别名：</text>
				<text class="content">{{medicineDetail.alias}}</text>
			</view>
			<view class="text-left">
				<text class="title">英文名：</text>
				<text class="content">{{medicineDetail.enName}}</text>
			</view>
			<view class="">
				<u-collapse>
					<u-collapse-item
					title="植物形态"
					>
						<text class="u-collapse-content">
							{{medicineDetail.morohology}}
						</text>
					</u-collapse-item>
					<u-collapse-item
					title="产地分布"
					>
						<text class="u-collapse-content">
							{{medicineDetail.madeIn}}						
						</text>
					</u-collapse-item>
					<u-collapse-item
					title="采收加工"
					>
						<text class="u-collapse-content">
							{{medicineDetail.recovery}}
						</text>
					</u-collapse-item>
					<u-collapse-item
					title="药材性状"
					>
						<text class="u-collapse-content">
							{{medicineDetail.shape}}
						</text>
					</u-collapse-item>
					<u-collapse-item
					title="性味归经"
					>
						<text class="u-collapse-content">
							{{medicineDetail.channel}}
						</text>
					</u-collapse-item>
					<u-collapse-item
					title="功效与作用"
					>
						<text class="u-collapse-content">
							{{medicineDetail.efficacy}}
						</text>
					</u-collapse-item>
					<u-collapse-item
					title="临床应用"
					>
						<text class="u-collapse-content">
							{{medicineDetail.application}}
						</text>
					</u-collapse-item>
					<u-collapse-item
					title="药理研究"
					>
						<text class="u-collapse-content">
							{{medicineDetail.pharmacological}}
						</text>
					</u-collapse-item>
					<u-collapse-item
					title="化学成分"
					>
						<text class="u-collapse-content">
							{{medicineDetail.ingredients}}
						</text>
					</u-collapse-item>
					<u-collapse-item
					title="使用禁忌"
					>
						<text class="u-collapse-content">
							{{medicineDetail.taboo}}
						</text>
					</u-collapse-item>
					<u-collapse-item
					title="配伍药方"
					>
						<text class="u-collapse-content">
							{{medicineDetail.formula}}
						</text>
					</u-collapse-item>
				</u-collapse>
			</view>
		</view>
		<view class="btu">
			<u-button type="primary" @click="collection">收藏</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				medicineDetail:{}
			};
		},
		methods:{
			//获取中药信息
			async getMedicineDetail(name){
				const db = uniCloud.database();
				const res = await db.collection('medicineDetail').where("name=='"+ name +"'").get()
				// console.log(res);
				this.medicineDetail = res.result.data[0]
			},
			async collection(){
				uni.showLoading({
					mask:true
				})
				const db = uniCloud.database();
				const userId = uni.getStorageSync('userInfo').userId
				const arr = await db.collection('collection').where("user_id=='"+ userId+"'").get()
				const medicineDetailsArr = arr.result.data[0]
				let arr1 = [...medicineDetailsArr.medicineDetails]
				// console.log(arr1);
				this.medicineDetail.status = false
			    arr1.push(this.medicineDetail)
				// console.log(arr1);
				const obj = {
					medicineDetails : arr1,
				}
				const res = await db.collection('collection').where("user_id=='"+ userId+"'").update(obj);	
				uni.hideLoading()
			}
		},
		onLoad(e) {
			this.getMedicineDetail(e.name)
		}
	}
</script>

<style lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
}
.details{
	  min-height: 100vh;
	  display: flex;
	  flex-direction: column;
	.img{
		// object-fit: contain;
		width: 100%;
	}
	.text-left{
		// margin-left: 30rpx;
		text-indent: 1rem;
		 flex: 1;
		.title{
			font-weight: normal;
		}
		.content{
			margin-left: 10rpx;
			// color: #d6d6d6;
		}
		.name-title{
			font-size: 50rpx;
		}
	}
	.btu{
	     position: sticky;
	     bottom: 0;
	}
}
</style>
