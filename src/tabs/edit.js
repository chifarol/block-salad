/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
 
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

import Inspector from "./inspector";
import { Icon, check, plus, minus } from "@wordpress/icons";
// import {  } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
 export function tabTitleStyle(attributes,state) {
	let activeStyle = {
		padding: `${attributes.tabTitlePadding}px`,
		width:`${attributes.tabTitleWidth}px`
	};
	let inactiveStyle = {
		padding: `${attributes.tabTitlePadding}px`,
		width:`${attributes.tabTitleWidth}px`
	};
	switch (attributes.tabStyle) {
		case "Tabbed":
			if (state === "active") {
				activeStyle["backgroundColor"]= attributes.activeBGColor;
				activeStyle["color"]= attributes.activeColor;
				activeStyle["borderRadius"] = attributes.borderRadius;
				activeStyle["backgroundColor"] = attributes.activeBGColor;
				activeStyle["color"] = attributes.activeColor;
				return activeStyle;
			} else {
				 inactiveStyle['backgroundColor']=attributes.inactiveBGColor;
				 inactiveStyle["color"]= attributes.inactiveColor;
				return inactiveStyle;
			}
			break;
		case "Lined":
			if (state === "active") {
				const borderString = `${attributes.activeBorder.width} ${
					attributes.activeBorder.style
				} ${attributes.activeBorder.color || attributes.activeColor}`;
				activeStyle["borderRadius"] = attributes.borderRadius;
				activeStyle[`border${attributes.strokePosition}`] = borderString;
				console.log("lined style", activeStyle);
				return activeStyle;
			} else {
				const borderString = `${attributes.inactiveBorder.width} ${
					attributes.inactiveBorder.style
				} ${attributes.inactiveBorder.color || attributes.inactiveColor}`;
				inactiveStyle[`border${attributes.strokePosition}`] = borderString;
				return inactiveStyle;
			}
			break;
		

		default:
			break;
	}
}
export default function Edit({
	attributes,
	setAttributes,
	clientId,
	block,
	getBlock,
	getSelectedBlock,
	updateBlockAttributes,
	insertBlock,
	insertAfterBlock,
	removeBlock,
	moveBlockToPosition,
	selectBlock,
	replaceInnerBlocks,
	getBlockType,
	createBlock,
}) {
	const tabTitles = attributes.tabTitles;
	const activeTab = attributes.activeTab;
	function getTabTitles() {
		console.log(
			"block",
			block,
			"block.innerBlocks",
			block.innerBlocks[block.innerBlocks.length - 1]
		);
		console.log(
			"getBlockType tab-content",
			getBlockType("block-salad/tab-content")
		);
		console.log("getBlockType tabs", getBlockType("block-salad/tabs"));
	}
	function updateTabTitlesInput(newTitle, index) {
		const newTabTitles = tabTitles.map((title) => title);
		newTabTitles[index] = newTitle;
		setAttributes({ tabTitles: newTabTitles });
		console.log("new title", newTitle);
	}
	function onClickTabTitle(titleIndex) {
		setAttributes({ activeTab: titleIndex });
		console.log("activeTab", activeTab);
	}
	function addTab() {
		const newTabTitles = tabTitles.map((title) => title);
		newTabTitles[newTabTitles.length] = "";
		setAttributes({ tabTitles: newTabTitles });
		replaceInnerBlocks(block.clientId, [
			...block.innerBlocks,
			createBlock("block-salad/tab-content", {
				display: "block",
				index: newTabTitles.length - 1,
			}),
		]);
		setAttributes({ activeTab: newTabTitles.length - 1 });

		console.log("new title", newTabTitles);
	}
	

	return (
		<div {...useBlockProps()}>
			<div
				className="block-salad-tabs-container"
				style={{ gap: `${attributes.majorGap}px`,flexDirection:`${attributes.orientation==="Horizontal"?"column":"row"}` }}
			>
				<div
					className={`block-salad-tab-titles-container`}
					style={{
						justifyContent: attributes.tabPosition,
						gap: `${attributes.minorGap}px`,
						flexDirection:`${attributes.orientation==="Horizontal"?"row":"column"}`,
						
					}}
				>
					{tabTitles.map((title, index) => (
						<>
							<RichText
								value={title}
								className="block-salad-tab-title"
								placeholder="Enter Title"
								onClick={() => onClickTabTitle(index)}
								onChange={(value) => updateTabTitlesInput(value, index)}
								style={
									index === activeTab
										? tabTitleStyle(attributes,"active")
										: tabTitleStyle(attributes,"inactive")
								}
							/>

						</>
					))}
					<Icon icon={plus} onClick={addTab} style={{ cursor: "pointer" }} />
				</div>
				<div
					className="block-salad-tab-content-container"
					style={{
						backgroundColor: attributes.tabStyle=="Tabbed"&&attributes.activeBGColor,
						...(attributes.tabStyle==='Tabbed' && {color: attributes.activeColor}),
						padding: `${attributes.tabContentPadding}px`,
					}}
				>
					<InnerBlocks
						allowedBlocks={["block-salad/tab-content"]}
						template={[["block-salad/tab-content"]]}
						renderAppender={false}
					/>
				</div>
			</div>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		</div>
	);
}
