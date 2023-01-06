import "./frontend.scss";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const divsToUpdate = document.querySelectorAll(".block-salad-tabs-container");

divsToUpdate.forEach((div) => {
	let currentIndex = 0;
	const attributes = JSON.parse(div.dataset.attributes);
	const tabTitles = div.querySelectorAll(".block-salad-tab-title");
	const innerBlocks = div.querySelectorAll(
		".block-salad-tab-content-container .block-salad-tab-content"
	);
	tabTitles.forEach((title, index) => {
		title.addEventListener("click", () => updateTabContent(index));
	});
	const updateTabContent = (currentIndex) => {
		innerBlocks.forEach((innerBlock, index) => {
			if (index !== currentIndex) {
				innerBlock.style.display = "none";
			} else {
				innerBlock.style.display = "block";
			}
		});
	};
});
