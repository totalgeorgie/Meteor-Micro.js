Router.map(function() {
	this.route('postsList', {path: '/'});

	this.route('postPage', {
		path: '/posts/:_id',
		data: function() { return Posts.findOne(this.params._id); }
	});
});
