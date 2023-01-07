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
	__experimentalNumberControl as NumberControl,
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
			label: __("Active Text Color")
		},
		{
			value: attributes.inactiveColor,
			onChange: (value) => setAttributes({ inactiveColor: value }),
			label: __("Inactive Text Color"),
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
									options={["Horizontal", "Vertical"].map((a) => ({
										value: __(a),
										label: a,
									}))}
									onChange={(value=>setAttributes({orientation:value}))}
									value={attributes.orientation}
									label="Orientation"
								/>
								<SelectControl
									options={["Tabbed", "Lined"].map((a) => ({
										value: __(a),
										label: a,
									}))}
									onChange={setTabStyle}
									value={attributes.tabStyle}
									label="Tab Style"
								/>
								

								{attributes.tabStyle === "Lined" && (<>
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
									<BorderControl
								value={{
									color: attributes.activeBorder.color || attributes.activeColor,
									style: attributes.activeBorder.style,
									width: attributes.activeBorder.width,
								}}
								enableAlpha={true}
								label="Active Liner"
								onChange={(value) => setAttributes({ activeBorder: value })}
							/>
								<BorderControl
								value={{
									color: attributes.inactiveBorder.color || attributes.inactiveColor,
									style: attributes.inactiveBorder.style,
									width: attributes.inactiveBorder.width,
								}}
								enableAlpha={true}
								label="Inactive Liner"
								onChange={(value) => setAttributes({ inactiveBorder: value })}
							/>
							</>
								)}
								<SelectControl
									options={[
										{ value: "flex-start", label: "Start" },
										{ value: "center", label: "Center" },
										{ value: "flex-end", label: "End" },
									]}
									onChange={setTabPosition}
									value={attributes.tabPosition}
									label="Justify: "
								/>
								<NumberControl
									suffix="px"
									onChange={(value=>setAttributes({tabTitleWidth:value}))}
									value={attributes.tabTitleWidth}
									label="Tab Title Width"
									labelPosition="top"
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
				<PanelBody title="More">
					<PanelRow>
						<Flex direction="column">
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
						</Flex>
					</PanelRow>
				</PanelBody>
			</Panel>
		</InspectorControls>
	);
};

export default Inspector;
