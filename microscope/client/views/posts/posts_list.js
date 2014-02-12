var postsData = [
	{
		title: 'Developing Web Applications with Meteor',
		author: 'George Ashworth',
		url: 'http://georgeashworth.com'
	},
	{
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});
