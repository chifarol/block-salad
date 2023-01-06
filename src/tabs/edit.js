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
	function tabTitleStyle(state) {
		let activeStyle = {
			backgroundColor: attributes.activeBGColor,
			color: attributes.activeColor,
			padding: `${attributes.tabTitlePadding}px`,
		};
		let inactiveStyle = {
			backgroundColor: attributes.inactiveBGColor,
			color: attributes.inactiveColor,
			padding: `${attributes.tabTitlePadding}px`,
		};
		switch (attributes.tabStyle) {
			case "Tabbed":
				if (state === "active") {
					activeStyle["borderColor"] = attributes.border.color;
					activeStyle["borderStyle"] = attributes.border.style;
					activeStyle["borderWidth"] = attributes.border.width;
					activeStyle["borderRadius"] = attributes.borderRadius;
					activeStyle["backgroundColor"] = attributes.activeBGColor;
					activeStyle["color"] = attributes.activeColor;
					return activeStyle;
				} else {
					return inactiveStyle;
				}
				break;
			case "Underlined":
				if (state === "active") {
					const bordr = `${attributes.border.width} ${
						attributes.border.style
					} ${attributes.border.color || attributes.activeColor}`;
					activeStyle["borderRadius"] = attributes.borderRadius;
					activeStyle[`border${attributes.strokePosition}`] = bordr;
					console.log("underline style", activeStyle);
					return activeStyle;
				} else {
					return inactiveStyle;
				}
				break;
			case "Pills":
				if (state === "active") {
					activeStyle["borderColor"] = attributes.border.color;
					activeStyle["borderStyle"] = attributes.border.style;
					activeStyle["borderWidth"] = attributes.border.width;
					activeStyle["borderRadius"] = attributes.borderRadius;
					return activeStyle;
				} else {
					return inactiveStyle;
				}
				break;

			default:
				break;
		}
	}

	return (
		<div {...useBlockProps()}>
			<div
				className="block-salad-tabs-container"
				style={{ gap: `${attributes.majorGap}px` }}
			>
				<p onClick={getTabTitles}>
					{__("Block Salad – hello from the editor!", "block-salad")}
				</p>
				<div
					className={`block-salad-tab-titles-container`}
					style={{
						justifyContent: attributes.tabPosition,
						gap: `${attributes.minorGap}px`,
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
										? tabTitleStyle("active")
										: tabTitleStyle("inactive")
								}
							/>
						</>
					))}
					<Icon icon={plus} onClick={addTab} style={{ cursor: "pointer" }} />
				</div>
				<div
					className="block-salad-tab-content-container"
					style={{
						backgroundColor: attributes.activeBGColor,
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
