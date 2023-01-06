/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType, createBlock } from "@wordpress/blocks";

import { compose } from "@wordpress/compose";
import { withSelect, withDispatch } from "@wordpress/data";
import { InnerBlocks, useInnerBLocksProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: compose([
		withSelect((select, ownProps) => {
			const { getBlock, getSelectedBlock } =
				select("core/block-editor") || select("core/editor");
			const { getBlockType } = select("core/blocks");
			return {
				block: getBlock(ownProps.clientId),
				selectedBlock: getSelectedBlock(),
				getBlock,
				getSelectedBlock,
				createBlock,
				getBlockType,
			};
		}),
		withDispatch((dispatch) => {
			const {
				updateBlockAttributes,
				insertBlock,
				removeBlock,
				moveBlockToPosition,
				selectBlock,
				insertBlocks,
				replaceInnerBlocks,
			} = dispatch("core/block-editor") || dispatch("core/editor");

			return {
				updateBlockAttributes,
				insertBlock,
				removeBlock,
				moveBlockToPosition,
				selectBlock,
				insertBlocks,
				replaceInnerBlocks,
			};
		}),
	])(Edit),

	/**
	 * @see ./save.js
	 */
	save,
});
