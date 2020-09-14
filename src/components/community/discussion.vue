<template>
	<div class="forum_box">
		<!-- 我的评论 -->
		<div class="my_forum">
			<div class="tab_title">
				<div class="title_box">
					<span>我的讨论区</span>
					<div class="skip_box">
						<span>自选&持有</span>
						<van-icon name="arrow" color="#999999" size="14" />
					</div>
				</div>
			</div>
			<div class="comment_box">
				<template v-for="index in 3">
					<div class="cont_box" :key="index">
						<div class="regulation_data">
							<span>-3.26%</span>
							<span>已收盘</span>
						</div>
						<div class="description_box">
							<span>苹果 US讨论区</span>
							<span>为什么我在这个上面看到的苹果指数和在其他的不一样</span>
						</div>
					</div>
				</template>
			</div>
		</div>
		<!-- 财富小组 -->
		<div class="wealth_team">
			<div class="tab_title">
				<div class="title_box">
					<span>财富小组</span>
					<div class="skip_box">
						<span>全部</span>
						<van-icon name="arrow" color="#999999" size="14" />
					</div>
				</div>
			</div>
			<div class="cont-box">
				<div class="top_card">
					<div class="card_box">
						<span>基金综合</span>
						<div class="text_box"><span>XXXXXXXXXXXXXXXXXXXX</span></div>
						<img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" />
						<div class="shade"></div>
					</div>
					<div class="card_box">
						<span>科技大家谈</span>
						<div class="text_box"><span>XXXXXXXXXXXXXXXXXXXX</span></div>
						<img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" />
						<div class="shade"></div>
					</div>
				</div>
				<div class="bottom_card">
					<template v-for="index in 3">
						<div class="card_box" :key="index">
							<div class="regulation_data"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" /></div>
							<div class="description_box">
								<span>苹果 US讨论区</span>
								<span>为什么我在这个上面看到的苹果指数和在其他的不一样</span>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
.forum_box {
	height: auto;
	width: 100%;

	.my_forum {
		height: auto;
		width: 100%;
		margin-top: 1px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 10px;

		.tab_title {
			height: 45px;
			width: 100%;
			margin-top: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 0.1px solid #fdfdfd;
			margin-bottom: 10px;

			.title_box {
				height: 100%;
				width: 90%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				span {
					font-size: 18px;
					font-weight: 800;
				}

				.skip_box {
					height: auto;
					width: auto;
					display: flex;
					align-items: center;

					span {
						font-size: 13px;
						color: #999999;
						font-weight: normal;
					}
				}
			}
		}

		.comment_box {
			height: auto;
			width: 93%;

			.cont_box {
				height: 80px;
				width: 100%;
				display: flex;
				align-items: center;
				margin-bottom: 25px;

				.regulation_data {
					height: 100%;
					width: 115px;
					background-image: linear-gradient(-130deg, #3caa3a, #3caa3a, #5ac64f);
					border-radius: 15px 15px 15px 3px;
					display: flex;
					align-items: flex-start;
					flex-direction: column;
					justify-content: center;
					margin-right: 10px;

					span:nth-child(1) {
						font-size: 20px;
						color: #fff;
						font-weight: 600;
						text-align: left;
						margin-left: 15px;
						margin-bottom: 10px;
					}

					span:nth-child(2) {
						font-size: 10px;
						color: #a6dda3;
						text-align: left;
						margin-left: 15px;
					}
				}

				.description_box {
					height: 50px;
					width: 220px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					span:nth-child(1) {
						font-size: 18px;
						text-align: left;
					}

					span:nth-child(2) {
						font-size: 10px;
						color: #999999;
						text-align: left;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}

	.wealth_team {
		height: auto;
		width: 100%;
		background-color: #fff;
		margin-bottom: 10px;
		padding-bottom: 15px;

		.tab_title {
			height: 65px;
			width: 100%;
			margin-top: 10px;
			display: flex;
			justify-content: center;
			align-items: center;

			.title_box {
				height: 100%;
				width: 90%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				span {
					font-size: 18px;
					font-weight: 800;
				}

				.skip_box {
					height: auto;
					width: auto;
					display: flex;
					align-items: center;

					span {
						font-size: 13px;
						color: #999999;
						font-weight: normal;
					}
				}
			}
		}

		.cont-box {
			height: auto;
			width: 93%;
			margin: 0 auto;

			// 上层卡片
			.top_card {
				height: 120px;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 15px;

				.card_box {
					height: 100%;
					width: 169px;
					background-color: #34ffc6;
					border-radius: 15px 15px 15px 5px;
					text-align: left;
					display: flex;
					flex-direction: column;
					justify-content: center;
					position: relative;
					overflow: hidden;

					img {
						height: 100%;
						width: 100%;
						position: absolute;
						top: 0;
						z-index: 1;
					}

					.shade {
						height: 100%;
						width: 100%;
						opacity: 0.5;
						position: absolute;
						top: 0;
						background-color: #444444;
						z-index: 2;
					}

					span {
						font-size: 18px;
						font-weight: 600;
						color: #fff;
						margin-top: 25px;
						margin-left: 15px;
						z-index: 99;
					}

					.text_box {
						display: flex;
						align-items: center;
						height: 20px;
						width: 145px;
						background-color: #00000061;
						border-radius: 20px;
						margin-top: 10px;
						margin-left: 15px;
						z-index: 99;

						span {
							font-size: 10px;
							white-space: nowrap;
							line-height: 30px;
							overflow: hidden;
							text-overflow: ellipsis;
							margin-top: 0;
							margin-left: 5px;
						}
					}
				}
			}

			// 下层卡片
			.bottom_card {
				height: 300px;
				width: 100%;

				.card_box {
					height: 80px;
					width: 100%;
					display: flex;
					align-items: center;
					margin-bottom: 25px;

					.regulation_data {
						height: 100%;
						width: 115px;
						border-radius: 15px 15px 15px 3px;
						margin-right: 10px;
						overflow: hidden;

						img {
							height: 100%;
							width: 100%;
						}
					}

					.description_box {
						height: 45px;
						width: 220px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						span:nth-child(1) {
							font-size: 18px;
							text-align: left;
						}

						span:nth-child(2) {
							font-size: 10px;
							color: #999999;
							text-align: left;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
				}
			}
		}
	}
}
</style>
