if (Meteor.isClient) {
  Template.clients.helpers({
    clients: function () {
      return Clients.find({});
    },
    projects: function() {
      return Projects.find({clientId: this._id});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
