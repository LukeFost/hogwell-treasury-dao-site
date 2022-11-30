import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box, Image, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Business Matchmaking Has Never Been Easier
			</title>
			<meta name={"description"} content={"Manage all your events in a single app. Our online event management platform provides various services event planners and project managers may need."} />
			<meta property={"og:title"} content={"Business Matchmaking Has Never Been Easier"} />
			<meta property={"og:description"} content={"Manage all your events in a single app. Our online event management platform provides various services event planners and project managers may need."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/OG-image.png?v=2021-09-22T11:33:13.239Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/favicon%2032x32.png?v=2021-09-22T11:33:41.498Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/270x270.png?v=2021-09-22T11:33:55.934Z"} />
		</Helmet>
		<Section background="--color-lightD1">
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
				Hogwell Treasury DAO
			</Text>
			<Menu
				display="flex"
				justify-content="center"
				font="--base"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px">
					Home
				</Override>
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
			</Menu>
		</Section>
		<Section
			padding="40px 0 40px 0"
			background="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://uploads.quarkly.io/6386ff7f855d39001fcded51/images/Skye_retro_wave_style_ufo_cult_members_are_older_and_are_in_pas_06456fb9-0886-40b9-8026-655787e756b4.png?v=2022-11-30T07:47:17.373Z) center center/cover no-repeat"
			min-height="100vh"
			lg-padding="80px 0 80px 0"
			md-padding="96px 0 96px 0"
			sm-padding="72px 0 96px 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 40px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--light"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
					width="80%"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					sm-width="100%"
				>
					Finance Together Is Better than Apart
				</Text>
				<Text
					margin="0px 0px 32px 0px"
					color="#FFFFFF"
					font="--lead"
					lg-text-align="center"
					text-align="center"
				>
					Join a DAO and get amazing access to DEFI and crypto tech without the crazy overhead and confusion.
				</Text>
			</Box>
		</Section>
		<Section background="--color-darkL2" padding="60px 0" sm-padding="40px 0">
			<Box margin="-16px -16px -16px -16px" padding="16px 16px 16px 16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box
						background="url(https://uploads.quarkly.io/6386ff7f855d39001fcded51/images/Cool_Guy__The_beginning_the_middle_and_the_end_of_time_space_an_8bfadb8a-9682-4a56-94b0-28769b0c170a.png?v=2022-11-30T07:37:35.419Z) 50% 15%/cover"
						padding="0px 0px 672px 0px"
						margin="0px -112px 0px 0px"
						lg-margin="0px 0px 0px 0px"
						sm-padding="0px 0px 400px 0px"
					/>
				</Box>
				<Box width="50%" display="flex" padding="16px 16px 0px 16px" lg-width="100%">
					<Box
						padding="98px 64px 98px 64px"
						mix-blend-mode="lighten"
						background="--color-red"
						margin="36px 0px -20px -112px"
						display="flex"
						flex-direction="column"
						color="--light"
						lg-margin="0px 0px 0px 0px"
						lg-width="100%"
						sm-padding="64px 32px 64px 32px"
					>
						<Text
							as="h4"
							margin="0"
							font="--base"
							letter-spacing="1px"
							text-transform="uppercase"
						>
							ABOUT US
						</Text>
						<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
							Hogwell...
						</Text>
						<Text as="p" margin="16px 0" font="--base" max-width="400px">
							We are a proffesional investment group with the express purpose of reaching beyond the current limitations of value creation. Looking for future possibilites that delve deep into how cryptographic transaction operate, provide services for economic transactions to occur, and assisting projects in creating renewable and strong tokenomics and processes to last for years to come.{" "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" lg-padding="60px 0 60px 0" md-padding="40px 0 40px 0" sm-padding="30px 0 30px 0">
			<Box margin="0px 0px 32px 0px" display="flex" flex-direction="column" align-items="flex-start">
				<Text
					font="--headline1"
					color="--dark"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					margin="16px 0px 0px 0px"
				>
					Cases
				</Text>
				<Text font="--lead" color="--darkL2" max-width="600px">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/6386ff7f855d39001fcded51/images/Cool_Guy__The_cosmic_exsistence_of_a_market_that_intertwines_an_147c455d-2394-414a-a733-337e9ce0dbc1.png?v=2022-11-30T07:51:35.099Z"
						border-radius="24px"
						max-width="100%"
						max-height="456px"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						2021
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" sm-width="100%" lg-padding="0px 0px 0px 0px">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Maximum Extractable Value (MEV)
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						</Text>
					</Box>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/6386ff7f855d39001fcded51/images/My%20project%20%281%29.png?v=2022-11-30T08:53:33.512Z"
						border-radius="24px"
						max-width="100%"
						max-height="456px"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
						position="static"
						display="inline-block"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						2021
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" lg-padding="0px 0px 0px 0px" sm-width="100%">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Yield Strategies
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						</Text>
					</Box>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/6386ff7f855d39001fcded51/images/koko_maru_Seljuk_emperor_watching_the_ships_approaching_the_har_66e6b8ce-aca1-4514-b119-a1eeae24e15a%20%283%29.png?v=2022-11-30T08:58:09.232Z"
						border-radius="24px"
						max-width="100%"
						max-height="456px"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						2021
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" lg-padding="0px 0px 0px 0px" sm-width="100%">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Directional Investments
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						</Text>
					</Box>
				</Box>
			</LinkBox>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6143a05129a0a1001e6c835a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});