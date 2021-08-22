export class User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email?: string | null;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    email: string | null | undefined,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
}

export class Post {
  id: number;
  authorId: number;
  title: string;
  body: string;
  published: boolean;
  views: number | null | Error;

  constructor(
    id: number,
    authorId: number,
    title: string,
    body: string,
    published: boolean,
    views: number | Error | null,
  ) {
    this.id = id;
    this.authorId = authorId;
    this.title = title;
    this.body = body;
    this.published = published;
    this.views = views;
  }
}

// Mock database tables
const posts = new Map();
const users = new Map();

// Seed initial posts
posts.set(1, new Post(1, 1, 'First post', 'Lorem Ipsum...', true, 100));
posts.set(2, new Post(2, 2, 'Second post', 'Lorem Ipsum...', false, 0));

// Seed initial users
users.set(1, new User(1, 'Alice', 'Foo', 38, null));
users.set(2, new User(2, 'Bob', 'Bar', 27, null));

// Export the seeded tables
const database = {
  posts,
  users,
};

export default database;
