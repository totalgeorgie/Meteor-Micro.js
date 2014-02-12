if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Developing Web Applications with Meteor',
		author: 'George Ashworth',
		url: 'http://georgeashworth.com'
	});

	Posts.insert({
		title: 'Last Train to Value Town',
		author: 'Kenney Jackson',
		url: 'http://hearthstone.com'
	});

	Posts.insert({
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	});
}
