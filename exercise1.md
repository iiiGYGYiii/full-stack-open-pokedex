# EXERCISE 1

Thinking in a monolithic JS app, we can implement linting with ESLINT library, the most popular to lint JS files.
Testing library will depend on libraries that our project use. I recommend to use Jest library, as its popularity
is growing fast, is long supported and contributions are constant. For building our app, Webpack is a good option,
since it's so popular, and receives updates constantly, nevertheless I'll choice ESBUILD as it's growing fine,
and I consider is easier to use.

Out there exists a lot of enterprises that offers CI/CD systems as a service, there are a lot of tradeoffs, but
while starting to develop main focus is it to be free. Unlike to GitHub Actions or Jenkins, other enterprises offers
its service with a monthly cost, such as CircleCI, GitLab, or Bamboo.

I think only information I need to decide if the system is gonna be self-hosted or cloud-based is that the developer
team works in one specific place, or the team is spread. My opinion is that cloud-based will be better as we can
get some kind of confidence that the system will be up anytime, and it can save and warn us in case some code
is bad.
