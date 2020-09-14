<template>
	<div class="hotspot">
		<div class="hotspot_body">
			<div class="headline">
				<div class="cont_box">
					<div class="cont">
						<span class="max_title">财富有料</span>
						<div class="vertical"></div>
						<div class="description">
							<span>长三角联动，沪苏浙皖首次共办上海旅游节</span>
							<span>传“青春小酒”江小白再拿融资，它真的值130亿？</span>
						</div>
					</div>
				</div>
			</div>
			<template v-for="index in 4">
				<div class="journalism_box" :key="index">
					<div class="cont_box">
						<div class="title"><span>看好企业盈利增长和周期股补涨 高盛称回调后全球股市迎来增持契机</span></div>
						<div class="cont">
							<span>在最近的市场回调之后,因看好企业盈利增长和周期股补涨,高盛将未来三个月的全球股票配置评</span>
							<img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" />
						</div>
						<div class="bottom">
							<div class="time">
								<span>财联社</span>
								<span>8评论</span>
							</div>
							<van-icon name="cross" color="#CCCCCC" size="10" />
						</div>
					</div>
				</div>
			</template>
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
@import url(../../common/discovery/hotspot.less);
</style>
