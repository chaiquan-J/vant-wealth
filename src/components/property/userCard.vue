<template>
	<div class="cont_box">
		<div class="user_box">
			<div class="user_left">
				<van-image round class="user_img" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				<div class="user_text">
					<div class="user_name">
						<span>来自佛罗伦萨的老色鬼</span>
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
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	.cont_box {
		height: 100%;
		width: 92%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	
		.user_box {
			height: 100px;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #e8ebef;
	
			.user_left {
				height: 60px;
				width: auto;
				display: flex;
				align-items: center;
	
				.user_img {
					height: 50px;
					width: 50px;
					border: 1px solid #fff;
				}
	
				.user_text {
					height: 100%;
					width: auto;
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin-left: 10px;
	
					span {
						color: #000000;
						font-size: 15px;
						text-align: left;
					}
	
					.user_name {
						width: 120px;
						display: flex;
						align-items: center;
						margin-bottom: 5px;
	
						span {
							font-size: 20px;
							font-weight: 600;
							color: #000;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
	
			.user_right {
				height: 45px;
				width: auto;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
	
				span {
					font-size: 15px;
					color: #1677ff;
				}
	
				.btn {
					height: 20px;
					width: 80px;
					background-color: #e5f1ff;
					border-radius: 20px;
					font-size: 12px;
					line-height: 21px;
					color: #1979ff;
				}
			}
		}
	
		.run_box {
			height: 35px;
			width: 100%;
			color: #999999;
			display: flex;
			align-items: center;
			font-size: 10px;
	
			span {
				margin-top: 3px;
				margin-left: 5px;
			}
		}
	}
</style>
