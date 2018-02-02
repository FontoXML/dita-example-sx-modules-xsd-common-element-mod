define([
	'fontoxml-families/configureAsInlineLink',
	'fontoxml-families/configureProperties'
], function (
	configureAsInlineLink,
	configureProperties
) {
	'use strict';

	return function configureXrefToUsePermanentId (sxModule) {
		// To enable permanentId's in cross references (also known as the reference pipeline), reconfigure the attribute
		// name that is expected to contain the permanentId, and set popoverData.targetIsPermanent to TRUE.

		configureAsInlineLink(sxModule, 'self::xref', undefined, 'href', {
			priority: 2,
			popoverData: {
				editOperationName: ':contextual-edit-xref[@format=dita]',
				targetIsPermanentId: true,
				targetQuery: '@href'
			}
		});

		configureProperties(sxModule, 'self::xref[@format="html"]', {
			priority: 2,
			popoverData: {
				editOperationName: ':contextual-edit-xref[@format=html]',
				targetIsPermanentId: true,
				targetQuery: '@href'
			}
		});
	};
});