export const typeDefs = `
type Post {
   id: ID!                // "!" denotes a required field
   title: String
}

type Query {
   posts: [Post]    // "[]" means this is a list of channels
}
`;
