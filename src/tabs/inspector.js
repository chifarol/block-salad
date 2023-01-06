import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	Flex,
	FlexBlock,
	FlexItem,
	Panel,
	PanelBody,
	PanelRow,
	CustomSelectControl,
	SelectControl,
	ColorPicker,
	__experimentalInputControl as InputControl,
	__experimentalBorderControl as BorderControl,
} from "@wordpress/components";
const Inspector = ({ attributes, setAttributes }) => {
	function setTabPosition(value) {
		setAttributes({ tabPosition: value });
		console.log("tabPosition", value);
	}
	const tabColors = [
		{
			value: attributes.activeColor,
			onChange: (value) => setAttributes({ activeColor: value }),
			label: __("Active Color"),
		},
		{
			value: attributes.inactiveColor,
			onChange: (value) => setAttributes({ inactiveColor: value }),
			label: __("Inactive Color"),
		},
		{
			value: attributes.activeBGColor,
			onChange: (value) => setAttributes({ activeBGColor: value }),
			label: __("Active Background Color"),
		},
		{
			value: attributes.inactiveBGColor,
			onChange: (value) => setAttributes({ inactiveBGColor: value }),
			label: __("Inactive Background Color"),
		},
	];
	function setTabStyle(value) {
		setAttributes({ tabStyle: value });
		console.log("tabStyle", value);
	}

	return (
		<InspectorControls>
			<Panel>
				<PanelBody title="General Settings">
					<PanelRow>
						<Flex direction="column">
							<FlexBlock>
								<SelectControl
									options={["Tabbed", "Pills", "Underlined"].map((a) => ({
										value: __(a),
										label: a,
									}))}
									onChange={setTabStyle}
									value={attributes.tabStyle}
									label="Tab Style"
								/>

								<BorderControl
									value={{
										color: attributes.border.color || attributes.activeColor,
										style: attributes.border.style,
										width: attributes.border.width,
									}}
									label="Border"
									onChange={(value) => setAttributes({ border: value })}
								/>
								{attributes.tabStyle === "Underlined" && (
									<SelectControl
										options={["Left", "Top", "Right", "Bottom"].map((a) => ({
											value: a,
											label: __(a),
										}))}
										onChange={(value) =>
											setAttributes({ strokePosition: value })
										}
										value={attributes.strokePosition}
										label="Stroke Position:"
									/>
								)}
								<SelectControl
									options={[
										{ value: "flex-start", label: "left" },
										{ value: "center", label: "center" },
										{ value: "flex-end", label: "right" },
									]}
									onChange={setTabPosition}
									value={attributes.tabPosition}
									label="Justify: "
								/>
							</FlexBlock>
							<FlexBlock>
								<InputControl
									type="number"
									label="Tab Title Margin"
									onChange={(value) => setAttributes({ minorGap: value })}
									labelPosition="side"
									value={attributes.minorGap}
									suffix="px"
								/>

								<InputControl
									type="number"
									label="Tab Title Padding"
									onChange={(value) =>
										setAttributes({ tabTitlePadding: value })
									}
									labelPosition="side"
									value={attributes.tabTitlePadding}
									suffix="px"
								/>
							</FlexBlock>
							<FlexBlock>
								<PanelColorSettings
									title={__("Tab Colors")}
									initialOpen={true}
									colorSettings={tabColors}
								/>
							</FlexBlock>
						</Flex>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Tab Titles">
					<PanelRow>
						<InputControl
							type="number"
							label="Tab Content Padding"
							onChange={(value) => setAttributes({ tabContentPadding: value })}
							labelPosition="side"
							value={attributes.tabContentPadding}
							suffix="px"
						/>
						<InputControl
							type="number"
							label="Tab - Content Margin"
							onChange={(value) => {
								setAttributes({ majorGap: value });
							}}
							value={attributes.majorGap}
							labelPosition="side"
							suffix="px"
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
		</InspectorControls>
	);
};

export default Inspector;
