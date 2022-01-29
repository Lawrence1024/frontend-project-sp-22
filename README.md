# WDB SP'22 Frontend Project - Duck Fashion Show

Welcome to WDB's frontend project for development branch applicants 👋

Make sure you read these instructions carefully before you start. If you have any questions please reach out to webatberkeley@gmail.com.

The goal of this exercise is to create a simple app that;

- builds and compiles your code locally
- can be viewed at `localhost` using a local web server
- meets the requirements listed below.

If you have any comments or feedback please include it in the `submission.md` file. This is your chance to tell us what you thought about the exercise and any ideas or issues you may have had. It's a good way for us to get to know you and your process. We want to hear from you!

_Happy coding and good luck!_

<br />

---

<br />

## Setup

We'll be using Figma to relay how the final product should look and behave. The Figma link can be found [here](https://www.figma.com/file/SILn3ZZ9NYpQTTyOlYdb4Q/%5BSP-'22-Frontend-Project%5D?node-id=0%3A1)

If you are unable to use Figma or have errors dealing with it, we have attached some images of what the final product should look like in the figma-images folder.

For this project, we're expecting you to use a frontend framework, including but not limited to: React.js, Angular, Vue.js. React is preferred. The framework you use is up to your discretion and your choice will not impact our decision. If you haven't worked with these technologies or another popular frontend framework in the past, our "Introduction to Fullstack Development" DeCal might be more fitting for you. If this is the case, email us at webatberkeley@gmail.com for next steps.

<br />

---

<br />

## The project

This project will be creating a website for a series C funded Duck Fashion Show, where ducks from all over the world travel to compete in categories like fluffiness, webbing thickness, swagger, and more! The website you make must be capable of displaying a list of scores from `Data.json`, and optionally, a list of album photos from a REST API (more details below). This project is meant to be on the lighter side.

<br />

---

### **Project overview**

Please create a replica of the design provided (viewable through Figma or the images in the figma-images folder), and use the data provided in Data.json.

#### General

**Requirements:**

- Use a navigation package or create an API to handle navigating to pages and listings - anything is fine as long as navigation isn't hard coded for each page.
- Your website does not need to be responsive, and it should be built for a laptop or generic monitor.
- DO NOT manually input or display review data i.e. do not hard code anything.
- DO NOT edit the `Data.json` file in any way

**Additional Details:**

- Feel free to use UI libraries (Bootstrap, Material Design, Chakra, etc...), or any CSS pre-processors (SASS, LESS, etc...). If you do not know what these are, no worries! There is no penalty for not using these tools.
- Feel free to change around the file structure as much as you want.
- Feel free to use any outside packages.
- If you copy code from an outside source that's fine, but please include the source as a comment.
- If the instructions seem ambiguous, that's on purpose! We want you to make as many decisions on your own as possible.

**Bonus Points:**

- Neat, modular code.
- Scalable code.
- Commented code (not excessive).

#### Home Page
Simple home page with some banner text

#### Voting
Four simple cards with titles and images. The buttons should update the vote counts for each of the respective ducks, as an exercise in state management.

#### Past Winners
Text on the left, display score explanations from `data.json` on the right. Note that these cards are expandable, first each card should just show the name, year, and vote count, then clicking it should expand to show the outfit description.

#### Photo Album (Extra Credit)
Fetch and display the first 24 photos from [this API endpoint](https://jsonplaceholder.typicode.com/photos). Feel free to use whatever library you'd like, however, you **must encapsulate all fetching logic in a custom hook**. While fetching, show some sort of loading state (this can be a spinner or pure text).

All images required to create the replica are provided in the img folder.

**Notes**

- If you're unsure whether you're allowed to use a certain tool, go for it - we truly don't care - in fact, usage of outside tools is reflective of what you might be doing as a WDB developer as we highly encourage microservice architectures and writing as little code as possible.
- If you are unsure about spacing, distances, etc... feel free to eyeball it. We will not be answering questions relating to the details of the design, and instead, use your discretion. We will be looking more for functionality than a pixel-perfect replica of the design.

<br />

---

<br />

## How to Submit

Take a look at the `submission.md` file before submitting. If you deviated from the instructions or have any feedback, that's the place to put it!

To submit your project, please place your submission into a GitHub repo that is set to private. You will be submitting your code on [Gradescope](https://www.gradescope.com/). If you do not have a Gradescope account, please create one and if you are unable to create one, please email us immediately. The Gradescope course code is `YV5D4N`. You will see two different assignments: `Frontend Technical Project` and `Backend Techinical Project`. _Please only submit to Frontend Technical Project._ You can ignore Backend Technical Project.

The technical project will be due at 11:59 pm PST on Wednesday, Febuary 2nd. We will be doing technical office hours in the days leading up to the deadline, so if you have any questions about the project, please ask there or reach out to us at webatberkeley@gmail.com. 

<br />

---

<br />

## FAQs

### **When is the assessment due?**

Please submit your exercise by 11:59pm PST on Wednesday, Febuary 2nd.

### **Which browsers should I support?**

We'll look for compatibility with the following browsers:

- **Google Chrome** (latest version)
 
### **What color values should I use?**

The exact color values don't matter; just try to get as close to the mockup as you can. You should be able to view them on the Figma, or you can use a Chrome extension such as <a href="https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en" target="_blank">this color-picker</a>.
