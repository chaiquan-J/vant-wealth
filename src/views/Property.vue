<template>
	<div class="property">
		<div class="property_body">
			<!-- 顶部工具栏 -->
			<van-sticky z-index="999">
				<div class="header_box">
					<div class="icon_box">
						<van-icon name="setting" color="#A9D2FE" />
						<van-icon name="bell" dot color="#A9D2FE" />
					</div>
				</div>
			</van-sticky>
			<!-- 工具栏结束 -->
			<!-- 顶部背景 -->
			<div class="header_bg"></div>
			<!-- 背景结束 -->
			<!-- 用户卡片 -->
			<div class="user_card">
				<user-card></user-card>
			</div>
			<!-- 用户卡片结束 -->
			<!-- 我的资产开始 -->
			<div class="assets_card">
				<assets-card></assets-card>
			</div>
			<!-- 我的资产结束 -->
			<!-- 我的保障开始 -->
			<div class="my_safeguard">
				<safeguard></safeguard>
			</div>
			<!-- 我的保障结束 -->
			<!-- 我的功能 -->
			<div class="my_function">
				<my-funciton></my-funciton>
			</div>
			<!-- 功能结束 -->
			<!-- 借呗 -->
			<div class="borrow"><my-borrow></my-borrow></div>
			<!-- 借呗结束 -->
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/Tabbar.vue';
import assetsCard from '@/components/property/assetsCard.vue';
import userCard from '@/components/property/userCard.vue';
import safeguard from '@/components/property/safeguard.vue';
import myFunciton from '@/components/property/myFunciton.vue';
import myBorrow from '@/components/property/myBorrow.vue';

export default {
	data() {
		return {
			fun_data: [
				{
					title: '账单',
					icon: 'balance-list',
					color: '#1A8EFF',
					value: '',
					border: true
				},
				{
					title: '银行卡',
					icon: 'card',
					color: '#FFC903',
					value: '3',
					border: false
				},
				{
					title: '券包',
					icon: 'coupon',
					color: '#FF761D',
					value: '',
					border: true
				},
				{
					title: '活动',
					icon: 'point-gift',
					color: '#FF4D4D',
					value: '',
					border: false
				}
			]
		};
	},
	components: {
		TabBar,
		assetsCard,
		userCard,
		safeguard,
		myFunciton,
		myBorrow
	}
};
</script>

<style lang="less" scoped>
@import url(../common/less/property.less);
</style>
