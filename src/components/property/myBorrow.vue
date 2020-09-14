<template>
	<div class="borrow_box">
		<van-cell-group>
			<van-cell class="cont_box">
				<template #title>
					<div class="title">
						<img src="../../assets/jb.png" alt="借呗" />
						<span>借呗</span>
					</div>
				</template>
				<template #default>
					<div class="default"><van-icon name="arrow" color="#BBBBBB" size="10" /></div>
				</template>
			</van-cell>
		</van-cell-group>
	</div>
</template>

<script></script>

<style lang="less" scoped>
.borrow_box {
	height: auto;
	width: 100%;

	.cont_box {
		height: 50px;
		width: auto;

		.title {
			height: 100%;
			width: auto;
			display: flex;
			align-items: center;

			span {
				font-size: 17px;
				font-weight: 800;
				margin-left: 10px;
				margin-bottom: 3px;
			}

			img {
				height: 20px;
				width: 20px;
			}
		}

		.default {
			height: 100%;
			width: auto;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			font-size: 10px;
		}
	}
}
</style>
