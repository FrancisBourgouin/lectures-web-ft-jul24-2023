# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


user1 = User.create(email:"bob@bob.com", name:"Bobby McBobby", password_digest:"1234")
user2 = User.create(email: "alice@alice.com", name: "Alice Smith", password_digest: "5678")
user3 = User.create(email: "charlie@charlie.com", name: "Charlie Brown", password_digest: "abcd")
user4 = User.create(email: "david@david.com", name: "David Johnson", password_digest: "efgh")


user1.urls.create(short_url:"qsqs913", long_url:"http://google.com", description:"A link to google")
user1.urls.create(short_url: "abc123", long_url: "http://example.com", description: "Example Website")
user1.urls.create(short_url: "xyz456", long_url: "http://example.org", description: "Another Example Website")
user1.urls.create(short_url: "123abc", long_url: "http://example.net", description: "Yet Another Example Website")
user1.urls.create(short_url: "789xyz", long_url: "http://example.org/page1", description: "Example Page 1")
user1.urls.create(short_url: "456def", long_url: "http://example.org/page2", description: "Example Page 2")


user2.urls.create(short_url: "url111", long_url: "http://example.com/1", description: "Example URL 1")
user2.urls.create(short_url: "url222", long_url: "http://example.com/2", description: "Example URL 2")
user3.urls.create(short_url: "url333", long_url: "http://example.com/3", description: "Example URL 3")
user4.urls.create(short_url: "url444", long_url: "http://example.com/4", description: "Example URL 4")
user4.urls.create(short_url: "url555", long_url: "http://example.com/5", description: "Example URL 5")
