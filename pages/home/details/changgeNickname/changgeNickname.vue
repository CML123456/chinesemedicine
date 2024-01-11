<template>
	<view>
		 <u--input
		    border="surround"
		    v-model="nickName"
			clearable
		  ></u--input>
		  <view class="button">
		  	 <u-button text="保存" @click="changeNickname" type="primary" ></u-button>
		  </view>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return{
				nickName:'',
				userId:''
			}
		},
		methods:{
			changeNickname(){
				const ojb = {
					nickname:this.nickName
				}
				const userId = this.userId
				const db = uniCloud.database();
				db.collection('user').where("userId=='" + userId + "'").update(ojb)
				db.collection('user').where("userId == '" + userId + "'").get().then(res => {
					 uni.setStorageSync('userInfo',res.result.data[0])
					 uni.navigateBack({
					 	url:'../details'
					 })
				 })
			}
		},
		onLoad(e){
			this.nickName = e.nickName
			this.userId = e.userId
		}
		
	}
</script>

<style lang="scss" scoped>
 .button{
	 margin-top: 40rpx;
 }
</style>
