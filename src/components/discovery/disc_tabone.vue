<template>
	<!-- <div class="tab_one"> -->
		<van-tabs v-model="tab_one_active" swipeable line-width="12px" animated color="#2772FF" title-active-size="20px" title-active-color="#2772FF" title-inactive-color="#000">
			<template v-for="(item, key) in tab_one">
				<van-tab :title="item" :key="key">
					<div class="cont_box">
						<div class="interior_box">
							<span class="title">内需消费</span>
							<div class="card_box">
								<div class="card_top">
									<span>投资潜力</span>
									<van-rate size="15px" :value="rate_value" color="#FBD612" readonly allow-half void-icon="star" void-color="#eee" />
								</div>
								<div class="card_bottom">
									<div class="bottom_left">
										<span>富国消费主题混合</span>
										<span>投资机会，就在你身边</span>
										<div class="tag_two">
											<van-tag plain type="primary">消费旺季</van-tag>
											<van-tag plain type="primary">聚焦龙头</van-tag>
										</div>
									</div>
									<div class="bottom_right">10元上车</div>
								</div>
							</div>
							<div class="bottom_tag">
								<van-icon name="chart-trending-o" class="tag_icon" color="#286FFE" size="15px" />
								<span>选品还要看配置，来看看「三笔钱」</span>
								<van-icon name="arrow" color="#538CE7" />
							</div>
						</div>
					</div>
				</van-tab>
			</template>
		</van-tabs>
	<!-- </div> -->
</template>

<script>
export default {
	data() {
		return {
			tab_one_active: 0,
			tab_one: ['投资顺风车', '攒点金子', '稳健理财', '精选组合', '进攻优选', '保险优选'],
			rate_value:4
		};
	}
};
</script>
<style lang="less">
@import url(../../common/less/vuestyle.less);
</style>
<style lang="less" scoped>
@import url(../../common/discovery/discovery.less);
</style>
