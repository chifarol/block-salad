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
import { arrayMoveImmutable } from "array-move";

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
export function tabTitleStyle(attributes, state) {
	let activeStyle = {
		padding: `${attributes.tabTitlePadding}px`,
		minWidth: `${attributes.tabTitleWidth}px`,
	};
	let inactiveStyle = {
		padding: `${attributes.tabTitlePadding}px`,
		width: `${attributes.tabTitleWidth}px`,
	};
	switch (attributes.tabStyle) {
		case "Tabbed":
			if (state === "active") {
				activeStyle["backgroundColor"] = attributes.activeBGColor;
				activeStyle["color"] = attributes.activeColor;
				activeStyle["borderRadius"] = attributes.borderRadius;
				activeStyle["backgroundColor"] = attributes.activeBGColor;
				activeStyle["color"] = attributes.activeColor;
				return activeStyle;
			} else {
				inactiveStyle["backgroundColor"] = attributes.inactiveBGColor;
				inactiveStyle["color"] = attributes.inactiveColor;
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
		updateBlockOrder();
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

		updateBlockOrder();
	}
	function updateBlockOrder() {
		setAttributes({
			blockOrder: block.innerBlocks.map((block) => block.attributes.index),
		});
		console.log(
			"new blockOrder",
			block.innerBlocks.map((block) => block.attributes.index)
		);
	}
	function removeTab(targetIndex) {
		const newTabTitles = tabTitles.filter(
			(title, index) => index !== targetIndex
		);
		setAttributes({ tabTitles: newTabTitles });
		removeBlock(block.innerBlocks[targetIndex].clientId);
		block.innerBlocks.forEach((innerBlock, newIndex) => {
			if (newIndex > targetIndex)
				updateBlockAttributes(innerBlock.clientId, { index: newIndex - 1 });
			console.log("innerBlock", innerBlock);
		});
		setAttributes({ activeTab: newTabTitles.length - 1 });
		updateBlockOrder();
	}
	function shiftRight(targetIndex) {
		let newTabTitles = tabTitles;
		newTabTitles = arrayMoveImmutable(
			newTabTitles,
			targetIndex,
			targetIndex + 1
		);
		setAttributes({ tabTitles: newTabTitles });
		setAttributes({ activeTab: targetIndex + 1 });
		block.innerBlocks.forEach((innerBlock) => {
			if (innerBlock.attributes.index === targetIndex) {
				updateBlockAttributes(innerBlock.clientId, {
					index: (innerBlock.attributes.index += 1),
				});
			} else if (innerBlock.attributes.index === targetIndex + 1) {
				updateBlockAttributes(innerBlock.clientId, {
					index: (innerBlock.attributes.index -= 1),
				});
			}
		});
		updateBlockOrder();
	}
	function shiftLeft(targetIndex) {
		let newTabTitles = tabTitles;
		newTabTitles = arrayMoveImmutable(
			newTabTitles,
			targetIndex,
			targetIndex - 1
		);
		setAttributes({ tabTitles: newTabTitles });
		block.innerBlocks.forEach((innerBlock) => {
			if (innerBlock.attributes.index === targetIndex) {
				updateBlockAttributes(innerBlock.clientId, {
					index: (innerBlock.attributes.index -= 1),
				});
				console.log("end not reach -1");
			} else if (innerBlock.attributes.index === targetIndex - 1) {
				updateBlockAttributes(innerBlock.clientId, {
					index: (innerBlock.attributes.index += 1),
				});
			}
		});
		setAttributes({ activeTab: targetIndex - 1 });
		updateBlockOrder();
	}

	return (
		<div {...useBlockProps()}>
			<div
				className="block-salad-tabs-container"
				style={{
					gap: `${attributes.majorGap}px`,
					flexDirection: `${
						attributes.orientation === "Horizontal" ? "column" : "row"
					}`,
				}}
			>
				<span onClick={getTabTitles}>Get titles</span>
				<div
					className={`block-salad-tab-titles-container`}
					style={{
						justifyContent: attributes.tabPosition,
						gap: `${attributes.minorGap}px`,
						flexDirection: `${
							attributes.orientation === "Horizontal" ? "row" : "column"
						}`,
					}}
				>
					{tabTitles.map((title, index) => (
						<>
							<div
								className="block-salad-tab-title"
								style={
									index === activeTab
										? tabTitleStyle(attributes, "active")
										: tabTitleStyle(attributes, "inactive")
								}
							>
								<RichText
									value={title}
									placeholder="Enter Title"
									onChange={(value) => updateTabTitlesInput(value, index)}
									tagName="p"
									onClick={() => onClickTabTitle(index)}
								/>
								{index === activeTab && (
									<>
										{" "}
										{index !== 0 && (
											<span
												class="dashicons dashicons-arrow-up-alt shift-tab-left block-salad-admin-icons "
												onClick={() => shiftLeft(index)}
												style={{ cursor: "pointer" }}
											></span>
										)}
										{tabTitles.length > 1 && (
											<span
												onClick={() => removeTab(index)}
												style={{ color: "red", cursor: "pointer" }}
												className="dashicons dashicons-minus block-salad-admin-icons remove-tab"
											></span>
										)}
										{index !== tabTitles.length - 1 && (
											<span
												class="dashicons dashicons-arrow-up-alt shift-tab-right block-salad-admin-icons "
												onClick={() => shiftRight(index)}
												style={{ cursor: "pointer" }}
											></span>
										)}
									</>
								)}
							</div>
						</>
					))}
					<Icon
						icon={plus}
						onClick={addTab}
						style={{ cursor: "pointer" }}
						className="block-salad-admin-icons"
					/>
				</div>
				<div
					className="block-salad-tab-content-container"
					style={{
						backgroundColor:
							attributes.tabStyle == "Tabbed" && attributes.activeBGColor,
						...(attributes.tabStyle === "Tabbed" && {
							color: attributes.activeColor,
						}),
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
