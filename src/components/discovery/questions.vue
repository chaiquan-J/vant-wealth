<template>
	<div class="questions">
		<div class="questions_body">
			<template v-for="index in 4">
				<div class="questions_box" :key="index">
					<div class="cont_box">
						<div class="title"><span>谦儿哥，半导体如果再下杀你预计最多还有多少点</span></div>
						<div class="cont"><span>已经超跌啦,股指在跌,科技也跌不了多少啦,不要去猜有多少跌幅,咱们现在科技板块只要扛着就是胜利。</span></div>
						<div class="bottom">
							<div class="user">
								<van-image class="user_img" fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
								<span>谦和自信等3人回答</span>
							</div>
							<van-icon name="ellipsis" color="#CCCCCC" size="20" />
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
@import url(../../common/discovery/questions.less);
</style>
