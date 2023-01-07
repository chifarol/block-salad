/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
	InnerBlocks,
} from "@wordpress/block-editor";
import {
	tabTitleStyle
} from "./edit";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<div
				className="block-salad-tabs-container"
				data-attributes={JSON.stringify(attributes)}
				style={{
					gap: `${attributes.majorGap}px`,flexDirection:`${attributes.orientation==="Horizontal"?"column":"row"}`
				}}
			>
				<div className="block-salad-tab-titles-container" style={{
						justifyContent: attributes.tabPosition,
						gap: `${attributes.minorGap}px`,
						flexDirection:`${attributes.orientation==="Horizontal"?"row":"column"}`,
						
					}} >
					{attributes.tabTitles.map((title, index) => (
						<RichText.Content
							value={title}
							className="block-salad-tab-title"
							data-titleIndex={index}
							tagName="p"
							style={ index === attributes.activeTab
								? tabTitleStyle(attributes,"active")
								: tabTitleStyle(attributes,"inactive") }
						/>
					))}
				</div>
				<div className="block-salad-tab-content-container" style={{
						...(attributes.tabStyle==='Tabbed' && {color: attributes.activeColor,backgroundColor: attributes.activeBGColor}),
						padding: `${attributes.tabContentPadding}px`,
					}}>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
