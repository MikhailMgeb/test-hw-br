
import type { HeaderRequest } from '../../components/types/Requests';

export type statusesHeaderResponse = 'idle' | 'loading' | 'succeeded' | 'failed';

export type InitialHeaderState = HeaderRequest & { status: statusesHeaderResponse, error: null | string | undefined };

export type RootState = {
    header: InitialHeaderState;
};

export type CartProduct = {
    Id: number,
    Name: string,
    Description: string,
    Quantity: number;
    Unit: string;
    Сurrency: string;
    Price: number;
    DiscountedPrice: number;
    Images: [
        {
            FileName: string;
            FileExtension: string;
            Image: string;
        }
    ]
}

export type InitialCartState = {
    products: CartProduct[];
    loading: boolean;
    error: null | undefined | string;
}

export type RootCartState = {
    cart: InitialCartState;
};
