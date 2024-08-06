# E-commerce Product Browsing Application

## Description

This project is an e-commerce product browsing application that allows users to view a grid of products, filter and sort them, and navigate to detailed views of each product. The application fetches data dynamically from an API, ensuring that no hardcoded data is used. It is designed to enhance user experience and facilitate easy navigation and interaction.

## User Stories

The application fulfills the following user stories:

- **Grid Display**: As a user, I see a grid of cards displaying products.
- **Product Image**: As a user, I see an image of the product when browsing.
- **Product Title**: As a user, I see the title of the product when browsing.
- **Product Price**: As a user, I see the price of the product when browsing.
- **Product Category**: As a user, I see the category that the product belongs to when browsing.
- **Navigation to Detail**: As a user, I am able to navigate to a detailed view of the product (navigation only).
- **Detail Page Title**: As a user, I can see the title of the product in the detailed product page.
- **Detail Page Description**: As a user, I can see the description of the product in the detailed product page.
- **Detail Page Image**: As a user, I can see an image of the product in the detailed product page.
- **Detail Page Price**: As a user, I can see the price of the product in the detailed product page.
- **Detail Page Category**: As a user, I can see the category of the product in the detailed product page.
- **Detail Page Reviews**: As a user, I can see the rating & number of reviews for the product in the detailed product page.
- **Back Navigation**: As a user, I am able to go back to the products grid/list page from a detailed product view.
- **Data Loading**: All shop data is loaded via a fetch call from the API (Note: no shop data should be hardcoded in the application).
- **Individual Product Loading**: When viewing a specific product, data is loaded via fetch from an individual product endpoint.
- **Loading States**: There is a loading state while initial data is being loaded.
- **Loading New Data**: There is a loading state while new data is being loaded.
- **Category Filtering**: As a user, I am able to filter products by category (categories fetched from the API).
- **Price Sorting**: As a user, I am able to sort products by lowest & highest price (both required).
- **Default Reset**: As a user, I am able to go back to default filtering and sorting without refreshing the app (both required).
- **State Persistence**: As a user, I should still see my applied filters and sorting after navigating to a detailed view and returning to the home page (do not use local storage for this).

## Technologies Used

- **Vue.js**: For building the user interface.
- **Axios**: For making API calls to fetch product data.
- **Vue Router**: For navigating between product listings and detailed product views.
- **Tailwind**: For styling the application.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run serve
   ```
   Open your browser and go to `http://localhost:5173`.

## Lessons Learned

- **Dynamic Data Handling**: Working with dynamic data fetched from APIs taught me how to manage state effectively, especially when it comes to loading states and error handling.
- **User Experience**: Prioritizing user experience by implementing loading states and clear navigation paths improved the overall usability of the application.
- **Component Reusability**: Building reusable components for products and filters helped maintain cleaner code and made the application easier to scale.

## Problems Encountered

- **API Integration**: Initially faced challenges with API integration, specifically with handling asynchronous data fetching and ensuring that the UI updated correctly once data was received.
- **State Management**: Managing state effectively when navigating between product lists and detailed views was tricky. I had to implement solutions to ensure that users retained their filters and sorting preferences without using local storage.
- **Responsive Design**: Ensuring the grid layout was responsive across different screen sizes required additional CSS adjustments and testing.

## Future Improvements

- **Enhanced Filtering Options**: Implement more advanced filtering options, such as price ranges and multi-category selections.
- **User Authentication**: Implement user authentication to allow users to save their favorite products or reviews.
- **Search Functionality**: Add a search feature to allow users to find products by name or description quickly.

## Conclusion

This project has been a valuable learning experience in building dynamic web applications with Vue.js. By focusing on user stories and experiences, I was able to create a functional and visually appealing e-commerce platform. I look forward to further enhancing the application with new features and improvements.

