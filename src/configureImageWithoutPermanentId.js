define([
	'fontoxml-families/configureAsImageInFrame',
	'fontoxml-families/configureAsInlineImageInFrame'
], function (
	configureAsImageInFrame,
	configureAsInlineImageInFrame
) {
	'use strict';

	// This file removes the permanentId which is the other way around then for cross reference,
	// for compatability reasons.
	return function configureImageWithoutPermanentId (sxModule) {
		// To disable permanentId's in images (also known as the reference pipeline), set
		// isPermanentId to false.

		configureAsImageInFrame(sxModule, 'self::image', undefined, {
			priority: 2,
			referenceQuery: '@href',
			isPermanentId: false
		});

		configureAsInlineImageInFrame(sxModule, 'self::image and fonto:in-inline-layout(.)', undefined, {
			priority: 2,
			referenceQuery: '@href',
			isPermanentId: false
		});
	};
});
