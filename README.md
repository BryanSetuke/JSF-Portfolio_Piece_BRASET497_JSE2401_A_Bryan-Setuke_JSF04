Here's an updated README file for your E-commerce Product Browsing Application, incorporating the new user stories and project details:

---

# E-commerce Product Browsing Application

## Description
This project is an e-commerce product browsing application that allows users to view a grid of products, filter and sort them, and navigate to detailed views of each product. The application dynamically fetches data from an API, ensuring a seamless and up-to-date browsing experience without any hardcoded data. It is designed with a strong focus on user experience, facilitating easy navigation and interaction.

## User Stories
The application fulfills the following user stories:

### Setup and Deployment
- **P4.1**: As a developer, I want the project to be deployed to a custom Vercel URL.
- **P4.2**: As a user, I see a custom icon in the tab window, with favicon information correctly added.
- **P4.3**: As a user, I see correctly configured meta tag information, including a custom image for the app.

### UI/UX
- **P4.4**: As a user, I see a grid of cards displaying products.
- **P4.5**: As a user, I see an image of the product when browsing.
- **P4.6**: As a user, I see the title of the product when browsing.
- **P4.7**: As a user, I see the price of the product when browsing.
- **P4.8**: As a user, I see the category that the product belongs to when browsing.
- **P4.9**: As a user, I am able to navigate to a detailed view of the product (navigation only).
- **P4.10**: As a user, I can see the title of the product on the detailed product page.
- **P4.11**: As a user, I can see the description of the product on the detailed product page.
- **P4.12**: As a user, I can see an image of the product on the detailed product page.
- **P4.13**: As a user, I can see the price of the product on the detailed product page.
- **P4.14**: As a user, I can see the category of the product on the detailed product page.
- **P4.15**: As a user, I can see the rating and number of reviews for the product on the detailed product page.
- **P4.16**: As a user, I am able to go back to the products grid/list page from a detailed product view.

### Data Fetching and State Management
- **P4.17**: All shop data is loaded via a fetch call from the API (no hardcoded shop data).
- **P4.18**: When viewing a specific product, data is loaded via fetch from an individual product endpoint.
- **P4.19**: There is a loading state while the initial data is being loaded.
- **P4.20**: There is a loading state while new data is being loaded.

### User Interaction
- **P4.21**: As a user, I am able to filter products by category (categories fetched from the API).
- **P4.22**: As a user, I am able to sort products by the lowest and highest price.
- **P4.23**: As a user, I am able to reset filtering and sorting to default settings without refreshing the app.
- **P4.24**: As a user, I should still see my applied filters and sorting after navigating to a detailed view and returning to the home page (no local storage usage).

### Logging In
- **P4.25**: As a developer, I can log in any user from the fakestoreapi via the `/auth/login` endpoint.
- **P4.26**: As a user, my password is hidden while typing, with an option to toggle visibility.
- **P4.27**: As a developer, I ensure that users cannot submit empty username and password fields.
- **P4.28**: As a developer, I notify the user while waiting for the server to authenticate them.
- **P4.29**: As a developer, I notify the user if their login attempt fails.
- **P4.30**: As a user, I am redirected to the page I was trying to access after successfully logging in (only protected views require login).
- **P4.31**: As a user, I see an option to log out after successfully logging in.
- **P4.32**: As a developer, I store the user's JWT in local storage for persistent authentication.
- **P4.33**: As a developer, I clear the user's JWT from local storage upon logging out.

### Shopping Cart (Protected View)
- **P4.34**: As a logged-in user, I can add products to my shopping cart (using userId decoded from JWT).
- **P4.35**: As a developer, I ensure that the user's shopping cart is persistent in local storage.
- **P4.36**: As a developer, I protect the shopping cart view so that it is only accessible to logged-in users.
- **P4.37**: As a logged-in user, I can view all products in my shopping cart.
- **P4.38**: As a logged-in user, I can update quantities and remove items in my shopping cart.
- **P4.39**: As a logged-in user, I can clear my cart at once.
- **P4.40**: As a logged-in user, I can see the number of items in my shopping cart from any view in the app, with auto-updates.
- **P4.41**: As a logged-in user, I can see the total cost of items in my shopping cart, updating with changes.
- **P4.42**: As a developer, I must decide how to handle multiple additions of the same cart items.

### Comparison List (Protected View)
- **P4.43**: As a logged-in user, I want to add items to my comparison list.
- **P4.44**: As a developer, I must protect the comparison page so it is only accessible to logged-in users.
- **P4.45**: As a logged-in user, I want to access a comparison page where I can compare the products I have added.
- **P4.46**: As a logged-in user, I want to remove an item from my comparison list.
- **P4.47**: As a developer, I must present items in the comparison page in a table format for side-by-side comparison.
- **P4.48**: As a developer, I must limit the number of items that can be added to the comparison list to prevent overcrowding.

## Technologies Used
- **Vue.js**: For building the user interface.
- **Axios**: For making API calls to fetch product data.
- **Vue Router**: For navigating between product listings and detailed product views.
- **Tailwind CSS**: For styling the application.
- **Vercel**: For deployment.
- **JWT**: For handling authentication.

## Getting Started
### Clone the Repository:
```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
```
### Install Dependencies:
```bash
npm install
```
### Run the Application:
```bash
npm run serve
```
Open your browser and go to `http://localhost:5173`.

## Lessons Learned
- **Dynamic Data Handling**: Managing state effectively with dynamically fetched data, including loading states and error handling.
- **User Experience**: Implementing loading states and clear navigation paths to enhance overall usability.
- **Component Reusability**: Building reusable components for products and filters to maintain cleaner code and scalability.

## Problems Encountered
- **API Integration**: Challenges with asynchronous data fetching and ensuring UI updates correctly upon data receipt.
- **State Management**: Managing state between product lists and detailed views while retaining filters and sorting preferences.
- **Responsive Design**: Adjusting the grid layout to be responsive across various screen sizes required additional CSS and testing.

## Future Improvements
- **Enhanced Filtering Options**: Implement more advanced filtering, such as price ranges and multi-category selections.
- **User Authentication**: Implement user authentication to allow users to save favorite products or reviews.
- **Search Functionality**: Add a search feature to allow users to quickly find products by name or description.

## Conclusion
This project has been a valuable learning experience in building dynamic web applications with Vue.js. By focusing on user stories and experiences, I was able to create a functional and visually appealing e-commerce platform. I look forward to further enhancing the application with new features and improvements.

## Video link for the presentation [ https://youtu.be/LQhCpgCEqQA ]