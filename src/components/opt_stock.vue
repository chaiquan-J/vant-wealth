<template>
	<div class="opt_stock">
		<div class="opt_stock_body">
			<div class="top_swiper">
				<div class="left_title"><i>自选资讯</i></div>
				<div class="right_swiper">
					<van-swipe class="my-swipe" :autoplay="3000" loop vertical :touchable="false" :show-indicators="false">
						<template v-for="index in 4">
							<van-swipe-item :key="index">
								<div class="item_cont"><span>冲高700点！昨夜美股暴力大反攻,特斯拉飙特斯拉飙特斯拉飙</span></div>
							</van-swipe-item>
						</template>
					</van-swipe>
				</div>
			</div>
			<div class="bottom_swiper"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="less" scoped>
@import url(../common/less/opt_stock.less);
</style>
