<template>
	<div class="home">
		<el-row>
			<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
				<h1>JSONPlaceholder</h1>
			</el-col>
		</el-row>

		<el-row>
			<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
				<p>
					Fake Online REST API for Testing
					<br>Serving ~200M requests per month
					<br>Powered by JSON Server + LowDB
				</p>
			</el-col>
		</el-row>

		<el-row>
			<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
				<div class="detail">
					<router-link to="/book">Reading</router-link>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: "",
	props: [""],
	data() {
		return {};
	},
	methods: {}
};
</script>



<style scoped lang="scss">
@media screen and (max-width: 768px) {
	.home {
		h1 {
			font-size: 2rem !important;
		}

    p {
      font-size: 0.5rem !important;
    }

    a {
      font-size: 1.6rem !important;
    }
	}
}
.home {
	margin: 2rem auto;
	padding: 1rem;
	text-align: center;
	h1 {
		font-size: 4rem;
		font-weight: 300;
		letter-spacing: 0.05em;
	}

	p {
		font-size: 1.3rem;
		color: #555;
	}

	.detail {
		a {
			font-size: 3rem;
			color: #fa6855;
		}
	}
}
</style>