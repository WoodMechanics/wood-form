<script setup>
import Header from '../components/about/header/Header.vue'
import LinkButton from '../components/common/LinkButton.vue'
import BackGround from '../components/common/BackGround.vue'
import WoodMechanics from '../components/common/WoodMechanics.vue'
import Section from '../components/about/section/Section.vue'
</script>

<template>
	<BackGround />
	<Header />
	<main>
		<Section id="overview">
			<div>
				<h1>Get insights quickly, with Wood-Forms</h1>
				<p>Easily create and share online forms and surveys, and analyze responses in real-time.</p>
				<LinkButton />
			</div>
			<div class="image" />
		</Section>
		<Section class="section2">
			<p>
				<a href="#features" class="downLink"
					>See what you can do with Wood-Forms <br />
					<img src="../assets/icons8-arrow-down-30.png" alt=""
				/></a>
			</p>
		</Section>
		<Section id="features">
			<div class="image" />
			<div>
				<h2>Create an online form as easily as creating a document</h2>
				<p>
					Select from multiple question types, drag-and-drop to reorder questions, and customize
					values as easily as pasting a list.
				</p>
			</div>
		</Section>
		<Section>
			<div>
				<h2>Send polished surveys and forms</h2>
				<p>
					Customize colors, images, and fonts to adjust the look and feel or reflect your
					organization's branding. And add custom logic that shows questions based on answers, for a
					more seamless experience.
				</p>
			</div>
			<div class="image" />
		</Section>
		<Section>
			<div class="image" />
			<div>
				<h2>Analyze responses with automatic summaries</h2>
				<p>
					See charts with response data update in real-time. Or open the raw data with Google Sheets
					for deeper analysis or automation.
				</p>
			</div>
		</Section>
		<Section>
			<div>
				<h2>Create and respond to surveys from anywhere</h2>
				<p>
					Access, create, and edit forms on-the-go, from screens big and small. Others can respond
					to your survey from wherever they are—from any mobile device, tablet, or computer.
				</p>
			</div>
			<div class="image phoneImg" />
		</Section>
		<Section class="section6">
			<div>
				<img
					src="https://kstatic.googleusercontent.com/files/e6cc39df1fc54b2cf1f86e429554f094be916ed5d65856b9ebbf2745577678aae2ec0549802ef14b997b6de066ebe3f2fde97ea98cb0f67c35d500708f368b87"
					alt=""
				/>
				<h4>Build forms and analyze results together</h4>
				<p>
					Add collaborators to build questions together in real-time. Then analyze results together
					without having to share multiple versions of the file.
				</p>
			</div>
			<div>
				<img
					src="https://kstatic.googleusercontent.com/files/ff3f08e4e57df98669aea7a40dd55ed3eee93b00b4e661d076a820ee4ca9165f6a810bf1071093c8662f49402fe30ae56cbbaa700b0c08d15ff8aec5315beea1"
					alt=""
				/>
				<h4>Work with clean response data</h4>
				<p>
					Use built-in intelligence to set response validation rules. For example, ensure that email
					addresses are properly formatted or that numbers fall within a specified range.
				</p>
			</div>
			<div>
				<img
					src="https://kstatic.googleusercontent.com/files/cff121456527424642798945932a09974a2fa0d0f95e838968bcaeed4513456885478939f9ffb06ebb03dd32e7ddd3dea4bcd2897fc9d956907aab45033bd1d0"
					alt=""
				/>
				<h4>Share forms via email, link, or website</h4>
				<p>
					It's easy to share forms with specific people or with a broad audience by embedding forms
					on your website or sharing the links on social media.
				</p>
			</div>
		</Section>
		<Section class="section7">
			<div class="sectionHead">
				<h2>Get a head start with templates</h2>
				<p>
					Choose from a variety of surveys, questionnaires, and other professionally-designed
					templates to kick things off quickly.
				</p>
			</div>
			<div class="section7Images">
				<div>
					<p>Orders</p>
					<div class="section7Img" />
				</div>
				<div>
					<p>Registration</p>
					<div class="section7Img" />
				</div>
				<div>
					<p>Feedback</p>
					<div class="section7Img" />
				</div>
				<div>
					<p>Assessment</p>
					<div class="section7Img" />
				</div>
			</div>
		</Section>
		<Section class="section8">
			<h2>Ready to get started?</h2>
			<LinkButton />
		</Section>
		<WoodMechanics />
	</main>
</template>

<style>
main {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.section2 {
	height: 100px;
	margin: 30px 0;
	& .downLink {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}
.section6 {
	height: 300px;
	padding: 100px 0;
	align-items: flex-start;
	text-align: justify;
	& div {
		margin: 0 20px;
		line-height: 30px;
	}
	& p {
		font-size: var(--size-small-text);
		color: var(--color-secondary);
	}
}
.section7,
.section8 {
	flex-direction: column;
	align-items: center;
	flex: none;
}
.sectionHead {
	text-align: center;
	width: 60%;
	margin: 0;
}
.section7 div {
	margin: 0 30px;
}
.section7 div p {
	text-align: center;
}
.section7Images {
	display: flex;
}
.section8 {
	margin-top: 70px;
	padding-bottom: 80px;
	height: fit-content;
}
</style>
