import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./AboutSection.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from 'reactstrap';


const AboutSection = () => {

	//layoutBackground
	const layoutBackgroundSelectedRedux = useSelector((state)=>
		state.aboutSectionBackground.backgroundType
	);
	const [layoutBackgroundSelected, setlayoutBackgroundSelected] = useState(
		layoutBackgroundSelectedRedux
	);
	//layoutBackgroundColor
	const layoutBackgroundColorRedux = useSelector((state) => 
		state.aboutSectionBackground.backgroundColor
	)

	//layoutDesign
	const layoutDesginTypeRedux = useSelector(
		(state) => state.aboutSectionBackground.backgroundDesignType
	);

	//layoutTransition
	const layoutTransitionSelectedRedux = useSelector(
		(state) => state.aboutSectionBackground.backgroundTransition
	);
	//aboutTitle

	const aboutTitleRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionTitle
	);
	const aboutTitleAlignment = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionTitleAlignment
	);

	//aboutSectionIntro
	const introRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionIntro
	);

	//about section passage
	const aboutPassageRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionPassage
	);

	//about Image section
	const aboutImageTitleRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionImageTitle
	);

	//Social Media
	const aboutSocialMediaTitleRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionSocialMediaTitle
	);
	const aboutSocialMediaLinksRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionSocialMediaLinks
	);
	
	//basic info section
	const aboutSectionBasicInfoRedux = useSelector(
		(state) => state.aboutSectionBackground.aboutSectionBasicInfo
	);
	

	//imgage section
	const aboutSectioImageBorderRedux = useSelector(
		(state) => state.aboutSectionBackground.imageBorderColor
	);
	const aboutSectioImageRedux = useSelector(
		(state) => state.AboutSectionImageUploader
	);

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
    return (
		<div className="aboutSectionPage">
			<div
				className={`aboutSectionbackground pt-0 mt-0`}
				data-aos={layoutTransitionSelectedRedux}
			>
				{layoutBackgroundSelectedRedux === 0 ? (
					<div className="aboutSectionbackground1UpperSection">
						<div className="aboutSectionbackground1Red"></div>
						<div className="aboutSectionbackground1Yellow"></div>
						<div className="aboutSectionbackground1Green"></div>
					</div>
				) : null}
				<div
					className={`aboutSectionbackgroundBody ${
						layoutBackgroundSelectedRedux === 1
							? `aboutSectionBackgroundboderbox`
							: layoutBackgroundSelectedRedux === 2
							? `aboutSectionBackgroundNone`
							: ``
					}`}
					style={{
						backgroundColor: layoutBackgroundColorRedux,
					}}
				>
					{layoutDesginTypeRedux === 0 ? (
						<div className="layoutDesignType0">
							<p
								className={`aboutSectionTitle ${
									aboutTitleAlignment === `middle`
										? `aboutTitleMiddle`
										: ``
								}`}
								style={{
									color: aboutTitleRedux.color,
									fontFamily: aboutTitleRedux.fontStyle,
								}}
							>
								{aboutTitleRedux.text}
							</p>
							<div className="aboutSectionContent">
								<div className="aboutSectionContentLeft">
									<p
										className="aboutSectionContentSubTitle"
										style={{
											color: introRedux.color,
											fontFamily: introRedux.fontStyle,
										}}
									>
										{introRedux.text}
									</p>
									<p
										className="aboutSectionContentTitle"
										style={{
											color: aboutImageTitleRedux.color,
											fontFamily:
												aboutImageTitleRedux.fontStyle,
										}}
									>
										{aboutImageTitleRedux.text}
									</p>
									<img
										style={{
											border: `${aboutSectioImageBorderRedux} 4px solid`,
										}}
										src={
											aboutSectioImageRedux
												? aboutSectioImageRedux
												: "https://picsum.photos/500/300"
										}
										alt="about"
									></img>
								</div>
								<div className="aboutSectionContentMiddle"></div>
								<div className="aboutSectionContentRight">
									<p
										className="aboutSectionContentTitle"
										style={{
											color:
												aboutSectionBasicInfoRedux.title
													.color,
											fontFamily:
												aboutSectionBasicInfoRedux.title
													.fontStyle,
										}}
									>
										{aboutSectionBasicInfoRedux.title.text}
									</p>
									<div className="aboutSectionContentRightBasicInfo container">
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Age:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.age
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Email:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.email
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Phone:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.phone
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Address:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.address
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Languages:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.languages
												}
											</div>
										</div>
									</div>
									<p
										className="aboutSectionContentTitle"
										style={{
											color:
												aboutSocialMediaTitleRedux.color,
											fontFamily:
												aboutSocialMediaTitleRedux.fontStyle,
										}}
									>
										{aboutSocialMediaTitleRedux.text}
									</p>
									<div className="aboutSectionSocialMediaLinks">
										<NavLink
											to={
												aboutSocialMediaLinksRedux.gmail
											}
											className="btn google"
										>
											<i
												class="fab fa-google-plus-g"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink
											to={
												aboutSocialMediaLinksRedux.instagram
											}
											className="btn instagram"
										>
											<i
												class="fab fa-instagram"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink
											to={
												aboutSocialMediaLinksRedux.linkedIn
											}
											className="btn linkedIn"
										>
											<i
												class="fab fa-linkedin"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink to="#" className="btn gitHub">
											<i
												class="fab fa-github"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					) : layoutDesginTypeRedux === 1 ? (
						<div className="layoutDesignType1">
							<p
								className={`aboutSectionTitle ${
									aboutTitleAlignment === `middle`
										? `aboutTitleMiddle`
										: ``
								}`}
								style={{
									color: aboutTitleRedux.color,
									fontFamily: aboutTitleRedux.fontStyle,
								}}
							>
								{aboutTitleRedux.text}
							</p>
							<p
								className="aboutSectionContentSubTitle"
								style={{
									color: introRedux.color,
									fontFamily: introRedux.fontStyle,
								}}
							>
								{introRedux.text}
							</p>
							<p
								style={{
									color: aboutPassageRedux.color,
									fontFamily: aboutPassageRedux.fontStyle,
								}}
							>
								{aboutPassageRedux.text}
							</p>
							<div className="aboutLayoutDesignType1Flex">
								<div className="aboutLayoutDesignType1FlexLeft">
									<p
										className="aboutSectionContentTitle"
										style={{
											color:
												aboutSectionBasicInfoRedux.title
													.color,
											fontFamily:
												aboutSectionBasicInfoRedux.title
													.fontStyle,
										}}
									>
										{aboutSectionBasicInfoRedux.title.text}
									</p>
									<div className="aboutSectionContentRightBasicInfo container">
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Age:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.age
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Email:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.email
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Phone:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.phone
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Address:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.address
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Languages:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.languages
												}
											</div>
										</div>
									</div>
								</div>
								<div className="aboutLayoutDesignType1FlexRight">
									<p
										className="aboutSectionContentTitle"
										style={{
											color:
												aboutSocialMediaTitleRedux.color,
											fontFamily:
												aboutSocialMediaTitleRedux.fontStyle,
										}}
									>
										{aboutSocialMediaTitleRedux.text}
									</p>
									<div className="aboutSectionSocialMediaLinks">
										<NavLink
											to={
												aboutSocialMediaLinksRedux.gmail
											}
											className="btn google"
										>
											<i
												class="fab fa-google-plus-g"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink
											to={
												aboutSocialMediaLinksRedux.instagram
											}
											className="btn instagram"
										>
											<i
												class="fab fa-instagram"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink
											to={
												aboutSocialMediaLinksRedux.linkedIn
											}
											className="btn linkedIn"
										>
											<i
												class="fab fa-linkedin"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink
											to={
												aboutSocialMediaLinksRedux.github
											}
											className="btn gitHub"
										>
											<i
												class="fab fa-github"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					) : layoutDesginTypeRedux === 2 ? (
						<div className="layoutDesignType2">
							<p
								className={`aboutSectionTitle ${
									aboutTitleAlignment === `middle`
										? `aboutTitleMiddle`
										: ``
								}`}
								style={{
									color: aboutTitleRedux.color,
									fontFamily: aboutTitleRedux.fontStyle,
								}}
							>
								{aboutTitleRedux.text}
							</p>
							<div className="aboutLayoutDesignFlex">
								<div className="aboutLayoutDesignFlexLeft">
									<p
										className="aboutSectionContentSubTitle"
										style={{
											color: introRedux.color,
											fontFamily: introRedux.fontStyle,
										}}
									>
										{introRedux.text}
									</p>
									<p
										className="aboutSectionContentTitle"
										style={{
											color:
												aboutSectionBasicInfoRedux.title
													.color,
											fontFamily:
												aboutSectionBasicInfoRedux.title
													.fontStyle,
										}}
									>
										{aboutSectionBasicInfoRedux.title.text}
									</p>
									<div className="aboutSectionContentRightBasicInfo container">
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Age:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.age
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Email:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.email
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Phone:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.phone
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Address:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.address
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Languages:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.languages
												}
											</div>
										</div>
									</div>
									<p
										className="aboutSectionContentTitle"
										style={{
											color:
												aboutSocialMediaTitleRedux.color,
											fontFamily:
												aboutSocialMediaTitleRedux.fontStyle,
										}}
									>
										{aboutSocialMediaTitleRedux.text}
									</p>
									<div className="aboutSectionSocialMediaLinks">
										<NavLink
											to={
												aboutSocialMediaLinksRedux.gmail
											}
											className="btn google"
										>
											<i
												class="fab fa-google-plus-g"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink
											to={
												aboutSocialMediaLinksRedux.instagram
											}
											className="btn instagram"
										>
											<i
												class="fab fa-instagram"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink
											to={
												aboutSocialMediaLinksRedux.linkedIn
											}
											className="btn linkedIn"
										>
											<i
												class="fab fa-linkedin"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink to="#" className="btn gitHub">
											<i
												class="fab fa-github"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
									</div>
								</div>
								<div className="aboutLayoutDesignFlexMiddle"></div>
								<div className="aboutLayoutDesignFlexRight">
									<p className="aboutSectionContentTitle">
										✨ Basic Information
									</p>
									<img
										style={{
											border: `${aboutSectioImageBorderRedux} 4px solid`,
										}}
										src={
											aboutSectioImageRedux
												? aboutSectioImageRedux
												: "https://picsum.photos/500/500"
										}
										alt="about"
									></img>
								</div>
							</div>
						</div>
					) : layoutDesginTypeRedux === 3 ? (
						<div className="layoutDesignType3">
							<p
								className={`aboutSectionTitle ${
									aboutTitleAlignment === `middle`
										? `aboutTitleMiddle`
										: ``
								}`}
								style={{
									color: aboutTitleRedux.color,
									fontFamily: aboutTitleRedux.fontStyle,
								}}
							>
								{aboutTitleRedux.text}
							</p>
							<p
								className="aboutSectionContentSubTitle"
								style={{
									color: introRedux.color,
									fontFamily: introRedux.fontStyle,
								}}
							>
								{introRedux.text}
							</p>
							<p
								style={{
									color: aboutPassageRedux.color,
									fontFamily: aboutPassageRedux.fontStyle,
								}}
							>
								{aboutPassageRedux.text}
							</p>
							<div className="aboutLayoutDesign3Flex">
								<div className="aboutLayoutDesign3FlexLeft">
									<p
										className="aboutSectionContentTitle"
										style={{
											color:
												aboutSectionBasicInfoRedux.title
													.color,
											fontFamily:
												aboutSectionBasicInfoRedux.title
													.fontStyle,
										}}
									>
										{aboutSectionBasicInfoRedux.title.text}
									</p>
									<div className="aboutSectionContentRightBasicInfo container">
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Age:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.age
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Email:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.email
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Phone:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.phone
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Address:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.address
												}
											</div>
										</div>
										<div className="row">
											<div
												className="aboutSectionContentRightBasicInfoKeys col-sm-4"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.keys.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.keys.fontStyle,
												}}
											>
												Languages:
											</div>
											<div
												className="col-sm-8 aboutSectionContentRightBasicInfoValues"
												style={{
													color:
														aboutSectionBasicInfoRedux
															.values.color,
													fontFamily:
														aboutSectionBasicInfoRedux
															.values.fontStyle,
												}}
											>
												{
													aboutSectionBasicInfoRedux
														.values.text.languages
												}
											</div>
										</div>
									</div>
								</div>
								<div className="aboutLayoutDesign3FlexRight">
									<img
										style={{
											border: `${aboutSectioImageBorderRedux} 4px solid`,
										}}
										src={
											aboutSectioImageRedux
												? aboutSectioImageRedux
												: "https://picsum.photos/300/300"
										}
										alt="about"
									></img>
									<p
										className="aboutSectionContentTitle"
										style={{
											color:
												aboutSocialMediaTitleRedux.color,
											fontFamily:
												aboutSocialMediaTitleRedux.fontStyle,
										}}
									>
										{aboutSocialMediaTitleRedux.text}
									</p>
									<div className="aboutSectionSocialMediaLinks">
										<NavLink
											to={
												aboutSocialMediaLinksRedux.gmail
											}
											className="btn google"
										>
											<i
												class="fab fa-google-plus-g"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink
											to={
												aboutSocialMediaLinksRedux.instagram
											}
											className="btn instagram"
										>
											<i
												class="fab fa-instagram"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink
											to={
												aboutSocialMediaLinksRedux.linkedIn
											}
											className="btn linkedIn"
										>
											<i
												class="fab fa-linkedin"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
										<NavLink to="#" className="btn gitHub">
											<i
												class="fab fa-github"
												style={{
													height: "fit-content",
												}}
											></i>
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
