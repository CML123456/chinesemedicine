<template>
	<view>
		<view class="">
			<u-search shape="round" :clearabled="true" bgColor="#fff" :focus="true" actionText="搜索" ></u-search>
		</view>
		<Detail :list="list" :class="list.length ===1 ? 'left' : ''"></Detail>
	</view>
</template>

<script>
	import Detail from '../../components/detail/detail.vue'
	export default {
		data() {
			return {
				list:[]
			};
		},
		components:{
			Detail
		},
		methods:{
			//单个查询一个中药信息
			async getMedicine(name){
				const db = uniCloud.database()
				const res = await db.collection('medicineDetail').where("name=='"+name+"'").get()
				console.log(res);
				this.list = res.result.data
			},
			//获取分类中药信息
			async getMedicineList(name){
				const db = uniCloud.database();
				const res = await db.collection('medicineDetail').get()
				const arr = res.result.data
				this.list = arr.filter(item => item.classification === name)
			}
		},
		onLoad(e) {
			if(e.status === '0'){
				// console.log(1);
				this.getMedicineList(e.name)
			}else{
				// console.log(2);
				this.getMedicine(e.name)
			}	
		}
	}
</script>

<style lang="scss">
.left{
	position: relative;
	right: 200rpx;
}
</style>
