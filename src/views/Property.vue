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
				<div class="cont_box">
					<div class="user_box">
						<div class="user_left">
							<van-image round class="user_img" :style="{}" src="https://img.yzcdn.cn/vant/cat.jpeg" />
							<div class="user_text">
								<div class="user_name">
									<span>XXX</span>
									<van-icon name="arrow" size="10" />
								</div>
								<span>理财的第3天</span>
							</div>
						</div>
						<div class="user_right">
							<span>资产配置升级</span>
							<div class="btn">开启三笔钱</div>
						</div>
					</div>
					<div class="run_box">
						<van-icon name="notes-o" size="20" />
						<span>本月跑赢了多少用户?去看看</span>
					</div>
				</div>
			</div>
			<!-- 用户卡片结束 -->
			<!-- 我的资产开始 -->
			<div class="assets_card">
				<div class="card_box">
					<van-cell-group>
						<van-cell class="my_assets">
							<template #title>
								<div class="title">
									<span>我的资产</span>
									<van-icon name="eye-o" size="20" />
								</div>
							</template>
							<template #default>
								<div class="default">
									<span>账户安全险免费升级</span>
									<van-icon name="arrow" size="5" />
								</div>
							</template>
						</van-cell>
					</van-cell-group>
					<van-cell-group :border="false">
						<van-cell class="total_assets">
							<template #title>
								<div class="title">
									<span>总资产</span>
									<span>0.00</span>
								</div>
							</template>
							<template #default>
								<div class="default">
									<span>昨日收益</span>
									<span>0.00</span>
								</div>
							</template>
						</van-cell>
					</van-cell-group>
					<van-cell-group class="balance_box">
						<van-cell :border="false" class="balance">
							<template #title>
								<div class="title">
									<span>余额</span>
									<span>0.00</span>
								</div>
							</template>
						</van-cell>
						<van-cell class="balance_baby">
							<template #title>
								<div class="title">
									<span>余额宝</span>
									<span>随存随取</span>
								</div>
							</template>
							<template #default>
								<div class="default">
									<span>0.00</span>
								</div>
							</template>
						</van-cell>
					</van-cell-group>
					<van-cell-group class="financial_fund">
						<van-cell :border="false" class="balance">
							<template #title>
								<div class="title">
									<span>理财产品</span>
									<span>收益稳健</span>
								</div>
							</template>
						</van-cell>
						<van-cell class="balance_baby">
							<template #title>
								<div class="title">
									<span>基金</span>
									<span>费率1折起</span>
								</div>
							</template>
						</van-cell>
					</van-cell-group>
				</div>
			</div>
			<!-- 我的资产结束 -->
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
import TabBar from '@/components/Tabbar.vue';
export default {
	data() {
		return {};
	},
	components: {
		TabBar
	}
};
</script>

<style lang="less" scoped>
@import url(../common/less/property.less);
</style>
