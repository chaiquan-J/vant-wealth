<template>
	<div class="community">
		<div class="community_body">
			<!-- 顶部搜索 -->
			<div class="top_search">
				<van-sticky>
					<van-search v-model="value" background="#2772FF" color="#C5DDFF" show-action shape="round" placeholder="问答/看点/用户/股票/基金">
						<template #action>
							<div class="sea_icon"><van-icon name="chat-o" size="30px" color="#C5DDFF" /></div>
						</template>
						<template #left-icon>
							<van-icon name="search" size="20px" color="#C5DDFF" />
						</template>
					</van-search>
				</van-sticky>
			</div>
			<!-- 搜索结束 -->
			<!-- 顶部导航开始 -->
			<div class="top_navb">
				<van-grid square :border="false">
					<van-grid-item>
						<img src="https://s1.ax1x.com/2020/09/12/wd1Jbt.png" alt="" />
						<span>大咖</span>
					</van-grid-item>
					<van-grid-item>
						<img src="https://s1.ax1x.com/2020/09/12/wd1tVP.png" alt="" />
						<span>专栏</span>
					</van-grid-item>
					<van-grid-item>
						<img src="https://s1.ax1x.com/2020/09/12/wd1GDI.png" alt="" />
						<span>看点</span>
					</van-grid-item>
					<van-grid-item>
						<img src="https://s1.ax1x.com/2020/09/12/wd1NUf.png" alt="" />
						<span>短视频</span>
					</van-grid-item>
				</van-grid>
			</div>
			<!-- 顶部导航结束 -->
			<!-- 标签页开始 -->
			<div class="tab_page">
				<!-- <van-sticky :offset-top="55"> -->
				<van-tabs v-model:active="active" sticky offset-top="54" animated swipeable color="#266EFF" title-active-color="#000" title-inactive-color="#999999">
					<van-tab title="热门"><hot></hot></van-tab>
					<van-tab title="讨论区"><discussion></discussion></van-tab>
					<van-tab title="关注">
						<attention></attention>
					</van-tab>
				</van-tabs>
				<!-- </van-sticky> -->
			</div>
			<!-- 标签页结束 -->
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/Tabbar.vue';
import Hot from '@/components/community/hot.vue';
import Discussion from '@/components/community/discussion.vue';
import Attention from '@/components/community/attention.vue';

export default {
	data() {
		return {
			value: '',
			active: 0
		};
	},
	components: {
		TabBar,
		Hot,
		Discussion,
		Attention
	}
};
</script>
<style lang="less">
@import url(../common/less/vuestyle.less);
</style>
<style lang="less" scoped>
@import url(../common/less/community.less);
</style>
