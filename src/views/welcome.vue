<template>
	<div class="welcome">
		<div class="welcome_body">
			<div class="cont_box">
				<img src="https://s1.ax1x.com/2020/09/13/wwjSfg.png" alt="" />
				<span>橘喵财富</span>
				<span>Cat Fortune</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		getLog() {
			// 通过缓存获取登陆记录
			let login = localStorage.getItem('login');
			console.log(login);
			// 未登录就跳转到登陆页
			if (login) {
				this.$router.push('Discovery');
			} else {
				this.$router.push('Login');
			}
		},
		playTime() {
			setTimeout(this.getLog, 3000);
		}
	},
	mounted() {
		this.playTime();
	}
};
</script>

<style lang="less" scoped>
.welcome {
	height: auto;
	width: 100%;

	.welcome_body {
		height: auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		.cont_box {
			height: 300px;
			width: 200px;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 180px;

			img {
				height: 100px;
				width: 100px;
				margin-bottom: 15px;
			}

			span:nth-child(2) {
				font-size: 25px;
				font-weight: 800;
				margin-bottom: 5px;
			}

			span:nth-child(3) {
				font-size: 18px;
				font-weight: 600;
			}
		}
	}
}
</style>
