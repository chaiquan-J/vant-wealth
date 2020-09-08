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
						<van-notice-bar :scrollable="false">
							<van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
								<van-swipe-item>内容 1</van-swipe-item>
								<van-swipe-item>内容 2</van-swipe-item>
								<van-swipe-item>内容 3</van-swipe-item>
							</van-swipe>
						</van-notice-bar>
					</div>
					<div class="hotspot_box"></div>
				</div>
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
				]
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

				.search_box {
					height: 100px;
					width: 100%;
					background-color: #28ee28;
				}

				.top_grid {
					height: 155px;
					width: 100%;
					background-color: #FFFFFF;
					border-radius: 5px;
					box-shadow: 0px 0px 20px #d9dadd;
					overflow: hidden;
					margin-bottom: 15px;

					.gtid_cont {
						height: auto;
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
					box-shadow: 0px 0px 20px #d9dadd;
					display: flex;
					flex-direction: column;
					overflow: hidden;

					.roll_box {
						flex: 1;
						width: 100%;

						.notice-swipe {
							height: 40px;
							line-height: 40px;
						}
					}

					.hotspot_box {
						flex: 1;
						width: 100%;
						background-color: #F9F9F9;
					}
				}
			}
		}
	}
</style>
