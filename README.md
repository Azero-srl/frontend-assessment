# React Skills Assessment

Welcome to Azero! This little exercise allows us to see how you handle a task.

We'll develop a couple of components from a Figma design and fill them with data coming from an API endpoint.

[Figma design we need to match](https://www.figma.com/file/yArz6JS1cYHLV43pXE22GS/Simple-ecommerce-free-figma-website-template-(Community)?type=design&node-id=2-157)

API endpoint: `https://dummyjson.com/posts?limit=4&skip=10&select=title,body,tags`

### Steps:

 - [ ] Design the single post component matching the design provided
     
     - The body of the post should be cut with ellipsis after 100 chars
     - The "read more" link will not point to anything
     - Use `https://api.lorem.space/image/dashboard?w=370&h=240` as src for the image

 - [ ] Use the component you designed to fill in the data returned by the API endpoint
     
     - Use the first element from `tags` of the post in the orange small section on top of the component
     - Keep the placeholder image and ignore it as the APIs do not provide one for the posts

> [!IMPORTANT]
>  - Clone this repo and submit your version by providing us with your own cloned repository link, to keep this exercise as neutral as possible PRs will not be accepted.
>  - Make sure to be as specific as possible with your commits, try to focus on readable and easily reviewable code. 
>  - The exercise can be done using either typescript of javascript, feel free to choose whatever you are more comfortable with.

> [!TIP]
> The use of [Tailwind CSS](https://tailwindcss.com/docs/guides/vite) and [Fortsource](https://fontsource.org/) would be appreciated but is not enforced. They have not been configured in the project, so you'd need to figure out how to integrate them considering this is a Vite based React project.

