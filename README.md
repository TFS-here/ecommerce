# eCommerce Application  

## Project Overview  
This is a full-stack eCommerce application that provides a seamless online shopping experience for users. The project includes a user-friendly frontend, a robust admin panel, and a secure backend, ensuring smooth functionality and management of the store.  

## Live Links  
- **Admin Panel**: [Admin Dashboard](https://ecommerce-admin-ashy-one.vercel.app/)  
- **Frontend**: [Customer Frontend](https://ecommerce-frontend-three-kohl.vercel.app/)  

## Features  

### Frontend  
- **Home Page**: Displaying latest collections and best sellers.  
- **Search Functionality**: Users can search for products by name or category.  
- **Product Listing**: Browse a wide range of products with details like price and description.  
- **Shopping Cart**: Add, update, or delete products in the cart.  
- **Payment Options**: Supports Cash on Delivery (COD), SSLCommerz, and Stripe payment methods.  
- **Responsive Design**: Built with React.js and Tailwind CSS for a modern, responsive UI.  

### Admin Panel  
- **Product Management**: Add, delete, and update product details.  
- **Order Management**: View and track customer orders.  
- **Dashboard**: Manage the entire store with ease.  

### Backend  
- **Database**: Products, orders, and user details are securely stored in MongoDB.  
- **API**: Built with Node.js and Express.js for efficient server-side processing.  
- **Authentication**: Secure user authentication and admin authorization.  

## Tech Stack  
- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js, MongoDB  
- **Payment Integration**: SSLCommerz, Stripe  

## Installation  

### Prerequisites  
Ensure you have the following installed:  
- Node.js  
- MongoDB  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone <repository-url>  
   cd ecommerce
   npm install  
   ```

2. Navigate to the `frontend` directory and install dependencies:  
   ```bash  
   cd frontend  
   npm install  
   ```  

3. Configure environment variables for the backend and frontend:  
   - Create a `.env` file in the backend directory and add the required API keys, database URI, and payment gateway credentials.  
   - Example for backend `.env`:  
     ```env  
     MONGO_URI=your_mongodb_connection_string  
     JWT_SECRET=your_jwt_secret_key  
     STRIPE_SECRET_KEY=your_stripe_secret_key  
     SSL_COMMERZ_STORE_ID=your_sslcommerz_store_id  
     SSL_COMMERZ_STORE_PASSWORD=your_sslcommerz_store_password  
     ```  

   - For the frontend, ensure the `.env` file contains the appropriate API base URLs and keys.  
     Example for frontend `.env`:  
     ```env  
     REACT_APP_API_URL=your_backend_api_url  
     ```  

4. Start the backend server:  
   ```bash  
   npm run server  
   ```  

5. Start the frontend development server:  
   ```bash  
   cd frontend  
   npm start  
   ```  

6. Open the application:  
   - Frontend: Visit `http://localhost:3000` in your browser.  
   - Backend: API will run on `http://localhost:5000` by default.  

## Contributions  
Contributions are welcome! Feel free to fork this repository and submit a pull request with improvements or bug fixes.  

## License  
This project is licensed under the MIT License.  

## Author  
**MD. TASNIM FERDOUS**  

- [GitHub](https://github.com/TFS-here)  
- [LinkedIn](https://www.linkedin.com/in/md-tasnim-ferdous-972429240/)

