<template>
	<el-container class="index">
		<el-row>
			<el-header>
				<el-menu
					:default-active="activeIndex"
					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect"
					background-color="#f8fafc"
					text-color="#000"
					active-text-color="#fa6855"
					router
				>
					<el-menu-item index="5" route="/learning">
						<el-col :xs="6" :sm="4" :md="4" :lg="4" :xl="4" class="hidden-xs-only">Learning</el-col>
					</el-menu-item>
					<el-menu-item index="4" route="/recommendation" class="hidden-xs-only">
						<el-col :xs="6" :sm="4" :md="4" :lg="4" :xl="4">Recommendation</el-col>
					</el-menu-item>
					<el-menu-item index="3" route="/doc">
						<el-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">Docs</el-col>
					</el-menu-item>
					<el-menu-item index="2" route="/book">
						<el-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">Books</el-col>
					</el-menu-item>
					<el-menu-item index="1" route="/home">
						<el-col :xs="8" :sm="4" :md="4" :lg="4" :xl="4">Home</el-col>
					</el-menu-item>
				</el-menu>
			</el-header>
		</el-row>

		<el-main>
			<router-view></router-view>
		</el-main>

		<el-footer>
			<el-row type="flex" justify="center" align="middle" class="top">
				<el-col :xs="6" :sm="3" :md="4" :lg="3" :xl="2">
					<router-link to="/book">Books</router-link>
				</el-col>
				<el-col :xs="8" :sm="6" :md="5" :lg="4" :xl="2">
					<router-link to="/about">Recommendations</router-link>
				</el-col>
				<el-col :xs="6" :sm="3" :md="4" :lg="3" :xl="2">
					<router-link to="/doc">Docs</router-link>
				</el-col>
			</el-row>

			<el-row type="flex" justify="center" align="middle" class="bottom">
				<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
					<div class="copyright">Copyright © 2018-2019 fking</div>
				</el-col>
			</el-row>
		</el-footer>
	</el-container>
</template>

<script>
export default {
	name: "",
	props: [""],
	data() {
		return {
		};
	},
	methods: {
		handleSelect() {}
	},
	created() {
	},
	computed: {
		activeIndex() {
			if(this.$route.fullPath == "/home") {
				return "1"
			}

			if(this.$route.fullPath == "/book") {
				return "2"
			}

			if(this.$route.fullPath == "/doc") {
				return "3"
			}

			if(this.$route.fullPath == "/recommendation") {
				return "4"
			}

			if(this.$route.fullPath == "/learning") {
				return "5"
			}
		}
	}
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 768px){
	.index {
		.el-header {
			.el-menu {
				.el-menu-item {
					font-size: 0.5rem !important;
				}
			}
		}

		.el-main {
			margin: 0 auto !important;
		}

		.el-footer {
			a {
				font-size: 0.5rem !important;
			}
			.copyright {
				font-size: 0.5rem !important;
			}
		}
	}
}
.index {
	.el-header {
		padding: 0;
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 100;
		.el-menu {
			font-weight: 400;
			display: flex;
			flex-direction: row-reverse;
			padding: 0 5% 0 0;
			border-bottom: 1px solid #f8fafc;
			.el-menu-item {
				font-size: 1rem;
			}
		}
	}

	.el-main {
		margin: 60px auto;
		min-height: 565px;
	}

	.el-footer {
		padding: 0;
		background: #f8fafc;
		margin: 0px auto;
		width: 100%;
		height: 100px !important;
		.top {
			line-height: 30px;
			text-align: center;
			margin: 25px 0 0 0;
			a {
				color: #0C0C0C;
			}
		}

		.bottom {
			line-height: 30px;
			text-align: center;
			color: #555;
			margin: -5px 0 20px 0;
		}
	}
}
</style>