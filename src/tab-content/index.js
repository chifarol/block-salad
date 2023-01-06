/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

import {
	InnerBlocks,
	useInnerBlocksProps,
	useBlockProps,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *

/**
 * Internal dependencies
 */
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
//tab-body block
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: function ({ attributes, clientId, setAttributes, context }) {
		context["block-salad/activeTab"] == attributes.index
			? setAttributes({ display: "block" })
			: setAttributes({ display: "none" });
		return (
			<div
				{...useBlockProps()}
				className={`block-salad-tab-content ${attributes.display}`}
			>
				<InnerBlocks template={[["core/paragraph", {}]]} />
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	save: function ({ attributes, setAttributes }) {
		return (
			<div
				{...useBlockProps.save()}
				className={`block-salad-tab-content ${attributes.display}`}
			>
				<InnerBlocks.Content />
			</div>
		);
	},
});
