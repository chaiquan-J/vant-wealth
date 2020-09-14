<template>
	<div class="flash">
		<div class="flash_body">
			<div class="play_bulletin">
				<div class="cont_box">
					<van-icon name="play-circle-o" size="25" />
					<span>开启快讯播报</span>
				</div>
			</div>
			<div class="flash_cont">
				<div class="hint"><span>资讯由财联社提供</span></div>
				<div class="content">
					<van-steps direction="vertical" active-color="#D2D2D2" inactive-color="#D2D2D2">
						<template v-for="(item, index) in flash_data">
							<van-step :key="index">
								<div class="time">
									<div class="text">
										<span>今天</span>
										<span>{{ item.time }}</span>
									</div>
									<van-icon name="play-circle-o" color="#000" size="15" />
								</div>
								<div class="description">
									<span>{{ item.text }}</span>
								</div>
							</van-step>
						</template>
					</van-steps>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			flash_data: [
				{
					time: '10:32',
					text: `【福建出台方案加强塑料污染治理:到 2025年基本建立塑料制品管理制度】福建 省日前印发《福建省关于进一步加强塑料 污染治理实施方案》。方案提出，到2025年，全省塑料制品管理制度基本建立，多元 共治体系基本形成，替代产品开发应用水 平进—步提升，福州、厦门等重点城市塑料垃圾填埋量大幅降低，塑料污染得到有效 控制。到2020年底，按照国家部署，禁止、 限制部分塑料制品的生产、销售和使用。`
				},
				{
					time: '10:16',
					text: `【前8月海南新增备案外贸企业同比增加2.9倍】海南自贸港建设磁场效应逐渐凸显，海口海关近日透露，今年1月至8月，海南新增备案外贸企业2047家，同比增加2.9倍。`
				},
				{
					time: '09:36',
					text: `不远处等着我们”】上海复旦大学附属华山医院感染科主任张文宏医生13日发布名为《全球抗疫曙光乍现》的微博表示，近日，世界疫情看似无边蔓延，峰值至今未至，其实曙光已现。预计希望就在不远处等着我们。`
				}
			]
		};
	}
};
</script>

<style lang="less">
@import url(../../common/less/vuestyle.less);
</style>
<style lang="less" scoped>
@import url(../../common/discovery/flash.less);
</style>
