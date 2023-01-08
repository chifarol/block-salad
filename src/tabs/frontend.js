import "./frontend.scss";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Icon, check, plus, minus } from "@wordpress/icons";

const divsToUpdate = document.querySelectorAll(".block-salad-tabs-container");

divsToUpdate.forEach((div) => {
	let currentIndex = 0;
	const attributes = JSON.parse(div.dataset.attributes);
	const blockOrder = attributes.blockOrder;
	console.log("attributes", attributes);
	const tabTitles = div.querySelectorAll(".block-salad-tab-title");
	const innerBlocks = div.querySelectorAll(
		".block-salad-tab-content-container .block-salad-tab-content"
	);
	tabTitles.forEach((title, index) => {
		title.addEventListener("click", () => updateTabContent(index));
		title.style["cursor"] = `pointer`;
	});
	function tabTitleStyle(attributes, state, style) {
		style["padding"] = `${attributes.tabTitlePadding}px`;
		// style["cursor"]= `pointer`;

		switch (attributes.tabStyle) {
			case "Tabbed":
				if (state === "active") {
					style["backgroundColor"] = attributes.activeBGColor;
					style["color"] = attributes.activeColor;

					style["borderRadius"] = attributes.borderRadius;
					style["backgroundColor"] = attributes.activeBGColor;
					style["color"] = attributes.activeColor;
				} else {
					style["backgroundColor"] = attributes.inactiveBGColor;
					style["color"] = attributes.inactiveColor;
					return style;
				}
				break;
			case "Lined":
				if (state === "active") {
					const borderString = `${attributes.activeBorder.width} ${
						attributes.activeBorder.style
					} ${attributes.activeBorder.color || attributes.activeColor}`;
					style["borderRadius"] = attributes.borderRadius;
					style[`border${attributes.strokePosition}`] = borderString;
				} else {
					const borderString = `${attributes.inactiveBorder.width} ${
						attributes.inactiveBorder.style
					} ${attributes.inactiveBorder.color || attributes.inactiveColor}`;
					style[`border${attributes.strokePosition}`] = borderString;
				}
				break;

			default:
				break;
		}
	}
	const updateTabContent = (currentIndex) => {
		tabTitles.forEach((title, index) => {
			if (index == currentIndex) {
				tabTitleStyle(attributes, "active", title.style);
				console.dir(title.style);
			} else {
				tabTitleStyle(attributes, "inactive", title.style);
			}
		});
		let mainIndex = blockOrder.findIndex((index) => index === currentIndex);
		innerBlocks.forEach((innerBlock, index) => {
			if (mainIndex !== index) {
				innerBlock.style.display = "none";
			} else {
				innerBlock.style.display = "block";
			}
		});
	};
});
