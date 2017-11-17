module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
  	development: {
  		host: "localhost",
  		port: 22000,
  		network_id: "*"	// match any network id
  	},
  	nodefour: {
  		host: "localhost",
  		port: 22003,
  		network_id: "*"
  	},
  	nodeseven: {
  		host: "localhost",
  		port: 22006,
  		network_id: "*"
  	}
  }
};
