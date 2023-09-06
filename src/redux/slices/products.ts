/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService"; // Import your product service

interface IState {
  products: any[];
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  products: [],
  loading: false,
  error: null,
};

// get
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    try {
      const response = await ProductService.getAllProducts(); 
      return response.data.products; 
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);

// search
export const searchProducts = createAsyncThunk(
  "products/search",
  async (search: string) => {
    try {
      const response = await ProductService.searchProduct(search); 
      return response.data.products; 
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);

// post
export const createProduct = createAsyncThunk(
  "products/create",
  async (productData: unknown) => {
    try {
      const response = await ProductService.createProduct(productData); 
      return response.data; 
    } catch (error) {
      throw new Error("Failed to create a product");
    }
  }
);

// edit
export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, data }: { id: string; data: unknown }) => {
    try {
      const response = await ProductService.updateProduct({id, data});
      return response.data;
    } catch (error) {
      throw new Error("Failed to update product");
    }
  }
);

// delete
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: string) => {
    try {
      await ProductService.deleteProduct(id);
      return id;
    } catch (error) {
      throw new Error("Failed to delete product");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<unknown[]>) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
      state.products = [];
      state.error = 'Failed to get products.';
    });

    // search
    builder.addCase(searchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(searchProducts.fulfilled, (state, action: PayloadAction<unknown[]>) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(searchProducts.rejected, (state) => {
      state.loading = false;
      state.products = [];
      state.error = 'Failed to search products.';
    });

    // post
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createProduct.fulfilled, (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.products = [...state.products, action.payload]; 
      state.error = null;
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to create product.';
    });

    // update
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProduct.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      const updatedProduct = action.payload;
    
      const index = state.products.findIndex((p: any) => p.id === updatedProduct.id);
    
      if (index !== -1) {
        state.products[index] = {
          ...state.products[index],
          ...updatedProduct.values,
        };
      }
      state.error = null;
    });
    builder.addCase(updateProduct.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to update product.';
    });

    // delete
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.products = state.products.filter((product: any) => product.id !== action.payload);
      state.error = null;
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to delete product.';
    });
  },
});

export default productSlice.reducer;