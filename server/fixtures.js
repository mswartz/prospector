//This just adds sample data if the db is empty

if (Clients.find().count() === 0) {
  Clients.insert({
    name: 'Star Tribune',
    url: 'http://www.startribune.com',
    location: 'Minneapolis, MN',
  });

  Clients.insert({
    name: 'Boston Globe',
    url: 'http://www.bostonglobe.com',
    location: 'Boston, MA',
  });

  Clients.insert({
    name: 'ESPN',
    url: 'http://www.espn.com',
    location: 'Bristol, CT',
  });
}


//Add Project Data
if (Projects.find().count() === 0) {
  Projects.insert({
    name: 'Website redesign',
    budget: 300000,
    clientId: 'JX7RxRcaYxBRbDXND',
    clientName: 'Star Tribune',
    status: 'in-progress'
  });

  Projects.insert({
    name: 'Grantland Blogs',
    budget: 65000,
    clientId: 'JX7RxRcaYxBRbDXND',
    clientName: 'ESPN',
    status: 'rfp-received'
  });

  Projects.insert({
    name: 'TWS',
    budget: 150000,
    clientId: 'Fx3maxuYkFfaFtBdo',
    clientName: 'ESPN',
    status: 'waiting-reply'
  });

  Projects.insert({
    name: 'BostonGlobe.com',
    budget: 200000,
    clientId: 'WdX4R2cSYLEpbq9iu',
    clientName: 'Boston Globe',
    status: 'done'
  });
}
