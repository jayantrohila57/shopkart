# ShopKart

This `README.md` provides documentation for the web API functions in this project.

#### Deployment:

- Vercel for frontend and Backend
- MongoDb Atlas for database
- Deployed Link : https://shopkart-project.vercel.app
- Github repo: https://github.com/jayantrohila57/shopkart

#### Frontend:

- Next.js for React, React-Router.
- Typescript, Eslint, prettier for best practices and code organization.
- TailwindCSS for CSS.
- Github for version control.

#### Backend:

- Next.js inbuild node.js for server
- Next.js API folder for route and api
- Mongodb for database
- Typescript, Eslint, prettier for best practices and code organization.

## Installation

#### Set up the project locally.

The run the command in the integrated terminal inside the code editor.

1.  Install npm packages after clone first.

```bash
pnpm install
```

2. Add `.env.local` your project using the below keys.

```
NEXT_PUBLIC_MONGODB_URI=mongodb+srv://jrohila55:lm1Uzv0SqxIMAuiO@shopkrtdb.6nezayt.mongodb.net/?retryWrites=true&w=majority

NEXT_PUBLIC_MONGODB_DB=shopkrtdb

NEXT_PUBLIC_URL=http://localhost:3000

```

3. Run your project using the below command.

```bash
pnpm dev
```

- Frontend will be running on http://localhost:3000

- API can be accessed using http://localhost:3000/api

## Routes, Methods, and Payloads

Here, we provide detailed information on the available routes, HTTP methods, and payload structures for each API function.

### Fetching Product List

- **Route:** `/api/product`
- **HTTP Method:** `GET`
- **Description:** This function is used to fetch a list of products from the API.

### Fetching Cart Data

- **Route:** `/api/cart`
- **HTTP Method:** `GET`
- **Description:** Use this function to retrieve cart data from the API.

### Refetch Cart Data

- **Route:** `/api/cart`
- **HTTP Method:** `GET`
- **Description:** This function is equivalent to `getCartData` and can be used to refresh cart data.

### Fetching Product by ID

- **Route:** `/api/product/{_id}`
- **HTTP Method:** `GET`
- **Description:** This function fetches product data by its ID.

### Deleting a Product from the Cart

- **Route:** `/api/cart`
- **HTTP Method:** `DELETE`
- **Description:** Use this function to delete a product from the cart.
- **Payload:** `{ _id: string, productId: string }`

### Adding a Product to the Cart

- **Route:** `/api/cart`
- **HTTP Method:** `PUT`
- **Description:** This function adds a product to the cart with the specified details.
- **Payload:** `{ _id: string, product: string, quantity: number }`

### Decreasing Product Quantity

- **Route:** `/api/cart`
- **HTTP Method:** `PUT`
- **Description:** This function is used to decrease the quantity of a product in the cart.
- **Payload:** `{ _id: string, product: string, quantity: number }`

### Increasing Product Quantity

- **Route:** `/api/cart`
- **HTTP Method:** `PUT`
- **Description:** This function increases the quantity of a product in the cart.
- **Payload:** `{ _id: string, product: string, quantity: number }`

## Configuration

Thses are ome configuration used in this project.

- .prettierignore
- .prettierrc.js
- .npmrc
- .editorconfig
- .eslintrc.js
- lint-staged.config.ts
- next.config.js
- tailwind.config.ts
