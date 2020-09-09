<template>
	<div class="discovery">
		<div class="discovery_body">
			<div class="top_bg">
			</div>
			<div class="top_box">
				<div class="search_box"></div>
				<div class="top_grid">
					<van-grid square :border="false" :column-num="5">
						<template v-for="(item,index) in top_grid">
							<van-grid-item>
								<div class="gtid_cont" :key="index">
									<img :src="item.src" :alt="item.title">
									<span>{{item.title}}</span>
								</div>
							</van-grid-item>
						</template>
					</van-grid>
				</div>
				<div class="bottom_box">
					<div class="roll_box">
						<van-swipe class="roll-swipe" :vertical="true" :touchable="false" :show-indicators="false" :autoplay="4000" indicator-color="white">
							<template v-for="(item,index) in roll_box">
								<van-swipe-item :key="index">
									<div class="item_box">
										<div class="left_box">
											<span>A股</span>
											<span>|</span>
											<span>{{item.title}}</span>
											<span>{{item.lnum}}</span>
										</div>
										<div class="right_box">
											<span>{{item.rnum}}</span>
											<span>{{item.rnum2}}%</span>
											<van-tag color="#F5F5F5" text-color="#999999">{{item.type}}</van-tag>
										</div>
									</div>
								</van-swipe-item>
							</template>
						</van-swipe>
					</div>
					<div class="hotspot_box">
						<van-tag color="#F05636" text-color="#FFF">标签</van-tag>
						<template v-for="(item,index) in hotspot">
							<span class="hotspot_text" :key="index">#{{item}}</span>
						</template>
					</div>
				</div>
			</div>
			<div class="tab_one">
				<van-tabs v-model="tab_one_active" swipeable line-width="12px" color="#2772FF" title-active-size="20px"
				 title-active-color="#2772FF" title-inactive-color="#000">
					<template v-for="(item,key) in tab_one">
						<van-tab :title="item" :key="key">
							<div class="cont_box">
								<div class="interior_box">
									<span class="title">
										内需消费
									</span>
									<div class="card_box">
										<div class="card_top">
											<span>投资潜力</span>
											<van-rate v-model="value" size="15px" color="#FBD612" readonly allow-half void-icon="star" void-color="#eee" />
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
											<div class="bottom_right">
												10元上车
											</div>
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
			</div>
			<div class="wealth_train">
				<div class="title_box">
					<span>财富直通车</span>
					<span>最近使用</span>
				</div>
				<div class="wealth_swiper">
					<van-swipe class="my-swipe" :loop="false" :autoplay="3000" indicator-color="white">
						<van-swipe-item>1</van-swipe-item>
						<van-swipe-item>2</van-swipe-item>
						<van-swipe-item>3</van-swipe-item>
						<van-swipe-item>4</van-swipe-item>
					</van-swipe>
				</div>
			</div>
			<div class="tab_two">
				<van-sticky>
					<van-tabs v-model="tab_two_active" swipeable line-width="12px" color="#2772FF" title-active-size="20px"
					 title-active-color="#2772FF" title-inactive-color="#000">
						<van-tab title="快讯">
							快讯
						</van-tab>
						<van-tab title="热点">
							热点
						</van-tab>
						<van-tab title="问答">
							问答
						</van-tab>
						<van-tab title="基金">
							基金
						</van-tab>
						<van-tab title="行情">
							行情
						</van-tab>
					</van-tabs>
				</van-sticky>
			</div>
		</div>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
	import TabBar from '@/components/Tabbar.vue'
	export default {
		data() {
			return {
				top_grid: [{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					},
					{
						src: 'https://s1.ax1x.com/2020/09/08/wMSXFK.png',
						title: '余额宝'
					}
				],
				roll_box: [{
						title: '创业板指',
						lnum: 2540.28,
						rnum: -108.40,
						rnum2: -4.05,
						type: '交易中'
					},
					{
						title: '上证指数',
						lnum: 3272.61,
						rnum: -43.65,
						rnum2: -1.34,
						type: '交易中'
					},
					{
						title: '深证指数',
						lnum: 12964.90,
						rnum: -328.46,
						rnum2: -2.47,
						type: '交易中'
					}
				],
				hotspot: ['创业板暴跌', '3股停牌检查', '苹果发布会'],
				tab_one_active: 0,
				tab_one: [
					'投资顺风车',
					'攒点金子',
					'稳健理财',
					'精选组合',
					'进攻优选',
					'保险优选'
				],
				value: 4,
				tab_two_active: 1
			}
		},
		methods: {

		},
		components: {
			TabBar
		}
	}
</script>

<style lang="less" scoped>
	.discovery {
		height: 100%;
		width: 100%;
		background-color: #FDFEFE;

		.discovery_body {
			height: auto;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;

			.top_bg {
				width: 100%;
				height: 150px;
				position: absolute;
				top: 0;
				z-index: 0;
				background-color: #2591FD;
			}

			.top_box {
				height: auto;
				width: 345px;
				z-index: 999;
				display: flex;
				flex-direction: column;
				margin-bottom: 5px;

				.search_box {
					height: 100px;
					width: 100%;
					// background-color: #28ee28;
				}

				.top_grid {
					height: 145px;
					width: 100%;
					background-color: #FFFFFF;
					border-radius: 5px;
					box-shadow: 0px 0px 10px #d9dadd;
					overflow: hidden;
					margin-bottom: 15px;
					padding-top: 10px;

					.gtid_cont {
						height: 150px;
						display: flex;
						flex-direction: column;
						align-items: center;

						img {
							height: 25px;
							width: 25px;
							margin-bottom: 15px;
						}

						span {
							font-size: 13px;
						}
					}
				}

				.bottom_box {
					height: 80px;
					width: 100%;
					border-radius: 5px;
					background-color: #FFFFFF;
					box-shadow: 0px 0px 10px #d9dadd;
					display: flex;
					flex-direction: column;
					overflow: hidden;

					.roll_box {
						flex: 1;
						width: 100%;
						overflow: hidden;

						.roll-swipe {
							height: 100%;
							width: 100%;

							.item_box {
								height: 100%;
								width: 100%;
								display: flex;
								justify-content: space-between;
								align-items: center;

								.left_box {
									height: 20px;
									width: auto;
									margin-left: 15px;
									display: flex;
									align-items: center;
									font-size: 10px;

									span:nth-child(1) {
										font-weight: 600;
									}

									span:nth-child(2) {
										font-weight: 600;
										font-size: 10px;
										margin-left: 5px;
										margin-right: 5px;
									}

									span:nth-child(3) {
										font-weight: 600;
									}

									span:nth-child(4) {
										margin-left: 10px;
										color: #2CB3A7;
										font-weight: 500;
									}
								}

								.right_box {
									height: 20px;
									width: auto;
									margin-right: 8px;
									display: flex;
									align-items: center;
									justify-content: space-between;
									font-size: 10px;

									span:nth-child(1) {
										color: #2CB3A7;
										margin-right: 10px;
										font-weight: 500;
									}

									span:nth-child(2) {
										color: #2CB3A7;
										margin-right: 5px;
										font-weight: 500;
									}
								}
							}
						}

					}

					.hotspot_box {
						flex: 1;
						width: 100%;
						background-color: #F9F9F9;
						display: flex;
						justify-content: space-around;
						align-items: center;
						font-size: 10px;

						span:nth-child(1) {
							margin-left: 5px;
						}

						.hotspot_text {
							width: 75px;
							color: #189CFF;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}

			.tab_one {
				height: 310px;
				width: 100%;
				background-color: #FFF;

				.title {
					font-size: 15px;
				}

				.cont_box {
					height: 220px;
					width: 320px;
					background-color: #69A1FE;
					margin: 0 auto;
					margin-top: 15px;
					border-radius: 5px;

					.interior_box {
						height: 100%;
						width: 290px;
						margin: 0 auto;
						display: flex;
						flex-direction: column;
						align-items: flex-start;

						.title {
							display: block;
							height: 45px;
							width: auto;
							color: #fff;
							line-height: 45px;
							font-size: 16px;
							font-weight: bold;
						}

						.card_box {
							height: 135px;
							width: 100%;
							border-radius: 5px;
							background-color: #FFFFFF;
							display: flex;
							flex-direction: column;

							.card_top {
								height: 40px;
								width: 270px;
								margin: 0 auto;
								display: flex;
								align-items: center;
								border-bottom: 1px solid #F4F4F4;
								margin-bottom: 10px;

								span {
									font-size: 15px;
									font-weight: 600;
									color: #FCCF09;
									margin-right: 10px;
								}
							}

							.card_bottom {
								height: 70px;
								width: 270px;
								margin: 0 auto;
								display: flex;
								justify-content: space-between;
								align-items: center;

								.bottom_right {
									height: 25px;
									width: 70px;
									color: #fff;
									font-size: 10px;
									line-height: 25px;
									border-radius: 20px;
									background-color: #266EFF;
								}

								.bottom_left {
									height: 100%;
									width: 150px;
									display: flex;
									flex-direction: column;
									align-items: flex-start;
									justify-content: space-between;

									span:nth-child(1) {
										font-weight: 600;
										font-size: 15px;
									}

									span:nth-child(2) {
										font-size: 10px;
										color: #666666;
									}

									.tag_two {
										height: auto;
										width: 120px;
										display: flex;
										justify-content: space-between;

										span {
											font-weight: normal;
											font-size: 10px;
											color: #266EFF;
										}
									}
								}
							}
						}

						.bottom_tag {
							height: 25px;
							width: 240px;
							background-color: #B9E0FF;
							margin-top: 7.5px;
							border-radius: 20px;
							display: flex;
							align-items: center;
							font-size: 10px;

							span {
								color: #246EFF;
								margin-left: 5px;
							}

							.tag_icon {
								margin-left: 10px;
							}
						}
					}
				}
			}

			.wealth_train {
				height: 220px;
				width: 100%;
				background-color: #ee1573;

				.title_box {
					height: 30px;
					width: 345px;
					background-color: #29ffdf;
					margin: 0 auto;
					display: flex;
					justify-content: space-between;

					span:nth-child(1) {
						font-size: 15px;
						font-weight: 600;
					}

					span:nth-child(2) {
						font-size: 10px;
						color: #999999;
					}
				}

				.wealth_swiper {
					height: auto;
					width: 100%;

					.my-swipe .van-swipe-item {
						color: #fff;
						font-size: 20px;
						line-height: 150px;
						text-align: center;
						background-color: #39a9ed;
					}
				}
			}

			.tab_two {
				height: 800px;
				width: 100%;
				background-color: #EEE;
			}
		}
	}
</style>
