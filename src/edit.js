/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import { useSelect } from '@wordpress/data';

const Edit = ({ attributes, setAttributes }) => {
	// Retrieve the link from the custom field
	const link = useSelect(select => {
			const meta = select('core/editor').getEditedPostAttribute('meta');
			return meta ? meta['artillery_mag_link'] : ''; // Return empty string if meta is undefined
	});

	// Update the block's link attribute when the custom field changes
	if (link !== attributes.link) {
    // Update the link attribute
    setAttributes({ link: link }); // Ensure that 'link' matches the attribute key in your block's attribute declaration
}

	return (
			<div>
					<p>Link from custom field: {link}</p>
					{/* You can add additional controls or UI elements here */}
			</div>
	);
};

export default Edit;

