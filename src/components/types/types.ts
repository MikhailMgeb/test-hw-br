
export type statusesHeaderResponse = 'idle' | 'loading' | 'succeeded' | 'failed';

export type HeaderState = HeaderRequest & { status: statusesHeaderResponse, error: null | string | undefined };

export type CartProduct = {
    Id: number,
    Name: string,
    Description: string,
    Quantity: number;
    Unit: string;
    Сurrency: string;
    Price: number;
    DiscountedPrice: number;
    Images:
    {
        FileName: string;
        FileExtension: string;
        Image: string;
    }[]
}

export type InitialCartState = {
    products: CartProduct[];
    loading: boolean;
    error: null | undefined | string;
}

export type ProductDataId = {
    Id: number,
    UserGuid: string,
}

export type CreateProductPayload = Pick<ProductDataId, 'Id' | 'UserGuid'>;

export type HeaderRequest = {
    LogoImg: string;
    UsedGuid: string;
    UserName: string;
};
