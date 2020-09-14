<template>
	<div class="cont_box">
		<van-cell-group>
			<van-cell value="" class="title_box">
				<template #title>
					<span>我的保障</span>
				</template>
			</van-cell>
		</van-cell-group>
		<van-cell-group :border="false">
			<van-cell value="" class="insurance">
				<template #title>
					<div class="title">
						<span>保险</span>
						<span>1位家人保障中</span>
					</div>
				</template>
			</van-cell>
		</van-cell-group>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
	.cont_box {
		height: 100%;
		width: 100%;
	
		.title_box {
			font-size: 17px;
			font-weight: 800;
			text-align: left;
		}
	
		.insurance {
			height: 100%;
			width: auto;
	
			.title {
				height: 100%;
				width: auto;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
	
				span:nth-child(1) {
					display: block;
					height: 20px;
				}
	
				span:nth-child(2) {
					color: #808080;
				}
			}
		}
	}
</style>
