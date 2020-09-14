<template>
	<div class="card_box">
		<van-cell-group>
			<van-cell class="my_assets">
				<template #title>
					<div class="title">
						<span>我的资产</span>
						<van-icon name="eye-o" size="20" />
					</div>
				</template>
				<template #default>
					<div class="default">
						<span>账户安全险免费升级</span>
						<van-icon name="arrow" size="5" />
					</div>
				</template>
			</van-cell>
		</van-cell-group>
		<van-cell-group :border="false">
			<van-cell class="total_assets">
				<template #title>
					<div class="title">
						<span>总资产</span>
						<span>0.00</span>
					</div>
				</template>
				<template #default>
					<div class="default">
						<span>昨日收益</span>
						<span>0.00</span>
					</div>
				</template>
			</van-cell>
		</van-cell-group>
		<van-cell-group class="balance_box">
			<van-cell :border="false" class="balance">
				<template #title>
					<div class="title">
						<span>余额</span>
						<span>0.00</span>
					</div>
				</template>
			</van-cell>
			<van-cell class="balance_baby">
				<template #title>
					<div class="title">
						<span>余额宝</span>
						<span>随存随取</span>
					</div>
				</template>
				<template #default>
					<div class="default"><span>0.00</span></div>
				</template>
			</van-cell>
		</van-cell-group>
		<van-cell-group class="financial_fund">
			<van-cell :border="false" class="manage">
				<template #title>
					<div class="title">
						<span>理财产品</span>
						<span>收益稳健</span>
					</div>
				</template>
			</van-cell>
			<van-cell class="fund">
				<template #title>
					<div class="title">
						<span>基金</span>
						<span>费率1折起</span>
					</div>
				</template>
			</van-cell>
		</van-cell-group>
		<van-cell-group :border="false" class="gold">
			<van-cell class="gold_box">
				<template #title>
					<div class="title">
						<span>理财产品</span>
						<span>收益稳健</span>
					</div>
				</template>
			</van-cell>
		</van-cell-group>
	</div>
</template>

<script></script>

<style lang="less" scoped>
.card_box {
	height: auto;
	width: 100%;

	.my_assets {
		height: 50px;
		margin-bottom: 0.5px;

		.title {
			height: 100%;
			width: auto;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			font-size: 17px;
			font-weight: 600;

			span {
				margin-right: 5px;
			}
		}

		.default {
			height: 100%;
			width: auto;
			display: flex;
			align-items: center;
			font-size: 12px;
			justify-content: flex-end;
			font-weight: 400;
		}
	}

	.total_assets {
		height: 75px;

		.title {
			height: 100%;
			width: auto;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;

			span:nth-child(1) {
				font-size: 13px;
				color: #808080;
			}

			span:nth-child(2) {
				font-size: 20px;
				font-weight: 800;
				color: #000;
			}
		}

		.default {
			height: 100%;
			width: auto;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;

			span:nth-child(2) {
				font-size: 20px;
				font-weight: 800;
			}
		}
	}

	.balance_box {
		display: flex;

		.balance {
			height: 65px;
			width: 170px;
			border-right: 0.1px solid #f8f9fa;

			.title {
				height: 100%;
				width: auto;
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				span:nth-child(1) {
					font-size: 13px;
					color: #000;
				}

				span:nth-child(2) {
					font-size: 10px;
					font-weight: 600;
					color: #808080;
				}
			}
		}

		.balance_baby {
			height: 65px;
			width: 170px;

			.title {
				height: 100%;
				width: auto;
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				span:nth-child(1) {
					font-size: 13px;
					color: #000;
				}

				span:nth-child(2) {
					font-size: 10px;
					color: #808080;
				}
			}

			.default {
				font-size: 13px;
			}
		}
	}

	.financial_fund {
		display: flex;

		.manage {
			height: 65px;
			width: 170px;
			border-right: 0.1px solid #f8f9fa;

			.title {
				height: 100%;
				width: auto;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				font-size: 13px;

				span:nth-child(1) {
					color: #000;
				}

				span:nth-child(2) {
					color: #808080;
				}
			}
		}

		.fund {
			height: 65px;
			width: 170px;

			.title {
				height: 100%;
				width: auto;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				font-size: 13px;

				span:nth-child(1) {
					color: #000;
				}

				span:nth-child(2) {
					color: #808080;
				}
			}
		}
	}

	.gold {
		display: flex;
		margin-bottom: 10px;

		.gold_box {
			height: 65px;
			width: 170px;
			border-right: 0.1px solid #f8f9fa;
			border-top: 0.1px solid #f8f9fa;

			.title {
				height: 100%;
				width: auto;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				font-size: 13px;

				span:nth-child(1) {
					color: #000;
				}

				span:nth-child(2) {
					color: #808080;
				}
			}
		}
	}
}
</style>
