# ShopKart

#### Deployment:

- Vercel for frontend and Backend
- MongoDb Atlas for database
- Deployed Link : https://shopkart-project.vercel.app

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

.env.local

```
NEXT_PUBLIC_MONGODB_URI=mongodb+srv://jrohila55:lm1Uzv0SqxIMAuiO@shopkrtdb.6nezayt.mongodb.net/?retryWrites=true&w=majority
NEXT_PUBLIC_MONGODB_DB=shopkrtdb
```

## API Routes -

#### Connection Check

- route - `/api`
- method - `GET`
- response - `{"message": "Connected to database"}`

#### Get Cart Details

- route - `/api/cart`
- method - `GET`
- response - `{"message": ""}`

#### Add product to Cart

- route - `/api/cart`
- method - `POST`
- response - `{"message": ""}`

#### Get product list

- route - `/api/product`
- method - `GET`
- response -

```
{
 "message": "Total product available: 0",
  "success": true,
  "product": [
    {
      "name": "Top",
      "size": "S",
      "color": "White",
      "price": "$15.00",
      "image": "...",
      "quantity": 1
    },
    {...}
}
```

## Configuration

- .prettierignore
- .prettierrc.js
- .npmrc
- .editorconfig
- .eslintrc.js
- lint-staged.config.ts
- next.config.js
- tailwind.config.ts
