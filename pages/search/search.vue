<template>
	<view>
		<view class="">
			<u-search shape="round" :clearabled="true" bgColor="#fff" :focus="true" v-model="search" @custom="goSearchList" @search="goSearchList" actionText="搜索" ></u-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search:''
			};
		},
		methods:{
			goSearchList(){
				const name = this.search
				uni.navigateTo({
					url:`/pages/search/seachList/seachList?name=${name}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
