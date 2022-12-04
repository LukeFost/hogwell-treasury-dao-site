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
			<meta name={"description"} content={"Hogwell is a DAO-based fund focused on simple straighforward economics and principles."} />
			<meta property={"og:title"} content={"Hogwell"} />
			<meta property={"og:description"} content={"Hogwell is a DAO-based fund focused on simple straighforward economics and principles."} />
			<meta property={"og:image"} content={"https://gateway.pinata.cloud/ipfs/QmWHypqAKJ6zsDENjoCTCRrPh475ht83Q6SYNC4W3qyNS8"} />
			<link rel={"shortcut icon"} href={"https://gateway.pinata.cloud/ipfs/QmWHypqAKJ6zsDENjoCTCRrPh475ht83Q6SYNC4W3qyNS8"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://gateway.pinata.cloud/ipfs/QmWHypqAKJ6zsDENjoCTCRrPh475ht83Q6SYNC4W3qyNS8"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://gateway.pinata.cloud/ipfs/QmWHypqAKJ6zsDENjoCTCRrPh475ht83Q6SYNC4W3qyNS8"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://gateway.pinata.cloud/ipfs/QmWHypqAKJ6zsDENjoCTCRrPh475ht83Q6SYNC4W3qyNS8"} />
			<link rel={"apple-touch-startup-image"} href={"https://gateway.pinata.cloud/ipfs/QmWHypqAKJ6zsDENjoCTCRrPh475ht83Q6SYNC4W3qyNS8"} />
			<meta name={"msapplication-TileImage"} content={"https://gateway.pinata.cloud/ipfs/QmWHypqAKJ6zsDENjoCTCRrPh475ht83Q6SYNC4W3qyNS8"} />
		</Helmet>
		{/*
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
*/}
		<Section
			padding="40px 0 40px 0"
			background="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://gateway.pinata.cloud/ipfs/Qmbg5P76RBPHj48hjurRpfux8HL3VqHzkyZmHX4esNTJFu) center center/cover no-repeat"
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
						background="url(https://gateway.pinata.cloud/ipfs/Qmd4Kkbo4BRsipy3JbCLLwz4pHqcEnC4o83w8Mg4T63Z6c) 50% 15%/cover"
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
						src="https://gateway.pinata.cloud/ipfs/Qmb21wLcAevkLjr4SmPkMCNbHFXWMQNS38eDKgM2bY1pYv"
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
						src="https://gateway.pinata.cloud/ipfs/QmfGsjBp3bcm47aTcKhRuQwo7MCZJHAiGUVqBZSXAMjjgz/farmer_lookin.png"
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
						src="https://gateway.pinata.cloud/ipfs/QmfGsjBp3bcm47aTcKhRuQwo7MCZJHAiGUVqBZSXAMjjgz/seljwell.png"
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6143a05129a0a1001e6c835a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});