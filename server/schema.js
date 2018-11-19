const { 
  GraphQLObjectType, 
  GraphQLInt, 
  GraphQLBoolean, 
  GraphQLString, 
  GraphQLList, 
  GraphQLSchema 
} = require('graphql');

// Define your types here

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
     // Fields go here
  }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});